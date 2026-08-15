# Arinjay's Annaprashon - Interactive Menu Website

🙏 A beautiful, interactive website celebrating Arinjay's Annaprashon ceremony - a sacred Bengali tradition marking the introduction of solid food to babies.

## 📋 Overview

This website is built with modern technologies to provide an engaging, accessible, and culturally-rich experience celebrating the Annaprashon (first rice ceremony) tradition.

### Features Implemented

#### Phase 1: Static Visual System ✅
- **Responsive Design**: Fully responsive layout that works seamlessly on mobile, tablet, and desktop
- **Beautiful UI**: Warm earth-tone color scheme with brown, cream, and gold accents
- **Animated Components**: Smooth fade-in, slide-in, and scroll animations
- **Accessibility**: Support for reduced motion preferences
- **Bilingual Support**: Both English and Bengali language support with persistent local storage

#### Phase 2: Interactive Menu System ✅
- **Advanced Search**: Real-time search across dish names, descriptions, and significance
- **Smart Filtering**: Multiple category filters with real-time results
- **View Modes**: Toggle between grid and list view layouts
- **Item Selection**: Click-to-select items with sticky selection summary
- **Interactive Sorting**: Sort by name, category, or significance
- **Guest Planning**: Dedicated planner for calculating portions and guest breakdowns
- **Dietary Preferences**: Customizable dietary restriction tracking
- **Favorites System**: Heart icon to save favorite dishes with persistent storage
- **Export Features**: Generate menus and copy favorite lists

### Components

#### Header
- Sticky navigation header with smooth scrolling
- Language toggle (English/Bengali)
- Mobile hamburger menu
- Logo with ceremony name

#### Hero Section
- Eye-catching banner with title and description
- Call-to-action button
- Decorative circular ornaments
- Scroll indicator

#### Menu Section
- Grid layout with 10+ traditional Bengali dishes
- Category filter (All, Rice Dishes, Vegetables, Desserts, Beverages)
- Interactive cards with expand/collapse functionality
- Shows significance, preparer, and serving time for each dish
- Beautiful Bengali names alongside English translations

#### Menu Interactive (Phase 2) ⭐ NEW
- Advanced search with bilingual support
- Multiple category filtering
- Grid/List view toggle
- Real-time sort options (name, category, significance)
- Checkbox selection with sticky summary panel
- Result counter and selected items badge
- Export menu functionality

#### Guest Planner (Phase 2) ⭐ NEW
- Total guest count calculator
- Children portion tracking
- Customizable dietary preferences
- Allergy information tracking
- Portion estimation (per person calculations)
- Dietary breakdown visualization
- Planning summary export
- Sticky positioning for easy reference

#### Favorites Panel (Phase 2) ⭐ NEW
- Floating heart button with badge counter
- Slide-out favorites panel
- Add/remove favorites functionality
- Copy favorite list to clipboard
- Persistent storage using localStorage
- Auto-saving with JSON serialization
- Beautiful animations and mobile optimization

#### Rituals Section
- Timeline visualization of ceremony steps
- Grid layout for mobile devices
- 4-step ceremonial progression with descriptions

#### Significance Section
- Cultural background and traditions
- Family contribution chart
- Information about the roles of different family members

#### Footer
- Quick navigation links
- Information about traditions
- Social and cultural messaging
- Responsive footer layout

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: CSS Modules with responsive design
- **Fonts**: Google Fonts (Playfair Display & Poppins)
- **State Management**: React Hooks
- **Localization**: Custom translation system

## 📁 Project Structure

```
agentic_web/
├── components/
│   ├── Header.tsx
│   ├── Header.module.css
│   ├── Hero.tsx
│   ├── Hero.module.css
│   ├── Menu.tsx
│   ├── Menu.module.css
│   ├── MenuInteractive.tsx          ⭐ (Phase 2)
│   ├── MenuInteractive.module.css   ⭐ (Phase 2)
│   ├── GuestPlanner.tsx              ⭐ (Phase 2)
│   ├── GuestPlanner.module.css       ⭐ (Phase 2)
│   ├── FavoritesPanel.tsx            ⭐ (Phase 2)
│   ├── FavoritesPanel.module.css     ⭐ (Phase 2)
│   ├── Rituals.tsx
│   ├── Rituals.module.css
│   ├── Significance.tsx
│   ├── Significance.module.css
│   ├── Footer.tsx
│   └── Footer.module.css
├── pages/
│   ├── _app.tsx
│   ├── _document.tsx
│   └── index.tsx
├── data/
│   └── menuItems.ts
├── lib/
│   └── translations.ts
├── styles/
│   └── globals.css
├── public/
├── package.json
├── tsconfig.json
├── next.config.js
└── .gitignore
```

## 🎨 Color Scheme

- **Primary Brown**: #8B4513
- **Dark Brown**: #5C2E0F
- **Light Brown**: #D2B48C
- **Cream Background**: #FFF8F3
- **Gold Accent**: #FFD700
- **Accent Gold**: #DAA520

## 📱 Responsive Breakpoints

- **Desktop**: Full-width layout
- **Tablet**: (max-width: 1024px) - Adjusted grid layouts
- **Mobile**: (max-width: 768px) - Single column, optimized for touch
- **Small Mobile**: (max-width: 480px) - Minimal spacing, large touch targets

## 🌍 Language Support

The website supports two languages:
- **English**: Default language
- **Bengali (বাংলা)**: Full Bengali translation of all content

Language preference is saved to localStorage for persistence.

## ✨ Key Features

1. **Bilingual Interface**: Seamless switching between English and Bengali
2. **Interactive Menu**: Click on menu items to see detailed information
3. **Smooth Animations**: CSS animations for enhanced user experience
4. **Accessibility**: WCAG compliance with reduced motion support
5. **SEO Optimized**: Proper meta tags and semantic HTML
6. **Performance**: Optimized CSS and lazy loading considerations
7. **Cultural Rich**: Authentic Bengali content and ceremonies

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📋 Content Included

### Menu Items (10 dishes)
1. **Khichuri** - Main ceremonial rice dish
2. **Pulao** - Fragrant rice
3. **Alubhaaja** - Fried potatoes
4. **Laukarani** - Bottle gourd curry
5. **Begun Bhaja** - Eggplant fry
6. **Payesh** - Bengali rice pudding
7. **Kheer** - Milk pudding
8. **Sandesh** - Bengali sweet
9. **Rasogulla** - Chenna balls
10. **Sharbat** - Chilled beverage

### Cultural Content
- Traditional ceremony timeline
- Family contribution roles
- Significance of each dish
- Bengali cultural background

## 🎯 Next Phases

- **Phase 2**: Interactive menu system with filters and search
- **Phase 3**: Advanced interactions (animations, hover effects, 3D elements)
- **Phase 4**: Backend integration (order management, guest list)
- **Phase 5**: Photo gallery and testimonials

## 📄 License

This website is created for celebrating Arinjay's Annaprashon ceremony.

## 🙏 Dedication

Made with love and care for Arinjay's special day - celebrating Bengali traditions and family traditions.

---

**Language Support**: English | বাংলা

**Responsive Design**: Mobile | Tablet | Desktop

**Accessibility**: WCAG 2.1 Level AA
