# Portfolio Setup Guide - Step by Step

Follow these steps to customize your professional portfolio with your actual information.

## Step 1: Update Your Basic Information

### File: `src/data/content.ts`

Replace the placeholder information with your details:

```typescript
export const personalInfo = {
  firstName: 'Dacotah',           // ← Your first name
  lastName: 'SURNAME',             // ← Your surname
  title: 'IT Manager | Information Systems | ICT & Digital Transformation',
  tagline: 'I bridge technology...',  // ← Your professional statement
  email: 'your.email@example.com',    // ← Your email
  phone: '+1 (555) 123-4567',         // ← Your phone
  location: 'Your City, Country',     // ← Your location
  linkedin: 'https://linkedin.com/in/yourprofile',  // ← Your LinkedIn URL
};
```

### File: `index.html`

Update the meta tags with your information:

```html
<title>Your Name | IT Manager | Information Systems & Digital Transformation</title>
<meta name="description" content="Executive IT Manager portfolio. Leadership in ICT operations, digital transformation, and technology strategy.">
<meta name="keywords" content="IT Manager, ICT Manager, Information Systems...">
```

---

## Step 2: Add Your Career History

### File: `src/data/content.ts`

Replace the placeholder position in `careerPositions` array:

**Example:**

```typescript
export const careerPositions = [
  {
    organisation: 'ABC International Organization',
    position: 'IT Manager',
    location: 'Geneva, Switzerland',
    dates: 'January 2020 - Present',
    responsibilities: [
      'Lead IT operations team of 8 professionals',
      'Manage $1.5M annual IT budget',
      'Oversee cloud infrastructure and security',
      'Direct digital transformation initiatives',
    ],
    achievements: [
      'Reduced IT operational costs by 35% through process automation',
      'Implemented new ITSM framework, improving incident response time by 50%',
      'Successfully migrated 500+ users to cloud infrastructure with zero downtime',
      'Established IT governance framework aligned with international standards',
    ],
    technologies: ['AWS', 'Azure', 'Microsoft 365', 'Jira', 'ServiceNow', 'Kubernetes'],
  },
  // Add previous positions here...
];
```

**What to include:**
- **Organisation**: Full name of the organisation
- **Position**: Your job title
- **Location**: City/Country
- **Dates**: Start and end dates (e.g., "January 2020 - Present")
- **Responsibilities**: 4-6 key responsibilities
- **Achievements**: 2-4 concrete achievements with impact
- **Technologies**: Tools, platforms, systems you managed

---

## Step 3: Showcase Your Projects

### File: `src/data/content.ts`

Replace the placeholder in `projects` array. Use this framework:

**Example:**

```typescript
{
  title: 'Enterprise ERP Migration & Digital Transformation',
  organisation: 'XYZ Development Organization',
  role: 'IT Project Manager / IT Director',
  period: 'March 2022 - September 2023',
  category: 'Digital Transformation',
  
  challenge: 'Organization operated 12 country offices with disconnected legacy systems, manual data entry, poor reporting capabilities, and inconsistent business processes. Data integrity issues affected decision-making. IT infrastructure was aging and costly to maintain.',
  
  solution: 'Implemented cloud-based ERP system with integrated financial, HR, and operations modules. Established modern cloud infrastructure. Automated key business processes. Implemented business intelligence dashboards.',
  
  contribution: 'Led vendor evaluation and selection process (3 vendors evaluated). Managed $800,000 implementation budget. Coordinated with 40+ stakeholders across 12 countries. Designed change management strategy and delivered 25+ training sessions.',
  
  technologies: ['SAP C/4HANA', 'AWS', 'Power BI', 'Workday'],
  stakeholders: ['Executive Leadership', 'Country Directors', 'Department Heads', 'End Users'],
  
  outcome: 'Reduced manual processes by 70%, improved financial close cycle from 8 days to 2 days, enabled real-time reporting across all regions, achieved 15-month ROI.',
  
  lessonsLearned: [
    'Change management success depends on executive sponsorship from day one',
    'Phased rollout approach reduces risk and improves user adoption',
    'Strong PMO discipline prevents scope creep and schedule delays',
    'Investing in user training delivers faster adoption and ROI',
  ],
}
```

**Categories available:**
- IT Infrastructure
- Information Systems
- Telecommunications
- Digital Transformation
- Cybersecurity
- IT Operations
- Project Management

Add as many projects as you have. The site will automatically create filters.

---

## Step 4: Add Achievements

### File: `src/data/content.ts`

Update the `achievements` array with your strongest accomplishments:

```typescript
export const achievements = [
  {
    title: 'Led successful enterprise digital transformation',
    context: 'XYZ Development Organization, 2022-2023',
    contribution: 'Project Director responsible for strategy, vendor selection, budget management, and stakeholder coordination across 12 countries',
    impact: 'Reduced manual processes by 70%, improved financial reporting speed by 300%, delivered within budget and timeline, achieved 15-month ROI',
  },
  {
    title: 'Established IT governance framework',
    context: 'International Humanitarian Organization, 2021',
    contribution: 'Designed and implemented comprehensive IT governance, security standards, and compliance framework aligned with international best practices',
    impact: 'Achieved ISO 27001 certification, reduced security incidents by 85%, enabled compliance with donor requirements',
  },
  {
    title: 'Led successful crisis telecommunications network',
    context: 'Emergency Operations Center deployment, 2020',
    contribution: 'Designed, deployed and managed field communication infrastructure in complex environment with limited resources',
    impact: 'Enabled coordination of 200+ field teams, ensured mission-critical communications in time-sensitive operations',
  },
  // Add more achievements...
];
```

---

## Step 5: Update Education & Certifications

### File: `src/data/content.ts`

Update all three arrays:

```typescript
export const education = {
  completed: [
    {
      title: 'Bachelor of Engineering - Electronics & Communication',
      organisation: 'Your University Name',
      year: '2014',
      type: 'Academic',
    },
    {
      title: 'ITIL Foundation Certification',
      organisation: 'AXELOS Global Best Practice',
      year: '2017',
      type: 'Certification',
    },
    {
      title: 'Project Management Professional (PMP)',
      organisation: 'Project Management Institute',
      year: '2020',
      type: 'Certification',
    },
    // Add more completed qualifications...
  ],
  
  inProgress: [
    {
      title: 'AWS Solutions Architect - Professional',
      organisation: 'Amazon Web Services',
      type: 'Certification',
    },
    {
      title: 'Executive MBA',
      organisation: 'Business School Name',
      type: 'Academic',
    },
    // Add certifications in progress...
  ],
  
  planned: [
    {
      title: 'TOGAF Enterprise Architecture',
      organisation: 'The Open Group',
      type: 'Certification',
    },
    // Add planned certifications...
  ],
};
```

---

## Step 6: Update Technical Skills

### File: `src/data/content.ts`

Customize each skill category. Proficiency levels:
- **Expert**: 5+ years, can lead and mentor
- **Advanced**: 3+ years hands-on experience
- **Proficient**: Working knowledge, can manage independently

```typescript
export const skills = [
  {
    category: 'IT Management',
    items: [
      { name: 'IT Operations', level: 'Expert' },
      { name: 'IT Service Management (ITSM)', level: 'Advanced' },
      { name: 'IT Strategy & Planning', level: 'Advanced' },
      { name: 'IT Governance & Compliance', level: 'Proficient' },
      { name: 'Vendor Management', level: 'Advanced' },
      { name: 'Budget Management', level: 'Advanced' },
    ],
  },
  {
    category: 'Information Systems',
    items: [
      { name: 'Systems Administration', level: 'Advanced' },
      { name: 'ERP Systems (SAP, Oracle)', level: 'Proficient' },
      { name: 'Business Applications', level: 'Advanced' },
      { name: 'Systems Implementation', level: 'Advanced' },
      { name: 'Requirements Analysis', level: 'Advanced' },
      { name: 'Data Management', level: 'Proficient' },
    ],
  },
  {
    category: 'Infrastructure & Cloud',
    items: [
      { name: 'AWS', level: 'Advanced' },
      { name: 'Azure', level: 'Proficient' },
      { name: 'Network Administration', level: 'Proficient' },
      { name: 'Server Management', level: 'Advanced' },
      { name: 'Cybersecurity Fundamentals', level: 'Proficient' },
      { name: 'Infrastructure Planning', level: 'Advanced' },
    ],
  },
  {
    category: 'Telecommunications',
    items: [
      { name: 'Radio Communications Systems', level: 'Expert' },
      { name: 'HF/VHF/UHF Systems', level: 'Expert' },
      { name: 'Field Communications', level: 'Expert' },
      { name: 'Telecommunications Infrastructure', level: 'Advanced' },
      { name: 'Network Protocols', level: 'Advanced' },
      { name: 'Satcom Systems', level: 'Proficient' },
    ],
  },
  {
    category: 'Project Management',
    items: [
      { name: 'Project Planning & Delivery', level: 'Advanced' },
      { name: 'Stakeholder Management', level: 'Advanced' },
      { name: 'Risk Management', level: 'Advanced' },
      { name: 'Budget & Cost Management', level: 'Advanced' },
      { name: 'Monitoring & Reporting', level: 'Advanced' },
      { name: 'Agile/Scrum', level: 'Proficient' },
    ],
  },
  {
    category: 'Digital Transformation',
    items: [
      { name: 'Process Improvement', level: 'Advanced' },
      { name: 'Automation', level: 'Advanced' },
      { name: 'Technology Adoption', level: 'Advanced' },
      { name: 'Systems Integration', level: 'Proficient' },
      { name: 'Change Management', level: 'Advanced' },
      { name: 'Business Process Mapping', level: 'Advanced' },
    ],
  },
];
```

---

## Step 7: Add Your CV Download

### Option A: Upload to public folder
1. Place your CV PDF in `public/` folder
2. Name it `Dacotah_CV.pdf`

### Option B: Link to external location
Update the download button in `src/components/Hero.tsx`:

```typescript
<a
  href="/Dacotah_CV.pdf"  // ← Change this path
  download
  className="px-8 py-3 border border-slate-300..."
>
  <Download size={18} />
  Download CV
</a>
```

---

## Step 8: Update Contact Information

### File: `src/components/Contact.tsx`

Update the contact details:

```typescript
{/* Email */}
<a
  href="mailto:your.email@example.com"  // ← Your email
  className="text-slate-600 hover:text-slate-900 transition-colors"
>
  your.email@example.com
</a>

{/* Phone */}
<p className="text-slate-600">+1 (555) 123-4567</p>  {/* ← Your phone */}

{/* Location */}
<p className="text-slate-600">Geneva, Switzerland</p>  {/* ← Your location */}
```

---

## Step 9: Add LinkedIn & Social Links

Update `src/components/Hero.tsx`:

```typescript
<a
  href="https://linkedin.com/in/yourprofile"  // ← Your LinkedIn
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex..."
>
  {/* LinkedIn Icon */}
</a>
```

Also update in `src/components/Contact.tsx` and `src/components/Footer.tsx`.

---

## Step 10: Update Meta Information

### File: `index.html`

```html
<title>Dacotah [SURNAME] | IT Manager | Information Systems & Digital Transformation</title>
<meta name="description" content="Executive IT Manager specializing in ICT operations, digital transformation, and technology strategy. 8+ years leading technology teams and delivering complex projects.">
<meta name="keywords" content="IT Manager, ICT Manager, Information Systems Manager, Digital Transformation Manager, IT Project Manager, IT Operations Manager">
<meta name="author" content="Dacotah [SURNAME]">
```

---

## Testing Your Changes

### Local Development
```bash
npm run dev
```
Visit `http://localhost:5173` and test all sections

### Build for Production
```bash
npm run build
npm run preview
```

### Checklist
- [ ] All personal info is correct
- [ ] Career history is complete and accurate
- [ ] Projects showcase your best work
- [ ] Achievements are specific and measurable
- [ ] All certifications are listed
- [ ] Skills reflect your true expertise
- [ ] Contact information is correct
- [ ] LinkedIn URL is working
- [ ] CV download is working
- [ ] Navigation works on mobile
- [ ] All pages load quickly

---

## Publishing Your Portfolio

### Quick Deploy with Vercel
```bash
npm install -g vercel
vercel
```

### Deploy with Netlify
1. Create account at netlify.com
2. Connect your GitHub repository
3. Netlify auto-deploys on push

### Custom Domain
- Register domain (GoDaddy, Namecheap, etc.)
- Point to your hosting
- Update meta tags if needed

---

## What to Focus On

**For Recruiters:**
1. **Hero Section** - Make it compelling
2. **Career Journey** - Show progression
3. **Projects** - Highlight impact
4. **Leadership Section** - Emphasize capabilities
5. **Easy Contact** - Make it obvious how to reach you

**For Hiring Managers:**
1. **About Section** - Tell your story
2. **Achievements** - Show results
3. **Technical Skills** - Be honest about expertise
4. **Value Proposition** - Why hire you?
5. **CV Download** - Make it prominent

---

## Common Issues & Fixes

**"Content not updating"**
- Clear browser cache: Ctrl+Shift+Delete
- Restart dev server: `npm run dev`
- Check file is saved

**"Navigation not working"**
- Check section IDs match in App.tsx
- Verify component names are correct

**"Styling looks wrong"**
- Make sure Tailwind CSS is imported
- Clear node_modules: `rm -rf node_modules && npm install`

---

## Next Steps

1. ✅ Update all your information
2. ✅ Test locally: `npm run dev`
3. ✅ Build: `npm run build`
4. ✅ Deploy to Vercel/Netlify
5. ✅ Share your portfolio URL
6. ✅ Update LinkedIn with link
7. ✅ Submit in job applications

---

## Need Help?

- Review README.md for detailed instructions
- Check component files for code examples
- Refer to Tailwind CSS documentation
- React documentation for component updates

Good luck with your portfolio! 🚀