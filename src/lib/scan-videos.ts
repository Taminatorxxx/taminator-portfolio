import fs from "fs";
import path from "path";

const VIDEO_EXTS = new Set([".mp4", ".webm", ".mov", ".m4v", ".ogg"]);
const VIDEOS_DIR = path.join(process.cwd(), "public", "videos");

export type ScannedVideo = {
  id: string;
  filename: string;
  src: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
  poster?: string;
  hasCustomWriteup: boolean;
};

type MetaEntry = {
  title?: string;
  description?: string;
  tags?: string[];
  date?: string;
  poster?: string;
};

function titleFromFilename(filename: string): string {
  const base = filename.replace(/\.[^.]+$/, "");
  return base
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase()) || "Untitled Video";
}

function readJsonSafe(filePath: string): MetaEntry | null {
  try {
    if (!fs.existsSync(filePath)) return null;
    const raw = fs.readFileSync(filePath, "utf8");
    return JSON.parse(raw) as MetaEntry;
  } catch {
    return null;
  }
}

function readTextSafe(filePath: string): string | null {
  try {
    if (!fs.existsSync(filePath)) return null;
    return fs.readFileSync(filePath, "utf8").trim() || null;
  } catch {
    return null;
  }
}

function loadSharedMeta(): Record<string, MetaEntry> {
  const shared = readJsonSafe(path.join(VIDEOS_DIR, "_meta.json"));
  if (!shared || typeof shared !== "object") return {};
  // _meta.json can be either a map of filename -> meta, or empty
  return shared as Record<string, MetaEntry>;
}

/**
 * Scans public/videos and returns every video file.
 * Optional write-ups (same name as video):
 *   brand-intro.mp4  + brand-intro.json  (title, description, tags, date)
 *   brand-intro.mp4  + brand-intro.txt   (description only)
 * Or one shared map:
 *   _meta.json  { "brand-intro.mp4": { "title": "...", "description": "..." } }
 */
export function scanVideosFolder(): ScannedVideo[] {
  if (!fs.existsSync(VIDEOS_DIR)) {
    fs.mkdirSync(VIDEOS_DIR, { recursive: true });
    return [];
  }

  const sharedMeta = loadSharedMeta();
  const entries = fs.readdirSync(VIDEOS_DIR, { withFileTypes: true });

  const videos: ScannedVideo[] = [];

  for (const entry of entries) {
    if (!entry.isFile()) continue;

    const filename = entry.name;
    const ext = path.extname(filename).toLowerCase();
    if (!VIDEO_EXTS.has(ext)) continue;

    // Skip macOS junk / hidden
    if (filename.startsWith(".")) continue;

    const fullPath = path.join(VIDEOS_DIR, filename);
    const base = filename.slice(0, -ext.length);
    const stat = fs.statSync(fullPath);

    const sidecarJson = readJsonSafe(path.join(VIDEOS_DIR, `${base}.json`));
    const sidecarTxt = readTextSafe(path.join(VIDEOS_DIR, `${base}.txt`));
    const fromShared = sharedMeta[filename] ?? sharedMeta[base] ?? null;

    const meta: MetaEntry = {
      ...fromShared,
      ...sidecarJson,
    };

    if (sidecarTxt && !meta.description) {
      meta.description = sidecarTxt;
    }

    // Optional poster: same name .jpg/.png/.webp
    let poster: string | undefined = meta.poster;
    if (!poster) {
      for (const pExt of [".jpg", ".jpeg", ".png", ".webp"]) {
        const pName = `${base}${pExt}`;
        if (fs.existsSync(path.join(VIDEOS_DIR, pName))) {
          poster = `/videos/${pName}`;
          break;
        }
      }
    }

    const hasCustomWriteup = Boolean(
      sidecarJson || sidecarTxt || fromShared || meta.title || meta.description,
    );

    videos.push({
      id: base.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      filename,
      src: `/videos/${filename.split("/").map(encodeURIComponent).join("/")}`,
      title: meta.title?.trim() || titleFromFilename(filename),
      description:
        meta.description?.trim() ||
        "Video content by Taminator. Add a matching .json or .txt file for a custom write-up.",
      tags: Array.isArray(meta.tags) && meta.tags.length > 0 ? meta.tags : ["Video"],
      date: meta.date || stat.mtime.toISOString().slice(0, 10),
      poster,
      hasCustomWriteup,
    });
  }

  return videos.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}
