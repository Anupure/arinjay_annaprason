import React, { useState } from 'react';
import styles from './Header.module.css';
import MovingParticles from './MovingParticles';

interface HeaderProps {
  language: 'en' | 'bn';
  onLanguageChange: (lang: 'en' | 'bn') => void;
}

export default function Header({ language, onLanguageChange }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const menuItems = [
    { label: language === 'en' ? 'Home' : 'হোম', href: '#home' },
    { label: language === 'en' ? 'Menu' : 'মেনু', href: '#menu' },
    { label: language === 'en' ? 'My Family' : 'আমার পরিবার', href: '#family' },
    { label: language === 'en' ? 'Game' : 'গেম', href: '#game' },
  ];

  return (
    <header className={styles.header}>
      {/* Floating stars in the navigation bar */}
      <MovingParticles
        type="star"
        count={25}
        opacityMin={0.1}
        opacityMax={0.25}
        sizeMin={10}
        sizeMax={20}
        durationMin={12}
        durationMax={28}
        className={styles.navParticles}
        zIndex={1}
      />
      <div className={styles.container}>
        <div className={styles.logo}>
          <h1>অরিঞ্জয়</h1>
          <p className={styles.subtitle}>{language === 'en' ? 'Annaprashon' : 'অন্নপ্রাশন'}</p>
        </div>

        <nav
          className={`${styles.nav} ${mobileMenuOpen ? styles.active : ''}`}
          aria-label={language === 'en' ? 'Main navigation' : 'প্রধান নেভিগেশন'}
        >
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={styles.navLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.rightSection}>
          <div className={styles.languageToggle} aria-label={language === 'en' ? 'Language selector' : 'ভাষা নির্বাচন'}>
            <button
              type="button"
              className={`${styles.langBtn} ${language === 'en' ? styles.active : ''}`}
              onClick={() => onLanguageChange('en')}
              aria-pressed={language === 'en'}
            >
              EN
            </button>
            <button
              type="button"
              className={`${styles.langBtn} ${language === 'bn' ? styles.active : ''}`}
              onClick={() => onLanguageChange('bn')}
              aria-pressed={language === 'bn'}
            >
              বাংলা
            </button>
          </div>

          <button
            type="button"
            className={`${styles.hamburger} ${mobileMenuOpen ? styles.active : ''}`}
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? (language === 'en' ? 'Close menu' : 'মেনু বন্ধ করুন') : (language === 'en' ? 'Open menu' : 'মেনু খুলুন')}
            aria-expanded={mobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
