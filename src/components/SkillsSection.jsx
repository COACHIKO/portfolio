import React from 'react';
import { 
  Cpu, 
  GitBranch, 
  Monitor, 
  PhoneCall, 
  ShieldAlert, 
  Brain,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export default function SkillsSection({ skillsMatrix, lang }) {
  const isAr = lang === 'ar';

  const iconMap = {
    Cpu: Cpu,
    GitBranch: GitBranch,
    Monitor: Monitor,
    PhoneCall: PhoneCall,
    ShieldAlert: ShieldAlert,
    Brain: Brain
  };

  return (
    <section id="skills" className="py-16 md:py-24 border-t border-white/[0.06] relative">
      
      {/* Ambient subtle glow */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-[#d4af37]/[0.04] blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#d4af37]/10 border border-[#d4af37]/25 text-[#fef08a] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>{isAr ? "القدرات الهندسية والمعمارية" : "Engineering & Architecture Matrix"}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {isAr ? "خبرات معمارية مبنية على مشاريع تجارية حقيقية" : "Battle-Tested Architectural Capabilities"}
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-3 leading-relaxed">
            {isAr 
              ? "ليست مجرد معرفة نظرية، بل حلول وأنماط تصميمية تم تطبيقها واختبارها تحت أعباء عمل فعلية لملايين المستخدمين والمؤسسات."
              : "Not just theoretical knowledge, but production-proven engineering patterns implemented across enterprise and commercial platforms."}
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsMatrix.map((cat, idx) => {
            const Icon = iconMap[cat.icon] || Cpu;
            return (
              <div 
                key={idx}
                className="noir-card rounded-2xl p-6 border border-white/[0.07] hover:border-[#d4af37]/35 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/25 flex items-center justify-center text-[#fef08a] group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-[#fef08a] transition-colors">
                      {isAr ? cat.categoryAr : cat.categoryEn}
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {cat.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <CheckCircle2 className="w-4 h-4 text-[#d4af37] mt-0.5 shrink-0" />
                        <span className="text-zinc-300 font-medium leading-snug">{item.name}</span>
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
