'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import {
  TimerReset, Waves, Activity, RefreshCw, Droplets, AlertCircle, Clock, BatteryLow,
  ChevronRight,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Card, CardContent } from '@/components/ui/card'
import { causes } from '@/lib/medical-data'
import { DiseaseProgressionInfographic } from '@/components/charts/disease-progression'
import { InteractiveBodyMap } from '@/components/visuals/body-map'
import { DiagramCard } from '@/components/diagram-card'

const iconMap: Record<string, React.ElementType> = {
  TimerReset, Waves, Activity, RefreshCw, Droplets, AlertCircle, Clock, BatteryLow,
}

const colorMap: Record<string, string> = {
  medical: 'from-[var(--medical)] to-[var(--teal)]',
  navy: 'from-[var(--navy)] to-[var(--medical)]',
  teal: 'from-[var(--teal)] to-[var(--medical-light)]',
  'medical-light': 'from-[var(--medical-light)] to-[var(--teal)]',
}

export function SymptomsCauses() {
  return (
    <>
      {/* Symptoms */}
      <section
        id="symptoms"
        className="relative py-20 lg:py-28 scroll-mt-20 bg-gradient-to-b from-background to-muted/40"
        aria-labelledby="symptoms-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Recognize the signs"
            title={
              <>
                Symptoms of <span className="gradient-text">Underactive Bladder</span>
              </>
            }
            description="UAB symptoms primarily reflect impaired bladder emptying. Severity varies widely—some patients are asymptomatic until complications arise, while others develop significant urinary retention requiring catheterization. Recognizing the pattern is essential for early evaluation."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {symptomsData.map((symptom, i) => {
              const Icon = iconMap[symptom.icon] || Activity
              return (
                <motion.div
                  key={symptom.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <Card className="glass shadow-soft hover:shadow-glow transition-all duration-300 group h-full hover:-translate-y-1">
                    <CardContent className="p-5">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[var(--navy)] to-[var(--medical)] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform shadow-soft">
                        <Icon className="w-5 h-5 text-white" aria-hidden="true" />
                      </div>
                      <h3 className="font-bold text-foreground text-base leading-tight">
                        {symptom.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {symptom.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="mt-10 rounded-xl glass border-l-4 border-l-[var(--medical)] p-5 shadow-soft"
          >
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Clinical tip:</strong> Not all patients with UAB
              experience every symptom. Some individuals void infrequently without discomfort and
              are diagnosed only when complications such as recurrent UTIs or hydronephrosis
              emerge. Any persistent change in voiding pattern warrants urologic evaluation,
              particularly in patients with diabetes, neurologic disease, or after pelvic surgery.
            </p>
          </motion.div>
        </div>

        {/* Interactive body map */}
        <div className="mt-12">
          <DiagramCard
            title="Interactive Symptom Body Map"
            description="Click on body regions to see where UAB symptoms manifest. This helps patients recognize patterns and communicate effectively with their healthcare provider."
            badge="Interactive"
          >
            <InteractiveBodyMap />
          </DiagramCard>
        </div>
      </section>

      {/* Causes */}
      <section
        id="causes"
        className="relative py-20 lg:py-28 scroll-mt-20"
        aria-labelledby="causes-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Underlying mechanisms"
            title={
              <>
                What <span className="gradient-text">causes</span> Underactive Bladder?
              </>
            }
            description="UAB has many potential causes, broadly categorized as neurogenic, myogenic, iatrogenic/pharmacologic, or idiopathic. Identifying the underlying etiology guides treatment strategy and prognosis. In 25–35% of cases, no specific cause is identified."
          />

          <div className="mt-12 grid lg:grid-cols-2 gap-6">
            {causes.map((cause, i) => (
              <motion.div
                key={cause.category}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="glass shadow-soft h-full overflow-hidden">
                  <div className={`h-1.5 bg-gradient-to-r ${colorMap[cause.color]}`} />
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{cause.category}</h3>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          Category {i + 1} of {causes.length}
                        </p>
                      </div>
                      <span className={`text-xs font-semibold rounded-full px-2.5 py-1 bg-gradient-to-r ${colorMap[cause.color]} text-white`}>
                        {cause.examples.length} causes
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {cause.examples.map((ex) => (
                        <li key={ex} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                          <ChevronRight className="w-4 h-4 text-[var(--medical)] mt-0.5 shrink-0" aria-hidden="true" />
                          <span>{ex}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Visual: Disease progression infographic */}
          <div className="mt-12">
            <DiagramCard
              title="Why Early Diagnosis Matters"
              description="Visual timeline of how untreated UAB progresses from subtle voiding changes to serious complications. Early intervention at any stage can halt or reverse this trajectory."
              badge="Progression Infographic"
            >
              <DiseaseProgressionInfographic />
            </DiagramCard>
          </div>
        </div>
      </section>
    </>
  )
}

// Symptoms data is sourced from medical-data.ts
import { symptoms as symptomsData } from '@/lib/medical-data'
