import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import techMagnets from "@assets/generated_images/tech-magnets.png"
import { CheckCircle2 } from "lucide-react"

export function Technology() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const benefits = [
    "Sutureless & Staple-Free Anastomosis",
    "Standardized Healing Compression",
    "Reduced Anastomotic Leak Risk",
    "Streamlined Operative Time"
  ];

  return (
    <section className="py-24 bg-white" id="overview">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">The Technology</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
              Precision. Compression. <br/> Perfect Alignment.
            </h3>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              Magnetic Compression Anastomosis (MCA) using the MAG-01 through MAG-06 systems represents a paradigm shift in gastrointestinal surgery. By employing precisely calibrated magnetic force, the system achieves uniform tissue compression and ischemia-induced necrosis, leading to a perfectly healed, sutureless anastomosis.
            </p>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Combined with the DVS delivery system and LPD placement instruments, surgeons can execute complex reconstructions with unprecedented consistency.
            </p>

            <ul className="space-y-4 mb-10">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-center text-slate-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>

            <Button size="lg" onClick={() => scrollTo('equipment')}>
              Request Institutional Equipment Quote
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-slate-100 shadow-2xl relative">
              <img 
                src={techMagnets} 
                alt="MAG System Magnets" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl"></div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs hidden md:block">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                  <span className="font-bold text-primary">MAG</span>
                </div>
                <div>
                  <div className="font-bold text-slate-900">01–06 Series</div>
                  <div className="text-sm text-slate-500">Calibrated Systems</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
