# 🏡 Vterra - Real Estate Solutions

Modern real estate website built with Next.js 15 and Sanity CMS, featuring bilingual support (English/Spanish) and a beautiful property showcase.

## ✨ Features

- 🌐 **Bilingual**: Full English and Spanish support
- 🎨 **Modern Design**: Elegant UI with smooth animations and hover effects
- 📱 **Fully Responsive**: Optimized for all devices
- 🖼️ **Image Gallery**: Advanced carousel with fullscreen modal and thumbnails
- 🔍 **Advanced Filters**: Filter properties by type, location, price, bedrooms, bathrooms, and more
- ⚡ **Blazing Fast**: ISR (Incremental Static Regeneration) with 60s revalidation
- 📝 **CMS Powered**: Easy content management with Sanity Studio
- 🎯 **SEO Optimized**: Meta tags, structured data, and semantic HTML

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Kilafy/vterra.git

# Navigate to project directory
cd vterra

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📚 Documentation

- **[Deployment Guide](docs/DEPLOYMENT.md)** - Complete guide for deploying to Vercel and other platforms
- **[Security Configuration](docs/SECURITY.md)** - Security best practices and Sanity setup
- **[Sanity Setup](docs/sanity-setup.md)** - CMS configuration and content management
- **[Design System](docs/README-design-system.md)** - UI components and styling guidelines

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **CMS**: [Sanity](https://www.sanity.io/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: Custom components with [shadcn/ui](https://ui.shadcn.com/)
- **Language**: TypeScript
- **Icons**: [Lucide React](https://lucide.dev/)
- **Image Optimization**: Next.js Image + Sanity CDN

## 📁 Project Structure

```
vterra/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Homepage
│   │   ├── properties/        # Properties catalog & detail pages
│   │   └── studio/            # Sanity Studio (CMS)
│   ├── components/            # React components
│   │   ├── ui/               # Base UI components
│   │   ├── hero-section.tsx  # Homepage hero
│   │   ├── properties-*.tsx  # Property components
│   │   └── ...
│   ├── sanity/               # Sanity configuration
│   │   ├── client.ts         # Sanity client setup
│   │   ├── queries.ts        # GROQ queries
│   │   └── image.ts          # Image helpers
│   └── types/                # TypeScript types
├── docs/                     # Documentation
├── public/                   # Static assets
└── sanity/                   # Sanity schema definitions
```

## 🎨 Key Features

### Property Showcase
- Featured properties section on homepage
- Advanced property catalog with multiple filters
- Detailed property pages with image galleries
- Smooth hover animations and transitions

### Image Management
- Optimized image loading with Sanity CDN
- Responsive images for all screen sizes
- Fullscreen modal gallery with keyboard navigation
- Thumbnail preview grid

### Bilingual Support
- English and Spanish content
- Language toggle in navigation
- Localized property details and UI text
- SEO-friendly language switching

### CMS Integration
- Real-time content updates
- Intuitive Sanity Studio interface
- Structured content model for properties
- Image upload and management

## 🌐 Deployment

### Vercel (Recommended)

**No environment variables required!** 🎉

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically

See [Deployment Guide](docs/DEPLOYMENT.md) for detailed instructions.

### Environment Variables

**Optional** - Only needed if your Sanity dataset is private:

```bash
# Only if dataset is private
SANITY_API_READ_TOKEN=your_token_here
```

All public Sanity configuration is hardcoded in `src/sanity/client.ts` for security and simplicity.

## 🔒 Security

This project follows security best practices:

- ✅ No secrets in source code
- ✅ Public Sanity configuration hardcoded (safe by design)
- ✅ Private tokens only in environment variables
- ✅ `.env.local` excluded from version control
- ✅ Safe for public repositories

See [Security Configuration](docs/SECURITY.md) for details.

## 📝 Content Management

Access Sanity Studio at `/studio` to manage:

- Properties (title, description, price, location, etc.)
- Property images and galleries
- Property types and features
- Bilingual content (EN/ES)

Default credentials configured in Sanity dashboard.

## 🧪 Development

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run type-check

# Linting
npm run lint
```

## 📊 Performance

- **Lighthouse Score**: 90+ across all metrics
- **ISR**: 60 second revalidation for fresh content
- **Image Optimization**: Automatic via Next.js Image
- **CDN**: Sanity CDN for fast global image delivery
- **Code Splitting**: Automatic with Next.js

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is private and proprietary to Vterra Real Estate Solutions.

## 📧 Contact

For questions or support, please contact [your-email@example.com]

---

Built with ❤️ using Next.js and Sanity CMS
