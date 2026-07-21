import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { PlayCircle, Clock, ShieldCheck } from "lucide-react"

export function VideoVault() {
  const [isVerified, setIsVerified] = useState(false);
  const [checked, setChecked] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);

  const chapters = [
    { title: "Target Site Preparation & Measurement", time: "0:00" },
    { title: "LPD Tool & Magnet Insertion", time: "4:32" },
    { title: "Magnetic Alignment & Coupling Verification", time: "11:15" },
    { title: "Post-Operative Mating Check", time: "18:47" },
  ];

  const handleVerify = () => {
    if (checked) setIsVerified(true);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="py-24 bg-slate-900 text-white" id="video-vault">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-3">Surgical Video Vault</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Technique & Procedure Center
          </h3>
          <p className="text-slate-400 text-lg">
            High-definition procedural footage demonstrating the application of the MAG system in clinical settings.
            Open access for all site visitors.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden bg-black shadow-2xl border border-slate-800 min-h-[500px] flex items-center justify-center">

          <AnimatePresence mode="wait">
            {!isVerified ? (
              <motion.div
                key="gate"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-20 flex items-center justify-center bg-slate-900/95 backdrop-blur-md p-6"
              >
                <Card className="max-w-md w-full bg-slate-800 border-slate-700 p-8 text-center shadow-2xl">
                  <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ShieldCheck className="w-8 h-8 text-blue-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">Clinical Content Notice</h4>
                  <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                    This video center contains real surgical footage from live OR procedures. 
                    Please confirm you are a licensed healthcare professional before proceeding.
                  </p>

                  <div className="flex items-center space-x-3 mb-8 text-left bg-slate-900/50 p-4 rounded-lg border border-slate-700/50">
                    <Checkbox
                      id="prof-check"
                      checked={checked}
                      onCheckedChange={(c) => setChecked(c as boolean)}
                      className="border-slate-500 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
                    />
                    <label
                      htmlFor="prof-check"
                      className="text-sm font-medium leading-snug text-slate-300 cursor-pointer"
                    >
                      I confirm that I am a licensed healthcare professional.
                    </label>
                  </div>

                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                    disabled={!checked}
                    onClick={handleVerify}
                  >
                    Access Video Center
                  </Button>
                </Card>
              </motion.div>
            ) : (
              <motion.div
                key="player"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 flex flex-col md:flex-row z-10"
              >
                {/* Mock Player Area */}
                <div className="flex-1 bg-black relative group flex items-center justify-center">
                  <div className="absolute inset-0 bg-slate-800/20" />
                  <button className="w-20 h-20 bg-primary/90 text-white rounded-full flex items-center justify-center hover:bg-primary transition-transform hover:scale-105 z-10 shadow-xl backdrop-blur-sm">
                    <PlayCircle className="w-10 h-10 ml-1" />
                  </button>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-4 text-xs font-medium text-white/70 bg-black/40 px-4 py-2 rounded-lg backdrop-blur-md">
                    <span>{chapters[activeChapter].time}</span>
                    <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
                      <div className="w-1/4 h-full bg-blue-500 rounded-full" />
                    </div>
                    <span>23:14</span>
                  </div>
                </div>

                {/* Sidebar Chapters */}
                <div className="w-full md:w-80 bg-slate-900 border-l border-slate-800 flex flex-col">
                  <div className="p-4 border-b border-slate-800">
                    <h5 className="font-semibold text-white">Procedural Chapters</h5>
                  </div>
                  <div className="flex-1 overflow-y-auto">
                    {chapters.map((chapter, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveChapter(i)}
                        className={`w-full text-left p-4 flex items-start gap-3 transition-colors border-l-2 ${activeChapter === i ? 'bg-slate-800 border-blue-500' : 'hover:bg-slate-800/50 border-transparent'}`}
                      >
                        <Clock className={`w-4 h-4 mt-0.5 shrink-0 ${activeChapter === i ? 'text-blue-400' : 'text-slate-500'}`} />
                        <div>
                          <div className={`text-sm font-medium mb-1 ${activeChapter === i ? 'text-white' : 'text-slate-300'}`}>
                            {chapter.title}
                          </div>
                          <div className="text-xs text-slate-500 font-mono">{chapter.time}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white" onClick={() => scrollTo('workshops')}>
            Register for the Masterclass at Cerrahpaşa
          </Button>
        </div>
      </div>
    </section>
  )
}
