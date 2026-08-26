"use client";

import { About } from "@/components/landing/About";
import { Contact } from "@/components/landing/Contact";
import { CustomerScan } from "@/components/landing/CustomerScan";
import { Engines } from "@/components/landing/Engines";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Infrastructure } from "@/components/landing/Infrastructure";
import { Insights } from "@/components/landing/Insights";
import { MissingSize } from "@/components/landing/MissingSize";
import { OwnerApp } from "@/components/landing/OwnerApp";
import { POS } from "@/components/landing/POS";
import { Problem } from "@/components/landing/Problem";
import { Reasons } from "@/components/landing/Reasons";
import { TimeSavings } from "@/components/landing/TimeSavings";

export function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <CustomerScan />
        <TimeSavings />
        <MissingSize />
        <Reasons />
        <Insights />
        <Engines />
        <OwnerApp />
        <POS />
        <Infrastructure />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
