import type { QuantumModule } from "@/lib/content";

type ModuleCardProps = {
  module: QuantumModule;
  index: number;
};

const levelColors: Record<QuantumModule["level"], string> = {
  Foundation: "from-emerald-400/40 to-emerald-500/10",
  Explorer: "from-sky-400/40 to-sky-500/10",
  Builder: "from-violet-400/40 to-violet-500/10"
};

export function ModuleCard({ module, index }: ModuleCardProps) {
  return (
    <article className="interactive-card group relative overflow-hidden rounded-3xl border border-white/5 bg-slate-900/50 p-7 shadow-xl transition-transform duration-500 hover:-translate-y-1 focus-visible:-translate-y-1">
      <div className="accent-ring" />
      <div
        className={`absolute -right-24 top-1/2 h-48 w-48 -translate-y-1/2 rotate-45 rounded-[4rem] bg-gradient-to-br ${levelColors[module.level]} blur-3xl opacity-70 transition-opacity group-hover:opacity-100`}
      />
      <div className="relative z-10 flex items-center gap-3 text-sm text-quantum-200/90">
        <span className="rounded-full border border-quantum-200/40 px-3 py-1 font-mono tracking-wide">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span>{module.level}</span>
        <span className="text-slate-500">•</span>
        <span>{module.duration}</span>
      </div>
      <h3 className="relative z-10 mt-5 font-display text-2xl text-white">{module.title}</h3>
      <p className="relative z-10 mt-3 text-sm text-slate-300/90 md:text-base">
        {module.description}
      </p>
      <dl className="relative z-10 mt-6 flex flex-wrap gap-3 text-sm text-slate-200/90">
        <div className="flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-800/60 px-3 py-1">
          <span className="h-2 w-2 rounded-full bg-quantum-400" />
          <dt className="sr-only">Focus</dt>
          <dd>{module.focus}</dd>
        </div>
        {module.skills.map((skill) => (
          <div
            key={skill}
            className="rounded-full border border-slate-700/60 bg-slate-900/70 px-3 py-1 text-xs uppercase tracking-wide text-slate-300"
          >
            {skill}
          </div>
        ))}
      </dl>
    </article>
  );
}
