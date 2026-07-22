import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { Technology } from "@/components/sections/Technology"
import { MagDI } from "@/components/sections/MagDI"
import { Faculty } from "@/components/sections/Faculty"
import { Workshops } from "@/components/sections/Workshops"
import { VideoVault } from "@/components/sections/VideoVault"
import { Publications } from "@/components/sections/Publications"
import { Contact } from "@/components/sections/Contact"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <Hero />
        <Technology />
        <MagDI />
        <Faculty />
        <Workshops />
        <VideoVault />
        <Publications />
        <Contact />
      </main>
      
      <Footer />
    </div>
  )
}
