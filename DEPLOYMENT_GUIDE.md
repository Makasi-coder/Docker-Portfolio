# Deployment Guide

Complete instructions for publishing your portfolio website.

## Pre-Deployment Checklist

Before deploying, ensure:

- [ ] All content is updated in `src/data/content.ts`
- [ ] Your CV PDF is added and linked
- [ ] Contact information is correct
- [ ] LinkedIn URL is active
- [ ] All images/media are optimized
- [ ] Local build succeeds: `npm run build`
- [ ] Preview looks correct: `npm run preview`
- [ ] All navigation links work
- [ ] Mobile responsiveness is tested
- [ ] Meta tags are updated in `index.html`

## Deployment Options

### Option 1: Vercel (Recommended)

**Vercel** is the official platform for Vite apps. It's fast, free, and comes with a custom domain.

#### Steps:

1. **Create account** at https://vercel.com

2. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Follow prompts:**
   - Confirm project settings
   - Choose deployment region
   - Wait for deployment to complete

5. **Get your URL:**
   - After deployment, Vercel provides a URL
   - Example: `https://dacotah-portfolio.vercel.app`

#### Custom Domain:

1. Go to Vercel dashboard
2. Project settings → Domains
3. Add your custom domain
4. Update DNS settings at your domain registrar

**Advantages:**
- ✅ Zero configuration
- ✅ Auto-deploys on git push
- ✅ Free SSL/HTTPS
- ✅ Global CDN
- ✅ Analytics included

---

### Option 2: Netlify

Netlify is another excellent option with a free tier.

#### Steps:

1. **Create account** at https://netlify.com

2. **Connect GitHub:**
   - Push your code to GitHub
   - Go to Netlify and connect your repository
   - Select the repository

3. **Configure build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`

4. **Deploy:**
   - Netlify auto-deploys on every push
   - Get your URL after first deploy

#### Custom Domain:

1. Go to Netlify dashboard
2. Domain settings
3. Add your custom domain
4. Update DNS records

**Advantages:**
- ✅ Easy GitHub integration
- ✅ Automatic deployments
- ✅ Form handling available
- ✅ Netlify Functions (serverless)

---

### Option 3: GitHub Pages

GitHub Pages is free if you host code on GitHub.

#### Steps:

1. **Update vite.config.ts:**
   ```typescript
   export default defineConfig({
     base: '/repository-name/',  // if not using custom domain
     // base: '/',                 // if using custom domain
   })
   ```

2. **Build the project:**
   ```bash
   npm run build
   ```

3. **Create GitHub Action workflow:**
   Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy

   on:
     push:
       branches:
         - main

   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: 18
         - run: npm install
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

4. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Deploy portfolio"
   git push origin main
   ```

5. **Enable GitHub Pages:**
   - Repository settings → Pages
   - Source: GitHub Actions

**Advantages:**
- ✅ Free hosting
- ✅ Version control integrated
- ✅ GitHub domain available

---

### Option 4: Docker + Custom Server

For complete control on your own server.

#### Dockerfile:

```dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

#### Deploy:

```bash
docker build -t dacotah-portfolio .
docker run -d -p 80:80 dacotah-portfolio
```

**Advantages:**
- ✅ Full control
- ✅ Custom server configuration
- ✅ Scalable infrastructure

---

## Setting Up Custom Domain

### Step 1: Register Domain

Register at:
- GoDaddy
- Namecheap
- Domain.com
- Google Domains
- AWS Route 53

Cost: $10-15/year typically

### Step 2: Point Domain to Host

**For Vercel:**
1. Add domain in Vercel dashboard
2. Vercel shows 4 nameservers
3. Update domain registrar's nameserver settings
4. Wait 24-48 hours for propagation

**For Netlify:**
1. Add domain in Netlify dashboard
2. Update nameserver at registrar
3. Or use CNAME record if preferred

**For GitHub Pages:**
1. Add CNAME file to `public/` folder with your domain
2. Update DNS at registrar pointing to `username.github.io`

### Step 3: Set Up Email (Optional)

Consider email forwarding:
- Mailgun (free tier available)
- ForwardEmail.net
- Hey Custom Domain

This lets you use `you@yourdomain.com` professionally.

---

## SSL/HTTPS Certificate

**Automatic (Recommended):**
- Vercel: Automatic ✅
- Netlify: Automatic ✅
- GitHub Pages: Automatic ✅

**Manual:**
- Use Let's Encrypt (free)
- Use AWS Certificate Manager
- Use CloudFlare (free SSL)

---

## Performance Optimization

### Before Deployment

1. **Optimize images:**
   - Compress all images
   - Use modern formats (WebP)
   - Use appropriate dimensions

2. **Minify code:**
   - Build process handles this
   - Verify with `npm run build`

3. **Lazy loading:**
   - Images load on demand
   - Improve initial load time

4. **Caching:**
   - Set appropriate cache headers
   - Vercel/Netlify handle this automatically

### After Deployment

Monitor with:
- Google Lighthouse
- PageSpeed Insights
- Web Vitals

---

## Analytics & Monitoring

### Add Google Analytics

1. Create account at https://analytics.google.com
2. Get your measurement ID
3. Add to `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Vercel Analytics

Included automatically in Vercel deployments.

### Track Conversions

Add event tracking for:
- Contact form submissions
- CV downloads
- LinkedIn clicks

---

## SEO Optimization

### Meta Tags (Already Added)

```html
<title>Dacotah [SURNAME] | IT Manager</title>
<meta name="description" content="...">
<meta name="keywords" content="...">
```

### Add Structured Data

In `index.html`:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@type": "Person",
  "name": "Dacotah [SURNAME]",
  "url": "https://yourdomain.com",
  "image": "https://yourdomain.com/image.jpg",
  "jobTitle": "IT Manager",
  "description": "IT Manager specializing in digital transformation...",
  "sameAs": [
    "https://linkedin.com/in/yourprofile"
  ]
}
</script>
```

### Submit to Search Engines

1. **Google Search Console:**
   - https://search.google.com/search-console
   - Add property
   - Submit sitemap (auto-generated)

2. **Bing Webmaster:**
   - https://www.bing.com/webmaster
   - Verify ownership
   - Submit sitemap

---

## Domain Reputation

### Ensure Trust Signals

- ✅ SSL/HTTPS certificate (green lock)
- ✅ Custom domain (not free subdomain)
- ✅ Professional email (not Gmail)
- ✅ Clear contact information
- ✅ Updated content (no outdated dates)
- ✅ Professional design
- ✅ Fast loading time
- ✅ Mobile responsive

### Avoid Red Flags

- ❌ Broken links
- ❌ Outdated information
- ❌ Spelling/grammar errors
- ❌ Slow loading
- ❌ Broken images
- ❌ Outdated design
- ❌ Hidden contact information

---

## Maintenance After Deploy

### Regular Updates

1. **Content updates:**
   - Update career progression
   - Add new projects quarterly
   - Update certifications
   - Refresh achievement metrics

2. **Technical updates:**
   - Update dependencies: `npm update`
   - Check for security vulnerabilities: `npm audit`
   - Update Node.js version periodically

3. **Monitor performance:**
   - Check analytics monthly
   - Monitor page speed
   - Fix any broken links
   - Update contact information

### Backup

Keep backups:
- GitHub repository (automatic)
- Local copies of important content
- CV files

---

## Troubleshooting

### Domain Not Resolving

1. Check DNS propagation: https://dnschecker.org
2. Verify nameserver settings at registrar
3. Clear browser cache
4. Wait 24-48 hours if recently changed

### Site Not Updating

1. Clear browser cache (Ctrl+Shift+Delete)
2. Check deployment status in Vercel/Netlify
3. Verify build succeeded
4. Check for build errors in logs

### SSL Certificate Issues

- Vercel/Netlify handle automatically
- May take 15-30 minutes after domain addition
- Check certificate status in hosting dashboard

### Performance Issues

1. Check Core Web Vitals in Google Lighthouse
2. Optimize images
3. Minimize CSS/JavaScript
4. Use CDN (automatic with Vercel/Netlify)

---

## Sharing Your Portfolio

### In Job Applications

Include in:
- LinkedIn profile URL
- Resume/CV header
- Job application form
- Cover letter
- Email signature

### LinkedIn Profile

1. Add portfolio URL to headline
2. Add link in "About" section
3. Link individual achievements to projects
4. Keep contact info consistent

### Email Signature

```
---
Dacotah [SURNAME]
IT Manager | Information Systems | ICT & Digital Transformation
📧 your.email@example.com
🔗 https://yourdomain.com
💼 https://linkedin.com/in/yourprofile
```

### Share Strategically

- Reddit IT/tech communities
- Professional networks
- Networking events
- Recruiter outreach
- Job applications

---

## Success Metrics

Track:
- ✅ Visitor numbers (Google Analytics)
- ✅ Page views by section
- ✅ Contact form submissions
- ✅ CV downloads
- ✅ LinkedIn clicks
- ✅ Page load speed
- ✅ Bounce rate

---

## Support

**Need help?**

1. Check Vercel docs: https://vercel.com/docs
2. Check Netlify docs: https://docs.netlify.com
3. Check Vite docs: https://vitejs.dev
4. Check Tailwind docs: https://tailwindcss.com

---

**Congratulations on deploying your portfolio! 🎉**

Your professional presence is now online. Keep it updated, monitor its performance, and let it work for you.

Good luck with your career opportunities! 🚀