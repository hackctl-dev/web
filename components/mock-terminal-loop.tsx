"use client"

import { useEffect, useState } from "react"

type TerminalLine = {
    text: string
    className?: string
}

const phases: TerminalLine[][] = [
    [
        { text: "$ hackctl create --template mern my-app", className: "tc" },
        { text: "" },
        { text: "● Creating project", className: "cm-mu" },
        { text: "" },
        { text: "  i Preparing project directory", className: "ts" },
        { text: "  i Downloading template", className: "ts" },
        { text: "  i Updating ignore rules", className: "ts" },
        { text: "  i Installing frontend dependencies", className: "ts" },
        { text: "  i Installing backend dependencies", className: "ts" },
        { text: "" },
        { text: "✓ Project successfully created", className: "cm-ok" },
        { text: "" },
        { text: "?  my-app && hackctl start", className: "cm-mu" },
    ],
    [
        { text: "$ cd my-app && hackctl start", className: "tc" },
        { text: "" },
        { text: "i Starting services", className: "ts" },
        { text: "" },
        { text: "● Frontend: running on http://localhost:3000", className: "cm-ok" },
        { text: "● Backend: running on http://localhost:5000", className: "cm-ok" },
        { text: "" },
        { text: "? Press Ctrl+C to stop running.", className: "cm-mu" },
    ],
    [
        { text: "$ hackctl share", className: "tc" },
        { text: "" },
        { text: "● Sharing project", className: "cm-mu" },
        { text: "" },
        { text: "i Preparing tunnel client", className: "ts" },
        { text: "i Opening public URL", className: "ts" },
        { text: "" },
        { text: "● https://demo.trycloudflare.com", className: "cm-ok" },
        { text: "" },
        { text: "?  Ctrl+C to stop sharing.", className: "cm-mu" },
    ],
]

const COMMAND_TYPE_MS = 52
const LINE_REVEAL_MS = 230
const HOLD_MS = 700
const CLEAR_MS = 260

type Mode = "command" | "lines" | "hold" | "clear"

export function MockTerminalLoop() {
    const [phaseIndex, setPhaseIndex] = useState(0)
    const [lineIndex, setLineIndex] = useState(1)
    const [commandChars, setCommandChars] = useState(0)
    const [mode, setMode] = useState<Mode>("command")

    useEffect(() => {
        const currentPhase = phases[phaseIndex]
        const command = currentPhase[0]?.text ?? ""

        const timer = window.setTimeout(() => {
            if (mode === "command") {
                if (commandChars < command.length) {
                    setCommandChars((current) => Math.min(current + 1, command.length))
                } else {
                    setMode("lines")
                }
                return
            }

            if (mode === "lines") {
                if (lineIndex < currentPhase.length) {
                    setLineIndex((current) => current + 1)
                } else {
                    setMode("hold")
                }
                return
            }

            if (mode === "hold") {
                setMode("clear")
                return
            }

            setPhaseIndex((current) => (current + 1) % phases.length)
            setLineIndex(1)
            setCommandChars(0)
            setMode("command")
        }, mode === "command" ? COMMAND_TYPE_MS : mode === "lines" ? LINE_REVEAL_MS : mode === "hold" ? HOLD_MS : CLEAR_MS)

        return () => window.clearTimeout(timer)
    }, [phaseIndex, mode, commandChars, lineIndex])

    const currentPhase = phases[phaseIndex]
    const commandLine = currentPhase[0]
    const typedCommand = commandLine.text.slice(0, commandChars)
    const currentLines = mode === "clear" ? [] : currentPhase.slice(1, lineIndex)

    return (
        <>
            {mode !== "clear" && (
                <span className={`tl demo-line ${commandLine.className ?? ""}`.trim()}>
                    {typedCommand}
                    {mode === "command" && <span className="cursor" />}
                </span>
            )}
            {currentLines.map((line, index) => (
                <span key={`${index}-${line.text}`} className={`tl demo-line ${line.className ?? ""}`.trim()}>
                    {line.text || <span className="tb" />}
                </span>
            ))}
        </>
    )
}
