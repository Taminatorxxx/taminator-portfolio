VIDEO FOLDER — auto gallery
===========================

1) Paste any video here:
   .mp4  .webm  .mov  .m4v

2) It will show on the website automatically
   (home page → Videos section). Tap "Refresh" if needed.

3) OPTIONAL WRITE-UP (same name as the video):

   Example video:  brand-intro.mp4

   Option A — JSON (best):
     brand-intro.json
     {
       "title": "Brand intro",
       "description": "Short walkthrough of the brand story and offer.",
       "tags": ["Brand", "Intro"],
       "date": "2026-07-19"
     }

   Option B — plain text:
     brand-intro.txt
     (whatever you write becomes the description)

   Option C — shared map for all videos:
     _meta.json
     {
       "brand-intro.mp4": {
         "title": "Brand intro",
         "description": "..."
       }
     }

4) OPTIONAL thumbnail:
   brand-intro.jpg  (or .png / .webp)

If you only paste the video, the site uses the file name as the title
and a short default description until you add a write-up file.
