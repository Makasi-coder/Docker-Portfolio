import { Users, TrendingUp, Target, Zap, Shield, Layers } from 'lucide-react';
import SectionHeader from './SectionHeader';

interface LeadershipCapability {
  icon: React.ReactNode;
  title: string;
  description: string;
  examples: string[];
}

const capabilities: LeadershipCapability[] = [
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Team Leadership',
    description: 'Building and leading high-performing technology teams',
    examples: ['Staff recruitment and development', 'Performance management', 'Mentoring and coaching'],
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: 'IT Strategy & Planning',
    description: 'Developing technology vision and strategic direction',
    examples: ['IT roadmap development', 'Technology planning', 'Competitive analysis'],
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Budget & Vendor Management',
    description: 'Managing budgets, procurement and vendor relationships',
    examples: ['Financial planning', 'Vendor negotiations', 'Cost optimisation'],
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Change & Risk Management',
    description: 'Leading technology change and managing organisational risk',
    examples: ['Change management', 'Risk assessment', 'Business continuity planning'],
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'IT Governance & Compliance',
    description: 'Establishing policies, procedures and governance frameworks',
    examples: ['Policy development', 'Compliance management', 'Internal controls'],
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: 'Service Delivery',
    description: 'Designing and managing reliable IT services',
    examples: ['SLA management', 'Service design', 'Customer satisfaction'],
  },
];

export default function LeadershipManagement() {
  return (
    <div className="min-h-screen py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Leadership & Management"
          subtitle="Capabilities that drive organisational success"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-200"
            >
              <div className="text-slate-900 mb-4">{capability.icon}</div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{capability.title}</h3>
              <p className="text-slate-600 text-sm mb-4">{capability.description}</p>
              <ul className="space-y-2">
                {capability.examples.map((example, idx) => (
                  <li key={idx} className="flex gap-2 text-slate-600 text-sm">
                    <span className="text-slate-400">•</span>
                    <span>{example}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Management Framework */}
        <div className="bg-white border border-slate-200 rounded-lg p-8 md:p-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">Management Philosophy</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Focus Areas</h4>
                <ul className="space-y-2">
                  {['Service reliability and uptime', 'User satisfaction and support', 'Operational efficiency', 'Security and compliance'].map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-slate-600">
                      <span className="text-slate-900 font-bold">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Core Principles</h4>
                <ul className="space-y-2">
                  {['Business-aligned IT strategy', 'Stakeholder collaboration', 'Continuous improvement', 'Adaptive leadership'].map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-slate-600">
                      <span className="text-slate-900 font-bold">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}