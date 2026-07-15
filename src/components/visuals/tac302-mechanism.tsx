'use client'

import * as React from 'react'
import { motion } from 'framer-motion'

/**
 * Animated explainer: How TAC-302 may work (investigational).
 * Shows the proposed mechanism: drug molecule binds to detrusor muscle receptors,
 * enhancing contractility. Clearly labeled as investigational.
 */
export function Tac302MechanismAnimation({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 600 380" className="w-full h-auto" role="img" aria-labelledby="tac-title tac-desc" xmlns="http://www.w3.org/2000/svg">
        <title id="tac-title">TAC-302 proposed mechanism of action</title>
        <desc id="tac-desc">
          Investigational diagram showing how TAC-302 (a prostaglandin E2 receptor agonist)
          is proposed to enhance detrusor muscle contractility. Phase 2 clinical trials ongoing.
          Not FDA-approved.
        </desc>

        <defs>
          <linearGradient id="tac-muscle" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.75 0.1 25)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="oklch(0.6 0.12 25)" stopOpacity="0.6" />
          </linearGradient>
          <radialGradient id="tac-drug" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="oklch(0.85 0.18 60)" />
            <stop offset="100%" stopColor="oklch(0.6 0.2 18)" />
          </radialGradient>
          <radialGradient id="tac-receptor" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="oklch(0.7 0.15 252)" />
            <stop offset="100%" stopColor="oklch(0.5 0.15 252)" />
          </radialGradient>
        </defs>

        {/* Title */}
        <text x="300" y="28" textAnchor="middle" fontSize="16" fontWeight="700" fill="currentColor" className="text-foreground" fontFamily="Inter, system-ui">
          TAC-302 — Proposed Mechanism of Action
        </text>
        <text x="300" y="46" textAnchor="middle" fontSize="11" fill="oklch(0.6 0.2 18)" fontFamily="Inter, system-ui" fontWeight="600">
          Investigational • Phase 2 • Not FDA-approved
        </text>

        {/* === Left: Drug pill === */}
        <g transform="translate(60, 160)">
          {/* Pill capsule */}
          <motion.g
            initial={{ y: 0, rotate: 0 }}
            animate={{ y: [0, -4, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '40px 30px' }}
          >
            <rect x="10" y="20" width="60" height="20" rx="10" fill="url(#tac-drug)" stroke="oklch(0.5 0.2 18)" strokeWidth="1.5" />
            <rect x="10" y="20" width="30" height="20" rx="10" fill="oklch(0.7 0.2 60)" fillOpacity="0.5" />
            <text x="40" y="34" textAnchor="middle" fontSize="9" fontWeight="700" fill="white" fontFamily="Inter, system-ui">TAC-302</text>
          </motion.g>
          <text x="40" y="65" textAnchor="middle" fontSize="10" fontWeight="700" fill="currentColor" className="text-foreground" fontFamily="Inter, system-ui">Oral Tablet</text>
          <text x="40" y="78" textAnchor="middle" fontSize="8" fill="currentColor" className="text-muted-foreground" fontFamily="Inter, system-ui">Once daily</text>
        </g>

        {/* Drug molecules traveling to muscle */}
        <motion.circle r="4" fill="url(#tac-drug)"
          initial={{ cx: 120, cy: 180, opacity: 0 }}
          animate={{ cx: [120, 200, 280, 360], cy: [180, 175, 170, 175], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.circle r="3.5" fill="url(#tac-drug)"
          initial={{ cx: 120, cy: 195, opacity: 0 }}
          animate={{ cx: [120, 200, 280, 360], cy: [195, 190, 185, 190], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />
        <motion.circle r="3" fill="url(#tac-drug)"
          initial={{ cx: 120, cy: 210, opacity: 0 }}
          animate={{ cx: [120, 200, 280, 360], cy: [210, 205, 200, 205], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />

        {/* Arrow */}
        <path d="M130 190 L200 190" stroke="oklch(0.6 0.2 18)" strokeWidth="1.5" fill="none" opacity="0.4" strokeDasharray="4 3" />
        <text x="165" y="180" textAnchor="middle" fontSize="9" fill="currentColor" className="text-muted-foreground" fontFamily="Inter, system-ui" opacity="0.7">absorbed</text>

        {/* === Center: Detrusor muscle with receptors === */}
        <g transform="translate(280, 110)">
          {/* Muscle fiber */}
          <motion.ellipse
            cx="80" cy="80" rx="80" ry="35"
            fill="url(#tac-muscle)"
            stroke="oklch(0.4 0.1 25)"
            strokeWidth="2"
            initial={{ rx: 80, ry: 35 }}
            animate={{ rx: [80, 75, 80], ry: [35, 33, 35] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* Striations */}
          <g opacity="0.4">
            <line x1="10" y1="70" x2="150" y2="70" stroke="oklch(0.4 0.1 25)" strokeWidth="0.6" />
            <line x1="10" y1="80" x2="150" y2="80" stroke="oklch(0.4 0.1 25)" strokeWidth="0.6" />
            <line x1="10" y1="90" x2="150" y2="90" stroke="oklch(0.4 0.1 25)" strokeWidth="0.6" />
          </g>

          {/* Receptors on muscle surface */}
          {[
            [40, 50], [70, 45], [100, 50], [130, 55],
            [40, 110], [70, 115], [100, 110], [130, 105],
          ].map(([cx, cy], i) => (
            <g key={i}>
              <motion.circle
                cx={cx} cy={cy} r="5"
                fill="url(#tac-receptor)"
                initial={{ r: 4, opacity: 0.7 }}
                animate={{ r: [4, 6, 4], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2, ease: 'easeInOut' }}
              />
              {/* Drug binding flash */}
              <motion.circle
                cx={cx} cy={cy} r="8"
                fill="none" stroke="oklch(0.7 0.2 60)" strokeWidth="1"
                initial={{ r: 5, opacity: 0.6 }}
                animate={{ r: [5, 11, 5], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 + 0.5, ease: 'easeOut' }}
              />
            </g>
          ))}

          <text x="80" y="20" textAnchor="middle" fontSize="11" fontWeight="700" fill="currentColor" className="text-foreground" fontFamily="Inter, system-ui">Detrusor Muscle</text>
          <text x="80" y="135" textAnchor="middle" fontSize="9" fill="currentColor" className="text-muted-foreground" fontFamily="Inter, system-ui">PGE2 receptors (proposed target)</text>
        </g>

        {/* === Right: Enhanced contraction === */}
        <g transform="translate(490, 160)">
          {/* Strong contraction wave */}
          <motion.path
            d="M0 20 Q10 5 20 20 Q30 35 40 20 Q50 5 60 20 Q70 35 80 20"
            stroke="oklch(0.55 0.15 165)" strokeWidth="2.5" fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* Arrow up = improved */}
          <motion.path
            d="M40 60 L40 40 M35 45 L40 40 L45 45"
            stroke="oklch(0.55 0.15 165)" strokeWidth="2" fill="none" strokeLinecap="round"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <text x="40" y="80" textAnchor="middle" fontSize="10" fontWeight="700" fill="oklch(0.55 0.15 165)" fontFamily="Inter, system-ui">Enhanced</text>
          <text x="40" y="92" textAnchor="middle" fontSize="10" fontWeight="700" fill="oklch(0.55 0.15 165)" fontFamily="Inter, system-ui">Contractility</text>
          <text x="40" y="110" textAnchor="middle" fontSize="8" fill="currentColor" className="text-muted-foreground" fontFamily="Inter, system-ui">(proposed)</text>
        </g>

        {/* === Bottom: Outcome === */}
        <g transform="translate(0, 290)">
          <rect x="60" y="0" width="480" height="60" rx="10" fill="oklch(0.97 0.01 240)" stroke="oklch(0.85 0.01 240)" strokeWidth="1" />
          <text x="300" y="20" textAnchor="middle" fontSize="11" fontWeight="700" fill="currentColor" className="text-foreground" fontFamily="Inter, system-ui">
            Therapeutic Goal (under investigation)
          </text>
          <text x="300" y="38" textAnchor="middle" fontSize="10" fill="currentColor" className="text-muted-foreground" fontFamily="Inter, system-ui">
            ↓ Post-void residual   •   ↑ Urine flow rate   •   Improved bladder emptying
          </text>
          <text x="300" y="52" textAnchor="middle" fontSize="9" fill="oklch(0.6 0.2 18)" fontFamily="Inter, system-ui" fontStyle="italic">
            Efficacy not yet established — Phase 2 RCT results pending
          </text>
        </g>
      </svg>
    </div>
  )
}
