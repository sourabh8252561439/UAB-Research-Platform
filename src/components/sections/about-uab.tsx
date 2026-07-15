'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Activity, Brain, Droplet, AlertTriangle, ArrowRight, FileText } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BladderAnatomyDiagram } from '@/components/diagrams/bladder-anatomy'
import { SymptomDistributionChart } from '@/components/charts/symptom-distribution'
import { UABDevelopmentAnimation } from '@/components/visuals/uab-development-animation'
import { PatientJourneyFlow } from '@/components/visuals/patient-journey'
import { DiagramCard } from '@/components/diagram-card'

const keyFacts = [
  {
    icon: Brain,
    title: 'Neurogenic Origin',
    text: 'Most cases (60%) result from neurologic conditions including diabetes, multiple sclerosis, Parkinson disease, and spinal cord injury. Diabetes is the leading cause worldwide.',
  },
  {
    icon: Droplet,
    title: 'Diagnostic Hallmark',
    text: 'Reduced detrusor contractility on urodynamic testing (Bladder Contractility Index <100) with elevated post-void residual urine (>50 mL women, >100 mL men).',
  },
  {
    icon: AlertTriangle,
    title: 'Underdiagnosed',
    text: 'Affects an estimated 23% of adults aged 65+ yet remains frequently overlooked. Symptoms overlap with BPH and OAB, requiring specialist evaluation for accurate diagnosis.',
  },
  {
    icon: Activity,
    title: 'Treatable, Not Yet Curable',
    text: 'While no universally curative therapy exists, behavioral therapy, catheterization, neuromodulation, and emerging regenerative approaches enable effective symptom management.',
  },
]

export function AboutUAB() {
  return (
    <section
      id="about-uab"
      className="relative py-20 lg:py-28 scroll-mt-20"
      aria-labelledby="about-uab-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What is UAB?"
          title={
            <>
              A chronic bladder emptying disorder affecting{' '}
              <span className="gradient-text">millions worldwide</span>
            </>
          }
          description="Underactive Bladder (UAB), also known as Detrusor Underactivity (DU) or Hypocontractile Bladder, is defined by the International Continence Society as a contraction of reduced strength or duration, resulting in prolonged emptying, incomplete emptying, or failure to achieve emptying within a normal time span."
        />

        <div className="mt-12 grid lg:grid-cols-12 gap-8">
          {/* Long-form definition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <Card className="glass shadow-soft h-full">
              <CardContent className="p-6 lg:p-8 space-y-5">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Definition</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Underactive Bladder (UAB) is a symptomatic syndrome caused by the inability of
                    the detrusor muscle to contract with sufficient strength or duration to allow
                    complete bladder emptying within a normal time frame. The term encompasses
                    multiple underlying etiologies—neurogenic, myogenic, iatrogenic, and
                    idiopathic—and produces a characteristic cluster of voiding symptoms including
                    hesitancy, weak stream, straining, and the sensation of incomplete emptying.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Terminology</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The terms <em>Underactive Bladder</em>, <em>Detrusor Underactivity</em>, and{' '}
                    <em>Hypocontractile Bladder</em> are often used interchangeably in the
                    literature. The International Continence Society (ICS) standardizes{' '}
                    <strong>Detrusor Underactivity (DU)</strong> as the urodynamic observation of a
                    detrusor contraction of reduced strength or duration, while{' '}
                    <strong>UAB</strong> describes the symptomatic clinical syndrome. The two
                    concepts are tightly linked but not always identical.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Why it matters</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Untreated UAB can lead to recurrent urinary tract infections, bladder stones,
                    upper urinary tract deterioration with hydronephrosis, and progressive kidney
                    injury. Despite its significant morbidity, UAB receives far less attention
                    than Overactive Bladder, with no FDA-approved medications specifically
                    indicated for the condition. Recent advances in regenerative medicine,
                    neuromodulation, and novel pharmacologic agents—including TAC-302 and
                    ZG-802—signal a turning point in the field.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Button asChild variant="outline" className="border-[var(--medical)] text-[var(--medical)] hover:bg-[var(--medical)]/10">
                    <a href="#diagnosis">
                      <FileText className="w-4 h-4 mr-2" aria-hidden="true" />
                      Diagnostic Criteria
                    </a>
                  </Button>
                  <Button asChild variant="ghost" className="text-foreground">
                    <a href="#symptoms">
                      View Symptoms
                      <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Key facts grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {keyFacts.map((f) => (
              <Card key={f.title} className="glass shadow-soft hover:shadow-glow transition-shadow group">
                <CardContent className="p-5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--medical)] to-[var(--teal)] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                    <f.icon className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                  <h4 className="font-bold text-foreground text-base leading-tight">{f.title}</h4>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{f.text}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>

        {/* Editorial banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mt-12 rounded-2xl bg-gradient-to-r from-[var(--navy)] via-[var(--medical)] to-[var(--teal)] p-6 lg:p-8 text-white shadow-premium"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-wide opacity-80">
                Medical Review
              </p>
              <h3 className="mt-1 text-xl lg:text-2xl font-bold">
                Reviewed by board-certified urologists and neurologists
              </h3>
              <p className="mt-2 text-sm lg:text-base opacity-90 leading-relaxed">
                This page was last reviewed on{' '}
                <strong>July 15, 2024</strong> by Dr. Sarah J. Mitchell, MD, FACS. Next scheduled
                review: <strong>October 15, 2024</strong>. Our editorial process follows
                evidence-based medicine principles consistent with Google&apos;s YMYL quality
                guidelines.
              </p>
            </div>
            <Button
              asChild
              variant="secondary"
              className="bg-white text-[var(--navy)] hover:bg-white/90 shrink-0"
            >
              <a href="#editorial">Learn about our process</a>
            </Button>
          </div>
        </motion.div>

        {/* Visual: Bladder anatomy + Symptom distribution chart */}
        <div className="mt-8 grid lg:grid-cols-2 gap-6">
          <DiagramCard
            title="Anatomy of the Urinary Tract"
            description="The detrusor muscle (highlighted) is the bladder wall's contractile layer. In UAB, it fails to contract with sufficient force to empty the bladder completely."
            badge="Interactive Diagram"
          >
            <BladderAnatomyDiagram className="w-full h-auto" />
          </DiagramCard>

          <DiagramCard
            title="How Common Are UAB Symptoms?"
            description="Symptom distribution across UAB patients — incomplete emptying and weak stream are the most frequently reported."
            badge="Data Visualization"
          >
            <SymptomDistributionChart />
          </DiagramCard>
        </div>

        {/* Visual: How UAB develops animation */}
        <div className="mt-8">
          <DiagramCard
            title="How Underactive Bladder Develops"
            description="The pathophysiology in 4 steps: nerve damage reduces signals to the bladder, the detrusor muscle contracts weakly, and emptying becomes incomplete. Watch the signal travel through the pathway."
            badge="Animated Explainer"
          >
            <UABDevelopmentAnimation />
          </DiagramCard>
        </div>

        {/* Visual: Patient journey flow */}
        <div className="mt-8">
          <DiagramCard
            title="The Patient Journey — From Symptoms to Management"
            description="A visual roadmap of the typical UAB patient experience, from recognizing first symptoms through diagnosis, treatment initiation, and long-term management."
            badge="Journey Map"
          >
            <PatientJourneyFlow />
          </DiagramCard>
        </div>
      </div>
    </section>
  )
}
