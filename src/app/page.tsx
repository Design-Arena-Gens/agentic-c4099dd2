import { Section } from "@/components/Section";
import { ModuleCard } from "@/components/ModuleCard";
import { LearningPathCard } from "@/components/LearningPathCard";
import { LabCard } from "@/components/LabCard";
import { ResourceCard } from "@/components/ResourceCard";
import { GlossaryList } from "@/components/GlossaryList";
import {
  calculateModuleProgress,
  curatedResources,
  getModulesByLevel,
  glossary,
  groupResourcesByType,
  learningPaths,
  quantumLabs
} from "@/lib/content";

const foundationModules = getModulesByLevel("Foundation");
const explorerModules = getModulesByLevel("Explorer");
const builderModules = getModulesByLevel("Builder");
const resourcesByType = groupResourcesByType(curatedResources);
const completionPercent = calculateModuleProgress([
  "quantum-basics",
  "linear-algebra",
  "gates-circuits"
]);

export default function HomePage() {
  return (
    <main className="flex flex-col gap-24">
      <section className="relative overflow-hidden rounded-[3rem] border border-white/5 bg-gradient-to-br from-slate-950/80 via-slate-950/40 to-slate-950/80 p-10 shadow-2xl md:p-16">
        <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-quantum-500/30 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="relative z-10 grid gap-10 md:grid-cols-[1.2fr,0.8fr] md:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-quantum-200/40 bg-quantum-200/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-quantum-100">
              Learn Quantum Computing
            </span>
            <h1 className="font-display text-4xl leading-tight text-white md:text-6xl">
              Build intuition for the quantum future.
            </h1>
            <p className="text-base text-slate-300 md:text-lg">
              Quantum Voyager is your curated roadmap through the concepts, tooling, and research shaping real quantum
              computing careers. Move from foundational intuition to hands-on algorithms with a structured, mentor-inspired
              learning experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#learning-paths"
                className="rounded-full bg-quantum-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-quantum-500/30 transition hover:bg-quantum-400"
              >
                Choose your learning path
              </a>
              <a
                href="#labs"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
              >
                Explore real quantum labs
              </a>
            </div>
          </div>
          <div className="glass-panel relative flex flex-col gap-5 p-6">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-transparent" />
            <div className="relative z-10">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Navigator Snapshot</p>
              <div className="mt-4 grid gap-4">
                <div className="rounded-2xl border border-slate-700/40 bg-slate-900/60 p-4">
                  <p className="text-sm text-slate-300">Beginner route completion readiness</p>
                  <p className="mt-2 font-display text-3xl text-white">{completionPercent.toFixed(0)}%</p>
                  <p className="text-xs text-slate-400">Complete the Foundation track to unlock research projects.</p>
                </div>
                <div className="rounded-2xl border border-slate-700/40 bg-slate-900/60 p-4">
                  <p className="text-sm text-slate-300">Curated practice environments</p>
                  <p className="mt-2 text-2xl font-semibold text-white">{quantumLabs.length}+ cloud labs</p>
                  <p className="text-xs text-slate-400">Hands-on experience with real superconducting & trapped-ion devices.</p>
                </div>
                <div className="rounded-2xl border border-slate-700/40 bg-slate-900/60 p-4">
                  <p className="text-sm text-slate-300">Research-grade resources</p>
                  <p className="mt-2 text-2xl font-semibold text-white">{Object.keys(resourcesByType).length} content streams</p>
                  <p className="text-xs text-slate-400">Stay aligned with the latest discoveries and tooling updates.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Foundation"
        title="Master the quantum intuition"
        description="Start with conceptual clarity. Each foundation module combines visual metaphors, interactive exercises, and guided labs to help you translate math into physical phenomena."
      >
        <div id="curious-beginner" className="grid gap-6 md:grid-cols-2">
          {foundationModules.map((module, index) => (
            <ModuleCard key={module.id} module={module} index={index} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Explorer"
        title="Build usable circuits and analyze performance"
        description="Progress into practical algorithms, circuit optimizations, and benchmarking practices that prepare you for collaborative research and hackathons."
      >
        <div id="research-explorer" className="grid gap-6 md:grid-cols-2">
          {explorerModules.map((module, index) => (
            <ModuleCard key={module.id} module={module} index={index + foundationModules.length} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Builder"
        title="Engineer resilient quantum systems"
        description="Design error-aware systems, explore hybrid workflows, and understand the architectural trade-offs behind the next generation of quantum processors."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {builderModules.map((module, index) => (
            <ModuleCard
              key={module.id}
              module={module}
              index={index + foundationModules.length + explorerModules.length}
            />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Roadmaps"
        title="Follow a curated learning path"
        description="Choose a guided progression designed for the career outcomes you want. Each pathway assembles modules, labs, and collaborations that reinforce each other."
      >
        <div id="learning-paths" className="grid gap-6 md:grid-cols-2">
          <LearningPathCard
            path={learningPaths[0]}
            tint="bg-gradient-to-r from-emerald-400/40 to-emerald-500/0"
          />
          <LearningPathCard
            path={learningPaths[1]}
            tint="bg-gradient-to-r from-violet-400/40 to-violet-500/0"
          />
        </div>
      </Section>

      <Section
        eyebrow="Studio"
        title="Experiment in real quantum labs"
        description="Blend theory with practice by deploying circuits to real hardware. These cloud environments support interactive notebooks, visualization tooling, and collaborative workspaces."
      >
        <div id="labs" className="grid gap-6 md:grid-cols-3">
          {quantumLabs.map((lab) => (
            <LabCard key={lab.id} lab={lab} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Library"
        title="Stay connected to the quantum community"
        description="Curated content streams ensure you stay ahead of the rapidly evolving quantum landscape, from rigorous courses to vibrant communities and conversational podcasts."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {Object.entries(resourcesByType).map(([type, group]) => (
            <div key={type} className="space-y-4">
              <h3 className="font-display text-lg text-slate-100">{type}</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {group.map((resource) => (
                  <ResourceCard key={resource.id} resource={resource} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Concepts"
        title="Quantum glossary"
        description="Use this quick reference while you learn. Each definition is phrased for both mathematical clarity and physical intuition."
      >
        <GlossaryList terms={glossary} />
      </Section>

      <section className="glass-panel relative overflow-hidden p-10 text-center md:p-16">
        <div className="absolute inset-0 bg-gradient-to-br from-quantum-500/10 via-transparent to-transparent" />
        <div className="relative z-10 mx-auto max-w-3xl space-y-6">
          <h2 className="font-display text-3xl text-white md:text-4xl">Ready to accelerate your quantum journey?</h2>
          <p className="text-base text-slate-300">
            Join our monthly cohort to receive guided mentorship, collaborative projects, and feedback from researchers
            working across academia and industry. Applications open the first Monday of every month.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://airtable.com/shrQuantumVoyager"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-quantum-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-quantum-500/30 transition hover:bg-quantum-400"
            >
              Apply to the cohort ↗
            </a>
            <a
              href="mailto:hello@quantumvoyager.dev"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
            >
              Ask a mentor
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
