import { CheckCircle, Clock, Target } from 'lucide-react';
import SectionHeader from './SectionHeader';

interface Qualification {
  title: string;
  organisation: string;
  year?: string;
  type: 'Academic' | 'Certification' | 'Training';
}

const completedQualifications: Qualification[] = [
  {
      title: 'Bachelor of Engineering – Electronics & Communication',
      organisation: 'St. Joseph University in Tanzania (College of Engineering & Technology)',
      year: '2017',
      type: 'Academic' as const,
    },
    {
      title: 'Sophos Certified Engineer – Network & Firewalls',
      organisation: 'Sophos/Authorized Training Partner',
      year: '2021',
      type: 'Certification' as const,
    },
    {
      title: 'People Management Training',
      organisation: 'Médecins Sans Frontières (MSF)',
      year: '2023',
      type: 'Training' as const,
    },
    {
      title: 'IT & Radio Communication Training',
      organisation: 'MSF ICT Week',
      year: '2023',
      type: 'Training' as const,
    },
];

const plannedQualifications: Qualification[] = [
  {
    title: 'Master Of Project Management',
    organisation: 'The Open University Of Tanzania',
    type: 'Academic' as const,
  },
];

const QualificationCard = ({ qual, status }: { qual: Qualification; status: 'completed' | 'in-progress' | 'planned' }) => {
  const getIcon = () => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'in-progress':
        return <Clock className="w-5 h-5 text-blue-600" />;
      case 'planned':
        return <Target className="w-5 h-5 text-slate-600" />;
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case 'completed':
        return 'bg-green-50 border-green-200';
      case 'in-progress':
        return 'bg-blue-50 border-blue-200';
      case 'planned':
        return 'bg-slate-50 border-slate-200';
    }
  };

  const getStatusLabel = () => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'in-progress':
        return 'In Progress';
      case 'planned':
        return 'Planned';
    }
  };

  return (
    <div className={`p-6 border rounded-lg ${getStatusColor()}`}>
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 mt-1">{getIcon()}</div>
        <div className="flex-1">
          <h4 className="font-bold text-slate-900 mb-1">{qual.title}</h4>
          <p className="text-slate-600 text-sm mb-2">{qual.organisation}</p>
          <div className="flex items-center gap-2">
            {qual.year && <span className="text-xs text-slate-500">{qual.year}</span>}
            <span className="text-xs font-semibold text-slate-600 bg-white/50 px-2 py-1 rounded">
              {qual.type}
            </span>
            <span className="text-xs font-semibold text-slate-600 bg-white/50 px-2 py-1 rounded">
              {getStatusLabel()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Education() {
  const hasCompletedQuals = completedQualifications.some(q => !q.title.includes('['));
  const hasPlannedQuals = plannedQualifications.some(q => !q.title.includes('['));

  return (
    <div className="min-h-screen py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Education & Certifications"
          subtitle="Academic qualifications, professional certifications and training"
        />

        {/* Completed */}
        {(hasCompletedQuals || completedQualifications[0].title.includes('[')) && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-600" />
              Completed
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {completedQualifications.map((qual, idx) => (
                <QualificationCard key={idx} qual={qual} status="completed" />
              ))}
            </div>
          </div>
        )}

        {/* In Progress */}
        

        {/* Planned */}
        {(hasPlannedQuals || plannedQualifications[0].title.includes('[')) && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <Target className="w-6 h-6 text-slate-600" />
              Planned
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {plannedQualifications.map((qual, idx) => (
                <QualificationCard key={idx} qual={qual} status="planned" />
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {!hasCompletedQuals && !hasPlannedQuals && (
          <div className="p-8 bg-blue-50 border border-blue-200 rounded-lg text-center">
            <p className="text-slate-700 mb-2">
              <strong>Build your education profile.</strong>
            </p>
            <p className="text-slate-600">
              Share your academic qualifications, professional certifications, and training programmes.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}