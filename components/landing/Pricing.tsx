"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export function Pricing() {
  return (
    <section id="pricing" className="px-5 py-14 sm:px-8 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-6xl rounded-[2rem] border border-pearl/10 bg-surface px-6 py-10 shadow-[0_18px_50px_-24px_rgba(20,18,16,0.18)] sm:px-12 sm:py-14"
      >
        <p className="text-[12px] tracking-[0.16em] text-gold">03</p>
        <h2 className="mt-2 max-w-2xl font-display text-3xl text-pearl sm:text-4xl">
          מחיר פשוט. ערך שמכניס הרבה.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-pearl/80">
          בלי חבילות מסובכות ובלי אותיות קטנות. תשלום אחד ברור — ומקבלים מערכת שמחזירה זמן ברצפה,
          שליטה במלאי, ומכירות שהיו הולכות לאיבוד.
        </p>
        <a href="#contact" className="gold-cta mt-8 inline-flex items-center gap-2">
          לשיחה קצרה על המחיר
          <ArrowLeft size={16} />
        </a>
      </motion.div>
    </section>
  );
}
