'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { FlaskConical, Beaker, Pill, Dna, Syringe, Microscope, ExternalLink } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { drugPipeline } from '@/lib/medical-data'
import { Tac302MechanismAnimation } from '@/components/visuals/tac302-mechanism'
import { DiagramCard } from '@/components/diagram-card'

const phaseColors: Record<string, string> = {
  'Preclinical': 'bg-slate-100 text-slate-700 dark:bg-slate-800/60 dark:text-slate-300',
  'Phase 1': 'bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300',
  'Phase 2': 'bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300',
  'Phase 3': 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300',
  'Approved': 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300',
}

const phaseOrder = ['Preclinical', 'Phase 1', 'Phase 2', 'Phase 3', 'Approved']

const drugIcons: Record<string, React.ElementType> = {
  'TAC-302': Beaker,
  'ZG-802': FlaskConical,
  'Acotiamide': Pill,
  'Vibegron (repurposing)': Pill,
  'Mesenchymal Stem Cell Therapy (DU-001)': Dna,
  'Ado-Associated Virus (AAV) Gene Therapy': Dna,
}

export function DrugPipeline() {
  return (
    <section
      id="drug-pipeline"
      className="relative py-20 lg:py-28 scroll-mt-20 bg-gradient-to-b from-background to-muted/40"
      aria-labelledby="drug-pipeline-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Investigational therapies"
          title={
            <>
              Drug <span className="gradient-text">pipeline</span> for Underactive Bladder
            </>
          }
          description="After decades with no UAB-specific drug development, multiple investigational agents are now advancing through clinical trials. None are FDA-approved for UAB as of last review. Information is provided for educational purposes and updated as new data emerge."
        />

        {/* Pipeline progress bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mt-12 rounded-2xl glass shadow-soft p-6 lg:p-8"
        >
          <h3 className="text-base font-bold text-foreground mb-4">Development Stages</h3>
          <div className="grid grid-cols-5 gap-2">
            {phaseOrder.map((phase, i) => {
              const count = drugPipeline.filter((d) => d.phase === phase).length
              return (
                <div key={phase} className="flex flex-col items-center text-center">
                  <div className={`w-full h-2 rounded-full ${phaseColors[phase].split(' ')[0]}`} />
                  <p className="mt-2 text-xs font-semibold text-foreground">{phase}</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">{count} agent{count !== 1 ? 's' : ''}</p>
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* Drug cards */}
        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          {drugPipeline.map((drug, i) => {
            const Icon = drugIcons[drug.name] || Pill
            return (
              <motion.div
                key={drug.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Card className="glass shadow-soft hover:shadow-glow transition-all h-full group hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--navy)] to-[var(--medical)] flex items-center justify-center shadow-glow group-hover:scale-105 transition-transform">
                          <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-foreground leading-tight">{drug.name}</h3>
                          <p className="text-xs text-muted-foreground mt-0.5">{drug.sponsor}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1.5">
                        <span className={`text-[11px] font-semibold rounded-full px-2.5 py-1 ${phaseColors[drug.phase]}`}>
                          {drug.phase}
                        </span>
                        <span className={`text-[10px] font-medium rounded px-1.5 py-0.5 ${
                          drug.status === 'Recruiting' ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300' :
                          drug.status === 'Active' || drug.status === 'Active, not recruiting' ? 'bg-sky-50 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300' :
                          drug.status === 'Completed' ? 'bg-violet-50 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300' :
                          'bg-slate-50 text-slate-700 dark:bg-slate-800/40 dark:text-slate-300'
                        }`}>
                          {drug.status}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                          Mechanism of Action
                        </p>
                        <p className="text-sm text-foreground leading-relaxed">{drug.mechanism}</p>
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                          Indication
                        </p>
                        <p className="text-sm text-foreground leading-relaxed">{drug.indication}</p>
                      </div>
                    </div>

                    <div className="mt-5 pt-4 border-t border-border/60 flex items-center justify-between">
                      <a
                        href={`https://clinicaltrials.gov/search?term=${encodeURIComponent(drug.name + ' underactive bladder')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--medical)] hover:underline"
                      >
                        <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                        View on ClinicalTrials.gov
                      </a>
                      <Badge variant="outline" className="text-[10px] font-medium border-[var(--medical)]/30 text-[var(--medical)]">
                        <Microscope className="w-3 h-3 mr-1" aria-hidden="true" />
                        Investigational
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Visual: TAC-302 mechanism of action */}
        <div className="mt-10">
          <DiagramCard
            title="Spotlight: How TAC-302 May Work"
            description="The leading investigational drug for UAB. This animation shows its proposed mechanism: an oral tablet absorbed into the bloodstream, binding to prostaglandin E2 receptors on the detrusor muscle to enhance contractility. Phase 2 trials are ongoing — efficacy not yet established."
            badge="Mechanism Animation"
          >
            <Tac302MechanismAnimation />
          </DiagramCard>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-xl bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800/50 p-5"
        >
          <p className="flex items-start gap-2 text-sm text-rose-900 dark:text-rose-200 leading-relaxed">
            <Syringe className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
            <span>
              <strong>Important safety notice:</strong> Investigational drugs listed here are not
              approved by the FDA, EMA, or other regulatory authorities for the treatment of
              Underactive Bladder. They are available only through registered clinical trials.
              Patients should avoid unregulated clinics offering these agents outside of approved
              trials, as serious adverse events have been reported with unproven stem cell and
              gene therapy preparations.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
