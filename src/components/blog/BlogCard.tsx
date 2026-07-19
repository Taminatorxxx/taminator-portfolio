import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { BlogPost } from "@/data/blog";
import { cn } from "@/lib/utils";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function BlogCard({
  post,
  featured,
}: {
  post: BlogPost;
  featured?: boolean;
}) {
  const isTweet = post.type === "tweet" && post.tweetUrl;

  return (
    <article
      className={cn(
        "glass glass-hover group flex h-full flex-col justify-between rounded-3xl p-6 sm:p-7",
        featured && "md:col-span-2 md:flex-row md:items-end md:gap-10",
      )}
    >
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-accent-2">
            {post.type === "tweet" ? "X / Tweet" : "Article"}
          </span>
          <time className="text-xs text-muted-2" dateTime={post.date}>
            {formatDate(post.date)}
          </time>
        </div>

        <h3
          className={cn(
            "mt-4 font-semibold tracking-tight text-foreground",
            featured ? "text-2xl sm:text-3xl" : "text-xl",
          )}
        >
          {post.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{post.excerpt}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/8 bg-black/20 px-2.5 py-1 text-[11px] text-muted"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <div className={cn("mt-6 flex flex-wrap gap-3", featured && "md:mt-0")}>
        {isTweet ? (
          <a
            href={post.tweetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-xs font-medium text-white transition hover:bg-[#7c6df7]"
          >
            View on X
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        ) : null}
        <Link
          href={`/blog/${post.id}`}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-muted transition hover:border-accent/40 hover:text-foreground"
        >
          Open post
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </article>
  );
}
