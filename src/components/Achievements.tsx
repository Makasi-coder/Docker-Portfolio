import { Award, Zap, TrendingUp, Users } from 'lucide-react';
import SectionHeader from './SectionHeader';

interface Achievement {
  icon: React.ReactNode;
  title: string;
  context: string;
  contribution: string;
  impact: string;
}

const achievements: Achievement[] = [
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Mission-Wide ICT Infrastructure Modernisation & Standardisation',
    context: 'MSF Tanzania Mission (2021–2026), supporting 300+ users across 3 permanent locations',
    contribution: 'Led comprehensive infrastructure overhaul including IT audit identifying gaps, asset register rebuilding with physical verification, network upgrades, equipment standardisation, infrastructure documentation, security improvements and VSAT backup connectivity deployment',
    impact: 'Modernised, standardised, documented infrastructure. Improved network reliability and Wi-Fi coverage. Strengthened asset visibility and accountability. Enabled faster troubleshooting. Enhanced security through access controls, firewalls, MFA and network segmentation. Established business continuity through backup connectivity',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Emergency ICT Mobilisation in Humanitarian Health Crises',
    context: 'MSF Tanzania emergency responses (Marburg, measles, cholera interventions, 2026)',
    contribution: 'Led rapid ICT deployment in three emergency situations establishing network infrastructure, connectivity, user computing, radio communications and support services typically within 1–2 weeks in resource-constrained, remote field environments',
    impact: 'Established reliable ICT services enabling emergency health interventions. Maintained operational coordination and communications. Demonstrated ability to mobilise technology rapidly in complex humanitarian emergency environments with limited infrastructure',
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Centralised Document Management & Data Governance for 300+ Users',
    context: 'MSF Tanzania Mission (2021–2026)',
    contribution: 'Designed and deployed SharePoint platform for collaborative document management, implemented file-server and backup solution for centralised data storage, developed data governance framework covering organisation, access controls, retention and security',
    impact: 'Improved document accessibility and control across distributed locations. Enabled inter-office collaboration. Protected organisational information through backup and access controls. Enhanced operational efficiency. Improved compliance with data protection requirements',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'ICT Supervisor Team Development & Decentralised Operations Model',
    context: 'MSF Tanzania Mission (2021–2026)',
    contribution: 'Recruited, trained and mentored 3 ICT Supervisors through structured development programme combining classroom training with hands-on mentoring and ongoing guidance',
    impact: 'Developed ICT Supervisors capable of independently managing project-level operations. Reduced central IT dependency. Improved responsiveness to project needs. Strengthened local capability and operational sustainability',
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'IT Security Enhancement Across Complex Distributed Environment',
    context: 'MSF Tanzania Mission (2021–2026), protecting 300+ users and sensitive operational/medical data',
    contribution: 'Designed and implemented comprehensive security programme including user access controls, password policies, multi-factor authentication, firewall configuration, network segmentation, patch management, user security training and compliance documentation',
    impact: 'Strengthened security posture protecting organisational and patient data. Implemented layered security controls. Improved staff security awareness. Enhanced audit readiness. Better protection against unauthorised access and data breaches',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'IT Asset Management Discipline & Infrastructure Documentation from Zero',
    context: 'MSF Tanzania Mission (2021–2026)',
    contribution: 'Led comprehensive IT audit identifying asset and documentation gaps. Rebuilt asset register from scratch with physical verification and tagging. Created comprehensive infrastructure documentation including network diagrams, configurations and system architecture',
    impact: 'Established accurate, complete asset records enabling lifecycle planning. Improved visibility and accountability of IT investments. Enhanced infrastructure understanding supporting troubleshooting and operations. Improved compliance and audit readiness',
  },
];

export default function Achievements() {
  return (
    <div className="min-h-screen py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Selected Achievements"
          subtitle="Significant professional accomplishments and impact"
        />

        <div className="space-y-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex gap-6">
                {/* Icon */}
                <div className="flex-shrink-0 flex items-start justify-center w-12 h-12 mt-1 bg-slate-100 rounded-lg text-slate-900">
                  {achievement.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{achievement.title}</h3>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Context</h4>
                      <p className="text-slate-600">{achievement.context}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">My Contribution</h4>
                      <p className="text-slate-600">{achievement.contribution}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Impact</h4>
                      <p className="text-slate-600">{achievement.impact}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {achievements[0].title.includes('Placeholder') && (
          <div className="mt-16 p-8 bg-blue-50 border border-blue-200 rounded-lg text-center">
            <p className="text-slate-700 mb-2">
              <strong>Ready to showcase your achievements?</strong>
            </p>
            <p className="text-slate-600">
              Share 4-5 of your strongest professional accomplishments demonstrating leadership, scale, complexity, problem solving and business impact.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}