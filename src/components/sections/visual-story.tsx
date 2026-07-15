'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Eye, MousePointerClick, RotateCw, Sparkles } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Card, CardContent } from '@/components/ui/card'
import { NormalVsUABComparison } from '@/components/visuals/normal-vs-uab'
import { HealthyBladderAnimation } from '@/components/visuals/healthy-bladder-animation'
import { Bladder3DModel } from '@/components/visuals/bladder-3d-model'
import { DiagramCard } from '@/components/diagram-card'

/**
 * Immersive visual story section placed right after the hero.
 * Goal: visitors understand UAB visually within the first scroll.
 * Combines: Normal vs UAB comparison, healthy bladder animation,
 * and the interactive 3D model.
 */
export function VisualStory() {
  return (
    <section
      id="visual-story"
      className="relative py-20 lg:py-28 scroll-mt-20 bg-gradient-to-b from-background via-muted/30 to-background"
      aria-labelledby="visual-story-heading"
    >
      {/* Decorative background */}
      <div
        className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-3xl opacity-30 -z-10"
        style={{
          background: 'radial-gradient(circle, color-mix(in oklch, var(--medical) 20%, transparent) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Visual Story"
          title={
            <>
              See the difference: <span className="gradient-text">healthy vs underactive bladder</span>
            </>
          }
          description="Understanding Underactive Bladder starts with seeing it. Explore these interactive visuals to grasp how UAB affects bladder function — no medical background required."
          align="center"
        />

        {/* Hint chips */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-2"
        >
          {[
            { icon: Eye, label: 'Visual comparisons' },
            { icon: Sparkles, label: 'Animated explainers' },
            { icon: RotateCw, label: '3D interactive model' },
            { icon: MousePointerClick, label: 'Click to explore' },
          ].map((chip) => (
            <span
              key={chip.label}
              className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1.5 text-xs font-medium text-foreground shadow-soft"
            >
              <chip.icon className="w-3.5 h-3.5 text-[var(--medical)]" aria-hidden="true" />
              {chip.label}
            </span>
          ))}
        </motion.div>

        {/* Comparison visual */}
        <div className="mt-12">
          <DiagramCard
            title="Healthy Bladder vs Underactive Bladder"
            description="Side-by-side comparison showing contraction strength, urine flow, and emptying completeness. Watch the bladders contract in real-time."
            badge="Comparison"
          >
            <NormalVsUABComparison />
          </DiagramCard>
        </div>

        {/* Two-column: animation + 3D model */}
        <div className="mt-8 grid lg:grid-cols-2 gap-6">
          <DiagramCard
            title="How a Healthy Bladder Works"
            description="Watch the three-phase cycle: filling, storage, and emptying. The detrusor muscle contracts strongly to push urine out completely."
            badge="Animation"
          >
            <HealthyBladderAnimation />
          </DiagramCard>

          <DiagramCard
            title="Explore the Bladder in 3D"
            description="Rotate, zoom, and inspect the urinary tract. Toggle the 'Highlight Detrusor' button to see the muscle affected in UAB."
            badge="3D Interactive"
          >
            <Bladder3DModel />
          </DiagramCard>
        </div>
      </div>
    </section>
  )
}
