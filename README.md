# Summit Drilling - Modern Website Redesign

A modern, responsive Next.js website for Summit Drilling Company that maintains their original brand identity while providing an enhanced user experience.

## 🎨 Design Approach

This redesign preserves Summit Drilling's established brand identity while modernizing the user experience:

### **Brand Colors (Maintained)**
- **Primary Blue**: `#113361` - Main navigation and headers
- **Secondary Blue**: `#314a84` - Submenu backgrounds  
- **Accent Blue**: `#3d5999` - Hover states and accents
- **Summit Red**: `#be3925` - Call-to-action buttons and highlights
- **Red Dark**: `#8e1a1b` - Link colors and emphasis
- **Gray Bar**: `#dcdcdc` - Background sections

### **Key Features**
- ✅ **Original Logo & Branding** - Exact same logo and color scheme
- ✅ **Team Carousel** - Rotating employee photos with "responsible for your experience" theme
- ✅ **Mega Menu Services** - Three-column service navigation (Geophysics, Drilling, Remediation)
- ✅ **Company Messaging** - "An Exceptional Experience" brand promise
- ✅ **Modern Performance** - Fast loading, responsive design
- ✅ **Advanced Animations** - Smooth transitions and interactions
- ✅ **Mobile Optimized** - Responsive design for all devices

## 🚀 Technology Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Advanced animations (ready to implement)
- **Heroicons** - Beautiful SVG icons
- **Source Sans Pro** - Original typography maintained

## 📁 Project Structure

```
summit-drilling-website/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles and Summit theme
│   │   ├── layout.tsx           # Root layout with metadata
│   │   └── page.tsx             # Homepage component
│   └── components/
│       ├── Header.tsx           # Navigation with mega menu
│       ├── HeroSection.tsx      # Hero with team carousel
│       ├── ServicesSection.tsx  # Services showcase
│       ├── NewsSection.tsx      # News and company content
│       └── Footer.tsx           # Footer with company info
├── tailwind.config.ts           # Summit color theme configuration
├── next.config.js               # Next.js configuration
└── package.json                 # Dependencies and scripts
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm start
```

## 🎯 Design Highlights

### **Header & Navigation**
- Maintains exact Summit blue color scheme (`#113361`)
- Original logo positioning and sizing
- Mega menu dropdown with all service categories
- Mobile-responsive hamburger menu
- Smooth hover animations

### **Hero Section**
- **Team Member Carousel**: Rotating photos of key personnel
- **Background Slideshow**: Original drilling site imagery
- **Company Promise**: "An Exceptional Experience" messaging
- **Responsive Design**: Adapts beautifully to all screen sizes
- **Call-to-Actions**: "Start a Project" and "Our Services" buttons

### **Services Section**
- **Four-Column Layout**: Geophysics, Drilling, Industries, Remediation
- **Original Service Structure**: Maintains exact same categorization
- **Interactive Cards**: Hover effects and smooth transitions
- **Featured Services**: Health & Safety, Start Project, Our Fleet modules
- **Sonic Drilling Spotlight**: Dedicated section with original imagery

### **News & Content**
- **Company News Carousel**: Latest announcements and updates
- **Main Content Area**: Company messaging and value propositions
- **Technology Sidebar**: Equipment and capabilities showcase
- **Professional Layout**: Clean, organized information hierarchy

### **Footer**
- **Complete Contact Info**: Phone, fax, address
- **Service Links**: Quick access to all service categories
- **Company Resources**: Links to important pages and forms
- **Industry Affiliations**: Partner and certification logos
- **LinkedIn Integration**: Social media connection

## 🎨 Color Theme Usage

```css
/* Primary Summit Colors */
.bg-summit-primary     /* #113361 - Main navigation */
.bg-summit-secondary   /* #314a84 - Submenu backgrounds */
.bg-summit-accent      /* #3d5999 - Hover states */
.bg-summit-red         /* #be3925 - CTA buttons */
.bg-summit-red-dark    /* #8e1a1b - Links */
.bg-summit-gray-bar    /* #dcdcdc - Background sections */

/* Utility Classes */
.summit-btn-primary    /* Red CTA button with hover effects */
.summit-btn-secondary  /* Blue secondary button */
.summit-card           /* Card with shadow and hover animation */
.summit-text-gradient  /* Blue gradient text effect */
```

## 📱 Responsive Design

- **Desktop**: Full mega menu, large hero carousel, multi-column layouts
- **Tablet**: Optimized navigation, adjusted grid layouts
- **Mobile**: Hamburger menu, stacked content, touch-friendly interactions

## 🔧 Customization

### Adding New Team Members
Edit `src/components/HeroSection.tsx` and add to the `teamMembers` array:

```typescript
{
  id: 7,
  name: "New Team Member",
  title: "Position Title",
  image: "https://summitdrilling.com/path-to-image.jpg",
  responsibility: "I'm responsible for your experience"
}
```

### Updating Services
Modify `src/components/ServicesSection.tsx` in the `serviceCategories` array.

### Adding News Items
Update `src/components/NewsSection.tsx` in the `newsItems` array.

## 🚀 Deployment

This Next.js application can be deployed to:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Traditional hosting** with Node.js support

### Environment Variables
Create `.env.local` for any API keys or configuration:

```
NEXT_PUBLIC_SITE_URL=https://summitdrilling.com
```

## 📞 Support

For questions about this implementation:
- Review the component documentation in each file
- Check the Tailwind configuration for color usage
- Refer to Next.js documentation for framework features

---

**Built with attention to Summit Drilling's brand heritage while embracing modern web standards for optimal performance and user experience.**
