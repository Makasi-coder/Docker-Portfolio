import SectionHeader from './SectionHeader';

interface CareerPosition {
  organisation: string;
  position: string;
  location: string;
  dates: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}


const careerPositions: CareerPosition[] = [
  {
    organisation: 'Médecins Sans Frontières (MSF) – Tanzania Mission',
    position: 'IT Manager',
    location: 'Dar es Salaam, Tanzania',
    dates: 'July 2026 – Present',
    responsibilities: [
      'Lead all ICT operations and radio telecommunications infrastructure across Tanzania mission (3 permanent locations, 300+ users)',
      'Ensure reliable communication systems across field locations, including VSAT, HF/VHF radio networks',
      'Oversee IT security, data protection protocols, and business continuity planning for the mission',
      'Develop and enforce mission-specific ICT policies, SOPs, and standards aligned with MSF global frameworks',
      'Manage ICT budget, procurement processes, and vendor/service provider relationships (VSAT, ISP, GSM)',
      'Lead emergency ICT deployments and ensure rapid restoration of services during operational disruptions',
      'Conduct IT audits, infrastructure assessments, and comprehensive asset management',
      'Recruit, train, mentor and develop ICT Supervisors for decentralised project-level ICT operations',
      'Coordinate with MSF HQ technical referents and cross-functional teams on ICT matters',
    ],
    achievements: [
      'Established ICT services for emergency health interventions (Marburg, measles, cholera) typically within 1–2 weeks in challenging field environments',
      'Supported 300+ users across distributed locations with mission-critical ICT services and telecommunications',
      'Strengthened IT security across mission through access controls, MFA, firewall configuration, network segmentation, user training and regular patching',
      'Improved visibility and accountability of ICT assets through asset register rebuilding and physical verification',
      'Recruited, trained and mentored 3 ICT Supervisors, enabling decentralised ICT operations management across projects',
      'Successfully migrated office ICT infrastructure within 2–3 days with minimal operational disruption',
    ],
    technologies: ['VSAT', 'HF/VHF Radio Systems', 'GSM Systems', 'Microsoft Active Directory', 'Hyper-V Virtualization', 'Sophos Firewalls', 'Network Monitoring', 'Backup & DR Systems', 'SharePoint', 'LAN/WAN Infrastructure'],
  },
  {
    organisation: 'Médecins Sans Frontières (MSF) – Sudan Mission',
    position: 'IT Manager',
    location: 'West Darfur, Sudan',
    dates: 'March 2026 – June 2026',
    responsibilities: [
      'Lead all ICT operations and radio telecommunications infrastructure in complex humanitarian emergency context',
      'Ensure reliable communication systems across field locations in challenging infrastructure environment',
      'Oversee IT security, data protection protocols, and business continuity planning',
      'Develop and enforce mission-specific ICT policies, SOPs, and standards aligned with MSF frameworks',
      'Manage ICT budget, procurement processes, and vendor/service provider relationships',
      'Lead emergency ICT deployments in resource-constrained environment',
      'Conduct IT audits, infrastructure assessments, and comprehensive asset management',
      'Recruit, train and mentor ICT Supervisors',
      'Coordinate with MSF HQ technical referents on ICT implementations',
    ],
    achievements: [
      'Mobilised ICT services quickly in complex humanitarian emergency environment with limited infrastructure',
      'Established network infrastructure, internet connectivity, end-user computing, radio communications and user support services',
      'Managed ICT operations under challenging conditions including limited internet, remote locations, unreliable power, limited telecommunications coverage, procurement constraints and security restrictions',
      'Adapted technology solutions to changing operational requirements in resource-constrained context',
    ],
    technologies: ['VSAT', 'HF/VHF Radio Systems', 'Network Infrastructure', 'Internet Connectivity', 'End-user Computing', 'Radio Communications', 'ICT Equipment Management', 'User Support Systems'],
  },
  {
    organisation: 'Médecins Sans Frontières (MSF) – Tanzania Mission',
    position: 'Country Information Systems Specialist',
    location: 'Dar es Salaam, Tanzania',
    dates: 'June 2021 – February 2026',
    responsibilities: [
      'Plan, deploy, and maintain mission-wide IT and telecommunications systems for 300+ users across multiple locations',
      'Supervise ICT implementation across all projects, ensuring consistent service quality, continuity, and compliance with MSF standards',
      'Manage Active Directory, user access rights, data backups and security controls across the mission',
      'Standardise IT and telecom equipment across the mission for lifecycle efficiency and cost optimization',
      'Develop, update, and implement IT policies, SOPs, and mission-specific technical guidelines',
      'Lead IT audits, asset tracking, and comprehensive infrastructure documentation',
      'Design and deliver structured ICT training programs for logistics coordinators and non-technical end users',
      'Support annual IT budget preparation and provide technical input for procurement and tenders',
      'Install, configure, and troubleshoot HF/VHF radio networks, VSAT, and LAN/WAN infrastructure',
      'Support implementation of data protection and cybersecurity measures mission-wide',
      'Coordinate with HQ ICT referents, logistics coordinators, and external vendors on technical matters',
    ],
    achievements: [
      'Led end-to-end ICT setup of six office environments (3 permanent, 3 emergency deployments) including network infrastructure, connectivity, user accounts and communications',
      'Implemented SharePoint for 300+ users supporting centralised document management, organisational documentation, policies and inter-office collaboration',
      'Implemented file-server and backup solution strengthening centralised data management and business continuity',
      'Structured data-management environment covering centralised storage, access controls, backup procedures, data retention, data migration and governance',
      'Standardised IT and telecommunications equipment and configurations across mission, improving consistency, troubleshooting efficiency, interoperability and operational management',
      'Led comprehensive IT audit programme identifying asset record gaps, missing infrastructure documentation and configuration inconsistencies, then implemented corrective actions',
      'Designed and delivered structured ICT training programs for Logisticians and non-technical users, improving operational ICT capability',
      'Upgraded network infrastructure addressing reliability, Wi-Fi coverage, equipment obsolescence and configuration inconsistencies',
      'Coordinated VSAT deployment providing backup connectivity and business continuity when terrestrial connectivity unavailable',
      'Strengthened IT security through user access controls, password policies, MFA, firewall configuration, network segmentation, regular patching and user security training',
    ],
    technologies: ['Microsoft Active Directory', 'Hyper-V Virtualization', 'VSAT', 'HF/VHF Radio Systems', 'GSM Systems', 'Sophos Firewalls', 'Network Switches & Routers', 'Wi-Fi Infrastructure', 'SharePoint', 'File Servers', 'Backup Systems', 'UPS/Power Protection', 'Network Management Tools'],
  },
  {
    organisation: 'Médecins Sans Frontières (MSF) – Tanzania Mission',
    position: 'Logistics Supervisor (Temporary Gap Filling)',
    location: 'Tanzania (Multiple Locations)',
    dates: 'Jan–May 2022 and Jan–Mar 2024',
    responsibilities: [
      'Supervise logistics operations including fleet management during critical operational periods',
      'Manage and supervise logistics team including drivers, specialized technicians and maintenance agents',
      'Coordinate maintenance of technical and non-medical equipment across field locations',
      'Support emergency operations during high-pressure periods, demonstrating operational versatility',
      'Provide ICT-related logistics support (equipment procurement, asset tracking, logistics coordination)',
    ],
    achievements: [
      'Demonstrated operational versatility by stepping into logistics leadership during critical periods',
      'Strengthened cross-functional collaboration between logistics, medical, and ICT teams',
      'Supported field teams during emergency health interventions with coordinated logistics and ICT support',
      'Ensured continuity of technical and ICT equipment maintenance and support',
    ],
    technologies: ['Fleet Management', 'Equipment Management', 'Asset Tracking', 'Logistics Systems', 'Cross-functional Coordination'],
  },
  {
    organisation: 'Maas Computers & Networks Ltd',
    position: 'Team Lead, Network Support Engineer',
    location: 'Dar es Salaam, Tanzania',
    dates: 'August 2018 – May 2021',
    responsibilities: [
      'Install and support LAN and WAN infrastructure for enterprise clients across multiple sectors',
      'Diagnose and resolve complex network, hardware, and software issues for diverse client environments',
      'Maintain servers, backup systems, and disaster recovery processes',
      'Support infrastructure monitoring, preventive maintenance, and equipment lifecycle management',
      'Provide technical customer support on network and infrastructure problems',
      'Lead technical team providing network and infrastructure support',
    ],
    achievements: [
      'Resolved complex network and ICT problems, contributing to reliable operation of client technology environments',
      'Provided technical support across diverse client sectors and environments',
      'Built and maintained backup and disaster recovery infrastructure for enterprise clients',
      'Developed strong technical foundation in network troubleshooting, infrastructure support and systems diagnosis',
    ],
    technologies: ['LAN Infrastructure', 'WAN Networks', 'Server Administration', 'Backup Systems', 'Disaster Recovery', 'Network Troubleshooting', 'Hardware Support', 'Network Monitoring'],
  },
  {
    organisation: 'Power and Network Backup Co. Ltd',
    position: 'Network Performance & Optimization Officer (Intern)',
    location: 'Dar es Salaam, Tanzania',
    dates: 'December 2017 – July 2018',
    responsibilities: [
      'Analyze network performance using network management systems (e.g., Huawei PRS) monitoring KPIs',
      'Perform drive tests and field analysis using test phones and software to collect signal data',
      'Identify "worse cells" and determine root causes (antenna configuration, power, frequency issues)',
      'Support parameter fine-tuning (frequencies, neighbor lists, scrambling codes)',
      'Support senior engineers in software updates, network device configuration and special-event coverage',
      'Assist with network optimization and performance improvement initiatives',
    ],
    achievements: [
      'Developed technical foundation in network performance analysis and optimization',
      'Gained practical experience in mobile network operations and cellular infrastructure',
      'Contributed to network optimization efforts identifying and resolving performance issues',
      'Supported senior engineers on network configuration and special-event deployments',
    ],
    technologies: ['Huawei PRS Network Management', 'Drive Test Tools', 'Mobile Network Analysis', 'Signal Analysis', 'Network Optimization', 'Cellular Infrastructure', 'KPI Monitoring'],
  },
];

export default function CareerJourney() {
  return (
    <div className="min-h-screen py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Career Journey"
          subtitle="Progressive experience in ICT, Information Systems and IT Leadership"
        />

        <div className="space-y-12">
          {careerPositions.length > 0 ? (
            careerPositions.map((position, index) => (
              <div key={index} className="relative">
                {/* Timeline marker */}
                <div className="hidden md:flex absolute -left-12 items-center justify-center">
                  <div className="w-8 h-8 bg-slate-900 rounded-full border-4 border-slate-50"></div>
                  {index < careerPositions.length - 1 && (
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-1 h-20 bg-gradient-to-b from-slate-900 to-slate-200"></div>
                  )}
                </div>

                {/* Career Card */}
                <div className="bg-white p-8 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow duration-200">
                  <div className="md:pl-12">
                    {/* Header */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">{position.position}</h3>
                      <p className="text-lg text-slate-600 font-medium mb-2">{position.organisation}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                        <span>{position.location}</span>
                        <span>•</span>
                        <span>{position.dates}</span>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-4">Key Responsibilities</h4>
                      <ul className="space-y-2">
                        {position.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex gap-3 text-slate-600">
                            <span className="text-slate-400 mt-1">→</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-4">Key Achievements</h4>
                      <ul className="space-y-2">
                        {position.achievements.map((ach, idx) => (
                          <li key={idx} className="flex gap-3 text-slate-600">
                            <span className="text-slate-900">✓</span>
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    {position.technologies.length > 0 && (
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-4">Technologies & Systems</h4>
                        <div className="flex flex-wrap gap-2">
                          {position.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full border border-slate-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-slate-500 text-lg">Career timeline to be populated with your professional history.</p>
            </div>
          )}
        </div>

        {/* Empty state message */}
        {careerPositions.length === 1 && careerPositions[0].organisation.includes('[') && (
          <div className="mt-16 p-8 bg-blue-50 border border-blue-200 rounded-lg text-center">
            <p className="text-slate-700 mb-2">
              <strong>Ready to populate your career timeline?</strong>
            </p>
            <p className="text-slate-600">
              Share your professional history, positions, achievements and technologies for each role.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}