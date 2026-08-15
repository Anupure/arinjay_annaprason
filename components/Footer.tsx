import React from 'react';
import styles from './Footer.module.css';

interface FooterProps {
  language: 'en' | 'bn';
}

export default function Footer({ language }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3>{language === 'en' ? 'Arinjay\'s Annaprashon' : 'অরিঞ্জয়ের অন্নপ্রাশন'}</h3>
            <p>
              {language === 'en'
                ? 'Celebrating the sacred tradition of first rice ceremony with love, culture, and joy.'
                : 'প্রথম খাদ্য অনুষ্ঠানের পবিত্র ঐতিহ্যকে ভালোবাসা, সংস্কৃতি এবং আনন্দের সাথে উদযাপন করছি।'}
            </p>
          </div>

          <div className={styles.section}>
            <h4>{language === 'en' ? 'Quick Links' : 'দ্রুত লিংক'}</h4>
            <ul>
              <li>
                <a href="#menu">{language === 'en' ? 'Menu' : 'মেনু'}</a>
              </li>
              <li>
                <a href="#family">{language === 'en' ? 'My Family' : 'আমার পরিবার'}</a>
              </li>
              <li>
                <a href="#game">{language === 'en' ? 'Game' : 'গেম'}</a>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h4>{language === 'en' ? 'Bengali Traditions' : 'বাঙালি ঐতিহ্য'}</h4>
            <p className={styles.smallText}>
              {language === 'en'
                ? 'Preserving and celebrating Bengali cultural heritage'
                : 'বাঙালি সাংস্কৃতিক ঐতিহ্য সংরক্ষণ এবং উদযাপন'}
            </p>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottom}>
          <p>
            {language === 'en'
              ? `© ${year} Arinjay's Annaprashon. Celebrating traditions with love.`
              : `© ${year} অরিঞ্জয়ের অন্নপ্রাশন। ভালোবাসা দিয়ে ঐতিহ্য উদযাপন।`}
          </p>
          <p className={styles.devotion}>
            {language === 'en'
              ? '🙏 Made with love for our little prince 🙏'
              : '🙏 আমাদের ছোট্ট রাজকুমারের জন্য ভালোবাসা দিয়ে তৈরি 🙏'}
          </p>
        </div>
      </div>
    </footer>
  );
}
