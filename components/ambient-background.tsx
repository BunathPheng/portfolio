export default function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden transition-colors duration-500">
      <div
        className="ambient-orb -left-20 top-0 h-[280px] w-[280px] animate-pulse-soft sm:-left-32 sm:h-[480px] sm:w-[480px]"
        style={{ background: `hsl(var(--orb-primary))` }}
      />
      <div
        className="ambient-orb -right-16 top-1/4 h-[240px] w-[240px] animate-pulse-soft [animation-delay:2s] sm:-right-24 sm:h-[400px] sm:w-[400px]"
        style={{ background: `hsl(var(--orb-indigo))` }}
      />
      <div
        className="ambient-orb bottom-0 left-1/4 h-[200px] w-[200px] animate-pulse-soft [animation-delay:1s] sm:left-1/3 sm:h-[360px] sm:w-[360px]"
        style={{ background: `hsl(var(--orb-violet))` }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--background))_0%,transparent_70%)]" />
    </div>
  )
}
