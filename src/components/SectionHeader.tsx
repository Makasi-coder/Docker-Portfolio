interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-16 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">{title}</h2>
      {subtitle && <p className="text-xl text-slate-500">{subtitle}</p>}
    </div>
  );
}