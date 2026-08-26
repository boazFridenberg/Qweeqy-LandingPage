"use client";

import { motion } from "framer-motion";

export function TimeSavings() {
  return (
    <section className="px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl sm:p-12">
        <p className="text-[12px] tracking-[0.16em] text-gold">כמה זמן אפשר לחסוך</p>
        <h2 className="mt-2 max-w-xl font-display text-3xl text-pearl sm:text-4xl">
          עד יותר משלוש שעות ביום — רק על בדיקות מידה
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-pearl/55">
          בדיקת מידה לוקחת בממוצע 2–4 דקות. בחנות עם כ־50 שאלות ביום, זה 100–200 דקות של חיפושים.
          המטרה: לצמצם את הזמן הזה ולאפשר לצוות להתמקד בלקוחות ובמכירות.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { stat: "2–4 דק׳", label: "בדיקת מידה ממוצעת" },
            { stat: "50", label: "שאלות על מידה ביום" },
            { stat: "3+ שעות", label: "שעלולות להתבזבז בכל יום" },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-2xl border border-white/10 bg-void/40 px-5 py-5"
            >
              <p className="text-2xl font-semibold text-gold">{item.stat}</p>
              <p className="mt-1 text-sm text-pearl/50">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
