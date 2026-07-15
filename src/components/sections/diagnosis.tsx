'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import {
  TrendingUp, Gauge, LineChart, Activity, ScanLine, Eye,
  Info, CheckCircle2, AlertTriangle,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { diagnosticTests } from '@/lib/medical-data'
import { UrodynamicDiagram } from '@/components/diagrams/urodynamic-diagram'
import { DiagramCard } from '@/components/diagram-card'

const iconMap: Record<string, React.ElementType> = {
  TrendingUp, Gauge, LineChart, Activity, ScanLine, Eye,
}

const invasivenessColors: Record<string, string> = {
  'Non-invasive': 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300',
  'Minimally invasive': 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300',
  'Invasive': 'bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300',
}

const diagnosticPathway = [
  {
    step: '1',
    title: 'Clinical Assessment',
    desc: 'History, voiding diary, symptom questionnaires (AUASI, ICIQ), focused neurological exam.',
  },
  {
    step: '2',
    title: 'Non-invasive Screening',
    desc: 'Uroflowmetry + bladder ultrasound for post-void residual. Optional basic labs and urinalysis.',
  },
  {
    step: '3',
    title: 'Specialized Testing',
    desc: 'Full urodynamic study with pressure-flow analysis. Calculate BCI. Consider cystoscopy to rule out obstruction.',
  },
  {
    step: '4',
    title: 'Diagnosis & Management',
    desc: 'Diagnose UAB if BCI <100 with characteristic low-pressure/low-flow pattern. Initiate tiered treatment plan.',
  },
]

const bciTable = [
  { bci: '>150', interpretation: 'Normal contractility', color: 'emerald' },
  { bci: '100–150', interpretation: 'Borderline / mild impairment', color: 'amber' },
  { bci: '<100', interpretation: 'Detrusor underactivity', color: 'rose' },
  { bci: '<50', interpretation: 'Severe underactivity', color: 'rose' },
]

export function Diagnosis() {
  return (
    <section
      id="diagnosis"
      className="relative py-20 lg:py-28 scroll-mt-20 bg-gradient-to-b from-muted/40 to-background"
      aria-labelledby="diagnosis-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Diagnostic evaluation"
          title={
            <>
              How UAB is <span className="gradient-text">diagnosed</span>
            </>
          }
          description="Diagnosis of Underactive Bladder requires a stepwise approach combining clinical assessment, non-invasive screening tests, and definitive urodynamic evaluation. The Bladder Contractility Index (BCI) is the cornerstone metric."
        />

        {/* Diagnostic pathway */}
        <div className="mt-12">
          <h3 className="text-lg font-bold text-foreground mb-6">Diagnostic Pathway</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {diagnosticPathway.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative"
              >
                <Card className="glass shadow-soft h-full">
                  <CardContent className="p-5">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--navy)] to-[var(--medical)] text-white font-bold flex items-center justify-center mb-3 shadow-glow">
                      {p.step}
                    </div>
                    <h4 className="font-bold text-foreground text-base leading-tight">{p.title}</h4>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </CardContent>
                </Card>
                {i < diagnosticPathway.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-[var(--medical)] to-transparent z-10" aria-hidden="true" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Diagnostic tests tabs */}
        <div className="mt-16">
          <h3 className="text-lg font-bold text-foreground mb-6">Key Diagnostic Tests</h3>
          <Tabs defaultValue={diagnosticTests[0].name} className="w-full">
            <TabsList className="flex flex-wrap h-auto gap-1 bg-muted/60 p-1 rounded-xl mb-6" aria-label="Diagnostic tests">
              {diagnosticTests.map((t) => (
                <TabsTrigger
                  key={t.name}
                  value={t.name}
                  className="text-xs lg:text-sm data-[state=active]:bg-white dark:data-[state=active]:bg-card data-[state=active]:shadow-soft rounded-lg px-3 py-2"
                >
                  {t.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {diagnosticTests.map((test) => {
              const Icon = iconMap[test.icon] || Activity
              return (
                <TabsContent key={test.name} value={test.name} className="mt-0">
                  <Card className="glass shadow-soft overflow-hidden">
                    <CardContent className="p-0">
                      <div className="grid lg:grid-cols-12 gap-0">
                        {/* Left: header */}
                        <div className="lg:col-span-4 p-6 lg:p-8 bg-gradient-to-br from-[var(--navy)] via-[var(--medical)] to-[var(--teal)] text-white">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur flex items-center justify-center">
                              <Icon className="w-6 h-6" aria-hidden="true" />
                            </div>
                            <div>
                              <p className="text-xs opacity-80 font-semibold uppercase tracking-wide">
                                {test.abbreviation}
                              </p>
                              <h4 className="text-lg font-bold">{test.name}</h4>
                            </div>
                          </div>
                          <div className="mt-6">
                            <span className={`inline-flex items-center gap-1.5 text-[11px] font-semibold rounded-full px-3 py-1 ${invasivenessColors[test.invasiveness]}`}>
                              {test.invasiveness}
                            </span>
                          </div>
                          <div className="mt-8 pt-6 border-t border-white/20">
                            <p className="text-xs opacity-80">Part of</p>
                            <p className="text-sm font-semibold mt-0.5">Standard urologic workup</p>
                          </div>
                        </div>

                        {/* Right: details */}
                        <div className="lg:col-span-8 p-6 lg:p-8 space-y-5">
                          <div>
                            <h5 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
                              <Info className="w-4 h-4 text-[var(--medical)]" aria-hidden="true" />
                              Purpose
                            </h5>
                            <p className="text-sm text-muted-foreground leading-relaxed">{test.purpose}</p>
                          </div>
                          <div>
                            <h5 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                              Characteristic Findings in UAB
                            </h5>
                            <p className="text-sm text-muted-foreground leading-relaxed">{test.findings}</p>
                          </div>
                          <div className="rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50 p-3">
                            <p className="flex items-start gap-2 text-xs text-amber-900 dark:text-amber-200 leading-relaxed">
                              <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
                              <span>
                                Results must be interpreted in clinical context. Many findings are
                                non-specific and require correlation with symptoms, history, and
                                other diagnostic studies.
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              )
            })}
          </Tabs>
        </div>

        {/* BCI table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mt-12"
        >
          <Card className="glass shadow-soft overflow-hidden">
            <CardContent className="p-6 lg:p-8">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    Bladder Contractility Index (BCI)
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Calculated as <code className="px-1.5 py-0.5 rounded bg-muted text-foreground font-mono text-xs">BCI = PdetQmax + 5 × Qmax</code>
                  </p>
                </div>
                <Badge variant="secondary" className="bg-[var(--medical)]/10 text-[var(--medical)] border border-[var(--medical)]/20">
                  Gold standard diagnostic metric
                </Badge>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold text-foreground">BCI Value</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Interpretation</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground hidden sm:table-cell">Visual</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bciTable.map((row) => (
                      <tr key={row.bci} className="border-b border-border/60 last:border-0 hover:bg-muted/40 transition-colors">
                        <td className="py-3 px-4 font-mono font-bold text-foreground">{row.bci}</td>
                        <td className="py-3 px-4 text-muted-foreground">{row.interpretation}</td>
                        <td className="py-3 px-4 hidden sm:table-cell">
                          <div className="w-24 h-2 rounded-full bg-muted overflow-hidden">
                            <div
                              className={`h-full rounded-full ${
                                row.color === 'emerald' ? 'bg-emerald-500 w-full' :
                                row.color === 'amber' ? 'bg-amber-500 w-2/3' :
                                row.bci === '<100' ? 'bg-rose-500 w-1/3' : 'bg-rose-700 w-1/6'
                              }`}
                            />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-6 text-xs text-muted-foreground italic leading-relaxed">
                Source: Abrams P. <em>Bladder outlet obstruction index, bladder contractility index and detrusor pressure-flow studies</em>. Neurourol Urodyn. 2005. Adopted by AUA/SUFU guidelines on Adult Neurogenic LUTD.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Visual: Urodynamic study diagram */}
        <div className="mt-8">
          <DiagramCard
            title="Inside a Urodynamic Study"
            description="The gold-standard test for diagnosing detrusor underactivity. Two catheters measure bladder and abdominal pressure simultaneously, while a flow meter records urine output. The resulting pressure-flow plot distinguishes UAB (low pressure, low flow) from obstruction (high pressure, low flow)."
            badge="Procedure Diagram"
          >
            <UrodynamicDiagram className="w-full h-auto" />
          </DiagramCard>
        </div>
      </div>
    </section>
  )
}
