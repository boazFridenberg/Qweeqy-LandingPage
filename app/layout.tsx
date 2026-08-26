import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Qweeqy · פחות לחפש. יותר למכור.",
  description:
    "מערכת חכמה לניהול מידות ומלאי בחנות הפיזית. הלקוח סורק QR בלי אפליקציה, רואה מידות וצבעים במלאי, ובעל החנות מקבל תמונה ברורה של מה שמחפשים בחנות.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${heebo.variable} h-full bg-void antialiased`}
    >
      <body className="min-h-full bg-void font-sans text-pearl">{children}</body>
    </html>
  );
}
