import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { menuItems } from '../data/menuItems';
import styles from './Menu.module.css';
import MovingParticles from './MovingParticles';

import imgWater from '../images/menu/water_bottle.png';
import imgSalad from '../images/menu/salad.jpg';
import imgCutlet from '../images/menu/veg_cutlet.jpg';
import imgKasundi from '../images/menu/kasundi_tomato_sauce.png';
import imgFriedRice from '../images/menu/Veg-Fried-Rice.webp';
import imgPaneer from '../images/menu/paneer_butter_masala_or_chilly_chicken.png';
import imgSak from '../images/menu/Laal-shak.jpg';
import imgSadaBhat from '../images/menu/sada_bhat.jpg';
import imgDaal from '../images/menu/Dal.jpg';
import imgAluPotol from '../images/menu/Aloo-potol.jpg';
import imgIlish from '../images/menu/Ilish_Bhapa.webp';
import imgMutton from '../images/menu/mutton_kosha_and_katla_kalia.png';
import imgChutney from '../images/menu/mango_chutney.jpg';
import imgPoromanno from '../images/menu/poromanno.webp';
import imgKomola from '../images/menu/komola_bhog.jpg';
import imgSondesh from '../images/menu/sondesh.webp';
import imgRosogolla from '../images/menu/baked_rosogolla.webp';
import imgIceCream from '../images/menu/ice-cream.jpg';
import imgHajmola from '../images/menu/hajmola-candies.webp';

const dishImages: Record<string, StaticImageData> = {
  'mineral-water': imgWater,
  salad: imgSalad,
  'veg-cutlet': imgCutlet,
  'tomato-kasundi': imgKasundi,
  'fried-rice': imgFriedRice,
  'paneer-chilly-chicken': imgPaneer,
  sak: imgSak,
  'sada-bhat': imgSadaBhat,
  daal: imgDaal,
  'alu-potol': imgAluPotol,
  'ilish-bhappa': imgIlish,
  'mutton-fish': imgMutton,
  'mixed-fruit-chutney': imgChutney,
  poromanno: imgPoromanno,
  'komola-bhog': imgKomola,
  sondesh: imgSondesh,
  'baked-rosogolla': imgRosogolla,
  'ice-cream': imgIceCream,
  hajmola: imgHajmola,
};

interface MenuProps {
  language: 'en' | 'bn';
}

type CategoryFilter = 'all' | 'starter' | 'rice' | 'vegetarian' | 'nonveg' | 'dessert' | 'beverage' | 'digestive';

export default function Menu({ language }: MenuProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const categories: { value: CategoryFilter; label: string; labelBn: string }[] = [
    { value: 'all', label: 'All Dishes', labelBn: 'সব খাবার' },
    { value: 'starter', label: 'Starters', labelBn: 'স্টার্টার' },
    { value: 'rice', label: 'Rice Dishes', labelBn: 'চাল জাতীয় খাবার' },
    { value: 'vegetarian', label: 'Vegetables', labelBn: 'সবজি' },
    { value: 'nonveg', label: 'Non-Veg', labelBn: 'মাংস ও মাছ' },
    { value: 'dessert', label: 'Desserts', labelBn: 'মিষ্টান্ন' },
    { value: 'beverage', label: 'Beverages', labelBn: 'পানীয়' },
    { value: 'digestive', label: 'Digestive', labelBn: 'হজম সহায়ক' },
  ];

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const handleSelectItem = (itemId: string) => {
    setSelectedItem(selectedItem === itemId ? null : itemId);
  };

  return (
    <section id="menu" className={styles.menu}>
      {/* Floating food-related emojis in the menu section */}
      <MovingParticles
        type="food"
        count={35}
        opacityMin={0.05}
        opacityMax={0.12}
        sizeMin={18}
        sizeMax={34}
        durationMin={12}
        durationMax={28}
        className={styles.particles}
        zIndex={1}
      />
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>{language === 'en' ? 'Our Menu' : 'আমাদের মেনু'}</h2>
          <p className={styles.subtitle}>
            {language === 'en'
              ? 'Each dish is prepared with love and carries blessings for the child\'s health and prosperity'
              : 'প্রতিটি খাবার ভালোবাসা দিয়ে প্রস্তুত এবং শিশুর স্বাস্থ্য ও সমৃদ্ধির জন্য আশীর্বাদ বহন করে'}
          </p>
        </div>

        {/* Category Filter */}
        <div className={styles.categoryFilter}>
          {categories.map(category => (
            <button
              key={category.value}
              className={`${styles.categoryBtn} ${activeCategory === category.value ? styles.active : ''}`}
              onClick={() => setActiveCategory(category.value)}
            >
              {language === 'en' ? category.label : category.labelBn}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className={styles.menuGrid}>
          {filteredItems.map(item => (
            <div
              key={item.id}
              className={`${styles.menuCard} ${selectedItem === item.id ? styles.expanded : ''}`}
              onClick={() => handleSelectItem(item.id)}
            >
              {dishImages[item.id] && (
                <div className={styles.imageWrap}>
                  <Image
                    src={dishImages[item.id]}
                    alt={language === 'en' ? item.englishName : item.bengaliName}
                    fill
                    sizes="(max-width: 768px) 100vw, 350px"
                    className={styles.dishImage}
                    draggable={false}
                  />
                </div>
              )}

              <div className={styles.cardHeader}>
                <div>
                  <h3>{language === 'en' ? item.englishName : item.bengaliName}</h3>
                  <p className={styles.englishName}>{language === 'en' ? item.bengaliName : item.englishName}</p>
                </div>
                <span className={styles.categoryBadge}>{item.category}</span>
              </div>

              <p className={styles.description}>{item.description}</p>

              {selectedItem === item.id && (
                <div className={`${styles.expandedContent} fade-in-up`}>
                  <div className={styles.infoRow}>
                    <strong>{language === 'en' ? 'Significance:' : 'গুরুত্ব:'}</strong>
                    <p>{item.significance}</p>
                  </div>

                  {item.preparedBy && (
                    <div className={styles.infoRow}>
                      <strong>{language === 'en' ? 'Prepared by:' : 'দ্বারা প্রস্তুত:'}</strong>
                      <p>{item.preparedBy}</p>
                    </div>
                  )}

                  {item.servingTime && (
                    <div className={styles.infoRow}>
                      <strong>{language === 'en' ? 'Serving Time:' : 'পরিবেশনের সময়:'}</strong>
                      <p>{item.servingTime}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* No Items Message */}
        {filteredItems.length === 0 && (
          <div className={styles.noItems}>
            <p>{language === 'en' ? 'No items in this category' : 'এই বিভাগে কোনো খাবার নেই'}</p>
          </div>
        )}
      </div>
    </section>
  );
}
