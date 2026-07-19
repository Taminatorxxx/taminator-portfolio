"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "mb-8 max-w-2xl sm:mb-10 md:mb-12",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.22em] text-accent-2 sm:mb-3 sm:text-xs">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-sm leading-relaxed text-muted sm:mt-4 sm:text-base md:text-lg">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
