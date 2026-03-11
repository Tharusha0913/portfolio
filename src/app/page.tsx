import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import PortfolioGrid from "@/sections/PortfolioGrid";
import Experience from "@/sections/Experience";
import Features from "@/sections/Features";
import AIBuilder from "@/sections/AIBuilder";
import FAQ from "@/sections/FAQ";
import CTA from "@/sections/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-brand-brown-light/30">
      <Navbar />
      <Hero />
      <PortfolioGrid />
      <Experience />
      <Features />
      <AIBuilder />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
