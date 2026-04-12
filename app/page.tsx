"use client";

import { motion } from "framer-motion";
import { Terminal, Copy, Check, Zap, Globe, Folder, Rocket } from "lucide-react";
import { useState } from "react";

const BOLD_GRADIENT = "bg-gradient-to-br from-emerald-400 to-teal-500 bg-clip-text text-transparent";

export default function Home() {
  const [copiedOs, setCopiedOs] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedOs(id);
    setTimeout(() => setCopiedOs(null), 2000);
  };

  const usageSteps = [
    { icon: Folder, cmd: "hackctl create", desc: "Initialize project" },
    { icon: Zap, cmd: "hackctl start", desc: "Boot up services" },
    { icon: Globe, cmd: "hackctl share", desc: "Get public URL" }
  ];

  return (
    <div className="h-[100dvh] bg-zinc-950 text-zinc-50 font-sans relative overflow-hidden flex flex-col selection:bg-teal-500/30">
      
      {/* Background Ambience */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-teal-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      {/* Header */}
      <header className="absolute top-0 w-full z-50 py-6 md:py-8 bg-transparent">
        <div className="w-[90%] md:w-[75%] mx-auto flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold tracking-tight text-zinc-100 flex items-center gap-2"
          >
            <div className="w-6 h-6 rounded bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              <Terminal size={14} className="text-zinc-950 stroke-[3]" />
            </div>
            hackctl
          </motion.div>
          <motion.a 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            href="https://github.com/hackctl-dev" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-50 transition-colors flex items-center gap-2 text-sm font-medium"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.2 5.2 0 0 0-1.39-3.5 5.0 5.0 0 0 0-.14-3.46s-1.14-.37-3.54 1.2a12.08 12.08 0 0 0-6.4 0C6.14 1.05 5 1.42 5 1.42a5.0 5.0 0 0 0-.14 3.46A5.2 5.2 0 0 0 3.5 8.4c0 5.23 3 6.42 6 6.76a4.8 4.8 0 0 0-1 3.24v4"></path><path d="M5 19c-3 1-4-3-4-3"></path></svg>
            <span className="hidden sm:inline">GitHub</span>
          </motion.a>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center p-6">
        <div className="w-[90%] md:w-[75%] mx-auto flex flex-col items-center text-center">
          
          {/* Hero Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-zinc-100 mb-8"
          >
            Launch Hackathon<br className="hidden sm:block" /> Projects <span className={BOLD_GRADIENT}>Faster.</span>
          </motion.h1>

          {/* Description Text */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-xl md:text-2xl text-zinc-400 mb-12 leading-relaxed"
          >
            Scaffold, start, and share your project instantly. <br className="hidden md:block"/>
            Spend less time configuring, more time building.
          </motion.p>

          <div className="w-full flex flex-col items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-5xl mx-auto text-left">
              
              {/* Install Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="w-full bg-zinc-900/90 backdrop-blur-md rounded-xl shadow-2xl border border-zinc-700/50 flex flex-col overflow-hidden"
              >
                <div className="px-4 py-3.5 border-b border-zinc-700/50 flex items-center gap-2 text-zinc-300 text-sm font-medium">
                  <Terminal size={16} className="text-zinc-500" />
                  Install
                </div>
                <div className="p-3 flex-1 flex flex-col gap-3 justify-center">
                  
                  {/* Windows */}
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex flex-col gap-1.5"
                  >
                    <span className="text-[11px] uppercase tracking-wider text-zinc-500 font-semibold px-1">Windows</span>
                    <div 
                      onClick={() => copyToClipboard("irm https://hackctl.dev/install.ps1 | iex", 'win')}
                      className="w-full bg-[#27272a] border border-zinc-700/50 rounded-lg p-3 flex items-center justify-between cursor-pointer group/code hover:bg-zinc-800 transition-colors"
                    >
                      <code className="font-mono text-sm text-zinc-200 truncate pr-4">
                        irm https://hackctl.dev/install.ps1 | iex
                      </code>
                      <button
                        className="flex shrink-0 items-center justify-center text-zinc-400 group-hover/code:text-zinc-100 transition-all"
                        aria-label="Copy Windows install command"
                      >
                        {copiedOs === 'win' ? <Check size={16} className="text-teal-400"/> : <Copy size={16} />}
                      </button>
                    </div>
                  </motion.div>

                  {/* macOS / Linux */}
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col gap-1.5"
                  >
                    <span className="text-[11px] uppercase tracking-wider text-zinc-500 font-semibold px-1">macOS / Linux</span>
                    <div 
                      onClick={() => copyToClipboard("curl -sL https://hackctl.dev/install.sh | bash", 'mac')}
                      className="w-full bg-[#27272a] border border-zinc-700/50 rounded-lg p-3 flex items-center justify-between cursor-pointer group/code hover:bg-zinc-800 transition-colors"
                    >
                      <code className="font-mono text-sm text-zinc-200 truncate pr-4">
                        curl -sL https://hackctl.dev/install.sh | bash
                      </code>
                      <button
                        className="flex shrink-0 items-center justify-center text-zinc-400 group-hover/code:text-zinc-100 transition-all"
                        aria-label="Copy macOS/Linux install command"
                      >
                        {copiedOs === 'mac' ? <Check size={16} className="text-teal-400"/> : <Copy size={16} />}
                      </button>
                    </div>
                  </motion.div>

                </div>
              </motion.div>

              {/* Usage Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="w-full bg-zinc-900/90 backdrop-blur-md rounded-xl shadow-2xl border border-zinc-700/50 flex flex-col overflow-hidden"
              >
                <div className="px-4 py-3.5 border-b border-zinc-700/50 flex items-center gap-2 text-zinc-300 text-sm font-medium">
                  <Rocket size={16} className="text-zinc-500" />
                  Usage
                </div>
                <div className="p-3 flex-1 flex flex-col gap-2 justify-center">
                  {usageSteps.map((step, idx) => {
                    const Icon = step.icon;
                    return (
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 + (idx * 0.1) }}
                        key={idx} 
                        className="w-full rounded-lg px-4 py-3 flex items-center justify-between bg-[#27272a] border border-zinc-700/50 cursor-default"
                      >
                        <div className="flex items-center gap-3">
                          <Icon size={16} className="text-zinc-400" />
                          <code className="font-mono text-sm text-zinc-200">
                            {step.cmd}
                          </code>
                        </div>
                        <span className="text-sm text-zinc-400 font-medium hidden sm:block">
                          {step.desc}
                        </span>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </main>

    </div>
  );
}
