"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

const startupWord = "hackctl"
const startupCharset = "abcdefghijklmnopqrstuvwxyz0123456789@#$%&*"
const startupDuration = 1200
const startupFrameInterval = 50
const startupEncryptRatio = 0.3
const startupLockDuration = startupDuration * (1 - startupEncryptRatio)

function transitioningCharacters(length: number, elapsed: number, duration: number, roundUp: boolean) {
  if (length <= 0) return 0
  if (duration <= 0) return length

  const progress = elapsed / duration
  if (progress <= 0) return 0
  if (progress >= 1) return length

  const count = roundUp
    ? Math.ceil(progress * length)
    : Math.floor(progress * length)

  return Math.min(Math.max(count, 0), length)
}

function randomCharsetCharacter() {
  return startupCharset[Math.floor(Math.random() * startupCharset.length)]
}

function renderEncryptedFrame(word: string, encrypted: number) {
  const safeEncrypted = Math.min(Math.max(encrypted, 0), word.length)
  const encryptedPrefix = Array.from({ length: safeEncrypted }, randomCharsetCharacter).join("")
  return encryptedPrefix + word.slice(safeEncrypted)
}

function renderDecryptedFrame(word: string, locked: number) {
  const safeLocked = Math.min(Math.max(locked, 0), word.length)
  let frame = word.slice(0, safeLocked)

  for (let i = safeLocked; i < word.length; i++) {
    frame += randomCharsetCharacter()
  }

  return frame
}

const navLinks = [
  { href: "#demo", label: "Showcase" },
  { href: "#features", label: "Features" },
  { href: "#templates", label: "Templates" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [brandText, setBrandText] = useState(startupWord)

  useEffect(() => {
    let frameTimeout: ReturnType<typeof setTimeout> | null = null
    let animationInterval: ReturnType<typeof setInterval> | null = null
    let cancelled = false

    const runAnimation = () => {
      const startedAt = performance.now()

      const tick = () => {
        if (cancelled) return

        const elapsed = performance.now() - startedAt
        if (elapsed >= startupDuration) {
          setBrandText(startupWord)
          return
        }

        const encryptDuration = startupDuration - startupLockDuration
        if (elapsed < encryptDuration) {
          const encrypted = transitioningCharacters(startupWord.length, elapsed, encryptDuration, true)
          setBrandText(renderEncryptedFrame(startupWord, encrypted))
        } else {
          const decryptElapsed = elapsed - encryptDuration
          const locked = transitioningCharacters(startupWord.length, decryptElapsed, startupLockDuration, false)
          setBrandText(renderDecryptedFrame(startupWord, locked))
        }

        frameTimeout = setTimeout(tick, startupFrameInterval)
      }

      tick()
    }

    runAnimation()
    animationInterval = setInterval(runAnimation, 10000)

    return () => {
      cancelled = true
      if (frameTimeout) clearTimeout(frameTimeout)
      if (animationInterval) clearInterval(animationInterval)
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="font-mono text-lg font-semibold tracking-tight text-foreground">
          {brandText}
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button size="sm" className="font-mono text-sm" asChild>
            <Link href="https://github.com/hackctl-dev">View on GitHub</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5 text-foreground" />
          ) : (
            <Menu className="h-5 w-5 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <nav className="border-t border-border bg-background px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button size="sm" className="mt-2 w-full font-mono text-sm" asChild>
              <Link href="https://github.com/hackctl-dev">View on GitHub</Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  )
}
