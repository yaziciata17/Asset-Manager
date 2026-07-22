import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import heroAbstract from "@assets/generated_images/hero-abstract.png"

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-50" id="hero">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroAbstract} 
          alt="Abstract Medical Technology" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="text-xs font-semibold tracking-wide uppercase">Official Certification Center</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            Master Sutureless <br />
            <span className="text-blue-300">Magnetic Anastomosis.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl leading-relaxed">
            The authoritative training program for the MAG-01–MAG-06 magnet systems. 
            Co-accredited by Cerrahpaşa University Magnetic Surgery Training Center, setting the global standard for elite surgical innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-slate-100 font-semibold h-14 px-8 text-base shadow-lg"
              onClick={() => scrollTo('workshops')}
            >
              View Certification Workshops
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 h-14 px-8 text-base backdrop-blur-sm"
              onClick={() => scrollTo('magdi')}
            >
              Learn About MagDI
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
