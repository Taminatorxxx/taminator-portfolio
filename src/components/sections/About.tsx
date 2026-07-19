"use client";

import { motion } from "framer-motion";
import { Clapperboard, Compass, Target } from "lucide-react";
import { profile, stats } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/effects/AnimatedCounter";

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About Me"
          title="BD & strategy, with video that promotes."
          description="Partnership-first thinking. Content that earns attention. Brands that get remembered."
        />

        <div className="grid gap-4 sm:gap-5 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="glass glass-hover rounded-2xl p-5 sm:rounded-3xl sm:p-7 lg:col-span-7"
          >
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              {profile.about}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-5">
                <Target className="mb-3 h-5 w-5 text-accent" />
                <p className="text-xs uppercase tracking-[0.16em] text-muted-2">
                  Focus
                </p>
                <p className="mt-2 text-sm leading-relaxed text-foreground/90">
                  Business development, growth strategy, and video content for
                  brand promotion — from first outreach to public storytelling.
                </p>
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-5">
                <Clapperboard className="mb-3 h-5 w-5 text-accent-2" />
                <p className="text-xs uppercase tracking-[0.16em] text-muted-2">
                  Video content
                </p>
                <p className="mt-2 text-sm leading-relaxed text-foreground/90">
                  Short-form and campaign video that introduces products, builds
                  trust, and pushes brands into the rooms that matter.
                </p>
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-5 sm:col-span-2">
                <Compass className="mb-3 h-5 w-5 text-accent" />
                <p className="text-xs uppercase tracking-[0.16em] text-muted-2">
                  Mission
                </p>
                <p className="mt-2 text-sm leading-relaxed text-foreground/90">
                  {profile.mission}
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="glass glass-hover flex items-center justify-between rounded-3xl px-6 py-5"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-2">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                    {stat.display ? (
                      <span className="text-gradient-accent text-xl sm:text-2xl">
                        {stat.display}
                      </span>
                    ) : (
                      <AnimatedCounter
                        value={stat.value}
                        suffix={stat.suffix}
                      />
                    )}
                  </p>
                </div>
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-accent/20 to-accent-2/10" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
