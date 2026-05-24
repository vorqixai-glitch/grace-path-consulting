import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTA = () => (
  <section className="py-28 md:py-36">
    <div className="container">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-charcoal text-primary-foreground p-12 md:p-20 noise-overlay">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gold/15 blur-3xl" />
        <div className="relative max-w-2xl">
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] font-light">
            Build the residence your residents <span className="italic text-gradient-gold">deserve.</span>
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/70">
            Schedule a confidential consultation. We'll map your licensing pathway, surface state-specific risks, and outline your next 90 days.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Button size="lg" className="rounded-full h-12 px-7 bg-gradient-gold hover:opacity-90" style={{ color: "hsl(var(--primary))" }}>
              Book a Consult <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full h-12 px-7 bg-transparent border-white/20 text-primary-foreground hover:bg-white/5 hover:text-primary-foreground">
              Download the licensing guide
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);
