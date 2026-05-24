import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "$499",
    period: "/ month",
    desc: "For founders preparing their first residence.",
    features: ["State compliance access (1 state)", "Document templates", "Basic AI assistant", "Email support"],
  },
  {
    name: "Professional",
    price: "$1,499",
    period: "/ month",
    desc: "For operators scaling licensed homes.",
    featured: true,
    features: ["Multi-state compliance", "Full document automation", "Priority consulting hours", "Legal change alerts", "E-signature & exports"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For multi-site organizations & networks.",
    features: ["Unlimited states & sites", "Dedicated consultant", "Custom integrations & SSO", "Audit & accreditation support", "SLA & white-glove onboarding"],
  },
];

export const Pricing = () => (
  <section id="pricing" className="py-28 md:py-36 relative">
    <div className="container">
      <div className="max-w-2xl mb-16">
        <div className="text-xs uppercase tracking-[0.25em] text-gold-deep mb-4">Plans</div>
        <h2 className="font-display text-4xl md:text-5xl leading-[1.05] font-light">
          Subscription tiers built for serious operators.
        </h2>
        <p className="mt-5 text-muted-foreground">
          Pair any plan with a one-time consulting engagement ($5K–$15K) for licensure and launch support.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`relative rounded-3xl p-8 md:p-10 transition-all ${
              p.featured
                ? "bg-gradient-charcoal text-primary-foreground shadow-luxe scale-[1.02]"
                : "bg-card border border-border"
            }`}
          >
            {p.featured && (
              <div className="absolute -top-3 left-8 text-[10px] uppercase tracking-[0.25em] bg-gradient-gold text-primary px-3 py-1 rounded-full">
                Most popular
              </div>
            )}
            <div className="font-display text-xl">{p.name}</div>
            <div className="mt-2 text-sm opacity-70">{p.desc}</div>
            <div className="mt-7 flex items-baseline gap-1">
              <span className="font-display text-5xl">{p.price}</span>
              <span className="text-sm opacity-60">{p.period}</span>
            </div>
            <Button
              className={`mt-7 w-full rounded-full h-11 ${
                p.featured
                  ? "bg-gradient-gold hover:opacity-90"
                  : "bg-primary text-primary-foreground hover:bg-primary/90"
              }`}
              style={p.featured ? { color: "hsl(var(--primary))" } : {}}
            >
              {p.name === "Enterprise" ? "Contact sales" : "Start with " + p.name}
            </Button>
            <ul className="mt-8 space-y-3">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <Check className={`h-4 w-4 mt-0.5 flex-shrink-0 ${p.featured ? "text-gold" : "text-gold-deep"}`} />
                  <span className="opacity-90">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);
