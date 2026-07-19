import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { blogPosts, getPostById } from "@/data/blog";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ id: post.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const post = getPostById(id);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { id } = await params;
  const post = getPostById(id);
  if (!post) notFound();

  const date = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="relative px-5 pb-24 pt-28 sm:px-8 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="aurora-blob aurora-blob-b opacity-25" />
      </div>

      <div className="mx-auto max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to blog
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-accent-2">
            {post.type === "tweet" ? "X / Tweet" : "Article"}
          </span>
          <time className="text-sm text-muted-2" dateTime={post.date}>
            {date}
          </time>
        </div>

        <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">{post.excerpt}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1 text-xs text-muted"
            >
              #{tag}
            </span>
          ))}
        </div>

        {post.tweetUrl ? (
          <div className="glass mt-10 rounded-3xl p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.18em] text-muted-2">
              Linked X post
            </p>
            <p className="mt-3 break-all text-sm text-accent-2">{post.tweetUrl}</p>
            <a
              href={post.tweetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#7c6df7]"
            >
              Open on X
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        ) : null}

        {post.body ? (
          <div className="prose-invert mt-10 space-y-5 border-t border-white/8 pt-10">
            {post.body.split("\n\n").map((para) => (
              <p key={para.slice(0, 24)} className="text-base leading-relaxed text-muted sm:text-lg">
                {para}
              </p>
            ))}
          </div>
        ) : null}

        {!post.body && !post.tweetUrl ? (
          <p className="mt-10 text-muted">
            This post has no body yet. Add content or a tweetUrl in blog.ts.
          </p>
        ) : null}
      </div>
    </article>
  );
}
