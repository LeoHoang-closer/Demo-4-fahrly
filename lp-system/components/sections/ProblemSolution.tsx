"use client";

import { LPContent } from "../../types";

interface ProblemSolutionProps {
  content: LPContent["problemSolution"];
  accentColor: string;
}

export default function ProblemSolution({ content, accentColor }: ProblemSolutionProps) {
  return (
    <section className="py-24 px-12 border-t border-border">
      <div className="grid md:grid-cols-3 gap-4 mb-10">
        {content.pains.map((pain, i) => (
          <div key={i} className="rounded-xl border border-border bg-card p-6">
            <div className="text-xs font-semibold text-placeholder uppercase tracking-widest mb-3">
              Problem {i + 1}
            </div>
            <p className="text-sm text-subtle leading-relaxed">{pain}</p>
          </div>
        ))}
      </div>
      <p className="text-xl font-semibold max-w-2xl" style={{ color: accentColor }}>
        {content.solution}
      </p>
    </section>
  );
}
