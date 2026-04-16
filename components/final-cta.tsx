import Link from "next/link"
import { Button } from "@/components/ui/button"

export function FinalCTA() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <div>
        <h2 className="font-mono text-2xl font-bold text-foreground">
          Ready to ship?
        </h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Set up your hackathon project in seconds, not hours.<br />Install hackctl and start building.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button className="font-mono" asChild>
            <Link href="https://github.com/hackctl-dev">View on GitHub</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
