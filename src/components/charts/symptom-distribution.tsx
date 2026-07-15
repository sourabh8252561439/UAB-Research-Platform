'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts'

const data = [
  { name: 'Incomplete Emptying', value: 78, color: 'oklch(0.55 0.15 252)' },
  { name: 'Weak Stream', value: 71, color: 'oklch(0.62 0.14 230)' },
  { name: 'Hesitancy', value: 64, color: 'oklch(0.7 0.13 200)' },
  { name: 'Straining to Void', value: 58, color: 'oklch(0.65 0.15 165)' },
  { name: 'Prolonged Voiding', value: 52, color: 'oklch(0.7 0.18 60)' },
  { name: 'Reduced Sensation', value: 41, color: 'oklch(0.78 0.15 80)' },
  { name: 'Post-Micturition Dribble', value: 38, color: 'oklch(0.65 0.2 18)' },
  { name: 'Urinary Retention', value: 29, color: 'oklch(0.55 0.2 18)' },
]

interface TooltipItem {
  name: string
  value: number
  payload: { color: string }
}

function CustomTooltip({ active, payload }: { active?: boolean; payload?: TooltipItem[] }) {
  if (!active || !payload || payload.length === 0) return null
  const item = payload[0]
  return (
    <div className="rounded-lg glass-strong shadow-premium p-3 text-xs border border-border/60">
      <div className="flex items-center gap-2 mb-1">
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: item.payload.color }} />
        <span className="font-bold text-foreground">{item.name}</span>
      </div>
      <p className="text-muted-foreground">Reported by <span className="font-semibold text-foreground">{item.value}%</span> of UAB patients</p>
    </div>
  )
}

export function SymptomDistributionChart({ className }: { className?: string }) {
  return (
    <div className={className}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="mb-4"
      >
        <h3 className="font-bold text-foreground text-base">Symptom Distribution in UAB</h3>
        <p className="text-xs text-muted-foreground mt-0.5">
          Percentage of UAB patients reporting each symptom (pooled observational data)
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={85}
                paddingAngle={2}
                animationDuration={1000}
              >
                {data.map((entry, i) => (
                  <Cell key={i} fill={entry.color} stroke="white" strokeWidth={2} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-1.5">
          {data.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-center gap-2 text-xs"
            >
              <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: item.color }} />
              <span className="text-muted-foreground flex-1">{item.name}</span>
              <span className="font-bold text-foreground tabular-nums">{item.value}%</span>
            </motion.div>
          ))}
        </div>
      </div>

      <p className="mt-4 text-[10px] text-muted-foreground italic leading-relaxed">
        Data illustrative of pooled observational studies. Symptom frequencies vary by underlying etiology
        (neurogenic vs idiopathic) and patient population.
      </p>
    </div>
  )
}
