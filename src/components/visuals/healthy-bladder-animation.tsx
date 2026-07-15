'use client'

import * as React from 'react'
import { motion } from 'framer-motion'

/**
 * Animated explainer: How a healthy bladder works.
 * Shows the fill-store-empty cycle with animated urine level,
 * detrusor contraction, sphincter relaxation, and urine flow.
 */
export function HealthyBladderAnimation({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 600 360" className="w-full h-auto" role="img" aria-labelledby="hba-title hba-desc" xmlns="http://www.w3.org/2000/svg">
        <title id="hba-title">How a healthy bladder works</title>
        <desc id="hba-desc">
          Animated diagram showing the three phases of healthy bladder function:
          filling, storage, and emptying. Urine level rises during filling,
          detrusor muscle remains relaxed during storage, then contracts during emptying
          while the sphincter relaxes to allow urine flow.
        </desc>

        <defs>
          <linearGradient id="hba-bladder" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.85 0.1 230)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="oklch(0.65 0.15 230)" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="hba-urine" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.78 0.15 230)" stopOpacity="0.7" />
            <stop offset="100%" stopColor="oklch(0.6 0.18 230)" stopOpacity="0.9" />
          </linearGradient>
          <clipPath id="hba-bladder-clip">
            <ellipse cx="300" cy="180" rx="80" ry="70" />
          </clipPath>
        </defs>

        {/* Title */}
        <text x="300" y="28" textAnchor="middle" fontSize="16" fontWeight="700" fill="currentColor" className="text-foreground" fontFamily="Inter, system-ui">
          How a Healthy Bladder Works
        </text>

        {/* Three-phase visualization */}
        {/* Bladder body */}
        <motion.ellipse
          cx="300" cy="180" rx="80" ry="70"
          fill="url(#hba-bladder)"
          stroke="oklch(0.4 0.12 252)"
          strokeWidth="2"
          initial={{ ry: 70 }}
          animate={{ ry: [70, 65, 55, 70] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Urine level - rises during fill, drops during empty */}
        <motion.rect
          x="220" y="240"
          width="160" height="0"
          fill="url(#hba-urine)"
          clipPath="url(#hba-bladder-clip)"
          initial={{ y: 240, height: 0 }}
          animate={{
            y: [240, 200, 160, 240],
            height: [0, 40, 80, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Detrusor muscle hatching - relaxes then contracts */}
        <motion.g
          initial={{ opacity: 0.4 }}
          animate={{ opacity: [0.3, 0.3, 0.7, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <line x1="230" y1="160" x2="370" y2="160" stroke="oklch(0.4 0.1 252)" strokeWidth="0.8" />
          <line x1="225" y1="180" x2="375" y2="180" stroke="oklch(0.4 0.1 252)" strokeWidth="0.8" />
          <line x1="230" y1="200" x2="370" y2="200" stroke="oklch(0.4 0.1 252)" strokeWidth="0.8" />
        </motion.g>

        {/* Sphincter - closes during fill, opens during empty */}
        <motion.ellipse
          cx="300" cy="252" rx="14" ry="5"
          fill="oklch(0.55 0.15 252)"
          initial={{ rx: 14, opacity: 0.8 }}
          animate={{ rx: [14, 14, 8, 14], opacity: [0.8, 0.8, 0.4, 0.8] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Urethra */}
        <path d="M300 252 L300 320" stroke="oklch(0.5 0.15 252)" strokeWidth="8" fill="none" strokeLinecap="round" />

        {/* Urine flow during empty phase */}
        <motion.g>
          {[0, 0.1, 0.2, 0.3, 0.4].map((delay) => (
            <motion.circle
              key={delay}
              cx="300" r="3" fill="oklch(0.7 0.15 230)"
              initial={{ cy: 252, opacity: 0 }}
              animate={{ cy: [252, 340], opacity: [0, 1, 0] }}
              transition={{ duration: 0.7, repeat: Infinity, delay: 3.5 + delay, ease: 'easeIn' }}
            />
          ))}
        </motion.g>

        {/* Phase indicator at top */}
        <motion.g>
          <text x="120" y="80" fontSize="13" fontWeight="700" fill="oklch(0.55 0.15 252)" fontFamily="Inter, system-ui">Filling</text>
          <motion.circle cx="120" cy="100" r="6" fill="oklch(0.7 0.15 230)"
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 0.3, 0.3, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        </motion.g>
        <motion.g>
          <text x="300" y="80" textAnchor="middle" fontSize="13" fontWeight="700" fill="oklch(0.55 0.15 252)" fontFamily="Inter, system-ui">Storage</text>
          <motion.circle cx="300" cy="100" r="6" fill="oklch(0.7 0.18 60)"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.3, 1, 0.3, 0.3] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        </motion.g>
        <motion.g>
          <text x="480" y="80" fontSize="13" fontWeight="700" fill="oklch(0.55 0.15 252)" fontFamily="Inter, system-ui">Emptying</text>
          <motion.circle cx="480" cy="100" r="6" fill="oklch(0.65 0.2 18)"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.3, 0.3, 1, 0.3] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        </motion.g>

        {/* Connecting progress line */}
        <motion.line
          x1="135" y1="100" x2="465" y2="100"
          stroke="oklch(0.5 0.15 252)" strokeWidth="1.5" opacity="0.3"
        />
        <motion.circle
          r="4" fill="oklch(0.65 0.2 18)"
          initial={{ cx: 120, cy: 100 }}
          animate={{ cx: [120, 300, 480, 120], cy: [100, 100, 100, 100] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Labels at bottom */}
        <g fontFamily="Inter, system-ui" fontSize="11" fontWeight="600">
          <motion.text
            x="120" y="120" textAnchor="middle" fill="oklch(0.55 0.15 252)"
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 0.4, 0.4, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
          >Urine flows in</motion.text>
          <motion.text
            x="300" y="120" textAnchor="middle" fill="oklch(0.55 0.15 252)"
            initial={{ opacity: 0.4 }}
            animate={{ opacity: [0.4, 1, 0.4, 0.4] }}
            transition={{ duration: 6, repeat: Infinity }}
          >Muscle relaxed</motion.text>
          <motion.text
            x="480" y="120" textAnchor="middle" fill="oklch(0.55 0.15 252)"
            initial={{ opacity: 0.4 }}
            animate={{ opacity: [0.4, 0.4, 1, 0.4] }}
            transition={{ duration: 6, repeat: Infinity }}
          >Muscle contracts</motion.text>
        </g>

        {/* Description */}
        <text x="300" y="340" textAnchor="middle" fontSize="11" fill="currentColor" className="text-muted-foreground" fontFamily="Inter, system-ui">
          A healthy bladder fills, stores, and empties completely through coordinated muscle action.
        </text>
      </svg>
    </div>
  )
}
