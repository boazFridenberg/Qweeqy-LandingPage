"use client";

import { Ltr } from "@/components/landing/Ltr";

export function About() {
  return (
    <section id="about" className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl sm:p-12">
        <p className="text-[12px] tracking-[0.16em] text-gold">המטרה שלנו</p>
        <h2 className="mt-2 max-w-2xl font-display text-3xl text-pearl sm:text-4xl">
          פחות זמן בחיפוש. יותר זמן עם הלקוחות.
        </h2>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <p className="text-base leading-relaxed text-pearl/65">
            <Ltr>Qweeqy</Ltr> לא מחליפה את המוכר — היא נותנת לו כלי שעובד מהר וחכם יותר. הלקוח רואה
            מידות ומלאי בטלפון, והצוות נשאר ברצפה במקום לרוץ למחסן על כל שאלה.
          </p>
          <p className="text-base leading-relaxed text-pearl/65">
            התוצאה לחנות: פחות המתנה, פחות מכירות שאבודות בגלל מידה חסרה, ויותר הזדמנויות למכירה.
            הפכו את המלאי לנגיש — ללקוחות ולעובדים.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { stat: "פחות", label: "זמן בחיפוש אחר מידות" },
            { stat: "יותר", label: "זמן עם הלקוחות ברצפה" },
            { stat: "יותר", label: "הזדמנויות למכירה" },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-white/10 bg-void/40 px-5 py-4">
              <p className="text-2xl font-semibold text-gold">{item.stat}</p>
              <p className="mt-1 text-sm text-pearl/50">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
