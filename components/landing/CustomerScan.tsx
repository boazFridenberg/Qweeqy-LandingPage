"use client";

import { motion } from "framer-motion";
import { Box, Footprints, Layers3, QrCode } from "lucide-react";
import { Ltr } from "@/components/landing/Ltr";

const POINTS = [
  {
    icon: QrCode,
    title: "אפס חיכוך",
    copy: "מדבקת QR על ברקוד הנעל. הלקוח סורק במצלמת הנייד הרגילה ומגיע מיד לאתר — בלי להוריד אפליקציה.",
  },
  {
    icon: Layers3,
    title: "זמינות מלאי בלייב",
    copy: "בדיוק אילו מידות וצבעים קיימים עכשיו במלאי של החנות הספציפית שבה הלקוח עומד.",
  },
  {
    icon: Footprints,
    title: "תצוגת 3D / AR",
    copy: "הדמיית הנעל בתלת־ממד ומציאות רבודה על הרגל — מדידה בלי להתפשט במסדרון.",
  },
  {
    icon: Box,
    title: "המלצות חכמות",
    copy: "נעליים דומות שקיימות במלאי באותה חנות. לא קטלוג גלובלי — מה שיש על המדף עכשיו.",
  },
];

export function CustomerScan() {
  return (
    <section id="customer" className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-2">
        <div>
          <p className="text-[12px] tracking-[0.16em] text-gold">מנוע 01 · Web בלבד</p>
          <h2 className="mt-2 font-display text-3xl text-pearl sm:text-4xl">
            הלקוח סורק. מקבל שירות עצמי.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-pearl/55">
            חוויית <Ltr>Customer Scan</Ltr> מביאה את השקיפות של האונליין לרצפת המכירה — בלי אפליקציה,
            בלי תור, ובלי לשאול עובד אם יש מידה 43.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {POINTS.map((point, index) => (
              <motion.article
                key={point.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <point.icon size={18} className="text-gold" />
                <h3 className="mt-4 font-medium text-pearl">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-pearl/50">{point.copy}</p>
              </motion.article>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
        >
          <p className="text-[11px] text-pearl/40">תצוגת לקוח בנייד</p>
          <div className="mt-4 overflow-hidden rounded-3xl border border-white/10 bg-void">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <Ltr className="text-xs tracking-[0.18em] text-pearl">QWEEQY</Ltr>
              <span className="rounded-full bg-emerald-400/15 px-2 py-0.5 text-[10px] text-emerald-300">
                במלאי בחנות
              </span>
            </div>
            <div className="aspect-[4/3] bg-gradient-to-b from-white/10 to-black/40 p-8">
              <div className="flex h-full items-end justify-center">
                <div className="h-28 w-40 rounded-[40%] bg-gradient-to-l from-zinc-200 to-zinc-500 opacity-80 blur-[1px]" />
              </div>
            </div>
            <div className="space-y-3 p-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[11px] text-gold">
                    <Ltr>Adidas</Ltr>
                  </p>
                  <p className="font-medium">
                    <Ltr>Samba OG</Ltr>
                  </p>
                </div>
                <p className="text-pearl">₪ 579</p>
              </div>
              <p className="text-[12px] text-pearl/40">צבעים בחנות הזו</p>
              <div className="flex gap-2">
                <span className="h-6 w-6 rounded-full border border-gold bg-stone-200" />
                <span className="h-6 w-6 rounded-full bg-black" />
                <span className="h-6 w-6 rounded-full bg-emerald-900 opacity-40" />
              </div>
              <button type="button" className="gold-cta w-full text-[12px]">
                מדידה ב־AR על הרגל
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
