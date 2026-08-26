"use client";

import { Advantages } from "@/components/landing/Advantages";
import { Contact } from "@/components/landing/Contact";
import { CustomerScan } from "@/components/landing/CustomerScan";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { OwnerApp } from "@/components/landing/OwnerApp";
import { Pricing } from "@/components/landing/Pricing";
import { Problem } from "@/components/landing/Problem";

export function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CustomerScan />
        <OwnerApp />
        <Advantages />
        <Problem />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
