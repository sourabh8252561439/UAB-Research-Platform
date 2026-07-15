'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ShieldCheck,
  Stethoscope,
  Sparkles,
  Search,
  Microscope,
  HeartPulse,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { trustIndicators, stats } from '@/lib/medical-data'

const iconMap: Record<string, React.ElementType> = {
  ShieldCheck,
  Users: ShieldCheck,
  CalendarClock: Stethoscope,
  HeartHandshake: HeartPulse,
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-28 lg:pt-36 pb-16 lg:pb-24 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[oklch(0.97_0.02_240)] via-background to-background" />
      <div className="absolute inset-0 -z-10 bg-hero-grid opacity-70" aria-hidden="true" />
      <div
        className="absolute top-0 left-1/4 w-[480px] h-[480px] rounded-full blur-3xl -z-10 opacity-50"
        style={{
          background:
            'radial-gradient(circle, color-mix(in oklch, var(--medical) 30%, transparent) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-32 right-1/4 w-[420px] h-[420px] rounded-full blur-3xl -z-10 opacity-40"
        style={{
          background:
            'radial-gradient(circle, color-mix(in oklch, var(--teal) 30%, transparent) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left: text */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-foreground shadow-soft"
            >
              <Sparkles className="w-3.5 h-3.5 text-[var(--medical)]" aria-hidden="true" />
              <span>Trusted by patients, caregivers, and clinicians worldwide</span>
            </motion.div>

            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-balance leading-[1.05]"
            >
              Understanding{' '}
              <span className="gradient-text">Underactive Bladder</span>{' '}
              through evidence-based medicine
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-2xl text-pretty leading-relaxed"
            >
              The world&apos;s most comprehensive educational platform for Underactive Bladder
              (UAB), Hypocontractile Bladder, and Detrusor Underactivity (DU). Explore symptoms,
              diagnosis, treatments, emerging therapies, and active clinical trials — all reviewed
              by board-certified specialists.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[var(--navy)] to-[var(--medical)] hover:opacity-90 text-white shadow-glow h-12 px-6 text-base"
              >
                <a href="#about-uab">
                  Explore the Condition
                  <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 px-6 text-base glass border-border hover:bg-accent"
              >
                <a href="#ai-assistant">
                  <Search className="mr-2 w-4 h-4" aria-hidden="true" />
                  Ask the AI Assistant
                </a>
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 text-xs text-muted-foreground italic max-w-2xl leading-relaxed"
            >
              This website is for educational purposes only and is not a substitute for
              professional medical advice, diagnosis, or treatment. Always consult a qualified
              healthcare provider regarding any medical condition.
            </motion.p>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3"
            >
              {trustIndicators.map((t) => {
                const Icon = iconMap[t.icon] || ShieldCheck
                return (
                  <div
                    key={t.title}
                    className="glass rounded-xl p-3 shadow-soft hover:shadow-glow transition-shadow"
                  >
                    <Icon className="w-5 h-5 text-[var(--medical)] mb-1.5" aria-hidden="true" />
                    <p className="text-xs font-semibold text-foreground leading-tight">{t.title}</p>
                    <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug">
                      {t.description}
                    </p>
                  </div>
                )
              })}
            </motion.div>
          </div>

          {/* Right: visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Central glass card */}
              <div className="absolute inset-0 glass-strong rounded-3xl shadow-premium p-6 flex flex-col">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--navy)] to-[var(--medical)] flex items-center justify-center">
                      <Microscope className="w-5 h-5 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium">Research Snapshot</p>
                      <p className="text-sm font-bold text-foreground">UAB by the numbers</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-[var(--medical)]/10 text-[var(--medical)] text-[10px] font-semibold px-2 py-0.5">
                    LIVE
                  </span>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3 flex-1">
                  {stats.map((s, i) => (
                    <motion.div
                      key={s.label}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                      className="rounded-xl bg-white/60 dark:bg-white/5 border border-border/60 p-3"
                    >
                      <p className="text-2xl lg:text-3xl font-bold gradient-text leading-none">
                        {s.value}
                      </p>
                      <p className="mt-1 text-xs font-semibold text-foreground leading-tight">
                        {s.label}
                      </p>
                      <p className="text-[10px] text-muted-foreground mt-0.5 leading-snug">
                        {s.description}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-border/60">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Data sourced from peer-reviewed literature</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-[var(--medical)]" aria-hidden="true" />
                  </div>
                </div>
              </div>

              {/* Floating accent cards */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 glass rounded-2xl p-3 shadow-glow w-36"
              >
                <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wide">
                  Drug Pipeline
                </p>
                <p className="text-lg font-bold text-foreground">TAC-302</p>
                <p className="text-[10px] text-[var(--medical)] font-medium">Phase 2 • Recruiting</p>
              </motion.div>

              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-4 glass rounded-2xl p-3 shadow-glow w-36"
              >
                <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wide">
                  Clinical Trials
                </p>
                <p className="text-lg font-bold text-foreground">50+ active</p>
                <p className="text-[10px] text-[var(--teal)] font-medium">Updated daily</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
