import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  sections: { id: string; label: string }[];
}

export default function Navigation({ activeSection, setActiveSection, sections }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => {
            setActiveSection('home');
            setIsOpen(false);
          }}
          className="text-lg font-bold text-slate-900 hover:text-slate-700 transition-colors"
        >
          MAKASI
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`text-sm font-medium transition-colors ${
                activeSection === section.id
                  ? 'text-slate-900'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 hover:bg-slate-100 rounded-lg"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="flex flex-col gap-4 px-6 py-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  setActiveSection(section.id);
                  setIsOpen(false);
                }}
                className={`text-left font-medium transition-colors ${
                  activeSection === section.id
                    ? 'text-slate-900'
                    : 'text-slate-600'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}