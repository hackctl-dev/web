"use client"

import { useState } from "react"

interface TemplateCardProps {
    template: string
    title: string
    description: string
    bestFor: string
    profile: string
}

export function TemplateCard({ template, title, description, bestFor, profile }: TemplateCardProps) {
    const [copied, setCopied] = useState(false)

    const command = `hackctl create --template ${template} .`

    const copyCommand = async () => {
        await navigator.clipboard.writeText(command)
        setCopied(true)
        setTimeout(() => setCopied(false), 2200)
    }

    const onCardKeyDown = async (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault()
            await copyCommand()
        }
    }

    return (
        <div
            className={`tmpl-card tmpl-card-copy${copied ? " copied" : ""}`}
            onClick={copyCommand}
            onKeyDown={onCardKeyDown}
            role="button"
            tabIndex={0}
            aria-label={`Copy command for ${template} template`}
        >
            <button
                type="button"
                className="tmpl-copy-action"
                onClick={(event) => {
                    event.stopPropagation()
                    void copyCommand()
                }}
                aria-label={`Copy ${template} create command`}
            >
                {copied ? (
                    <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polyline points="20 6 9 17 4 12" />
                    </svg>
                ) : (
                    <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                )}
            </button>

            <div className="tmpl-name">{title}</div>
            <div className="tmpl-desc">{description}</div>
            <div className="tmpl-meta">
                <div className="tmpl-meta-row">
                    <span className="tmpl-meta-label">Best for</span>
                    <span className="tmpl-meta-value">{bestFor}</span>
                </div>
                <div className="tmpl-meta-row">
                    <span className="tmpl-meta-label">Profile</span>
                    <span className="tmpl-meta-value">{profile}</span>
                </div>
            </div>
        </div>
    )
}
