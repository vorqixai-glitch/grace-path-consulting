import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Do you handle licensing in all 50 states?", a: "Yes. Our compliance engine and consulting team support licensure pathways across every U.S. state, including county and municipal layers." },
  { q: "How does the one-time consulting fee work?", a: "Engagements range from $5,000 to $15,000 depending on scope: entity formation, licensing, zoning, staffing, and operational launch. Pricing is fixed and quoted upfront." },
  { q: "Is the platform suitable for multi-site operators?", a: "Absolutely. The Enterprise tier is purpose-built for multi-site networks, with role-based access, SSO, and dedicated consultants." },
  { q: "How current are the legal updates?", a: "Our engine monitors regulatory sources continuously. Material changes trigger real-time dashboard alerts and email notifications, with full change logs for audit readiness." },
  { q: "Can I generate state-specific documents?", a: "Yes. Resident agreements, handbooks, SOPs, and full compliance packets auto-fill against your state and entity profile, with e-signature and export." },
];

export const FAQ = () => (
  <section id="faq" className="py-28 md:py-36">
    <div className="container max-w-3xl">
      <div className="text-xs uppercase tracking-[0.25em] text-gold-deep mb-4">Frequently asked</div>
      <h2 className="font-display text-4xl md:text-5xl leading-[1.05] font-light mb-12">
        Answers, before you ask.
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border-border">
            <AccordionTrigger className="text-left font-display text-lg py-6 hover:no-underline">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-6">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);
