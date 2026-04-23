import Link from "next/link"
import { InstallCommand } from "@/components/install-command"
import { FadeIn } from "@/components/fade-in"

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
          <div className="hero-left" style={{ animation: "fadeUp .6s ease both" }}>
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

      {/* TICKER */}
      <div className="ticker-wrap">
        <div className="ticker-track">
          <span className="tick-item"><b>5</b> official templates</span>
          <span className="tick-item">create · start · share · deploy · status · destroy</span>
          <span className="tick-item">Cloudflare Quick Tunnel, <b>zero account needed</b></span>
          <span className="tick-item">AGENTS.md · CLAUDE.md · GEMINI.md</span>
          <span className="tick-item">SSH + PM2 deploy</span>
          <span className="tick-item">macOS · Linux · Windows</span>
          <span className="tick-item">MIT License · open source</span>
          <span className="tick-item"><b>5</b> official templates</span>
          <span className="tick-item">create · start · share · deploy · status · destroy</span>
          <span className="tick-item">Cloudflare Quick Tunnel, <b>zero account needed</b></span>
          <span className="tick-item">AGENTS.md · CLAUDE.md · GEMINI.md</span>
          <span className="tick-item">SSH + PM2 deploy</span>
          <span className="tick-item">macOS · Linux · Windows</span>
          <span className="tick-item">MIT License · open source</span>
        </div>
      </div>

      {/* COMMANDS */}
      <section className="sec" id="commands">
        <div className="wrap">
          <div className="sec-label">how it works</div>
          <h2 className="sec-title">Three commands.<br /><em>Zero config debt.</em></h2>
          <p className="sec-sub">Everything your team needs to go from blank terminal to live URL without touching a single config file.</p>
          <div className="cmd-grid">
            <FadeIn className="cmd-card">
              <div className="cmd-pill">hackctl create</div>
              <div className="cmd-mock">
                <span className="tl" style={{ color: "#6ee7b7" }}>✓ node 20.11.0</span>
                <span className="tl" style={{ color: "#6ee7b7" }}>✓ npm 10.2.4</span>
                <span className="tl cm-dim">  cloning mern...</span>
                <span className="tl" style={{ color: "#6ee7b7" }}>✓ my-app ready</span>
              </div>
              <div className="cmd-h">Scaffold your stack</div>
              <div className="cmd-p">Five production-ready templates. Validates deps, clones, installs, generates config and AI context files automatically.</div>
            </FadeIn>
            <FadeIn className="cmd-card" delay={0.1}>
              <div className="cmd-pill">hackctl start</div>
              <div className="cmd-mock">
                <span className="tl" style={{ color: "#6ee7b7" }}>⠿ frontend  :3000  healthy</span>
                <span className="tl" style={{ color: "#6ee7b7" }}>⠿ backend   :5000  healthy</span>
                <span className="tl cm-dim">  ctrl+c to stop</span>
              </div>
              <div className="cmd-h">Run everything together</div>
              <div className="cmd-p">All services concurrent. Live TUI status. Auto-installs missing deps. Graceful shutdown. Works on all platforms.</div>
            </FadeIn>
            <FadeIn className="cmd-card" delay={0.2}>
              <div className="cmd-pill">hackctl share</div>
              <div className="cmd-mock">
                <span className="tl cm-dim">  tunnel launching...</span>
                <span className="tl" style={{ color: "#6ee7b7" }}>✓ established</span>
                <span className="tl cm-dim"> </span>
                <span className="tl" style={{ color: "#a8b4ff" }}>  https://demo.trycloudflare.com</span>
              </div>
              <div className="cmd-h">Live URL in seconds</div>
              <div className="cmd-p">Cloudflare Quick Tunnel, no account, no config. Auto-downloads cloudflared. QR code in terminal. Share with judges instantly.</div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* DEMO */}
      <div className="demo-sec" id="demo">
        <div className="wrap">
          <div className="sec-label">see it run</div>
          <h2 className="sec-title">From zero to live URL.<br /><em>Under two minutes.</em></h2>
          <FadeIn className="demo-terminal" threshold={0.5}>
            <div className="t-bar">
              <div className="t-dot r"></div><div className="t-dot y"></div><div className="t-dot g"></div>
              <div className="t-bar-title">bash — hackctl full workflow</div>
            </div>
            <div className="t-body" style={{ padding: "32px 36px" }}>
              <span className="tl demo-line"><span className="tp">→</span> <span className="tc">hackctl create --stack mern --name my-app</span></span>
              <span className="tl ts demo-line">  ✓ git found · node 20.11 · npm 10.2</span>
              <span className="tl demo-line" style={{ color: "#6ee7b7" }}>  ✓ my-app scaffolded from mern template</span>
              <span className="tl ts demo-line">  ↳ AGENTS.md · CLAUDE.md · .cursorrules generated</span>
              <span className="tb demo-line"></span>
              <span className="tl demo-line"><span className="tp">→</span> <span className="tc">cd my-app && hackctl start</span></span>
              <span className="tl demo-line" style={{ color: "#6ee7b7" }}>  ⠿ frontend   running   localhost:3000</span>
              <span className="tl demo-line" style={{ color: "#6ee7b7" }}>  ⠿ backend    running   localhost:5000</span>
              <span className="tl ts demo-line">  ↳ all services healthy · ctrl+c to stop</span>
              <span className="tb demo-line"></span>
              <span className="tl demo-line"><span className="tp">→</span> <span className="tc">hackctl share</span></span>
              <span className="tl ts demo-line">  ↳ cloudflared auto-downloaded · launching tunnel...</span>
              <span className="tl demo-line" style={{ color: "#6ee7b7" }}>  ✓ tunnel established</span>
              <span className="tb demo-line"></span>
              <span className="tl ts demo-line">  Live URL  →  <span style={{ color: "#a8b4ff" }}>https://my-app-demo.trycloudflare.com</span></span>
              <span className="tl ts demo-line">  QR code printed. Share with your team.</span>
              <span className="tb demo-line"></span>
              <span className="tl demo-line"><span className="tp">→</span> <span className="cursor"></span></span>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* AI NATIVE */}
      <section className="sec" id="ai">
        <div className="wrap">
          <div className="sec-label">ai-native by design</div>
          <h2 className="sec-title">Your AI already<br /><em>knows the project.</em></h2>
          <p className="sec-sub">Every template ships with agent instructions built in. Open Cursor or Claude Code and your AI has accurate, stack-specific context from the first prompt.</p>
          <div className="ai-grid">
            <div className="ai-files">
              <FadeIn className="ai-file" threshold={0.2}>
                <span className="af-icon">📄</span>
                <span className="af-name">AGENTS.md</span>
                <span className="af-tag">canonical</span>
              </FadeIn>
              <FadeIn className="ai-file" delay={0.1} threshold={0.2}>
                <span className="af-icon">◆</span>
                <span className="af-name">CLAUDE.md</span>
                <span className="af-tag">claude code</span>
              </FadeIn>
              <FadeIn className="ai-file" delay={0.2} threshold={0.2}>
                <span className="af-icon">◇</span>
                <span className="af-name">GEMINI.md</span>
                <span className="af-tag">gemini</span>
              </FadeIn>
              <FadeIn className="ai-file" delay={0.3} threshold={0.2}>
                <span className="af-icon">⊞</span>
                <span className="af-name">.agents/skills/</span>
                <span className="af-tag">skill packs</span>
              </FadeIn>
              <FadeIn className="ai-tools-row" delay={0.4} threshold={0.2}>
                <span className="ai-tool">Claude Code</span>
                <span className="ai-tool">Cursor</span>
                <span className="ai-tool">Copilot</span>
                <span className="ai-tool">Gemini</span>
                <span className="ai-tool">Windsurf</span>
              </FadeIn>
            </div>
            <div className="ai-right">
              <div className="stat-block">
                <div className="stat-context">setup time</div>
                <div className="stat-num">0 <em>min</em></div>
                <div className="stat-label">spent giving your AI context. hackctl generates it at scaffold time, specific to your project, real file paths, real env vars, real ports.</div>
              </div>
              <div className="stat-block">
                <div className="stat-context">compatibility</div>
                <div className="stat-num">6+ <em>tools</em></div>
                <div className="stat-label">AI coding tools supported out of the box. One AGENTS.md as the canonical source. CLAUDE.md and GEMINI.md act as lightweight pointers.</div>
              </div>
              <div className="stat-block">
                <div className="stat-context">standard</div>
                <div className="stat-num"><em>open</em></div>
                <div className="stat-label">agentskills.io, originated by Anthropic, adopted across the industry. Standardized capabilities that work everywhere.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEMPLATES */}
      <section className="sec" id="templates" style={{ background: "var(--bg2)", maxWidth: "none", padding: "112px 0" }}>
        <div className="wrap">
          <div className="sec-label">official templates</div>
          <h2 className="sec-title">Pick your stack.<br /><em>We&apos;ll handle the rest.</em></h2>
          <p className="sec-sub">Battle-tested starters with prewired services, AI instructions included, and sensible defaults tuned for rapid prototyping.</p>
          
          <div className="tmpl-grid">
            <FadeIn className="tmpl-card">
              <div className="tmpl-name">mern</div>
              <div className="tmpl-desc">React + Vite, Express, MongoDB</div>
              <div className="tmpl-pills"><span className="tp-pill">React</span><span className="tp-pill">Vite</span><span className="tp-pill">Express</span><span className="tp-pill">MongoDB</span></div>
              <div className="tmpl-cmd">
                <span>hackctl create --stack mern</span>
              </div>
            </FadeIn>
            <FadeIn className="tmpl-card" delay={0.1}>
              <div className="tmpl-name">pern</div>
              <div className="tmpl-desc">React + Vite, Express, PostgreSQL</div>
              <div className="tmpl-pills"><span className="tp-pill">React</span><span className="tp-pill">Vite</span><span className="tp-pill">Express</span><span className="tp-pill">PostgreSQL</span></div>
              <div className="tmpl-cmd">
                <span>hackctl create --stack pern</span>
              </div>
            </FadeIn>
            <FadeIn className="tmpl-card" delay={0.2}>
              <div className="tmpl-name">next-supabase</div>
              <div className="tmpl-desc">Next.js App Router, Supabase Postgres</div>
              <div className="tmpl-pills"><span className="tp-pill">Next.js</span><span className="tp-pill">Supabase</span><span className="tp-pill">Postgres</span></div>
              <div className="tmpl-cmd">
                <span>hackctl create --stack next-supabase</span>
              </div>
            </FadeIn>
            <FadeIn className="tmpl-card" delay={0.3}>
              <div className="tmpl-name">sveltekit-supabase</div>
              <div className="tmpl-desc">SvelteKit, Supabase Postgres</div>
              <div className="tmpl-pills"><span className="tp-pill">SvelteKit</span><span className="tp-pill">Supabase</span><span className="tp-pill">Postgres</span></div>
              <div className="tmpl-cmd">
                <span>hackctl create --stack sveltekit-supabase</span>
              </div>
            </FadeIn>
            <FadeIn className="tmpl-card" delay={0.4}>
              <div className="tmpl-name">nuxt-supabase</div>
              <div className="tmpl-desc">Nuxt, Supabase Postgres</div>
              <div className="tmpl-pills"><span className="tp-pill">Nuxt</span><span className="tp-pill">Vue</span><span className="tp-pill">Supabase</span><span className="tp-pill">Postgres</span></div>
              <div className="tmpl-cmd">
                <span>hackctl create --stack nuxt-supabase</span>
              </div>
            </FadeIn>
          </div>
          <div style={{ marginTop: "40px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px", paddingTop: "24px", borderTop: "1px solid var(--border)" }}>
            <span style={{ fontSize: "14px", color: "var(--muted)" }}>More stacks coming soon. Contribute a template →</span>
            <a href="https://github.com/hackctl-dev/templates" className="btn-s" style={{ padding: "10px 20px" }} target="_blank" rel="noopener noreferrer">View Templates Repo</a>
          </div>
        </div>
      </section>

      {/* DEPLOY */}
      <section className="sec" id="deploy">
        <div className="wrap">
          <div className="sec-label">deployment</div>
          <h2 className="sec-title">From local preview<br /><em>to production.</em></h2>
          <p className="sec-sub">Share directly from your laptop for fast iteration, or securely SSH deploy to your own VPS when it&apos;s time to go live. No vendor lock-in.</p>
          <div className="deploy-grid">
            <FadeIn className="deploy-card">
              <div className="dc-label">local · fast demos</div>
              <div className="dc-title">Share from your laptop</div>
              <div className="dc-desc">Cloudflare Quick Tunnel exposes your local app publicly. Zero accounts required. Live URL in seconds from any network.</div>
              <div className="dc-term">
                <span className="tl"><span className="tp">→</span> <span className="tc">hackctl share</span></span>
                <span className="tl" style={{ color: "#6ee7b7" }}>  ✓ tunnel established</span>
                <span className="tl" style={{ color: "#a8b4ff" }}>  https://demo.trycloudflare.com</span>
              </div>
            </FadeIn>
            <FadeIn className="deploy-card" delay={0.1}>
              <div className="dc-label">vps · full control</div>
              <div className="dc-title">Deploy to your server</div>
              <div className="dc-desc">SSH/SCP + PM2 + persistent Cloudflare Tunnel. Provisions runtime, uploads files, starts services. Saves deploy state locally.</div>
              <div className="dc-term">
                <span className="tl"><span className="tp">→</span> <span className="tc">hackctl deploy \</span></span>
                <span className="tl"><span className="tc">  --target 1.2.3.4 --key ~/.ssh/id_rsa</span></span>
                <span className="tl" style={{ color: "#6ee7b7" }}>  ✓ deployed · pm2 running</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-sec">
        <div className="grid-bg"></div>
        <div className="cta-inner">
          <h2>Your next hackathon <em>starts here.</em></h2>
          <p>Three commands. Live URL. Ship something real.</p>
          <div className="cta-install" style={{ background: 'transparent', border: 'none', padding: 0, boxShadow: 'none' }}>
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
