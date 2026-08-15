export type Language = 'en' | 'bn';

export interface Translation {
  en: string;
  bn: string;
}

export const translations: { [key: string]: Translation } = {
  // Navigation
  'nav.home': { en: 'Home', bn: 'হোম' },
  'nav.menu': { en: 'Menu', bn: 'মেনু' },
  'nav.rituals': { en: 'Rituals', bn: 'অনুষ্ঠান' },
  'nav.significance': { en: 'About', bn: 'পরিচয়' },
  'nav.contact': { en: 'Contact', bn: 'যোগাযোগ' },

  // Main content
  'home.title': { en: "Arinjay's Annaprashon Ceremony", bn: 'অরিঞ্জয়ের অন্নপ্রাশন অনুষ্ঠান' },
  'home.subtitle': { en: 'A celebration of first rice ceremony with love and traditions', bn: 'প্রথম খাদ্য অনুষ্ঠানের আনন্দময় উদযাপন' },
  'home.description': { en: 'Annaprashon marks the beautiful moment when a baby is introduced to solid food. Join us in celebrating this sacred bengali tradition.', bn: 'অন্নপ্রাশন হল সেই সুন্দর মুহূর্ত যখন একটি শিশু প্রথমবার কঠিন খাবারের সাথে পরিচিত হয়।' },

  // Menu section
  'menu.title': { en: 'Our Menu', bn: 'আমাদের মেনু' },
  'menu.description': { en: 'Each dish is prepared with love and carries blessings for the child\'s health and prosperity', bn: 'প্রতিটি খাবার ভালোবাসা দিয়ে প্রস্তুত এবং শিশুর স্বাস্থ্য ও সমৃদ্ধির জন্য আশীর্বাদ বহন করে' },
  'menu.vegetarian': { en: 'Vegetarian', bn: 'নিরামিষ' },
  'menu.rice': { en: 'Rice Dishes', bn: 'চাল জাতীয় খাবার' },
  'menu.dessert': { en: 'Desserts', bn: 'মিষ্টান্ন' },
  'menu.beverage': { en: 'Beverages', bn: 'পানীয়' },
  'menu.starter': { en: 'Starters', bn: 'স্টার্টার' },
  'menu.nonveg': { en: 'Non-Veg', bn: 'মাংস ও মাছ' },
  'menu.digestive': { en: 'Digestive', bn: 'হজম সহায়ক' },

  // Ritual
  'ritual.title': { en: 'Ceremony Rituals', bn: 'অনুষ্ঠান অনুক্রম' },
  'ritual.step': { en: 'Step', bn: 'পর্যায়' },

  // Significance
  'significance.title': { en: 'Cultural Significance', bn: 'সাংস্কৃতিক গুরুত্ব' },
  'significance.description': { en: 'Understanding the traditions behind Annaprashon', bn: 'অন্নপ্রাশনের পিছনে ঐতিহ্যগুলি বোঝা' },

  // Common
  'common.description': { en: 'Description', bn: 'বিবরণ' },
  'common.significance': { en: 'Significance', bn: 'গুরুত্ব' },
  'common.preparedBy': { en: 'Prepared by', bn: 'দ্বারা প্রস্তুত' },
  'common.servingTime': { en: 'Serving Time', bn: 'পরিবেশনের সময়' },
};

export const getTranslation = (key: string, language: Language = 'en'): string => {
  const translation = translations[key];
  if (!translation) {
    console.warn(`Translation not found for key: ${key}`);
    return key;
  }
  return translation[language];
};

export const getAllTranslations = (language: Language = 'en'): { [key: string]: string } => {
  const result: { [key: string]: string } = {};
  for (const [key, value] of Object.entries(translations)) {
    result[key] = value[language];
  }
  return result;
};
