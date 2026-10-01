import { ExternalLink, Eye, ChevronRight, ChevronLeft, Check } from 'lucide-react';

export default function ProjectCard({ project, lang, onSelectProject }) {
  const isAr = lang === 'ar';
  const ChevronIcon = isAr ? ChevronLeft : ChevronRight;

  const isStoreApp = !!project.liveLink;

  return (
    <div className="noir-card rounded-2xl overflow-hidden flex flex-col h-full border border-white/[0.08] group hover:border-[#d4af37]/40 transition-all duration-300">
      
      {/* Thumbnail Banner */}
      <div 
        onClick={() => onSelectProject(project)}
        className="relative h-64 sm:h-72 bg-[#0c0c10] overflow-hidden cursor-pointer group/thumb"
      >
        <img
          src={project.thumbnail}
          alt={isAr ? project.titleAr : project.titleEn}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/thumb:scale-105 opacity-90 group-hover/thumb:opacity-100"
          loading="lazy"
        />

        {/* Dark subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111115] via-transparent to-black/40 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
          <span className="px-3 py-1 rounded-full text-[11px] font-bold backdrop-blur-md bg-[#09090b]/80 border border-white/10 text-white shadow-lg">
            {isAr ? project.clientAr : project.clientEn}
          </span>
        </div>

        {/* Hover prompt */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/thumb:opacity-100 transition-opacity bg-black/50 backdrop-blur-[2px]">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#d4af37] text-[#09090b] font-bold text-xs shadow-xl scale-95 group-hover/thumb:scale-100 transition-transform">
            <Eye className="w-4 h-4" />
            <span>
              {isAr 
                ? `استعراض دراسة الحالة (${project.images.length} شاشة)` 
                : `View Case Study (${project.images.length} Screens)`}
            </span>
          </span>
        </div>

        {/* Bottom screen count pill */}
        <div className="absolute bottom-3 right-3 rtl:right-auto rtl:left-3 pointer-events-none">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-black/80 text-zinc-300 backdrop-blur-md border border-white/10">
            {project.images.length} {isAr ? "شاشة" : "Screens"}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        
        <div>
          {/* Title & Tagline */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-white group-hover:text-[#fef08a] transition-colors leading-tight">
              {isAr ? project.titleAr : project.titleEn}
            </h3>
            <p className="text-xs sm:text-sm font-medium text-[#d4af37]/90 mt-1">
              {isAr ? project.taglineAr : project.taglineEn}
            </p>
          </div>

          {/* Highlights */}
          <ul className="space-y-2 mb-6 text-xs text-zinc-300">
            {(isAr ? project.highlightPointsAr : project.highlightPointsEn).slice(0, 3).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-1.5 shrink-0" />
                <span className="line-clamp-2 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.techStack.slice(0, 5).map((tech, idx) => (
              <span 
                key={idx}
                className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-zinc-900 text-zinc-300 border border-white/[0.06] group-hover:border-[#d4af37]/20 transition-colors"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 5 && (
              <span className="px-2 py-1 rounded-md text-[11px] font-medium bg-zinc-900/60 text-zinc-400">
                +{project.techStack.length - 5}
              </span>
            )}
          </div>

          {/* Action Row */}
          <div className="flex items-center gap-2.5 pt-4 border-t border-white/[0.06]">
            <button
              onClick={() => onSelectProject(project)}
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-zinc-900 hover:bg-[#d4af37] hover:text-[#09090b] border border-white/10 hover:border-[#d4af37] transition-all"
            >
              <span>{isAr ? "دراسة الحالة والمعرض" : "Case Study & Screens"}</span>
              <ChevronIcon className="w-4 h-4" />
            </button>

            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-all shrink-0"
                title={isAr ? "رابط المتجر الرسمي المباشر" : "Direct Live Store Link"}
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{project.storePlatform}</span>
              </a>
            )}
          </div>
        </div>

      </div>

    </div>
  );
}
