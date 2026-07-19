import { NextResponse } from "next/server";
import { scanVideosFolder } from "@/lib/scan-videos";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  try {
    const videos = scanVideosFolder();
    return NextResponse.json(
      { videos, count: videos.length },
      {
        headers: {
          "Cache-Control": "no-store, max-age=0",
        },
      },
    );
  } catch (error) {
    console.error("Failed to scan videos folder", error);
    return NextResponse.json(
      { videos: [], count: 0, error: "Failed to scan videos folder" },
      { status: 500 },
    );
  }
}
