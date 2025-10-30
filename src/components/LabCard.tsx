import type { QuantumLab } from "@/lib/content";
type LabCardProps = {
  lab: QuantumLab;
};

export function LabCard({ lab }: LabCardProps) {
  return (
    <article className="glass-panel relative overflow-hidden p-6 transition-transform duration-300 hover:-translate-y-1">
      <div className="absolute -right-16 top-3 h-32 w-32 rounded-full bg-quantum-500/20 blur-2xl" />
      <div className="relative z-10 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-xl text-white">{lab.title}</h3>
          <span className="rounded-full border border-quantum-300/30 bg-quantum-300/10 px-3 py-1 text-xs uppercase tracking-wide text-quantum-100">
            {lab.provider}
          </span>
        </div>
        <p className="text-sm text-slate-300/90">{lab.focus}</p>
        <p className="text-xs text-slate-400">Access: {lab.access}</p>
        <a
          href={lab.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-quantum-200"
        >
          Launch Lab ↗
        </a>
      </div>
    </article>
  );
}
