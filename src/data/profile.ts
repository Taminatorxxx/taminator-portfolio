export const profile = {
  name: "Taminator",
  fullName: "Tanimu Muktar",
  role: "Business Developer · Strategist · Content Creator",
  headline: "Business development, strategy & video that move brands forward.",
  subheadline:
    "I help founders and brands grow through partnership strategy, clear positioning, and video content that builds trust and attention.",
  bio: "Taminator is a Business Development and Growth Strategist with a focus on video content and brand promotion. He builds partnerships, designs growth strategy, and creates content that helps ideas and brands reach the right people.",
  about:
    "Hi, I'm Taminator — a Business Development and Growth Strategist focused on video content and brand growth. I design partnership pipelines, craft GTM and positioning strategy, and produce video that promotes brands with clarity and impact. My work sits at the intersection of deal-making, storytelling, and distribution.",
  mission:
    "To help founders, builders, and brands grow through sharp strategy, strong partnerships, and video content that documents the journey and earns attention.",
  location: "Northern Nigeria",
  availability: "Open to work · Freelance · Full-time · Consulting",
  email: "Taminatorweb3@gmail.com",
  yearsExperience: 2,
  projectsCompleted: 50,
  clientsLabel: "Open to work",
  footerTagline: "Building the future",
  avatar: "/avatar.jpg",
  socials: {
    github: "https://github.com/Taminator",
    linkedin: "https://www.linkedin.com/in/tanimu-muktar-2b486727a",
    twitter: "https://x.com/Taminatorxx",
    email: "mailto:Taminatorweb3@gmail.com",
    discord: "TaminatorXx",
    telegram: "https://t.me/Memeishx",
  },
} as const;

export type StatItem = {
  label: string;
  value: number;
  suffix: string;
  display?: string;
};

export const stats: StatItem[] = [
  { label: "Years of Experience", value: 2, suffix: "+" },
  { label: "Focus", value: 3, suffix: "", display: "BD · Strategy · Video" },
  { label: "Content", value: 1, suffix: "", display: "Video-first" },
  { label: "Availability", value: 100, suffix: "%", display: "Open" },
];

export const skillCategories = [
  {
    id: "bd",
    title: "Business Development",
    icon: "handshake" as const,
    skills: [
      "Partnership Strategy",
      "Lead Generation",
      "Ecosystem Growth",
      "Strategic Outreach",
      "GTM Strategy",
      "Relationship Management",
    ],
  },
  {
    id: "growth",
    title: "Growth & Strategy",
    icon: "trending" as const,
    skills: [
      "Growth Strategy",
      "Market Research",
      "Competitive Analysis",
      "Product Positioning",
      "Community Growth",
      "Campaign Planning",
    ],
  },
  {
    id: "video",
    title: "Video Content",
    icon: "video" as const,
    skills: [
      "Short-form Video",
      "Brand Storytelling",
      "Product Walkthroughs",
      "Hooks & Narrative",
      "Content Systems",
      "Distribution",
    ],
  },
  {
    id: "brand",
    title: "Brand Promotion",
    icon: "globe" as const,
    skills: [
      "Brand Narrative",
      "Social Promotion",
      "Creator Amplification",
      "Public Proof of Work",
      "Campaign Execution",
      "Audience Growth",
    ],
  },
] as const;

export const services = [
  {
    id: "business-development",
    number: "01",
    title: "Business Development",
    description:
      "I help startups and brands build strategic partnerships, identify growth opportunities, create outreach systems, and expand their network through focused business development.",
  },
  {
    id: "growth-strategy",
    number: "02",
    title: "Growth Strategy",
    description:
      "I research markets and competitors, clarify positioning, and build practical growth strategies that improve adoption, retention, and long-term brand success.",
  },
  {
    id: "video-content",
    number: "03",
    title: "Video Content",
    description:
      "I create video content that introduces products, tells brand stories, and drives attention — built for social platforms, campaigns, and founder-led distribution.",
  },
  {
    id: "brand-promotion",
    number: "04",
    title: "Brand Promotion",
    description:
      "I promote brands through clear messaging, content drops, and distribution so the right audience sees the work — and remembers it.",
  },
] as const;

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#videos", label: "Videos" },
  { href: "/blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
] as const;
