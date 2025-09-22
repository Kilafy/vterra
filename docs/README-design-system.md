# Vterra - Real Estate & Hospitality Solutions

A sophisticated Next.js landing page featuring rustic boutique elegance design, built with TailwindCSS and prepared for Sanity CMS integration.

## 🎨 Design Philosophy: Rustic Boutique Elegance

Inspired by premium hospitality brands like Palisades, Vterra's design balances luxury with authenticity, creating a warm yet sophisticated brand presence.

### Color Palette

#### Base Neutrals
- **Background**: `#FAF8F5` (Warm off-white)
- **Foreground**: `#1A1A1A` (Rich charcoal)
- **Card**: `#FFFFFF` (Clean white)

#### Brand Colors
- **Vterra Gold**: `#D4A574` - Warm gold accents
- **Vterra Olive**: `#8B9A6B` - Natural olive green
- **Vterra Terracotta**: `#C09577` - Earthy terracotta
- **Vterra Wood**: `#A0846B` - Warm wood brown  
- **Vterra Stone**: `#B8AFA0` - Natural stone gray
- **Vterra Cream**: `#F5F2ED` - Warm cream

### Typography Hierarchy

- **Display**: Playfair Display (serif) for headings
- **Body**: Inter (sans-serif) for content
- **Monospace**: Geist Mono for code

### Visual Elements

- **Mixed Border Radius**: Combination of rounded (`rounded-tr-[80px]`) and straight edges
- **Layered Shadows**: Soft shadows with `shadow-lg` and `hover:shadow-2xl`
- **Gradient Overlays**: Subtle gradients using brand colors with transparency
- **Decorative Lines**: Thin accent lines using brand colors

## 🏗️ Architecture

### Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles with color system
│   ├── layout.tsx           # Root layout
│   └── page.tsx            # Homepage composition
├── components/
│   ├── ui/                 # Shadcn/ui components
│   ├── hero-section.tsx    # Landing hero with video background
│   ├── welcome-section.tsx # About section with Palisades inspiration
│   ├── services-section.tsx # Four business divisions showcase
│   ├── navbar.tsx          # Navigation with language toggle
│   └── ...
├── lib/
│   ├── utils.ts           # General utilities
│   └── sanity-utils.ts    # Sanity CMS integration utilities
└── types/
    └── sanity.ts          # TypeScript interfaces for Sanity
```

## 🌐 Internationalization

The site supports English and Spanish with a language toggle in the navigation.

### Language Structure
```typescript
const content = {
  en: { /* English content */ },
  es: { /* Spanish content */ }
}
```

## 🏢 Business Units

### 1. Real Estate Support
**Focus**: Cross-border transaction excellence
- Transaction coordination
- Title company liaison
- Closing management
- Foreign buyer assistance

### 2. Hospitality Operations  
**Focus**: Guest experience and profitability
- Property management (short-term rentals)
- Restaurant operations
- Revenue optimization
- Brand development

### 3. Marketing & Brand Lab
**Focus**: Creative and data-driven growth
- Brand strategy
- Lead generation  
- Creative campaigns
- Digital marketing

### 4. Strategic Consulting
**Focus**: Cross-border business expansion
- Market analysis
- Investment structuring
- Operations optimization
- International market entry

## 🔗 Sanity CMS Integration (Ready for Implementation)

### Content Types Prepared

#### Core Content
- `heroSection` - Landing page hero content
- `welcomeSection` - About/welcome section
- `servicesSection` - Business units overview  
- `businessService` - Individual service details
- `contactCTA` - Contact call-to-action

#### Portfolio & Properties
- `property` - Real estate listings
- `experienceItem` - Portfolio/case studies

#### Site Management
- `siteSettings` - Global site configuration
- `navigationMenu` - Navigation structure
- `footerContent` - Footer information

### Localization Support
All content types support English/Spanish localization:
```typescript
interface LocalizedString {
  en: string;
  es: string;
}
```

### Image Optimization
Built-in support for Sanity's image optimization:
```typescript
buildSanityImageUrl(image, {
  width: 800,
  height: 600,
  quality: 85,
  format: 'webp'
})
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
# Clone the repository
git clone [repository-url]
cd vterra

# Install dependencies
npm install

# Start development server
npm run dev
```

### Environment Variables (For Sanity Integration)
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

## 🎯 Component Features

### Hero Section
- Elegant split-layout design
- Video background with fallback image
- Curved border radius elements
- Responsive typography hierarchy
- Floating accent elements

### Services Section
- Large format service cards
- Image overlays with brand colors
- Numbered service items
- Feature lists with brand accent dots
- Responsive grid layout

### Welcome Section
- Palisades-inspired asymmetric layout
- Mixed image arrangements
- Quote highlights with accent borders
- Brand color gradients
- Decorative elements

### Navigation
- Fixed header with backdrop blur
- Smooth scroll to sections
- Language toggle
- Responsive mobile menu
- Brand color accents

## 🛠️ Customization

### Adding New Brand Colors
1. Add CSS custom properties in `globals.css`:
```css
--vterra-new-color: #HEXCODE;
```

2. Add utility classes:
```css
.bg-vterra-new-color { background-color: var(--vterra-new-color); }
.text-vterra-new-color { color: var(--vterra-new-color); }
```

### Content Updates
Content is structured for easy Sanity CMS integration. Current static content can be easily migrated to Sanity when ready.

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Typography Scaling**: Responsive text sizes across breakpoints
- **Touch Friendly**: Appropriate touch targets for mobile

## 🔍 SEO Ready

- Semantic HTML structure
- Proper heading hierarchy (h1, h2, h3)
- Alt text support for images
- Meta tags preparation
- Structured data ready for Sanity integration

## 🎨 Design System Classes

### Spacing
- Consistent padding/margin scale
- Section padding: `py-24 lg:py-32`
- Container spacing: `px-4 sm:px-6 lg:px-8`

### Transitions
- Duration: `duration-300` for most interactions
- Hover effects with `hover:` modifiers
- Smooth animations with `transition-all`

## 📞 Next Steps for Full Implementation

1. **Sanity Studio Setup**: Configure Sanity studio with provided schemas
2. **Content Migration**: Move static content to Sanity CMS
3. **API Integration**: Implement Sanity client and queries
4. **Image Optimization**: Connect Sanity image URLs
5. **Form Handling**: Add contact form with backend integration
6. **Analytics**: Implement tracking (Google Analytics, etc.)
7. **Performance**: Add performance monitoring
8. **Testing**: Implement unit and integration tests

---

**Brand Identity**: Vterra represents stability (Terra = land) with personal commitment (V = Valentina), creating trust through sophisticated, authentic design.

**Target Market**: Real estate professionals, investors, and hospitality entrepreneurs expanding across U.S.-Colombia corridors.

**Competitive Advantage**: Integrated ecosystem approach rather than isolated services, with deep cross-border expertise.