import type { ReactNode } from "react";

type SectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function Section({ eyebrow, title, description, children }: SectionProps) {
  return (
    <section className="relative my-16 scroll-mt-16 md:my-24">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="font-mono text-sm uppercase tracking-[0.3em] text-quantum-300/80">
            {eyebrow}
          </span>
          <h2 className="section-heading mt-3">{title}</h2>
          <p className="section-subheading">{description}</p>
        </div>
        <div className="h-px w-24 bg-gradient-to-r from-quantum-500/70 to-transparent md:h-24 md:w-px" />
      </div>
      {children}
    </section>
  );
}
