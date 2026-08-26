"use client";

import { motion } from "framer-motion";
import { ArrowLeft, QrCode } from "lucide-react";
import { Ltr } from "@/components/landing/Ltr";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pb-12 pt-28 sm:px-8 sm:pt-36 lg:pb-16">
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 text-[12px] tracking-[0.16em] text-gold"
          >
            מערכת לחנות הפיזית
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="font-display text-4xl font-extrabold leading-[1.15] text-pearl sm:text-5xl lg:text-6xl"
          >
            פחות לחפש.
            <br />
            יותר למכור.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-pearl/80 sm:text-lg"
          >
            הלקוח סורק <Ltr>QR</Ltr> במצלמה — בלי אפליקציה — ורואה מידות ומלאי. המוכר נשאר ברצפה.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#contact" className="gold-cta inline-flex items-center gap-2">
              למידע ורכישה
              <ArrowLeft size={16} />
            </a>
            <a
              href="#solution"
              className="inline-flex items-center rounded-full border border-pearl/15 bg-surface px-5 py-3 text-[13px] text-pearl/80 transition hover:border-gold/40 hover:text-pearl"
            >
              איך זה עובד
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.12, duration: 0.6 }}
          className="relative"
        >
          <HeroMock />
        </motion.div>
      </div>
    </section>
  );
}

function HeroMock() {
  return (
    <div className="relative mx-auto max-w-md">
      <div className="relative overflow-hidden rounded-[2rem] border border-pearl/10 bg-surface p-5 shadow-[0_18px_50px_-24px_rgba(20,18,16,0.22)]">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-[11px] text-gold">הלקוח סורק בחנות</p>
          <span className="text-[11px] text-pearl/70">בלי אפליקציה</span>
        </div>
        <div className="grid grid-cols-[1fr_auto] gap-4 rounded-2xl border border-pearl/10 bg-inset p-4">
          <div>
            <p className="text-[11px] text-pearl/70">דגם</p>
            <p className="mt-1 font-medium">
              <Ltr>Nike Air Max 90</Ltr>
            </p>
            <p className="mt-3 text-[11px] text-pearl/70">מידות במלאי</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {["40", "41", "42", "43", "44"].map((size) => (
                <span
                  key={size}
                  className={`rounded-md border px-2 py-1 text-[11px] ${
                    size === "43"
                      ? "border-gold/50 bg-gold/15 text-gold"
                      : "border-pearl/10 text-pearl/80"
                  }`}
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center rounded-xl border border-gold/30 bg-gold/10 p-3">
            <QrCode className="text-gold" size={56} />
            <p className="mt-2 text-[10px] text-gold">סריקה</p>
          </div>
        </div>
      </div>
    </div>
  );
}
