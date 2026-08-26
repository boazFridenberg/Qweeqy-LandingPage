"use client";

import { motion } from "framer-motion";

const ITEMS = [
  {
    problem: "״יש את זה במידה שלי?״",
    solution: "הלקוח סורק ורואה תשובה מיד — בלי לחכות ובלי לעצור עובד.",
  },
  {
    problem: "המוכר רץ למחסן",
    solution: "המלאי על המסך. הצוות נשאר בחנות וממשיך למכור.",
  },
  {
    problem: "מידה חסרה — והלקוח עוזב",
    solution: "בודקים סניף אחר, מציעים דגם דומה, או שולחים התראה כשחוזר.",
  },
];

export function Problem() {
  return (
    <section id="problems" className="px-5 py-14 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-[12px] tracking-[0.16em] text-gold">02</p>
        <h2 className="mt-2 font-display text-3xl text-pearl sm:text-4xl">פותר בעיות</h2>
        <div className="mt-8 grid gap-3">
          {ITEMS.map((item, index) => (
            <motion.article
              key={item.problem}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="grid gap-1 rounded-2xl border border-pearl/10 bg-surface px-5 py-5 shadow-[0_10px_32px_-18px_rgba(20,18,16,0.14)] sm:grid-cols-[auto_1fr_1.4fr] sm:items-baseline sm:gap-6"
            >
              <p className="text-[12px] text-gold">{index + 1}.</p>
              <h3 className="font-semibold text-pearl">{item.problem}</h3>
              <p className="text-sm leading-relaxed text-pearl/80">{item.solution}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
