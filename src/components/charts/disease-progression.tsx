'use client'

import * as React from 'react'
import { motion } from 'framer-motion'

/**
 * Disease progression infographic showing the trajectory of untreated UAB
 * from early symptoms through complications. Uses color-coded stages and
 * icons to make the progression visually clear.
 */
export function DiseaseProgressionInfographic({ className }: { className?: string }) {
  const stages = [
    {
      phase: 'Early',
      period: 'Months 1–6',
      color: 'oklch(0.7 0.13 200)',
      title: 'Subtle Voiding Changes',
      points: ['Occasional hesitancy', 'Mild weak stream', 'Sense of incomplete emptying'],
      pvr: '50–100 mL',
    },
    {
      phase: 'Established',
      period: 'Months 6–24',
      color: 'oklch(0.78 0.15 80)',
      title: 'Recognizable Symptoms',
      points: ['Persistent weak stream', 'Straining to void', 'Elevated post-void residual'],
      pvr: '100–200 mL',
    },
    {
      phase: 'Advanced',
      period: 'Years 2–5',
      color: 'oklch(0.7 0.18 60)',
      title: 'Functional Impact',
      points: ['Frequent UTIs', 'Prolonged voiding time', 'Reduced bladder sensation'],
      pvr: '200–400 mL',
    },
    {
      phase: 'Complicated',
      period: 'Years 5+',
      color: 'oklch(0.65 0.2 18)',
      title: 'Risk of Complications',
      points: ['Chronic retention', 'Hydronephrosis', 'Renal function decline'],
      pvr: '>400 mL',
    },
  ]

  return (
    <div className={className}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="mb-5"
      >
        <h3 className="font-bold text-foreground text-base">Disease Progression: Untreated UAB</h3>
        <p className="text-xs text-muted-foreground mt-0.5">
          Typical trajectory of untreated Underactive Bladder — early intervention prevents progression to complications.
        </p>
      </motion.div>

      {/* Horizontal progression bar */}
      <div className="relative">
        {/* Connecting line */}
        <div className="absolute top-6 left-6 right-6 h-1 rounded-full bg-gradient-to-r from-[oklch(0.7_0.13_200)] via-[oklch(0.78_0.15_80)] via-[oklch(0.7_0.18_60)] to-[oklch(0.65_0.2_18)] opacity-30" aria-hidden="true" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {stages.map((stage, i) => (
            <motion.div
              key={stage.phase}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              {/* Phase marker */}
              <div className="flex justify-center mb-3">
                <motion.div
                  className="w-12 h-12 rounded-full flex items-center justify-center shadow-glow border-4 border-background relative z-10"
                  style={{ background: stage.color }}
                  whileHover={{ scale: 1.08 }}
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3, ease: 'easeInOut' }}
                >
                  <span className="text-white font-bold text-base">{i + 1}</span>
                </motion.div>
              </div>

              {/* Card */}
              <div className="rounded-xl glass shadow-soft p-4 h-full hover:shadow-glow transition-shadow">
                <div className="flex items-baseline justify-between mb-2">
                  <p className="text-xs font-bold uppercase tracking-wide" style={{ color: stage.color }}>
                    {stage.phase}
                  </p>
                  <p className="text-[10px] text-muted-foreground">{stage.period}</p>
                </div>
                <h4 className="font-bold text-sm text-foreground leading-tight">{stage.title}</h4>
                <ul className="mt-2.5 space-y-1">
                  {stage.points.map((point) => (
                    <li key={point} className="flex items-start gap-1.5 text-[11px] text-muted-foreground leading-snug">
                      <span className="w-1 h-1 rounded-full mt-1.5 shrink-0" style={{ background: stage.color }} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-3 pt-2.5 border-t border-border/40">
                  <p className="text-[10px] text-muted-foreground">Post-void residual</p>
                  <p className="font-mono font-bold text-xs" style={{ color: stage.color }}>{stage.pvr}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <p className="mt-4 text-[10px] text-muted-foreground italic leading-relaxed">
        Progression timeline is illustrative — actual rate varies significantly by underlying etiology.
        Early diagnosis and treatment can halt or reverse progression at any stage.
      </p>
    </div>
  )
}
