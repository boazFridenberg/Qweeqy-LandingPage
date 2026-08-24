"use client";

import { motion } from "framer-motion";
import { Camera, Keyboard, ScanBarcode, Vibrate } from "lucide-react";
import { Ltr } from "@/components/landing/Ltr";

const SCANS = [
  { icon: Camera, title: "מצלמת נייד / טאבלט" },
  { icon: ScanBarcode, title: "סורק ברקודים פיזי", note: "USB / Bluetooth" },
  { icon: Keyboard, title: "הקלדה ידנית" },
];

export function POS() {
  return (
    <section id="pos" className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="text-[12px] tracking-[0.16em] text-gold">מנוע 03 · POS Cashier · Web & Mobile</p>
          <h2 className="mt-2 font-display text-3xl text-pearl sm:text-4xl">קופה בלחיצה אפס</h2>
          <p className="mt-4 text-sm leading-relaxed text-pearl/55">
            הקופאי סורק את ה־<Ltr>QR</Ltr> שעל הנעל. המערכת מורידה מלאי באופן אטומי ב־
            <Ltr>Supabase</Ltr>, מפעילה רטט וצליל אישור, וממתינה 1.5 שניות לפני הסריקה הבאה — כדי
            למנוע חיוב כפול. סריקה רציפה, בלי מסכי ביניים.
          </p>
          <div className="mt-8 space-y-3">
            {SCANS.map((scan) => (
              <div
                key={scan.title}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3"
              >
                <scan.icon size={18} className="text-gold" />
                <div>
                  <p className="text-sm text-pearl">{scan.title}</p>
                  {scan.note && (
                    <p className="text-[12px] text-pearl/40">
                      <Ltr>{scan.note}</Ltr>
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
        >
          <div className="flex items-center justify-between">
            <p className="text-[11px] text-gold">מצב סריקה רציפה</p>
            <span className="inline-flex items-center gap-1 text-[11px] text-pearl/50">
              <Vibrate size={12} /> Haptics
            </span>
          </div>
          <div className="relative mt-6 overflow-hidden rounded-3xl border border-white/10 bg-void p-8">
            <div className="mx-auto h-40 w-40 rounded-2xl border border-gold/40 bg-gold/5">
              <motion.div
                className="h-0.5 w-full bg-gold shadow-[0_0_18px_#c4a574]"
                animate={{ y: [8, 150, 8] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <p className="mt-6 text-center text-sm text-pearl">נמכר · מלאי עודכן</p>
            <p className="mt-1 text-center text-[12px] text-pearl/40">
              <Ltr>SKU 0194253128471</Ltr> · מידה 42
            </p>
            <p className="mt-4 text-center text-[11px] text-gold">המתנה 1.5 שנ׳ לסריקה הבאה</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
