import SectionHeader from './SectionHeader';

const valueStatements = [
  {
    statement: 'I translate business needs into practical technology solutions.',
    description: 'Understanding your organisation\'s objectives and delivering IT services and systems that enable strategic goals.',
  },
  {
    statement: 'I lead technology operations with a strong focus on reliability and service delivery.',
    description: 'Designing and managing IT infrastructure and services that provide consistent, dependable support to users and business processes.',
  },
  {
    statement: 'I connect IT strategy with operational realities.',
    description: 'Bridging the gap between technology vision and practical implementation, ensuring decisions are both strategically sound and operationally feasible.',
  },
  {
    statement: 'I manage technology projects from planning through implementation.',
    description: 'Leading complex initiatives from requirements definition through deployment, ensuring on-time delivery and stakeholder satisfaction.',
  },
  {
    statement: 'I combine engineering discipline with business and management thinking.',
    description: 'Bringing technical depth and analytical problem-solving to strategic decision-making and organisational leadership.',
  },
];

export default function ValueProposition() {
  return (
    <div className="min-h-screen py-20 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          title="How I Create Value"
          subtitle="Core value propositions and professional impact"
        />

        <div className="space-y-6">
          {valueStatements.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-lg p-8 hover:border-slate-300 hover:shadow-lg transition-all duration-200"
            >
              <div className="flex gap-6">
                {/* Number */}
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{item.statement}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-16 bg-white border border-slate-200 rounded-lg p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">The Result</h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            By combining technical expertise with strategic thinking and business acumen, I deliver sustainable IT solutions that improve operational efficiency, enable organisational growth, and create lasting competitive advantage.
          </p>
        </div>
      </div>
    </div>
  );
}