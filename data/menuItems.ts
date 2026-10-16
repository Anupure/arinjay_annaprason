export interface MenuItem {
  id: string;
  bengaliName: string;
  englishName: string;
  description: string;
  bengaliDescription: string;
  significance: string;
  bengaliSignificance: string;
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
  /** Position in the ceremony serving sequence (1 = served first). */
  servingOrder: number;
}

export const menuItems: MenuItem[] = [
  {
    id: 'mineral-water',
    bengaliName: 'মিনারেল ওয়াটার',
    englishName: 'Mineral Water',
    description:
      'With so many delicious dishes to enjoy, do not forget to drink some water too!',
    bengaliDescription:
      'এত ভালো ভালো খাবারের মাঝে জল খেতেও ভুলবেন না কিন্তু!',
    significance:
      'A simple, thoughtful touch to keep everyone cool and hydrated.',
    bengaliSignificance:
      'অতিথিদের স্বাচ্ছন্দ্য ও জলপানের কথা মাথায় রেখে করা একটি ছোট্ট অথচ যত্নশীল আয়োজন।',
    category: 'beverage',
    emoji: '💧',
    servingOrder: 1
  },
  {
    id: 'veg-cutlet',
    bengaliName: 'ভেজ কাটলেট',
    englishName: 'Veg Cutlet',
    description:
      'Crispy, tasty vegetable cutlets. One is good, but will you stop at one?',
    bengaliDescription:
      'মুচমুচে আর মজাদার ভেজ কাটলেট। একটা খেয়েই থামতে পারবেন তো?',
    significance:
      'A classic festive bite that welcomes guests with flavour and crunch.',
    bengaliSignificance:
      'স্বাদ ও মুচমুচে ভাবের মেলবন্ধনে তৈরি এই জনপ্রিয় জলখাবার অতিথিদের উৎসবের আমেজে স্বাগত জানায়।',
    category: 'starter',
    emoji: '🥟',
    servingOrder: 2
  },
  {
    id: 'salad',
    bengaliName: 'স্যালাড',
    englishName: 'Salad',
    description:
      'Fresh and crunchy salad to add a little freshness to the feast.',
    bengaliDescription:
      'এত মজার খাবারের মাঝে একটু টাটকা স্যালাডও থাক!',
    significance:
      'Balances the richness of the feast and brings a clean, crisp note.',
    bengaliSignificance:
      'ভোজের অন্যান্য সুস্বাদু পদের মাঝে স্যালাড এনে দেয় সতেজতা ও স্বাদের ভারসাম্য।',
    category: 'starter',
    emoji: '🥗',
    servingOrder: 3
  },
  {
    id: 'tomato-kasundi',
    bengaliName: 'কাসুন্দি',
    englishName: 'Kasundi',
    description:
      'A little kasundi makes every bite more exciting. Start small if you are not used to the mustard kick!',
    bengaliDescription:
      'একটু কাসুন্দি কাটলেটের স্বাদ বাড়িয়ে দেয়। তবে ঝাঁঝ বেশি লাগলে অল্প দিয়েই শুরু করুন!',
    significance:
      'A beloved flavour accent that brings the taste of home to the table.',
    bengaliSignificance:
      'বাঙালির চিরপরিচিত কাসুন্দির ঝাঁঝালো স্বাদ খাবারে ঘরোয়া আমেজ ও ঐতিহ্যের ছোঁয়া এনে দেয়।',
    category: 'starter',
    emoji: '🍅',
    servingOrder: 4
  },
  {
    id: 'fried-rice',
    bengaliName: 'ফ্রাইড রাইস',
    englishName: 'Fried Rice',
    description:
      'Flavourful fried rice that might make you ask for a second helping!',
    bengaliDescription:
      'সুস্বাদু ফ্রাইড রাইস। এক প্লেটের পর আরেক প্লেট চাইলে কিন্তু অবাক হওয়ার কিছু নেই!',
    significance:
      'A comforting festive rice dish for sharing among family and guests.',
    bengaliSignificance:
      'পরিবার ও অতিথিদের সঙ্গে আনন্দ ভাগ করে নেওয়ার জন্য উপযুক্ত একটি সুস্বাদু উৎসবের পদ।',
    category: 'rice',
    emoji: '🍛',
    servingOrder: 5
  },
  {
    id: 'paneer-chilly-chicken',
    bengaliName: 'চিলি পনির / চিলি চিকেন',
    englishName: 'Chili Paneer / Chili Chicken',
    description:
      'Spicy, tasty, and full of flavour. Keep your water glass nearby and enjoy!',
    bengaliDescription:
      'ঝালঝাল আর মজাদার চিলি পনির বা চিলি চিকেন। পাশে এক গ্লাস জল রাখলে মন্দ হয় না!',
    significance:
      'A crowd-pleasing dish that adds excitement to the ceremonial spread.',
    bengaliSignificance:
      'অতিথিদের পছন্দের এই সুস্বাদু পদ ভোজের আয়োজনে আনে বাড়তি আনন্দ ও বৈচিত্র্য।',
    category: 'nonveg',
    emoji: '🥘',
    servingOrder: 6
  },
  {
    id: 'sak',
    bengaliName: 'শাক ভাজা',
    englishName: 'Shaak Bhaja',
    description:
      'A simple Bengali favourite. After all the rich dishes, a little shaak is always welcome!',
    bengaliDescription:
      'বাঙালির চেনা শাক ভাজা। এত রকম মজার খাবারের মাঝেও পাতে একটু শাক থাকা চাই!',
    significance:
      'A simple, nourishing Bengali classic that brings comfort to the meal.',
    bengaliSignificance:
      'বাঙালির ঘরোয়া রান্নার এক পরিচিত পদ, যা খাবারে পুষ্টি ও ঐতিহ্যবাহী স্বাদের ছোঁয়া যোগ করে।',
    category: 'vegetarian',
    emoji: '🥬',
    servingOrder: 7
  },
  {
    id: 'sada-bhat',
    bengaliName: 'সাদা ভাত',
    englishName: 'Plain Rice',
    description:
      'The Bengali meal-time favourite that goes perfectly with almost every dish on the plate!',
    bengaliDescription:
      'বাঙালির পাতে সাদা ভাত থাকবেই! ডাল হোক বা মাংস, সব কিছুর সঙ্গেই জমে যায়!',
    significance:
      'A staple of the Bengali feast, comforting and essential.',
    bengaliSignificance:
      'বাঙালির খাদ্যসংস্কৃতির অবিচ্ছেদ্য অংশ সাদা ভাত, যা ভোজের অন্যান্য পদের সঙ্গে পরিপূর্ণতা আনে।',
    category: 'rice',
    emoji: '🍚',
    servingOrder: 8
  },
  {
    id: 'daal',
    bengaliName: 'মিক্সড ডাল',
    englishName: 'Mixed Daal',
    description:
      'Warm, comforting dal that makes a plate of rice feel complete. A Bengali meal is hardly the same without it!',
    bengaliDescription:
      'গরম গরম মিক্সড ডাল আর সাদা ভাত—বাঙালির পাতে এই জুটির আলাদাই মজা!',
    significance:
      'A staple dish that adds richness and nourishment to the feast.',
    bengaliSignificance:
      'বাঙালির ভোজে ডাল একটি পরিচিত ও প্রিয় পদ, যা খাবারে পুষ্টি ও স্বাদের ভারসাম্য বজায় রাখে।',
    category: 'vegetarian',
    emoji: '🍲',
    servingOrder: 9
  },
  {
    id: 'alu-potol',
    bengaliName: 'চিংড়ি পোস্ত / আলু-পটলের তরকারি',
    englishName: 'Prawn Posto / Aloo-Potol Curry',
    description:
      'Prawn posto or aloo-potol curry? Pick your favourite. Both go wonderfully with rice!',
    bengaliDescription:
      'চিংড়ি পোস্ত, নাকি আলু-পটল? পছন্দের পদটি বেছে নিন—ভাতের সঙ্গে দুটোই জমে!',
    significance:
      'This dish captures the homestyle warmth and diversity of the feast.',
    bengaliSignificance:
      'বাঙালির ঘরোয়া রান্নার স্বাদ ও বৈচিত্র্যকে তুলে ধরে এই পদ, যা ভোজে ঐতিহ্যের ছোঁয়া এনে দেয়।',
    category: 'vegetarian',
    emoji: '🥔',
    servingOrder: 10
  },
  {
    id: 'mutton-fish',
    bengaliName: 'খাসির মাংস / ইলিশ ভাপা',
    englishName: 'Khashi Mutton / Ilish Bhapa',
    description:
      'Khasi mutton or steamed hilsa, two Bengali favourites that make the feast extra special. Save some room on your plate!',
    bengaliDescription:
      'খাসির মাংস হোক বা ইলিশ ভাপা, দুটোই বাঙালির ভীষণ প্রিয়। তাই পাতে একটু জায়গা রেখেই এগোবেন!',
    significance:
      'A celebratory dish that reflects the richness of Bengali hospitality.',
    bengaliSignificance:
      'বাঙালির আপ্যায়ন ও উৎসবের ঐতিহ্যকে তুলে ধরে এই বিশেষ পদ, যা ভোজের আয়োজনে আভিজাত্য যোগ করে।',
    category: 'nonveg',
    emoji: '🐟',
    servingOrder: 11
  },
  {
    id: 'mixed-fruit-chutney',
    bengaliName: 'আমের চাটনি',
    englishName: 'Mango Chutney',
    description:
      'Sweet and tangy mango chutney to refresh your taste buds. There is always room for a little more chutney!',
    bengaliDescription:
      'মিষ্টি-টক আমের চাটনি, যা খাওয়ার শেষে মুখের স্বাদ বদলে দেয়। আর একটু নিলে কিন্তু দোষ নেই!',
    significance:
      'A palate-refreshing dish that prepares everyone for the sweets to come.',
    bengaliSignificance:
      'আমের চাটনির মিষ্টি-টক স্বাদ মুখের স্বাদ বদলে দেয় এবং পরবর্তী মিষ্টিমুখের জন্য রুচি বাড়ায়।',
    category: 'dessert',
    emoji: '🍇',
    servingOrder: 12
  },
  {
    id: 'poromanno',
    bengaliName: 'পরমান্ন',
    englishName: 'Paramanna',
    description:
      'A traditional sweet rice dish made with love. One spoonful may leave you wanting another!',
    bengaliDescription:
      'ভালোবাসা দিয়ে তৈরি ঐতিহ্যবাহী মিষ্টি পরমান্ন। এক চামচ খেয়ে মন ভরবে, নাকি আরেক চামচ চাই?',
    significance:
      'A traditional festive sweet that is deeply rooted in Bengali rituals.',
    bengaliSignificance:
      'পরমান্ন বাঙালির ঐতিহ্যবাহী মিষ্টি পদ এবং অন্নপ্রাশনের মতো শুভ অনুষ্ঠানের এক বিশেষ অংশ।',
    category: 'dessert',
    emoji: '🥣',
    servingOrder: 13
  },
  {
    id: 'rosogolla',
    bengaliName: 'রসগোল্লা',
    englishName: 'Rosogolla',
    description:
      'Soft, spongy, and full of sweet syrup. Just one rosogolla? That might be a difficult promise to keep!',
    bengaliDescription:
      'নরম, তুলতুলে আর রসে ভরা রসগোল্লা। শুধু একটা খাবেন, নাকি আরও দুটো হয়ে যাবে?',
    significance:
      'A beloved Bengali sweet, rich in tradition and joy.',
    bengaliSignificance:
      'বাঙালির অতি প্রিয় ঐতিহ্যবাহী মিষ্টি রসগোল্লা আনন্দ, মিষ্টিমুখ ও আপ্যায়নের প্রতীক।',
    category: 'dessert',
    emoji: '🍪',
    servingOrder: 14
  },
  {
    id: 'sondesh',
    bengaliName: 'সন্দেশ',
    englishName: 'Sondesh',
    description:
      'A classic Bengali sweet made with chhena. Small in size, but big on taste!',
    bengaliDescription:
      'ছানা দিয়ে তৈরি বাঙালির চেনা সন্দেশ। আকারে ছোট হলেও স্বাদে একেবারে জমজমাট!',
    significance:
      'A refined sweet treat that reflects the elegance of Bengali cuisine.',
    bengaliSignificance:
      'সন্দেশ বাঙালির মিষ্টি তৈরির শিল্প ও রুচিশীল খাদ্যসংস্কৃতির এক অনন্য পরিচয়।',
    category: 'dessert',
    emoji: '🍩',
    servingOrder: 15
  },
  {
    id: 'baked-rosogolla',
    bengaliName: 'বেকড রসগোল্লা',
    englishName: 'Baked Rosogolla',
    description:
      'The good old rosogolla with a baked twist. A familiar favourite in a new avatar!',
    bengaliDescription:
      'চেনা রসগোল্লার একটু অন্য রূপ। পুরনো প্রিয় মিষ্টি, এবার নতুন সাজে!',
    significance:
      'A modern twist on a timeless Bengali favourite.',
    bengaliSignificance:
      'বাঙালির চিরকালীন প্রিয় রসগোল্লায় আধুনিক রান্নার ছোঁয়া এনে দেয় এই বিশেষ মিষ্টি।',
    category: 'dessert',
    emoji: '🍨',
    servingOrder: 16
  },
  {
    id: 'ice-cream',
    bengaliName: 'আইসক্রিম',
    englishName: 'Ice Cream',
    description:
      'A cool and creamy finish to the feast. Even the grown-ups may ask for another scoop!',
    bengaliDescription:
      'ভোজের শেষে ঠান্ডা ঠান্ডা আইসক্রিম। ছোটদের সঙ্গে বড়রাও আর এক স্কুপ চাইতেই পারেন!',
    significance:
      'A cheerful ending to the meal and a happy festive touch.',
    bengaliSignificance:
      'ভোজের শেষে আইসক্রিম এনে দেয় বাড়তি আনন্দ, যা উৎসবের মেজাজকে আরও মধুর করে তোলে।',
    category: 'dessert',
    emoji: '🍦',
    servingOrder: 17
  },
  {
    id: 'hajmola',
    bengaliName: 'হজমোলা',
    englishName: 'Hajmola',
    description:
      'A tangy little treat to finish the feast. After so many delicious dishes, let us end on a flavourful note!',
    bengaliDescription:
      'এত রকম খাবারের পর শেষে একটু টক-ঝাল হজমোলা। খাওয়াদাওয়ার ইতি হোক মুখরোচক স্বাদে!',
    significance:
      'A thoughtful closing note to complete the feast with comfort.',
    bengaliSignificance:
      'ভোজের শেষে পরিচিত এই মুখরোচক বড়ি আপ্যায়নের একটি ছোট্ট, যত্নশীল পরিসমাপ্তি।',
    category: 'digestive',
    emoji: '🍋',
    servingOrder: 18
  }
];

export const ceremonyRituals = [
  {
    name: 'প্রথম ধাপ (First Step)',
    bengaliName: 'প্রণাম ও আশীর্বাদ',
    description: 'Blessing from elders before the feeding ceremony',
    bengaliDescription:
      'অন্নপ্রাশনের মূল আচার শুরু হওয়ার আগে পরিবারের বড়দের প্রণাম করে তাঁদের আশীর্বাদ নেওয়া।',
    order: 1
  },
  {
    name: 'Second Step',
    bengaliName: 'সাদা ভাত ও ডাল পরিবেশন',
    description: 'Serving of rice and lentils to the baby with prayers',
    bengaliDescription:
      'প্রার্থনা ও শুভকামনার মধ্য দিয়ে শিশুকে সাদা ভাত ও ডাল খাওয়ানোর আচার পালন করা।',
    order: 2
  },
  {
    name: 'Third Step',
    bengaliName: 'অন্যান্য খাবার',
    description: 'Introduction to the full ceremonial spread',
    bengaliDescription:
      'অনুষ্ঠানের ভোজে আয়োজিত অন্যান্য খাবার ও পদের সঙ্গে অতিথিদের পরিচয় করিয়ে দেওয়া।',
    order: 3
  },
  {
    name: 'Fourth Step',
    bengaliName: 'পরমান্ন ও মিষ্টি',
    description: 'Sharing of poromanno and sweets among guests',
    bengaliDescription:
      'পরিবার ও অতিথিদের মধ্যে পরমান্ন এবং বিভিন্ন মিষ্টি পরিবেশনের মাধ্যমে আনন্দ ভাগ করে নেওয়া।',
    order: 4
  }
];

export const culturalSignificance = {
  title: 'অন্নপ্রাশন সম্পর্কে',
  englishTitle: 'About Annaprashon',

  content: `Annaprashon is a sacred Bengali Hindu ceremony which marks the occasion when a baby is introduced to solid food for the first time.
This ancient tradition, rooted in the Vedic period, is believed to bring good health, longevity, and prosperity to the child.
The ceremony typically takes place when the baby is 6-8 months old, and it is celebrated with family gatherings and feasting.`,

  bengaliContent: `অন্নপ্রাশন বাঙালি হিন্দু পরিবারের একটি পবিত্র ও আনন্দময় অনুষ্ঠান। এই অনুষ্ঠানের মাধ্যমে শিশুকে প্রথমবারের মতো ভাত বা কঠিন খাবার খাওয়ানোর প্রথা পালন করা হয়।
প্রাচীন ঐতিহ্য ও ধর্মীয় বিশ্বাসের সঙ্গে জড়িত এই অনুষ্ঠান শিশুর সুস্বাস্থ্য, দীর্ঘায়ু ও সমৃদ্ধি কামনার প্রতীক।
সাধারণত শিশুর বয়স ছয় থেকে আট মাস হলে অন্নপ্রাশন করা হয়। পরিবারের সদস্য, আত্মীয়স্বজন ও প্রিয়জনদের উপস্থিতিতে আশীর্বাদ, আনন্দ ও ভোজের মধ্য দিয়ে দিনটি উদ্‌যাপন করা হয়।`,

  traditions: [
    'The main ritual involves feeding the baby a soft rice preparation, considered most suitable for a baby\'s digestive system.',
    'Grandmothers and mothers play a crucial role in preparing the food, often passing down century-old recipes.',
    'The ceremony is attended by close family and friends who bless the child.',
    'Various rituals and prayers are performed to ensure the child\'s healthy growth.',
    'The celebration concludes with sharing of sweet dishes among all guests.'
  ],

  bengaliTraditions: [
    'মূল আচারটির অংশ হিসেবে শিশুকে নরম করে রান্না করা ভাত খাওয়ানো হয়, যা শিশুর উপযোগী খাবার হিসেবে বিবেচিত।',
    'খাবার তৈরিতে মা ও ঠাকুমা-দিদিমাদের গুরুত্বপূর্ণ ভূমিকা থাকে। তাঁদের হাত ধরে বহু পুরনো পারিবারিক রান্নার ঐতিহ্য পরবর্তী প্রজন্মে পৌঁছে যায়।',
    'পরিবারের সদস্য, আত্মীয়স্বজন ও ঘনিষ্ঠ বন্ধুরা অনুষ্ঠানে উপস্থিত থেকে শিশুকে আশীর্বাদ করেন।',
    'শিশুর সুস্বাস্থ্য, সুন্দর ভবিষ্যৎ ও মঙ্গল কামনায় বিভিন্ন আচার-অনুষ্ঠান ও প্রার্থনা করা হয়।',
    'অনুষ্ঠানের আনন্দ ভাগ করে নিতে অতিথিদের মধ্যে বিভিন্ন মিষ্টি পরিবেশন করা হয় এবং ভোজের আয়োজন করা হয়।'
  ]
};