import type { GlossaryTerm } from "@/lib/content";

type GlossaryListProps = {
  terms: GlossaryTerm[];
};

export function GlossaryList({ terms }: GlossaryListProps) {
  return (
    <dl className="grid gap-6 md:grid-cols-2">
      {terms.map((term) => (
        <div
          key={term.term}
          className="rounded-3xl border border-slate-800/60 bg-slate-900/60 p-6 shadow-inner"
        >
          <dt className="font-display text-lg text-white">{term.term}</dt>
          <dd className="mt-2 text-sm text-slate-300/90">{term.definition}</dd>
        </div>
      ))}
    </dl>
  );
}
