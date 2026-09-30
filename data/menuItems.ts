export interface MenuItem {
  id: string;
  bengaliName: string;
  englishName: string;
  description: string;
  significance: string;
  category:
    | 'starter'
    | 'rice'
    | 'vegetarian'
    | 'nonveg'
    | 'dessert'
    | 'beverage'
    | 'digestive';
  emoji?: string;
  preparedBy?: string;
  servingTime?: string;
  /** Position in the ceremony serving sequence (1 = served first). */
  servingOrder: number;
}

export const menuItems: MenuItem[] = [
  {
    id: 'mineral-water',
    bengaliName: 'মিনারেল ওয়াটার',
    englishName: 'Mineral Water',
    description: 'Refreshing bottled mineral water for guests throughout the celebration.',
    significance: 'A simple, thoughtful touch to keep everyone cool and hydrated.',
    category: 'beverage',
    emoji: '💧',
    servingTime: 'Throughout event',
    servingOrder: 1
  },
  {
    id: 'veg-cutlet',
    bengaliName: 'ভেজ কাটলেট',
    englishName: 'Veg Cutlet',
    description: 'Crisp, spiced vegetable cutlets served as a warm starter.',
    significance: 'A classic festive bite that welcomes guests with flavour and crunch.',
    category: 'starter',
    emoji: '🥟',
    servingTime: 'Starter',
    servingOrder: 2
  },
  {
    id: 'salad',
    bengaliName: 'স্যালাড',
    englishName: 'Salad',
    description: 'Fresh seasonal salad with a light, refreshing dressing.',
    significance: 'Balances the richness of the feast and brings a clean, crisp note.',
    category: 'starter',
    emoji: '🥗',
    servingTime: 'Starter',
    servingOrder: 3
  },
  {
    id: 'tomato-kasundi',
    bengaliName: 'কাসুন্দি',
    englishName: 'Kasundi',
    description: 'Bengali mustard relish enjoyed alongside the starter spread.',
    significance: 'A beloved flavour accent that brings the taste of home to the table.',
    category: 'starter',
    emoji: '🍅',
    servingTime: 'Starter',
    servingOrder: 4
  },
  {
    id: 'fried-rice',
    bengaliName: 'ফ্রাইড রাইস',
    englishName: 'Fried Rice',
    description: 'Fragrant rice stir-fried with vegetables and subtle spices.',
    significance: 'A comforting festive rice dish for sharing among family and guests.',
    category: 'rice',
    emoji: '🍛',
    servingTime: 'Main course',
    servingOrder: 5
  },
  {
    id: 'paneer-chilly-chicken',
    bengaliName: 'চিলি পনির / চিলি চিকেন',
    englishName: 'Chili Paneer / Chili Chicken',
    description: 'Spicy, flavourful main course with a choice of paneer or chicken.',
    significance: 'A crowd-pleasing dish that adds excitement to the ceremonial spread.',
    category: 'nonveg',
    emoji: '🥘',
    servingTime: 'Main course',
    servingOrder: 6
  },
  {
    id: 'sak',
    bengaliName: 'শাক ভাজা',
    englishName: 'Shaak Bhaja',
    description: 'Leafy greens sautéed gently with mustard oil and spices.',
    significance: 'A simple, nourishing Bengali classic that brings comfort to the meal.',
    category: 'vegetarian',
    emoji: '🥬',
    servingTime: 'Side dish',
    servingOrder: 7
  },
  {
    id: 'sada-bhat',
    bengaliName: 'সাদা ভাত',
    englishName: 'Plain Rice',
    description: 'Steamed white rice served as the base of the celebratory meal.',
    significance: 'A staple of the Bengali feast, comforting and essential.',
    category: 'rice',
    emoji: '🍚',
    servingTime: 'Main course',
    servingOrder: 8
  },
  {
    id: 'daal',
    bengaliName: 'মিক্সড ডাল',
    englishName: 'Mixed Daal',
    description: 'A comforting lentil preparation with gentle warming spices.',
    significance: 'A staple dish that adds richness and nourishment to the feast.',
    category: 'vegetarian',
    emoji: '🍲',
    servingTime: 'Side dish',
    servingOrder: 9
  },
  {
    id: 'alu-potol',
    bengaliName: 'চিংড়ি পোস্ত / আলু-পটলের তরকারি',
    englishName: 'Prawn Posto / Aloo-Potol Curry',
    description: 'A traditional Bengali curry, available with either prawn posto or potato-pointed gourd.',
    significance: 'This dish captures the homestyle warmth and diversity of the feast.',
    category: 'vegetarian',
    emoji: '🥔',
    servingTime: 'Side dish',
    servingOrder: 10
  },
  {
    id: 'mutton-fish',
    bengaliName: 'খাসির মাংস / ইলিশ ভাপা',
    englishName: 'Khashi Mutton / Ilish Bhapa',
    description: 'A special main course featuring either rich mutton or steamed hilsa.',
    significance: 'A celebratory dish that reflects the richness of Bengali hospitality.',
    category: 'nonveg',
    emoji: '🐟',
    servingTime: 'Main course',
    servingOrder: 11
  },
  {
    id: 'mixed-fruit-chutney',
    bengaliName: 'আমের চাটনি',
    englishName: 'Mango Chutney',
    description: 'Sweet and tangy mango chutney made for a bright finishing note.',
    significance: 'A palate-refreshing dish that prepares everyone for the sweets to come.',
    category: 'dessert',
    emoji: '🍇',
    servingTime: 'Dessert',
    servingOrder: 12
  },
  {
    id: 'poromanno',
    bengaliName: 'পরমান্ন',
    englishName: 'Paramanna',
    description: 'A ceremonial sweet rice dish cooked with ghee and jaggery.',
    significance: 'A traditional festive sweet that is deeply rooted in Bengali rituals.',
    category: 'dessert',
    emoji: '🥣',
    servingTime: 'Dessert',
    servingOrder: 13
  },
  {
    id: 'rosogolla',
    bengaliName: 'রসগোল্লা',
    englishName: 'Rosogolla',
    description: 'Soft, spongy cottage cheese dumplings in sweet syrup.',
    significance: 'A beloved Bengali sweet, rich in tradition and joy.',
    category: 'dessert',
    emoji: '🍪',
    servingTime: 'Dessert',
    servingOrder: 14
  },
  {
    id: 'sondesh',
    bengaliName: 'সন্দেশ',
    englishName: 'Sondesh',
    description: 'Delicate Bengali sweets made with fresh chhena and subtle flavours.',
    significance: 'A refined sweet treat that reflects the elegance of Bengali cuisine.',
    category: 'dessert',
    emoji: '🍩',
    servingTime: 'Dessert',
    servingOrder: 15
  },
  {
    id: 'baked-rosogolla',
    bengaliName: 'বেকড রসগোল্লা',
    englishName: 'Baked Rosogolla',
    description: 'Classic rosogolla given a warm baked finish.',
    significance: 'A modern twist on a timeless Bengali favourite.',
    category: 'dessert',
    emoji: '🍨',
    servingTime: 'Dessert',
    servingOrder: 16
  },
  {
    id: 'ice-cream',
    bengaliName: 'আইসক্রিম',
    englishName: 'Ice Cream',
    description: 'Cooling ice cream to delight guests of all ages.',
    significance: 'A cheerful ending to the meal and a happy festive touch.',
    category: 'dessert',
    emoji: '🍦',
    servingTime: 'Dessert',
    servingOrder: 17
  },
  {
    id: 'hajmola',
    bengaliName: 'হজমোলা',
    englishName: 'Hajmola',
    description: 'Tangy digestive morsels served for a refreshing finish.',
    significance: 'A thoughtful closing note to complete the feast with comfort.',
    category: 'digestive',
    emoji: '🍋',
    servingTime: 'After dessert',
    servingOrder: 18
  }
];

export const ceremonyRituals = [
  {
    name: 'প্রথম ধাপ (First Step)',
    bengaliName: 'প্রণাম ও আশীর্বাদ',
    description: 'Blessing from elders before the feeding ceremony',
    order: 1
  },
  {
    name: 'Second Step',
    bengaliName: 'সাদা ভাত ও ডাল পরিবেশন',
    description: 'Serving of rice and lentils to the baby with prayers',
    order: 2
  },
  {
    name: 'Third Step',
    bengaliName: 'অন্যান্য খাবার',
    description: 'Introduction to the full ceremonial spread',
    order: 3
  },
  {
    name: 'Fourth Step',
    bengaliName: 'পোরমান্ন এবং মিষ্টি',
    description: 'Sharing of poromanno and sweets among guests',
    order: 4
  }
];

export const culturalSignificance = {
  title: 'অন্নপ্রাশন সম্পর্কে',
  englishTitle: 'About Annaprashon',
  content: `Annaprashon is a sacred Bengali Hindu ceremony which marks the occasion when a baby is introduced to solid food for the first time. 
This ancient tradition, rooted in the Vedic period, is believed to bring good health, longevity, and prosperity to the child.
The ceremony typically takes place when the baby is 6-8 months old, and it is celebrated with family gatherings and feasting.`,
  traditions: [
    'The main ritual involves feeding the baby a soft rice preparation, considered most suitable for a baby\'s digestive system.',
    'Grandmothers and mothers play a crucial role in preparing the food, often passing down century-old recipes.',
    'The ceremony is attended by close family and friends who bless the child.',
    'Various rituals and prayers are performed to ensure the child\'s healthy growth.',
    'The celebration concludes with sharing of sweet dishes among all guests.'
  ]
};
