# Smokey Theme - Quick Start Guide

## 🚀 Installation (5 Minutes)

### Step 1: Prepare Theme
```bash
# In your terminal, navigate to the theme directory
cd /path/to/smok2

# Create a zip file (excluding git files)
zip -r smokey-theme.zip . -x "*.git*"
```

**Or manually:**
1. Select all theme files (assets, config, layout, locales, sections, snippets, templates)
2. Right-click → "Compress" or "Send to → Compressed folder"
3. Name it `smokey-theme.zip`

### Step 2: Upload to Shopify
1. Log into your Shopify Admin
2. Go to **Online Store → Themes**
3. Click **Add theme** button
4. Click **Upload zip file**
5. Select `smokey-theme.zip`
6. Wait for upload to complete

### Step 3: Preview & Customize
1. Once uploaded, click **Customize** on the theme
2. You'll see the theme editor with all sections

## ⚙️ Essential Configuration (10 Minutes)

### Theme Settings
**Access:** Theme Editor → Theme Settings

1. **Colors** (Optional - defaults are set)
   - Primary: #39FF14 (neon green)
   - Background: #0D0D0D (black)
   - Already configured!

2. **Logo**
   - Upload your logo image
   - Recommended size: 200px wide, transparent PNG

3. **Age Verification**
   - Enabled by default
   - Customize message if needed
   - 18+ requirement

4. **Social Media**
   - Add your social media URLs:
     - Facebook
     - Instagram
     - Twitter
     - YouTube
     - TikTok

### Create Navigation Menus
**Access:** Shopify Admin → Online Store → Navigation

1. **Main Menu**
   ```
   - Shop → /collections/all
   - Subscriptions → /pages/subscriptions
   - About → /pages/about
   - Contact → /pages/contact
   ```

2. **Footer Menu**
   ```
   - Shop
   - About
   - Contact
   - FAQ (if you create this page)
   ```

### Create Required Pages
**Access:** Shopify Admin → Online Store → Pages

1. **About** (Template: page.about)
   - Title: "About Smokey"
   - Content: Your brand story

2. **Contact** (Template: page.contact)
   - Title: "Contact Us"
   - Content: Any additional info

3. **Subscriptions** (Template: page.subscriptions)
   - Title: "Subscription Plans"
   - Content: Additional subscription info

4. **Privacy Policy** (Template: page.privacy-policy)
   - Title: "Privacy Policy"
   - Content: Your privacy policy

5. **Terms & Conditions** (Template: page.terms)
   - Title: "Terms & Conditions"
   - Content: Your terms

6. **Imprint** (Template: page.imprint) *Required for Germany*
   - Title: "Impressum" or "Imprint"
   - Content: Legal company information

## 📦 Adding Products (15 Minutes)

### Product Setup
**Access:** Shopify Admin → Products

1. **Regular Products**
   - Add product images (square format recommended)
   - Set prices in EUR (€)
   - Write descriptions
   - Set inventory

2. **Subscription Products**
   - Create 3 products:
     - "Starter Box" - €29.99/month
     - "Premium Box" - €49.99/month
     - "Elite Box" - €79.99/month
   - Use Shopify's subscription app for recurring payments

### Create Collections
**Access:** Shopify Admin → Products → Collections

1. **All Products** (automatic)
2. **Best Sellers** (manual - for featured products)
3. **New Arrivals** (manual or automatic)
4. **Subscriptions** (manual - add subscription boxes)

## 🏠 Homepage Setup

The homepage is already configured with these sections:
1. ✅ Hero
2. ✅ Featured Products
3. ✅ Subscription Preview
4. ✅ USP Benefits (4 benefits)
5. ✅ Lifestyle Community
6. ✅ Newsletter

**To edit:** Theme Editor → Homepage → Click any section

### Customize Hero Section
- Change headline and text
- Upload hero image
- Adjust button text and links

### Featured Products
- Select your "Best Sellers" collection
- Adjust number of products to show

## 🎨 Customization Tips

### Colors
All colors use CSS variables. To change globally:
- Theme Settings → Colors
- Changes apply site-wide automatically

### Section Order
- In Theme Editor, drag sections to reorder
- Add/remove sections as needed
- All sections are reusable

### Typography
- Theme Settings → Typography
- Choose from Shopify's font library
- System fonts used by default (fast loading)

## ✅ Pre-Launch Checklist

Before going live:

- [ ] Logo uploaded
- [ ] Navigation menus created
- [ ] All required pages created
- [ ] At least 4 products added
- [ ] Featured collection set
- [ ] Social media links added
- [ ] Age verification tested
- [ ] Contact form tested
- [ ] Mobile preview checked
- [ ] Test checkout process
- [ ] Legal pages completed (Privacy, Terms, Imprint)

## 🧪 Testing (5 Minutes)

### Desktop Testing
1. Browse homepage
2. Click through products
3. Add to cart
4. View cart
5. Test navigation
6. Submit contact form (test mode)
7. Sign up newsletter

### Mobile Testing
1. Open on mobile device
2. Test hamburger menu
3. Browse products
4. Test cart
5. Check readability

### Age Verification
1. Open in incognito/private window
2. Should see age gate modal
3. Confirm you're 18+
4. Close and reopen - shouldn't show again (cookie set)

## 🚀 Go Live!

When ready:
1. Theme Editor → Top right
2. Click **Publish**
3. Confirm publication
4. Your theme is now live!

## 📞 Need Help?

**Common Issues:**

**Age gate not showing:**
- Clear cookies and reload
- Check Theme Settings → Age Verification is enabled

**Mobile menu not working:**
- Clear browser cache
- Check browser console for errors

**Products not showing:**
- Verify products are published
- Check collection settings
- Ensure inventory > 0

**For more help:**
- See README.md for detailed documentation
- Shopify Support: help.shopify.com
- Theme documentation: Included in README.md

## 🎉 You're Done!

Your Smokey theme is now live and ready to start selling!

**Remember:**
- Keep product images consistent
- Update content regularly
- Monitor performance
- Gather customer feedback

**Pro Tips:**
- Use high-quality product photos
- Write compelling descriptions
- Offer limited-time promotions
- Build your email list with newsletter
- Engage on social media

---

**Need to make changes later?**
Just go to: Online Store → Themes → Customize

**Good luck with your launch! 🚀**
