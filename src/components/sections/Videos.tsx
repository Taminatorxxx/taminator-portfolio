"use client";

import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Film, RefreshCw, Upload } from "lucide-react";
import type { ScannedVideo } from "@/lib/scan-videos";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export function Videos() {
  const [items, setItems] = useState<ScannedVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const load = useCallback(async (isRefresh = false) => {
    if (isRefresh) setRefreshing(true);
    else setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/videos", { cache: "no-store" });
      if (!res.ok) throw new Error("Could not load videos");
      const data = (await res.json()) as { videos: ScannedVideo[] };
      setItems(data.videos ?? []);
    } catch {
      setError("Could not load videos. Refresh and try again.");
      setItems([]);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    void load();
    // Auto-refresh while on the page so newly pasted files show up
    const id = window.setInterval(() => void load(true), 8000);
    return () => window.clearInterval(id);
  }, [load]);

  return (
    <section id="videos" className="relative scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Video Content"
          title="Watch the work."
          description="Drop a video into the videos folder — it appears here automatically. Optional write-ups live next to each file."
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass mb-6 rounded-2xl p-4 sm:mb-8 sm:rounded-3xl sm:p-6"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-accent/20 text-accent-2">
                <Upload className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="font-medium">Auto video folder</p>
                <ol className="mt-2 list-decimal space-y-1.5 pl-4 text-sm leading-relaxed text-muted">
                  <li>
                    Paste video into{" "}
                    <code className="break-all text-accent-2">
                      Desktop/portfolio/public/videos/
                    </code>
                  </li>
                  <li>
                    Supported:{" "}
                    <span className="text-foreground/80">.mp4 .webm .mov .m4v</span>
                  </li>
                  <li>
                    Optional write-up: same name as video —{" "}
                    <code className="text-foreground/80">name.json</code> or{" "}
                    <code className="text-foreground/80">name.txt</code>
                  </li>
                </ol>
              </div>
            </div>

            <button
              type="button"
              onClick={() => void load(true)}
              disabled={refreshing}
              className="inline-flex min-h-11 w-full shrink-0 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-muted transition hover:border-accent/40 hover:text-foreground disabled:opacity-60 sm:w-auto"
            >
              <RefreshCw className={cn("h-4 w-4", refreshing && "animate-spin")} />
              {refreshing ? "Scanning…" : "Refresh"}
            </button>
          </div>
        </motion.div>

        {loading ? (
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            {[0, 1].map((i) => (
              <div
                key={i}
                className="glass h-64 animate-pulse rounded-2xl sm:h-72 sm:rounded-3xl"
              />
            ))}
          </div>
        ) : error ? (
          <div className="glass rounded-2xl p-6 text-center text-sm text-muted sm:rounded-3xl">
            {error}
          </div>
        ) : items.length === 0 ? (
          <div className="glass flex min-h-[240px] flex-col items-center justify-center rounded-2xl border border-dashed border-white/15 p-8 text-center sm:min-h-[280px] sm:rounded-3xl sm:p-10">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-muted">
              <Film className="h-7 w-7" />
            </span>
            <p className="mt-5 text-base font-medium sm:text-lg">
              No videos in the folder yet
            </p>
            <p className="mt-2 max-w-md text-sm text-muted">
              Copy any{" "}
              <span className="text-accent-2">.mp4</span> into{" "}
              <span className="text-accent-2">public/videos</span>. It will show
              up here within a few seconds (or tap Refresh).
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            {items.map((video, i) => (
              <motion.article
                key={video.id + video.filename}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: Math.min(i * 0.05, 0.3) }}
                className="glass glass-hover group overflow-hidden rounded-2xl sm:rounded-3xl"
              >
                <div className="relative aspect-video bg-black/70">
                  <video
                    className="h-full w-full object-contain bg-black sm:object-cover"
                    controls
                    playsInline
                    preload="metadata"
                    poster={video.poster}
                    src={video.src}
                  >
                    <track kind="captions" />
                  </video>
                </div>

                <div className="p-4 sm:p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] uppercase tracking-[0.14em] text-accent-2">
                      Auto
                    </span>
                    {!video.hasCustomWriteup ? (
                      <span className="rounded-full border border-amber/20 bg-amber/10 px-2.5 py-0.5 text-[10px] uppercase tracking-[0.12em] text-amber">
                        Add write-up
                      </span>
                    ) : null}
                    <time className="text-xs text-muted-2" dateTime={video.date}>
                      {new Date(video.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                  </div>

                  <h3 className="mt-3 text-base font-semibold tracking-tight sm:text-lg">
                    {video.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {video.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {video.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/8 bg-black/20 px-2.5 py-1 text-[11px] text-muted"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <p className="mt-4 break-all font-mono text-[10px] text-muted-2">
                    {video.filename}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
