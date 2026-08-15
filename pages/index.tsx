import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Menu from '../components/Menu';
import FamilyTree from '../components/FamilyTree';
import GuestPlanner from '../components/GuestPlanner';
import Footer from '../components/Footer';
import IntroSequence from '../components/IntroSequence';
import WanderingAnimals from '../components/WanderingAnimals';
import FontSelector from '../components/FontSelector';

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'bn'>('en');
  const [mounted, setMounted] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check if there's a saved language preference
    const savedLanguage = localStorage.getItem('language') as 'en' | 'bn' | null;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleLanguageChange = (lang: 'en' | 'bn') => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <>
      <Head>
        <title>Arinjay's Annaprashon - Interactive Menu</title>
        <meta
          name="description"
          content="Arinjay's Annaprashon - A celebration of the first rice ceremony with interactive menu, Bengali traditions, and cultural significance."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#8B4513" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🍚</text></svg>" />
      </Head>

      <a href="#main-content" className="skip-link">
        {language === 'en' ? 'Skip to content' : 'বিষয়বস্তুর দিকে ছাড়ুন'}
      </a>

      <IntroSequence onComplete={() => setIntroComplete(true)} />

      <div className={`site-shell ${introComplete ? 'ready' : ''}`}>
        <Header language={language} onLanguageChange={handleLanguageChange} />
        <WanderingAnimals />
        <main id="main-content">
          <Hero language={language} />
          <Menu language={language} />
          <FamilyTree language={language} />
          <GuestPlanner language={language} />
        </main>
        <Footer language={language} />
      </div>

      {/* Font picker lives outside the shell so nothing can cover or block it */}
      {introComplete && <FontSelector language={language} />}
    </>
  );
}
