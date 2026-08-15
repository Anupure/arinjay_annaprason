'use client';

import { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import styles from './IntroSequence.module.css';

import babyFingerUp from '../images/baby/finger_up.png';
import babyLook from '../images/baby/look.png';
import babySophisticated from '../images/baby/sophesticated.png';
import balloonImg from '../images/baby/balloon.png';

interface IntroSequenceProps {
  onComplete?: () => void;
}

/**
 * A gorgeous ceremonial opening (~11s):
 *   1.  Ivory backdrop with a warm golden glow breathing in
 *   2.  A mandala pattern draws itself and slowly expands to cover
 *       the whole page
 *   3.  অরিঞ্জয়ের শুভ অন্নপ্রাশন fades up in the center
 *   4.  A golden divider grows beneath the title
 *   5.  Baby photos pop in at random spots; balloons drift in
 *   6.  Sparkles twinkle, glow pulses, then everything dissolves
 *       into a clean ivory wash
 */
export default function IntroSequence({
  onComplete,
}: IntroSequenceProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const mandalaRef = useRef<SVGSVGElement>(null);
  const mandalaPathsRef = useRef<SVGPathElement[]>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const sparkleRef = useRef<HTMLDivElement>(null);
  const babyLayerRef = useRef<HTMLDivElement>(null);
  const balloonLayerRef = useRef<HTMLDivElement>(null);

  /*
   * Keep the latest onComplete callback in a ref so the timeline is
   * created exactly once. If onComplete were a dependency of the
   * layout effect, every parent re-render (new function identity)
   * would tear down and rebuild the timeline, replaying the intro.
   */
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useLayoutEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: 'power2.out',
        },
        onComplete: () => {
          onCompleteRef.current?.();
        },
      });

      /* ------------------------------------------------------------
       * INITIAL STATE
       * ---------------------------------------------------------- */
      gsap.set(glowRef.current, { opacity: 0, scale: 0.5 });
      gsap.set(mandalaPathsRef.current, {
        opacity: 0,
        strokeDasharray: 1200,
        strokeDashoffset: 1200,
      });
      gsap.set(mandalaRef.current, { scale: 0.7, transformOrigin: 'center' });
      gsap.set(titleRef.current, { opacity: 0, y: 30, filter: 'blur(8px)' });
      gsap.set(dividerRef.current, { opacity: 0, scaleX: 0 });
      gsap.set(sparkleRef.current, { opacity: 0 });
      gsap.set(babyLayerRef.current, { opacity: 0 });
      gsap.set(balloonLayerRef.current, { opacity: 0 });

      /* ------------------------------------------------------------
       * 0–1.6s  — Backdrop glow breathes in
       * ---------------------------------------------------------- */
      tl.to(glowRef.current, {
        opacity: 0.6,
        scale: 1,
        duration: 1.6,
        ease: 'sine.out',
      });

      /* ------------------------------------------------------------
       * 0.4–3.4s — Mandala draws itself (staggered paths)
       * ---------------------------------------------------------- */
      tl.to(
        mandalaPathsRef.current,
        {
          opacity: 1,
          strokeDashoffset: 0,
          duration: 3,
          stagger: 0.14,
          ease: 'power1.inOut',
        },
        0.4
      );

      /* ------------------------------------------------------------
       * 3.2–5.2s — Mandala slowly expands to cover the page
       * ---------------------------------------------------------- */
      tl.to(
        mandalaRef.current,
        {
          scale: 1.6,
          duration: 2,
          ease: 'power2.inOut',
        },
        3.2
      );

      /* ------------------------------------------------------------
       * 3.6–5.2s — অরিঞ্জয়ের শুভ অন্নপ্রাশন title fades up
       * ---------------------------------------------------------- */
      tl.to(
        titleRef.current,
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.6,
          ease: 'power2.out',
        },
        3.6
      );

      /* ------------------------------------------------------------
       * 5.0–6.0s — Golden divider grows under the title
       * ---------------------------------------------------------- */
      tl.to(
        dividerRef.current,
        {
          opacity: 1,
          scaleX: 1,
          duration: 1,
          ease: 'power2.inOut',
        },
        5.0
      );

      /* ------------------------------------------------------------
       * 5.6–6.6s — Baby photos pop in at random spots
       * ---------------------------------------------------------- */
      tl.to(
        babyLayerRef.current,
        {
          opacity: 1,
          duration: 0.8,
          ease: 'sine.out',
        },
        5.6
      );

      /* ------------------------------------------------------------
       * 6.2–7.2s — Balloons drift in
       * ---------------------------------------------------------- */
      tl.to(
        balloonLayerRef.current,
        {
          opacity: 1,
          duration: 0.9,
          ease: 'sine.out',
        },
        6.2
      );

      /* ------------------------------------------------------------
       * 7.0–8.0s — Sparkles twinkle in
       * ---------------------------------------------------------- */
      tl.to(
        sparkleRef.current,
        {
          opacity: 1,
          duration: 1,
          ease: 'sine.inOut',
        },
        7.0
      );

      /* ------------------------------------------------------------
       * 7.4–8.4s — Warm glow pulse (hold moment)
       * ---------------------------------------------------------- */
      tl.to(
        glowRef.current,
        {
          opacity: 0.85,
          scale: 1.08,
          duration: 1,
          ease: 'sine.inOut',
        },
        7.4
      );

      /* ------------------------------------------------------------
       * 8.6–9.6s — Mandala expands further, title softens
       * ---------------------------------------------------------- */
      tl.to(
        mandalaRef.current,
        {
          scale: 2.4,
          opacity: 0.5,
          duration: 1.6,
          ease: 'power2.inOut',
        },
        8.6
      );

      tl.to(
        titleRef.current,
        {
          y: -14,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.in',
        },
        9.2
      );

      tl.to(
        dividerRef.current,
        {
          opacity: 0,
          duration: 0.6,
          ease: 'power2.in',
        },
        9.3
      );

      tl.to(
        [babyLayerRef.current, balloonLayerRef.current],
        {
          opacity: 0,
          duration: 0.7,
          ease: 'power2.in',
        },
        9.4
      );

      /* ------------------------------------------------------------
       * 10–10.8s — Clean ivory wash; parent reveals the site
       * ---------------------------------------------------------- */
      tl.to(
        rootRef.current,
        {
          opacity: 0,
          duration: 0.8,
          ease: 'power1.inOut',
        },
        10
      );
    }, rootRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={rootRef}
      className={styles.wrapper}
      aria-label="Arinjay's Annaprashon introduction"
    >
      <div className={styles.paperTexture} />
      <div ref={glowRef} className={styles.glow} />

      {/* Mandala pattern */}
      <svg
        ref={mandalaRef}
        className={styles.mandala}
        viewBox="0 0 600 600"
        role="presentation"
      >
        {[
          // Outer ring
          'M300 40 A260 260 0 1 1 299.9 40',
          // Inner ring
          'M300 120 A180 180 0 1 1 299.9 120',
          // Center circle
          'M300 230 A70 70 0 1 1 299.9 230',
          // Petals (8 around center)
          'M300 230 C270 200 270 170 300 150 C330 170 330 200 300 230',
          'M300 230 C330 260 360 260 380 230 C360 200 330 200 300 230',
          'M300 230 C330 260 330 290 300 310 C270 290 270 260 300 230',
          'M300 230 C270 200 240 200 220 230 C240 260 270 260 300 230',
          // Diagonal petals
          'M300 230 C260 190 260 150 300 120 C340 150 340 190 300 230',
          'M300 230 C340 270 380 270 410 230 C380 190 340 190 300 230',
          'M300 230 C340 270 340 310 300 340 C260 310 260 270 300 230',
          'M300 230 C260 190 220 190 190 230 C220 270 260 270 300 230',
          // Outer decorative arcs
          'M300 40 C360 60 400 100 420 160',
          'M300 40 C240 60 200 100 180 160',
          'M300 560 C360 540 400 500 420 440',
          'M300 560 C240 540 200 500 180 440',
          'M40 300 C60 240 100 200 160 180',
          'M560 300 C540 240 500 200 440 180',
          'M40 300 C60 360 100 400 160 420',
          'M560 300 C540 360 500 400 440 420',
        ].map((d, i) => (
          <path
            key={i}
            ref={el => {
              if (el) mandalaPathsRef.current[i] = el;
            }}
            d={d}
          />
        ))}
      </svg>

      {/* Baby photos popping at random spots */}
      <div ref={babyLayerRef} className={styles.babyLayer} aria-hidden="true">
        {[
          { src: babyFingerUp, left: 12, top: 18, size: 90, delay: 0 },
          { src: babyLook, left: 78, top: 22, size: 84, delay: 0.3 },
          { src: babySophisticated, left: 20, top: 68, size: 96, delay: 0.6 },
          { src: babyFingerUp, left: 74, top: 66, size: 80, delay: 0.9 },
        ].map((b, i) => (
          <div
            key={i}
            className={styles.babyPop}
            style={{
              left: `${b.left}%`,
              top: `${b.top}%`,
              width: b.size,
              height: b.size,
              animationDelay: `${b.delay}s`,
            }}
          >
            <Image src={b.src} alt="" width={b.size} height={b.size} draggable={false} />
          </div>
        ))}
      </div>

      {/* Balloons drifting in */}
      <div ref={balloonLayerRef} className={styles.balloonLayer} aria-hidden="true">
        <div className={styles.balloon} style={{ left: 8, top: 12, animationDelay: '0s' }}>
          <Image src={balloonImg} alt="" width={70} height={84} draggable={false} />
        </div>
        <div className={styles.balloon} style={{ right: 8, top: 16, animationDelay: '0.5s' }}>
          <Image src={balloonImg} alt="" width={64} height={76} draggable={false} />
        </div>
      </div>

      {/* Sparkles */}
      <div ref={sparkleRef} className={styles.sparkles} aria-hidden="true">
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            className={styles.sparkle}
            style={{
              left: `${8 + ((i * 37) % 84)}%`,
              top: `${10 + ((i * 53) % 76)}%`,
              animationDelay: `${(i % 5) * 0.4}s`,
            }}
          />
        ))}
      </div>

      {/* Title block */}
      <div className={styles.titleBlock}>
        <h1 ref={titleRef} className={styles.title}>
          অরিঞ্জয়ের শুভ অন্নপ্রাশন
        </h1>
        <div ref={dividerRef} className={styles.divider} aria-hidden="true" />
      </div>
    </section>
  );
}