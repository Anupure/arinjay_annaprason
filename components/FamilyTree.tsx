import React from 'react';
import styles from './FamilyTree.module.css';
// Import family member images (if available)
import momImg from '../images/family/mom.jpg';
import paternalUncleImg from '../images/family/paternal_uncle.jpg';
import maternalUncleImg from '../images/family/maternal_uncle.jpg';
import paternalGrandfatherImg from '../images/family/paternal_grandfather.jpg';
import paternalGrandmotherImg from '../images/family/paternal_grandmother.jpg';
import maternalGrandfatherImg from '../images/family/maternal_grandfather.jpg';
import maternalGrandmotherImg from '../images/family/maternal_grandmother.jpg';
import paternalGreatGrandfatherImg from '../images/family/paternal_great_grandfather.jpg';
import babyImg from '../images/family/me.jpg';
import { StaticImageData } from 'next/image';

// Map member IDs to their corresponding image imports (use actual IDs from the members array)
const imageMap: Record<string, StaticImageData> = {
  // Mother
  mamma: momImg,
  // Uncles
  kakumani: paternalUncleImg,
  mamaya: maternalUncleImg,
  // Grandparents (actual IDs)
  dadai: paternalGrandfatherImg,
  // Paternal Grandmother
  thamma: paternalGrandmotherImg,
  // Maternal Grandfather
  dadun: maternalGrandfatherImg,
  // Maternal Grandmother
  dimma: maternalGrandmotherImg,
  // Paternal Great Grandfather
  bobaba: paternalGreatGrandfatherImg,
  // Baby
  arinjay: babyImg,
};

interface FamilyMember {
  id: string;
  relationBn: string;
  relationEn: string;
  nameBn: string;
  nameEn: string;
  side: 'paternal' | 'maternal' | 'self';
  generation: 0 | 1 | 2 | 3;
  emoji: string;
}

interface FamilyTreeProps {
  language: 'en' | 'bn';
}

/**
 * All family members. Photos are placeholders for now — each card
 * shows a colored avatar with an emoji until real photos are added.
 */
const members: FamilyMember[] = [
  // Baby at the center — generation 0
  {
    id: 'arinjay',
    relationBn: 'আমি',
    relationEn: 'Baby',
    nameBn: 'অরিঞ্জয় দত্ত',
    nameEn: 'Arinjay Datta',
    side: 'self',
    generation: 0,
    emoji: '👶',
  },
  // Parents & uncle row — generation 1
  {
    id: 'papa',
    relationBn: 'পাপা',
    relationEn: 'Dad',
    nameBn: 'অনুপ দত্ত',
    nameEn: 'Anup Datta',
    side: 'paternal',
    generation: 1,
    emoji: '👨',
  },
  {
    id: 'mamma',
    relationBn: 'মাম্মা',
    relationEn: 'Mom',
    nameBn: 'পায়েল চৌধুরী',
    nameEn: 'Payel Chowdhury',
    side: 'maternal',
    generation: 1,
    emoji: '👩',
  },
  {
    id: 'kakumani',
    relationBn: 'কাকুমণি',
    relationEn: 'Uncle',
    nameBn: 'অরিত্র দত্ত',
    nameEn: 'Aritra Datta',
    side: 'paternal',
    generation: 1,
    emoji: '👨',
  },
  {
    id: 'mamaya',
    relationBn: 'মামাইয়া',
    relationEn: 'Uncle',
    nameBn: 'প্রান্তিক চৌধুরী',
    nameEn: 'Prantik Chowdhury',
    side: 'maternal',
    generation: 1,
    emoji: '👨',
  },
  // Grandparents — generation 2
  {
    id: 'dadai',
    relationBn: 'দাদাই',
    relationEn: 'Paternal Grandfather',
    nameBn: 'দেবব্রত দত্ত',
    nameEn: 'Debabrata Datta',
    side: 'paternal',
    generation: 2,
    emoji: '👴',
  },
  {
    id: 'thamma',
    relationBn: 'ঠাম্মা',
    relationEn: 'Paternal Grandmother',
    nameBn: 'তন্দ্রা দত্ত',
    nameEn: 'Tandra Datta',
    side: 'paternal',
    generation: 2,
    emoji: '👵',
  },
  {
    id: 'dadun',
    relationBn: 'দাদুন',
    relationEn: 'Maternal Grandfather',
    nameBn: 'মোহন চৌধুরী',
    nameEn: 'Mohan Chowdhury',
    side: 'maternal',
    generation: 2,
    emoji: '👴',
  },
  {
    id: 'dimma',
    relationBn: 'দিম্মা',
    relationEn: 'Maternal Grandmother',
    nameBn: 'শীতলা চৌধুরী',
    nameEn: 'Shitala Chowdhury',
    side: 'maternal',
    generation: 2,
    emoji: '👵',
  },
  // Great grandparents — generation 3
  {
    id: 'bobaba',
    relationBn: 'বোবাবা',
    relationEn: 'Paternal Great Grandfather',
    nameBn: 'নিবরণ চন্দ্র দত্ত',
    nameEn: 'Nibaran Chandra Datta',
    side: 'paternal',
    generation: 3,
    emoji: '👴',
  },
  {
    id: 'boma',
    relationBn: 'বোমা',
    relationEn: 'Late Paternal Great Grandmother',
    nameBn: 'কালুমতি দত্ত',
    nameEn: 'Kalumoti Datta',
    side: 'paternal',
    generation: 3,
    emoji: '👵',
  },
  {
    id: 'bara-baba',
    relationBn: 'বড় বাবা',
    relationEn: 'Maternal Great Grandfather',
    nameBn: 'অমর চৌধুরী',
    nameEn: 'Amar Chowdhury',
    side: 'maternal',
    generation: 3,
    emoji: '👴',
  },
  {
    id: 'bara-ma',
    relationBn: 'বড় মা',
    relationEn: 'Maternal Great Grandmother',
    nameBn: 'রুদ্ররাণী চৌধুরী',
    nameEn: 'Rudrarani Chowdhury',
    side: 'maternal',
    generation: 3,
    emoji: '👵',
  },
];

export default function FamilyTree({ language }: FamilyTreeProps) {
  const baby = members.find(m => m.id === 'arinjay')!;
  const paternal = members.filter(m => m.side === 'paternal');
  const maternal = members.filter(m => m.side === 'maternal');

  const renderMember = (member: FamilyMember) => {
    const imgData = imageMap[member.id];
    return (
      <div key={member.id} className={`${styles.memberCard} ${member.side === 'maternal' ? styles.maternalCard : styles.paternalCard}`}>
        <div className={styles.avatar}>
          {imgData ? (
            <img src={imgData.src} alt={member.nameEn} className={styles.avatarImg} />
          ) : (
            <span className={styles.avatarEmoji}>{member.emoji}</span>
          )}
        </div>
        <span className={styles.relation}>{language === 'en' ? member.relationEn : member.relationBn}</span>
        <span className={styles.name}>{language === 'en' ? member.nameEn : member.nameBn}</span>
      </div>
    );
  };

  const genLabel = (gen: number) => {
    switch (gen) {
      case 3:
        return language === 'en' ? 'Great Grandparents' : 'প্রপিতামহ / প্রপিতামহী';
      case 2:
        return language === 'en' ? 'Grandparents' : 'দাদা-ঠাম্মা / দাদু-দিম্মা';
      case 1:
        return language === 'en' ? 'Parents & Uncles' : 'বাবা-মা ও কাকা-মামা';
      default:
        return '';
    }
  };
  return (
    
    <section id="family" className={styles.familyTree} aria-labelledby="family-tree-title">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 id="family-tree-title">
            {language === 'en' ? 'Our Family Tree' : 'আমাদের পরিবার বৃক্ষ'}
          </h2>
          <p className={styles.subtitle}>
            {language === 'en'
              ? 'The generations of love welcoming our little star'
              : 'আমাদের নক্ষত্রকে সাদর জানাতে আসা প্রজন্মের ভালোবাসা'}
          </p>
        </div>

        <div className={styles.tree}>
          {/* Generation rows, oldest on top, baby at the bottom-center */}
          {[3, 2, 1, 0].map(gen => (
            <div key={gen} className={styles.generationRow}>
              {gen === 0 ? (
                <div className={styles.babyRow}>
                  <div className={`${styles.memberCard} ${styles.babyCard}`}>
                    <div className={styles.avatar}>
                        <img src={babyImg.src} alt={baby.nameEn} className={styles.avatarImg} />
                    </div>
                    <span className={styles.relation}>
                      {language === 'en' ? baby.relationEn : baby.relationBn}
                    </span>
                    <span className={styles.name}>
                      {language === 'en' ? baby.nameEn : baby.nameBn}
                    </span>
                  </div>
                </div>
              ) : (
                <>
                  <div className={styles.genLabel}>
                    <span className={styles.genTag}>{genLabel(gen)}</span>
                  </div>
                  <div className={styles.genBranches}>
                    <div className={styles.genPaternal}>
                      {paternal.filter(m => m.generation === gen).map(renderMember)}
                    </div>
                    <div className={styles.genMaternal}>
                      {maternal.filter(m => m.generation === gen).map(renderMember)}
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}