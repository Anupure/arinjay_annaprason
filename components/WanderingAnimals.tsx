import React, { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './WanderingAnimals.module.css';

import ratImg from '../images/animals/rat.png';
import tigerImg from '../images/animals/tiger.png';
import elephant2Img from '../images/animals/elephant_files/pngtree-baby-elephant-cartoon-png-image_18814331.png';
import babyFingerUp from '../images/baby/finger_up.png';
import babyLook from '../images/baby/look.png';
import babySophisticated from '../images/baby/sophesticated.png';
import balloonImg from '../images/baby/balloon.png';
import babyContemplating from '../images/baby/baby_contemplating.png';
import babySmiling from '../images/baby/baby_smiling.png'
import babySmall from '../images/baby/baby_small.png'

/**
 * Decorative layer of animal mascots that wander around the page
 * in random directions on random intervals. Purely visual —
 * pointer-events are disabled so it never blocks interaction.
 */
export default function WanderingAnimals() {
  // Fixed set of animals, each gets its own randomized path.
  const animals = useMemo(
    () => [
      { id: 'rat', src: ratImg, alt: '', size: 192, className: styles.rat },
      { id: 'tiger', src: tigerImg, alt: '', size: 216, className: styles.tiger },
      { id: 'elephant2', src: elephant2Img, alt: '', size: 270, className: styles.elephant2 },
      { id: 'baby-finger', src: babyFingerUp, alt: '', size: 160, className: styles.baby },
      { id: 'baby-look', src: babyLook, alt: '', size: 160, className: styles.baby },
      { id: 'baby-sophisticated', src: babySophisticated, alt: '', size: 160, className: styles.baby },
      { id: 'baby-smiling', src: babySmiling, alt: '', size: 160, className: styles.baby },
      { id: 'baby-small', src: babySmall, alt: '', size: 160, className: styles.baby },
      { id: 'baby-contemplating', src: babyContemplating, alt: '', size: 160, className: styles.baby },
    ],
    []
  );

  // Responsive sizes based on viewport width
  const getResponsiveSize = (baseSize: number) => {
    if (typeof window === 'undefined') return baseSize;
    const vw = window.innerWidth;
    if (vw <= 480) return Math.round(baseSize * 0.55);
    if (vw <= 768) return Math.round(baseSize * 0.75);
    return baseSize;
  };

  const [responsiveSizes, setResponsiveSizes] = useState<Record<string, number>>({});

  useEffect(() => {
    const updateSizes = () => {
      const sizes: Record<string, number> = {};
      animals.forEach(a => {
        sizes[a.id] = getResponsiveSize(a.size);
      });
      setResponsiveSizes(sizes);
    };
    updateSizes();
    window.addEventListener('resize', updateSizes);
    return () => window.removeEventListener('resize', updateSizes);
  }, [animals]);

  const [ready, setReady] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const positionsRef = useRef<Record<string, { x: number; y: number }>>({});
  const [, forceRender] = useState(0);
  const popTimerRef = useRef<number | null>(null);
  const elRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const dragRef = useRef<{
    id: string;
    startX: number;
    startY: number;
    origLeft: number;
    origTop: number;
    moved: boolean;
  } | null>(null);

  useEffect(() => {
    return () => {
      if (popTimerRef.current) window.clearTimeout(popTimerRef.current);
    };
  }, []);

  const handlePop = (id: string) => {
    setActiveId(id);
    if (popTimerRef.current) window.clearTimeout(popTimerRef.current);
    popTimerRef.current = window.setTimeout(() => setActiveId(null), 700);
  };

  /* ------------------------------------------------------------
   * Drag & drop — mouse and touch
   *
   * We move the element with `transform: translate()` directly on
   * the DOM node during the drag. This bypasses the CSS `left/top`
   * transition entirely, so the image follows the pointer 1:1 with
   * no lag or speed-dependence.
   * ---------------------------------------------------------- */
  const startDrag = (e: React.PointerEvent, id: string) => {
    const el = elRefs.current[id];
    if (!el) return;
    dragRef.current = {
      id,
      startX: e.clientX,
      startY: e.clientY,
      origLeft: el.offsetLeft,
      origTop: el.offsetTop,
      moved: false,
    };
    setDraggingId(id); // apply .dragging (disables transition) immediately
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const moveDrag = (e: React.PointerEvent) => {
    const drag = dragRef.current;
    if (!drag) return;
    const dx = e.clientX - drag.startX;
    const dy = e.clientY - drag.startY;
    if (Math.abs(dx) + Math.abs(dy) > 4) drag.moved = true;

    const el = elRefs.current[drag.id];
    if (!el) return;
    // Move the element directly via transform — instant, 1:1 with pointer.
    el.style.transform = `translate(${dx}px, ${dy}px)`;
  };

  const endDrag = () => {
    const drag = dragRef.current;
    dragRef.current = null;
    setDraggingId(null);

    if (drag) {
      const el = elRefs.current[drag.id];
      if (el) {
        // Commit the drag offset into the stored percentage position,
        // then clear the transform so the wander transition resumes.
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const dx = el.offsetLeft - drag.origLeft;
        const dy = el.offsetTop - drag.origTop;
        const pos = positionsRef.current[drag.id];
        if (pos) {
          pos.x = Math.min(92, Math.max(2, pos.x + (dx / vw) * 100));
          pos.y = Math.min(90, Math.max(4, pos.y + (dy / vh) * 100));
        }
        el.style.transform = '';
        forceRender(n => n + 1);
      }
      if (!drag.moved) {
        handlePop(drag.id);
      }
    }
  };

  const labelMap: Record<string, string> = {
    rat: 'Rat',
    tiger: 'Tiger',
    elephant2: 'Baby Elephant',
    'baby-finger': 'Arinjay photo',
    'baby-look': 'Arinjay photo',
    'baby-sophisticated': 'Arinjay photo',
  };

  useEffect(() => {
    // First render — random starting positions
    const initial: Record<string, { x: number; y: number }> = {};
    animals.forEach(a => {
      initial[a.id] = {
        x: Math.random() * 85 + 5, // % of viewport width
        y: Math.random() * 80 + 8, // % of viewport height
      };
    });
    positionsRef.current = initial;
    forceRender(n => n + 1);
    setReady(true);

    // Interval that nudges each animal to a new random spot at a random time.
    const schedule: number[] = [];

    const wander = () => {
      const animalIndex = Math.floor(Math.random() * animals.length);
      const target = animals[animalIndex];

      positionsRef.current[target.id] = {
        x: Math.random() * 88 + 4,
        y: Math.random() * 82 + 6,
      };

      forceRender(n => n + 1);

      // Schedule next move for a random image after a random delay (3–8s).
      schedule.push(
        window.setTimeout(wander, 3000 + Math.random() * 5000)
      );
    };

    // Kick off the wandering after a short initial wait
    schedule.push(window.setTimeout(wander, 1500 + Math.random() * 3000));

    return () => {
      schedule.forEach(t => window.clearTimeout(t));
    };
  }, [animals.length]);

  return (
    <>
      <div className={styles.layer}>
        {animals.map(a => {
          const pos = positionsRef.current[a.id] || { x: 10, y: 10 };
          return (
            <div
              key={a.id}
              ref={el => {
                elRefs.current[a.id] = el;
              }}
              className={`${styles.animal} ${activeId === a.id ? styles.popped : ''} ${draggingId === a.id ? styles.dragging : ''}`}
              style={{
                width: responsiveSizes[a.id] || a.size,
                height: responsiveSizes[a.id] || a.size,
                left: `${pos.x}%`,
                top: `${pos.y}%`,
                opacity: ready ? 1 : 0,
              }}
              role="button"
              tabIndex={0}
              onPointerDown={e => startDrag(e, a.id)}
              onPointerMove={moveDrag}
              onPointerUp={endDrag}
              onPointerCancel={endDrag}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handlePop(a.id);
                }
              }}
              aria-label={labelMap[a.id] || 'Mascot'}
            >
              <Image
                src={a.src}
                alt=""
                width={responsiveSizes[a.id] || a.size}
                height={responsiveSizes[a.id] || a.size}
                className={a.className}
                draggable={false}
              />
            </div>
          );
        })}
      </div>

      {/* Balloons in normal page flow — scrolls along with the page */}
      <div className={styles.balloonWrap}>
        <div
          className={`${styles.balloon} ${activeId === 'balloon-left' ? styles.popped : ''}`}
          style={{ left: 12, top: 160 }}
          role="button"
          tabIndex={0}
          onClick={() => handlePop('balloon-left')}
          onKeyDown={e => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handlePop('balloon-left');
            }
          }}
          aria-label="Balloon"
        >
          <Image src={balloonImg} alt="" width={220} height={264} draggable={false} />
        </div>
        <div
          className={`${styles.balloon} ${activeId === 'balloon-right' ? styles.popped : ''}`}
          style={{ right: 12, top: 160 }}
          role="button"
          tabIndex={0}
          onClick={() => handlePop('balloon-right')}
          onKeyDown={e => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handlePop('balloon-right');
            }
          }}
          aria-label="Balloon"
        >
          <Image src={balloonImg} alt="" width={220} height={264} draggable={false} />
        </div>
      </div>
    </>
  );
}