'use client'

import * as React from 'react'
import { motion } from 'framer-motion'

/**
 * Compact animated bladder pulse illustration for the hero.
 * Shows a stylized bladder with a "weak contraction" pulse pattern
 * contrasting with a normal pulse — visualizing the UAB concept.
 */
export function BladderPulseIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-labelledby="bp-title"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="bp-title">Bladder pulse illustration</title>

      <defs>
        <linearGradient id="bp-bladder" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.82 0.12 230)" stopOpacity="0.85" />
          <stop offset="100%" stopColor="oklch(0.6 0.15 252)" stopOpacity="0.85" />
        </linearGradient>
        <radialGradient id="bp-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="oklch(0.7 0.18 18)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="oklch(0.7 0.18 18)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Glow halo */}
      <motion.circle
        cx="100" cy="100" r="80"
        fill="url(#bp-glow)"
        initial={{ r: 70, opacity: 0.4 }}
        animate={{ r: [70, 85, 70], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Bladder shape */}
      <motion.g
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: '100px 100px' }}
      >
        <ellipse
          cx="100" cy="100" rx="55" ry="45"
          fill="url(#bp-bladder)"
          stroke="oklch(0.4 0.12 252)"
          strokeWidth="2"
        />
        {/* Detrusor hatching */}
        <g opacity="0.4">
          <line x1="50" y1="85" x2="150" y2="85" stroke="oklch(0.4 0.1 252)" strokeWidth="0.6" />
          <line x1="48" y1="100" x2="152" y2="100" stroke="oklch(0.4 0.1 252)" strokeWidth="0.6" />
          <line x1="50" y1="115" x2="150" y2="115" stroke="oklch(0.4 0.1 252)" strokeWidth="0.6" />
        </g>
        {/* Highlight */}
        <ellipse cx="100" cy="85" rx="35" ry="15" fill="white" opacity="0.2" />
        {/* Urethra */}
        <path d="M 100 145 L 100 165" stroke="oklch(0.5 0.15 252)" strokeWidth="6" fill="none" strokeLinecap="round" />
      </motion.g>

      {/* Pulse wave (EKG-style) showing weak contraction in UAB */}
      <g transform="translate(20, 180)">
        <path
          d="M 0 0 L 30 0 L 35 -3 L 40 3 L 45 -2 L 50 0 L 80 0 L 85 -10 L 90 0 L 160 0"
          stroke="oklch(0.7 0.18 18)"
          strokeWidth="1.5"
          fill="none"
        />
        <motion.circle
          r="2.5" fill="oklch(0.7 0.18 18)"
          initial={{ cx: 0, cy: 0 }}
          animate={{ cx: [0, 30, 40, 50, 80, 90, 160], cy: [0, 0, 3, 0, 0, 0, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />
      </g>
      <text x="100" y="195" textAnchor="middle" fontSize="7" fill="currentColor" className="text-muted-foreground" fontFamily="Inter, system-ui, sans-serif">
        weak detrusor contraction
      </text>
    </svg>
  )
}
