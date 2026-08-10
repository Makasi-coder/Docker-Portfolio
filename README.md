# Executive IT Leadership Portfolio Website

A premium, modern portfolio website for IT managers and information systems leaders. Built with React, Tailwind CSS, and Vite.

## Overview

This portfolio website is designed to showcase your professional career, expertise, and leadership capabilities at an executive level. It's optimized for hiring managers, recruitment teams, IT Directors, and technology leaders looking for an IT/ICT management professional.

## Features

✅ **Modern Executive Design** - Clean, professional, minimal aesthetic
✅ **Fully Responsive** - Optimized for desktop, tablet, and mobile
✅ **Fast Loading** - Lightweight, optimized build
✅ **Easy to Update** - Centralized content configuration
✅ **Professional Sections:**
   - Hero with compelling personal statement
   - About Me with background and strengths
   - Career Journey timeline
   - Project Portfolio with case studies
   - Leadership & Management capabilities
   - Technical Expertise matrix
   - Professional Achievements
   - Education & Certifications
   - Value Proposition
   - Contact & Recommendations sections

## Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Customizing Your Content

### 1. Update Personal Information
Edit `src/data/content.ts` to add your information:

```typescript
export const personalInfo = {
  firstName: 'Dacotah',
  lastName: 'YOUR_SURNAME',
  title: 'IT Manager | Information Systems | ICT & Digital Transformation',
  email: 'your.email@example.com',
  phone: '+1 (555) 123-4567',
  location: 'Your City, Country',
  linkedin: 'https://linkedin.com/in/yourprofile',
};
```

### 2. Add Your Career History
In `src/data/content.ts`, update the `careerPositions` array:

```typescript
export const careerPositions = [
  {
    organisation: 'ABC International',
    position: 'IT Manager',
    location: 'New York, USA',
    dates: 'January 2020 - Present',
    responsibilities: [
      'Leadership of 12-person IT team',
      'Management of $2.5M annual IT budget',
      'Implementation of cloud migration strategy',
    ],
    achievements: [
      'Reduced infrastructure costs by 30% through optimization',
      'Led successful migration to cloud infrastructure',
      'Improved system uptime from 95% to 99.5%',
    ],
    technologies: ['AWS', 'Azure', 'Kubernetes', 'Python'],
  },
  // Add more positions...
];
```

### 3. Showcase Your Projects
Add detailed project information to `src/data/content.ts`:

```typescript
export const projects = [
  {
    title: 'Enterprise Digital Transformation Initiative',
    organisation: 'ABC International',
    role: 'Project Lead / IT Director',
    period: 'January 2021 - June 2022',
    category: 'Digital Transformation',
    challenge: 'Legacy systems across 15 locations, poor data integration, manual processes',
    solution: 'Implemented modern ERP system with cloud infrastructure and business process automation',
    contribution: 'Led vendor selection, managed $1.2M budget, coordinated 50+ stakeholders',
    technologies: ['SAP', 'AWS', 'Business Catalyst', 'Power BI'],
    stakeholders: ['Executive Team', 'Department Heads', 'Regional Managers'],
    outcome: 'Reduced process time by 40%, improved data visibility, achieved ROI within 18 months',
    lessonsLearned: [
      'Change management is as important as technology implementation',
      'Early stakeholder engagement prevents resistance',
      'Phased implementation reduces risk and improves adoption',
    ],
  },
  // Add more projects...
];
```

### 4. Update Education & Certifications
```typescript
export const education = {
  completed: [
    {
      title: 'Bachelor of Electronics and Communication Engineering',
      organisation: 'University Name',
      year: '2015',
      type: 'Academic',
    },
    {
      title: 'ITIL Foundation Certification',
      organisation: 'AXELOS',
      year: '2018',
      type: 'Certification',
    },
  ],
  inProgress: [
    {
      title: 'Project Management Professional (PMP)',
      organisation: 'Project Management Institute',
      type: 'Certification',
    },
  ],
  planned: [
    {
      title: 'AWS Solutions Architect Professional',
      organisation: 'Amazon Web Services',
      type: 'Certification',
    },
  ],
};
```

### 5. Update Technical Skills
Edit the `skills` array to reflect your expertise with proficiency levels:
- **Expert**: Deep knowledge, can lead initiatives and mentor others
- **Advanced**: Solid working knowledge, can manage projects independently
- **Proficient**: Practical knowledge, can manage routine work

### 6. Add Achievements
```typescript
export const achievements = [
  {
    title: 'Led enterprise-wide IT transformation',
    context: 'ABC International, 2021-2022',
    contribution: 'Project director for $1.2M digital transformation initiative',
    impact: 'Reduced manual processes by 60%, achieved 18-month ROI',
  },
  // Add more achievements...
];
```

### 7. Update Hero Section & Navigation
The Hero section automatically uses your information from `personalInfo`. To add your CV download link, update the "Download CV" button in `src/components/Hero.tsx`:

```typescript
<a
  href="/path/to/your/cv.pdf"
  download
  className="px-8 py-3 border border-slate-300..."
>
```

### 8. Update Contact Information
Edit contact details in `src/components/Contact.tsx` and `src/data/content.ts`.

## Component Structure

```
src/
├── components/
│   ├── Hero.tsx                 # Hero section with CTA buttons
│   ├── Navigation.tsx           # Main navigation menu
│   ├── About.tsx               # Professional biography
│   ├── CareerJourney.tsx       # Career timeline
│   ├── ProjectPortfolio.tsx    # Project showcase with filters
│   ├── LeadershipManagement.tsx # Leadership capabilities
│   ├── TechnicalExpertise.tsx  # Skills matrix
│   ├── Achievements.tsx        # Professional achievements
│   ├── Education.tsx           # Education & certifications
│   ├── ValueProposition.tsx    # Value statements
│   ├── Testimonials.tsx        # Recommendations section
│   ├── Contact.tsx             # Contact form
│   ├── SectionHeader.tsx       # Reusable section header
│   └── Footer.tsx              # Footer
├── data/
│   └── content.ts              # Centralized content configuration
├── App.tsx                      # Main app component
├── index.css                    # Tailwind CSS
└── main.tsx                     # Entry point
```

## Customization Guide

### Colors & Styling
The site uses a professional slate color palette. To customize:
- Edit Tailwind classes in component files
- Update color variables by modifying className attributes
- The design uses: slate-50, slate-100, slate-200, slate-600, slate-900

### Adding New Sections
1. Create a new component file in `src/components/`
2. Import and add to the main navigation in `App.tsx`
3. Add corresponding navigation entry

### Updating the Layout
- Main layout is controlled in `App.tsx`
- Navigation is in `Navigation.tsx`
- Footer is in `Footer.tsx`

## Publishing

### Deploy to Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify
```bash
# Build the project
npm run build

# Deploy the dist/ folder to Netlify
```

### Deploy to GitHub Pages
```bash
# Update vite.config.ts with your repo name
# Build
npm run build

# Deploy dist/ folder
```

## SEO Optimization

The site includes:
- ✅ Semantic HTML structure
- ✅ Meta tags for social sharing
- ✅ Open Graph tags for LinkedIn
- ✅ Responsive design for mobile SEO
- ✅ Fast loading performance (Core Web Vitals)

To further optimize:
1. Update meta description in `index.html`
2. Add structured data (schema.org) for better search results
3. Submit sitemap to Google Search Console
4. Add Google Analytics tracking

## Accessibility

The site includes:
- ✅ Semantic HTML
- ✅ ARIA labels for interactive elements
- ✅ Sufficient color contrast
- ✅ Keyboard navigation support
- ✅ Mobile-friendly touch targets

## Performance Tips

1. Optimize your CV PDF (compress images)
2. Use WebP images where possible
3. Lazy load images below the fold
4. Consider caching headers for static assets
5. Monitor Core Web Vitals

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Key Design Principles

**Sophistication Over Decoration**
- Clean whitespace
- Restrained color palette
- Professional typography
- Minimal animations

**Focus on Content**
- Clear information hierarchy
- Scannable sections
- Strong visual structure
- Easy navigation

**Executive Presentation**
- Polished, professional appearance
- Strategic information placement
- Emphasis on achievements and impact
- Leadership-focused narrative

## Troubleshooting

### Build fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Navigation not working
- Check that section IDs match in App.tsx and components
- Verify state management in App.tsx

### Styling issues
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Check Tailwind CSS is properly imported in index.css

## Future Enhancements

Consider adding:
- Blog section for thought leadership
- Case study deep dives with images
- Video testimonials
- Interactive skills assessment
- Newsletter signup
- Analytics tracking
- Dark mode toggle
- Multi-language support

## Support & Questions

For questions or to request features:
1. Review the component files
2. Check the content.ts for data structure
3. Consult Tailwind CSS documentation
4. Review React documentation

## License

This portfolio template is provided as-is for personal use.

## Credits

Built with:
- React 19
- Vite 7
- Tailwind CSS 4
- Lucide React (icons)
- TypeScript

---

**Last Updated:** 2026

For the best results, ensure all content is accurate, recent, and reflects your true professional experience and capabilities.