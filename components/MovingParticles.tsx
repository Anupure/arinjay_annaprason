import React, { useEffect, useState } from 'react';
import styles from './MovingParticles.module.css';

type ParticleType = 'heart' | 'star' | 'sparkle' | 'food' | 'tree' | 'gun';

interface MovingParticlesProps {
  /** Type of particle to render */
  type?: ParticleType;
  /** Number of particles to generate */
  count?: number;
  /** Opacity range for particles (0-1) */
  opacityMin?: number;
  opacityMax?: number;
  /** Size range in pixels */
  sizeMin?: number;
  sizeMax?: number;
  /** Animation duration range in seconds */
  durationMin?: number;
  durationMax?: number;
  /** Additional CSS class for positioning context */
  className?: string;
  /** z-index for layering */
  zIndex?: number;
}

interface Particle {
  id: number;
  left: number;
  top: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  drift: number;
}

const SYMBOLS: Record<ParticleType, string> = {
  heart: '❤️',
  star: '⭐',
  sparkle: '✨',
  food: '🍛',
  tree: '🌳',
  gun: '🔫',
};

export default function MovingParticles({
  type = 'sparkle',
  count = 30,
  opacityMin = 0.05,
  opacityMax = 0.15,
  sizeMin = 12,
  sizeMax = 28,
  durationMin = 8,
  durationMax = 20,
  className = '',
  zIndex = 1,
}: MovingParticlesProps) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: sizeMin + Math.random() * (sizeMax - sizeMin),
        opacity: opacityMin + Math.random() * (opacityMax - opacityMin),
        duration: durationMin + Math.random() * (durationMax - durationMin),
        delay: Math.random() * 5,
        drift: Math.random() * 30 - 15, // -15 to +15 px drift
      });
    }
    setParticles(newParticles);
  }, [count, opacityMin, opacityMax, sizeMin, sizeMax, durationMin, durationMax]);

  const symbol = SYMBOLS[type];

  return (
    <div
      className={`${styles.particleContainer} ${className}`}
      style={{ zIndex }}
      aria-hidden="true"
    >
      {particles.map(p => (
        <span
          key={p.id}
          className={styles.particle}
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            fontSize: `${p.size}px`,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            transform: `translateX(${p.drift}px)`,
          }}
        >
          {symbol}
        </span>
      ))}
    </div>
  );
}
