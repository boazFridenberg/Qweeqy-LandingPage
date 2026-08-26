"use client";

import { Ltr } from "@/components/landing/Ltr";
import { CONTACT_EMAIL } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-12 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <Ltr className="text-lg font-semibold tracking-[0.22em] text-pearl">QWEEQY</Ltr>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-pearl/50">
            פחות לחפש. יותר למכור. מערכת לניהול מידות ומלאי בחנות הפיזית.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-pearl/60">
          <a href="#problem" className="hover:text-pearl">
            הבעיה
          </a>
          <a href="#solution" className="hover:text-pearl">
            הפתרון
          </a>
          <a href="#reasons" className="hover:text-pearl">
            יתרונות
          </a>
          <a href="#about" className="hover:text-pearl">
            אודות
          </a>
          <a href="#contact" className="hover:text-pearl">
            יצירת קשר
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-pearl">
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl text-[12px] text-pearl/30">
        © {new Date().getFullYear()} Qweeqy · מערכת הפעלה לחנות שלך
      </p>
      <p className="mx-auto mt-2 max-w-6xl text-[12px] text-pearl/30">
        המערכת פותחה על ידי בעז פרידנברג · מייל:{" "}
        <a href="mailto:boazdeveloper1@gmail.com" className="hover:text-pearl/50">
          <Ltr>boazdeveloper1@gmail.com</Ltr>
        </a>{" "}
        · טלפון:{" "}
        <a href="tel:0584256220" className="hover:text-pearl/50">
          <Ltr>0584256220</Ltr>
        </a>
      </p>
    </footer>
  );
}
