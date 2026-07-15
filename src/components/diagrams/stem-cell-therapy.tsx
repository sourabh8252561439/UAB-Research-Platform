'use client'

import * as React from 'react'
import { motion } from 'framer-motion'

/**
 * SVG showing stem cell therapy concept for UAB:
 * stem cells being injected into the detrusor muscle and
 * differentiating into smooth muscle cells to restore contractility.
 */
export function StemCellTherapyDiagram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 440"
      className={className}
      role="img"
      aria-labelledby="sc-title sc-desc"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="sc-title">Stem cell therapy for underactive bladder</title>
      <desc id="sc-desc">
        Diagram showing autologous stem cells being injected into the detrusor muscle of
        the bladder wall, where they differentiate into smooth muscle cells to restore
        contractile function — an investigational regenerative therapy.
      </desc>

      <defs>
        <linearGradient id="sc-bladder" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.82 0.12 230)" stopOpacity="0.7" />
          <stop offset="100%" stopColor="oklch(0.6 0.15 252)" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="sc-muscle" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.75 0.1 25)" />
          <stop offset="100%" stopColor="oklch(0.6 0.12 25)" />
        </linearGradient>
        <radialGradient id="sc-cell" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="oklch(0.85 0.15 60)" />
          <stop offset="60%" stopColor="oklch(0.7 0.2 18)" />
          <stop offset="100%" stopColor="oklch(0.55 0.2 18)" />
        </radialGradient>
        <radialGradient id="sc-stemcell" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="oklch(0.9 0.18 200)" />
          <stop offset="60%" stopColor="oklch(0.7 0.2 230)" />
          <stop offset="100%" stopColor="oklch(0.55 0.2 252)" />
        </radialGradient>
      </defs>

      {/* Title */}
      <text x="300" y="28" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontSize="14" fontWeight="700" fill="currentColor" className="text-foreground">
        Stem Cell Therapy for UAB
      </text>
      <text x="300" y="46" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontSize="10" fill="currentColor" className="text-muted-foreground">
        Investigational regenerative approach — Phase 1/2 trials ongoing
      </text>

      {/* === Left: Injection process === */}
      <g transform="translate(40, 80)">
        {/* Bladder wall cross-section */}
        {/* Outer bladder shape */}
        <path
          d="M 20 80 Q 20 30 80 30 L 180 30 Q 240 30 240 80 L 240 130 Q 240 180 180 180 L 80 180 Q 20 180 20 130 Z"
          fill="url(#sc-bladder)"
          stroke="oklch(0.35 0.12 252)"
          strokeWidth="1.5"
        />
        {/* Detrusor muscle layer (inner) */}
        <path
          d="M 30 80 Q 30 40 80 40 L 180 40 Q 230 40 230 80 L 230 130 Q 230 170 180 170 L 80 170 Q 30 170 30 130 Z"
          fill="url(#sc-muscle)"
          stroke="oklch(0.4 0.1 25)"
          strokeWidth="0.8"
          opacity="0.6"
        />
        {/* Muscle fiber striations */}
        <g opacity="0.35" stroke="oklch(0.4 0.1 25)" strokeWidth="0.6" fill="none">
          {[55, 70, 85, 100, 115, 130, 145, 160].map((y) => (
            <line key={y} x1="35" y1={y} x2="225" y2={y} />
          ))}
        </g>
        {/* Urothelium (inner lining) */}
        <ellipse cx="130" cy="105" rx="80" ry="40" fill="oklch(0.88 0.06 60)" opacity="0.5" />

        {/* Syringe/needle */}
        <g transform="translate(130, 0)">
          {/* Syringe barrel */}
          <rect x="-8" y="-30" width="16" height="50" rx="2" fill="white" stroke="oklch(0.5 0.05 252)" strokeWidth="1" />
          <rect x="-6" y="-28" width="12" height="20" rx="1" fill="oklch(0.7 0.15 230)" opacity="0.7" />
          {/* Plunger */}
          <rect x="-10" y="-42" width="20" height="8" rx="2" fill="oklch(0.5 0.05 252)" />
          <line x1="0" y1="-42" x2="0" y2="-50" stroke="oklch(0.5 0.05 252)" strokeWidth="2" />
          {/* Needle */}
          <line x1="0" y1="20" x2="0" y2="80" stroke="oklch(0.4 0.05 252)" strokeWidth="2" />
          <circle cx="0" cy="80" r="2" fill="oklch(0.4 0.05 252)" />
        </g>

        {/* Stem cells flowing down needle and into muscle */}
        <motion.g>
          {[0, 0.3, 0.6, 0.9, 1.2].map((delay, i) => (
            <motion.circle
              key={i}
              cx={130}
              r="4"
              fill="url(#sc-stemcell)"
              animate={{
                cy: [-10, 30, 80, 100 + (i * 8) % 40, 110 + (i * 12) % 50],
                opacity: [0, 1, 1, 1, 0],
                cx: [130, 130, 130, 130 + (i * 7 - 14), 130 + (i * 11 - 22)]
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeIn', delay }}
            />
          ))}
        </motion.g>

        {/* Injected stem cells in muscle */}
        <g>
          {[
            [100, 130], [160, 135], [120, 150], [145, 125], [175, 145],
            [85, 110], [195, 115], [110, 100], [170, 100]
          ].map(([cx, cy], i) => (
            <motion.g key={i}>
              <motion.circle
                cx={cx} cy={cy} r="5"
                fill="url(#sc-stemcell)"
                initial={{ r: 4, opacity: 0.6 }}
                animate={{ r: [4, 6, 4], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2, ease: 'easeInOut' }}
              />
              {/* Differentiating — small ring around */}
              <motion.circle
                cx={cx} cy={cy} r="8"
                fill="none" stroke="oklch(0.7 0.2 230)" strokeWidth="0.8"
                initial={{ r: 5, opacity: 0.5 }}
                animate={{ r: [5, 11, 5], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.2 + 0.5, ease: 'easeOut' }}
              />
            </motion.g>
          ))}
        </g>

        {/* Labels */}
        <g fontFamily="Inter, system-ui, sans-serif" fontSize="9" fontWeight="600">
          <line x1="130" y1="-50" x2="60" y2="-60" stroke="oklch(0.5 0.05 252)" strokeWidth="0.8" strokeDasharray="2 1.5" />
          <text x="56" y="-64" textAnchor="end" fill="currentColor" className="text-foreground">Syringe</text>

          <line x1="225" y1="105" x2="280" y2="90" stroke="oklch(0.5 0.12 25)" strokeWidth="0.8" strokeDasharray="2 1.5" />
          <text x="284" y="86" fill="currentColor" className="text-foreground">Detrusor Muscle</text>
          <text x="284" y="98" fill="currentColor" className="text-muted-foreground" fontSize="8" fontWeight="400">Target tissue</text>

          <line x1="160" y1="135" x2="280" y2="135" stroke="oklch(0.6 0.2 230)" strokeWidth="0.8" strokeDasharray="2 1.5" />
          <text x="284" y="131" fill="oklch(0.6 0.2 230)" fontWeight="700">Stem Cells</text>
          <text x="284" y="143" fill="currentColor" className="text-muted-foreground" fontSize="8" fontWeight="400">Autologous MSCs</text>

          <line x1="130" y1="105" x2="280" y2="160" stroke="oklch(0.5 0.1 60)" strokeWidth="0.8" strokeDasharray="2 1.5" />
          <text x="284" y="158" fill="currentColor" className="text-foreground">Urothelium</text>
          <text x="284" y="170" fill="currentColor" className="text-muted-foreground" fontSize="8" fontWeight="400">Inner lining</text>
        </g>
      </g>

      {/* === Right: Differentiation process === */}
      <g transform="translate(370, 80)">
        <text x="100" y="0" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontSize="11" fontWeight="700" fill="currentColor" className="text-foreground">
          Mechanism of Action
        </text>

        {/* Stage 1: Stem cell */}
        <g transform="translate(40, 35)">
          <motion.circle
            cx="0" cy="0" r="14"
            fill="url(#sc-stemcell)"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <text x="0" y="2" textAnchor="middle" fontSize="9" fontWeight="700" fill="white" fontFamily="Inter, system-ui, sans-serif">SC</text>
          <text x="0" y="32" textAnchor="middle" fontSize="9" fontWeight="600" fill="currentColor" className="text-foreground">Stem Cell</text>
          <text x="0" y="44" textAnchor="middle" fontSize="8" fill="currentColor" className="text-muted-foreground" fontFamily="Inter, system-ui, sans-serif">Pluripotent</text>
        </g>

        {/* Arrow */}
        <motion.path
          d="M 60 35 L 90 35"
          stroke="oklch(0.5 0.1 252)"
          strokeWidth="1.5" fill="none" markerEnd="url(#sc-arrow)"
        />
        <motion.circle
          r="2" fill="oklch(0.6 0.15 230)"
          animate={{ cx: [60, 75, 90], cy: [35, 35, 35], opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeIn' }}
        />

        {/* Stage 2: Differentiating */}
        <g transform="translate(120, 35)">
          <circle cx="0" cy="0" r="13" fill="oklch(0.7 0.18 200)" opacity="0.6" />
          <circle cx="-6" cy="-3" r="6" fill="url(#sc-stemcell)" />
          <circle cx="6" cy="3" r="6" fill="url(#sc-cell)" opacity="0.8" />
          <text x="0" y="32" textAnchor="middle" fontSize="9" fontWeight="600" fill="currentColor" className="text-foreground">Differentiating</text>
          <text x="0" y="44" textAnchor="middle" fontSize="8" fill="currentColor" className="text-muted-foreground" fontFamily="Inter, system-ui, sans-serif">Paracrine signals</text>
        </g>

        <motion.path d="M 140 35 L 170 35" stroke="oklch(0.5 0.1 252)" strokeWidth="1.5" fill="none" />
        <motion.circle
          r="2" fill="oklch(0.6 0.18 18)"
          animate={{ cx: [140, 155, 170], cy: [35, 35, 35], opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeIn', delay: 0.5 }}
        />

        {/* Stage 3: Smooth muscle cell (mature) */}
        <g transform="translate(200, 35)">
          <motion.ellipse
            cx="0" cy="0" rx="18" ry="9"
            fill="url(#sc-cell)"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* Striations */}
          <line x1="-12" y1="-2" x2="12" y2="-2" stroke="oklch(0.4 0.1 25)" strokeWidth="0.5" opacity="0.6" />
          <line x1="-12" y1="2" x2="12" y2="2" stroke="oklch(0.4 0.1 25)" strokeWidth="0.5" opacity="0.6" />
          <text x="0" y="32" textAnchor="middle" fontSize="9" fontWeight="600" fill="currentColor" className="text-foreground">Smooth Muscle Cell</text>
          <text x="0" y="44" textAnchor="middle" fontSize="8" fill="currentColor" className="text-muted-foreground" fontFamily="Inter, system-ui, sans-serif">Contractile</text>
        </g>

        {/* Outcome callout */}
        <g transform="translate(0, 90)">
          <rect x="0" y="0" width="200" height="80" rx="8" fill="oklch(0.95 0.01 240)" stroke="oklch(0.85 0.05 230)" strokeWidth="1" />
          <text x="100" y="20" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontSize="10" fontWeight="700" fill="oklch(0.55 0.15 252)">
            Therapeutic Goal
          </text>
          <text x="100" y="38" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontSize="9" fill="currentColor" className="text-foreground">
            Restore detrusor contractility
          </text>
          <text x="100" y="52" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontSize="9" fill="currentColor" className="text-muted-foreground">
            ↓ Post-void residual
          </text>
          <text x="100" y="64" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontSize="9" fill="currentColor" className="text-muted-foreground">
            ↑ Bladder emptying
          </text>
        </g>

        {/* Trial status */}
        <g transform="translate(0, 190)">
          <rect x="0" y="0" width="200" height="50" rx="6" fill="oklch(0.95 0.05 60)" stroke="oklch(0.85 0.1 60)" strokeWidth="1" />
          <circle cx="14" cy="25" r="5" fill="oklch(0.7 0.2 60)" />
          <text x="28" y="22" fontFamily="Inter, system-ui, sans-serif" fontSize="10" fontWeight="700" fill="oklch(0.5 0.18 60)">
            Clinical Trial Status
          </text>
          <text x="28" y="36" fontFamily="Inter, system-ui, sans-serif" fontSize="8.5" fill="currentColor" className="text-muted-foreground">
            Phase 1/2 — Recruiting • Not FDA approved
          </text>
        </g>
      </g>
    </svg>
  )
}
