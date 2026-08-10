import { Mail, Download } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {

            const handleDownload = () => {
              const link = document.createElement("a");
              link.href = "/EMANUEL MAKASI CV.pdf";
              link.download = "EMANUEL MAKASI CV.pdf";
              link.click();
            };
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-slate-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-slate-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Main heading */}
        <div className="mb-8 space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight">
            Emanuel <span className="text-slate-400">J. MAKASI</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-slate-600 font-light tracking-wide">
            IT Management | Information Systems | ICT & Digital Transformation
          </h2>

          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            I bridge technology, operations and business needs to deliver reliable IT services, effective information systems and technology-enabled transformation.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => onNavigate('career')}
            className="px-8 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors duration-200 shadow-lg"
          >
            View My Experience
          </button>

            
          <button
            onClick={handleDownload}
            className="px-8 py-3 border border-slate-300 text-slate-900 font-medium rounded-lg hover:bg-slate-50 transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <Download size={18} />
            Download CV
          </button>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 justify-center items-center">
          <a
            href="#linkedin"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-slate-300 text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.39v-1.2h-2.5v8.5h2.5v-4.34c0-.77.62-1.4 1.4-1.4a1.4 1.4 0 0 1 1.4 1.4v4.34h2.5M6.5 8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M7 10.5h-1v8.5h1v-8.5Z" />
            </svg>
          </a>
          <a
            href="mailto:emmanuelmakasi@yahoo.com"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-slate-300 text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors duration-200"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 animate-bounce">
          <svg
            className="w-6 h-6 text-slate-400 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}