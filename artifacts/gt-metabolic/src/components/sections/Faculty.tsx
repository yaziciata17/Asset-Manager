import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Award, BookOpen, Microscope, Users } from "lucide-react"

export function Faculty() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const credentials = [
    {
      icon: Microscope,
      label: "Inventor",
      detail: "Co-inventor of Magnetic Compression Anastomosis technology",
    },
    {
      icon: Award,
      label: "Co-Founder",
      detail: "Co-founder of Magnetic Surgery Solutions",
    },
    {
      icon: BookOpen,
      label: "400+ Publications",
      detail: "Author of over 400 peer-reviewed surgical research papers",
    },
    {
      icon: Users,
      label: "Pioneer in MIS",
      detail: "Credited with the first laparoscopic sleeve gastrectomy and biliopancreatic diversion",
    },
  ];

  return (
    <section className="py-24 bg-slate-900 text-white" id="faculty">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-3">Guest Faculty</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Learn From the Inventor
          </h3>
          <p className="text-slate-400 text-lg">
            Masterclass participants train directly alongside the physician who created Magnetic Compression Anastomosis.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 lg:grid-cols-5 gap-0 rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl"
          >
            {/* Left — Identity Panel */}
            <div className="lg:col-span-2 bg-gradient-to-br from-primary/90 to-[#051c3f] flex flex-col items-center justify-center py-14 px-10 text-center">
              <div className="w-28 h-28 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center mb-6 text-4xl font-bold text-white">
                MG
              </div>
              <h4 className="text-2xl font-bold text-white mb-1 tracking-tight">Dr. Michel Gagner, MD</h4>
              <p className="text-blue-300 text-sm font-semibold uppercase tracking-widest mb-5">
                FACS, FRCSC, FASMBS
              </p>
              <div className="space-y-2 mb-8">
                <Badge className="bg-blue-500/20 text-blue-200 border border-blue-500/30 font-medium text-xs px-3 py-1">
                  Featured Guest Proctor
                </Badge>
                <Badge className="bg-white/10 text-white/80 border border-white/20 font-medium text-xs px-3 py-1 block">
                  Featured Masterclass Instructor
                </Badge>
              </div>
              <div className="text-xs text-blue-300/70 leading-relaxed max-w-[200px]">
                Professor of Surgery · Montreal, Canada
              </div>
            </div>

            {/* Right — Details Panel */}
            <div className="lg:col-span-3 bg-slate-800/60 flex flex-col justify-center px-10 py-12">
              <div className="mb-8">
                <p className="text-slate-300 text-base leading-relaxed mb-4">
                  Dr. Michel Gagner is the co-founder of Magnetic Surgery Solutions and the pioneering 
                  surgeon-scientist who invented Magnetic Compression Anastomosis. With more than 
                  three decades at the forefront of minimally invasive surgery, he has transformed 
                  bariatric, colorectal, and upper GI reconstruction globally.
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  As featured guest proctor and instructor at the Cerrahpaşa Masterclass, Dr. Gagner 
                  provides participants with direct, hands-on mentorship from the technique's originator — 
                  an opportunity available at no other training program in the world.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {credentials.map((cred, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-md bg-blue-500/15 flex items-center justify-center shrink-0 mt-0.5">
                      <cred.icon className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-blue-300 uppercase tracking-wider mb-0.5">{cred.label}</div>
                      <div className="text-sm text-slate-400 leading-snug">{cred.detail}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Button
                size="lg"
                className="self-start bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                onClick={() => scrollTo('workshops')}
              >
                Reserve Your Seat in the Masterclass
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
