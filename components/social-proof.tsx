export function SocialProof() {
  const organizations = [
    "MLH",
    "HackMIT",
    "TreeHacks",
    "CalHacks",
    "PennApps",
    "HackNY",
  ]

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="mb-8 font-mono text-2xl font-bold text-foreground">
        Used at hackathons hosted by
      </h2>
      <div className="flex flex-wrap items-center gap-8 md:gap-12">
        {organizations.map((org) => (
          <span
            key={org}
            className="font-mono text-lg font-medium text-muted-foreground/60"
          >
            {org}
          </span>
        ))}
      </div>
    </section>
  )
}
