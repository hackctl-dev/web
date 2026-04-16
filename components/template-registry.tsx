export function TemplateRegistry() {
  const templates = [
    {
      name: "mern",
      stack: "React + Vite, Express, MongoDB",
      services: "frontend (3000), backend (5000)",
    },
    {
      name: "pern",
      stack: "React + Vite, Express, PostgreSQL",
      services: "frontend (3000), backend (5000)",
    },
    {
      name: "next-supabase",
      stack: "Next.js App Router, Supabase Postgres",
      services: "app (3000)",
    },
    {
      name: "sveltekit-supabase",
      stack: "SvelteKit, Supabase Postgres",
      services: "app (3000)",
    },
    {
      name: "nuxt-supabase",
      stack: "Nuxt, Supabase Postgres",
      services: "app (3000)",
    },
  ]

  return (
    <section id="templates" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="font-mono text-2xl font-bold text-foreground">
        Official templates
      </h2>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Start from production-ready stacks with prewired services and clean setup,<br />
        plus sensible defaults tuned for fast hackathon shipping.
      </p>

      <div className="mt-8 overflow-x-auto">
        <table className="w-full min-w-[600px] border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="pb-3 text-left font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Template
              </th>
              <th className="pb-3 text-left font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Stack
              </th>
              <th className="pb-3 text-left font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Services
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {templates.map((template) => (
              <tr key={template.name}>
                <td className="py-4">
                  <code className="rounded bg-muted px-2 py-1 font-mono text-sm font-medium text-foreground">
                    {template.name}
                  </code>
                </td>
                <td className="py-4 text-sm text-muted-foreground">
                  {template.stack}
                </td>
                <td className="py-4 font-mono text-sm text-muted-foreground">
                  {template.services}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </section>
  )
}
