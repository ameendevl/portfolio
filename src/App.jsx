import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Projects from './components/Projects';
import CaseStudyModal from './components/CaseStudyModal';
import Services from './components/Services';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Clients from './components/Clients';
import Insights from './components/Insights';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState('light');
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedProject, setSelectedProject] = useState(null);
  const [customCursorText, setCustomCursorText] = useState(null);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px',
      threshold: 0
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, [isLoading]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-400 font-sans ${theme}`}>
      <Preloader onComplete={() => setIsLoading(false)} />

      {!isLoading && (
        <>
          <CustomCursor hoverText={customCursorText} />

          <Navbar
            activeSection={activeSection}
            theme={theme}
            toggleTheme={toggleTheme}
          />

          <main>
            <Hero
              onExploreWork={() => scrollToSection('work')}
              onContact={() => scrollToSection('contact')}
            />
            <Marquee />
            <About />
            <Projects
              onSelectProject={(proj) => setSelectedProject(proj)}
              setCustomCursorText={setCustomCursorText}
            />
            <Services />
            <Skills />
            <Experience />
            <Certificates />
            <Process />
            <Testimonials />
            <Clients />
            <Insights />
            <FAQ />
            <Contact />
          </main>

          <Footer />

          <CaseStudyModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        </>
      )}
    </div>
  );
}
