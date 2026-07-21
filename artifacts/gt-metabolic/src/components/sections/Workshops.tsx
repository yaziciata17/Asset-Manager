import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Building2, Globe } from "lucide-react"

export function Workshops() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const programIncludes = [
    "3 Live Surgeries in the Operating Room at Cerrahpaşa",
    "Hands-on simulation with LPD tools and MAG systems",
    "1-on-1 mentorship with lead surgical faculty",
    "Official co-branded Cerrahpaşa University Hospital certification",
    "Post-training case support access",
  ];

  return (
    <section className="py-24 bg-slate-50" id="workshops">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Academic Excellence</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            1-Day Surgical Masterclass
          </h3>
          <p className="text-slate-600 text-lg">
            Every surgeon receives the same world-class experience — 3 live cases in the OR,
            hands-on simulation, and an official co-branded Cerrahpaşa University Hospital certification.
            No tiered access. One standard of excellence.
          </p>
        </div>

        {/* What's Included */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm px-8 py-7">
            <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">Every Masterclass Includes</h4>
            <ul className="space-y-4">
              {programIncludes.map((item, i) => (
                <li key={i} className="flex items-start text-slate-800 font-medium">
                  <Check className="w-5 h-5 text-primary mr-3 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

          {/* Turkish Candidates */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0 }}
            className="flex"
          >
            <Card className="relative flex flex-col w-full border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-300">
              <CardHeader className="text-center pt-8 pb-4">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <Badge variant="outline" className="mx-auto mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500 border-slate-300 w-fit">
                  Turkish Candidates
                </Badge>
                <CardTitle className="text-xl text-slate-900 mb-3">1-Day Masterclass</CardTitle>
                <div className="flex justify-center items-baseline gap-1 mb-1">
                  <span className="text-5xl font-bold text-slate-900">€1,000</span>
                  <span className="text-slate-500 font-medium">/ surgeon</span>
                </div>
              </CardHeader>

              <CardContent className="flex-1 px-6 pt-2">
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
                  <p className="text-sm text-blue-800 leading-relaxed">
                    Payments are completed per <strong>Cerrahpaşa University Hospital</strong> financial guidance.
                  </p>
                </div>
                <p className="text-sm text-slate-500 text-center">
                  Full 1-day masterclass program · 3 live OR cases · Official certification
                </p>
              </CardContent>

              <CardFooter className="p-6 pt-0 mt-auto">
                <Button
                  className="w-full"
                  variant="outline"
                  size="lg"
                  onClick={() => scrollTo('equipment')}
                >
                  Enroll Now
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Non-Turkish Candidates */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex"
          >
            <Card className="relative flex flex-col w-full border-primary shadow-xl scale-[1.02] z-10 transition-all duration-300">
              <div className="absolute -top-4 left-0 right-0 flex justify-center">
                <Badge className="bg-primary text-white px-4 py-1 text-xs font-bold uppercase tracking-wider">
                  All-Inclusive Package
                </Badge>
              </div>

              <CardHeader className="text-center pt-10 pb-4">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <Badge variant="outline" className="mx-auto mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500 border-slate-300 w-fit">
                  International Candidates
                </Badge>
                <CardTitle className="text-xl text-slate-900 mb-3">1-Day Masterclass</CardTitle>
                <div className="flex justify-center items-baseline gap-1 mb-1">
                  <span className="text-5xl font-bold text-slate-900">€4,000</span>
                  <span className="text-slate-500 font-medium">/ surgeon</span>
                </div>
              </CardHeader>

              <CardContent className="flex-1 px-6 pt-2">
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 mb-4">
                  <h5 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Package Includes</h5>
                  <ul className="space-y-2">
                    {[
                      "Masterclass & 3 Live Surgeries",
                      "Hotel Accommodation (Istanbul)",
                      "Airport Transfers",
                      "VIP Istanbul Transport",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center text-sm text-slate-700 font-medium">
                        <Check className="w-4 h-4 text-primary mr-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                  <p className="text-sm text-blue-800 leading-relaxed">
                    Payments are processed directly via <strong>ITEM Medical Technologies</strong>.
                  </p>
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-4 mt-auto">
                <Button
                  className="w-full"
                  variant="default"
                  size="lg"
                  onClick={() => scrollTo('equipment')}
                >
                  Enroll Now
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white px-6 py-3 rounded-full shadow-sm border border-slate-200 text-sm font-medium text-slate-700">
            <span className="w-2 h-2 rounded-full bg-green-500 inline-block mr-2"></span>
            Next cohort: <strong className="text-slate-900">September 15, 2026</strong> · Cerrahpaşa University Hospital, Istanbul
          </div>
        </div>
      </div>
    </section>
  )
}
