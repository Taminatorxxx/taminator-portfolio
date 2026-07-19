import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Plus } from "lucide-react";
import { BlogCard } from "@/components/blog/BlogCard";
import { getSortedPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Strategy notes, research drops, and X threads from Taminator — AI, Web3, and growth systems.",
};

export default function BlogPage() {
  const posts = getSortedPosts();
  const [featured, ...rest] = posts;

  return (
    <div className="relative px-5 pb-24 pt-28 sm:px-8 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="aurora-blob aurora-blob-a opacity-30" />
        <div className="aurora-blob aurora-blob-b opacity-20" />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-accent-2">
            Blog
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            <span className="text-gradient">Proof of work in public.</span>
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Research notes, growth systems, and X updates. Add new posts by
            editing{" "}
            <code className="rounded bg-white/5 px-1.5 py-0.5 text-accent-2">
              src/data/blog.ts
            </code>{" "}
            — paste tweet URLs anytime.
          </p>
        </div>

        <div className="mb-8 glass flex flex-col gap-3 rounded-3xl p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-accent/20 text-accent-2">
              <Plus className="h-5 w-5" />
            </span>
            <div>
              <p className="font-medium">How to update this blog</p>
              <p className="mt-1 text-sm text-muted">
                Open <span className="text-foreground">src/data/blog.ts</span>,
                copy a post object, set{" "}
                <span className="text-accent-2">type: &quot;tweet&quot;</span>{" "}
                and paste your full X URL into{" "}
                <span className="text-accent-2">tweetUrl</span>.
              </p>
            </div>
          </div>
          <Link
            href="https://x.com/Taminatorxx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-muted transition hover:border-accent/40 hover:text-foreground"
          >
            <BookOpen className="h-4 w-4" />
            Follow on X
          </Link>
        </div>

        {posts.length === 0 ? (
          <p className="text-muted">No posts yet. Add your first entry in blog.ts.</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {featured ? (
              <div className="md:col-span-2">
                <BlogCard post={featured} featured />
              </div>
            ) : null}
            {rest.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
