'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import {
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend,
} from 'recharts'

const data = [
  { year: '2015', publications: 42, trials: 8 },
  { year: '2016', publications: 51, trials: 10 },
  { year: '2017', publications: 63, trials: 12 },
  { year: '2018', publications: 78, trials: 15 },
  { year: '2019', publications: 95, trials: 19 },
  { year: '2020', publications: 118, trials: 24 },
  { year: '2021', publications: 142, trials: 31 },
  { year: '2022', publications: 178, trials: 38 },
  { year: '2023', publications: 215, trials: 47 },
  { year: '2024', publications: 248, trials: 56 },
]

interface TooltipPayloadItem {
  name: string
  value: number
  color: string
  dataKey: string
}

function CustomTooltip({ active, payload, label }: {
  active?: boolean
  payload?: TooltipPayloadItem[]
  label?: string
}) {
  if (!active || !payload || payload.length === 0) return null
  return (
    <div className="rounded-lg glass-strong shadow-premium p-3 text-xs border border-border/60">
      <p className="font-bold text-foreground mb-2">{label}</p>
      {payload.map((p) => (
        <div key={p.dataKey} className="flex items-center gap-2 mb-1">
          <span className="w-2 h-2 rounded-full" style={{ background: p.color }} />
          <span className="text-muted-foreground">{p.name}:</span>
          <span className="font-semibold text-foreground">{p.value}</span>
        </div>
      ))}
    </div>
  )
}

export function ResearchTrendsChart({ className }: { className?: string }) {
  return (
    <div className={className}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between mb-4 flex-wrap gap-2"
      >
        <div>
          <h3 className="font-bold text-foreground text-base">Research Publication & Trial Trends</h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            Peer-reviewed publications and registered clinical trials (2015–2024)
          </p>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm" style={{ background: 'oklch(0.55 0.15 252)' }} />
            <span className="text-muted-foreground">Publications</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm" style={{ background: 'oklch(0.65 0.15 200)' }} />
            <span className="text-muted-foreground">Clinical Trials</span>
          </div>
        </div>
      </motion.div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="pubGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.55 0.15 252)" stopOpacity={0.45} />
                <stop offset="100%" stopColor="oklch(0.55 0.15 252)" stopOpacity={0.02} />
              </linearGradient>
              <linearGradient id="trialGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.65 0.15 200)" stopOpacity={0.45} />
                <stop offset="100%" stopColor="oklch(0.65 0.15 200)" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="currentColor" className="text-muted/40" vertical={false} />
            <XAxis
              dataKey="year"
              tick={{ fontSize: 11, fill: 'currentColor' }}
              className="text-muted-foreground"
              axisLine={{ stroke: 'currentColor' }}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 11, fill: 'currentColor' }}
              className="text-muted-foreground"
              axisLine={false}
              tickLine={false}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="publications"
              name="Publications"
              stroke="oklch(0.55 0.15 252)"
              strokeWidth={2.5}
              fill="url(#pubGrad)"
              animationDuration={1200}
            />
            <Area
              type="monotone"
              dataKey="trials"
              name="Clinical Trials"
              stroke="oklch(0.65 0.15 200)"
              strokeWidth={2.5}
              fill="url(#trialGrad)"
              animationDuration={1400}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-3 text-xs">
        <div className="rounded-lg bg-muted/40 p-2.5">
          <p className="text-muted-foreground">Growth (2015→2024)</p>
          <p className="font-bold text-foreground text-sm mt-0.5">+490%</p>
        </div>
        <div className="rounded-lg bg-muted/40 p-2.5">
          <p className="text-muted-foreground">2024 publications</p>
          <p className="font-bold text-foreground text-sm mt-0.5">248</p>
        </div>
        <div className="rounded-lg bg-muted/40 p-2.5">
          <p className="text-muted-foreground">2024 active trials</p>
          <p className="font-bold text-foreground text-sm mt-0.5">56</p>
        </div>
      </div>
    </div>
  )
}
