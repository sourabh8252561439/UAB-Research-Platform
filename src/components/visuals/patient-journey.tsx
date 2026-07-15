'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Stethoscope, FlaskConical, Pill, Syringe, Activity, HeartHandshake } from 'lucide-react'

/**
 * Patient journey visual flow diagram.
 * Shows the typical path from first symptoms through diagnosis, treatment, and management.
 * Each step has an icon, title, and description with a connecting animated path.
 */
const journeySteps = [
  {
    icon: Activity,
    title: 'Recognize Symptoms',
    description: 'Notice changes in voiding: weak stream, hesitancy, incomplete emptying.',
    duration: 'Weeks–Months',
    color: 'oklch(0.55 0.15 252)',
  },
  {
    icon: Stethoscope,
    title: 'Consult Urologist',
    description: 'Schedule evaluation. Bring voiding diary and medication list.',
    duration: '1–2 weeks',
    color: 'oklch(0.62 0.14 230)',
  },
  {
    icon: FlaskConical,
    title: 'Diagnostic Testing',
    description: 'Uroflowmetry, PVR measurement, urodynamic study with BCI calculation.',
    duration: '2–4 weeks',
    color: 'oklch(0.7 0.13 200)',
  },
  {
    icon: Pill,
    title: 'Begin Treatment',
    description: 'Start with conservative options: behavioral therapy, alpha-blockers, CIC.',
    duration: 'Ongoing',
    color: 'oklch(0.78 0.15 80)',
  },
  {
    icon: Syringe,
    title: 'Advanced Options',
    description: 'If conservative fails: neuromodulation, or clinical trial enrollment.',
    duration: '3–6 months',
    color: 'oklch(0.7 0.18 60)',
  },
  {
    icon: HeartHandshake,
    title: 'Long-Term Management',
    description: 'Regular follow-up, monitor PVR, adjust therapy, maintain quality of life.',
    duration: 'Lifelong',
    color: 'oklch(0.65 0.2 18)',
  },
]

export function PatientJourneyFlow({ className }: { className?: string }) {
  return (
    <div className={className}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <h3 className="font-bold text-foreground text-base">The Patient Journey</h3>
        <p className="text-xs text-muted-foreground mt-0.5">
          A visual roadmap from first symptoms to long-term management. Most patients progress through these stages over months to years.
        </p>
      </motion.div>

      <div className="relative">
        {/* Desktop horizontal flow */}
        <div className="hidden lg:block">
          {/* Connecting line */}
          <div className="absolute top-8 left-8 right-8 h-0.5 bg-gradient-to-r from-[oklch(0.55_0.15_252)] via-[oklch(0.7_0.13_200)] via-[oklch(0.78_0.15_80)] to-[oklch(0.65_0.2_18)] opacity-30" aria-hidden="true" />

          {/* Animated traveling dot */}
          <motion.div
            className="absolute top-8 w-3 h-3 rounded-full shadow-glow"
            style={{ background: 'oklch(0.65 0.2 18)', marginTop: '-5.5px' }}
            initial={{ left: '5%' }}
            animate={{ left: ['5%', '20%', '35%', '50%', '65%', '80%', '95%'] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />

          <div className="grid grid-cols-6 gap-3">
            {journeySteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step number badge */}
                <div className="absolute -top-2 -left-2 z-10 w-5 h-5 rounded-full bg-foreground text-background text-[10px] font-bold flex items-center justify-center">
                  {i + 1}
                </div>
                {/* Icon circle */}
                <motion.div
                  className="relative w-16 h-16 rounded-full flex items-center justify-center shadow-glow border-4 border-background z-[1]"
                  style={{ background: step.color }}
                  whileHover={{ scale: 1.08 }}
                  initial={{ y: 0 }}
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.5, ease: 'easeInOut' }}
                >
                  <step.icon className="w-7 h-7 text-white" aria-hidden="true" />
                </motion.div>
                {/* Card */}
                <div className="mt-3 rounded-xl glass shadow-soft p-3 w-full">
                  <h4 className="font-bold text-foreground text-xs leading-tight">{step.title}</h4>
                  <p className="text-[10px] text-muted-foreground mt-1.5 leading-snug">{step.description}</p>
                  <p className="text-[10px] font-semibold mt-2 pt-2 border-t border-border/40" style={{ color: step.color }}>
                    {step.duration}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile vertical flow */}
        <div className="lg:hidden space-y-3">
          {journeySteps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative flex gap-3 items-start"
            >
              {/* Icon + connector */}
              <div className="flex flex-col items-center shrink-0">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center shadow-glow border-2 border-background"
                  style={{ background: step.color }}
                >
                  <step.icon className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                {i < journeySteps.length - 1 && (
                  <div className="w-0.5 h-12 bg-gradient-to-b from-muted to-transparent mt-1" />
                )}
              </div>
              {/* Card */}
              <div className="flex-1 rounded-xl glass shadow-soft p-3 mb-2">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-bold text-foreground text-sm">{step.title}</h4>
                  <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full" style={{ background: `color-mix(in oklch, ${step.color} 15%, transparent)`, color: step.color }}>
                    {step.duration}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
