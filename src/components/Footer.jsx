import React from 'react';
import { ArrowUp, ShieldCheck } from 'lucide-react';

export default function Footer({ lang }) {
  const isAr = lang === 'ar';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.06] bg-[#070709] py-12 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Rights */}
        <div className="text-center md:text-start rtl:md:text-right">
          <div className="font-bold text-sm text-white mb-1">
            {isAr ? "محمد محمود — Senior Flutter Developer" : "Muhammed Mahmoud — Senior Flutter Developer"}
          </div>
          <p className="text-zinc-500">
            {isAr 
              ? "هندسة وبناء تطبيقات الموبايل والديسكتوب بأعلى كفاءة وجودة برمجية." 
              : "Engineering production-grade applications for Mobile & Desktop."}
          </p>
        </div>

        {/* Store Trust Badges */}
        <div className="flex items-center gap-3 text-[11px] text-zinc-400">
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-white/[0.06]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Microsoft Store Certified</span>
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-white/[0.06]">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Google Play Certified</span>
          </span>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-zinc-900 border border-white/10 hover:border-[#d4af37]/40 text-zinc-300 hover:text-white transition-all shadow-sm"
        >
          <span>{isAr ? "العودة للأعلى" : "Back to Top"}</span>
          <ArrowUp className="w-3.5 h-3.5 text-[#d4af37]" />
        </button>

      </div>
    </footer>
  );
}
