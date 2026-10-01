import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  Copy, 
  Check, 
  Send, 
  FileDown, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

export default function ContactSection({ profile, lang }) {
  const isAr = lang === 'ar';
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSent, setFormSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(profile.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => setFormSent(false), 4500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-white/[0.06] relative">
      
      {/* Background ambient warmth */}
      <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-[#d4af37]/[0.05] blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#d4af37]/10 border border-[#d4af37]/25 text-[#fef08a] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>{isAr ? "بدء التعاون والشراكة" : "Let's Build Together"}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {isAr ? "جاهز لبدء مشروعك القادم؟ تواصل معي اليوم" : "Ready to Elevate Your Product? Get In Touch"}
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-3 leading-relaxed">
            {isAr
              ? "متاح للتعاقد على مشاريع كاملة، قيادة فرق تطوير فلاتر، أو تقديم استشارات معمارية متخصصة للموبايل والديسكتوب."
              : "Available for full-cycle product development, leading mobile & desktop engineering efforts, or architectural consultations."}
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          
          {/* Left Column: Direct Quick Channels */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Phone Card */}
            <div className="noir-card rounded-2xl p-5 border border-white/[0.07]">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-[#d4af37] text-xs font-bold uppercase tracking-wider">
                  <Phone className="w-4 h-4" />
                  <span>{isAr ? "الهاتف المباشر" : "Direct Phone"}</span>
                </div>
                <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  {isAr ? "متاح للاتصال" : "Available"}
                </span>
              </div>
              <p className="text-base font-bold text-white ltr:font-mono mb-3">
                {profile.phone}
              </p>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${profile.phone}`}
                  className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold text-[#09090b] bg-gradient-to-r from-[#d4af37] to-[#e5c158] hover:from-[#c9a227] hover:to-[#dbb530] shadow-md transition-all"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{isAr ? "اتصال فوري" : "Call Now"}</span>
                </a>
                <button
                  onClick={handleCopyPhone}
                  className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-white/10 transition-all"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300">{isAr ? "تم النسخ" : "Copied"}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{isAr ? "نسخ الرقم" : "Copy"}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="noir-card rounded-2xl p-5 border border-white/[0.07]">
              <div className="flex items-center gap-2 mb-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <MessageSquare className="w-4 h-4" />
                <span>{isAr ? "محادثة فورية على واتساب" : "Direct WhatsApp"}</span>
              </div>
              <p className="text-xs text-zinc-300 mb-3 leading-relaxed">
                {isAr 
                  ? "تفضل بمراسلتي مباشرة لمناقشة متطلبات مشروعك، الميزانية، والجدول الزمني." 
                  : "Reach out directly for rapid discussions regarding project requirements and timeline."}
              </p>
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/20 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{isAr ? "ابدأ المحادثة الآن" : "Open WhatsApp Chat"}</span>
              </a>
            </div>

            {/* Email Card */}
            <div className="noir-card rounded-2xl p-5 border border-white/[0.07]">
              <div className="flex items-center gap-2 mb-2 text-[#d4af37] text-xs font-bold uppercase tracking-wider">
                <Mail className="w-4 h-4" />
                <span>{isAr ? "البريد الإلكتروني المباشر" : "Direct Email"}</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-white break-all mb-3 font-mono">
                {profile.email}
              </p>
              <button
                onClick={handleCopyEmail}
                className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-xs font-semibold bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-white/10 transition-all"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-300">{isAr ? "تم نسخ الإيميل!" : "Copied to Clipboard!"}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{isAr ? "نسخ عنوان الإيميل" : "Copy Email"}</span>
                  </>
                )}
              </button>
            </div>

            {/* CV Direct Download Card */}
            <div className="p-4 rounded-2xl bg-[#14141a] border border-[#d4af37]/30 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#d4af37]/15 flex items-center justify-center text-[#fef08a]">
                  <FileDown className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Muhammed Mahmoud CV</div>
                  <div className="text-[11px] text-[#fef08a]/80">{isAr ? "نسخة PDF مفصلة ومحدثة" : "Updated Detailed PDF"}</div>
                </div>
              </div>
              <a
                href={profile.cvUrl}
                download="Muhammed-Mahmoud-CV.pdf"
                className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#e5c158] hover:from-[#c9a227] hover:to-[#dbb530] text-[#09090b] text-xs font-bold shadow-md transition-all shrink-0"
              >
                {isAr ? "تحميل" : "Download"}
              </a>
            </div>

          </div>

          {/* Right Column: Direct Message Box */}
          <div className="lg:col-span-7">
            <div className="noir-card rounded-2xl p-6 sm:p-8 border border-white/[0.08]">
              <h3 className="text-lg font-bold text-white mb-2">
                {isAr ? "أرسل تفاصيل مشروعك مباشرة" : "Send Project Details"}
              </h3>
              <p className="text-xs text-zinc-400 mb-6">
                {isAr
                  ? "سأقوم بالرد عليك خلال ساعات لمناقشة كافة التفاصيل الفنية والجدول الزمني."
                  : "I typically respond within hours with a technical feasibility assessment and timeline."}
              </p>

              {formSent ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center animate-in fade-in">
                  <Check className="w-10 h-10 text-emerald-400 mx-auto mb-2" />
                  <h4 className="text-sm font-bold text-white mb-1">
                    {isAr ? "تم استلام رسالتك بنجاح!" : "Message Sent Successfully!"}
                  </h4>
                  <p className="text-xs text-zinc-300">
                    {isAr ? "شكراً لتواصلك، سأقوم بالرد عليك سريعاً." : "Thank you for reaching out. I'll get back to you shortly."}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      {isAr ? "الاسم الكامل / اسم الشركة" : "Your Name / Organization"}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={isAr ? "مثال: م. أحمد أو اسم الشركة" : "e.g., Alex Johnson, Founder"}
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-900/90 border border-white/10 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-[#d4af37] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      {isAr ? "البريد الإلكتروني أو رقم الهاتف" : "Your Email or Phone"}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={isAr ? "name@company.com أو 01xxxxxxxxx" : "name@company.com or phone number"}
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-900/90 border border-white/10 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-[#d4af37] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      {isAr ? "فكرة المشروع أو المنظومة المطلوبة" : "Project Summary & Scope"}
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder={isAr ? "اشرح فكرة تطبيقك، المنصات المطلوبة (موبايل / ديسكتوب)، والوقت المستهدف للإطلاق..." : "Describe your app scope, target platforms (iOS, Android, Windows, Mac), and target launch date..."}
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-900/90 border border-white/10 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-[#d4af37] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-sm text-[#09090b] bg-gradient-to-r from-[#d4af37] to-[#e5c158] hover:from-[#c9a227] hover:to-[#dbb530] shadow-xl shadow-[#d4af37]/20 transition-all hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isAr ? "إرسال التفاصيل الآن" : "Send Project Details"}</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
