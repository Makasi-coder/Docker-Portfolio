# Content Update Templates

Copy and paste these templates when adding new information to your portfolio.

## Career Position Template

Add this to `src/data/content.ts` in the `careerPositions` array:

```typescript
{
  organisation: '[Full Organisation Name]',
  position: '[Your Job Title]',
  location: '[City, Country]',
  dates: '[Month Year] - [Month Year/Present]',
  responsibilities: [
    '[Responsibility 1]',
    '[Responsibility 2]',
    '[Responsibility 3]',
    '[Responsibility 4]',
    '[Responsibility 5]',
  ],
  achievements: [
    '[Achievement 1 with impact/result]',
    '[Achievement 2 with impact/result]',
    '[Achievement 3 with impact/result]',
  ],
  technologies: [
    '[Technology/Tool 1]',
    '[Technology/Tool 2]',
    '[Technology/Tool 3]',
    '[Technology/Tool 4]',
  ],
},
```

**Tips:**
- List positions in reverse chronological order (newest first)
- Use action verbs in responsibilities: Led, Managed, Implemented, Designed
- Include measurable results where possible
- Be specific about tools and technologies used

---

## Project Case Study Template

Add this to `src/data/content.ts` in the `projects` array:

```typescript
{
  title: '[Project Name]',
  organisation: '[Organisation Name]',
  role: '[Your Role]',
  period: '[Start Month Year] - [End Month Year]',
  category: '[Category from list below]',
  
  challenge: `[1-2 sentences describing the business or operational problem]
  
  [Additional context about why this was important]`,
  
  solution: `[1-2 sentences describing your approach and strategy]
  
  [Key elements of the solution]`,
  
  contribution: `[Your specific responsibilities and leadership role]
  
  [Specific actions you took]`,
  
  technologies: [
    '[Technology 1]',
    '[Technology 2]',
    '[Technology 3]',
    '[Technology 4]',
  ],
  
  stakeholders: [
    '[Stakeholder Group 1]',
    '[Stakeholder Group 2]',
    '[Stakeholder Group 3]',
  ],
  
  outcome: `[Result achieved and impact measured]
  
  [Metrics or qualitative impact]`,
  
  lessonsLearned: [
    '[Lesson 1]',
    '[Lesson 2]',
    '[Lesson 3]',
    '[Lesson 4]',
  ],
},
```

**Project Categories:**
- IT Infrastructure
- Information Systems
- Telecommunications
- Digital Transformation
- Cybersecurity
- IT Operations
- Project Management

**Tips:**
- Tell a compelling story: Challenge → Approach → Implementation → Result
- Be specific about your role and leadership
- Include measurable outcomes where possible
- Explain what you learned for future applications

---

## Achievement Template

Add this to `src/data/content.ts` in the `achievements` array:

```typescript
{
  title: '[Achievement Title - compelling and specific]',
  context: '[Organisation Name, Year/Period]',
  contribution: '[Your specific role and what you did]',
  impact: '[Outcome and measurable or qualitative impact]',
},
```

**Examples of good achievement titles:**
- ✅ Led successful enterprise cloud migration
- ✅ Established IT governance framework
- ✅ Managed 15-month digital transformation initiative
- ✅ Built and scaled IT operations team
- ❌ Worked on projects
- ❌ Did IT stuff

---

## Certification Template

Add this to `src/data/content.ts` in the appropriate education array:

**For Completed Certifications:**
```typescript
{
  title: '[Certification Name]',
  organisation: '[Certifying Body]',
  year: '[Year Achieved]',
  type: 'Certification',
},
```

**For In-Progress Certifications:**
```typescript
{
  title: '[Certification Name]',
  organisation: '[Certifying Body]',
  type: 'Certification',
},
```

**For Planned Certifications:**
```typescript
{
  title: '[Certification Name]',
  organisation: '[Certifying Body]',
  type: 'Certification',
},
```

---

## Skill Entry Template

Add this to `src/data/content.ts` in the appropriate skill category:

```typescript
{ name: '[Skill Name]', level: '[Proficiency Level]' },
```

**Proficiency Levels:**
- `'Expert'` - 5+ years, can lead and mentor others
- `'Advanced'` - 3+ years solid experience
- `'Proficient'` - Working knowledge, can manage independently

**Examples:**
```typescript
{ name: 'IT Operations', level: 'Expert' },
{ name: 'AWS', level: 'Advanced' },
{ name: 'Agile/Scrum', level: 'Proficient' },
```

---

## About Section Update

Edit the `aboutContent` object in `src/data/content.ts`:

```typescript
export const aboutContent = {
  bio: `[Your professional background and career journey]
  
  [Key expertise areas and specializations]
  
  [What drives you and your focus]`,
  
  yearsExperience: [Number],
  coreAreas: [Number],
  certifications: [Number],
};
```

**What to include in bio:**
- Your educational background
- Career progression/transitions
- Key expertise areas
- Work environment/context
- Your professional focus

---

## Contact Information Update

**File: `src/components/Contact.tsx`**

Look for these sections and update:

```typescript
// Email
<a href="mailto:your.email@example.com">
  your.email@example.com
</a>

// Phone
<p className="text-slate-600">+1 (555) 123-4567</p>

// Location
<p className="text-slate-600">City, Country</p>
```

---

## LinkedIn & Social Links Update

Update in three places:

**1. File: `src/data/content.ts`**
```typescript
linkedin: 'https://linkedin.com/in/yourprofile',
```

**2. File: `src/components/Hero.tsx`**
```typescript
<a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
```

**3. File: `src/components/Contact.tsx` & `src/components/Footer.tsx`**
```typescript
<a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
```

---

## Meta Tags Update

**File: `index.html`**

```html
<title>Your Name | Job Title | Key Expertise</title>
<meta name="description" content="Your professional summary - what you do and your value proposition">
<meta name="keywords" content="IT Manager, ICT Manager, Digital Transformation, Project Management, Your Specialties">
<meta name="author" content="Your Name">
```

---

## Navigation Update

If you want to add a custom section:

**1. Create component:** `src/components/YourNewSection.tsx`

**2. Import in `App.tsx`:**
```typescript
import YourNewSection from './components/YourNewSection';
```

**3. Add to sections array in `App.tsx`:**
```typescript
const sections = [
  // ... existing sections
  { id: 'newsection', label: 'New Section' },
];
```

**4. Add section in main:**
```typescript
<section id="newsection" className={activeSection === 'newsection' ? 'block' : 'hidden'}>
  <YourNewSection />
</section>
```

---

## Common Phrases to Use

### Leadership
- Led team of [X] professionals
- Directed strategic initiatives
- Championed organizational change
- Mentored and developed team members
- Built high-performing teams

### Technical Achievement
- Implemented [system/solution]
- Designed infrastructure for [goal]
- Optimized [system] achieving [result]
- Automated [process] reducing [metric]
- Migrated [systems] with zero downtime

### Business Impact
- Increased efficiency by [X%]
- Reduced costs by [X%]
- Improved [metric] from [X] to [Y]
- Generated [value] in business impact
- Achieved [ROI] within [timeframe]

### Project Management
- Managed [budget] over [period]
- Coordinated [stakeholders] across [scope]
- Delivered [project] on-time and within budget
- Led implementation of [system] across [scope]

---

## Update Checklist

When adding new content:

- [ ] Information is accurate and current
- [ ] Dates are correct
- [ ] No typos or spelling errors
- [ ] Specific and measurable where possible
- [ ] Action-oriented language
- [ ] Impact/outcomes are clear
- [ ] Technologies/tools are current
- [ ] All placeholders are replaced
- [ ] Local build succeeds: `npm run build`
- [ ] All sections display correctly

---

## Need More Help?

Refer to:
- `README.md` - Full documentation
- `SETUP_GUIDE.md` - Step-by-step setup instructions
- Component files in `src/components/` - Code examples
- `src/data/content.ts` - Current content structure

Good luck updating your portfolio! 🎯