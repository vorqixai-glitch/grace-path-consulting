const items = [
  { q: "White Tail compressed what should have been an 18-month licensing process into four months. The compliance engine alone is worth the subscription.", a: "Marcus Rivera", r: "Founder, Cypress Recovery Residences · TX" },
  { q: "The closest thing the recovery housing industry has to enterprise legal tech. Our regional rollout would not have been possible without it.", a: "Dr. Elaine Hart", r: "COO, Northstar Continuum · MN / WI" },
  { q: "Their consultants are operators, not theorists. Every document, SOP, and audit trail has held up under state inspection.", a: "Jordan Pace", r: "Executive Director, Anchor House Network · FL" },
];

export const Testimonials = () => (
  <section className="py-28 md:py-36 bg-secondary/40">
    <div className="container">
      <div className="text-xs uppercase tracking-[0.25em] text-gold-deep mb-4">Operators</div>
      <h2 className="font-display text-4xl md:text-5xl leading-[1.05] font-light max-w-2xl mb-16">
        Trusted by the people building the next generation of recovery housing.
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((t) => (
          <figure key={t.a} className="rounded-3xl bg-background border border-border p-8 flex flex-col h-full">
            <div className="font-display text-2xl text-gold-deep leading-none">"</div>
            <blockquote className="mt-3 text-foreground/90 leading-relaxed flex-1">{t.q}</blockquote>
            <figcaption className="mt-6 pt-6 border-t border-border">
              <div className="text-sm font-medium">{t.a}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{t.r}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);
