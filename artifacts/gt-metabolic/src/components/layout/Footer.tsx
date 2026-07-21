export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <span className="font-bold text-xl block mb-2">GT Metabolic Solutions</span>
          <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-sm">
            Advancing surgical innovation through sutureless Magnetic Compression Anastomosis. 
            Excellence in training in partnership with Cerrahpaşa Faculty of Medicine, Istanbul.
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><a href="#overview" className="hover:text-white transition-colors">Technology Overview</a></li>
            <li><a href="#workshops" className="hover:text-white transition-colors">Certification Workshops</a></li>
            <li><a href="#video-vault" className="hover:text-white transition-colors">Surgical Video Vault</a></li>
            <li><a href="#equipment" className="hover:text-white transition-colors">Institutional Procurement</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-white">Important Notice</h4>
          <p className="text-sm text-primary-foreground/70 mb-4">
            For healthcare professional use only. Device pricing available upon institutional request only.
          </p>
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} GT Metabolic Solutions. All rights reserved. <br/>
            Distributed by ITEM Medical Technologies.
          </p>
        </div>
      </div>
    </footer>
  )
}
