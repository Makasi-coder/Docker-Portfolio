import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';
import SectionHeader from './SectionHeader';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen py-20 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          title="Get In Touch"
          subtitle="Let's discuss how I can help your organisation"
        />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Mail className="w-6 h-6 text-slate-900 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Email</h4>
                    <a
                      href="mailto:emmanuelmakasi@yahoo.com"
                      className="text-slate-600 hover:text-slate-900 transition-colors"
                    >
                      emmanuelmakasi@yahoo.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-slate-900 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Phone</h4>
                    <p className="text-slate-600">+255714274754</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-slate-900 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Location</h4>
                    <p className="text-slate-600">Dar es Salaam, Tanzania</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">Connect</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/emanuel-makasi/"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-lg border border-slate-300 text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-all"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.39v-1.2h-2.5v8.5h2.5v-4.34c0-.77.62-1.4 1.4-1.4a1.4 1.4 0 0 1 1.4 1.4v4.34h2.5M6.5 8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M7 10.5h-1v8.5h1v-8.5Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white border border-slate-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h3>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <p className="text-green-800 font-medium mb-2">Thank you for reaching out!</p>
                <p className="text-green-700">I'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-900 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors"
                    placeholder="Your email"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-900 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors resize-none"
                    placeholder="Your message"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}