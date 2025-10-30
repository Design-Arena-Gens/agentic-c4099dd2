import type { Resource } from "@/lib/content";
type ResourceCardProps = {
  resource: Resource;
};

const typeAccent: Record<Resource["type"], string> = {
  Course: "bg-emerald-400/20 text-emerald-100 border-emerald-300/40",
  Research: "bg-sky-400/20 text-sky-100 border-sky-300/40",
  Podcast: "bg-purple-400/20 text-purple-100 border-purple-300/40",
  Toolkit: "bg-amber-400/20 text-amber-100 border-amber-300/40",
  Community: "bg-rose-400/20 text-rose-100 border-rose-300/40"
};

export function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <article className="glass-panel flex h-full flex-col justify-between p-6">
      <div className="space-y-4">
        <span
          className={`inline-flex w-fit items-center gap-2 rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-wide ${typeAccent[resource.type]}`}
        >
          {resource.type}
        </span>
        <div>
          <h3 className="font-display text-xl text-white">{resource.title}</h3>
          <p className="mt-2 text-sm text-slate-300/90">{resource.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {resource.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-700/60 bg-slate-900/60 px-3 py-1 text-xs uppercase tracking-wide text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <a
        href={resource.url}
        target="_blank"
        rel="noreferrer"
        className="mt-4 text-sm font-semibold text-quantum-200 transition-transform hover:translate-x-1"
      >
        View resource ↗
      </a>
    </article>
  );
}
