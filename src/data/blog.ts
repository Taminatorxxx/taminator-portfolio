/**
 * BLOG — easy updates
 * --------------------
 * Add a new post by copying an object below.
 *
 * For X/Twitter posts:
 * - Set type: "tweet"
 * - Paste the full tweet URL in tweetUrl
 * - Optional: title, excerpt, tags
 *
 * For longer notes / articles:
 * - Set type: "article"
 * - Write body as plain text (paragraphs separated by \n\n)
 * - Optional tweetUrl if the post started as a thread
 */

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string; // YYYY-MM-DD
  tags: string[];
  type: "tweet" | "article";
  tweetUrl?: string;
  body?: string;
  featured?: boolean;
};

export const blogPosts: BlogPost[] = [
  {
    id: "welcome-portfolio",
    title: "Building in public: BD, strategy & video",
    excerpt:
      "Documenting the journey — partnerships, growth strategy, and video that promotes brands.",
    date: "2026-07-16",
    tags: ["Building in Public", "BD", "Video"],
    type: "article",
    featured: true,
    body: `I'm opening this blog as a living proof-of-work feed.

You'll find strategy notes, partnership thinking, and X threads on business development, growth, and video content.

To add a new entry: open src/data/blog.ts, paste a tweet URL (or write an article), save, and ship.`,
  },
  {
    id: "example-tweet-slot",
    title: "Latest thoughts on X",
    excerpt:
      "Replace this with your real X post URL in src/data/blog.ts — it will show as a featured tweet card.",
    date: "2026-07-10",
    tags: ["X", "Updates"],
    type: "tweet",
    tweetUrl: "https://x.com/Taminatorxx",
    featured: false,
  },
];

export function getPostById(id: string) {
  return blogPosts.find((p) => p.id === id);
}

export function getSortedPosts() {
  return [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}
