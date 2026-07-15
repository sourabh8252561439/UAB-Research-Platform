'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import {
  HeartPulse, Dumbbell, Pill, Syringe, Zap, Dna,
  CheckCircle2, AlertTriangle, FlaskConical, ArrowRight,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { treatmentCategories } from '@/lib/medical-data'
import { SacralNeuromodulationDiagram } from '@/components/diagrams/sacral-neuromodulation'
import { StemCellTherapyDiagram } from '@/components/diagrams/stem-cell-therapy'
import { TreatmentEffectivenessChart } from '@/components/charts/treatment-effectiveness'
import { CICProcedureAnimation } from '@/components/visuals/cic-procedure'
import { DiagramCard } from '@/components/diagram-card'

const iconMap: Record<string, React.ElementType> = {
  HeartPulse, Dumbbell, Pill, Syringe, Zap, Dna,
}

const tagColors: Record<string, string> = {
  'First-line': 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300',
  'Second-line': 'bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300',
  'Third-line': 'bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300',
  'Emerging': 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300',
  'Experimental': 'bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300',
}

export function Treatments() {
  return (
    <section
      id="treatments"
      className="relative py-20 lg:py-28 scroll-mt-20"
      aria-labelledby="treatments-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Treatment options"
          title={
            <>
              A <span className="gradient-text">tiered approach</span> to managing UAB
            </>
          }
          description="No single treatment works for every patient. Management is staged from conservative behavioral interventions to advanced surgical and experimental therapies. Treatment selection depends on symptom severity, underlying etiology, patient preferences, and treatment response."
        />

        {/* Treatment hierarchy diagram */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mt-12 rounded-2xl glass shadow-soft p-6 lg:p-8"
        >
          <div className="flex flex-col lg:flex-row items-stretch gap-3">
            {treatmentCategories.map((cat, i) => {
              const Icon = iconMap[cat.icon] || HeartPulse
              return (
                <React.Fragment key={cat.id}>
                  <div className="flex-1 flex flex-col items-center text-center p-4 rounded-xl bg-white/60 dark:bg-white/5 border border-border/60">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--navy)] to-[var(--medical)] flex items-center justify-center mb-3 shadow-glow">
                      <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                    </div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                      Tier {i + 1}
                    </p>
                    <p className="font-bold text-foreground text-sm mt-0.5 leading-tight">{cat.name}</p>
                  </div>
                  {i < treatmentCategories.length - 1 && (
                    <div className="hidden lg:flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-[var(--medical)]" aria-hidden="true" />
                    </div>
                  )}
                </React.Fragment>
              )
            })}
          </div>
        </motion.div>

        {/* Tabs with detailed treatments */}
        <div className="mt-12">
          <Tabs defaultValue={treatmentCategories[0].id} className="w-full">
            <TabsList
              className="flex flex-wrap h-auto gap-1 bg-muted/60 p-1 rounded-xl mb-8"
              aria-label="Treatment categories"
            >
              {treatmentCategories.map((cat) => {
                const Icon = iconMap[cat.icon] || HeartPulse
                return (
                  <TabsTrigger
                    key={cat.id}
                    value={cat.id}
                    className="text-xs lg:text-sm data-[state=active]:bg-white dark:data-[state=active]:bg-card data-[state=active]:shadow-soft rounded-lg px-3 py-2 gap-2"
                  >
                    <Icon className="w-3.5 h-3.5" aria-hidden="true" />
                    <span className="hidden sm:inline">{cat.name}</span>
                    <span className="sm:hidden">{cat.name.split(' ')[0]}</span>
                  </TabsTrigger>
                )
              })}
            </TabsList>

            {treatmentCategories.map((cat) => {
              const Icon = iconMap[cat.icon] || HeartPulse
              return (
                <TabsContent key={cat.id} value={cat.id} className="mt-0">
                  <div className="grid lg:grid-cols-12 gap-6">
                    {/* Category intro */}
                    <div className="lg:col-span-4">
                      <div className="sticky top-24">
                        <Card className="glass shadow-soft overflow-hidden">
                          <div className="bg-gradient-to-br from-[var(--navy)] via-[var(--medical)] to-[var(--teal)] p-6 text-white">
                            <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur flex items-center justify-center mb-4">
                              <Icon className="w-6 h-6" aria-hidden="true" />
                            </div>
                            <h3 className="text-xl font-bold">{cat.name}</h3>
                            <p className="mt-2 text-sm opacity-90 leading-relaxed">{cat.shortDescription}</p>
                          </div>
                          <CardContent className="p-6">
                            <p className="text-xs text-muted-foreground leading-relaxed">
                              Treatments within this category are listed below with their evidence
                              tier. Always discuss risks and benefits with a qualified urologist
                              before initiating any therapy.
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    {/* Treatments list */}
                    <div className="lg:col-span-8 space-y-4">
                      {cat.treatments.map((treatment, idx) => (
                        <motion.div
                          key={treatment.name}
                          initial={{ opacity: 0, y: 16 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: '-80px' }}
                          transition={{ duration: 0.4, delay: idx * 0.05 }}
                        >
                          <Card className="glass shadow-soft hover:shadow-glow transition-shadow">
                            <CardContent className="p-6">
                              <div className="flex items-start justify-between gap-3 mb-3">
                                <div>
                                  <h4 className="text-lg font-bold text-foreground leading-tight">
                                    {treatment.name}
                                  </h4>
                                  <p className="text-xs text-muted-foreground mt-1">
                                    Treatment {idx + 1} of {cat.treatments.length} in {cat.name}
                                  </p>
                                </div>
                                <span className={`shrink-0 text-[11px] font-semibold rounded-full px-2.5 py-1 ${tagColors[treatment.tag]}`}>
                                  {treatment.tag}
                                </span>
                              </div>

                              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                {treatment.overview}
                              </p>

                              <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                  <h5 className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide mb-2">
                                    <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
                                    Benefits
                                  </h5>
                                  <ul className="space-y-1.5">
                                    {treatment.benefits.map((b) => (
                                      <li key={b} className="flex items-start gap-1.5 text-xs text-muted-foreground leading-relaxed">
                                        <span className="w-1 h-1 rounded-full bg-emerald-500 mt-1.5 shrink-0" aria-hidden="true" />
                                        <span>{b}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div>
                                  <h5 className="flex items-center gap-1.5 text-xs font-semibold text-rose-700 dark:text-rose-400 uppercase tracking-wide mb-2">
                                    <AlertTriangle className="w-3.5 h-3.5" aria-hidden="true" />
                                    Risks & Limitations
                                  </h5>
                                  <ul className="space-y-1.5">
                                    {treatment.risks.map((r) => (
                                      <li key={r} className="flex items-start gap-1.5 text-xs text-muted-foreground leading-relaxed">
                                        <span className="w-1 h-1 rounded-full bg-rose-500 mt-1.5 shrink-0" aria-hidden="true" />
                                        <span>{r}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>

                              <div className="mt-4 pt-4 border-t border-border/60">
                                <h5 className="flex items-center gap-1.5 text-xs font-semibold text-foreground uppercase tracking-wide mb-1.5">
                                  <FlaskConical className="w-3.5 h-3.5 text-[var(--medical)]" aria-hidden="true" />
                                  Current Evidence
                                </h5>
                                <p className="text-xs text-muted-foreground leading-relaxed italic">{treatment.evidence}</p>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              )
            })}
          </Tabs>
        </div>

        {/* Visual: Treatment effectiveness comparison chart */}
        <div className="mt-12">
          <DiagramCard
            title="Comparing Treatment Effectiveness"
            description="Evidence-based comparison of UAB treatments. Bars show the percentage of patients achieving ≥30% PVR reduction. Established therapies (blue) have stronger evidence than investigational agents (red), which remain in clinical trials."
            badge="Evidence Chart"
          >
            <TreatmentEffectivenessChart />
          </DiagramCard>
        </div>

        {/* Visual: Sacral Neuromodulation + Stem Cell Therapy diagrams */}
        <div className="mt-8 grid lg:grid-cols-2 gap-6">
          <DiagramCard
            title="How Sacral Neuromodulation Works"
            description="An implanted pulse generator (InterStim or Axonics) delivers electrical signals to the S3 sacral nerve root, modulating the spinal reflexes that coordinate bladder filling and emptying."
            badge="Procedure Diagram"
          >
            <SacralNeuromodulationDiagram className="w-full h-auto" />
          </DiagramCard>

          <DiagramCard
            title="Stem Cell Therapy — Mechanism"
            description="Autologous mesenchymal stem cells are injected directly into the detrusor muscle, where they differentiate into smooth muscle cells and release paracrine signals that may restore contractility. Currently in Phase 1/2 trials."
            badge="Investigational"
          >
            <StemCellTherapyDiagram className="w-full h-auto" />
          </DiagramCard>
        </div>

        {/* Visual: CIC procedure animation */}
        <div className="mt-8">
          <DiagramCard
            title="How Clean Intermittent Catheterization (CIC) Works"
            description="The gold-standard treatment for chronic urinary retention in UAB. Watch the 4-step process: prepare, insert, drain, remove. Click through steps or let it auto-play. Most patients learn CIC in a single training session."
            badge="Procedure Animation"
          >
            <CICProcedureAnimation />
          </DiagramCard>
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mt-12 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50 p-5"
        >
          <p className="flex items-start gap-2 text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
            <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
            <span>
              <strong>Important:</strong> Never state that any therapy is a guaranteed cure.
              Treatment decisions must be individualized based on clinical assessment by a qualified
              healthcare professional. Experimental therapies (stem cell, gene therapy, TAC-302,
              ZG-802, shockwave) are not FDA-approved and should only be considered within the
              context of registered clinical trials.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
