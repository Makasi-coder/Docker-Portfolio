import SectionHeader from './SectionHeader';

interface SkillCategory {
  name: string;
  skills: { name: string; level: 'Expert' | 'Advanced' | 'Proficient' }[];
}

const skillCategories: SkillCategory[] = [
  {
    name: 'IT Management',
    skills: [
      { name: 'IT Operations', level: 'Expert' },
      { name: 'IT Service Management (ITSM)', level: 'Advanced' },
      { name: 'IT Strategy & Planning', level: 'Advanced' },
      { name: 'IT Governance', level: 'Proficient' },
      { name: 'Vendor Management', level: 'Advanced' },
    ],
  },
  {
    name: 'Information Systems',
    skills: [
      { name: 'Systems Administration', level: 'Advanced' },
      { name: 'Business Applications', level: 'Proficient' },
      { name: 'Information Management', level: 'Advanced' },
      { name: 'Systems Implementation', level: 'Proficient' },
      { name: 'Requirements Analysis', level: 'Advanced' },
    ],
  },
  {
    name: 'Infrastructure & Cloud',
    skills: [
      { name: 'Network Administration', level: 'Proficient' },
      { name: 'Server Management', level: 'Advanced' },
      { name: 'Cloud Technologies', level: 'Proficient' },
      { name: 'Cybersecurity Fundamentals', level: 'Proficient' },
      { name: 'Infrastructure Planning', level: 'Advanced' },
    ],
  },
  {
    name: 'Telecommunications',
    skills: [
      { name: 'Radio Communications Systems', level: 'Expert' },
      { name: 'HF/VHF/UHF Systems', level: 'Expert' },
      { name: 'Field Communications', level: 'Expert' },
      { name: 'Telecommunications Infrastructure', level: 'Advanced' },
      { name: 'Communication Protocols', level: 'Advanced' },
    ],
  },
  {
    name: 'Project Management',
    skills: [
      { name: 'Project Planning & Delivery', level: 'Advanced' },
      { name: 'Stakeholder Management', level: 'Advanced' },
      { name: 'Risk Management', level: 'Advanced' },
      { name: 'Budget Management', level: 'Proficient' },
      { name: 'Monitoring & Reporting', level: 'Advanced' },
    ],
  },
  {
    name: 'Digital Transformation',
    skills: [
      { name: 'Process Improvement', level: 'Advanced' },
      { name: 'Business Process Automation', level: 'Proficient' },
      { name: 'Technology Adoption', level: 'Advanced' },
      { name: 'Systems Integration', level: 'Proficient' },
      { name: 'Change Enablement', level: 'Advanced' },
    ],
  },
];

const getLevelColor = (level: string) => {
  switch (level) {
    case 'Expert':
      return 'bg-slate-900 text-white';
    case 'Advanced':
      return 'bg-slate-700 text-white';
    case 'Proficient':
      return 'bg-slate-500 text-white';
    default:
      return 'bg-slate-300 text-slate-900';
  }
};

export default function TechnicalExpertise() {
  return (
    <div className="min-h-screen py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Technical Expertise"
          subtitle="Professional skills and technical capabilities"
        />

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200 rounded-lg p-8"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-6">{category.name}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-700 font-medium">{skill.name}</span>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${getLevelColor(skill.level)}`}>
                        {skill.level}
                      </span>
                    </div>
                    <div className="w-full bg-slate-300 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-300 ${
                          skill.level === 'Expert'
                            ? 'w-full bg-slate-900'
                            : skill.level === 'Advanced'
                            ? 'w-4/5 bg-slate-700'
                            : 'w-3/5 bg-slate-500'
                        }`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Levels */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-8">
          <h3 className="text-lg font-bold text-slate-900 mb-6">Proficiency Levels</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-4 h-4 bg-slate-900 rounded-full"></div>
                <span className="font-bold text-slate-900">Expert</span>
              </div>
              <p className="text-slate-600 text-sm">Deep knowledge with multiple years of hands-on experience. Can lead initiatives and mentor others.</p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-4 h-4 bg-slate-700 rounded-full"></div>
                <span className="font-bold text-slate-900">Advanced</span>
              </div>
              <p className="text-slate-600 text-sm">Solid working knowledge. Can manage projects and troubleshoot complex issues independently.</p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-4 h-4 bg-slate-500 rounded-full"></div>
                <span className="font-bold text-slate-900">Proficient</span>
              </div>
              <p className="text-slate-600 text-sm">Practical knowledge. Can manage routine work and apply concepts in real-world scenarios.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}