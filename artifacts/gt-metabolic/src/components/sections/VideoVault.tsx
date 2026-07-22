import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { ShieldCheck, Play } from "lucide-react"

// ─── Per-video configuration ──────────────────────────────────────────────────
// Each entry is its own independent video. Set type + videoId for YouTube/Vimeo,
// or type "mp4" + src for a hosted/local file.
//
//   type: "youtube"  → videoId: "11-char-id"
//   type: "vimeo"    → videoId: "numeric-id"
//   type: "mp4"      → src: "/videos/file.mp4"
//
// label    — title shown on the selector card
// duration — display string shown on the card (e.g. "14:22")
const VIDEOS: {
  type: "youtube" | "vimeo" | "mp4"
  videoId?: string
  src?: string
}[] = [
  { type: "youtube", videoId: "YOUR_YOUTUBE_ID_1" },
  { type: "youtube", videoId: "YOUR_YOUTUBE_ID_2" },
  { type: "youtube", videoId: "YOUR_YOUTUBE_ID_3" },
]

// ─── Build embed URL for a given video entry ──────────────────────────────────
function buildEmbedUrl(video: (typeof VIDEOS)[number]): string {
  if (video.type === "youtube" && video.videoId) {
    const p = new URLSearchParams({
      rel: "0",
      modestbranding: "1",
      color: "white",
    })
    return `https://www.youtube.com/embed/${video.videoId}?${p}`
  }
  if (video.type === "vimeo" && video.videoId) {
    const p = new URLSearchParams({
      title: "0",
      byline: "0",
      portrait: "0",
      color: "0a70f5",
    })
    return `https://player.vimeo.com/video/${video.videoId}?${p}`
  }
  return ""
}

// ─── Placeholder check — true when a video ID has not been replaced yet ───────
const PLACEHOLDER_PREFIX = "YOUTUBE_VIDEO_ID_"
function isPlaceholder(v: (typeof VIDEOS)[number]) {
  return (
    (v.type === "youtube" || v.type === "vimeo") &&
    (!v.videoId || v.videoId.startsWith(PLACEHOLDER_PREFIX))
  )
}
const anyPlaceholder = VIDEOS.some(isPlaceholder)

// ─── Main component ───────────────────────────────────────────────────────────
export function VideoVault() {
  const [isVerified, setIsVerified] = useState(false)
  const [checked, setChecked] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [iframeSrc, setIframeSrc] = useState(() => buildEmbedUrl(VIDEOS[0]))

  const videoRef = useRef<HTMLVideoElement>(null)

  const handleVideoSelect = (index: number) => {
    if (index === activeIndex) return
    setActiveIndex(index)
    const v = VIDEOS[index]
    if (v.type === "mp4") {
      // HTML5 video — src is applied directly on the <video> element
      if (videoRef.current) {
        videoRef.current.load()
        videoRef.current.play()
      }
    } else {
      setIframeSrc(buildEmbedUrl(v))
    }
  }

  const activeVideo = VIDEOS[activeIndex]

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section className="py-24 bg-slate-900 text-white" id="video-vault">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-3">
            Surgical Footage
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-5 tracking-tight">
            Technique Center
          </h3>
          <p className="text-slate-400 text-base leading-relaxed">
            Unedited OR footage demonstrating Magnetic Compression Anastomosis using the
            MAG system. Select a video below to begin.
          </p>
        </div>

        {/* Player + selector */}
        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">

            {/* ── Disclaimer gate ── */}
            {!isVerified && (
              <motion.div
                key="gate"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.25 }}
                className="flex justify-center"
              >
                <div className="w-full max-w-md bg-slate-800 border border-slate-700 rounded-2xl p-8 shadow-2xl text-center">
                  <div className="w-14 h-14 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-5">
                    <ShieldCheck className="w-7 h-7 text-blue-400" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Clinical Content Notice</h4>
                  <p className="text-slate-400 text-sm mb-7 leading-relaxed">
                    This section contains real surgical footage from live operating room
                    procedures. Please confirm your professional status to proceed.
                  </p>

                  <label
                    htmlFor="hcp-confirm"
                    className="flex items-start gap-3 text-left bg-slate-900/60 border border-slate-700/60 rounded-xl p-4 mb-6 cursor-pointer group"
                  >
                    <Checkbox
                      id="hcp-confirm"
                      checked={checked}
                      onCheckedChange={(v) => setChecked(v as boolean)}
                      className="mt-0.5 border-slate-500 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
                    />
                    <span className="text-sm text-slate-300 leading-snug group-hover:text-white transition-colors">
                      I confirm that I am a licensed healthcare professional and
                      consent to viewing surgical footage.
                    </span>
                  </label>

                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 font-semibold h-11"
                    disabled={!checked}
                    onClick={() => setIsVerified(true)}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Access Video Center
                  </Button>
                </div>
              </motion.div>
            )}

            {/* ── Video player ── */}
            {isVerified && (
              <motion.div
                key="player"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {/* 16:9 frame */}
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-700/60 bg-black">
                  <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>

                    {/* YouTube / Vimeo */}
                    {(activeVideo.type === "youtube" || activeVideo.type === "vimeo") && (
                      <iframe
                        key={iframeSrc}          /* remount on src change to load new video */
                        src={iframeSrc}
                        title={activeVideo.label}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full border-0"
                      />
                    )}

                    {/* Local MP4 */}
                    {activeVideo.type === "mp4" && (
                      <video
                        ref={videoRef}
                        key={activeVideo.src}    /* remount on src change */
                        src={activeVideo.src}
                        controls
                        autoPlay
                        preload="metadata"
                        className="absolute inset-0 w-full h-full object-cover bg-black"
                      />
                    )}
                  </div>
                </div>

                {/* ── Video selector cards ── */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {VIDEOS.map((video, i) => {
                    const isActive = activeIndex === i
                    return (
                      <button
                        key={i}
                        onClick={() => handleVideoSelect(i)}
                        className={`
                          group relative text-left rounded-xl border px-5 py-4
                          transition-all duration-200 focus:outline-none
                          focus-visible:ring-2 focus-visible:ring-blue-500
                          ${
                            isActive
                              ? "bg-blue-600/20 border-blue-500/70 shadow-lg shadow-blue-500/10"
                              : "bg-slate-800/60 border-slate-700/60 hover:bg-slate-800 hover:border-slate-600"
                          }
                        `}
                      >
                        {/* Label */}
                        <span
                          className={`text-sm font-bold uppercase tracking-widest ${
                            isActive ? "text-white" : "text-slate-300 group-hover:text-white"
                          }`}
                        >
                          Video {i + 1}
                        </span>

                        {/* Active ring */}
                        {isActive && (
                          <motion.div
                            layoutId="activeVideo"
                            className="absolute inset-0 rounded-xl ring-1 ring-blue-500/50 pointer-events-none"
                          />
                        )}
                      </button>
                    )
                  })}
                </div>

                {/* Config hint — only shown while placeholder IDs are still set */}
                {anyPlaceholder && (
                  <p className="mt-5 text-center text-xs text-slate-600 font-mono">
                    Replace{" "}
                    <span className="text-slate-500">YOUTUBE_VIDEO_ID_1 / _2 / _3</span> in{" "}
                    <span className="text-slate-500">VideoVault.tsx</span> with your real video IDs.
                  </p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
            onClick={() => scrollTo("workshops")}
          >
            Register for the Masterclass at Cerrahpaşa
          </Button>
        </div>
      </div>
    </section>
  )
}
