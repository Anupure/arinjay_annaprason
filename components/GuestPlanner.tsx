import React, { useEffect, useMemo, useState } from 'react';
import styles from './GuestPlanner.module.css';
import MovingParticles from './MovingParticles';

interface GuestPlannerProps {
  language: 'en' | 'bn';
}

interface MemoryCard {
  id: string;
  icon: string;
  label: string;
  labelBn: string;
}

interface GameTile extends MemoryCard {
  key: string;
  pairKey: string;
}

const gameCards: MemoryCard[] = [
  { id: 'rice', icon: '🍚', label: 'Rice', labelBn: 'চাল' },
  { id: 'sweet', icon: '🍮', label: 'Sweet', labelBn: 'মিষ্টি' },
  { id: 'flower', icon: '🌼', label: 'Flower', labelBn: 'ফুল' },
  { id: 'joy', icon: '🎉', label: 'Joy', labelBn: 'আনন্দ' },
  { id: 'elephant', icon: '🐘', label: 'Elephant', labelBn: 'হাতি' },
  { id: 'tiger', icon: '🐯', label: 'Tiger', labelBn: 'বাঘ' },
  { id: 'fish', icon: '🐟', label: 'Fish', labelBn: 'মাছ' },
  { id: 'sun', icon: '🌞', label: 'Sun', labelBn: 'রোদ' },
];

/** 4×4 grid = 16 tiles: 8 matching pairs, no wildcard. */
const buildDeck = (): GameTile[] => {
  const tiles: GameTile[] = [];
  gameCards.forEach(card => {
    tiles.push({ ...card, key: `${card.id}-a`, pairKey: card.id });
    tiles.push({ ...card, key: `${card.id}-b`, pairKey: card.id });
  });
  return tiles.sort(() => Math.random() - 0.5);
};

const CONFETTI_COLORS = ['#FFD700', '#DAA520', '#8B4513', '#FF6B6B', '#4ECDC4', '#FF9F1C', '#C084FC', '#2ECC71'];

export default function GuestPlanner({ language }: GuestPlannerProps) {
  const [cards, setCards] = useState<GameTile[]>(() => buildDeck());
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [turns, setTurns] = useState(0);

  // Confetti cannon pieces — generated once per win. Each piece flies
  // outward from the center in a random direction (a radial "burst").
  const confetti = useMemo(() => {
    if (matched.length !== cards.length) return [];
    return Array.from({ length: 140 }).map((_, i) => {
      const angle = Math.random() * Math.PI * 2;
      const distance = 25 + Math.random() * 60; // vw/vh units away from center
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;
      return {
        id: i,
        x,
        y,
        delay: Math.random() * 0.15,
        duration: 1.4 + Math.random() * 1.4,
        color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
        size: 6 + Math.random() * 8,
        rotate: Math.random() * 720,
      };
    });
  }, [matched.length, cards.length]);

  useEffect(() => {
    if (flipped.length !== 2) return;

    const [firstIndex, secondIndex] = flipped;
    const firstCard = cards[firstIndex];
    const secondCard = cards[secondIndex];

    // Standard pair match.
    const isMatch = firstCard.pairKey === secondCard.pairKey;

    if (isMatch) {
      setMatched(prev => [...prev, firstIndex, secondIndex]);
      setFlipped([]);
      return;
    }

    const timeout = setTimeout(() => setFlipped([]), 700);
    return () => clearTimeout(timeout);
  }, [flipped, cards]);

  const handleCardClick = (index: number) => {
    if (flipped.includes(index) || matched.includes(index) || flipped.length === 2) return;
    setFlipped(prev => [...prev, index]);
    setTurns(prev => prev + 1);
  };

  const resetGame = () => {
    setCards(buildDeck());
    setFlipped([]);
    setMatched([]);
    setTurns(0);
  };

  const won = matched.length === cards.length;

  return (
    <section id="game" className={styles.guestPlanner}>
      {/* Floating gun emojis in the fun zone section */}
      <MovingParticles
        type="gun"
        count={25}
        opacityMin={0.05}
        opacityMax={0.12}
        sizeMin={16}
        sizeMax={28}
        durationMin={12}
        durationMax={26}
        className={styles.particles}
        zIndex={1}
      />
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>{language === 'en' ? 'Kids Fun Corner' : 'শিশুদের আনন্দ কোণা'}</h2>
          <p className={styles.subtitle}>
            {language === 'en'
              ? 'Match the festive symbols on the 4×4 board to win!'
              : '৪×৪ বোর্ডে উৎসবের প্রতীক মেলান এবং জিতে নিন!'}
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.gamePanel}>
            <div className={styles.gameInfo}>
              <div className={styles.scoreBox}>
                <span>{language === 'en' ? 'Turns' : 'চাল'}</span>
                <strong>{turns}</strong>
              </div>
              <div className={styles.pairsBox}>
                <span>{language === 'en' ? 'Matched' : 'মিলেছে'}</span>
                <strong>{matched.length / 2} / 8</strong>
              </div>
              <button type="button" className={styles.resetBtn} onClick={resetGame}>
                {language === 'en' ? 'Play Again' : 'আবার খেলুন'}
              </button>
            </div>

            <div className={styles.memoryBoard}>
              {cards.map((card, index) => {
                const isFlipped = flipped.includes(index) || matched.includes(index);

                return (
                  <button
                    key={card.key}
                    type="button"
                    className={`${styles.memoryCard} ${isFlipped ? styles.flipped : ''} ${matched.includes(index) ? styles.matched : ''}`}
                    onClick={() => handleCardClick(index)}
                    aria-label={
                      isFlipped
                        ? language === 'en'
                          ? `Revealed ${card.label}`
                          : `${card.labelBn} দেখা গেছে`
                        : language === 'en'
                          ? 'Hidden card'
                          : 'লুকানো কার্ড'
                    }
                  >
                    <span className={styles.memoryFront}>?</span>
                    <span className={styles.memoryBack}>{card.icon}</span>
                    {isFlipped && <span className={styles.memoryLabel}>{language === 'en' ? card.label : card.labelBn}</span>}
                  </button>
                );
              })}
            </div>
          </div>

          <div className={styles.sidePanel}>
            <div className={styles.infoCard}>
              <h3>{language === 'en' ? 'Celebration Moments' : 'উৎসবের মুহূর্ত'}</h3>
              <ul>
                <li>{language === 'en' ? 'Warm rice and blessings' : 'গরম চাল ও আশীর্বাদ'}</li>
                <li>{language === 'en' ? 'Sweet desserts and smiles' : 'মিষ্টি ও হাসি'}</li>
                <li>{language === 'en' ? 'Flowers, family and joy' : 'ফুল, পরিবার ও আনন্দ'}</li>
              </ul>
            </div>

            <div className={styles.infoCard}>
              <h3>{language === 'en' ? 'How to Play' : 'যেভাবে খেলবেন'}</h3>
              <p>
                {language === 'en'
                  ? 'Flip two tiles to find matching pairs. Match all 8 pairs to win the confetti cannon celebration!'
                  : 'দুটো টাইল ঘুরিয়ে জোড়া মেলান। কনফেটি কামান উদযাপন পেতে সবগুলো জোড়া মিলিয়ে ফেলুন!'}
              </p>
            </div>

            {won && (
              <div className={styles.winBanner}>
                <strong>{language === 'en' ? 'You matched them all! 🎉' : 'সবকিছু মিলিয়ে ফেলেছেন! 🎉'}</strong>
              </div>
            )}
          </div>
        </div>
      </div>

      {confetti.length > 0 && (
        <div className={styles.confettiOverlay} aria-hidden="true">
          {confetti.map(piece => (
            <span
              key={piece.id}
              className={styles.confettiPiece}
              style={
                {
                  '--x': `${piece.x}vw`,
                  '--y': `${piece.y}vh`,
                  background: piece.color,
                  width: piece.size,
                  height: piece.size * 1.4,
                  animationDuration: `${piece.duration}s`,
                  animationDelay: `${piece.delay}s`,
                  transform: `rotate(${piece.rotate}deg)`,
                } as React.CSSProperties
              }
            />
          ))}
        </div>
      )}
    </section>
  );
}
