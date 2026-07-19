"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownRight, MapPin, Play } from "lucide-react";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { Particles } from "@/components/effects/Particles";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden pt-24 sm:pt-28 md:pt-32"
    >
      <div className="aurora">
        <div className="aurora-blob aurora-blob-a" />
        <div className="aurora-blob aurora-blob-b" />
        <div className="aurora-blob aurora-blob-c" />
      </div>
      <div className="pointer-events-none absolute inset-0 grid-fade opacity-60" />
      <div className="hidden sm:block">
        <Particles />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 sm:gap-12 sm:px-6 sm:pb-20 md:px-8 md:pb-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <div className="min-w-0 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-left text-[11px] leading-snug text-muted backdrop-blur-md sm:mb-6 sm:text-xs"
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            <span className="min-w-0 break-words">{profile.availability}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-4xl font-semibold leading-[1.05] tracking-tight xs:text-5xl sm:text-6xl md:text-7xl"
          >
            <span className="text-gradient">{profile.name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-3 text-sm font-medium text-accent-2 sm:mt-4 sm:text-base md:text-lg"
          >
            {profile.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mx-auto mt-4 max-w-xl text-lg font-medium leading-snug tracking-tight text-foreground/90 sm:mt-5 sm:text-xl md:text-2xl lg:mx-0"
          >
            {profile.headline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted sm:mt-5 sm:text-base md:text-lg lg:mx-0"
          >
            {profile.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-7 flex w-full flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center lg:justify-start"
          >
            <Button href={`mailto:${profile.email}`} className="w-full sm:w-auto">
              Hire Me
            </Button>
            <Button href="#videos" variant="secondary" className="w-full sm:w-auto">
              <Play className="h-4 w-4" />
              View Videos
            </Button>
            <Button href="#services" variant="ghost" className="w-full sm:w-auto">
              What I offer
              <ArrowDownRight className="h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-2 sm:mt-8 lg:justify-start"
          >
            <MapPin className="h-4 w-4 shrink-0 text-accent" />
            {profile.location}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px] lg:max-w-none"
        >
          <div className="pointer-events-none absolute -inset-4 rounded-full bg-gradient-to-br from-accent/40 via-accent-2/20 to-transparent blur-2xl sm:-inset-6" />

          <div className="relative mx-auto aspect-square w-full">
            <motion.div
              aria-hidden
              className="absolute -inset-2 rounded-full sm:-inset-3"
              style={{
                background:
                  "conic-gradient(from 0deg, #6d5df6, #00d4ff, #6d5df6, #8b5cf6, #00d4ff, #6d5df6)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute -inset-0.5 rounded-full bg-black sm:-inset-1" />

            <div className="absolute inset-0 overflow-hidden rounded-full border border-white/20 shadow-[0_0_40px_rgba(109,93,246,0.4),0_0_80px_rgba(0,212,255,0.15)] sm:shadow-[0_0_60px_rgba(109,93,246,0.45),0_0_120px_rgba(0,212,255,0.2)]">
              <Image
                src={profile.avatar}
                alt={`${profile.name} — profile photo`}
                fill
                priority
                className="object-cover object-[center_18%] grayscale contrast-110"
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 380px"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="absolute -bottom-1 left-1/2 z-10 w-[92%] -translate-x-1/2 rounded-2xl border border-white/15 bg-black/75 px-3 py-2.5 text-center backdrop-blur-xl sm:-bottom-2 sm:w-[90%] sm:px-4 sm:py-3"
            >
              <p className="text-[10px] uppercase tracking-[0.2em] text-accent-2">
                Profile
              </p>
              <p className="mt-1 text-sm font-semibold">{profile.name}</p>
              <p className="mt-0.5 text-[11px] text-muted sm:text-xs">
                BD · Strategy · Video Content
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
