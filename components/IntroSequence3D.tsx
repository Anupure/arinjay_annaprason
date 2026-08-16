'use client';

import { useLayoutEffect, useRef, useMemo, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import styles from './IntroSequence3D.module.css';

import babyFingerUp from '../images/baby/finger_up.png';
import babyLook from '../images/baby/look.png';
import babySophisticated from '../images/baby/sophesticated.png';
import babySmiling from '../images/baby/baby_smiling.png';
import balloonImg from '../images/baby/balloon.png';

interface IntroSequence3DProps {
  onComplete?: () => void;
}

/* ──────────────────────────────────────────────
   Mandala — procedurally generated with growth
   animation. Builds from center outward in stages.
   Uses declarative JSX rendering (R3F idiomatic).
   ────────────────────────────────────────────── */
function Mandala() {
  const groupRef = useRef<THREE.Group>(null!);

  // Generate all mandala element descriptors (no meshes, just data)
  const elements = useMemo(() => {
    const elems: {
      key: string;
      type: 'ring' | 'petal' | 'radial' | 'center' | 'dot' | 'diamond' | 'leaf';
      geometry: THREE.BufferGeometry;
      position: [number, number, number];
      rotation: [number, number, number];
      scale: [number, number, number];
      color: string;
      drawStart: number; // 0-1 progress when this element starts appearing
      drawDuration: number; // how long the draw takes
    }[] = [];

    // Center dot
    elems.push({
      key: 'center',
      type: 'center',
      geometry: new THREE.RingGeometry(0, 0.4, 32),
      position: [0, 0, 0.01],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
      color: '#FFF8F3',
      drawStart: 0,
      drawDuration: 0.5,
    });

    // Inner lotus petals (4 large) — gold
    for (let i = 0; i < 4; i++) {
      const angle = (i / 4) * Math.PI * 2;
      elems.push({
        key: `petal-inner-${i}`,
        type: 'petal',
        geometry: new THREE.RingGeometry(1.1, 1.6, 32),
        position: [Math.cos(angle) * 1.1, Math.sin(angle) * 1.1, 0],
        rotation: [0, 0, angle],
        scale: [1, 1, 1],
        color: '#dfbe6b',
        drawStart: 0.1 + (i / 4) * 0.3,
        drawDuration: 0.8,
      });
    }

    // Diamonds between inner petals — rose gold
    for (let i = 0; i < 4; i++) {
      const angle = (i / 4) * Math.PI * 2 + Math.PI / 4;
      elems.push({
        key: `diamond-${i}`,
        type: 'diamond',
        geometry: new THREE.RingGeometry(0.4, 0.65, 4),
        position: [Math.cos(angle) * 1.4, Math.sin(angle) * 1.4, 0],
        rotation: [0, 0, angle + Math.PI / 4],
        scale: [1, 1, 1],
        color: '#B76E79',
        drawStart: 0.25 + (i / 4) * 0.2,
        drawDuration: 0.6,
      });
    }

    // Inner ring — amber
    elems.push({
      key: 'ring-inner',
      type: 'ring',
      geometry: new THREE.RingGeometry(1.9, 2.1, 64),
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
      color: '#B89B5E',
      drawStart: 0.3,
      drawDuration: 0.6,
    });

    // Second ring — copper
    elems.push({
      key: 'ring-second',
      type: 'ring',
      geometry: new THREE.RingGeometry(3.1, 3.5, 40),
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
      color: '#CD7F32',
      drawStart: 0.4,
      drawDuration: 0.6,
    });

    // 8 inner petals — rose gold
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      elems.push({
        key: `petal-mid-${i}`,
        type: 'petal',
        geometry: new THREE.RingGeometry(1.75, 2.1, 32),
        position: [Math.cos(angle) * 2.7, Math.sin(angle) * 2.7, 0],
        rotation: [0, 0, angle],
        scale: [1, 1, 1],
        color: '#e68a98',
        drawStart: 0.5 + (i / 8) * 0.4,
        drawDuration: 0.7,
      });
    }

    // Radial lines (8) — bronze
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      elems.push({
        key: `radial-${i}`,
        type: 'radial',
        geometry: new THREE.PlaneGeometry(0.08, 3.8),
        position: [Math.cos(angle) * 4.4, Math.sin(angle) * 4.4, 0],
        rotation: [0, 0, angle],
        scale: [1, 1, 1],
        color: '#62add5',
        drawStart: 0.6 + (i / 8) * 0.3,
        drawDuration: 0.5,
      });
    }

    // Outer ring — deep gold
    elems.push({
      key: 'ring-outer',
      type: 'ring',
      geometry: new THREE.RingGeometry(3.4, 3.7, 36),
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
      color: '#cedf5d',
      drawStart: 0.7,
      drawDuration: 0.6,
    });

    // 8 outer petals — bright gold
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      elems.push({
        key: `petal-outer-${i}`,
        type: 'petal',
        geometry: new THREE.RingGeometry(2.7, 3.0, 25),
        position: [Math.cos(angle) * 4.4, Math.sin(angle) * 4.4, 0],
        rotation: [0, 0, angle],
        scale: [1, 1, 1],
        color: '#dbeb82',
        drawStart: 0.8 + (i / 8) * 0.3,
        drawDuration: 0.6,
      });
    }

    // Leaf shapes between outer petals — copper
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2 + Math.PI / 8;
      const leafShape = new THREE.Shape();
      leafShape.moveTo(0, 0);
      leafShape.bezierCurveTo(0.25, 0.75, 0.75, 1.25, 0, 1.5);
      leafShape.bezierCurveTo(-0.75, 1.25, -0.25, 0.75, 0, 0);
      elems.push({
        key: `leaf-${i}`,
        type: 'leaf',
        geometry: new THREE.ShapeGeometry(leafShape),
        position: [Math.cos(angle) * 4.6, Math.sin(angle) * 4.6, 0],
        rotation: [0, 0, angle],
        scale: [1.5, 1.5, 1],
        color: '#CD7F32',
        drawStart: 0.85 + (i / 8) * 0.2,
        drawDuration: 0.5,
      });
    }

    // Outer ring 2 — deep gold
    elems.push({
      key: 'ring-outer2',
      type: 'ring',
      geometry: new THREE.RingGeometry(3.1, 3.3, 35),
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
      color: '#C9A961',
      drawStart: 0.9,
      drawDuration: 0.6,
    });

    // Corner lotus dots (4) — bright gold
    for (let i = 0; i < 4; i++) {
      const angle = (i / 4) * Math.PI * 2;
      elems.push({
        key: `dot-${i}`,
        type: 'dot',
        geometry: new THREE.CircleGeometry(0.3, 16),
        position: [Math.cos(angle) * 6.0, Math.sin(angle) * 6.0, 0],
        rotation: [0, 0, 0],
        scale: [1, 1, 1],
        color: '#FFD700',
        drawStart: 0.95 + (i / 4) * 0.1,
        drawDuration: 0.4,
      });
    }

    return elems;
  }, []);

  // Animate growth
  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (groupRef.current) {
      // Subtle breathing
      const pulse = 1 + Math.sin(t * 0.4) * 0.01;
      groupRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <group ref={groupRef}>
      {elements.map((el) => (
        <MandalaElement key={el.key} element={el} />
      ))}
    </group>
  );
}

/* ──────────────────────────────────────────────
   Single mandala element — animates its own
   opacity and scale based on draw progress
   ────────────────────────────────────────────── */
function MandalaElement({
  element,
}: {
  element: {
    type: 'ring' | 'petal' | 'radial' | 'center' | 'dot' | 'diamond' | 'leaf';
    geometry: THREE.BufferGeometry;
    position: [number, number, number];
    rotation: [number, number, number];
    scale: [number, number, number];
    color: string;
    drawStart: number;
    drawDuration: number;
  };
}) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (!meshRef.current) return;
    const mat = meshRef.current.material as THREE.MeshBasicMaterial;

    // ── REVERSE (pop-out) phase: after images appear (~7.5s) ──
    // Elements disappear in REVERSE order of drawing:
    // outer elements (high drawStart) go first, center (drawStart 0) last.
    const reverseStart = 7.5 + (1 - element.drawStart) * 1.2;
    const reverseProgress = (t - reverseStart) / 0.8;

    if (reverseProgress > 0 && reverseProgress < 1) {
      mat.opacity = 1 - reverseProgress;
      meshRef.current.scale.setScalar(1 - reverseProgress * 0.7);
      return;
    } else if (reverseProgress >= 1) {
      mat.opacity = 0;
      meshRef.current.scale.setScalar(0.3);
      return;
    }

    // ── GROWTH phase: draw in from center outward ──
    const progress = (t - element.drawStart * 3) / (element.drawDuration * 3);
    if (progress > 0 && progress < 1) {
      mat.opacity = progress;
      meshRef.current.scale.setScalar(0.3 + progress * 0.7);
    } else if (progress >= 1) {
      mat.opacity = 1;
      meshRef.current.scale.setScalar(1);
    } else {
      mat.opacity = 0;
      meshRef.current.scale.setScalar(0.3);
    }
  });

  return (
    <mesh
      ref={meshRef}
      geometry={element.geometry}
      position={element.position}
      rotation={element.rotation}
      scale={element.scale}
    >
      <meshBasicMaterial
        color={element.color}
        transparent
        opacity={0}
        depthWrite={false}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

/* ──────────────────────────────────────────────
   Floating image sprites arranged in a circle
   outside the mandala. Each image has its own
   circular border (border-radius effect).
   Images pop in AFTER the name appears (~5.5s).
   ────────────────────────────────────────────── */
function FloatingImages() {
  const groupRef = useRef<THREE.Group>(null!);
  const textures = useTexture([
    babyFingerUp.src,
    babyLook.src,
    babySophisticated.src,
    babySmiling.src,
    balloonImg.src,
  ]);

  // Ensure textures render with correct colors (no washed-out haze)
  useMemo(() => {
    textures.forEach((tex) => {
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = 8;
      tex.needsUpdate = true;
    });
  }, [textures]);

  const positions = useMemo(() => {
    const arr = [];
    const radius = 9; // Closer to center — balanced position
    for (let i = 0; i < 5; i++) {
      const angle = (i / 5) * Math.PI * 2;
      arr.push({
        angle,
        radius: radius,
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        z: 0,
        scale: 1, // Base scale — group scale animates the pop
        drift: Math.random() * 0.3 + 0.1,
      });
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (groupRef.current) {
      groupRef.current.children.forEach((child, i) => {
        const p = positions[i];
        if (!p) return; // Guard: only animate the 5 image groups

        // Each child is a group containing [ring mesh, sprite]
        const sprite = child.children[1] as THREE.Sprite;
        if (!sprite) return;

        // Images pop in AFTER the name appears (~5.5s)
        const popStart = 5.5 + i * 0.15;
        const popProgress = (t - popStart) / 0.6;
        if (popProgress > 0 && popProgress < 1) {
          const mat = sprite.material as THREE.SpriteMaterial;
          mat.opacity = popProgress;
          // Animate ONLY the group scale (ring + sprite scale together)
          child.scale.setScalar(0.3 + popProgress * 0.7);
        } else if (popProgress >= 1) {
          const mat = sprite.material as THREE.SpriteMaterial;
          mat.opacity = 1;
          child.scale.setScalar(1);
        } else {
          const mat = sprite.material as THREE.SpriteMaterial;
          mat.opacity = 0;
          child.scale.setScalar(0.3);
        }

        // Gentle drift after appearing
        child.position.x = p.x + Math.sin(clock.elapsedTime * p.drift) * 0.15;
        child.position.y = p.y + Math.cos(clock.elapsedTime * p.drift * 0.7) * 0.1;
        child.rotation.z = Math.sin(clock.elapsedTime * 0.3 + i) * 0.1;
      });
    }
  });

  return (
    <group>
      {/* Baby photos as sprites, each with its own circular border */}
      <group ref={groupRef}>
        {textures.map((tex, i) => (
          <group key={i} position={[positions[i].x, positions[i].y, positions[i].z]} scale={0.3}>
            {/* Circular border (thin gold ring) behind each image — radius unchanged */}
            <mesh position={[0, 0, -0.3]}>
              <ringGeometry args={[1.9, 2.0, 48]} />
              <meshBasicMaterial
                color="#DAA520"
                transparent
                opacity={0.9}
                depthWrite={false}
                side={THREE.DoubleSide}
              />
            </mesh>

            {/* Image sprite — crisp, no haze */}
            <sprite
              scale={[2.8, 2.8, 1]}
              material={new THREE.SpriteMaterial({
                map: tex,
                transparent: true,
                opacity: 0,
                depthWrite: false,
                depthTest: true,
                premultipliedAlpha: false,
                alphaTest: 0.01,
              })}
            />
          </group>
        ))}
      </group>
    </group>
  );
}

/* ──────────────────────────────────────────────
   Particle sparkles
   ────────────────────────────────────────────── */
function Sparkles() {
  const count = 120;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 6 + Math.random() * 2;
      const angle = Math.random() * Math.PI * 2;
      arr[i * 3] = Math.cos(angle) * radius;
      arr[i * 3 + 1] = Math.sin(angle) * radius;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    return arr;
  }, [count]);

  const ref = useRef<THREE.Points>(null!);

  useFrame(({ clock }) => {
    if (ref.current) {
      const time = clock.elapsedTime;
      const posAttr = ref.current.geometry.getAttribute('position');
      for (let i = 0; i < count; i++) {
        posAttr.setZ(i, Math.sin(time + i) * 0.6);
      }
      posAttr.needsUpdate = true;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        sizeAttenuation={true}
        color="#DAA520"
        transparent
        opacity={0.9}
        depthWrite={false}
      />
    </points>
  );
}

/* ──────────────────────────────────────────────
   Scene: camera, lights, and all sub-components
   ────────────────────────────────────────────── */
function IntroScene() {
  const { camera } = useThree();

  useLayoutEffect(() => {
    // Mobile (pixel width < 500): push camera far back.
    // Desktop: keep camera at 18.
    const pxWidth = window.innerWidth;
    const camZ = pxWidth < 500 ? 50 : 22;
    camera.position.set(0, 0, camZ);
    camera.updateProjectionMatrix();
  }, [camera]);

  return (
    <>
      <color attach="background" args={['#FFF8F3']} />
      <ambientLight intensity={0.1} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1}
        color="#FFF8F3"
      />
      <pointLight
        position={[-5, -5, 8]}
        intensity={0.8}
        color="#CD7F32"
        decay={2}
        distance={30}
      />
      <pointLight
        position={[5, 5, 8]}
        intensity={0.6}
        color="#B76E79"
        decay={2}
        distance={30}
      />

      <Mandala />
      <FloatingImages />
      <Sparkles />
    </>
  );
}

/* ──────────────────────────────────────────────
   Main component
   ────────────────────────────────────────────── */
export default function IntroSequence3D({ onComplete }: IntroSequence3DProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const [showCanvas, setShowCanvas] = useState(false);
  const [visible, setVisible] = useState(true);

  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useLayoutEffect(() => {
    // Delay canvas mount for smooth fade-in
    const showTimer = setTimeout(() => setShowCanvas(true), 50);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power2.out' },
        onComplete: () => {
          // Hide the intro from DOM after fade-out completes
          setVisible(false);
          onCompleteRef.current?.();
        },
      });

      // Fade in the whole intro
      gsap.set(rootRef.current, { opacity: 0 });
      tl.to(rootRef.current, { opacity: 1, duration: 1.5, ease: 'sine.out' });

      // After 9.5s, fade out (art pops out ~7.5-8.7s, then fade)
      tl.to(
        rootRef.current,
        {
          opacity: 0,
          duration: 1.5,
          ease: 'sine.inOut',
        },
        9.5
      );
    }, rootRef);

    return () => {
      clearTimeout(showTimer);
      ctx.revert();
    };
  }, []);

  if (!visible) return null;

  return (
    <section
      ref={rootRef}
      className={styles.wrapper}
      aria-label="Arinjay's Annaprashon introduction"
    >
      {showCanvas && (
        <div ref={canvasRef} className={styles.canvasContainer}>
          <Canvas
            camera={{ position: [0, 0, 18], fov: 50 }}
            gl={{ antialias: true, alpha: true }}
            dpr={[1, 2]}
          >
            <IntroScene />
          </Canvas>
        </div>
      )}

      {/* Overlay HTML title for guaranteed Bengali rendering */}
      <div className={styles.titleOverlay}>
        <h1 className={styles.title}>অরিঞ্জয়ের শুভ অন্নপ্রাশন</h1>
        <div className={styles.divider} aria-hidden="true" />
      </div>
    </section>
  );
}
