import React, { useEffect, useState } from 'react';
import styles from './FontSelector.module.css';

export type FontKey = 'default' | 'tiro' | 'noto-serif' | 'baloo' | 'hind';

interface FontOption {
  key: FontKey;
  label: string;
  labelBn: string;
  body: string;
  heading: string;
  sample: string;
}

export const FONT_OPTIONS: FontOption[] = [
  {
    key: 'default',
    label: 'Poppins (Current)',
    labelBn: 'পপিনস (বর্তমান)',
    body: "'Poppins', sans-serif",
    heading: "'Playfair Display', serif",
    sample: 'অন্নপ্রাশন Annaprashon',
  },
  {
    key: 'tiro',
    label: 'Tiro Bangla (Traditional)',
    labelBn: 'তিরো বাংলা (ঐতিহ্যবাহী)',
    body: "'Tiro Bangla', serif",
    heading: "'Tiro Bangla', serif",
    sample: 'অন্নপ্রাশন Annaprashon',
  },
  {
    key: 'noto-serif',
    label: 'Noto Serif Bengali (Classic)',
    labelBn: 'নোটো সেরিফ বাংলা (ক্লাসিক)',
    body: "'Noto Serif Bengali', serif",
    heading: "'Noto Serif Bengali', serif",
    sample: 'অন্নপ্রাশন Annaprashon',
  },
  {
    key: 'baloo',
    label: 'Baloo Da 2 (Fun)',
    labelBn: 'বালু দা ২ (মজার)',
    body: "'Baloo Da 2', cursive",
    heading: "'Baloo Da 2', cursive",
    sample: 'অন্নপ্রাশন Annaprashon',
  },
  {
    key: 'hind',
    label: 'Hind Siliguri (Modern)',
    labelBn: 'হিন্দ সিলিগুড়ি (আধুনিক)',
    body: "'Hind Siliguri', sans-serif",
    heading: "'Hind Siliguri', sans-serif",
    sample: 'অন্নপ্রাশন Annaprashon',
  },
];

const STORAGE_KEY = 'annaprashon-font';

interface FontSelectorProps {
  language: 'en' | 'bn';
}

export default function FontSelector({ language }: FontSelectorProps) {
  const [fontKey, setFontKey] = useState<FontKey>('default');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as FontKey | null;
    if (saved && FONT_OPTIONS.some(f => f.key === saved)) {
      setFontKey(saved);
    }
  }, []);

  useEffect(() => {
    const option = FONT_OPTIONS.find(f => f.key === fontKey)!;
    document.documentElement.style.setProperty('--font-body', option.body);
    document.documentElement.style.setProperty('--font-heading', option.heading);
    localStorage.setItem(STORAGE_KEY, fontKey);
  }, [fontKey]);

  const current = FONT_OPTIONS.find(f => f.key === fontKey)!;

  return (
    <div className={styles.wrapper}>
      <button
        type="button"
        className={styles.toggle}
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-label={language === 'en' ? 'Choose font' : 'ফন্ট নির্বাচন করুন'}
        title={language === 'en' ? 'Choose font' : 'ফন্ট নির্বাচন করুন'}
      >
        <span className={styles.toggleIcon} aria-hidden="true">Aa</span>
      </button>

      {open && (
        <div className={styles.panel}>
          <div className={styles.panelHeader}>
            <strong>{language === 'en' ? 'Choose a Font' : 'ফন্ট নির্বাচন করুন'}</strong>
            <button
              type="button"
              className={styles.closeBtn}
              onClick={() => setOpen(false)}
              aria-label={language === 'en' ? 'Close' : 'বন্ধ করুন'}
            >
              ✕
            </button>
          </div>

          <div className={styles.options}>
            {FONT_OPTIONS.map(option => (
              <button
                key={option.key}
                type="button"
                className={`${styles.option} ${fontKey === option.key ? styles.active : ''}`}
                onClick={() => {
                  setFontKey(option.key);
                  setOpen(false);
                }}
                style={{ fontFamily: option.body }}
              >
                <span className={styles.optionSample}>{option.sample}</span>
                <span className={styles.optionLabel}>
                  {language === 'en' ? option.label : option.labelBn}
                </span>
              </button>
            ))}
          </div>

          <p className={styles.hint}>
            {language === 'en'
              ? `Current: ${current.label}`
              : `বর্তমান: ${current.labelBn}`}
          </p>
        </div>
      )}
    </div>
  );
}