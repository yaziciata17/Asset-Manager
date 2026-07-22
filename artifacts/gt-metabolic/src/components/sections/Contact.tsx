import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Phone, Mail, User, MessageCircle } from "lucide-react"

const CONTACT = {
  name: "Ata Yazıcı",
  phone: "+90 552 623 5721",
  phoneTel: "+905526235721",
  whatsapp: "905526235721",
  email: "itemmedical@itemmedical.com",
}

export function Contact() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="contact">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-slate-900 z-0" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-12 text-white">
          <h2 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-3">
            Get in Touch
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Contact Us
          </h3>
          <p className="text-slate-300 text-base max-w-xl mx-auto">
            For workshop enrollment, institutional inquiries, or equipment information —
            reach our team directly.
          </p>
        </div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">

            {/* Identity */}
            <div className="bg-primary flex flex-col items-center justify-center py-14 px-10 text-center">
              <div className="w-20 h-20 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center mb-5 text-2xl font-bold text-white">
                AY
              </div>
              <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-1">
                Your Contact
              </p>
              <h4 className="text-xl font-bold text-white mb-1">{CONTACT.name}</h4>
              <p className="text-blue-300/70 text-sm">ITEM Medical Technologies</p>
            </div>

            {/* Actions */}
            <div className="flex flex-col justify-center px-10 py-12 gap-5">

              <a
                href={`https://wa.me/${CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-green-50 hover:bg-green-100 border border-green-100 hover:border-green-200 rounded-xl px-5 py-4 transition-all duration-150"
              >
                <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-green-700 uppercase tracking-widest mb-0.5">
                    WhatsApp
                  </p>
                  <p className="text-sm font-semibold text-slate-800 group-hover:text-green-800">
                    {CONTACT.phone}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${CONTACT.phoneTel}`}
                className="group flex items-center gap-4 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl px-5 py-4 transition-all duration-150"
              >
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-0.5">
                    Phone
                  </p>
                  <p className="text-sm font-semibold text-slate-800 group-hover:text-primary">
                    {CONTACT.phone}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${CONTACT.email}`}
                className="group flex items-center gap-4 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl px-5 py-4 transition-all duration-150"
              >
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-0.5">
                    Email
                  </p>
                  <p className="text-sm font-semibold text-slate-800 group-hover:text-primary break-all">
                    {CONTACT.email}
                  </p>
                </div>
              </a>

            </div>
          </div>
        </motion.div>

        <p className="text-center text-xs text-slate-400 mt-6">
          For healthcare professionals only. Device information available upon institutional request.
        </p>

      </div>
    </section>
  )
}
