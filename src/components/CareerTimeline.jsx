import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Sparkles, Building2, GraduationCap } from 'lucide-react';

export default function CareerTimeline({ careerTimeline, lang }) {
  const isAr = lang === 'ar';

  return (
    <section id="experience" className="py-16 md:py-24 border-t border-white/[0.06] relative">
      
      {/* Ambient subtle warmth */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-[#d4af37]/[0.03] blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#d4af37]/10 border border-[#d4af37]/25 text-[#fef08a] mb-3">
            <Briefcase className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>{isAr ? "المسيرة المهنية والخبرات العملية" : "Career Trajectory & Experience"}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {isAr ? "أين عملت وماذا بنيت في كل محطة؟" : "Professional Journey & Commercial Impact"}
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-3 leading-relaxed">
            {isAr
              ? "مسيرة عملية موثقة من واقع الـ CV: من مشروع التخرج بالذكاء الاصطناعي، مروراً بشركة إنماء تك وتطبيقاتها التجارية، إلى موقعي الحالي في شركة إيجي تل لبناء أنظمة الـ VoIP المتقدمة."
              : "A documented track record: from university AI research through commercial platforms at Inmaa Tech to my active role engineering enterprise telephony at Egytel."}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 relative before:absolute before:inset-0 before:left-3.5 sm:before:left-5 before:rtl:left-auto before:rtl:right-3.5 sm:before:rtl:right-5 before:w-0.5 before:bg-gradient-to-b before:from-[#d4af37]/40 before:via-zinc-800 before:to-transparent">
          
          {careerTimeline.map((item, idx) => {
            const isCurrent = item.status === 'active';
            const isAcademic = item.status === 'academic';

            return (
              <div 
                key={idx}
                className="relative pl-7 sm:pl-12 rtl:pl-0 rtl:pr-7 sm:rtl:pr-12 group"
              >
                {/* Node icon marker */}
                <div className={`absolute left-1.5 sm:left-2.5 rtl:left-auto rtl:right-1.5 sm:rtl:right-2.5 top-6 -translate-x-1/2 rtl:translate-x-1/2 w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                  isCurrent 
                    ? "bg-[#d4af37] border-[#fef08a] shadow-lg shadow-[#d4af37]/30 scale-110" 
                    : isAcademic
                    ? "bg-zinc-900 border-zinc-600 text-zinc-400"
                    : "bg-zinc-900 border-[#d4af37]/50 text-[#d4af37]"
                }`}>
                  {isAcademic ? (
                    <GraduationCap className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-zinc-300" />
                  ) : (
                    <div className={`w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full ${isCurrent ? "bg-[#09090b]" : "bg-[#d4af37]"}`} />
                  )}
                </div>

                {/* Content Card */}
                <div className={`noir-card rounded-2xl p-4 sm:p-7 border transition-all ${
                  isCurrent 
                    ? "border-[#d4af37]/40 bg-[#121217] shadow-xl shadow-black/50" 
                    : "border-white/[0.07] hover:border-white/20"
                }`}>
                  
                  {/* Top Bar: Company, Role & Period */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#fef08a] transition-colors">
                          {isAr ? item.companyAr : item.companyEn}
                        </h3>
                        
                        {/* Status Badge */}
                        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                          isCurrent 
                            ? "bg-emerald-500/15 border border-emerald-500/30 text-emerald-400" 
                            : "bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#fef08a]"
                        }`}>
                          {isCurrent && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping mr-0.5 rtl:mr-0 rtl:ml-0.5" />}
                          <span>{isAr ? item.badgeAr : item.badgeEn}</span>
                        </span>
                      </div>

                      <div className="text-sm font-semibold text-[#d4af37]">
                        {isAr ? item.roleAr : item.roleEn}
                      </div>
                    </div>

                    {/* Period & Location */}
                    <div className="flex flex-col sm:items-end text-xs text-zinc-400 gap-1 shrink-0">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-900 border border-white/[0.06] font-mono text-zinc-300">
                        <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
                        <span>{isAr ? item.periodAr : item.periodEn}</span>
                      </div>
                      <div className="inline-flex items-center gap-1 text-[11px] text-zinc-500">
                        <MapPin className="w-3 h-3 text-zinc-500" />
                        <span>{isAr ? item.locationAr : item.locationEn}</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                    {isAr ? item.descriptionAr : item.descriptionEn}
                  </p>

                  {/* Shipped Projects Pills */}
                  {item.projects && item.projects.length > 0 && (
                    <div className="mb-4 pt-3 border-t border-white/[0.06]">
                      <div className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-2">
                        {isAr ? "الأنظمة والمشاريع المنفذة:" : "Key Systems Delivered:"}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {item.projects.map((proj, pIdx) => (
                          <span 
                            key={pIdx}
                            className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-zinc-900 text-zinc-200 border border-white/10"
                          >
                            {proj}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Bullet Highlights */}
                  <ul className="space-y-2 pt-2 text-xs text-zinc-300">
                    {(isAr ? item.highlightsAr : item.highlightsEn).map((hl, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#d4af37] mt-0.5 shrink-0" />
                        <span className="leading-relaxed">{hl}</span>
                      </li>
                    ))}
                  </ul>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
