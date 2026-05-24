import { motion } from "framer-motion";
import { Scale, FileCheck2, Building2, BookOpenCheck, Bell, Sparkles } from "lucide-react";

const features = [
  { icon: Scale, title: "Licensing Guidance", desc: "Navigate state-specific licensing pathways with structured, attorney-reviewed playbooks." },
  { icon: Building2, title: "Operational Systems", desc: "SOPs, intake, staffing, and incident workflows engineered for accreditation readiness." },
  { icon: BookOpenCheck, title: "Recovery Home Blueprint", desc: "End-to-end startup framework — from entity formation to first resident admission." },
  { icon: FileCheck2, title: "Legal Automation", desc: "Auto-generated agreements, handbooks, and compliance packets with e-signature." },
  { icon: Bell, title: "Real-time Legal Updates", desc: "Track DHHS, HUD, and state legislature changes with instant alerts and change logs." },
  { icon: Sparkles, title: "AI Compliance Assistant", desc: "Trained on sober living regulations — answers, recommendations, and gap analysis on demand." },
];

export const Features = () => {
  return (
    <section id="platform" className="py-28 md:py-36 relative">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-gold-deep mb-4">The platform</div>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05] font-light">
            Everything required to launch and operate a regulated recovery residence.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/60 rounded-3xl overflow-hidden border border-border/60">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="bg-background p-8 md:p-10 group hover:bg-card transition-colors"
            >
              <div className="h-11 w-11 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-gold/15 transition-colors">
                <f.icon className="h-5 w-5 text-foreground/80 group-hover:text-gold-deep transition-colors" />
              </div>
              <h3 className="font-display text-xl mb-3">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
