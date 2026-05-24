import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative pt-36 md:pt-48 pb-20 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      <div className="absolute inset-0 noise-overlay" />
      {/* decorative orbs */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gold/10 blur-3xl pointer-events-none" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs tracking-wide text-muted-foreground mb-8">
            <ShieldCheck className="h-3.5 w-3.5 text-gold" />
            <span>Trusted compliance partner across all 50 states</span>
          </div>

          <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] font-light text-foreground">
            Build and license your{" "}
            <span className="italic text-gradient-gold font-normal">sober living home</span>{" "}
            with confidence.
          </h1>

          <p className="mt-7 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            White Tail Consulting helps entrepreneurs navigate licensing, compliance, operations, and state regulations across America — backed by an enterprise compliance intelligence platform.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Button size="lg" className="rounded-full px-7 h-12 bg-primary text-primary-foreground hover:bg-primary/90 shadow-luxe">
              Start Your Application
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-7 h-12 border-border bg-background/60 backdrop-blur">
              Explore the Platform
            </Button>
          </div>

          <div className="mt-16 flex items-center gap-8 text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
            <span>SOC 2 aligned</span>
            <span className="hidden sm:inline">·</span>
            <span>50-state coverage</span>
            <span className="hidden sm:inline">·</span>
            <span>Enterprise grade</span>
          </div>
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 md:mt-28 max-w-6xl mx-auto"
        >
          <div className="glass rounded-3xl p-2 md:p-3 shadow-luxe">
            <div className="rounded-2xl bg-card overflow-hidden border border-border/50">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border/50">
                <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                <span className="ml-4 text-xs text-muted-foreground tracking-wide">app.whitetail.consulting / dashboard</span>
              </div>
              <div className="grid grid-cols-12 gap-4 p-5 md:p-7">
                <div className="col-span-12 md:col-span-3 space-y-3">
                  {["Overview", "Compliance", "Documents", "Licensing", "Billing"].map((s, i) => (
                    <div key={s} className={`px-3 py-2 rounded-lg text-sm ${i === 1 ? "bg-secondary text-foreground" : "text-muted-foreground"}`}>{s}</div>
                  ))}
                </div>
                <div className="col-span-12 md:col-span-9 space-y-4">
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { l: "Licensing", v: "78%", d: "+12%" },
                      { l: "Compliance", v: "94%", d: "Stable" },
                      { l: "Open tasks", v: "6", d: "2 urgent" },
                    ].map((k) => (
                      <div key={k.l} className="rounded-xl border border-border/60 p-4">
                        <div className="text-[11px] uppercase tracking-widest text-muted-foreground">{k.l}</div>
                        <div className="font-display text-3xl mt-1">{k.v}</div>
                        <div className="text-xs text-gold mt-1">{k.d}</div>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-xl border border-border/60 p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-sm font-medium">State Compliance Intelligence</div>
                      <div className="text-xs text-muted-foreground">Texas · Updated 2h ago</div>
                    </div>
                    <div className="space-y-2">
                      {[
                        { l: "Recovery residence certification", s: "Complete" },
                        { l: "Fire inspection checklist", s: "In review" },
                        { l: "Zoning verification — Travis County", s: "Action needed" },
                      ].map((r) => (
                        <div key={r.l} className="flex items-center justify-between text-sm py-2 border-t border-border/40 first:border-t-0">
                          <span className="text-foreground/80">{r.l}</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${r.s === "Complete" ? "bg-gold/15 text-gold-deep" : r.s === "In review" ? "bg-secondary text-foreground/70" : "bg-destructive/10 text-destructive"}`}>{r.s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
