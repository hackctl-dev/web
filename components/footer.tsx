import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex min-h-14 flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between md:py-0">
          <div>
            <Link href="/" className="font-mono text-lg font-semibold text-foreground">
              hackctl
            </Link>
          </div>

          <p className="font-mono text-sm text-muted-foreground">
            Ship hackathon projects faster.
          </p>
        </div>

        
      </div>
    </footer>
  )
}
