"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Loader2, Mail, Phone } from "lucide-react";
import { Ltr } from "@/components/landing/Ltr";
import { CONTACT_EMAIL } from "@/lib/contact";
import type { ContactFormValues } from "@/lib/types";

const INITIAL: ContactFormValues = {
  name: "",
  storeName: "",
  city: "",
  phone: "",
  email: "",
  message: "",
};

export function Contact() {
  const [values, setValues] = useState(INITIAL);
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [nextUrl, setNextUrl] = useState("");

  useEffect(() => {
    const origin = window.location.origin;
    setNextUrl(`${origin}/?contact=sent#contact`);
    const params = new URLSearchParams(window.location.search);
    if (params.get("contact") === "sent") {
      setSent(true);
    }
  }, []);

  function update<K extends keyof ContactFormValues>(key: K, value: string) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  return (
    <section id="contact" className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="text-[12px] tracking-[0.16em] text-gold">יצירת קשר</p>
          <h2 className="mt-2 font-display text-3xl text-pearl sm:text-4xl">
            רוצים את Qweeqy בחנות שלכם?
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-pearl/55">
            השאירו פרטים ונחזור אליכם עם הדגמה ותמחור לחנות שלכם. אפשר גם לכתוב ישירות למייל או להתקשר.
          </p>
          <div className="mt-8 space-y-3 text-sm">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-pearl/80 hover:border-gold/40"
            >
              <Mail size={16} className="text-gold" />
              <span>
                מייל: <Ltr>{CONTACT_EMAIL}</Ltr>
              </span>
            </a>
            <a
              href="tel:0526488443"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-pearl/80 hover:border-gold/40"
            >
              <Phone size={16} className="text-gold" />
              <span>
                טלפון: <Ltr>0526488443</Ltr>
              </span>
            </a>
          </div>
        </div>

        <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl sm:p-8">
          {sent ? (
            <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
              <CheckCircle2 className="text-gold" size={40} />
              <p className="mt-4 text-xl font-semibold text-pearl">הפנייה נשלחה</p>
              <p className="mt-2 max-w-sm text-sm text-pearl/55">
                תודה. בדקו את תיבת {CONTACT_EMAIL} (וגם ספאם). בפעם הראשונה יש לאשר מייל מ־FormSubmit.
              </p>
              <button
                type="button"
                className="mt-6 text-sm text-gold"
                onClick={() => {
                  setSent(false);
                  setValues(INITIAL);
                  window.history.replaceState(null, "", "/#contact");
                }}
              >
                שליחת פנייה נוספת
              </button>
            </div>
          ) : (
            <form
              action={`https://formsubmit.co/${CONTACT_EMAIL}`}
              method="POST"
              className="grid gap-3 sm:grid-cols-2"
              onSubmit={() => setSubmitting(true)}
            >
              <input type="hidden" name="_subject" value={`פנייה לרכישת Qweeqy — ${values.storeName}`} />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value={nextUrl} />
              <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

              <Field
                label="שם מלא"
                name="name"
                value={values.name}
                onChange={(v) => update("name", v)}
                required
              />
              <Field
                label="שם החנות"
                name="store"
                value={values.storeName}
                onChange={(v) => update("storeName", v)}
                required
              />
              <Field label="עיר" name="city" value={values.city} onChange={(v) => update("city", v)} />
              <Field
                label="טלפון"
                name="phone"
                type="tel"
                value={values.phone}
                onChange={(v) => update("phone", v)}
                required
              />
              <div className="sm:col-span-2">
                <Field
                  label="אימייל"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={(v) => update("email", v)}
                  required
                />
              </div>
              <label className="sm:col-span-2">
                <span className="mb-1.5 block text-[12px] text-pearl/40">ספרו על החנות</span>
                <textarea
                  name="message"
                  rows={4}
                  value={values.message}
                  onChange={(event) => update("message", event.target.value)}
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-pearl outline-none focus:border-gold/40"
                  placeholder="מספר סניפים, מותגים, מה כואב היום בניהול המלאי..."
                />
              </label>
              <button type="submit" disabled={submitting || !nextUrl} className="gold-cta sm:col-span-2">
                {submitting ? (
                  <span className="inline-flex items-center gap-2">
                    <Loader2 size={14} className="animate-spin" /> שולחים
                  </span>
                ) : (
                  "שליחת פנייה לרכישה"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[12px] text-pearl/40">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-pearl outline-none focus:border-gold/40"
      />
    </label>
  );
}
