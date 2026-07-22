import { Button } from "@/components/ui/button"

export function Navbar() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-primary font-bold text-lg leading-none tracking-tight">Magnetic Surgery Solutions</span>
          <span className="text-muted-foreground text-xs font-medium uppercase tracking-widest mt-1">Cerrahpaşa University Magnetic Surgery Training Center</span>
        </div>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
          <button onClick={() => scrollTo('overview')} className="hover:text-primary transition-colors">Overview</button>
          <button onClick={() => scrollTo('workshops')} className="hover:text-primary transition-colors">Workshops</button>
          <button onClick={() => scrollTo('magdi')} className="hover:text-primary transition-colors">MagDI</button>
          <button onClick={() => scrollTo('video-vault')} className="hover:text-primary transition-colors">Video Center</button>
          <button onClick={() => scrollTo('publications')} className="hover:text-primary transition-colors">Publications</button>
          <button onClick={() => scrollTo('contact')} className="hover:text-primary transition-colors">Contact</button>
        </div>

        <div className="flex items-center space-x-4">
          <Button onClick={() => scrollTo('workshops')} variant="default" className="hidden sm:flex">
            View Workshops
          </Button>
        </div>
      </div>
    </nav>
  )
}
