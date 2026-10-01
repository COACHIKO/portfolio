import React, { useState, useEffect } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink, 
  Check, 
  Layers
} from 'lucide-react';

export default function ProjectModal({ project, lang, onClose }) {
  if (!project) return null;

  const isAr = lang === 'ar';
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Close on Escape, navigate with arrows
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') {
        setActiveImageIndex((prev) => (prev + 1) % project.images.length);
      }
      if (e.key === 'ArrowLeft') {
        setActiveImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  const handleNext = () => {
    setActiveImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const handlePrev = () => {
    setActiveImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      
      {/* Click outside to close */}
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      <div className="relative w-full max-w-6xl max-h-[94vh] bg-[#0d0d11] border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden text-zinc-100">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 border-b border-white/[0.08] bg-[#111116] shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/25 flex items-center justify-center text-[#fef08a] shrink-0">
              <Layers className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-bold text-white">
                  {isAr ? project.titleAr : project.titleEn}
                </h2>
                {project.badgeEn && (
                  <span className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#fef08a]">
                    <span>{isAr ? project.badgeAr : project.badgeEn}</span>
                  </span>
                )}
              </div>
              <p className="text-xs text-zinc-400">
                {isAr ? `الجهة المالكة: ${project.clientAr || 'مشروع هندسي'}` : `Client: ${project.clientEn || 'Production Engineering'}`}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/20 transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>{project.storePlatform}</span>
              </a>
            )}

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-xl border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
              title="Close / إغلاق"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x lg:divide-white/[0.08] rtl:lg:divide-x-reverse">
          
          {/* Left Column: Image Lightbox */}
          <div className="lg:col-span-7 p-4 sm:p-6 flex flex-col justify-between bg-black/40">
            
            {/* Big Active Image */}
            <div className="relative rounded-2xl overflow-hidden bg-[#070709] border border-white/[0.06] flex items-center justify-center min-h-[340px] sm:min-h-[460px] max-h-[540px]">
              
              <img
                src={project.images[activeImageIndex]}
                alt={`Screen ${activeImageIndex + 1}`}
                className="max-h-[500px] w-auto max-w-full object-contain mx-auto shadow-2xl transition-all duration-300 select-none"
              />

              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/75 hover:bg-[#d4af37] hover:text-[#09090b] border border-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all shadow-lg"
                title="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/75 hover:bg-[#d4af37] hover:text-[#09090b] border border-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all shadow-lg"
                title="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold bg-black/80 text-zinc-200 border border-white/10 backdrop-blur-md">
                {isAr ? `شاشة ${activeImageIndex + 1} من ${project.images.length}` : `Screen ${activeImageIndex + 1} of ${project.images.length}`}
              </div>
            </div>

            {/* Thumbnails Scroller Bar */}
            <div className="mt-4 pt-3 border-t border-white/[0.08]">
              <p className="text-[11px] font-semibold text-zinc-400 mb-2">
                {isAr ? "معرض الشاشات المباشرة:" : "Screens Showcase:"}
              </p>
              <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-thin">
                {project.images.map((imgSrc, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-16 h-20 sm:w-20 sm:h-24 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                      activeImageIndex === idx 
                        ? "border-[#d4af37] scale-105 shadow-md shadow-[#d4af37]/20" 
                        : "border-zinc-800 opacity-60 hover:opacity-100 hover:border-zinc-600"
                    }`}
                  >
                    <img 
                      src={imgSrc} 
                      alt={`Thumbnail ${idx + 1}`} 
                      className="w-full h-full object-cover object-top" 
                    />
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Case Study Narrative */}
          <div className="lg:col-span-5 p-5 sm:p-7 overflow-y-auto space-y-6">
            
            {/* Tagline & Overview */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#d4af37]">
                {isAr ? "نظرة عامة على النظام" : "System Overview"}
              </span>
              <h3 className="text-lg font-bold text-white mt-1 leading-snug">
                {isAr ? project.taglineAr : project.taglineEn}
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed mt-3">
                {isAr ? project.overviewAr : project.overviewEn}
              </p>
            </div>

            {/* Key Engineering Highlights */}
            <div className="rounded-2xl p-4 bg-[#14141a] border border-white/[0.06]">
              <h4 className="text-xs font-bold text-zinc-200 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#d4af37]" />
                <span>{isAr ? "أبرز الخصائص والحلول الهندسية" : "Engineering Highlights"}</span>
              </h4>
              <ul className="space-y-2.5 text-xs text-zinc-300">
                {(isAr ? project.highlightPointsAr : project.highlightPointsEn).map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-1.5 shrink-0" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2.5">
                {isAr ? "التقنيات والأدوات المستخدمة" : "Tech Stack & Packages"}
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-[#14141a] border border-[#d4af37]/25 text-[#fef08a]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Store Release Verification Card */}
            {project.liveLink && (
              <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold text-emerald-300">
                    {isAr ? "تطبيق حي معتمد بالمتاجر" : "Official Verified Store Release"}
                  </div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">
                    {project.storePlatform}
                  </div>
                </div>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-[#09090b] bg-emerald-400 hover:bg-emerald-300 shadow-md transition-all shrink-0"
                >
                  <span>{isAr ? "فتح بالمتجر" : "Open Store"}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}
