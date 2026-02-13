# Smokey - Shopify Theme

A modern, production-ready Shopify theme for "Smokey" - a premium European e-commerce brand selling smoking accessories and lifestyle products.

## 🎨 Design System

### Brand Identity
- **Primary Market:** Germany (launch) → EU-wide expansion
- **Target Audience:** Ages 18–30 (digital-native, design-aware, brand-focused)
- **Design Style:** Dark theme, bold, modern, energetic, professional

### Color Palette
- **Primary:** Neon/Lime Green `#39FF14` (brand accent)
- **Background:** Deep Black `#0D0D0D`
- **Surface:** Dark Grey `#1A1A1A`, `#2D2D2D`
- **Text:** Clean White `#FFFFFF`
- **Text Muted:** Grey `#9CA3AF`

## 🚀 Features

### Core Pages
- **Homepage** - Hero, featured products, subscription preview, USP benefits, community, newsletter
- **Shop/Collection** - Grid-based product layout with filtering
- **Product Detail** - Large images, add to cart, quantity selector, related products
- **Subscription Plans** - 3-tier subscription comparison (Starter, Premium, Elite)
- **About Page** - Brand story, vision, values
- **Contact Page** - Contact form with business information
- **Legal Pages** - Privacy Policy, Terms & Conditions, Imprint (GDPR-ready)

### Components
- **Header** - Sticky navigation, mobile hamburger menu, cart icon with count
- **Footer** - Navigation links, newsletter signup, social media icons
- **Product Card** - Image, title, price, add to cart button, hover effects
- **Age Verification** - 18+ modal with cookie persistence
- **Newsletter** - Email subscription form

### Technical Features
- ✅ Shopify Online Store 2.0 architecture
- ✅ JSON templates with modular sections
- ✅ Section schemas for Shopify customizer
- ✅ Responsive design (mobile-first)
- ✅ Internationalization (EN/DE)
- ✅ SEO-optimized structure
- ✅ Accessibility features (ARIA labels, keyboard navigation)
- ✅ Performance optimized (lazy loading, modular CSS)
- ✅ Age verification system
- ✅ Dark theme by default

## 📁 File Structure

```
├── assets/
│   ├── base.css                    # Core styles with CSS custom properties
│   ├── base.js                     # Core JavaScript functionality
│   └── component-*.css             # Modular component styles
├── config/
│   ├── settings_schema.json        # Theme customization settings
│   └── settings_data.json          # Default theme values
├── layout/
│   ├── theme.liquid               # Main theme layout
│   └── password.liquid            # Pre-launch password page
├── locales/
│   ├── en.default.json            # English translations
│   └── de.json                    # German translations
├── sections/
│   ├── header.liquid              # Site header
│   ├── footer.liquid              # Site footer
│   ├── hero.liquid                # Homepage hero section
│   ├── featured-products.liquid   # Product showcase
│   ├── subscription-preview.liquid # Subscription teaser
│   ├── subscription-tiers.liquid  # Subscription plans
│   ├── usp-benefits.liquid        # Benefits/USPs
│   ├── lifestyle-community.liquid # Community section
│   ├── newsletter.liquid          # Newsletter signup
│   ├── product-grid.liquid        # Collection products
│   ├── contact-form.liquid        # Contact form
│   ├── about-content.liquid       # About page content
│   ├── main-product.liquid        # Product page
│   ├── main-page.liquid           # Standard pages
│   ├── main-cart.liquid           # Cart page
│   ├── main-404.liquid            # 404 error page
│   ├── main-account.liquid        # Customer account
│   ├── main-login.liquid          # Customer login
│   └── main-register.liquid       # Customer registration
├── snippets/
│   ├── product-card.liquid        # Product card component
│   ├── price.liquid               # Price display
│   ├── social-icons.liquid        # Social media links
│   ├── age-verification.liquid    # Age gate modal
│   ├── meta-tags.liquid           # SEO meta tags
│   └── icon-*.liquid              # SVG icons
└── templates/
    ├── index.json                 # Homepage
    ├── collection.json            # Collection page
    ├── product.json               # Product page
    ├── cart.json                  # Cart page
    ├── 404.json                   # 404 page
    ├── page.*.json                # Various pages
    └── customers/*.json           # Customer pages

```

## 🛠️ Installation

### Prerequisites
- Shopify store
- Shopify CLI (optional, for local development)

### Method 1: Upload to Shopify Admin
1. Zip the entire theme directory
2. Go to Shopify Admin → Online Store → Themes
3. Click "Add theme" → "Upload zip file"
4. Select the zip file and upload
5. Once uploaded, click "Publish" to make it live

### Method 2: Shopify CLI (Development)
```bash
# Install Shopify CLI
npm install -g @shopify/cli @shopify/theme

# Navigate to theme directory
cd smok2

# Connect to your store
shopify theme dev

# Push to your store
shopify theme push
```

## ⚙️ Configuration

### Theme Settings
Access theme settings in Shopify Admin → Online Store → Themes → Customize

#### Colors
- Customize brand colors (primary, background, surface, text)
- All colors use CSS custom properties for easy theming

#### Typography
- Choose custom fonts for headings and body text
- System fonts used by default for performance

#### Layout
- Configure page width (1000-1600px)
- Adjust section spacing

#### Age Verification
- Enable/disable age verification modal
- Customize title and message
- 18+ requirement with cookie persistence (30 days)

#### Social Media
- Add links for Facebook, Instagram, Twitter, YouTube, TikTok
- Icons automatically appear in footer

### Navigation Menus
Create these menus in Shopify Admin:
- **Main Menu** - Used in header navigation
- **Footer Menu** - Used in footer quick links

### Required Pages
Create these pages for full functionality:
- About
- Contact
- Subscriptions
- Privacy Policy
- Terms & Conditions
- Imprint (for German legal compliance)

## 🎯 Key Sections

### Homepage Sections
The homepage template includes these sections in order:
1. **Hero** - Main banner with CTAs
2. **Featured Products** - Showcase best-sellers
3. **Subscription Preview** - Monthly box concept
4. **USP Benefits** - Why choose Smokey (4 benefits)
5. **Lifestyle Community** - Brand atmosphere
6. **Newsletter** - Email signup

All sections are customizable through the Shopify theme editor.

### Subscription Tiers
Three subscription levels:
- **Starter** (€29.99/month) - 3-4 products, free shipping
- **Premium** (€49.99/month) - 5-6 products, express shipping, exclusive items
- **Elite** (€79.99/month) - 7-8 products, overnight shipping, VIP access

## 🌍 Internationalization

### Supported Languages
- English (default)
- German

### Adding New Languages
1. Duplicate `locales/en.default.json`
2. Rename to your language code (e.g., `fr.json`)
3. Translate all text strings
4. Language will automatically appear in Shopify language selector

## 🔒 Legal Compliance

### GDPR Ready
- Cookie consent via age verification
- Privacy policy template structure
- Data protection considerations

### Age Verification
- 18+ age gate on first visit
- Cookie-based (30-day persistence)
- Redirects underage users

### German Legal Requirements
- Imprint page template included
- Terms & conditions structure
- GDPR compliance framework

## 📱 Responsive Design

### Breakpoints
- Mobile: < 768px
- Desktop: ≥ 768px

### Mobile Optimizations
- Hamburger menu with slide-in navigation
- Touch-friendly button sizes
- Optimized image loading
- Simplified layouts

## 🎨 Customization

### CSS Custom Properties
All theme colors and spacing use CSS variables defined in `base.css`:
```css
:root {
  --color-primary: #39FF14;
  --color-background: #0D0D0D;
  --color-surface: #1A1A1A;
  --color-text: #FFFFFF;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  /* ... more variables */
}
```

### Adding New Sections
1. Create new `.liquid` file in `sections/`
2. Add corresponding CSS file in `assets/component-*.css`
3. Include schema for customization options
4. Add to templates as needed

## 🚀 Performance

### Optimization Features
- Lazy loading for images
- Modular CSS loading
- Minimal JavaScript
- Optimized font loading
- Efficient Liquid code

### Best Practices
- Images should be optimized before upload
- Use WebP format when possible
- Keep product images consistent in size
- Limit number of products per page

## 🐛 Troubleshooting

### Common Issues

**Age verification not showing:**
- Check if enabled in theme settings
- Clear browser cookies
- Verify JavaScript is enabled

**Mobile menu not working:**
- Clear browser cache
- Check if base.js is loading
- Verify no JavaScript errors in console

**Products not displaying:**
- Ensure products are published
- Check collection settings
- Verify product availability

## 📞 Support

### Resources
- [Shopify Theme Documentation](https://shopify.dev/themes)
- [Liquid Reference](https://shopify.dev/api/liquid)
- [Online Store 2.0](https://shopify.dev/themes/architecture)

## 📝 License

This theme is proprietary software created for the Smokey brand.

## 🎉 Credits

**Theme Name:** Smokey  
**Version:** 1.0.0  
**Shopify Architecture:** Online Store 2.0  
**Compatible With:** Shopify Online Store

---

Made with ❤️ for the Smokey brand