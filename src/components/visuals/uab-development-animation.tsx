'use client'

import * as React from 'react'
import { motion } from 'framer-motion'

/**
 * Animated explainer: How Underactive Bladder develops.
 * Shows the progression: nerve damage → weak signal → weak contraction → incomplete emptying.
 * Uses a horizontal flow with animated signals traveling through the pathway.
 */
export function UABDevelopmentAnimation({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 600 360" className="w-full h-auto" role="img" aria-labelledby="uda-title uda-desc" xmlns="http://www.w3.org/2000/svg">
        <title id="uda-title">How underactive bladder develops</title>
        <desc id="uda-desc">
          Animated diagram showing the pathophysiology of underactive bladder:
          nerve damage reduces signals to the detrusor muscle, which contracts weakly,
          resulting in incomplete bladder emptying and elevated post-void residual urine.
        </desc>

        <defs>
          <linearGradient id="uda-bladder" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.82 0.12 18)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="oklch(0.6 0.18 18)" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="uda-urine" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.78 0.15 230)" stopOpacity="0.7" />
            <stop offset="100%" stopColor="oklch(0.6 0.18 230)" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        {/* Title */}
        <text x="300" y="28" textAnchor="middle" fontSize="16" fontWeight="700" fill="currentColor" className="text-foreground" fontFamily="Inter, system-ui">
          How UAB Develops
        </text>

        {/* === Step 1: Spinal cord / nerve (left) === */}
        <g transform="translate(60, 130)">
          {/* Spinal cord */}
          <path d="M0 0 L0 60 Q0 80 15 90 L30 110" stroke="oklch(0.5 0.12 252)" strokeWidth="20" fill="none" strokeLinecap="round" opacity="0.6" />
          {/* Damage indicator (red X) */}
          <motion.g
            initial={{ opacity: 0.5, scale: 1 }}
            animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '15px 60px' }}
          >
            <circle cx="15" cy="60" r="14" fill="oklch(0.65 0.2 18)" fillOpacity="0.3" stroke="oklch(0.65 0.2 18)" strokeWidth="2" />
            <line x1="9" y1="54" x2="21" y2="66" stroke="oklch(0.65 0.2 18)" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="21" y1="54" x2="9" y2="66" stroke="oklch(0.65 0.2 18)" strokeWidth="2.5" strokeLinecap="round" />
          </motion.g>
          {/* Nerve pathway - weak signal */}
          <path d="M30 110 Q60 120 90 130 Q120 135 150 140" stroke="oklch(0.6 0.18 18)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeDasharray="4 3" opacity="0.6" />
          {/* Signal pulses - weak (broken) */}
          <motion.circle r="3" fill="oklch(0.6 0.18 18)"
            initial={{ cx: 30, cy: 110, opacity: 0 }}
            animate={{ cx: [30, 60, 90, 120, 150], cy: [110, 120, 130, 135, 140], opacity: [0, 0.6, 0.6, 0.6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <text x="15" y="-10" textAnchor="middle" fontSize="11" fontWeight="700" fill="oklch(0.5 0.18 18)" fontFamily="Inter, system-ui">Nerve Damage</text>
          <text x="15" y="135" textAnchor="middle" fontSize="9" fill="currentColor" className="text-muted-foreground" fontFamily="Inter, system-ui">Spinal cord /</text>
          <text x="15" y="146" textAnchor="middle" fontSize="9" fill="currentColor" className="text-muted-foreground" fontFamily="Inter, system-ui">pelvic nerve</text>
        </g>

        {/* === Step 2: Weak signal (center-left) === */}
        <g transform="translate(220, 150)">
          {/* Waveform - weak signal */}
          <motion.path
            d="M0 20 Q10 18 20 20 Q30 22 40 20 Q50 18 60 20 Q70 22 80 20"
            stroke="oklch(0.6 0.18 18)" strokeWidth="2" fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <text x="40" y="-5" textAnchor="middle" fontSize="11" fontWeight="700" fill="oklch(0.5 0.18 18)" fontFamily="Inter, system-ui">Weak Signal</text>
          <text x="40" y="40" textAnchor="middle" fontSize="9" fill="currentColor" className="text-muted-foreground" fontFamily="Inter, system-ui">Reduced neural input</text>
          {/* Compare to normal */}
          <path d="M0 60 Q10 50 20 60 Q30 70 40 60 Q50 50 60 60 Q70 70 80 60" stroke="oklch(0.4 0.1 252)" strokeWidth="1.5" fill="none" opacity="0.3" strokeDasharray="3 2" />
          <text x="40" y="80" textAnchor="middle" fontSize="8" fill="currentColor" className="text-muted-foreground" fontFamily="Inter, system-ui" opacity="0.6">normal (comparison)</text>
        </g>

        {/* Arrow to next step */}
        <motion.path
          d="M310 170 L340 170"
          stroke="oklch(0.5 0.15 252)" strokeWidth="1.5" fill="none" markerEnd="url(#uda-arrow)"
        />

        {/* === Step 3: Weak bladder contraction (center-right) === */}
        <g transform="translate(360, 130)">
          {/* Bladder - weak contraction */}
          <motion.ellipse
            cx="50" cy="50" rx="40" ry="32"
            fill="url(#uda-bladder)"
            stroke="oklch(0.4 0.18 18)"
            strokeWidth="2"
            initial={{ rx: 40, ry: 32 }}
            animate={{ rx: [40, 37, 40], ry: [32, 30, 32] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* Hatching */}
          <g opacity="0.4">
            <line x1="20" y1="45" x2="80" y2="45" stroke="oklch(0.4 0.1 18)" strokeWidth="0.5" />
            <line x1="20" y1="55" x2="80" y2="55" stroke="oklch(0.4 0.1 18)" strokeWidth="0.5" />
          </g>
          {/* Contraction wave - weak */}
          <motion.path
            d="M10 90 Q25 87 40 90 Q55 88 70 90 Q85 89 100 90"
            stroke="oklch(0.6 0.18 18)" strokeWidth="1.5" fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <text x="50" y="-10" textAnchor="middle" fontSize="11" fontWeight="700" fill="oklch(0.5 0.18 18)" fontFamily="Inter, system-ui">Weak Contraction</text>
          <text x="50" y="110" textAnchor="middle" fontSize="9" fill="currentColor" className="text-muted-foreground" fontFamily="Inter, system-ui">Detrusor fails to</text>
          <text x="50" y="121" textAnchor="middle" fontSize="9" fill="currentColor" className="text-muted-foreground" fontFamily="Inter, system-ui">contract fully</text>
        </g>

        {/* Arrow to next step */}
        <motion.path
          d="M470 180 L500 180"
          stroke="oklch(0.5 0.15 252)" strokeWidth="1.5" fill="none"
        />

        {/* === Step 4: Incomplete emptying (right) === */}
        <g transform="translate(510, 130)">
          {/* Bladder with residual urine */}
          <ellipse cx="40" cy="50" rx="38" ry="30" fill="url(#uda-bladder)" stroke="oklch(0.4 0.18 18)" strokeWidth="2" />
          {/* Residual urine */}
          <ellipse cx="40" cy="70" rx="32" ry="12" fill="url(#uda-urine)" />
          {/* Urethra - slow drip */}
          <path d="M40 80 L40 105" stroke="oklch(0.5 0.18 18)" strokeWidth="5" fill="none" strokeLinecap="round" />
          {/* Few drops */}
          <motion.circle cx="40" r="1.5" fill="oklch(0.7 0.15 230)"
            initial={{ cy: 80, opacity: 0 }}
            animate={{ cy: [80, 110], opacity: [0, 0.6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeIn' }}
          />
          <motion.circle cx="40" r="1.5" fill="oklch(0.7 0.15 230)"
            initial={{ cy: 80, opacity: 0 }}
            animate={{ cy: [80, 110], opacity: [0, 0.6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeIn', delay: 0.9 }}
          />
          <text x="40" y="-10" textAnchor="middle" fontSize="11" fontWeight="700" fill="oklch(0.5 0.18 18)" fontFamily="Inter, system-ui">Incomplete Emptying</text>
          <text x="40" y="125" textAnchor="middle" fontSize="9" fill="currentColor" className="text-muted-foreground" fontFamily="Inter, system-ui">High residual urine</text>
          <text x="40" y="136" textAnchor="middle" fontSize="9" fill="currentColor" className="text-muted-foreground" fontFamily="Inter, system-ui">PVR &gt; 100 mL</text>
        </g>

        {/* === Bottom: arrow flow connecting all === */}
        <motion.path
          d="M75 270 Q200 280 300 275 Q400 270 540 270"
          stroke="oklch(0.5 0.15 252)" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.4"
          strokeDasharray="6 4"
        />
        <motion.circle r="5" fill="oklch(0.65 0.2 18)"
          initial={{ cx: 75, cy: 270, opacity: 0 }}
          animate={{ cx: [75, 200, 300, 400, 540], cy: [270, 280, 275, 270, 270], opacity: [0, 1, 1, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Step labels at bottom */}
        <g fontFamily="Inter, system-ui" fontSize="10" fontWeight="700">
          <text x="75" y="300" textAnchor="middle" fill="oklch(0.55 0.15 252)">Step 1</text>
          <text x="260" y="300" textAnchor="middle" fill="oklch(0.55 0.15 252)">Step 2</text>
          <text x="410" y="300" textAnchor="middle" fill="oklch(0.55 0.15 252)">Step 3</text>
          <text x="550" y="300" textAnchor="middle" fill="oklch(0.55 0.15 252)">Step 4</text>
        </g>

        {/* Description */}
        <text x="300" y="340" textAnchor="middle" fontSize="11" fill="currentColor" className="text-muted-foreground" fontFamily="Inter, system-ui">
          Nerve damage → weak signal → weak contraction → incomplete emptying
        </text>
      </svg>
    </div>
  )
}
