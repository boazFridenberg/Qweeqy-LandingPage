"use client";

import { Ltr } from "@/components/landing/Ltr";

export function About() {
  return (
    <section id="about" className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl sm:p-12">
        <p className="text-[12px] tracking-[0.16em] text-gold">אודות</p>
        <h2 className="mt-2 max-w-2xl font-display text-3xl text-pearl sm:text-4xl">
          למה <Ltr>Qweeqy</Ltr> קיימת
        </h2>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <p className="text-base leading-relaxed text-pearl/65">
            חנות נעליים חיה על וריאנטים: דגם, צבע, מידה. הלקוח שואל אם יש 43 בשחור, העובד רץ למחסן,
            והמלאי באקסל לא מעודכן. בנינו פלטפורמה שמביאה את חוויית האונליין וה־AI לתוך החנות הפיזית.
          </p>
          <p className="text-base leading-relaxed text-pearl/65">
            הלקוח מקבל שירות עצמי מהיר ושקוף בטלפון שלו. החנות מקבלת כלי ניהול, קופה וקליטת מלאי
            אוטומטית שחוסכים עבודה ידנית. אנחנו לא חנות נעליים — אנחנו מערכת ההפעלה של החנות שלכם.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { stat: "3", label: "מנועים מסונכרנים" },
            { stat: "0", label: "אפליקציות שהלקוח צריך להוריד" },
            { stat: "1.5 שנ׳", label: "הגנה מחיוב כפול בקופה" },
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
