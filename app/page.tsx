import Navbar from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="noise-overlay" />

      <Navbar />

      <main>
        <Hero />
        <Services />
        <About />
        <Pricing />
        <HowItWorks />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
