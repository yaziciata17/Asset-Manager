import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { Technology } from "@/components/sections/Technology"
import { Faculty } from "@/components/sections/Faculty"
import { Workshops } from "@/components/sections/Workshops"
import { VideoVault } from "@/components/sections/VideoVault"
import { Publications } from "@/components/sections/Publications"
import { QuoteForm } from "@/components/sections/QuoteForm"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Navbar />
      
      <main className="flex-grow pt-20"> {/* pt-20 to offset the fixed navbar */}
        <Hero />
        <Technology />
        <Faculty />
        <Workshops />
        <VideoVault />
        <Publications />
        <QuoteForm />
      </main>
      
      <Footer />
    </div>
  )
}
