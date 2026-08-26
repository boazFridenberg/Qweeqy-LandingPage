"use client";

import { motion } from "framer-motion";
import { Footprints, Layers3, MapPin, QrCode, Rotate3d, Tag, Palette } from "lucide-react";
import { Ltr } from "@/components/landing/Ltr";

const POINTS = [
  {
    icon: QrCode,
    title: "QR על כל דגם",
    copy: "הלקוח סורק במצלמת הנייד ומגיע מיד לדף המוצר — בלי להוריד אפליקציה.",
  },
  {
    icon: Layers3,
    title: "מידות ומלאי בסניף",
    copy: "בדיוק אילו מידות קיימות עכשיו בחנות שבה הלקוח עומד — לא קטלוג כללי.",
  },
  {
    icon: Palette,
    title: "צבעים ומחיר",
    copy: "הצבעים הזמינים והמחיר מוצגים מיד, בלי לחפש תווית ובלי לשאול עובד.",
  },
  {
    icon: Footprints,
    title: "תצוגת 3D / AR",
    copy: "הדמיית הנעל בתלת־ממד ומציאות רבודה על הרגל — מדידה בלי להתפשט במסדרון.",
  },
  {
    icon: MapPin,
    title: "סניפים נוספים",
    copy: "אם המידה חסרה כאן, אפשר לבדוק זמינות בסניף אחר במקום לומר ״אין״.",
  },
  {
    icon: Tag,
    title: "המלצות במלאי",
    copy: "מוצר דומה שכן קיים במידה של הלקוח — כדי לא לאבד את המכירה.",
  },
];

export function CustomerScan() {
  return (
    <section id="solution" className="px-5 py-14 sm:px-8 sm:py-20">
      <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-2">
        <div>
          <p className="text-[12px] tracking-[0.16em] text-gold">הפתרון</p>
          <h2 className="mt-2 font-display text-3xl text-pearl sm:text-4xl">
            סריקה אחת. כל המידע על המוצר.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-pearl/80">
            לכל דגם בחנות יש <Ltr>QR Code</Ltr>. הלקוח סורק בטלפון ורואה מידות, צבעים, מחיר ומלאי —
            בלי אפליקציה, בלי המתנה, בלי לשאול אם יש 43.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {POINTS.map((point, index) => (
              <motion.article
                key={point.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-2xl border border-pearl/10 bg-surface p-5"
              >
                <point.icon size={18} className="text-gold" />
                <h3 className="mt-4 font-medium text-pearl">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-pearl/75">{point.copy}</p>
              </motion.article>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[1.8rem] border border-pearl/10 bg-surface p-6 shadow-[0_10px_32px_-18px_rgba(20,18,16,0.14)]"
        >
          <p className="text-[11px] text-pearl/65">תצוגת לקוח בנייד · בלי אפליקציה</p>
          <div className="mt-4 overflow-hidden rounded-3xl border border-pearl/10 bg-inset">
            <div className="flex items-center justify-between border-b border-pearl/10 px-4 py-3">
              <Ltr className="text-xs tracking-[0.18em] text-pearl">QWEEQY</Ltr>
              <span className="rounded-full bg-emerald-400/15 px-2 py-0.5 text-[10px] text-emerald-300">
                במלאי בסניף
              </span>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden bg-[#ebe6dc]">
              <img
                src="/images/samba-og-product.png"
                alt="Adidas Samba OG"
                className="h-full w-full object-cover object-center"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-inset via-transparent to-black/10" />
              <span className="absolute top-3 start-3 rounded-full border border-gold/35 bg-surface/80 px-2.5 py-1 text-[10px] tracking-wide text-gold backdrop-blur-md">
                תצוגת 3D
              </span>
              <span className="absolute bottom-3 end-3 flex h-8 w-8 items-center justify-center rounded-full border border-pearl/10 bg-surface text-gold backdrop-blur-md">
                <Rotate3d size={15} />
              </span>
              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                <span className="h-1.5 w-4 rounded-full bg-gold" />
                <span className="h-1.5 w-1.5 rounded-full bg-pearl/20" />
                <span className="h-1.5 w-1.5 rounded-full bg-pearl/20" />
              </div>
            </div>
            <div className="space-y-3 p-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[11px] text-gold">
                    <Ltr>Adidas</Ltr>
                  </p>
                  <p className="font-medium">
                    <Ltr>Samba OG</Ltr>
                  </p>
                </div>
                <p className="text-pearl">₪ 579</p>
              </div>
              <p className="text-[12px] text-pearl/65">צבעים בחנות הזו</p>
              <div className="flex gap-2">
                <span className="h-6 w-6 rounded-full border border-gold bg-stone-200" />
                <span className="h-6 w-6 rounded-full bg-black" />
                <span className="h-6 w-6 rounded-full bg-emerald-900 opacity-40" />
              </div>
              <p className="text-[12px] text-pearl/65">מידות זמינות</p>
              <div className="flex flex-wrap gap-1.5">
                {["40", "41", "42", "43"].map((size) => (
                  <span
                    key={size}
                    className={`rounded-md border px-2 py-1 text-[11px] ${
                      size === "43"
                        ? "border-gold/50 bg-gold/15 text-gold"
                        : "border-pearl/10 text-pearl/70"
                    }`}
                  >
                    {size}
                  </span>
                ))}
              </div>
              <button type="button" className="gold-cta w-full text-[12px]">
                מדידה ב־AR על הרגל
              </button>
              <p className="text-center text-[11px] text-pearl/55">לבדוק זמינות בסניפים נוספים</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
