import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Magnet,
  ShieldCheck,
  Layers,
  RefreshCcw,
  Scissors,
  HeartPulse,
  Clock,
  Undo2,
} from "lucide-react"

const benefits = [
  { icon: ShieldCheck,   text: "No leaks or bleeding in early trials" },
  { icon: Scissors,      text: "Zero cutting of the small intestine" },
  { icon: HeartPulse,    text: "Uniform natural healing, standardised compression" },
  { icon: Undo2,         text: "Preserved anatomy for future surgical flexibility" },
  { icon: Clock,         text: "Same-day or next-day recovery" },
  { icon: RefreshCcw,    text: "Biofragmentable, self-expelling magnets — no retrieval needed" },
]

const applications = [
  "Class II & III Obesity (standalone procedure)",
  "VSG (Vertical Sleeve Gastrectomy) revision",
  "VBG (Vertical Banded Gastroplasty) revision",
  "Gastric Plication revision",
  "BariClip revision",
  "ESG (Endoscopic Sleeve Gastroplasty) revision",
  "GLP-1 Agonist non-responders",
]

export function MagDI() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section className="py-24 bg-slate-50" id="magdi">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-blue-50 text-primary border border-blue-200 font-semibold text-xs px-3 py-1">
            FDA-Cleared · Suture-Free · Staple-Free
          </Badge>
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">
            Procedure Overview
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5 tracking-tight">
            MagDI™ — Magnetic Duodeno-Ileostomy
          </h3>
          <p className="text-slate-600 text-lg leading-relaxed">
            An FDA-cleared ileal bypass using Magnetic Compression Anastomosis (MCA). Paired with sleeve
            gastrectomy, MagDI delivers <strong>~70–75% excess weight loss at 12 months</strong> and
            effective Type 2 diabetes management — without sutures or staples.
          </p>
        </div>

        {/* Two-column: Overview + Technique */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">

          {/* Overview card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                <Magnet className="w-5 h-5 text-primary" />
              </div>
              <h4 className="text-base font-bold text-slate-900">What is MagDI?</h4>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              MagDI™ (Magnetic Duodeno-Ileostomy) creates an ileal bypass connection using Magnetic
              Compression Anastomosis — a biophysical process where precisely calibrated magnets clamp
              tissue together, inducing controlled ischemic necrosis to form a perfectly sealed, sutureless
              anastomotic opening.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              When combined with sleeve gastrectomy, the procedure achieves approximately <strong>70–75%
              excess weight loss at 12 months</strong> and provides significant benefit in managing
              Type 2 diabetes, replicating the metabolic benefits of more complex reconstructive procedures.
            </p>
          </motion.div>

          {/* Surgical Technique card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                <Layers className="w-5 h-5 text-primary" />
              </div>
              <h4 className="text-base font-bold text-slate-900">Surgical Technique</h4>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              A <strong>dual laparoscopic/endoscopic procedure</strong>. The distal magnet is ingested and
              naturally migrates to the target ileal site, while the proximal magnet is placed endoscopically
              at the duodenum.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              The two magnets self-align and clamp the opposing tissue walls. Over <strong>2–3 weeks</strong>,
              uniform compression fuses the tissues into a precisely formed anastomosis.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Once fusion is complete, the <strong>biofragmentable magnets decouple</strong> and pass
              naturally through the bowel — no secondary procedure required for removal.
            </p>
          </motion.div>
        </div>

        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 mb-8"
        >
          <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-7">Key Clinical Benefits</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                  <b.icon className="w-4 h-4 text-primary" />
                </div>
                <p className="text-sm text-slate-700 leading-snug font-medium">{b.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Applications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="bg-slate-900 text-white rounded-2xl p-8 mb-10"
        >
          <div className="flex flex-col md:flex-row md:items-start gap-8">
            <div className="md:w-56 shrink-0">
              <h4 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-2">Applications</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Reserved for Class II and III obesity. Can be used as a standalone procedure or as a
                revision for patients who have not achieved adequate results from prior interventions.
              </p>
            </div>
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {applications.map((app, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-slate-800/70 border border-slate-700/60 rounded-xl px-4 py-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                  <span className="text-sm text-slate-300 font-medium">{app}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="text-center">
          <Button size="lg" onClick={() => scrollTo("workshops")}>
            Enroll in the MagDI Masterclass
          </Button>
        </div>

      </div>
    </section>
  )
}
