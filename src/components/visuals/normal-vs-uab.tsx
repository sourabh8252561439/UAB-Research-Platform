'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Check, X, ArrowRight } from 'lucide-react'

/**
 * Side-by-side comparison: Healthy Bladder vs Underactive Bladder.
 * Shows the visual difference in contraction strength, urine flow,
 * and emptying completeness. Includes animated contraction waveforms.
 */
export function NormalVsUABComparison({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
        {/* HEALTHY */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100/40 dark:from-emerald-900/20 dark:to-emerald-900/5 border-2 border-emerald-200 dark:border-emerald-800/50 p-5"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">
                Healthy
              </span>
              <h4 className="font-bold text-foreground text-lg leading-tight">Normal Bladder</h4>
            </div>
            <span className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center shadow-glow">
              <Check className="w-5 h-5 text-white" aria-hidden="true" />
            </span>
          </div>

          {/* Bladder illustration - strong contraction */}
          <div className="aspect-[4/3] rounded-xl bg-white/50 dark:bg-white/5 border border-emerald-200/50 dark:border-emerald-800/30 relative overflow-hidden">
            <svg viewBox="0 0 240 180" className="w-full h-full" role="img" aria-label="Healthy bladder with strong contraction">
              <defs>
                <linearGradient id="healthy-bladder" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="oklch(0.82 0.12 165)" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="oklch(0.6 0.15 165)" stopOpacity="0.7" />
                </linearGradient>
              </defs>

              {/* Bladder - contracts strongly */}
              <motion.ellipse
                cx="120" cy="80" rx="55" ry="42"
                fill="url(#healthy-bladder)"
                stroke="oklch(0.4 0.15 165)"
                strokeWidth="2"
                initial={{ rx: 55, ry: 42 }}
                animate={{ rx: [55, 42, 55], ry: [42, 32, 42] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
              {/* Muscle hatching */}
              <g opacity="0.4">
                <motion.line x1="70" y1="80" x2="170" y2="80" stroke="oklch(0.4 0.1 165)" strokeWidth="0.5"
                  initial={{ x1: 70, x2: 170 }}
                  animate={{ x1: [70, 80, 70], x2: [170, 160, 170] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
              </g>

              {/* Urethra */}
              <path d="M120 122 L120 150" stroke="oklch(0.5 0.15 165)" strokeWidth="7" fill="none" strokeLinecap="round" />

              {/* Strong urine flow - multiple drops */}
              {[0, 0.2, 0.4, 0.6, 0.8].map((delay) => (
                <motion.circle
                  key={delay}
                  cx="120" r="3" fill="oklch(0.7 0.15 230)"
                  initial={{ cy: 122, opacity: 0, scale: 0.5 }}
                  animate={{ cy: [122, 170], opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay, ease: 'easeIn' }}
                />
              ))}

              {/* Contraction wave - strong */}
              <motion.path
                d="M 20 160 Q 40 130 60 160 Q 80 130 100 160 Q 120 130 140 160 Q 160 130 180 160 Q 200 130 220 160"
                stroke="oklch(0.55 0.15 165)" strokeWidth="2.5" fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />

              <text x="120" y="20" textAnchor="middle" fontSize="10" fontWeight="700" fill="oklch(0.4 0.15 165)" fontFamily="Inter, system-ui">
                Strong Contraction
              </text>
            </svg>
          </div>

          {/* Stats */}
          <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
            <div className="rounded-lg bg-white/60 dark:bg-white/5 p-2.5">
              <p className="text-emerald-700 dark:text-emerald-300 font-semibold text-[10px] uppercase">Qmax</p>
              <p className="font-bold text-foreground">&gt;15 mL/s</p>
            </div>
            <div className="rounded-lg bg-white/60 dark:bg-white/5 p-2.5">
              <p className="text-emerald-700 dark:text-emerald-300 font-semibold text-[10px] uppercase">PVR</p>
              <p className="font-bold text-foreground">&lt;50 mL</p>
            </div>
          </div>

          {/* Features */}
          <ul className="mt-4 space-y-1.5 text-xs">
            {['Complete bladder emptying', 'Strong detrusor contraction', 'Normal urine flow rate'].map((f) => (
              <li key={f} className="flex items-center gap-1.5 text-foreground">
                <Check className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* UAB */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl bg-gradient-to-br from-rose-50 to-rose-100/40 dark:from-rose-900/20 dark:to-rose-900/5 border-2 border-rose-200 dark:border-rose-800/50 p-5"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wide text-rose-700 dark:text-rose-300">
                Affected
              </span>
              <h4 className="font-bold text-foreground text-lg leading-tight">Underactive Bladder</h4>
            </div>
            <span className="w-9 h-9 rounded-full bg-rose-500 flex items-center justify-center shadow-glow">
              <X className="w-5 h-5 text-white" aria-hidden="true" />
            </span>
          </div>

          {/* Bladder illustration - weak contraction */}
          <div className="aspect-[4/3] rounded-xl bg-white/50 dark:bg-white/5 border border-rose-200/50 dark:border-rose-800/30 relative overflow-hidden">
            <svg viewBox="0 0 240 180" className="w-full h-full" role="img" aria-label="Underactive bladder with weak contraction">
              <defs>
                <linearGradient id="uab-bladder-cmp" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="oklch(0.82 0.12 18)" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="oklch(0.6 0.18 18)" stopOpacity="0.7" />
                </linearGradient>
              </defs>

              {/* Bladder - barely contracts */}
              <motion.ellipse
                cx="120" cy="80" rx="60" ry="48"
                fill="url(#uab-bladder-cmp)"
                stroke="oklch(0.5 0.2 18)"
                strokeWidth="2"
                initial={{ rx: 60, ry: 48 }}
                animate={{ rx: [60, 56, 60], ry: [48, 45, 48] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
              {/* Residual urine (visible at bottom) */}
              <ellipse cx="120" cy="110" rx="50" ry="15" fill="oklch(0.7 0.15 230)" opacity="0.5" />
              <text x="170" y="115" fontSize="8" fill="oklch(0.4 0.15 230)" fontFamily="Inter, system-ui">residual</text>

              {/* Urethra */}
              <path d="M120 128 L120 150" stroke="oklch(0.5 0.18 18)" strokeWidth="6" fill="none" strokeLinecap="round" />

              {/* Weak urine flow - few drops, slow */}
              {[0, 0.6, 1.2].map((delay) => (
                <motion.circle
                  key={delay}
                  cx="120" r="2" fill="oklch(0.7 0.15 230)"
                  initial={{ cy: 128, opacity: 0 }}
                  animate={{ cy: [128, 165], opacity: [0, 0.7, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, delay, ease: 'easeIn' }}
                />
              ))}

              {/* Contraction wave - weak, flat */}
              <motion.path
                d="M 20 160 Q 60 155 100 160 Q 140 158 180 160 Q 200 159 220 160"
                stroke="oklch(0.6 0.2 18)" strokeWidth="2" fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: [0, 1, 1], opacity: [0, 0.7, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />

              <text x="120" y="20" textAnchor="middle" fontSize="10" fontWeight="700" fill="oklch(0.5 0.2 18)" fontFamily="Inter, system-ui">
                Weak Contraction
              </text>
            </svg>
          </div>

          {/* Stats */}
          <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
            <div className="rounded-lg bg-white/60 dark:bg-white/5 p-2.5">
              <p className="text-rose-700 dark:text-rose-300 font-semibold text-[10px] uppercase">Qmax</p>
              <p className="font-bold text-foreground">&lt;12 mL/s</p>
            </div>
            <div className="rounded-lg bg-white/60 dark:bg-white/5 p-2.5">
              <p className="text-rose-700 dark:text-rose-300 font-semibold text-[10px] uppercase">PVR</p>
              <p className="font-bold text-foreground">&gt;100 mL</p>
            </div>
          </div>

          {/* Features */}
          <ul className="mt-4 space-y-1.5 text-xs">
            {['Incomplete bladder emptying', 'Weak detrusor contraction', 'Reduced urine flow rate'].map((f) => (
              <li key={f} className="flex items-center gap-1.5 text-foreground">
                <X className="w-3.5 h-3.5 text-rose-600" aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Bottom comparison arrow */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-5 flex items-center justify-center"
      >
        <div className="rounded-full glass px-4 py-2 shadow-soft flex items-center gap-2 text-xs">
          <span className="text-emerald-700 dark:text-emerald-300 font-semibold">Strong contraction</span>
          <ArrowRight className="w-3.5 h-3.5 text-muted-foreground" aria-hidden="true" />
          <span className="text-rose-700 dark:text-rose-300 font-semibold">Weak contraction</span>
          <span className="text-muted-foreground ml-2">= incomplete emptying</span>
        </div>
      </motion.div>
    </div>
  )
}
