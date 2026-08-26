"use client";

import { motion } from "framer-motion";

const ITEMS = [
  {
    title: "הלקוח בודק לבד",
    copy: "סריקת QR במצלמה. מידות, צבעים ומלאי — בלי אפליקציה ובלי להמתין למוכר.",
  },
  {
    title: "הצוות נשאר בחנות",
    copy: "אין ריצה למחסן על כל שאלה. יותר זמן לשרת ולמכור.",
  },
  {
    title: "רואים מה באמת מחפשים",
    copy: "אילו דגמים נסרקים, אילו מידות חסרות, ומה כדאי להזמין.",
  },
  {
    title: "פחות לקוחות שעוזבים",
    copy: "כשחסר — מציעים חלופה או סניף אחר. המכירה לא נגמרת ב״אין״.",
  },
  {
    title: "קופה מהירה",
    copy: "סריקה אחת בקופה — המלאי מתעדכן מיד, בלי חיוב כפול ובלי מסכי ביניים.",
  },
  {
    title: "קליטת מלאי בלי הקלדה",
    copy: "סורקים מק״ט, המערכת ממלאת מותג ודגם. נשאר רק מחיר, מידות, ומדבקת QR.",
  },
];

export function Advantages() {
  return (
    <section id="advantages" className="px-5 py-14 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-[12px] tracking-[0.16em] text-gold">01</p>
        <h2 className="mt-2 font-display text-3xl text-pearl sm:text-4xl">יתרונות</h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {ITEMS.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-2xl border border-pearl/10 bg-surface p-5 shadow-[0_10px_32px_-18px_rgba(20,18,16,0.14)]"
            >
              <p className="text-[12px] text-gold">{index + 1}.</p>
              <h3 className="mt-1 text-lg font-semibold text-pearl">{item.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-pearl/80">{item.copy}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
