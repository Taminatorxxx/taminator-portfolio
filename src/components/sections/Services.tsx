"use client";

import { motion } from "framer-motion";
import { services } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Services"
          title="How we can work together."
          description="Flexible engagement for startups, brands, and founders who need strategy and video that ships."
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {services.map((service, i) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass glass-hover group relative overflow-hidden rounded-2xl p-5 sm:rounded-3xl sm:p-7"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 transition group-hover:opacity-100" />
              <p className="font-mono text-sm text-accent-2">{service.number}</p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-[15px]">
                {service.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
