import { Nav } from "@/components/wt/Nav";
import { Hero } from "@/components/wt/Hero";
import { WhyWhiteTail } from "@/components/wt/WhyWhiteTail";
import { Features } from "@/components/wt/Features";
import { StateEngine } from "@/components/wt/StateEngine";
import { Pricing } from "@/components/wt/Pricing";
import { Testimonials } from "@/components/wt/Testimonials";
import { FAQ } from "@/components/wt/FAQ";
import { CTA } from "@/components/wt/CTA";
import { Footer } from "@/components/wt/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <WhyWhiteTail />
      <Features />
      <StateEngine />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
