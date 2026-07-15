'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Circle, Clock, Beaker, FlaskConical } from 'lucide-react'

interface TrialPhase {
  phase: string
  period: string
  status: 'completed' | 'active' | 'planned'
  trials: { name: string; nctId: string; intervention: string }[]
}

const phases: TrialPhase[] = [
  {
    phase: 'Preclinical',
    period: '2015–2019',
    status: 'completed',
    trials: [
      { name: 'AAV Gene Therapy (animal models)', nctId: 'Preclinical', intervention: 'AAV-NT-3 vector' },
      { name: 'MSC safety in rodents', nctId: 'Preclinical', intervention: 'Bone marrow MSCs' },
    ],
  },
  {
    phase: 'Phase 1',
    period: '2020–2022',
    status: 'completed',
    trials: [
      { name: 'TAC-302 first-in-human', nctId: 'NCT05234108', intervention: 'Single ascending dose' },
      { name: 'ZG-802 safety study', nctId: 'NCT05389412', intervention: 'Healthy volunteers' },
    ],
  },
  {
    phase: 'Phase 2',
    period: '2023–2025',
    status: 'active',
    trials: [
      { name: 'TAC-302 efficacy trial', nctId: 'NCT05678412', intervention: 'TAC-302 vs placebo' },
      { name: 'Stem cell therapy DU-001', nctId: 'NCT06013456', intervention: 'Intradetrusor MSCs' },
      { name: 'Acotiamide for diabetic cystopathy', nctId: 'NCT05890123', intervention: 'Acotiamide 100mg TID' },
      { name: 'LiSWT for UAB', nctId: 'NCT06123478', intervention: 'Focused shockwave vs sham' },
    ],
  },
  {
    phase: 'Phase 3',
    period: '2025–2027 (planned)',
    status: 'planned',
    trials: [
      { name: 'SNM-DU pivotal trial', nctId: 'NCT05892341', intervention: 'InterStim II vs sham' },
      { name: 'TAC-302 Phase 3 (pending)', nctId: 'TBD', intervention: 'TAC-302 vs sham' },
    ],
  },
]

const statusConfig = {
  completed: { color: 'oklch(0.55 0.15 252)', bg: 'oklch(0.55 0.15 252)', icon: CheckCircle2, label: 'Completed' },
  active: { color: 'oklch(0.7 0.18 60)', bg: 'oklch(0.7 0.18 60)', icon: Clock, label: 'Active' },
  planned: { color: 'oklch(0.6 0.15 200)', bg: 'oklch(0.6 0.15 200)', icon: Circle, label: 'Planned' },
}

export function ClinicalTrialTimeline({ className }: { className?: string }) {
  return (
    <div className={className}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <h3 className="font-bold text-foreground text-base">Clinical Trial Development Timeline</h3>
        <p className="text-xs text-muted-foreground mt-0.5">
          Progression of UAB-targeted therapies through clinical development phases
        </p>
      </motion.div>

      <div className="relative">
        {/* Vertical line */}
        <div
          className="absolute left-[15px] sm:left-1/2 top-2 bottom-2 w-0.5 bg-gradient-to-b from-[var(--navy)] via-[var(--medical)] to-[var(--teal)] opacity-30 sm:-translate-x-1/2"
          aria-hidden="true"
        />

        <div className="space-y-6">
          {phases.map((phase, phaseIdx) => {
            const StatusIcon = statusConfig[phase.status].icon
            const isEven = phaseIdx % 2 === 0
            return (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: phaseIdx * 0.1 }}
                className={`relative flex flex-col sm:flex-row ${isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'} gap-4`}
              >
                {/* Phase marker */}
                <div className="absolute left-0 sm:left-1/2 sm:-translate-x-1/2 z-10">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center shadow-glow border-2 border-background"
                    style={{ background: statusConfig[phase.status].bg }}
                  >
                    <StatusIcon className="w-4 h-4 text-white" aria-hidden="true" />
                  </div>
                </div>

                {/* Spacer for the other side on desktop */}
                <div className="hidden sm:block sm:w-1/2" />

                {/* Content card */}
                <div className={`pl-12 sm:pl-0 sm:w-1/2 ${isEven ? 'sm:pr-8' : 'sm:pl-8'}`}>
                  <div className="glass rounded-xl shadow-soft p-4 hover:shadow-glow transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-bold text-foreground text-sm">{phase.phase}</h4>
                        <p className="text-[11px] text-muted-foreground">{phase.period}</p>
                      </div>
                      <span
                        className="text-[10px] font-semibold rounded-full px-2 py-0.5"
                        style={{
                          background: `color-mix(in oklch, ${statusConfig[phase.status].bg} 15%, transparent)`,
                          color: statusConfig[phase.status].color,
                        }}
                      >
                        {statusConfig[phase.status].label}
                      </span>
                    </div>

                    <ul className="space-y-2 mt-3">
                      {phase.trials.map((trial) => (
                        <li key={`${trial.nctId}-${trial.name}`} className="rounded-lg bg-white/50 dark:bg-white/5 border border-border/40 p-2.5">
                          <div className="flex items-start justify-between gap-2">
                            <p className="text-xs font-semibold text-foreground leading-tight">{trial.name}</p>
                            <span className="text-[10px] text-[var(--medical)] font-mono shrink-0">{trial.nctId}</span>
                          </div>
                          <p className="text-[11px] text-muted-foreground mt-1">{trial.intervention}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Footer note */}
      <div className="mt-6 flex items-center gap-2 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50 p-3">
        <FlaskConical className="w-4 h-4 text-amber-700 dark:text-amber-400 shrink-0" aria-hidden="true" />
        <p className="text-xs text-amber-900 dark:text-amber-200 leading-relaxed">
          All listed investigational therapies (TAC-302, ZG-802, stem cells, gene therapy, LiSWT for UAB) remain
          <strong> not FDA-approved</strong> for Underactive Bladder. Available only through registered clinical trials at
          <a href="https://clinicaltrials.gov" target="_blank" rel="noopener noreferrer" className="underline font-semibold ml-1">ClinicalTrials.gov</a>.
        </p>
      </div>
    </div>
  )
}
