import Link from "next/link"
import { InstallCommand } from "@/components/install-command"
import { FadeIn } from "@/components/fade-in"
import { IdeMockup } from "@/components/ide-mockup"
import { MockTerminalLoop } from "@/components/mock-terminal-loop"
import { ArrowRight } from "lucide-react"
import { Globe, Laptop, Server } from "lucide-react"

export default function Home() {
    return (
        <>
            <nav className="nav-bar">
                <div className="nav-inner">
                    <Link className="nav-logo" href="/">hackctl</Link>
                    <ul className="nav-links">
                        <li><a href="#commands">Commands</a></li>
                        <li><a href="#templates">Templates</a></li>
                        <li><a href="#deploy">Deploy</a></li>
                        <li><a href="https://docs.hackctl.dev">Docs</a></li>
                    </ul>
                    <a className="nav-btn" href="https://github.com/hackctl-dev" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        <span>GitHub</span>
                    </a>
                </div>
            </nav>

            {/* HERO */}
            <section className="hero">
                <div className="grid-bg"></div>
                <div className="hero-inner">
                    <div className="hero-left">
                        <h1 style={{ fontVariationSettings: "'opsz' 9" }}>
                            Ship at <em>hackathon speed.</em>
                        </h1>
                        <p className="hero-sub">
                            <strong>Built for vibe coders. Works for everyone.</strong><br />
                            Scaffold, run, share, and deploy full-stack apps. Three commands. Zero config debt.
                        </p>
                        <div className="install-row">
                            <InstallCommand text="curl -fsSL https://get.hackctl.dev | sh" />
                        </div>
                        <div className="hero-ctas">
                            <a className="btn-p" href="https://docs.hackctl.dev">Get started</a>
                            <a className="btn-s" href="https://github.com/hackctl-dev" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* COMMANDS */}
            <section className="sec" id="commands" style={{ background: "var(--bg2)" }}>
                <div className="wrap">
                    <div className="sec-label">how it works</div>
                    <h2 className="sec-title">Three commands.<br /><em>Zero config debt.</em></h2>
                    <p className="sec-sub">Everything your team needs to go from blank terminal to live URL without touching a single config file.</p>
                    <div className="cmd-grid">
                        <FadeIn className="cmd-card">
                            <div className="cmd-pill">hackctl create</div>
                            <div className="cmd-mock">
                                <span className="tl cm-mu">● Creating project</span>
                                <span className="tl cm-ok">✓ Project successfully created</span>
                                <span className="tl cm-mu">?  my-app &amp;&amp; hackctl start</span>
                            </div>
                            <div className="cmd-h">Scaffold your stack</div>
                            <div className="cmd-p">Five production-ready templates. Validates deps, clones, installs, generates config and AI context files automatically.</div>
                        </FadeIn>
                        <FadeIn className="cmd-card" delay={0.1}>
                            <div className="cmd-pill">hackctl start</div>
                            <div className="cmd-mock">
                                <span className="tl cm-mu">i Starting services</span>
                                <span className="tl cm-ok">● Frontend: running</span>
                                <span className="tl cm-ok">● Backend: running</span>
                            </div>
                            <div className="cmd-h">Run everything together</div>
                            <div className="cmd-p">All services concurrent. Live TUI status. Auto-installs missing deps. Graceful shutdown. Works on all platforms.</div>
                        </FadeIn>
                        <FadeIn className="cmd-card" delay={0.2}>
                            <div className="cmd-pill">hackctl share</div>
                            <div className="cmd-mock">
                                <span className="tl cm-mu">i Preparing tunnel client</span>
                                <span className="tl cm-ok">● https://trycloudflare.com</span>
                                <span className="tl cm-mu">?  Ctrl+C to stop sharing.</span>
                            </div>
                            <div className="cmd-h">Live URL in seconds</div>
                            <div className="cmd-p">Cloudflare Quick Tunnel, no account, no config. Auto-downloads cloudflared. QR code in terminal. Share with judges instantly.</div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* DEMO */}
            <div className="demo-sec" id="demo" style={{ background: "var(--bg)" }}>
                <div className="wrap">
                    <div className="sec-label">see it run</div>
                    <h2 className="sec-title">From zero to live URL.<br /><em>Under two minutes.</em></h2>
                    <p className="sec-sub">Watch the complete flow from scaffolding a full-stack app to getting a live, shareable URL. No cuts, no fast-forwarding.</p>
                    <FadeIn className="demo-terminal" threshold={0.5}>
                        <div className="t-bar">
                            <div className="t-dot r"></div><div className="t-dot y"></div><div className="t-dot g"></div>
                            <div className="t-bar-title">Terminal</div>
                        </div>
                        <div className="t-body terminal-viewport" style={{ padding: "32px 36px" }}>
                            <MockTerminalLoop />
                        </div>
                    </FadeIn>
                </div>
            </div>

            {/* AI NATIVE */}
            <section className="sec" id="ai" style={{ background: "var(--bg2)" }}>
                <div className="wrap">
                    <div className="sec-label">ai-native by design</div>
                    <h2 className="sec-title">Your AI already<br /><em>knows the project.</em></h2>
                    <p className="sec-sub">Built-in agent instructions give your AI stack-specific context from the first prompt.</p>

                    <IdeMockup />

                    <div className="ai-logos" style={{ display: "flex", justifyContent: "center", gap: "16px", marginTop: "40px", flexWrap: "wrap", alignItems: 'center' }}>
                        <div className="ai-logo-chip" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: 'var(--bg3)', border: '1px solid var(--border)', borderRadius: '999px', position: 'relative', zIndex: 1 }}>
                            <img src="https://svgl.app/library/claude-ai-icon.svg" alt="Claude" style={{ width: '20px', height: '20px', filter: 'brightness(0) invert(1)' }} />
                            <span style={{ fontSize: '13px', color: 'var(--fg)' }}>Claude</span>
                        </div>
                        <div className="ai-logo-chip" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: 'var(--bg3)', border: '1px solid var(--border)', borderRadius: '999px', position: 'relative', zIndex: 1 }}>
                            <img src="https://svgl.app/library/cursor_dark.svg" alt="Cursor" style={{ width: '20px', height: '20px', filter: 'brightness(0) invert(1)' }} />
                            <span style={{ fontSize: '13px', color: 'var(--fg)' }}>Cursor</span>
                        </div>
                        <div className="ai-logo-chip" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: 'var(--bg3)', border: '1px solid var(--border)', borderRadius: '999px', position: 'relative', zIndex: 1 }}>
                            <img src="https://svgl.app/library/copilot_dark.svg" alt="Copilot" style={{ width: '20px', height: '20px', filter: 'brightness(0) invert(1)' }} />
                            <span style={{ fontSize: '13px', color: 'var(--fg)' }}>Copilot</span>
                        </div>
                        <div className="ai-logo-chip" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: 'var(--bg3)', border: '1px solid var(--border)', borderRadius: '999px', position: 'relative', zIndex: 1 }}>
                            <img src="https://svgl.app/library/antigravity.svg" alt="Antigravity" style={{ width: '20px', height: '20px', filter: 'brightness(0) invert(1)' }} />
                            <span style={{ fontSize: '13px', color: 'var(--fg)' }}>Antigravity</span>
                        </div>
                        <div className="ai-logo-chip" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: 'var(--bg3)', border: '1px solid var(--border)', borderRadius: '999px', position: 'relative', zIndex: 1 }}>
                            <img src="https://svgl.app/library/windsurf-dark.svg" alt="Windsurf" style={{ width: '20px', height: '20px', filter: 'brightness(0) invert(1)' }} />
                            <span style={{ fontSize: '13px', color: 'var(--fg)' }}>Windsurf</span>
                        </div>
                        <div className="ai-logo-chip" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: 'var(--bg3)', border: '1px solid var(--border)', borderRadius: '999px', position: 'relative', zIndex: 1 }}>
                            <img src="https://svgl.app/library/opencode-dark.svg" alt="OpenCode" style={{ width: '20px', height: '20px' }} />
                            <span style={{ fontSize: '13px', color: 'var(--fg)' }}>OpenCode</span>
                        </div>
                        <div className="ai-logo-chip" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: 'var(--bg3)', border: '1px solid var(--border)', borderRadius: '999px', position: 'relative', zIndex: 1 }}>
                            <img src="https://svgl.app/library/vscode.svg" alt="VS Code" style={{ width: '20px', height: '20px', filter: 'brightness(0) invert(1)' }} />
                            <span style={{ fontSize: '13px', color: 'var(--fg)' }}>VS Code</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* DEPLOY */}
            <section className="sec" id="deploy" style={{ background: "var(--bg)" }}>
                <div className="wrap">
                    <div className="sec-label">deployment</div>
                    <h2 className="sec-title">From local preview<br /><em>to production.</em></h2>
                    <p className="sec-sub">Share directly from your laptop for fast iteration, or securely deploy to your VPS when it&apos;s time. Zero vendor lock-in.</p>
                    <div className="deploy-grid">
                        <FadeIn className="deploy-card">
                            <div className="dc-label">local · fast demos</div>
                            <div className="dc-title">Share from your laptop</div>
                            <div className="dc-desc">Cloudflare Quick Tunnel exposes your local app publicly. Zero accounts required. Live URL in seconds from any network.</div>
                            <div className="deploy-graphic" aria-hidden="true">
                                <div className="dg-flow">
                                    <div className="dg-node">
                                        <Laptop size={16} strokeWidth={1.9} />
                                        <span>localhost</span>
                                    </div>
                                    <div className="dg-connector" />
                                    <div className="dg-node">
                                        <Globe size={16} strokeWidth={1.9} />
                                        <span>public URL</span>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                        <FadeIn className="deploy-card" delay={0.1}>
                            <div className="dc-label">vps · full control</div>
                            <div className="dc-title">Deploy to your server</div>
                            <div className="dc-desc">SSH/SCP + PM2 + persistent Cloudflare Tunnel. Provisions runtime, uploads files, starts services. Saves deploy state locally.</div>
                            <div className="deploy-graphic" aria-hidden="true">
                                <div className="dg-flow">
                                    <div className="dg-node">
                                        <Server size={16} strokeWidth={1.9} />
                                        <span>VPS</span>
                                    </div>
                                    <div className="dg-connector" />
                                    <div className="dg-node">
                                        <Globe size={16} strokeWidth={1.9} />
                                        <span>public URL</span>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* TEMPLATES */}
            <section className="sec" id="templates" style={{ background: "var(--bg2)", maxWidth: "none", padding: "112px 0" }}>
                <div className="wrap">
                    <div className="sec-label">official templates</div>
                    <h2 className="sec-title">Pick your stack.<br /><em>We&apos;ll handle the rest.</em></h2>
                    <p className="sec-sub">Battle-tested starters with prewired services, AI instructions included, and sensible defaults tuned for rapid prototyping.</p>

                    <div className="tmpl-table-wrap">
                        <table className="tmpl-table">
                            <thead>
                                <tr>
                                    <th>Template</th>
                                    <th>Stack</th>
                                    <th>Best for</th>
                                    <th>Profile</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>mern</td>
                                    <td>React + Vite, Express, MongoDB</td>
                                    <td>Rapid full-stack CRUD apps</td>
                                    <td>Classic React + Node flow</td>
                                </tr>
                                <tr>
                                    <td>pern</td>
                                    <td>React + Vite, Express, PostgreSQL</td>
                                    <td>Relational data projects</td>
                                    <td>SQL-first backend workflows</td>
                                </tr>
                                <tr>
                                    <td>next-supabase</td>
                                    <td>Next.js App Router, Supabase Postgres</td>
                                    <td>Fast product MVPs with auth</td>
                                    <td>Managed backend + server components</td>
                                </tr>
                                <tr>
                                    <td>sveltekit-supabase</td>
                                    <td>SvelteKit, Supabase Postgres</td>
                                    <td>Lean UI and high responsiveness</td>
                                    <td>Minimal overhead full-stack setup</td>
                                </tr>
                                <tr>
                                    <td>nuxt-supabase</td>
                                    <td>Nuxt, Supabase Postgres</td>
                                    <td>Vue teams and content-heavy apps</td>
                                    <td>Nuxt DX with managed Postgres</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div style={{ marginTop: "40px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px", paddingTop: "24px", borderTop: "1px solid var(--border)" }}>
                        <span style={{ fontSize: "14px", color: "var(--muted)", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                            More stacks coming soon. Contribute a template
                            <ArrowRight size={14} strokeWidth={1.8} />
                        </span>
                        <a href="https://github.com/hackctl-dev/templates" className="btn-s" style={{ padding: "10px 20px" }} target="_blank" rel="noopener noreferrer">View Templates Repo</a>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <div className="cta-sec">
                <div className="grid-bg"></div>
                <div className="cta-inner">
                    <h2>Your next hackathon <em>starts here.</em></h2>
                    <p>Three commands. Live URL. Ship something real.</p>
                    <div className="cta-install" style={{ padding: 0, boxShadow: 'none' }}>
                        <InstallCommand text="curl -fsSL https://get.hackctl.dev | sh" />
                    </div>
                    <div className="cta-links">
                        <a className="btn-p" href="https://docs.hackctl.dev">Read the docs</a>
                        <a className="btn-s" href="https://github.com/hackctl-dev" target="_blank" rel="noopener noreferrer">View GitHub</a>
                    </div>
                </div>
            </div>

            <footer className="footer-bar">
                <div className="footer-inner">
                    <Link className="f-logo" href="/">hackctl</Link>
                    <div className="f-links">
                        <a href="https://docs.hackctl.dev">Docs</a>
                        <a href="https://github.com/hackctl-dev">GitHub</a>
                        <a href="https://github.com/hackctl-dev/templates">Templates</a>
                    </div>
                </div>
            </footer>
        </>
    )
}
