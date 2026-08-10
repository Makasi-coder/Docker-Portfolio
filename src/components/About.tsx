import { Briefcase, Code, Users, Target } from 'lucide-react';
import SectionHeader from './SectionHeader';

export default function About() {
  const strengths = [
    {
      icon: Briefcase,
      title: 'Technology Leadership',
      description: 'Strategic direction and vision for ICT, information systems and digital initiatives'
    },
    {
      icon: Code,
      title: 'IT Operations',
      description: 'Design, implementation and management of reliable IT infrastructure and services'
    },
    {
      icon: Target,
      title: 'Project & Portfolio Management',
      description: 'Delivery of complex technology projects from planning through implementation'
    },
    {
      icon: Users,
      title: 'Digital Transformation',
      description: 'Leading technology-enabled change and process improvement initiatives'
    },
    {
      icon: Briefcase,
      title: 'Information Systems Strategy',
      description: 'Aligning business objectives with information technology solutions'
    },
    {
      icon: Code,
      title: 'Field Operations & Complexity',
      description: 'Managing technology solutions in resource-constrained humanitarian environments'
    },
  ];

  return (
    <div className="min-h-screen py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="About Me"
          subtitle="Professional Background & Expertise"
        />

        {/* Biography */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-2">
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              I am an Electronics and Communication Engineer who has successfully transitioned into Information Systems and IT Management. With approximately 8 years of progressive experience in ICT, information systems, telecommunications, technology operations and project delivery, I have developed deep expertise in translating complex business and operational needs into practical technology solutions.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              My career has been shaped by work in humanitarian and international development environments, where I've led technology initiatives in resource-constrained, complex field settings. This background has instilled a pragmatic, results-focused approach to IT leadership—combining technical depth with operational awareness and business thinking.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed">
              I specialise in IT operations, information systems strategy, telecommunications infrastructure, digital transformation and project delivery. My focus is always on creating reliable, efficient technology systems that enable organisations to operate effectively and achieve their mission.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="space-y-6">
            <div className="p-6 bg-slate-50 rounded-lg border border-slate-200">
              <div className="text-3xl font-bold text-slate-900 mb-2">8+</div>
              <div className="text-slate-600 font-medium">Years ICT & IT Experience</div>
            </div>
            <div className="p-6 bg-slate-50 rounded-lg border border-slate-200">
              <div className="text-3xl font-bold text-slate-900 mb-2">4</div>
              <div className="text-slate-600 font-medium">Core Expertise Areas</div>
            </div>
            <div className="p-6 bg-slate-50 rounded-lg border border-slate-200">
              <div className="text-3xl font-bold text-slate-900 mb-2">2</div>
              <div className="text-slate-600 font-medium">Professional Certifications</div>
            </div>
          </div>
        </div>

        {/* Strengths Grid */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-slate-900 mb-12 text-center">What I Bring</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {strengths.map((strength, index) => {
              const Icon = strength.icon;
              return (
                <div
                  key={index}
                  className="p-6 border border-slate-200 rounded-lg hover:border-slate-300 hover:shadow-lg transition-all duration-200"
                >
                  <Icon className="w-8 h-8 text-slate-900 mb-4" />
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{strength.title}</h4>
                  <p className="text-slate-600 text-sm">{strength.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}