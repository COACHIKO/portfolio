import React from 'react';
import { 
  ArrowRight, 
  ArrowLeft,
  MessageSquare,
  FileDown,
  Phone
} from 'lucide-react';

export default function Hero({ profile, lang, onOpenContact }) {
  const isAr = lang === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <section id="hero" className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      
      {/* Subtle Warm Atmospheric Glow (No purple blobs!) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#d4af37]/[0.06] blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center mb-16">
          
          {/* Text Column */}
          <div className="lg:col-span-7 text-center lg:text-start rtl:lg:text-right">
            
            {/* Top Verified Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#d4af37]/25 bg-[#d4af37]/[0.08] text-[#fef08a] text-xs font-semibold backdrop-blur-md mb-6 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono tracking-wide">
                Senior Flutter Developer @ EGYTEL
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.18] mb-6">
              {isAr ? (
                <>
                  أنا <span className="bg-gradient-to-r from-[#fef08a] via-[#d4af37] to-[#e5c158] bg-clip-text text-transparent">محمد محمود</span>
                  <br />
                  Senior Flutter Developer لتطبيقات الموبايل والديسكتوب.
                </>
              ) : (
                <>
                  I'm <span className="bg-gradient-to-r from-[#fef08a] via-[#d4af37] to-[#e5c158] bg-clip-text text-transparent">Muhammed Mahmoud</span>
                  <br />
                  Senior Flutter Developer for Mobile & Desktop.
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              {isAr ? profile.bioAr : profile.bioEn}
            </p>

            {/* Actions / CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center lg:justify-start rtl:lg:justify-start gap-3 sm:gap-3.5 mb-8">
              
              {/* WhatsApp Quick Chat */}
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-[#09090b] bg-gradient-to-r from-[#d4af37] to-[#e5c158] hover:from-[#c9a227] hover:to-[#dbb530] shadow-xl shadow-[#d4af37]/20 hover:scale-[1.02] active:scale-[0.98] transition-all whitespace-nowrap"
              >
                <MessageSquare className="w-4 h-4 text-[#09090b] shrink-0" />
                <span>{isAr ? "محادثة فورية على واتساب" : "Direct WhatsApp"}</span>
              </a>

              {/* Download CV */}
              <a
                href={profile.cvUrl}
                download="Muhammed-Mahmoud-CV.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white border border-zinc-700 bg-zinc-900/90 hover:border-[#d4af37]/60 hover:text-[#fef08a] shadow-lg transition-all whitespace-nowrap"
              >
                <FileDown className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>{isAr ? "تحميل السيرة الذاتية (CV)" : "Download CV (PDF)"}</span>
              </a>

              {/* Browse Projects */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-zinc-300 hover:text-white transition-colors whitespace-nowrap"
              >
                <span>{isAr ? "استعراض المشاريع" : "View Projects"}</span>
                <ArrowIcon className="w-4 h-4 text-[#d4af37] shrink-0" />
              </a>

            </div>

            {/* Direct Contact Summary */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start rtl:lg:justify-start gap-3 sm:gap-5 text-xs font-semibold text-zinc-400">
              <a 
                href={`tel:${profile.phone}`} 
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                <span className="font-mono text-zinc-200">{profile.phone}</span>
              </a>
              <span>•</span>
              <span className="text-zinc-400 break-all">{profile.email}</span>
            </div>

          </div>

          {/* Portrait Column */}
          <div className="lg:col-span-5 flex justify-center mt-4 lg:mt-0">
            <div className="relative group">
              
              {/* Subtle ambient warm back-glow */}
              <div className="absolute -inset-1 bg-gradient-to-b from-[#d4af37]/30 to-transparent rounded-3xl blur-xl opacity-40 group-hover:opacity-70 transition duration-500" />
              
              {/* Frame */}
              <div className="relative w-[250px] xs:w-[280px] sm:w-[340px] lg:w-[380px] h-[330px] xs:h-[380px] sm:h-[460px] lg:h-[490px] rounded-3xl overflow-hidden bg-[#111115] border border-white/10 group-hover:border-[#d4af37]/40 shadow-2xl transition-all">
                <img
                  src={profile.image}
                  alt={isAr ? profile.nameAr : profile.name}
                  className="w-full h-full object-cover object-center grayscale contrast-105 group-hover:grayscale-0 transition-all duration-700"
                />

                {/* Bottom dark vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent pointer-events-none" />

                {/* Floating overlay tag */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-[#0e0e12]/85 backdrop-blur-md border border-white/10 text-start rtl:text-right shadow-xl">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs font-bold text-white tracking-wide">
                      {isAr ? profile.nameAr : profile.name}
                    </span>
                  </div>
                  <p className="text-[11px] text-zinc-300 font-medium">
                    Senior Flutter Developer @ EGYTEL
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
