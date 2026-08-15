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
  // Starters
  {
    id: 'mineral-water',
    bengaliName: 'মিনারেল ওয়াটার',
    englishName: 'Mineral Water Bottle',
    description: 'Pure bottled mineral water to keep every guest refreshed.',
    significance: 'A thoughtful touch so everyone stays cool and hydrated through the celebration.',
    category: 'beverage',
    emoji: '💧',
    servingTime: 'Throughout event',
    servingOrder: 1
  },
  {
    id: 'salad',
    bengaliName: 'স্যালাড',
    englishName: 'Salad',
    description: 'Fresh cucumber, onion, tomato and coriander tossed with a light citrus dressing.',
    significance: 'Cool, crisp freshness that balances the rich ceremonial meal.',
    category: 'starter',
    emoji: '🥗',
    servingTime: 'Starter',
    servingOrder: 2
  },
  {
    id: 'veg-cutlet',
    bengaliName: 'ভেজ কাটলেট',
    englishName: 'Veg Cutlet',
    description: 'Golden-crisp vegetable cutlets, lightly spiced and perfect for starting the feast.',
    significance: 'A warm welcome bite that ushers the celebration in with crunch and flavour.',
    category: 'starter',
    emoji: '🥟',
    servingTime: 'Starter',
    servingOrder: 3
  },
  {
    id: 'tomato-kasundi',
    bengaliName: 'টমেটো সস ও কাসুন্দি',
    englishName: 'Tomato Sauce & Kasundi',
    description: 'Tangy tomato sauce alongside kasundi, Bengal\'s beloved mustard relish.',
    significance: 'The classic Bengali dip that livens up every bite on the platter.',
    category: 'starter',
    emoji: '🍅',
    servingTime: 'Starter',
    servingOrder: 4
  },

  // Rice & Mains
  {
    id: 'fried-rice',
    bengaliName: 'ফ্রাইড রাইস',
    englishName: 'Fried Rice',
    description: 'Fragrant basmati lightly fried with vegetables and subtle spices.',
    significance: 'A comforting, festive rice dish shared at large family tables.',
    category: 'rice',
    emoji: '🍛',
    servingTime: 'Main course',
    servingOrder: 5
  },
  {
    id: 'paneer-chilly-chicken',
    bengaliName: 'পনির বাটার মাসালা / চিলি চিকেন',
    englishName: 'Paneer Butter Masala / Chilly Chicken',
    description: 'A creamy paneer gravy or a spicy chilli chicken — choose your favourite.',
    significance: 'The centrepiece of the spread, made to delight vegetarian and meat-lover guests alike.',
    category: 'nonveg',
    emoji: '🥘',
    servingTime: 'Main course',
    servingOrder: 6
  },
  {
    id: 'sak',
    bengaliName: 'শাক',
    englishName: 'Sak (Sautéed Greens)',
    description: 'Tender leafy greens gently cooked with mustard oil, garlic and a pinch of chilli.',
    significance: 'Humble, nourishing greens that connect the feast to home cooking.',
    category: 'vegetarian',
    emoji: '🥬',
    servingTime: 'Side dish',
    servingOrder: 7
  },
  {
    id: 'sada-bhat',
    bengaliName: 'সাদা ভাত',
    englishName: 'Sada Bhat (Steamed Rice)',
    description: 'Simple steamed white rice, the comforting base of every Bengali feast.',
    significance: 'Pure and wholesome, the stage for every curry in the meal.',
    category: 'rice',
    emoji: '🍚',
    servingTime: 'Main course',
    servingOrder: 8
  },
  {
    id: 'daal',
    bengaliName: 'ডাল',
    englishName: 'Daal (Lentils)',
    description: 'Slow-cooked yellow lentils tempered with cumin, garlic and ghee.',
    significance: 'A nourishing everyday classic, always welcome at any celebration.',
    category: 'vegetarian',
    emoji: '🍲',
    servingTime: 'Side dish',
    servingOrder: 9
  },
  {
    id: 'alu-potol',
    bengaliName: 'আলু পটল',
    englishName: 'Alu Potol (Potato & Pointed Gourd)',
    description: 'Potato and pointed gourd simmered in a light yogurt-spiced gravy.',
    significance: 'A gentle, homely dry curry that Bengali tables cannot do without.',
    category: 'vegetarian',
    emoji: '🥔',
    servingTime: 'Side dish',
    servingOrder: 10
  },
  {
    id: 'ilish-bhappa',
    bengaliName: 'ইলিশ ভাপা',
    englishName: 'Ilish Bhapa (Steamed Hilsa)',
    description: 'Hilsa steamed with mustard, green chilli and coconut — an iconic Bengali delicacy.',
    significance: 'The king of Bengali fish, reserved for the grandest gatherings.',
    category: 'nonveg',
    emoji: '🐟',
    servingTime: 'Main course',
    servingOrder: 11
  },
  {
    id: 'mutton-fish',
    bengaliName: 'মাটন-খাসি / মাছ-কাতলা কালিয়া',
    englishName: 'Mutton-Khasi / Fish-Katla Kalia',
    description: 'Tender mutton-khasi curry or a rich katla kalia, slow-cooked with family spices.',
    significance: 'A hearty main course prepared with the family\'s most-loved recipe.',
    category: 'nonveg',
    emoji: '🍢',
    servingTime: 'Main course',
    servingOrder: 12
  },

  // Desserts
  {
    id: 'mixed-fruit-chutney',
    bengaliName: 'মিক্সড ফ্রুট চাটনি',
    englishName: 'Mixed Fruit Chutney',
    description: 'Sweet-and-tangy chutney made with a medley of seasonal fruits and jaggery.',
    significance: 'A palate-cleansing finish that sets the stage for sweets.',
    category: 'dessert',
    emoji: '🍇',
    servingTime: 'Dessert',
    servingOrder: 13
  },
  {
    id: 'poromanno',
    bengaliName: 'পরমান্ন',
    englishName: 'Paramanna',
    description: 'A ceremonial sweet rice delicacy, gently cooked with jaggery and ghee.',
    significance: 'A traditional festive sweet that crowns the Annaprashon menu.',
    category: 'dessert',
    emoji: '🥣',
    servingTime: 'Dessert',
    servingOrder: 14
  },
  {
    id: 'komola-bhog',
    bengaliName: 'কমলা ভোগ',
    englishName: 'Komola Bhog',
    description: 'A fragrant orange-flavoured rice pudding, delicately sweet.',
    significance: 'Named after the orange, a festive offering of sweetness.',
    category: 'dessert',
    emoji: '🍊',
    servingTime: 'Dessert',
    servingOrder: 15
  },
  {
    id: 'sondesh',
    bengaliName: 'সন্দেশ',
    englishName: 'Sondesh',
    description: 'Delicate chhena sweetmeat, subtle fragrant and melt-in-the-mouth.',
    significance: 'Bengal\'s iconic sweet, symbol of joy and celebration.',
    category: 'dessert',
    emoji: '🍪',
    servingTime: 'Dessert',
    servingOrder: 16
  },
  {
    id: 'baked-rosogolla',
    bengaliName: 'বেকড রসগোল্লা',
    englishName: 'Baked Rosogolla',
    description: 'The classic doused syrup loaf, given a warm baked note.',
    significance: 'A beloved Bengali favourite with a delightful, modern finish.',
    category: 'dessert',
    emoji: '🍩',
    servingTime: 'Dessert',
    servingOrder: 17
  },
  {
    id: 'ice-cream',
    bengaliName: 'আইসক্রিম',
    englishName: 'Ice Cream',
    description: 'Assorted scoops to cool and delight guests of every age.',
    significance: 'The playful, happy ending to the ceremony feast.',
    category: 'dessert',
    emoji: '🍨',
    servingTime: 'Dessert',
    servingOrder: 18
  },
  {
    id: 'hajmola',
    bengaliName: 'হজমোলা',
    englishName: 'Hajmola',
    description: 'Tangy digestive tablets served after the meal to freshen the palate.',
    significance: 'A thoughtful touch to aid digestion and end the feast on a zesty note.',
    category: 'digestive',
    emoji: '🍋',
    servingTime: 'After dessert',
    servingOrder: 19
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
