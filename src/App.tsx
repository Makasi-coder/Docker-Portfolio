import { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import CareerJourney from './components/CareerJourney';
import ProjectPortfolio from './components/ProjectPortfolio';
import LeadershipManagement from './components/LeadershipManagement';
import TechnicalExpertise from './components/TechnicalExpertise';
import Achievements from './components/Achievements';
import Education from './components/Education';
import ValueProposition from './components/ValueProposition';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'career', label: 'Career' },
    { id: 'projects', label: 'Projects' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'expertise', label: 'Expertise' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'education', label: 'Education' },
    { id: 'value', label: 'Value' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} sections={sections} />
      
      <main>
        <section id="home" className={activeSection === 'home' ? 'block' : 'hidden'}>
          <Hero onNavigate={setActiveSection} />
        </section>

        <section id="about" className={activeSection === 'about' ? 'block' : 'hidden'}>
          <About />
        </section>

        <section id="career" className={activeSection === 'career' ? 'block' : 'hidden'}>
          <CareerJourney />
        </section>

        <section id="projects" className={activeSection === 'projects' ? 'block' : 'hidden'}>
          <ProjectPortfolio />
        </section>

        <section id="leadership" className={activeSection === 'leadership' ? 'block' : 'hidden'}>
          <LeadershipManagement />
        </section>

        <section id="expertise" className={activeSection === 'expertise' ? 'block' : 'hidden'}>
          <TechnicalExpertise />
        </section>

        <section id="achievements" className={activeSection === 'achievements' ? 'block' : 'hidden'}>
          <Achievements />
        </section>

        <section id="education" className={activeSection === 'education' ? 'block' : 'hidden'}>
          <Education />
        </section>

        <section id="value" className={activeSection === 'value' ? 'block' : 'hidden'}>
          <ValueProposition />
        </section>

        <section id="testimonials" className={activeSection === 'testimonials' ? 'block' : 'hidden'}>
          <Testimonials />
        </section>

        <section id="contact" className={activeSection === 'contact' ? 'block' : 'hidden'}>
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}