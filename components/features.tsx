export function Features() {
  const features = [
    {
      command: "hackctl create",
      title: "Scaffold from templates",
      description:
        "Start with battle-tested stacks. Choose from MERN, PERN, Next.js + Supabase, SvelteKit + Supabase, or Nuxt + Supabase. Validates dependencies, clones templates, installs packages, and generates project config automatically.",
    },
    {
      command: "hackctl start",
      title: "Run all services together",
      description:
        "Start your frontend and backend simultaneously with a unified TUI dashboard. Auto-installs missing dependencies, shows real-time status, PIDs, port readiness, and handles graceful shutdown across Windows, macOS, and Linux.",
    },
    {
      command: "hackctl share",
      title: "Share instantly",
      description:
        "Expose your frontend through Cloudflare Quick Tunnel with a single command. Auto-downloads cloudflared if missing and returns a public trycloudflare.com URL for instant demos.",
    },
  ]

  return (
    <section id="features" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="font-mono text-2xl font-bold text-foreground">
        Three commands. Minimal friction.
      </h2>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        hackctl condenses setup into three workflows so your team can build quickly<br />
        without config debt, brittle scripts, or launch-day friction.
      </p>

      <div className="mt-12 space-y-12">
        {features.map((feature, index) => (
          <div
            key={feature.command}
            className="grid gap-6 md:grid-cols-[200px_1fr]"
          >
            <div>
              <code className="inline-block rounded border border-border bg-muted px-3 py-1.5 font-mono text-sm font-medium text-foreground">
                {feature.command}
              </code>
            </div>
            <div>
              <h3 className="font-mono text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}
