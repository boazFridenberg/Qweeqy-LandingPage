"use client";

import { motion } from "framer-motion";
import { ScanQrCode, Smartphone, MonitorSmartphone } from "lucide-react";

const ENGINES = [
  {
    id: "customer",
    href: "#solution",
    icon: ScanQrCode,
    number: "01",
    title: "חוויית הלקוח בחנות",
    copy: "סריקת QR במצלמת הנייד — בלי אפליקציה. מידות, צבעים, מחיר ומלאי חי, והמלצות מתוך מה שיש בחנות.",
  },
  {
    id: "owner",
    href: "#owner",
    icon: Smartphone,
    number: "02",
    title: "אפליקציית בעל החנות והצוות",
    copy: "קליטת מק״ט אוטומטית, הדפסת מדבקות תרמיות, מסך מידות אחרונות ודשבורד מכירות — בנייד ובדפדפן.",
  },
  {
    id: "pos",
    href: "#pos",
    icon: MonitorSmartphone,
    number: "03",
    title: "קופה סופר-מהירה",
    copy: "סריקה רציפה במצלמה, בסורק פיזי או בהקלדה. הורדת מלאי אטומית, רטט וצליל אישור, בלי חיוב כפול.",
  },
];

export function Engines() {
  return (
    <section id="engines" className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-[12px] tracking-[0.16em] text-gold">שלושה מנועים. סנכרון מלא.</p>
        <h2 className="mt-2 max-w-2xl font-display text-3xl tracking-[0.02em] text-pearl sm:text-4xl">
          כל מה שקורה בחנות — במערכת אחת
        </h2>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {ENGINES.map((engine, index) => (
            <motion.a
              key={engine.id}
              href={engine.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition hover:border-gold/35 hover:bg-white/[0.06]"
            >
              <div className="flex items-center justify-between">
                <engine.icon className="text-gold" size={22} />
                <span className="text-[12px] text-pearl/30">{engine.number}</span>
              </div>
              <h3 className="mt-8 text-xl font-semibold text-pearl">{engine.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-pearl/55">{engine.copy}</p>
              <p className="mt-6 text-[12px] text-gold/80 group-hover:text-gold">לפרטים</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
