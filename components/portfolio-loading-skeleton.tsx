export function PortfolioLoadingSkeleton() {
  return (
    <main aria-label="Loading portfolio" className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Skeleton className="h-8 w-32" />
          <div className="hidden gap-3 sm:flex">
            <Skeleton className="h-8 w-16" />
            <Skeleton className="h-8 w-16" />
            <Skeleton className="h-8 w-16" />
          </div>
          <Skeleton className="h-8 w-8 sm:hidden" />
        </div>

        <section className="grid min-h-[620px] items-center gap-12 py-20 lg:grid-cols-2">
          <div className="space-y-5">
            <Skeleton className="h-5 w-36" />
            <Skeleton className="h-14 w-full max-w-xl sm:h-20" />
            <Skeleton className="h-5 w-4/5 max-w-lg" />
            <Skeleton className="h-5 w-3/5 max-w-md" />
            <div className="flex gap-3 pt-4">
              <Skeleton className="h-11 w-32 rounded-full" />
              <Skeleton className="h-11 w-32 rounded-full" />
            </div>
          </div>
          <Skeleton className="mx-auto aspect-[4/5] w-full max-w-md rounded-3xl" />
        </section>

        {[1, 2, 3].map((section) => (
          <section key={section} className="space-y-8 py-16">
            <div className="mx-auto max-w-2xl space-y-3 text-center">
              <Skeleton className="mx-auto h-4 w-24" />
              <Skeleton className="mx-auto h-10 w-72 max-w-full" />
              <Skeleton className="mx-auto h-4 w-full max-w-xl" />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <Skeleton className="h-48 w-full rounded-2xl" />
              <Skeleton className="h-48 w-full rounded-2xl" />
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}

function Skeleton({ className }: { className: string }) {
  return <div className={`animate-pulse rounded-xl bg-muted/70 ${className}`} />
}
