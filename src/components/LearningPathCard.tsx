import { ArrowRightIcon } from "@heroicons/react/24/outline";
import type { LearningPath } from "@/lib/content";

type LearningPathCardProps = {
  path: LearningPath;
  tint: string;
};

export function LearningPathCard({ path, tint }: LearningPathCardProps) {
  return (
    <article className="interactive-card group relative flex flex-col justify-between gap-6 overflow-hidden rounded-3xl border border-white/5 bg-slate-950/60 p-8 shadow-2xl">
      <div className="accent-ring" />
      <div className={`absolute -left-16 top-0 h-48 w-48 rounded-full blur-3xl ${tint}`} />
      <div className="relative z-10 space-y-4">
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/70 px-4 py-1 text-sm text-slate-300">
          <span className="h-2 w-2 rounded-full bg-quantum-400" />
          {path.commitment}
        </span>
        <h3 className="font-display text-2xl text-white md:text-3xl">{path.title}</h3>
        <p className="text-sm text-slate-300/90 md:text-base">{path.summary}</p>
        <div>
          <h4 className="font-semibold text-slate-100">Key Outcomes</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            {path.outcomes.map((outcome) => (
              <li key={outcome} className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-quantum-300" />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-sm text-slate-400">
          <span className="font-semibold text-slate-200">Ideal for:</span> {path.audience}
        </p>
      </div>
      <a
        href={`#${path.id}`}
        className="relative z-10 flex items-center gap-2 text-sm font-semibold text-quantum-200 transition-transform hover:translate-x-1"
      >
        Explore module flow
        <ArrowRightIcon className="h-4 w-4" />
      </a>
    </article>
  );
}
