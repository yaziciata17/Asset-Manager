import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { FileText, ExternalLink } from "lucide-react"

type FilterKey = "All" | "Bariatric" | "Colorectal" | "Safety Data"

const filters: FilterKey[] = ["All", "Bariatric", "Colorectal", "Safety Data"]

const publications: {
  id: string
  title: string
  journal: string
  year: string
  metric: string
  tags: FilterKey[]
  pdfUrl: string
}[] = [
  {
    id: "pub1",
    title: "Sutureless Magnetic Compression Anastomosis in Bariatric Revision Surgery",
    journal: "Annals of Surgery",
    year: "2024",
    metric: "0% Anastomotic Leak Rate in 50 Cases",
    tags: ["Bariatric", "Safety Data"],
    pdfUrl: "/pub1.pdf",
  },
  {
    id: "pub2",
    title: "Magnetic Anastomosis in Revisional Bariatric Surgery",
    journal: "Obesity Surgery",
    year: "2023",
    metric: "Zero Major Complications in 34 Revision Cases",
    tags: ["Bariatric", "Safety Data"],
    pdfUrl: "/pub2.pdf",
  },
  {
    id: "pub3",
    title: "Comparative Operative Times: Manual Suturing vs. MAG System",
    journal: "Journal of Gastrointestinal Surgery",
    year: "2023",
    metric: "42% Reduction in Anastomosis Time",
    tags: ["Bariatric"],
    pdfUrl: "/pub3.pdf",
  },
]

export function Publications() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("All")

  const filtered =
    activeFilter === "All"
      ? publications
      : publications.filter((p) => p.tags.includes(activeFilter))

  return (
    <section className="py-24 bg-white" id="publications">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">
              Clinical Evidence
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Publications & Data
            </h3>
            <p className="text-slate-500 mt-3 text-base">
              Peer-reviewed research and clinical trial results — open access, no login required.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-150 ${
                  activeFilter === f
                    ? "bg-primary text-white shadow-md"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((pub, index) => (
            <motion.div
              key={pub.id}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
            >
              <Card className="h-full flex flex-col hover:border-primary/50 hover:shadow-md transition-all duration-200 border-slate-200">

                {/* Title + Journal */}
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 text-primary mt-0.5">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-400 mb-1">
                        {pub.journal} · {pub.year}
                      </p>
                      <h4 className="text-sm font-bold text-slate-900 leading-snug">
                        {pub.title}
                      </h4>
                    </div>
                  </div>
                </CardHeader>

                {/* Key Outcome Badge */}
                <CardContent className="py-0 flex-1">
                  <Badge
                    variant="secondary"
                    className="bg-blue-50 text-primary border border-blue-100 font-semibold text-xs px-3 py-1.5 rounded-md whitespace-normal text-left leading-snug"
                  >
                    {pub.metric}
                  </Badge>
                </CardContent>

                {/* Download */}
                <CardFooter className="pt-4 mt-4 border-t border-slate-100">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-primary hover:bg-blue-50 px-0 gap-2 text-sm font-semibold"
                    asChild
                  >
                    <a href={pub.pdfUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Download PDF
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
