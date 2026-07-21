import { useState, useRef, useCallback, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { ShieldCheck, Play } from "lucide-react"

// ─── Video source configuration ──────────────────────────────────────────────
// To use a YouTube video: set type to "youtube" and videoId to the 11-char ID
//   e.g. videoId: "dQw4w9WgXcQ"
// To use a Vimeo video: set type to "vimeo" and videoId to the numeric ID
//   e.g. videoId: "123456789"
// To use a local/hosted MP4: set type to "mp4" and src to the file path or URL
//   e.g. src: "/videos/surgical-demo.mp4"
const VIDEO_CONFIG = {
  type: "youtube" as "youtube" | "vimeo" | "mp4",
  videoId: "YOUTUBE_VIDEO_ID_HERE", // ← replace with real 11-char YouTube ID
  // src: "/videos/surgical-demo.mp4",  // ← uncomment for MP4
} as const;

// ─── Timestamp steps ─────────────────────────────────────────────────────────
const STEPS = [
  {
    label: "Target Site Prep",
    timestamp: "0:00",
    seconds: 0,
    description: "Anatomy assessment, measurement, and site preparation",
  },
  {
    label: "Magnet Insertion",
    timestamp: "4:32",
    seconds: 272,
    description: "LPD tool deployment and MAG system placement",
  },
  {
    label: "Alignment Check",
    timestamp: "11:15",
    seconds: 675,
    description: "Magnetic coupling verification and post-placement confirmation",
  },
]

// ─── YouTube player hook ──────────────────────────────────────────────────────
function useYouTubeSeek(iframeRef: React.RefObject<HTMLIFrameElement | null>) {
  const seek = useCallback(
    (seconds: number) => {
      if (!iframeRef.current?.contentWindow) return;
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: "seekTo", args: [seconds, true] }),
        "*"
      );
      // Also trigger play in case it was paused
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: "playVideo", args: [] }),
        "*"
      );
    },
    [iframeRef]
  );
  return seek;
}

// ─── Build embed URL ──────────────────────────────────────────────────────────
function buildEmbedUrl(startSeconds: number = 0): string {
  if (VIDEO_CONFIG.type === "youtube") {
    const params = new URLSearchParams({
      enablejsapi: "1",
      rel: "0",
      modestbranding: "1",
      color: "white",
      start: String(startSeconds),
      autoplay: startSeconds > 0 ? "1" : "0",
    });
    return `https://www.youtube.com/embed/${VIDEO_CONFIG.videoId}?${params}`;
  }
  if (VIDEO_CONFIG.type === "vimeo") {
    const params = new URLSearchParams({
      api: "1",
      title: "0",
      byline: "0",
      portrait: "0",
      color: "0a70f5",
      autoplay: startSeconds > 0 ? "1" : "0",
      t: String(startSeconds) + "s",
    });
    return `https://player.vimeo.com/video/${VIDEO_CONFIG.videoId}?${params}`;
  }
  return "";
}

// ─── Main component ───────────────────────────────────────────────────────────
export function VideoVault() {
  const [isVerified, setIsVerified] = useState(false);
  const [checked, setChecked] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [iframeSrc, setIframeSrc] = useState(() => buildEmbedUrl(0));

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const seekYouTube = useYouTubeSeek(iframeRef);

  // When switching steps, seek appropriately based on player type
  const handleStepClick = useCallback(
    (index: number) => {
      const step = STEPS[index];
      setActiveStep(index);

      if (VIDEO_CONFIG.type === "youtube") {
        // postMessage seek (no iframe reload needed)
        seekYouTube(step.seconds);
      } else if (VIDEO_CONFIG.type === "vimeo") {
        // Vimeo: reload iframe src with new t= param
        setIframeSrc(buildEmbedUrl(step.seconds));
      } else if (VIDEO_CONFIG.type === "mp4" && videoRef.current) {
        videoRef.current.currentTime = step.seconds;
        videoRef.current.play();
      }
    },
    [seekYouTube]
  );

  // Keep src stable on YouTube (only set once so the iframe is never unmounted)
  useEffect(() => {
    if (VIDEO_CONFIG.type === "youtube") {
      setIframeSrc(buildEmbedUrl(0));
    }
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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
            MAG system. Jump to any procedural step below.
          </p>
        </div>

        {/* Player container */}
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

            {/* ── Video player + timestamps ── */}
            {isVerified && (
              <motion.div
                key="player"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {/* 16:9 video frame */}
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-700/60 bg-black">
                  <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>

                    {/* YouTube / Vimeo iframe */}
                    {(VIDEO_CONFIG.type === "youtube" || VIDEO_CONFIG.type === "vimeo") && (
                      <iframe
                        ref={iframeRef}
                        src={iframeSrc}
                        title="Surgical technique video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full border-0"
                      />
                    )}

                    {/* Local MP4 */}
                    {VIDEO_CONFIG.type === "mp4" && (
                      <video
                        ref={videoRef}
                        controls
                        preload="metadata"
                        className="absolute inset-0 w-full h-full object-cover bg-black"
                      >
                        <source src={(VIDEO_CONFIG as { src?: string }).src ?? ""} type="video/mp4" />
                        Your browser does not support HTML5 video.
                      </video>
                    )}
                  </div>
                </div>

                {/* ── Timestamp step buttons ── */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {STEPS.map((step, i) => {
                    const isActive = activeStep === i;
                    return (
                      <button
                        key={i}
                        onClick={() => handleStepClick(i)}
                        className={`
                          group relative text-left rounded-xl border px-5 py-4
                          transition-all duration-200 focus:outline-none focus-visible:ring-2
                          focus-visible:ring-blue-500
                          ${
                            isActive
                              ? "bg-blue-600/20 border-blue-500/70 shadow-lg shadow-blue-500/10"
                              : "bg-slate-800/60 border-slate-700/60 hover:bg-slate-800 hover:border-slate-600"
                          }
                        `}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span
                            className={`text-xs font-bold uppercase tracking-widest ${
                              isActive ? "text-blue-400" : "text-slate-500"
                            }`}
                          >
                            Step {i + 1}
                          </span>
                          <span
                            className={`font-mono text-xs font-semibold px-2 py-0.5 rounded ${
                              isActive
                                ? "bg-blue-500/30 text-blue-300"
                                : "bg-slate-700 text-slate-400"
                            }`}
                          >
                            {step.timestamp}
                          </span>
                        </div>
                        <div
                          className={`text-sm font-bold mb-1 ${
                            isActive ? "text-white" : "text-slate-200 group-hover:text-white"
                          }`}
                        >
                          {step.label}
                        </div>
                        <div className="text-xs text-slate-500 leading-snug">
                          {step.description}
                        </div>
                        {isActive && (
                          <motion.div
                            layoutId="activeStep"
                            className="absolute inset-0 rounded-xl ring-1 ring-blue-500/50 pointer-events-none"
                          />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* ── Config hint ── */}
                {VIDEO_CONFIG.videoId === "YOUTUBE_VIDEO_ID_HERE" && (
                  <p className="mt-5 text-center text-xs text-slate-600 font-mono">
                    Replace <span className="text-slate-500">YOUTUBE_VIDEO_ID_HERE</span> in{" "}
                    <span className="text-slate-500">VideoVault.tsx</span> with your real video ID to go live.
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
  );
}
