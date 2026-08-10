# Quick Start Guide - 10 Minute Setup

Get your portfolio online in minutes.

## 1. Basic Setup (2 minutes)

```bash
# Install dependencies (if not done)
npm install

# Start dev server
npm run dev
```

Visit `http://localhost:5173` to see your site.

---

## 2. Quick Content Updates (5 minutes)

### Update Your Name & Contact

**File:** `src/data/content.ts`

```typescript
export const personalInfo = {
  firstName: 'Dacotah',
  lastName: 'YOUR_SURNAME',      // ← CHANGE THIS
  email: 'your.email@example.com', // ← CHANGE THIS
  phone: '+1 (555) 123-4567',      // ← CHANGE THIS
  linkedin: 'https://linkedin.com/in/yourname', // ← CHANGE THIS
};
```

### Update Page Title

**File:** `index.html`

```html
<title>Dacotah YOUR_SURNAME | IT Manager</title>
```

---

## 3. Build & Deploy (3 minutes)

### Build Locally

```bash
npm run build
```

### Deploy to Vercel (Easiest)

```bash
npm install -g vercel
vercel
```

Answer the prompts, and your site is live!

### Get Your URL

After deployment:
- Vercel: `https://your-project.vercel.app`
- Add custom domain later

---

## Next Steps

### To Add Your Career History

**File:** `src/data/content.ts`

Find `careerPositions` and add your position:

```typescript
export const careerPositions = [
  {
    organisation: 'Your Company',
    position: 'Your Job Title',
    location: 'City, Country',
    dates: 'Jan 2020 - Present',
    responsibilities: ['Responsibility 1', 'Responsibility 2'],
    achievements: ['Achievement 1', 'Achievement 2'],
    technologies: ['Technology 1', 'Technology 2'],
  },
];
```

### To Add Your CV

1. Save your CV as `Dacotah_CV.pdf`
2. Place in `public/` folder (create if doesn't exist)
3. Update link in `src/components/Hero.tsx` if needed

### To Add Your Projects

Find `projects` in `src/data/content.ts` and add project details with challenge, solution, and outcomes.

---

## Test It

```bash
# Rebuild after changes
npm run build

# See production version
npm run preview
```

---

## Full Documentation

For detailed instructions, see:
- `SETUP_GUIDE.md` - Complete setup guide
- `CONTENT_TEMPLATE.md` - Templates for each section
- `DEPLOYMENT_GUIDE.md` - Deploy options
- `README.md` - Full documentation

---

## What's Included

✅ Home page with CTA  
✅ About / Background  
✅ Career Timeline  
✅ Project Portfolio  
✅ Leadership Section  
✅ Technical Skills  
✅ Achievements  
✅ Education & Certs  
✅ Contact Form  
✅ Responsive Design  

---

## Common First Updates

**Priority 1 (Do First):**
- [ ] Update name and email
- [ ] Add your career positions
- [ ] Upload your CV

**Priority 2 (Do Next):**
- [ ] Add your best projects
- [ ] Update skills section
- [ ] Add your achievements

**Priority 3 (Nice to Have):**
- [ ] Add education/certs
- [ ] Customize About section
- [ ] Add profile photo/image

---

## File Structure You Need to Know

```
src/
├── data/
│   └── content.ts          ← UPDATE YOUR CONTENT HERE
├── components/
│   ├── Hero.tsx            ← CV download link
│   ├── About.tsx           ← Background
│   ├── CareerJourney.tsx   ← Jobs
│   ├── ProjectPortfolio.tsx ← Projects
│   └── ... (other sections)
└── App.tsx                 ← Navigation

public/
└── Dacotah_CV.pdf          ← YOUR CV GOES HERE
```

---

## Deployment Checklist

- [ ] Updated `personalInfo` in content.ts
- [ ] Added at least one position to `careerPositions`
- [ ] Added CV file
- [ ] Ran `npm run build` successfully
- [ ] Tested at http://localhost:5173
- [ ] Deployed to Vercel/Netlify
- [ ] Got live URL
- [ ] Tested live site works

---

## Helpful Commands

```bash
# Development
npm run dev        # Start dev server
npm run build      # Build for production
npm run preview    # Preview production build

# Deployment
vercel            # Deploy to Vercel
netlify deploy    # Deploy to Netlify
```

---

## Support

**Something not working?**

1. Check your edits are saved
2. Restart dev server: `npm run dev`
3. Clear browser cache: Ctrl+Shift+Delete
4. Check console for errors
5. Re-read the relevant guide file

---

## You're Done! 🎉

Your portfolio is now:
- ✅ Live online
- ✅ Fully responsive
- ✅ Professional looking
- ✅ Ready to share

Next: Share your URL!

---

**Speed Tip:** If you want to update content repeatedly, keep the dev server running (`npm run dev`) and edit `src/data/content.ts` - changes appear instantly in the browser.