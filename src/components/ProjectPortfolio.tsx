import { useState } from 'react';
import SectionHeader from './SectionHeader';

interface Project {
  title: string;
  organisation: string;
  role: string;
  period: string;
  category: string;
  challenge: string;
  solution: string;
  contribution: string;
  technologies: string[];
  stakeholders: string[];
  outcome: string;
  lessonsLearned: string[];
}

const projects: Project[] = [
  {
    title: 'Mission-Wide ICT Infrastructure Overhaul',
    organisation: 'Médecins Sans Frontières – Tanzania',
    role: 'Country Information Systems Specialist / IT Manager',
    period: '2021 – 2026',
    category: 'IT Infrastructure',
    challenge: 'The Tanzania mission ICT infrastructure was fragmented and inconsistent across three distributed locations. Key problems included incomplete or inaccurate asset records, missing infrastructure documentation, outdated equipment, inconsistent configurations, poor network reliability,inadequate Wi-Fi.',
    solution: 'Implemented a comprehensive infrastructure modernisation programme spanning network upgrades, standardisation of IT and telecommunications equipment, asset register rebuilding, infrastructure documentation, security improvements, and deployment of business continuity solutions (VSAT backup connectivity).',
    contribution: 'Led all phases including IT audit and gap analysis, infrastructure design, equipment standardisation strategy, asset register rebuilding with physical verification and tagging, network upgrades, security implementation, and vendor coordination for connectivity services.',
    technologies: ['Network Infrastructure', 'Switches & Routers', 'Wi-Fi Systems', 'VSAT Connectivity', 'Sophos Firewalls', 'Active Directory', 'HF/VHF Radio Systems', 'Asset Management Tools', 'Network Monitoring'],
    stakeholders: ['Mission Leadership', 'Project Managers', 'Logistics Coordinators', 'ICT Supervisors', 'External Service Providers (VSAT, ISP)', 'MSF HQ Technical Team'],
    outcome: 'Modernised, standardised, documented ICT infrastructure supporting 300+ users reliably across three permanent locations. Improved network reliability, Wi-Fi coverage, device consistency, troubleshooting efficiency, asset visibility and accountability. Security controls strengthened through access management, firewalls, network segmentation and user training. VSAT backup connectivity established for business continuity.',
    lessonsLearned: [
      'Comprehensive IT audit creates foundation for strategic infrastructure improvement by identifying gaps and priorities',
      'Standardisation and documentation dramatically improve support efficiency and consistency across distributed locations',
      'Phased infrastructure upgrades maintain operational continuity while modernising technology',
      'Backup connectivity (VSAT) is essential business continuity in resource-constrained environments',
      'Strong asset management discipline prevents loss of control over distributed technology resources',
    ],
  },
  {
    title: 'Emergency ICT Mobilisation — Humanitarian Health Interventions',
    organisation: 'Médecins Sans Frontières – Tanzania',
    role: 'IT Manager',
    period: '2022 – 2025',
    category: 'Emergency Response',
    challenge: 'MSF responded to three emergency health situations requiring rapid ICT deployment in challenging field environments: Marburg virus outbreak in Kagera, measles intervention in Lindi, and cholera response in Kigoma. Emergency deployments must establish reliable ICT services (network, connectivity, user computing, radio communications, data management) within days in locations with limited internet, remote areas, unreliable power, sparse telecommunications coverage, procurement constraints and security restrictions.',
    solution: 'Developed and executed emergency ICT deployment model providing rapid establishment of network infrastructure, internet connectivity (VSAT/terrestrial), end-user computing, radio communications, user support services and office ICT setup. Deployments conducted with pre-positioned equipment, vendor coordination, logistics planning and rapid staff deployment.',
    contribution: 'Led all emergency ICT deployments including needs assessment, equipment procurement and logistics, infrastructure design and deployment, vendor coordination, on-site technical setup, user onboarding and ongoing support. Ensured ICT services established within 1–2 weeks typical timeframe despite logistical and environmental challenges.',
    technologies: ['Network Infrastructure', 'VSAT Connectivity', 'HF/VHF Radio Communications', 'End-user Computing', 'Laptops & Desktop Systems', 'User Support Systems', 'Power Protection (UPS)', 'Internet Connectivity'],
    stakeholders: ['Emergency Operations Leadership', 'Medical Teams', 'Logistics Coordinators', 'Field Supervisors', 'External Service Providers', 'Local Authorities'],
    outcome: 'Established reliable ICT services supporting emergency health interventions in three locations within 1–2 weeks. Enabled operational teams to coordinate effectively, maintain communications, manage patient data and provide healthcare services. Demonstrated ability to mobilise technology quickly in resource-constrained humanitarian emergency environments.',
    lessonsLearned: [
      'Pre-planning and equipment pre-positioning are critical for rapid emergency deployment',
      'Standardised equipment and configurations enable faster deployment and support',
      'Vendor relationships and logistics coordination are as important as technical capability in emergencies',
      'Pragmatic technology solutions aligned to actual constraints (power, connectivity, infrastructure) work better than idealistic designs',
      'Emergency deployments require clear priorities: communications first, then user computing, then data management',
      'Field team training and support during deployment are essential for adoption and operational effectiveness',
    ],
  },
  {
    title: 'Office ICT Infrastructure Deployment & Relocation',
    organisation: 'Médecins Sans Frontières – Tanzania',
    role: 'Country Information Systems Specialist / IT Manager',
    period: '2021 – 2025',
    category: 'IT Infrastructure',
    challenge: 'Led the end-to-end ICT setup for six office environments (3 permanent locations, 3 emergency deployments) requiring complete infrastructure deployment from zero. Each required planning and implementation of network infrastructure, internet connectivity (VSAT and terrestrial), Wi-Fi systems, user computing (desktop/laptop deployment), user accounts and access, file-sharing and server services, radio communications, power protection and integration with organisational systems. Additionally managed full office relocation requiring rapid ICT infrastructure migration with minimal service disruption.',
    solution: 'Implemented standardised office ICT deployment approach covering infrastructure planning, equipment procurement and logistics, network and connectivity setup, user account and access provisioning, server and file-sharing services deployment, office relocation planning and execution to minimise downtime.',
    contribution: 'Owned complete ICT deployment lifecycle for six offices. Designed deployment approach, planned infrastructure, procured and coordinated equipment logistics, deployed and configured networks and connectivity, provisioned user accounts, implemented file-sharing services, coordinated office relocation (2–3 day transition with minimal disruption), trained users and provided ongoing support.',
    technologies: ['Network Infrastructure', 'Internet Connectivity (VSAT/Terrestrial)', 'Wi-Fi Systems', 'Active Directory', 'File Servers', 'Backup Systems', 'Desktop & Laptop Computing', 'Radio Communications', 'UPS/Power Protection', 'Switches, Routers, Firewalls'],
    stakeholders: ['Office Managers', 'Project Leaders', 'Finance & Logistics Teams', 'All Office Users', 'External Connectivity Providers', 'Equipment Vendors'],
    outcome: 'Successfully deployed ICT infrastructure in six office environments supporting operational effectiveness and user productivity. Office relocation completed within 2–3 days with ICT services operational and business continuity maintained. Standardised deployment approach created consistent user experience and simplified ongoing support.',
    lessonsLearned: [
      'Detailed pre-deployment planning prevents delays and service disruptions',
      'Standardised infrastructure designs enable faster, more reliable deployments',
      'Strong logistics and vendor coordination are critical success factors',
      'Office relocation requires detailed cutover planning and execution discipline',
      'User training and support during transitions are essential for adoption',
      'Backup connectivity (VSAT) prevents complete service loss during terrestrial outages',
    ],
  },
  {
    title: 'Centralised Document Management & Data Governance Implementation',
    organisation: 'Médecins Sans Frontières – Tanzania',
    role: 'Country Information Systems Specialist',
    period: '2023',
    category: 'Information Systems',
    challenge: 'The mission lacked centralised, structured document management and data governance. Information was scattered across multiple locations, email inboxes and individual computers. This created risks including data loss, inability to find critical information, poor document control, inconsistent data management practices, compliance gaps and reduced organisational effectiveness.',
    solution: 'Implemented centralised, structured data-management environment with three components: (1) SharePoint platform for collaborative document management supporting organisational documents, policies, procedures and project documentation for 300+ users; (2) File-server and backup solution providing centralised data storage with backup and recovery capability; (3) Data governance framework covering file organisation, access controls, retention, data security and documentation practices.',
    contribution: 'Designed and implemented complete data-management solution. Established SharePoint platform and migrated organisational documentation. Deployed file-server and backup infrastructure. Developed data governance policies and training. Led user adoption and ongoing support.',
    technologies: ['SharePoint', 'File Servers', 'Backup Systems', 'Active Directory', 'Access Controls', 'Network Storage (NAS)', 'Disaster Recovery Systems'],
    stakeholders: ['Mission Leadership', 'All 300+ Users', 'Project Teams', 'Finance & Admin Teams', 'Document Custodians', 'IT Support Team'],
    outcome: 'Established centralised, governed data-management environment supporting 300+ users. Improved document accessibility, control and organisation. Enabled inter-office collaboration through SharePoint. Protected organisational information through backup and access controls. Improved compliance with data protection requirements. Enhanced organisational efficiency through improved information accessibility.',
    lessonsLearned: [
      'Centralised document management requires governance framework (organisation, retention, access, security)',
      'User training and change management are critical for adoption of new platforms',
      'Backup and disaster recovery are non-negotiable for data protection',
      'SharePoint improves collaboration but requires disciplined use and governance',
      'Data governance discipline must be embedded in organisational culture, not just IT policy',
    ],
  },
  {
    title: 'Radio Communications Infrastructure Design & Deployment',
    organisation: 'Médecins Sans Frontières – Tanzania',
    role: 'Country Information Systems Specialist / IT Manager',
    period: '2022 – 2026',
    category: 'Telecommunications',
    challenge: 'The mission required reliable radio communications across distributed field locations to maintain operational coordination and emergency response capability. HF and VHF systems needed to cover multiple geographic areas, provide reliable coverage in challenging terrain, support both fixed base stations and mobile/portable use, and integrate with other mission communications.',
    solution: 'Planned, deployed and configured mission radio communications infrastructure including HF base stations for long-distance communication, VHF/UHF handheld radios for field teams, vehicle-mounted radios for mobile operations, antenna installations optimised for coverage, frequency allocation and licensing coordination, and user training.',
    contribution: 'Led radio communications planning and deployment including technical requirement definition, equipment selection, antenna design and installation, frequency coordination and licensing, radio programming and channel configuration, user training and ongoing maintenance.',
    technologies: ['HF Base Stations', 'HF Mobile & Portable Radios', 'VHF/UHF Handheld Radios', 'VHF Vehicle Radios', 'Antenna Systems', 'Radio Programming', 'Frequency Management', 'GSM Communications'],
    stakeholders: ['Field Teams', 'Project Leaders', 'Operations Coordinators', 'Radio Service Providers', 'Regulatory Authorities', 'External Agencies'],
    outcome: 'Deployed reliable radio communications infrastructure enabling operational coordination across distributed field locations. Provided backup communications during internet/terrestrial connectivity outages. Supported emergency response coordination. Enabled mobile field teams to maintain contact with base operations.',
    lessonsLearned: [
      'Reliable radio communications are essential in humanitarian operations, especially in remote areas',
      'Frequency coordination and regulatory compliance are critical operational requirements',
      'Multiple radio systems (HF, VHF, GSM) provide redundancy and flexibility',
      'User training is essential for effective radio use',
      'Regular maintenance and testing ensure system reliability when needed',
    ],
  },
  {
    title: 'IT Security & Cybersecurity Enhancement Programme',
    organisation: 'Médecins Sans Frontières – Tanzania',
    role: 'Country Information Systems Specialist / IT Manager',
    period: '2025',
    category: 'Cybersecurity',
    challenge: 'The mission had limited IT security controls protecting 300+ users and sensitive operational/medical data across distributed locations. Identified risks included weak access controls, uncontrolled user permissions, inadequate authentication, lack of firewall enforcement, poor patch management, limited user security awareness and compliance gaps.',
    solution: 'Implemented comprehensive security programme including user access controls and permissions, password policies and enforcement, multi-factor authentication, firewall configuration and network segmentation, regular system patching and updates, user security awareness training, compliance documentation and audit readiness.',
    contribution: 'Led security programme design and implementation. Established access control policies and Active Directory enforcement. Configured firewalls and network segmentation. Developed patch management procedures. Created and delivered user security training. Implemented audit readiness and documentation.',
    technologies: ['Sophos Firewalls', 'Active Directory', 'Multi-Factor Authentication', 'Network VLANs', 'Endpoint Protection', 'Security Policies & SOPs', 'Access Controls', 'Patch Management Systems'],
    stakeholders: ['Mission Leadership', 'All Staff (300+)', 'Project Teams', 'Finance & Compliance Teams', 'External Security Auditors', 'MSF Global Security Team'],
    outcome: 'Strengthened IT security across mission protecting organisational and patient data. Implemented layered security controls (access, authentication, network, endpoint). Improved staff security awareness and compliance. Enhanced audit readiness. Better protected against unauthorised access, data breaches and security incidents.',
    lessonsLearned: [
      'Security requires multi-layered approach (access controls, network security, endpoint protection, user awareness)',
      'User security training is essential—people are often the weakest security link',
      'Strong authentication (MFA) significantly improves security without major operational impact',
      'Network segmentation limits impact of security breaches',
      'Regular patching and updates prevent known vulnerabilities from being exploited',
      'Security must be balanced with operational effectiveness to maintain user adoption',
    ],
  },
  {
    title: 'ICT Asset Management & Infrastructure Documentation Programme',
    organisation: 'Médecins Sans Frontières – Tanzania',
    role: 'Country Information Systems Specialist / IT Manager',
    period: '2021 – 2026',
    category: 'IT Operations',
    challenge: 'The mission lacked accurate asset records and infrastructure documentation. IT assets were incompletely tracked, infrastructure diagrams were missing or outdated, configurations were inconsistent and undocumented. This created operational challenges including inability to track equipment, difficult troubleshooting, poor lifecycle management, compliance gaps and poor visibility of IT investments.',
    solution: 'Launched comprehensive asset management and documentation programme including IT audit to identify gaps, asset register rebuilding with complete equipment inventory and tagging, physical verification of assets, comprehensive infrastructure documentation (network diagrams, connectivity, configurations, system architecture), and standardised documentation practices.',
    contribution: 'Led IT audit programme identifying gaps. Rebuilt asset register from scratch including physical asset verification and tagging across all locations. Created comprehensive infrastructure documentation. Developed documentation standards and processes. Trained staff on asset tracking and documentation practices.',
    technologies: ['Asset Management Systems', 'Inventory Tracking', 'Physical Asset Tagging', 'Network Documentation Tools', 'Configuration Documentation', 'Infrastructure Mapping'],
    stakeholders: ['IT Team', 'Project Managers', 'Logistics Coordinators', 'Finance & Admin Teams', 'All ICT Supervisors', 'Vendors'],
    outcome: 'Established accurate, complete IT asset records and infrastructure documentation supporting operational management. Improved asset visibility and accountability. Simplified troubleshooting and support through documented configurations. Enabled better lifecycle planning and cost management. Improved compliance and audit readiness.',
    lessonsLearned: [
      'IT asset discipline prevents loss of control over technology resources',
      'Comprehensive documentation is critical for operational support and troubleshooting',
      'Physical asset verification is necessary to ensure accuracy—desk-based reconciliation alone is insufficient',
      'Consistent documentation standards make information more useful and maintainable',
      'Asset management requires ongoing discipline, not just one-time project',
    ],
  },
  {
    title: 'ICT Supervisor Team Development & Capacity Building',
    organisation: 'Médecins Sans Frontières – Tanzania',
    role: 'Country Information Systems Specialist / IT Manager',
    period: '2023 – 2026',
    category: 'Project Management',
    challenge: 'The mission required decentralised ICT operations management at project level to reduce dependency on central IT support. However, existing ICT staff lacked the necessary capability to independently manage project-level ICT operations including infrastructure troubleshooting, asset management, user support and policy enforcement.',
    solution: 'Established ICT Supervisor development programme recruiting, training and mentoring 3 ICT Supervisors to independently manage project-level operations. Development focused on building capability in independent ICT operations management, network and infrastructure troubleshooting, user management, asset management and policy enforcement.',
    contribution: 'Recruited 3 ICT Supervisors. Designed and delivered tailored training and mentoring programme. Supervised initial implementations. Provided ongoing guidance and feedback. Empowered supervisors to independently manage project operations.',
    technologies: ['Network Troubleshooting', 'Active Directory Management', 'Help Desk Systems', 'Asset Management', 'Network Diagnostics Tools', 'Configuration Management'],
    stakeholders: ['ICT Supervisors', 'Project Managers', 'Field Teams', 'Mission Leadership', 'HR & Capacity Development Teams'],
    outcome: 'Developed 3 ICT Supervisors capable of independently managing project-level ICT operations. Enabled decentralised service delivery reducing central IT dependency. Improved responsiveness to project needs. Strengthened local ICT capability. Improved sustainability of ICT services.',
    lessonsLearned: [
      'Capacity development requires structured training combined with hands-on mentoring, not just classroom teaching',
      'Clear role definition and autonomy are essential for supervisor effectiveness',
      'Ongoing support and feedback from central ICT helps supervisors succeed and develop further',
      'Decentralised operations require strong communication and coordination between levels',
      'Investment in people development improves sustainability and reduces central dependency',
    ],
  },
  {
    title: 'Network Infrastructure Upgrade & Standardisation Programme',
    organisation: 'Médecins Sans Frontières – Tanzania',
    role: 'Country Information Systems Specialist',
    period: '2023',
    category: 'IT Infrastructure',
    challenge: 'Network infrastructure across mission locations was aging, inconsistent and unreliable. Problems included aging switches and routers, poor Wi-Fi coverage, inconsistent configurations between offices, and limited troubleshooting visibility. This created connectivity issues, poor user experience and support difficulties.',
    solution: 'Implemented network infrastructure upgrade and standardisation programme including network equipment replacement with standardised models, Wi-Fi system deployment improving coverage, configuration standardisation across all locations, and network monitoring for proactive management.',
    contribution: 'Led infrastructure assessment and planning. Designed standardised network architecture. Procured and deployed new equipment. Configured networks consistently across locations. Implemented monitoring and maintenance procedures.',
    technologies: ['Network Switches (Standardised)', 'Routers (Standardised)', 'Wi-Fi Systems (Standardised)', 'Network Monitoring Tools', 'Firewall Appliances', 'Network Cabling', 'PoE Switches for VoIP/Wireless'],
    stakeholders: ['All Office Locations', 'Project Teams', 'IT Support Team', 'Equipment Vendors', 'Logistics Coordinators'],
    outcome: 'Modern, standardised network infrastructure across all mission locations. Improved network reliability and Wi-Fi coverage. Consistent configurations enabling easier troubleshooting. Network monitoring enabling proactive problem identification. Improved user experience and reduced support time.',
    lessonsLearned: [
      'Standardised equipment simplifies troubleshooting and support across distributed locations',
      'Wi-Fi coverage must be designed for actual usage patterns, not just theoretical coverage',
      'Network monitoring enables proactive issue identification before user impact',
      'Consistent configurations are essential in distributed environments',
      'Regular equipment lifecycle replacement prevents accumulation of obsolete technology',
    ],
  },
];

const categories = [
  'All',
  'IT Infrastructure',
  'Information Systems',
  'Telecommunications',
  'Digital Transformation',
  'Cybersecurity',
  'IT Operations',
  'Project Management',
];

export default function ProjectPortfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Project Portfolio"
          subtitle="Delivering complex technology solutions across diverse environments"
        />

        {/* Category Filters */}
        <div className="mb-12 flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-slate-900 text-white shadow-lg'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-slate-500 text-lg">No projects in this category yet.</p>
          </div>
        )}

        {/* Empty state */}
        {projects.length === 1 && projects[0].title.includes('Project Title') && (
          <div className="mt-16 p-8 bg-blue-50 border border-blue-200 rounded-lg text-center">
            <p className="text-slate-700 mb-2">
              <strong>Build your project portfolio.</strong>
            </p>
            <p className="text-slate-600 mb-4">
              Share your key projects with details on challenge, solution, technologies and impact.
            </p>
            <p className="text-slate-600 text-sm">
              Use the Case Study framework: Challenge → Approach → Implementation → Leadership → Outcome
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`border border-slate-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer ${
        isExpanded ? 'md:col-span-2' : ''
      }`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="p-8">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{project.title}</h3>
              <p className="text-slate-600">{project.organisation}</p>
            </div>
            <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full">
              {project.category}
            </span>
          </div>
          <p className="text-sm text-slate-500">{project.period}</p>
        </div>

        {/* Summary */}
        <div className="mb-6 pb-6 border-b border-slate-200">
          <p className="text-slate-600 line-clamp-2">{project.challenge}</p>
        </div>

        {/* Quick Info */}
        <div className="mb-6 grid grid-cols-2 gap-4">
          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase mb-2">Role</h4>
            <p className="text-slate-700">{project.role}</p>
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase mb-2">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 2).map((tech, idx) => (
                <span key={idx} className="px-2 py-1 bg-slate-50 text-slate-700 text-xs rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Expanded View */}
        {isExpanded && (
          <div className="space-y-6 pt-6 border-t border-slate-200 animate-in fade-in duration-300">
            {/* Challenge Section */}
            <div>
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3">01 — Challenge</h4>
              <p className="text-slate-600">{project.challenge}</p>
            </div>

            {/* Approach Section */}
            <div>
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3">02 — Approach</h4>
              <p className="text-slate-600">{project.solution}</p>
            </div>

            {/* Implementation Section */}
            <div>
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3">03 — Implementation</h4>
              <p className="text-slate-600">{project.contribution}</p>
            </div>

            {/* Stakeholders */}
            <div>
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3">Stakeholders</h4>
              <div className="flex flex-wrap gap-2">
                {project.stakeholders.map((stakeholder, idx) => (
                  <span key={idx} className="px-3 py-1 bg-slate-50 text-slate-700 text-sm rounded-full">
                    {stakeholder}
                  </span>
                ))}
              </div>
            </div>

            {/* All Technologies */}
            <div>
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Outcome */}
            <div>
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3">04 — Outcome</h4>
              <p className="text-slate-600">{project.outcome}</p>
            </div>

            {/* Lessons Learned */}
            <div>
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3">05 — Lessons Learned</h4>
              <ul className="space-y-2">
                {project.lessonsLearned.map((lesson, idx) => (
                  <li key={idx} className="flex gap-3 text-slate-600">
                    <span className="text-slate-400">•</span>
                    <span>{lesson}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Expand Button */}
        <div className="mt-6 pt-6 border-t border-slate-200 flex items-center justify-between">
          <span className="text-sm font-medium text-slate-600">
            {isExpanded ? 'Click to collapse' : 'Click to view full case study'}
          </span>
          <svg
            className={`w-5 h-5 text-slate-600 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
}