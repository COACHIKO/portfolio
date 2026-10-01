import React, { useState, useEffect } from 'react';
import { portfolioData } from './data/portfolioData';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import CareerTimeline from './components/CareerTimeline';
import SkillsSection from './components/SkillsSection';
import WhyHireMe from './components/WhyHireMe';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { Layers } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState('ar'); // Default to Arabic, toggleable to English
  const [selectedProject, setSelectedProject] = useState(null);

  const isAr = lang === 'ar';

  // Synchronize HTML dir and lang attributes
  useEffect(() => {
    document.documentElement.dir = isAr ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang, isAr]);

  const handleOpenContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#08080a] text-zinc-100 flex flex-col font-sans selection:bg-[#d4af37]/25 selection:text-[#fef08a]">
      
      {/* Navbar */}
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        onOpenContact={handleOpenContact} 
      />

      {/* Main Content */}
      <main className="flex-1">
        <Hero 
          profile={portfolioData.profile} 
          lang={lang} 
          onOpenContact={handleOpenContact} 
        />

        {/* Projects Section */}
        <section id="projects" className="py-16 md:py-24 border-t border-white/[0.06] relative">
          
          {/* Subtle Warm Atmospheric Glow */}
          <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#d4af37]/[0.03] blur-[150px] rounded-full pointer-events-none -z-10" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#d4af37]/10 border border-[#d4af37]/25 text-[#fef08a] mb-3">
                  <Layers className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>{isAr ? "معرض المشاريع والأنظمة المنفذة" : "Featured Production Applications"}</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {isAr ? "مشاريع حقيقية تعمل في السوق اليوم" : "Production Systems in the Real World"}
                </h2>
                <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-2xl leading-relaxed">
                  {isAr
                    ? "تطبيقات وأنظمة كاملة تم تصميمها وهندستها لصالح شركات كبرى، تشمل تطبيقات معتمدة على المتاجر الرسمية، وحلول التقنية المالية، وسوفت فون الكول سنتر المؤسسي، والذكاء الاصطناعي."
                    : "Full-scale production software architected and deployed for enterprises, featuring official store releases, FinTech ledgers, enterprise VoIP, and AI systems."}
                </p>
              </div>

              {/* Total Apps Count Tag */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 border border-white/[0.08] text-xs font-semibold text-zinc-300 self-start md:self-end">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>
                  {isAr ? `${portfolioData.projects.length} مشاريع موثقة بالكامل` : `${portfolioData.projects.length} Documented Production Apps`}
                </span>
              </div>
            </div>

            {/* Projects Grid: 2-Column on large screens for prominent showcase */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {portfolioData.projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  lang={lang}
                  onSelectProject={setSelectedProject}
                />
              ))}
            </div>

          </div>
        </section>

        {/* Career Timeline / المسيرة المهنية */}
        <CareerTimeline 
          careerTimeline={portfolioData.careerTimeline} 
          lang={lang} 
        />

        {/* Skills & Architectural Matrix */}
        <SkillsSection 
          skillsMatrix={portfolioData.skillsMatrix} 
          lang={lang} 
        />

        {/* Why Hire Me (Business Impact Section) */}
        <WhyHireMe 
          lang={lang} 
          onOpenContact={handleOpenContact} 
        />

        {/* Contact Section */}
        <ContactSection 
          profile={portfolioData.profile} 
          lang={lang} 
        />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Case Study & Screens Lightbox Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          lang={lang}
          onClose={() => setSelectedProject(null)}
        />
      )}

    </div>
  );
}
