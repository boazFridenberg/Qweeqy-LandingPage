"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Ltr } from "@/components/landing/Ltr";

const NAV_LINKS = [
  { href: "#solution", label: "סריקה" },
  { href: "#owner", label: "כלים" },
  { href: "#advantages", label: "יתרונות" },
  { href: "#problems", label: "פותר בעיות" },
  { href: "#pricing", label: "מחיר" },
  { href: "#contact", label: "הדגמה" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
      <nav className="pointer-events-auto mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/15 bg-white/10 px-4 py-2.5 shadow-[0_12px_40px_-16px_rgba(76,29,149,0.45)] backdrop-blur-xl sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-[11px] font-bold text-gold">
            Q
          </span>
          <Ltr className="text-sm font-semibold tracking-[0.22em] text-pearl">QWEEQY</Ltr>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-pearl/85 transition hover:text-pearl"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a href="#contact" className="gold-cta hidden px-5 py-2 text-[12px] sm:inline-flex">
            למידע ורכישה
          </a>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-pearl/10 text-pearl md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="תפריט"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="pointer-events-auto mx-auto mt-2 max-w-6xl rounded-3xl border border-white/15 bg-[#1c0c33]/90 p-5 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl border border-pearl/10 px-4 py-3 text-sm text-pearl/80"
                >
                  {link.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="gold-cta mt-2">
                למידע ורכישה
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
