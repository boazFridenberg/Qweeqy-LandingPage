"use client";

import { About } from "@/components/landing/About";
import { Contact } from "@/components/landing/Contact";
import { CustomerScan } from "@/components/landing/CustomerScan";
import { Engines } from "@/components/landing/Engines";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Infrastructure } from "@/components/landing/Infrastructure";
import { OwnerApp } from "@/components/landing/OwnerApp";
import { POS } from "@/components/landing/POS";
import { Testimonials } from "@/components/landing/Testimonials";

export function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Engines />
        <CustomerScan />
        <OwnerApp />
        <POS />
        <Infrastructure />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
