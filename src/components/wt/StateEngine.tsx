import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MapPin, Check } from "lucide-react";

const STATES = ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];

const CATEGORIES = [
  "Licensing requirements",
  "Zoning laws",
  "Required forms",
  "Fire & life safety",
  "Insurance requirements",
  "Occupancy regulations",
  "ADA compliance",
  "Staff credentials",
  "Recovery residence certification",
  "Medication policies",
  "County / municipal rules",
  "Compliance timelines",
];

export const StateEngine = () => {
  const [state, setState] = useState("Texas");
  const [open, setOpen] = useState(false);

  return (
    <section id="compliance" className="py-28 md:py-36 relative overflow-hidden bg-gradient-charcoal text-primary-foreground">
      <div className="absolute inset-0 noise-overlay" />
      <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-gold/10 blur-3xl pointer-events-none" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-gold mb-4">State Compliance Intelligence</div>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] font-light">
              Every state. Every regulation. <span className="italic text-gradient-gold">Always current.</span>
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/70 leading-relaxed max-w-lg">
              Our compliance engine continuously monitors health departments, DHHS, HUD, legislatures, and recovery housing associations — surfacing requirements specific to your state, county, and municipality.
            </p>

            <div className="mt-10 space-y-3">
              {[
                "Real-time legal change notifications",
                "Auto-generated compliance packets",
                "County and municipal rule layering",
                "Audit-ready documentation trail",
              ].map((p) => (
                <div key={p} className="flex items-center gap-3 text-sm text-primary-foreground/80">
                  <span className="h-5 w-5 rounded-full bg-gold/20 flex items-center justify-center">
                    <Check className="h-3 w-3 text-gold" />
                  </span>
                  {p}
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-3xl p-6 md:p-8 border-white/10" style={{ background: "hsl(220 22% 12% / 0.55)" }}>
            <label className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60">Select your state</label>
            <button
              onClick={() => setOpen(!open)}
              className="mt-3 w-full flex items-center justify-between bg-white/5 hover:bg-white/10 transition-colors border border-white/10 rounded-xl px-4 py-3.5"
            >
              <span className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-gold" />
                <span className="font-display text-lg">{state}</span>
              </span>
              <ChevronDown className={`h-4 w-4 text-primary-foreground/60 transition-transform ${open ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="mt-2 max-h-64 overflow-y-auto rounded-xl border border-white/10 bg-white/[0.02]">
                    {STATES.map((s) => (
                      <button
                        key={s}
                        onClick={() => { setState(s); setOpen(false); }}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-white/5 transition-colors ${s === state ? "text-gold" : "text-primary-foreground/80"}`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-6">
              <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60 mb-3">Live regulatory modules</div>
              <motion.div
                key={state}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-2 gap-2"
              >
                {CATEGORIES.map((c, i) => (
                  <motion.div
                    key={c}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.03 }}
                    className="text-xs px-3 py-2.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-primary-foreground/80"
                  >
                    {c}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
