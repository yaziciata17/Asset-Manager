import { Phone, Mail, User } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Brand */}
        <div>
          <span className="font-bold text-xl block mb-2">Magnetic Surgery Solutions</span>
          <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-sm">
            Advancing surgical innovation through sutureless Magnetic Compression Anastomosis.
            Excellence in training in partnership with Cerrahpaşa University Magnetic Surgery Training Center, Istanbul.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><a href="#overview" className="hover:text-white transition-colors">Technology Overview</a></li>
            <li><a href="#magdi" className="hover:text-white transition-colors">MagDI Procedure</a></li>
            <li><a href="#workshops" className="hover:text-white transition-colors">Certification Workshops</a></li>
            <li><a href="#video-vault" className="hover:text-white transition-colors">Surgical Video Center</a></li>
            <li><a href="#publications" className="hover:text-white transition-colors">Publications</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4 text-white">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-center gap-2">
              <User className="w-4 h-4 shrink-0 text-blue-300" />
              <span>Ata Yazıcı</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 shrink-0 text-blue-300" />
              <a href="tel:+905526235721" className="hover:text-white transition-colors">
                +90 552 623 5721
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 shrink-0 text-blue-300" />
              <a href="mailto:itemmedical@itemmedical.com" className="hover:text-white transition-colors">
                itemmedical@itemmedical.com
              </a>
            </li>
          </ul>
          <p className="text-xs text-primary-foreground/40 mt-6">
            © {new Date().getFullYear()} Magnetic Surgery Solutions. All rights reserved.<br />
            Distributed by ITEM Medical Technologies.
          </p>
        </div>

      </div>
    </footer>
  )
}
