import React from 'react';
import styles from './Hero.module.css';
import MovingParticles from './MovingParticles';

interface HeroProps {
  language: 'en' | 'bn';
}

export default function Hero({ language }: HeroProps) {
  const title = language === 'en' ? "Arinjay's Happy Rice Ceremony" : 'অরিঞ্জয়ের শুভ অন্নপ্রাশন';
  const subtitle = language === 'en'
    ? 'A celebration of first rice ceremony with love and traditions'
    : 'প্রথম মুখে ভাতের আনন্দময় দিবস';
  const description = language === 'en'
    ? 'Annaprashon marks the beautiful moment when a baby is introduced to solid food. Join us in celebrating this sacred Bengali tradition.'
    : 'অন্নপ্রাশন হল সেই সুন্দর মুহূর্ত যখন একটি শিশু প্রথমবার কঠিন খাবারের সাথে পরিচিত হয়।';
  const cta = language === 'en' ? 'Explore the Menu' : 'মেনু দেখুন';

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.background}>
        <div className={styles.gradientOverlay}></div>
        <div className={styles.decorativeElement1}></div>
        <div className={styles.decorativeElement2}></div>
        {/* Transparent floating hearts in the hero section */}
        <MovingParticles
          type="heart"
          count={40}
          opacityMin={0.05}
          opacityMax={0.12}
          sizeMin={16}
          sizeMax={32}
          durationMin={10}
          durationMax={25}
          className={styles.particles}
          zIndex={1}
        />
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={`${styles.titleWrapper} fade-in-up`}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.divider}></div>
          </div>

          <p className={`${styles.subtitle} fade-in-up`}>{subtitle}</p>

          <p className={`${styles.description} fade-in-up`}>{description}</p>

          <div className={`${styles.ctaContainer} fade-in-up`}>
            <a href="#menu" className={styles.ctaButton}>
              {cta}
            </a>
          </div>

          <div className={styles.scrollIndicator}>
            <span>{language === 'en' ? 'Scroll to explore' : 'অন্বেষণ করতে স্ক্রোল করুন'}</span>
            <div className={styles.scrollArrow}></div>
          </div>
        </div>

        <div className={styles.decoration}>
          <div className={styles.ornament}></div>
          <div className={styles.ornamentSmall}></div>
        </div>
      </div>
    </section>
  );
}
