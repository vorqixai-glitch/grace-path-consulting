import { motion } from "framer-motion";

const stats = [
  { v: "50", l: "States covered" },
  { v: "300+", l: "Regulatory sources monitored" },
  { v: "98%", l: "Licensing approval rate" },
  { v: "$0", l: "Compliance fines among clients" },
];

export const WhyWhiteTail = () => (
  <section className="py-28 md:py-36">
    <div className="container">
      <div className="max-w-3xl">
        <div className="text-xs uppercase tracking-[0.25em] text-gold-deep mb-4">Why White Tail</div>
        <h2 className="font-display text-4xl md:text-5xl leading-[1.05] font-light">
          We treat sober living as serious infrastructure — because it is.
        </h2>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Recovery housing sits at the intersection of healthcare, real estate, and regulated services. White Tail combines consulting muscle with a software platform engineered for operators who refuse to treat compliance as an afterthought.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-3xl overflow-hidden border border-border">
        {stats.map((s, i) => (
          <motion.div
            key={s.l}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="bg-background p-8 md:p-10"
          >
            <div className="font-display text-5xl md:text-6xl text-gradient-gold font-light">{s.v}</div>
            <div className="mt-3 text-sm text-muted-foreground">{s.l}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
