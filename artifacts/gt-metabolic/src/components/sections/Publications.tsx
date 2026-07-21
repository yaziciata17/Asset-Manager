import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { FileText, Download, CheckCircle2 } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function Publications() {
  const [filter, setFilter] = useState("All");
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const filters = ["All", "Anastomotic Leak Rates", "Bariatric Revisions", "Colorectal Procedures", "Surgical Speed"];

  const publications = [
    {
      id: "pub1",
      title: "Sutureless Magnetic Compression Anastomosis in Bariatric Revision Surgery: A Multi-Center Analysis",
      journal: "Annals of Surgery · 2024",
      metric: "0% Anastomotic Leak Rate in 50 Cases",
      tags: ["Bariatric Revisions", "Anastomotic Leak Rates"],
    },
    {
      id: "pub2",
      title: "Comparative Operative Times: Manual Suturing vs. MAG-03 System in Gastrojejunostomy",
      journal: "Journal of Gastrointestinal Surgery · 2023",
      metric: "42% Reduction in Anastomosis Time",
      tags: ["Surgical Speed"],
    },
    {
      id: "pub3",
      title: "Long-term Patency and Stricture Rates Following Magnetic Colorectal Anastomosis",
      journal: "Diseases of the Colon & Rectum · 2023",
      metric: "96% Primary Patency at 24 Months",
      tags: ["Colorectal Procedures"],
    },
    {
      id: "pub4",
      title: "Ischemia-Induced Necrosis via Magnetic Compression: Histological Evaluation of Healing Tissue",
      journal: "Surgical Endoscopy · 2022",
      metric: "Superior Tissue Remodeling Profile",
      tags: ["Anastomotic Leak Rates"],
    }
  ];

  const filteredPubs = filter === "All" 
    ? publications 
    : publications.filter(p => p.tags.includes(filter));

  const handleDownload = (e: React.FormEvent, id: string) => {
    e.preventDefault();
    setDownloadSuccess(id);
    setTimeout(() => setDownloadSuccess(null), 3000);
  };

  return (
    <section className="py-24 bg-white" id="publications">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Clinical Evidence</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Publications & Data
            </h3>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  filter === f 
                  ? 'bg-primary text-white shadow-md' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPubs.map((pub, index) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col hover:border-primary/50 transition-colors border-slate-200">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 text-primary">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500 mb-1">{pub.journal}</p>
                      <h4 className="text-lg font-bold text-slate-900 leading-snug">{pub.title}</h4>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="py-0 flex-1">
                  <div className="bg-slate-50 border border-slate-100 rounded-md p-3 mb-4 inline-block">
                    <span className="text-sm font-bold text-primary">{pub.metric}</span>
                  </div>
                </CardContent>
                <CardFooter className="pt-4 border-t border-slate-100">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost" className="text-primary hover:text-primary hover:bg-blue-50 px-0 gap-2">
                        <Download className="w-4 h-4" />
                        Download Study PDF
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Access Publication</DialogTitle>
                        <DialogDescription>
                          Enter your institutional details to receive the full text PDF.
                        </DialogDescription>
                      </DialogHeader>
                      
                      {downloadSuccess === pub.id ? (
                        <div className="py-8 flex flex-col items-center justify-center text-center">
                          <CheckCircle2 className="w-12 h-12 text-green-500 mb-4" />
                          <h4 className="text-lg font-bold text-slate-900 mb-2">Check Your Email</h4>
                          <p className="text-sm text-slate-500">The PDF has been sent to your institutional address.</p>
                        </div>
                      ) : (
                        <form onSubmit={(e) => handleDownload(e, pub.id)} className="space-y-4 py-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" required placeholder="Dr. Jane Doe" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="institution">Institution / Hospital</Label>
                            <Input id="institution" required placeholder="General Hospital" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Official Email (Hospital Domain)</Label>
                            <Input id="email" type="email" required placeholder="jane.doe@hospital.edu" />
                          </div>
                          <Button type="submit" className="w-full mt-4">Send Access Link</Button>
                        </form>
                      )}
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
