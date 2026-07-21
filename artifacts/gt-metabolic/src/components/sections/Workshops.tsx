import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

export function Workshops() {
  const tiers = [
    {
      name: "Observer & Didactic Module",
      price: "€1,200",
      duration: "1 Day",
      description: "Foundational theory plus live operating room observation at Cerrahpaşa.",
      features: [
        "Didactic lectures on MCA principles",
        "OR observation (2 live cases)",
        "Comprehensive course materials",
        "Certificate of Attendance"
      ],
      featured: false,
    },
    {
      name: "Hands-On Skills & Wet-Lab",
      price: "€2,800",
      duration: "2 Days",
      description: "Intensive simulation and cadaveric practice with LPD tools and mock magnets.",
      features: [
        "Everything in Observer Module",
        "Half-day wet-lab / cadaveric session",
        "LPD instrument handling practice",
        "Technique coaching with senior faculty",
        "Skills Assessment Certificate"
      ],
      featured: false,
    },
    {
      name: "Full Proctoring & Certification",
      price: "€4,500",
      duration: "3 Days",
      description: "The complete certification pathway for independent surgical practice.",
      features: [
        "Everything in Hands-On Module",
        "1-on-1 proctoring (2 clinical cases)",
        "Post-training case support (3 months)",
        "Official Cerrahpaşa co-branded certification",
        "Priority scheduling for future modules"
      ],
      featured: true,
    }
  ];

  return (
    <section className="py-24 bg-slate-50" id="workshops">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Academic Excellence</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Certification Workshops
          </h3>
          <p className="text-slate-600 text-lg">
            Train alongside world-class faculty at Cerrahpaşa University Hospital. Choose your pathway to mastering the MAG system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex"
            >
              <Card className={`relative flex flex-col w-full transition-all duration-300 ${tier.featured ? 'border-primary shadow-xl scale-105 z-10' : 'border-slate-200 hover:border-slate-300 hover:shadow-md'}`}>
                {tier.featured && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <Badge className="bg-primary text-white px-4 py-1 text-xs font-bold uppercase tracking-wider">
                      Recommended Pathway
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pt-8 pb-4">
                  <CardTitle className="text-xl text-slate-900 mb-2">{tier.name}</CardTitle>
                  <div className="flex justify-center items-baseline gap-1 mb-2">
                    <span className="text-4xl font-bold text-slate-900">{tier.price}</span>
                    <span className="text-slate-500 font-medium">/ surgeon</span>
                  </div>
                  <CardDescription className="text-sm font-medium text-blue-600 uppercase tracking-wide">
                    {tier.duration}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="flex-1 px-6">
                  <p className="text-sm text-slate-600 mb-6 text-center h-10">
                    {tier.description}
                  </p>
                  <ul className="space-y-4">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-slate-700">
                        <Check className={`w-5 h-5 mr-3 shrink-0 ${tier.featured ? 'text-primary' : 'text-slate-400'}`} />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="p-6 pt-0 mt-auto">
                  <Button 
                    className="w-full" 
                    variant={tier.featured ? "default" : "outline"}
                    size="lg"
                  >
                    Enroll Now
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white px-6 py-3 rounded-full shadow-sm border border-slate-200 text-sm font-medium text-slate-700">
            <span className="w-2 h-2 rounded-full bg-green-500 inline-block mr-2"></span>
            Next cohort: <strong className="text-slate-900">September 15–17, 2026</strong> · Istanbul, Turkey
          </div>
        </div>
      </div>
    </section>
  )
}
