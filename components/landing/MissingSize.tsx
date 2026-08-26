"use client";

import { motion } from "framer-motion";
import { BellRing, MapPin, PackageSearch, Sparkles, Warehouse } from "lucide-react";

const OPTIONS = [
  { icon: MapPin, title: "בדיקה בסניף אחר", copy: "המידה קיימת במקום אחר? הלקוח לא חייב לעזוב בידיים ריקות." },
  { icon: Warehouse, title: "הזמנה מהמחסן", copy: "אם הפריט במלאי עורפי — אפשר להזמין במקום לומר ״אין״." },
  { icon: PackageSearch, title: "שמירת הפריט", copy: "שומרים את הדגם ללקוח עד שהוא מגיע לאסוף." },
  { icon: Sparkles, title: "מוצר דומה במידה שלו", copy: "המלצה מתוך מה שבאמת קיים עכשיו על הרצפה." },
  { icon: BellRing, title: "התראה כשחוזר למלאי", copy: "כשהמידה חוזרת — הלקוח מקבל עדכון, והמכירה לא אובדת." },
];

export function MissingSize() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-[12px] tracking-[0.16em] text-gold">מה קורה כשאין מידה</p>
        <h2 className="mt-2 max-w-2xl font-display text-3xl text-pearl sm:text-4xl">
          במקום ״מצטערים, אין״ — שומרים על הלקוח
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-pearl/55">
          מידה חסרה לא חייבת להיות סוף השיחה. המערכת עוזרת להציע חלופה, סניף אחר או מעקב — כדי לא
          לאבד מכירה בגלל חוסר נקודתי.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {OPTIONS.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
            >
              <item.icon size={18} className="text-gold" />
              <h3 className="mt-4 font-semibold text-pearl">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-pearl/55">{item.copy}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
