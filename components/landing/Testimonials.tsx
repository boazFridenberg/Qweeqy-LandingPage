"use client";

import { motion } from "framer-motion";

const QUOTES = [
  {
    quote: "הלקוחות סורקים לבד ורואים מידות. הצוות שלי הפסיק לרוץ למחסן על כל שאלה.",
    name: "רועי אזולאי",
    role: "בעלים, חנות נעליים בתל אביב",
  },
  {
    quote: "קליטת משלוח Nike לוקחת דקות. סורקים מק״ט, התמונה והדגם נכנסים, מדפיסים מדבקה.",
    name: "סיון ברק",
    role: "מנהלת סניף, חיפה",
  },
  {
    quote: "הקופה בסריקה רציפה שינתה את סוף השבוע. בלי מסכים מיותרים, בלי טעויות מלאי.",
    name: "איתי מזרחי",
    role: "שותף, רשת בוטיק",
  },
];

export function Testimonials() {
  return (
    <section className="px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="text-[12px] tracking-[0.16em] text-gold">מהשטח</p>
        <h2 className="mt-2 font-display text-3xl text-pearl sm:text-4xl">חנויות שכבר עובדות אחרת</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {QUOTES.map((item, index) => (
            <motion.blockquote
              key={item.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="flex flex-col justify-between rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
            >
              <p className="text-base leading-relaxed text-pearl/75">״{item.quote}״</p>
              <footer className="mt-8">
                <p className="text-sm text-pearl">{item.name}</p>
                <p className="text-[12px] text-pearl/40">{item.role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
