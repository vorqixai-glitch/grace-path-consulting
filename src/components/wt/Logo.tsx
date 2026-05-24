interface LogoProps { className?: string; mark?: boolean }

export const Logo = ({ className = "", mark = false }: LogoProps) => (
  <div className={`flex items-center gap-2.5 ${className}`}>
    <svg viewBox="0 0 40 40" className="h-8 w-8" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient id="wt-g" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="hsl(38 50% 70%)" />
          <stop offset="50%" stopColor="hsl(38 45% 50%)" />
          <stop offset="100%" stopColor="hsl(35 50% 38%)" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="38" height="38" rx="9" stroke="url(#wt-g)" strokeWidth="1.25" />
      <path d="M10 13 L15.5 27 L20 17 L24.5 27 L30 13" stroke="url(#wt-g)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="20" cy="31" r="1.2" fill="url(#wt-g)" />
    </svg>
    {!mark && (
      <div className="flex flex-col leading-none">
        <span className="font-display text-[15px] tracking-tight text-foreground">White Tail</span>
        <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mt-0.5">Consulting</span>
      </div>
    )}
  </div>
);
