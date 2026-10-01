import React from 'react';
import { 
  TrendingUp, 
  ShieldCheck, 
  Layers, 
  Sparkles,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

export default function WhyHireMe({ lang, onOpenContact }) {
  const isAr = lang === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const corePillars = [
    {
      icon: TrendingUp,
      titleEn: "50%+ Lower Costs via Single Unified Engine",
      titleAr: "توفير أكثر من 50% من تكاليف التطوير والصيانة",
      descEn: "One enterprise Flutter codebase powers high-performance apps across iOS, Android, Windows, and macOS simultaneously. No duplicate hiring or multi-team management overhead.",
      descAr: "كود برمجي موحد وعالي الكفاءة يغطي أجهزة الآيفون، الأندرويد، الويندوز، والماك. لن تحتاج لتوظيف فرق عمل منفصلة لكل منصة، مما يقلل النفقات التشغيلية إلى النصف."
    },
    {
      icon: ShieldCheck,
      titleEn: "Guaranteed Official Store Approvals",
      titleAr: "اعتماد رسمي موثق على المتاجر العالمية",
      descEn: "Deep hands-on experience navigating the strict compliance, security, and packaging criteria of the Microsoft Store and Google Play. Zero endless delays or surprise rejections.",
      descAr: "تطبيقاتي منشورة ومعتمدة رسمياً على Microsoft Store و Google Play؛ أعرف بدقة المتطلبات الأمنية وسياسات الخصوصية لضمان نشر تطبيقك دون أي تأخير أو رفض."
    },
    {
      icon: Layers,
      titleEn: "Clean Architecture That Scales Without Refactoring",
      titleAr: "معمارية برمجية صلبة لا تنهار مع زيادة المستخدمين",
      descEn: "Built on strict separation of concerns (Domain, Data, Presentation layers). The codebase remains modular, thoroughly testable, and ready for rapid feature additions as your business grows.",
      descAr: "فصل تام للطبقات والمنطق البرمجي (Clean Architecture) يضمن بقاء النظام سريعاً وسهل الصيانة، مما يحمي استثمارك المستقبلي من فخ إعادة كتابة الكود من الصفر."
    }
  ];

  return (
    <section id="why-me" className="py-16 md:py-24 border-t border-white/[0.06] bg-[#0b0b0f]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#d4af37]/10 border border-[#d4af37]/25 text-[#fef08a] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>{isAr ? "قيمة حقيقية لأصحاب الأعمال والمستثمرين" : "Value Proposition for Founders & Leaders"}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {isAr ? "لماذا الشراكة معي استثمار ناجح لمشروعك؟" : "Why Partnering With Me Accelerates Your Business"}
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-3 leading-relaxed">
            {isAr
              ? "الجمع بين الانضباط الهندسي وفهم أهداف البيزنس وسرعة الوصول للسوق بأعلى معايير الجودة."
              : "Bridging the gap between robust software engineering and business viability to deliver high-converting, high-ROI applications."}
          </p>
        </div>

        {/* Core Pillars 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {corePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="noir-card rounded-2xl p-7 border border-white/[0.07] hover:border-[#d4af37]/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#d4af37]/20 to-[#18181b] border border-[#d4af37]/30 flex items-center justify-center text-[#fef08a] mb-5 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#fef08a] transition-colors leading-snug">
                    {isAr ? pillar.titleAr : pillar.titleEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {isAr ? pillar.descAr : pillar.descEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Callout Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#111116] border border-[#d4af37]/30 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/10 blur-[100px] rounded-full pointer-events-none" />
          
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
            {isAr 
              ? "هل لديك فكرة تطبيق أو نظام ترغب في بنائه بأعلى جودة وسرعة؟" 
              : "Ready to Build a High-Performance App or Desktop System?"}
          </h3>
          <p className="text-sm text-zinc-300 max-w-2xl mx-auto mb-6 leading-relaxed">
            {isAr
              ? "سواء كنت بحاجة لبناء تطبيق موبايل، أو نظام ديسكتوب مؤسسي، أو استشارة معمارية، أنا جاهز لتحويل رؤيتك إلى منتج إنتاجي متكامل."
              : "Whether you need a full mobile application, an enterprise desktop suite, or an architectural consultation, I'm ready to bring your vision to life."}
          </p>
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-[#09090b] bg-gradient-to-r from-[#d4af37] to-[#e5c158] hover:from-[#c9a227] hover:to-[#dbb530] shadow-xl shadow-[#d4af37]/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>{isAr ? "احجز جلسة نقاش لمشروعك الآن" : "Schedule a Project Discussion"}</span>
            <ArrowIcon className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
