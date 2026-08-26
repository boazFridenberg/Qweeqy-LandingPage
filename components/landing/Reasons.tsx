"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Clock3,
  Eye,
  LayoutGrid,
  QrCode,
  ScanLine,
  SearchX,
  ShoppingBag,
  Target,
  Users,
} from "lucide-react";

const REASONS = [
  {
    icon: Clock3,
    title: "חוסכים זמן בחיפוש מידות",
    copy: "הלקוח רואה מיד אילו מידות וצבעים זמינים. המוכר לא רץ למחסן רק כדי לבדוק מלאי.",
  },
  {
    icon: ScanLine,
    title: "הלקוח בודק מידה לבד",
    copy: "סריקה אחת במצלמה — והלקוח רואה אם המידה קיימת, בלי לעצור עובד ובלי לחכות.",
  },
  {
    icon: SearchX,
    title: "פחות מכירות הולכות לאיבוד",
    copy: "אין את המידה? מציעים דגם דומה, צבע אחר, או בודקים סניף נוסף — במקום שהלקוח פשוט יעזוב.",
  },
  {
    icon: LayoutGrid,
    title: "כל המלאי מול העיניים",
    copy: "מידות, צבעים וכמויות במקום אחד. הצוות יודע מה קיים בלי להתחיל לחפש.",
  },
  {
    icon: Users,
    title: "שירות מהיר יותר",
    copy: "פחות המתנה ופחות ״יש את זה במידה שלי?״. הלקוח מקבל תשובה, והצוות מתמקד בשירות.",
  },
  {
    icon: Eye,
    title: "יודעים מה הלקוחות באמת מחפשים",
    copy: "אילו דגמים נסרקים, אילו מידות בודקים, ומה מחפשים גם כשחסר במלאי.",
  },
  {
    icon: BarChart3,
    title: "החלטות מלאי חכמות יותר",
    copy: "אם מידה מסוימת חסרה שוב ושוב — בעל החנות רואה את זה, ומשפר את הרכש הבא.",
  },
  {
    icon: Target,
    title: "יותר יעילות מכל עובד",
    copy: "פחות דקות על בדיקות במחסן. אפשר לשרת יותר לקוחות באותו צוות.",
  },
  {
    icon: QrCode,
    title: "חוויית קנייה חדשנית",
    copy: "QR על המוצר מחבר את החנות הפיזית לחוויה דיגיטלית — בלי שהלקוח מוריד אפליקציה.",
  },
  {
    icon: ShoppingBag,
    title: "יותר הזדמנויות למכירה",
    copy: "כל המערכת בנויה למטרה אחת: לחסוך זמן, לשפר שירות, ולהפוך יותר ביקורים למכירה.",
  },
];

export function Reasons() {
  return (
    <section id="reasons" className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-[12px] tracking-[0.16em] text-gold">10 סיבות</p>
        <h2 className="mt-2 max-w-2xl font-display text-3xl text-pearl sm:text-4xl">
          להפוך את החנות שלכם לחכמה יותר
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
          {REASONS.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 4) * 0.05 }}
              className="flex gap-4 rounded-[1.5rem] border border-pearl/10 bg-surface p-5"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold">
                <item.icon size={18} />
              </span>
              <div>
                <h3 className="font-semibold text-pearl">
                  <span className="ms-0 text-[12px] text-gold">{index + 1}.</span> {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-pearl/80">{item.copy}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
