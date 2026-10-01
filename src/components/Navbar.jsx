import React, { useState } from 'react';
import { Globe, FileDown, ArrowUpRight, Menu, X, Briefcase, Layers, Cpu, HeartHandshake, Mail } from 'lucide-react';

export default function Navbar({ lang, setLang, onOpenContact }) {
  const isAr = lang === 'ar';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#projects", labelAr: "المشاريع المنفذة", labelEn: "Featured Work", icon: Layers },
    { href: "#experience", labelAr: "المسيرة المهنية", labelEn: "Experience", icon: Briefcase },
    { href: "#skills", labelAr: "المعمارية والخبرات", labelEn: "Architecture", icon: Cpu },
    { href: "#why-me", labelAr: "لماذا الشراكة معي؟", labelEn: "Why Work Together", icon: HeartHandshake },
    { href: "#contact", labelAr: "تواصل معي", labelEn: "Contact", icon: Mail },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/[0.06] bg-[#08080a]/90 backdrop-blur-xl transition-all">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-2">
        
        {/* Brand */}
        <a href="#hero" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#d4af37]/20 to-[#18181b] border border-[#d4af37]/30 flex items-center justify-center font-bold text-sm sm:text-base text-[#fef08a] shadow-inner group-hover:border-[#d4af37]/60 transition-all shrink-0">
            M
          </div>
          <div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="font-bold text-sm sm:text-base lg:text-lg text-white tracking-tight group-hover:text-[#fef08a] transition-colors whitespace-nowrap">
                {isAr ? "محمد محمود" : "Muhammed Mahmoud"}
              </span>
              <span className="inline-flex items-center gap-1 px-1.5 sm:px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="hidden xs:inline">{isAr ? "متاح للمشاريع" : "Available"}</span>
              </span>
            </div>
            <p className="text-[10px] sm:text-[11px] text-zinc-400 hidden md:block font-mono">
              Senior Flutter Developer @ EGYTEL
            </p>
          </div>
        </a>

        {/* Desktop Navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-zinc-300">
          {navLinks.map((item, idx) => (
            <a 
              key={idx}
              href={item.href} 
              className="hover:text-white transition-colors relative py-1 group whitespace-nowrap"
            >
              <span>{isAr ? item.labelAr : item.labelEn}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4af37] transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          
          {/* CV Button (Always Single Line with whitespace-nowrap) */}
          <a
            href="/Muhammed-Mahmoud-CV.pdf"
            download="Muhammed-Mahmoud-CV.pdf"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-900/90 text-xs font-semibold text-zinc-200 hover:border-[#d4af37]/50 hover:text-[#fef08a] transition-all whitespace-nowrap shrink-0 shadow-sm"
            title="Download CV / تحميل السيرة الذاتية"
          >
            <FileDown className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
            <span className="whitespace-nowrap">{isAr ? "السيرة الذاتية" : "CV"}</span>
          </a>

          {/* Language Switcher */}
          <button
            onClick={() => setLang(isAr ? 'en' : 'ar')}
            className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-900/90 text-xs font-semibold text-zinc-300 hover:border-zinc-700 hover:text-white transition-all whitespace-nowrap shrink-0"
            title="Switch Language / تبديل اللغة"
          >
            <Globe className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
            <span className="whitespace-nowrap">{isAr ? "EN" : "العربية"}</span>
          </button>

          {/* Consultation CTA */}
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-[#09090b] bg-gradient-to-r from-[#d4af37] to-[#e5c158] hover:from-[#c9a227] hover:to-[#dbb530] shadow-md shadow-[#d4af37]/15 hover:scale-[1.02] active:scale-[0.98] transition-all whitespace-nowrap shrink-0"
          >
            <span className="whitespace-nowrap">{isAr ? "تواصل معي" : "Let's Talk"}</span>
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
          </button>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl border border-zinc-800 bg-zinc-900/90 text-zinc-300 hover:text-white hover:border-[#d4af37]/40 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#fef08a]" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>

      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/[0.08] bg-[#0c0c10]/95 backdrop-blur-2xl px-4 py-5 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-2">
            {navLinks.map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href={item.href}
                  onClick={handleNavClick}
                  className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold text-zinc-200 hover:bg-zinc-900 hover:text-[#fef08a] transition-all"
                >
                  <Icon className="w-4 h-4 text-[#d4af37]" />
                  <span>{isAr ? item.labelAr : item.labelEn}</span>
                </a>
              );
            })}

            {/* Mobile CV Download button inside drawer */}
            <div className="pt-3 mt-1 border-t border-white/[0.06]">
              <a
                href="/Muhammed-Mahmoud-CV.pdf"
                download="Muhammed-Mahmoud-CV.pdf"
                onClick={handleNavClick}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-zinc-900 border border-[#d4af37]/40 hover:bg-zinc-800 transition-all shadow-sm"
              >
                <FileDown className="w-4 h-4 text-[#d4af37]" />
                <span className="whitespace-nowrap">{isAr ? "تحميل السيرة الذاتية (CV PDF)" : "Download CV (PDF)"}</span>
              </a>
            </div>
          </nav>
        </div>
      )}

    </header>
  );
}
