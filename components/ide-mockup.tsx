'use client'

import { useState } from "react"
import { Braces, ChevronDown, ChevronRight, File, FileText, Folder } from "lucide-react"

function renderFileContent() {
    return (
        <pre>
            <span className="ide-code"># AGENTS.md</span>{"\n\n"}
            Guidance for AI coding agents working in the hackctl workspace.{"\n\n"}
            <span className="ide-code">## Scope</span>{"\n\n"}
            This workspace is a polyrepo. Treat these as separate repositories:{"\n"}
            - cli/ - Go CLI{"\n"}
            - web/ - Next.js marketing and installer site{"\n"}
            - templates/ - official scaffold templates{"\n\n"}
            <span className="ide-code">## Working Rules</span>{"\n\n"}
            - Identify the target repo before editing.{"\n"}
            - Read the repo-local AGENTS.md before making changes.
        </pre>
    )
}

export function IdeMockup() {
    const [isHackctlOpen, setHackctlOpen] = useState(true)
    const [isAgentsOpen, setAgentsOpen] = useState(true)
    const [isSkillsOpen, setSkillsOpen] = useState(true)
    const [isFindSkillsOpen, setFindSkillsOpen] = useState(true)
    const [isSetupEnvOpen, setSetupEnvOpen] = useState(false)
    const [isDeployAppOpen, setDeployAppOpen] = useState(false)

    return (
        <div className="ide-mockup">
            <div className="ide-header">
                <div className="ide-dots">
                    <div className="ide-dot r"></div>
                    <div className="ide-dot y"></div>
                    <div className="ide-dot g"></div>
                </div>
                <div className="ide-title">Editor</div>
            </div>

            <div className="ide-body">
                <div className="ide-sidebar">
                    <div className="ide-explorer-label">EXPLORER</div>

                    <div className="ide-tree">
                        <button
                            type="button"
                            className="ide-tree-button"
                            onClick={() => setHackctlOpen((current) => !current)}
                            aria-expanded={isHackctlOpen}
                        >
                            <span className="ide-chevron">{isHackctlOpen ? <ChevronDown size={12} strokeWidth={3} /> : <ChevronRight size={12} strokeWidth={3} />}</span>
                            <span className="ide-tree-icon"><Folder size={14} /></span>
                            <span>hackctl</span>
                        </button>

                        {isHackctlOpen && (
                            <div className="ide-tree-children">
                                <button
                                    type="button"
                                    className="ide-tree-button"
                                    onClick={() => setAgentsOpen((current) => !current)}
                                    aria-expanded={isAgentsOpen}
                                >
                                    <span className="ide-chevron">{isAgentsOpen ? <ChevronDown size={12} strokeWidth={3} /> : <ChevronRight size={12} strokeWidth={3} />}</span>
                                    <span className="ide-tree-icon"><Folder size={14} /></span>
                                    <span>.agents</span>
                                </button>

                                {isAgentsOpen && (
                                    <div className="ide-tree-children">
                                        <button
                                            type="button"
                                            className="ide-tree-button"
                                            onClick={() => setSkillsOpen((current) => !current)}
                                            aria-expanded={isSkillsOpen}
                                        >
                                            <span className="ide-chevron">{isSkillsOpen ? <ChevronDown size={12} strokeWidth={3} /> : <ChevronRight size={12} strokeWidth={3} />}</span>
                                            <span className="ide-tree-icon"><Folder size={14} /></span>
                                            <span>skills</span>
                                        </button>

                                        {isSkillsOpen && (
                                            <div className="ide-tree-children">
                                                <button
                                                    type="button"
                                                    className="ide-tree-button muted"
                                                    onClick={() => setFindSkillsOpen((current) => !current)}
                                                    aria-expanded={isFindSkillsOpen}
                                                >
                                                    <span className="ide-chevron">{isFindSkillsOpen ? <ChevronDown size={12} strokeWidth={3} /> : <ChevronRight size={12} strokeWidth={3} />}</span>
                                                    <span className="ide-tree-icon"><Folder size={14} /></span>
                                                    <span>find-skills</span>
                                                </button>

                                                {isFindSkillsOpen && (
                                                    <div className="ide-tree-children">
                                                        <div className="ide-tree-file">
                                                            <span className="ide-tree-icon"><File size={14} /></span>
                                                            <span>SKILL.md</span>
                                                        </div>
                                                    </div>
                                                )}

                                                <button
                                                    type="button"
                                                    className="ide-tree-button muted"
                                                    onClick={() => setSetupEnvOpen((current) => !current)}
                                                    aria-expanded={isSetupEnvOpen}
                                                >
                                                    <span className="ide-chevron">{isSetupEnvOpen ? <ChevronDown size={12} strokeWidth={3} /> : <ChevronRight size={12} strokeWidth={3} />}</span>
                                                    <span className="ide-tree-icon"><Folder size={14} /></span>
                                                    <span>setup-env</span>
                                                </button>

                                                {isSetupEnvOpen && (
                                                    <div className="ide-tree-children">
                                                        <div className="ide-tree-file">
                                                            <span className="ide-tree-icon"><File size={14} /></span>
                                                            <span>SKILL.md</span>
                                                        </div>
                                                    </div>
                                                )}

                                                <button
                                                    type="button"
                                                    className="ide-tree-button muted"
                                                    onClick={() => setDeployAppOpen((current) => !current)}
                                                    aria-expanded={isDeployAppOpen}
                                                >
                                                    <span className="ide-chevron">{isDeployAppOpen ? <ChevronDown size={12} strokeWidth={3} /> : <ChevronRight size={12} strokeWidth={3} />}</span>
                                                    <span className="ide-tree-icon"><Folder size={14} /></span>
                                                    <span>deploy-app</span>
                                                </button>

                                                {isDeployAppOpen && (
                                                    <div className="ide-tree-children">
                                                        <div className="ide-tree-file">
                                                            <span className="ide-tree-icon"><File size={14} /></span>
                                                            <span>SKILL.md</span>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                )}

                                <div className="ide-tree-file active">
                                    <span className="ide-tree-icon"><File size={14} /></span>
                                    <span>AGENTS.md</span>
                                </div>

                                <div className="ide-tree-file">
                                    <span className="ide-tree-icon"><File size={14} /></span>
                                    <span>CLAUDE.md</span>
                                </div>

                                <div className="ide-tree-file">
                                    <span className="ide-tree-icon"><File size={14} /></span>
                                    <span>GEMINI.md</span>
                                </div>

                                <div className="ide-tree-file">
                                    <span className="ide-tree-icon"><Braces size={14} /></span>
                                    <span>package.json</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="ide-editor">
                    <div className="ide-tabs">
                        <div className="ide-tab active">AGENTS.md</div>
                    </div>

                    <div className="ide-content">{renderFileContent()}</div>
                </div>
            </div>
        </div>
    )
}
