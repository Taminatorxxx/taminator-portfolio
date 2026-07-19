"use client";

import { motion } from "framer-motion";
import { Clapperboard, Globe2, Handshake, TrendingUp } from "lucide-react";
import { skillCategories } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = {
  handshake: Handshake,
  trending: TrendingUp,
  video: Clapperboard,
  globe: Globe2,
  bot: TrendingUp,
};

export function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="What I bring to the table."
          description="Business development, strategy, video content, and brand promotion — the stack I use to grow brands."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {skillCategories.map((cat, i) => {
            const Icon = icons[cat.icon] ?? Handshake;
            return (
              <motion.article
                key={cat.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="glass glass-hover group rounded-2xl p-5 sm:rounded-3xl sm:p-6 md:p-7"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/25 to-accent-2/15 text-accent-2 transition group-hover:scale-105">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {cat.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5 text-xs text-muted transition group-hover:border-accent/25 group-hover:text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
