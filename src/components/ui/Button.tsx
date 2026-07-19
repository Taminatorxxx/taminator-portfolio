import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  external,
}: Props) {
  const base =
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black active:scale-[0.98]";

  const variants = {
    primary:
      "bg-accent text-white shadow-[0_0_30px_rgba(109,93,246,0.35)] hover:bg-[#7c6df7] hover:shadow-[0_0_40px_rgba(109,93,246,0.5)] hover:-translate-y-0.5",
    secondary:
      "glass glass-hover text-foreground hover:text-white hover:-translate-y-0.5",
    ghost:
      "text-muted hover:text-foreground hover:bg-white/5",
  };

  const classes = cn(base, variants[variant], className);

  if (external || href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
