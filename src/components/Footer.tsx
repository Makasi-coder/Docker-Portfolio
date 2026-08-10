export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Main content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Branding */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Emanuel J MAKASI</h3>
            <p className="text-sm text-slate-400">
              IT Management | Information Systems | ICT & Digital Transformation
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#career" className="hover:text-white transition-colors">Career</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:emmanuelmakasi@yahoo.com"
                  className="hover:text-white transition-colors"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/emanuel-makasi/"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>&copy; {currentYear} Emanuel J MAKASI. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
              <a href="#terms" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}