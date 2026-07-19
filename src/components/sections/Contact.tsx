"use client";

import { motion } from "framer-motion";
import { Copy, Mail, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="relative scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.01] p-5 sm:rounded-[2rem] sm:p-8 md:p-12"
        >
          <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-accent/25 blur-3xl" />
          <div className="pointer-events-none absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-accent-2/20 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <SectionHeading
                eyebrow="Contact"
                title="Let's grow your brand together."
                description="Open to freelance, full-time, and consulting. Reach out for business development, growth strategy, video content, or brand promotion."
                className="mb-0"
              />
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={`mailto:${profile.email}`}>
                  <Mail className="h-4 w-4" />
                  Email me
                </Button>
                <Button href={profile.socials.telegram} variant="secondary" external>
                  <Send className="h-4 w-4" />
                  Telegram
                </Button>
                <Button href={profile.socials.twitter} variant="secondary" external>
                  <MessageCircle className="h-4 w-4" />
                  Message on X
                </Button>
              </div>
            </div>

            <div className="glass rounded-3xl p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-muted-2">
                Direct email
              </p>
              <p className="mt-3 break-all text-lg font-medium">
                {profile.email}
              </p>
              <button
                type="button"
                onClick={copyEmail}
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-muted transition hover:border-accent/40 hover:text-foreground"
              >
                <Copy className="h-3.5 w-3.5" />
                {copied ? "Copied" : "Copy email"}
              </button>
              <div className="mt-6 space-y-2 border-t border-white/8 pt-5 text-sm text-muted">
                <p>
                  <span className="text-muted-2">Discord:</span>{" "}
                  {profile.socials.discord}
                </p>
                <p>
                  <span className="text-muted-2">Telegram:</span> @Memeishx
                </p>
                <p>
                  <span className="text-muted-2">Location:</span>{" "}
                  {profile.location}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
