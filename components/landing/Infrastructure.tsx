"use client";

import { motion } from "framer-motion";
import { Languages, LockKeyhole, ShieldCheck } from "lucide-react";
import { Ltr } from "@/components/landing/Ltr";

const ITEMS = [
  {
    icon: ShieldCheck,
    title: "אבטחה ברמה גבוהה",
    copy: "הצפנה, הרשאות גישה מדורגות, והגנה על נתוני המלאי והמכירות של החנות. רק הצוות שלכם רואה את המידע.",
  },
  {
    icon: LockKeyhole,
    title: "יציבות שאפשר לסמוך עליה",
    copy: "עדכון מלאי אטומי בכל מכירה, בלי כפילויות ובלי הפתעות בסוף היום. המערכת בנויה לעמוד בעומס של שעות שיא.",
  },
  {
    icon: Languages,
    title: "עברית ו־RTL מלאים",
    copy: "הממשק מיושר ימין-לשמאל עם הפונט Heebo. שמות מותגים, דגמים ומק״טים נשארים באנגלית ובכיוון LTR.",
  },
];

export function Infrastructure() {
  return (
    <section id="product" className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-[12px] tracking-[0.16em] text-gold">תשתית ואבטחה</p>
        <h2 className="mt-2 max-w-2xl font-display text-3xl text-pearl sm:text-4xl">
          המלאי והמכירות שלכם — מוגנים.
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {ITEMS.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
            >
              <item.icon size={20} className="text-gold" />
              <h3 className="mt-5 text-lg font-semibold text-pearl">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-pearl/55">{item.copy}</p>
            </motion.article>
          ))}
        </div>
        
      </div>
    </section>
  );
}
