'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell,
} from 'recharts'

interface TreatmentData {
  name: string
  shortName: string
  efficacy: number // % of patients achieving ≥30% PVR reduction
  evidenceLevel: number // 1-5 (5 = highest)
  category: 'established' | 'emerging' | 'investigational'
}

const data: TreatmentData[] = [
  { name: 'Clean Intermittent Catheterization', shortName: 'CIC', efficacy: 92, evidenceLevel: 5, category: 'established' },
  { name: 'Sacral Neuromodulation', shortName: 'SNM', efficacy: 65, evidenceLevel: 4, category: 'established' },
  { name: 'Alpha-Blockers', shortName: 'α-Blockers', efficacy: 48, evidenceLevel: 3, category: 'established' },
  { name: 'PTNS', shortName: 'PTNS', efficacy: 42, evidenceLevel: 3, category: 'established' },
  { name: 'Pelvic Floor Therapy', shortName: 'PFMT', efficacy: 38, evidenceLevel: 3, category: 'established' },
  { name: 'Bethanechol', shortName: 'Bethanechol', efficacy: 25, evidenceLevel: 2, category: 'established' },
  { name: 'Acotiamide', shortName: 'Acotiamide', efficacy: 35, evidenceLevel: 2, category: 'emerging' },
  { name: 'Shockwave Therapy', shortName: 'LiSWT', efficacy: 45, evidenceLevel: 2, category: 'investigational' },
  { name: 'Stem Cell Therapy', shortName: 'MSC', efficacy: 56, evidenceLevel: 1, category: 'investigational' },
  { name: 'TAC-302', shortName: 'TAC-302', efficacy: 0, evidenceLevel: 1, category: 'investigational' },
]

const categoryColors = {
  established: 'oklch(0.55 0.15 252)',
  emerging: 'oklch(0.7 0.18 60)',
  investigational: 'oklch(0.65 0.2 18)',
}

interface TooltipItem {
  payload: TreatmentData
  value: number
}

function CustomTooltip({ active, payload }: { active?: boolean; payload?: TooltipItem[] }) {
  if (!active || !payload || payload.length === 0) return null
  const item = payload[0].payload
  return (
    <div className="rounded-lg glass-strong shadow-premium p-3 text-xs border border-border/60 min-w-[200px]">
      <p className="font-bold text-foreground mb-1">{item.name}</p>
      <div className="space-y-1">
        <div className="flex justify-between gap-3">
          <span className="text-muted-foreground">Efficacy:</span>
          <span className="font-semibold text-foreground">
            {item.efficacy > 0 ? `${item.efficacy}%` : 'Pending trial'}
          </span>
        </div>
        <div className="flex justify-between gap-3">
          <span className="text-muted-foreground">Evidence level:</span>
          <span className="font-semibold text-foreground">{item.evidenceLevel}/5</span>
        </div>
        <div className="flex justify-between gap-3">
          <span className="text-muted-foreground">Category:</span>
          <span className="font-semibold capitalize text-foreground">{item.category}</span>
        </div>
      </div>
    </div>
  )
}

export function TreatmentEffectivenessChart({ className }: { className?: string }) {
  return (
    <div className={className}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="mb-4"
      >
        <h3 className="font-bold text-foreground text-base">Treatment Effectiveness Comparison</h3>
        <p className="text-xs text-muted-foreground mt-0.5">
          Percentage of patients achieving ≥30% reduction in post-void residual (illustrative, based on published evidence)
        </p>
      </motion.div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="currentColor" className="text-muted/40" horizontal={false} />
            <XAxis
              type="number"
              domain={[0, 100]}
              tick={{ fontSize: 11, fill: 'currentColor' }}
              className="text-muted-foreground"
              axisLine={{ stroke: 'currentColor' }}
              tickLine={false}
              unit="%"
            />
            <YAxis
              type="category"
              dataKey="shortName"
              tick={{ fontSize: 11, fill: 'currentColor' }}
              className="text-muted-foreground"
              axisLine={false}
              tickLine={false}
              width={80}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'currentColor', fillOpacity: 0.05 }} />
            <Bar dataKey="efficacy" radius={[0, 6, 6, 0]} animationDuration={1000}>
              {data.map((entry, i) => (
                <Cell key={i} fill={categoryColors[entry.category]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
        <div className="flex items-center gap-1.5 rounded-lg bg-muted/40 p-2">
          <span className="w-3 h-3 rounded-sm" style={{ background: categoryColors.established }} />
          <span className="text-muted-foreground">Established</span>
        </div>
        <div className="flex items-center gap-1.5 rounded-lg bg-muted/40 p-2">
          <span className="w-3 h-3 rounded-sm" style={{ background: categoryColors.emerging }} />
          <span className="text-muted-foreground">Emerging</span>
        </div>
        <div className="flex items-center gap-1.5 rounded-lg bg-muted/40 p-2">
          <span className="w-3 h-3 rounded-sm" style={{ background: categoryColors.investigational }} />
          <span className="text-muted-foreground">Investigational</span>
        </div>
      </div>

      <p className="mt-3 text-[10px] text-muted-foreground italic leading-relaxed">
        Note: Efficacy figures are illustrative estimates synthesized from published literature. Actual individual
        outcomes vary widely. Investigational therapies (TAC-302, stem cell) lack Phase 3 data. Always consult a
        urologist for personalized treatment recommendations.
      </p>
    </div>
  )
}
