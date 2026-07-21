import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, ShieldCheck, Mail } from "lucide-react"

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="equipment">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-slate-900 z-0"></div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 text-white">
          <h2 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-3">Institutional Procurement</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Request Equipment Quote
          </h3>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Pricing for MAG-01–MAG-06 magnet systems, DVS delivery systems, and LPD placement instruments is available confidentially for hospitals and surgical centers.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-5">
            <div className="md:col-span-2 bg-slate-50 p-10 border-r border-slate-100 flex flex-col justify-between">
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-6">Confidential Inquiry</h4>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <ShieldCheck className="w-6 h-6 text-primary mr-3 shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-900 text-sm">Direct Manufacturer Pricing</p>
                      <p className="text-xs text-slate-500 mt-1">Via ITEM Medical Technologies</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-primary mr-3 shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-900 text-sm">Custom Bundle Options</p>
                      <p className="text-xs text-slate-500 mt-1">Including starter kits and high-volume discounts</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Mail className="w-6 h-6 text-primary mr-3 shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-900 text-sm">Fast Response</p>
                      <p className="text-xs text-slate-500 mt-1">Our procurement specialists reply within 24 hours</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="mt-12 pt-8 border-t border-slate-200">
                <p className="text-xs text-slate-500">
                  Are you a surgeon looking for certification instead? <br/>
                  <a href="#workshops" className="text-primary font-semibold hover:underline">View Workshop Pricing</a>
                </p>
              </div>
            </div>

            <div className="md:col-span-3 p-10">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">Request Received</h4>
                  <p className="text-slate-600 max-w-sm mb-8">
                    Thank you. A procurement specialist will contact your institutional email address within 24 hours with confidential pricing details.
                  </p>
                  <Button variant="outline" onClick={() => setSubmitted(false)}>Submit Another Request</Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="q-name">Full Name *</Label>
                      <Input id="q-name" required placeholder="Dr. John Smith" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="q-title">Surgical Specialty / Title *</Label>
                      <Input id="q-title" required placeholder="Head of Bariatrics" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="q-hospital">Hospital / Health System Name *</Label>
                    <Input id="q-hospital" required placeholder="e.g. Memorial Medical Center" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="q-email">Official Email (Hospital Domain) *</Label>
                      <Input id="q-email" type="email" required placeholder="jsmith@hospital.org" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="q-phone">Phone Number</Label>
                      <Input id="q-phone" type="tel" placeholder="+1 (555) 000-0000" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="q-volume">Estimated Annual Case Volume *</Label>
                    <select 
                      id="q-volume"
                      required
                      className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select volume...</option>
                      <option value="<25">&lt; 25 cases</option>
                      <option value="25-50">25 – 50 cases</option>
                      <option value="51-100">51 – 100 cases</option>
                      <option value="100+">100+ cases</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="q-notes">Message / Specific Requirements (Optional)</Label>
                    <Textarea id="q-notes" placeholder="Any specific configurations or questions..." className="resize-none" rows={3} />
                  </div>

                  <Button type="submit" size="lg" className="w-full text-base h-12">
                    Submit Quote Request
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
