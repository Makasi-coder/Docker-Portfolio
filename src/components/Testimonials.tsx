import { Quote } from 'lucide-react';
import SectionHeader from './SectionHeader';

export default function Testimonials() {
  return (
    <div className="min-h-screen py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          title="Recommendations & Testimonials"
          subtitle="Professional endorsements and feedback"
        />

        <div className="bg-slate-50 border border-slate-200 rounded-lg p-12 text-center">
          <Quote className="w-12 h-12 text-slate-300 mx-auto mb-6" />
          <p className="text-lg text-slate-600 mb-4">
            Professional recommendations coming soon.
          </p>
          <p className="text-slate-500">
            Testimonials and professional endorsements from colleagues, managers and stakeholders will appear here as they are provided.
          </p>
        </div>
      </div>
    </div>
  );
}