"use client";

import { motion } from "framer-motion";

const QUESTIONS = ["יש את זה במידה שלי?", "יש בצבע אחר?", "אפשר לבדוק במחסן?"];

export function Problem() {
  return (
    <section id="problem" className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-[12px] tracking-[0.16em] text-gold">הבעיה בחנות</p>
        <h2 className="mt-2 max-w-2xl font-display text-3xl text-pearl sm:text-4xl">
          כמה פעמים ביום הלקוח שואל — והמוכר רץ למחסן
        </h2>
        <div className="mt-8 flex flex-wrap gap-2">
          {QUESTIONS.map((question) => (
            <span
              key={question}
              className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-pearl/75"
            >
              ״{question}״
            </span>
          ))}
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "המוכר עוזב את החנות",
              copy: "הולך למחסן, מחפש את הפריט, וחוזר ללקוח. לפעמים אחרי כמה דקות מתברר שהמידה בכלל לא קיימת.",
            },
            {
              title: "הלקוח ממתין",
              copy: "כל דקת המתנה היא רגע שבו אפשר לאבד עניין — או מכירה.",
            },
            {
              title: "זמן ומכירות מתבזבזים",
              copy: "עובדים עסוקים בחיפושים במקום בשירות. מכירות הולכות לאיבוד בגלל מידה חסרה שלא גילו בזמן.",
            },
          ].map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
            >
              <p className="text-[12px] text-gold">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 text-lg font-semibold text-pearl">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-pearl/55">{item.copy}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
