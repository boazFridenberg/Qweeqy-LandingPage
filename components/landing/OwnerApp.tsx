"use client";

import { motion } from "framer-motion";
import { Barcode, LayoutDashboard, Printer, ScanSearch } from "lucide-react";
import { Ltr } from "@/components/landing/Ltr";

const FEATURES = [
  {
    icon: ScanSearch,
    title: "קליטת מלאי חכמה",
    copy: "סורקים או מקלידים מק״ט (SKU/EAN). המערכת מושכת מאגרי ברקודים בינלאומיים את המותג, הדגם, התיאור והתמונה — ומחכה רק למידות ולמחיר.",
  },
  {
    icon: Printer,
    title: "הדפסת מדבקות QR",
    copy: "מדבקות תרמיות בגודל סטנדרטי 50×30 מ״מ: QR, מחיר ב־₪, מותג, דגם, צבע ומידה.",
  },
  {
    icon: Barcode,
    title: "מסך מידות אחרונות",
    copy: " כל הנעליים שנשארה מהן כמות קטנה ואתה רוצה לסיים איתה אתה מכניס למאגר מידות אחרונות, למשל רק מידה 43. מושלם למבצעים.",
  },
  {
    icon: LayoutDashboard,
    title: "דשבורד ניהולי",
    copy: "אילו דגמים נסרקים, אילו מידות בודקים הלקוחות, מה חסר במלאי, ומדדי מכירות — כדי לקבל החלטות רכש טובות יותר.",
  },
];

export function OwnerApp() {
  return (
    <section id="owner" className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-[12px] tracking-[0.16em] text-gold">מנוע 02 · Mobile App + Web Dashboard</p>
        <h2 className="mt-2 max-w-2xl font-display text-3xl text-pearl sm:text-4xl">
          הכלים של בעל החנות והצוות
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-pearl/80">
          במקום להקליד ידנית כל <Ltr>Nike</Ltr> וכל <Ltr>Adidas</Ltr>, המערכת ממלאת את הטופס לבד.
          אתם מגדירים מחיר ומידות — ומדפיסים מדבקה.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {FEATURES.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="rounded-[1.5rem] border border-pearl/10 bg-surface p-6"
            >
              <feature.icon size={20} className="text-gold" />
              <h3 className="mt-5 text-lg font-semibold text-pearl">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-pearl/80">{feature.copy}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
