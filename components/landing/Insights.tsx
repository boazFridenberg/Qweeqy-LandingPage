"use client";

import { motion } from "framer-motion";

const BENEFITS = [
  "חיסכון בזמן העובדים",
  "שירות מהיר יותר ללקוח",
  "פחות חיפושים מיותרים במחסן",
  "יותר זמן של העובדים למכירה",
  "שליטה טובה יותר במידות ובמלאי",
  "זיהוי מידות ודגמים שהלקוחות מחפשים",
  "פחות מכירות שאבודות בגלל חוסר במידה",
];

const INSIGHTS = [
  "איזה דגם נסרק הכי הרבה?",
  "איזו מידה הלקוחות בודקים הכי הרבה?",
  "איזה פריט מחפשים — אבל חסר במלאי?",
  "כמה סריקות היו היום?",
];

export function Insights() {
  return (
    <section id="insights" className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
        <div>
          <p className="text-[12px] tracking-[0.16em] text-gold">יתרונות לבעל החנות</p>
          <h2 className="mt-2 font-display text-3xl text-pearl sm:text-4xl">
            לא רק שירות ללקוח — גם שליטה טובה יותר בחנות
          </h2>
          <ul className="mt-8 space-y-3">
            {BENEFITS.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-pearl/10 bg-surface px-4 py-3 text-sm text-pearl/75"
              >
                <span className="mt-0.5 text-gold">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[1.8rem] border border-pearl/10 bg-surface p-7"
        >
          <p className="text-[12px] tracking-[0.16em] text-gold">מידע שמניע החלטות</p>
          <h3 className="mt-2 text-xl font-semibold text-pearl">נתונים שעוזרים לנהל מלאי ורכש</h3>
          <p className="mt-3 text-sm leading-relaxed text-pearl/80">
            המערכת משרתת את הלקוח ברצפה — ומציגה לבעל החנות מה באמת קורה: סריקות, מידות שחיפשו, וחסרים.
          </p>
          <div className="mt-6 space-y-2">
            {INSIGHTS.map((item) => (
              <p
                key={item}
                className="rounded-xl border border-pearl/10 bg-inset px-4 py-3 text-sm text-pearl/70"
              >
                {item}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
