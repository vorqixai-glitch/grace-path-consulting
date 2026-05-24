import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";

const links = [
  { label: "Platform", href: "#platform" },
  { label: "Compliance", href: "#compliance" },
  { label: "Pricing", href: "#pricing" },
  { label: "Resources", href: "#faq" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
      <div className="container">
        <div className={`flex items-center justify-between rounded-full px-4 md:px-6 py-3 transition-all ${scrolled ? "glass shadow-soft" : ""}`}>
          <a href="#" aria-label="White Tail Consulting"><Logo /></a>
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setDark((d) => !d)}
              className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <Button variant="ghost" size="sm" className="hidden md:inline-flex">Sign in</Button>
            <Button size="sm" className="bg-gradient-gold text-primary-foreground hover:opacity-90 hover:shadow-gold transition-all rounded-full px-5 text-foreground" style={{ color: 'hsl(var(--primary))' }}>
              Book a Consult
            </Button>
            <button onClick={() => setOpen(!open)} className="md:hidden h-9 w-9 inline-flex items-center justify-center rounded-full hover:bg-muted" aria-label="Menu">
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden mt-2 glass rounded-2xl p-4 flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm py-1.5 text-foreground/80">{l.label}</a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};
