"use client"

import { useState, useEffect } from "react"
import { Check, Copy } from "lucide-react"

type OS = "mac" | "windows" | "linux"

const installCommands: Record<OS, { label: string; command: string }> = {
  mac: { label: "macOS", command: "curl -fsSL https://hackctl.dev/install.sh | sh" },
  linux: { label: "Linux", command: "curl -fsSL https://hackctl.dev/install.sh | sh" },
  windows: { label: "Windows", command: "irm https://hackctl.dev/install.ps1 | iex" },
}

function detectOS(): OS {
  if (typeof window === "undefined") return "mac"
  const ua = window.navigator.userAgent.toLowerCase()
  if (ua.includes("win")) return "windows"
  if (ua.includes("mac")) return "mac"
  return "linux"
}

export function Hero() {
  const [os, setOs] = useState<OS>("mac")
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    setOs(detectOS())
  }, [])

  const handleCopy = () => {
    navigator.clipboard.writeText(installCommands[os].command)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="install" className="mx-auto max-w-5xl px-6 pb-20 pt-20 md:pt-28">
      <div className="max-w-2xl">
        <h1 className="font-mono text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]">
          Ship Hackathon<br />Projects Faster
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
          Scaffold your stack, run services, and share a live URL.<br />Your
          hackathon team spends time building, not configuring.
        </p>

        {/* Install block */}
        <button
          onClick={handleCopy}
          className="mt-8 flex w-fit cursor-pointer items-center gap-10 rounded-lg border border-border bg-background px-4 py-3 transition-colors hover:bg-secondary/50"
          aria-label="Copy install command"
        >
          <code className="font-mono text-sm text-foreground">
            <span className="select-none text-muted-foreground">$ </span>
            {installCommands[os].command}
          </code>
          <span className="shrink-0 text-muted-foreground">
            {copied ? <Check size={16} /> : <Copy size={16} />}
          </span>
        </button>
      </div>
    </section>
  )
}
