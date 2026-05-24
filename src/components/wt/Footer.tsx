import { Logo } from "./Logo";

const cols = [
  { h: "Platform", l: ["Compliance Engine", "Document Automation", "Consulting", "AI Assistant"] },
  { h: "Resources", l: ["Licensing Guide", "State Library", "Blog", "FAQ"] },
  { h: "Company", l: ["About", "Careers", "Press", "Contact"] },
  { h: "Legal", l: ["Privacy", "Terms", "Security", "DPA"] },
];

export const Footer = () => (
  <footer className="border-t border-border py-16">
    <div className="container">
      <div className="grid md:grid-cols-6 gap-12">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-5 text-sm text-muted-foreground max-w-xs leading-relaxed">
            Luxury sober living consulting and compliance intelligence. Built for the operators raising the standard of recovery housing.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.h}>
            <div className="text-xs uppercase tracking-[0.2em] text-foreground mb-4">{c.h}</div>
            <ul className="space-y-2.5">
              {c.l.map((i) => (
                <li key={i}><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{i}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} White Tail Consulting. All rights reserved.</span>
        <span>Crafted with discipline. Operated with grace.</span>
      </div>
    </div>
  </footer>
);
