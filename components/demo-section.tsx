"use client"

import { useState, useEffect, useRef } from "react"

interface TerminalLine {
  type: "command" | "output" | "header" | "status" | "success" | "info" | "url"
  text: string
  delay?: number
}

const sequences: TerminalLine[][] = [
  // Create command
  [
    { type: "command", text: "hackctl create --template mern my-mern-app", delay: 50 },
    { type: "output", text: "", delay: 200 },
    { type: "header", text: "HACKCTL", delay: 400 },
    { type: "output", text: "", delay: 100 },
    { type: "status", text: "● Creating project", delay: 200 },
    { type: "output", text: "", delay: 100 },
    { type: "info", text: "i Preparing project directory", delay: 300 },
    { type: "info", text: "i Downloading template", delay: 400 },
    { type: "info", text: "i Installing frontend dependencies", delay: 500 },
    { type: "info", text: "i Installing backend dependencies", delay: 400 },
    { type: "output", text: "", delay: 100 },
    { type: "success", text: "Project successfully created", delay: 300 },
    { type: "output", text: "", delay: 100 },
    { type: "output", text: "? Next: cd my-mern-app and configure using README.md", delay: 200 },
  ],
  // Start command
  [
    { type: "command", text: "hackctl start", delay: 50 },
    { type: "output", text: "", delay: 200 },
    { type: "header", text: "HACKCTL", delay: 400 },
    { type: "output", text: "", delay: 100 },
    { type: "status", text: "● Frontend: running on http://localhost:3000", delay: 300 },
    { type: "status", text: "● Backend: running on http://localhost:5000", delay: 300 },
    { type: "output", text: "", delay: 100 },
    { type: "output", text: "? Press Ctrl+C to stop running.", delay: 200 },
  ],
  // Share command
  [
    { type: "command", text: "hackctl share", delay: 50 },
    { type: "output", text: "", delay: 200 },
    { type: "header", text: "HACKCTL", delay: 400 },
    { type: "output", text: "", delay: 100 },
    { type: "status", text: "● Sharing project", delay: 300 },
    { type: "output", text: "", delay: 100 },
    { type: "info", text: "i Preparing tunnel client", delay: 400 },
    { type: "info", text: "i Opening public URL", delay: 400 },
    { type: "output", text: "", delay: 100 },
    { type: "url", text: "Live URL: https://establishing-skip-tiger-jessica.trycloudflare.com", delay: 300 },
    { type: "output", text: "", delay: 100 },
    { type: "output", text: "? Press Ctrl+C to stop sharing.", delay: 200 },
  ],
]

function TerminalLine({ line, isTyping }: { line: TerminalLine; isTyping: boolean }) {
  const [displayedText, setDisplayedText] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (line.type === "command" && isTyping) {
      let i = 0
      const interval = setInterval(() => {
        if (i <= line.text.length) {
          setDisplayedText(line.text.slice(0, i))
          i++
        } else {
          clearInterval(interval)
          setIsComplete(true)
        }
      }, 30)
      return () => clearInterval(interval)
    } else {
      setDisplayedText(line.text)
      setIsComplete(true)
    }
  }, [line, isTyping])

  const baseClasses = "font-mono text-[15px] leading-relaxed"

  switch (line.type) {
    case "command":
      return (
        <div className={`${baseClasses} text-foreground`}>
          {displayedText}
          {!isComplete && <span className="ml-0.5 inline-block h-4 w-2 animate-pulse bg-foreground" />}
        </div>
      )
    case "header":
      return (
        <div className={`${baseClasses} text-lg font-bold tracking-wider text-foreground`}>
          {displayedText}
        </div>
      )
    case "status":
      return (
        <div className={`${baseClasses} text-primary`}>
          {displayedText}
        </div>
      )
    case "success":
      return (
        <div className={`${baseClasses} text-primary`}>
          {displayedText}
        </div>
      )
    case "info":
      return (
        <div className={`${baseClasses} text-muted-foreground`}>
          {displayedText}
        </div>
      )
    case "url":
      return (
        <div className={`${baseClasses} text-primary`}>
          {displayedText}
        </div>
      )
    case "output":
      return (
        <div className={`${baseClasses} text-muted-foreground`}>
          {displayedText || "\u00A0"}
        </div>
      )
    default:
      return null
  }
}

export function DemoSection() {
  const [currentSequence, setCurrentSequence] = useState(0)
  const [visibleLines, setVisibleLines] = useState<number>(0)
  const [isTypingCommand, setIsTypingCommand] = useState(false)
  const terminalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const sequence = sequences[currentSequence]
    if (visibleLines >= sequence.length) {
      // Wait before moving to next sequence
      const timeout = setTimeout(() => {
        setCurrentSequence((prev) => (prev + 1) % sequences.length)
        setVisibleLines(0)
        setIsTypingCommand(false)
      }, 3000)
      return () => clearTimeout(timeout)
    }

    const currentLine = sequence[visibleLines]
    const delay = currentLine?.delay ?? 200

    if (currentLine?.type === "command") {
      setIsTypingCommand(true)
      // Wait for typing to complete before showing next line
      const typingDuration = currentLine.text.length * 30 + 200
      const timeout = setTimeout(() => {
        setIsTypingCommand(false)
        setVisibleLines((prev) => prev + 1)
      }, typingDuration)
      return () => clearTimeout(timeout)
    }

    const timeout = setTimeout(() => {
      setVisibleLines((prev) => prev + 1)
    }, delay)

    return () => clearTimeout(timeout)
  }, [currentSequence, visibleLines])

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [visibleLines])

  const sequence = sequences[currentSequence]

  return (
    <section id="demo" className="mx-auto max-w-5xl px-6 py-16">
      <div className="overflow-hidden rounded-lg border border-border bg-card">
        {/* Terminal header */}
        <div className="border-b border-border bg-muted/30 px-4 py-2">
          <span className="font-mono text-sm uppercase tracking-widest text-muted-foreground">Showcase</span>
        </div>
        {/* Terminal content */}
        <div
          ref={terminalRef}
          className="h-[26rem] overflow-y-auto bg-background p-6"
        >
          {sequence.slice(0, visibleLines + (isTypingCommand ? 1 : 0)).map((line, idx) => (
            <TerminalLine
              key={`${currentSequence}-${idx}`}
              line={line}
              isTyping={isTypingCommand && idx === visibleLines}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
