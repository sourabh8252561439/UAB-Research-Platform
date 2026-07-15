'use client'

import * as React from 'react'
import { motion } from 'framer-motion'

/**
 * SVG illustration of a urodynamic study setup.
 * Shows bladder with catheter, pressure transducer, flow meter,
 * and a simplified pressure-flow graph.
 */
export function UrodynamicDiagram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 440"
      className={className}
      role="img"
      aria-labelledby="uds-title uds-desc"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="uds-title">Urodynamic study setup</title>
      <desc id="uds-desc">
        Diagram showing a urodynamic study: bladder catheter measuring detrusor pressure,
        rectal catheter for abdominal pressure, and a flow meter with a pressure-flow curve
        showing the low-pressure low-flow pattern characteristic of detrusor underactivity.
      </desc>

      <defs>
        <linearGradient id="uds-bladder" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.82 0.12 230)" stopOpacity="0.7" />
          <stop offset="100%" stopColor="oklch(0.6 0.15 252)" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="uds-flow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="oklch(0.6 0.18 18)" />
          <stop offset="100%" stopColor="oklch(0.7 0.18 40)" />
        </linearGradient>
        <linearGradient id="uds-pressure" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="oklch(0.55 0.15 252)" />
          <stop offset="100%" stopColor="oklch(0.7 0.15 230)" />
        </linearGradient>
      </defs>

      {/* Title */}
      <text
        x="300" y="28" textAnchor="middle"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="14" fontWeight="700"
        fill="currentColor" className="text-foreground"
      >
        Urodynamic Study (Pressure-Flow Analysis)
      </text>
      <text
        x="300" y="46" textAnchor="middle"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="10"
        fill="currentColor" className="text-muted-foreground"
      >
        Gold standard for diagnosing detrusor underactivity
      </text>

      {/* === Left: Bladder schematic with catheters === */}
      <g transform="translate(40, 80)">
        {/* Bladder */}
        <ellipse
          cx="110" cy="160" rx="70" ry="55"
          fill="url(#uds-bladder)"
          stroke="oklch(0.35 0.12 252)"
          strokeWidth="1.5"
        />
        {/* Bladder fill level (urine) */}
        <clipPath id="uds-bladder-clip">
          <ellipse cx="110" cy="160" rx="70" ry="55" />
        </clipPath>
        <rect
          x="40" y="160" width="140" height="60"
          fill="oklch(0.7 0.15 230)"
          opacity="0.5"
          clipPath="url(#uds-bladder-clip)"
        />

        {/* Detrusor muscle hatching */}
        <g opacity="0.4">
          <line x1="50" y1="180" x2="170" y2="180" stroke="oklch(0.4 0.1 252)" strokeWidth="0.5" />
          <line x1="48" y1="195" x2="172" y2="195" stroke="oklch(0.4 0.1 252)" strokeWidth="0.5" />
          <line x1="50" y1="205" x2="170" y2="205" stroke="oklch(0.4 0.1 252)" strokeWidth="0.5" />
        </g>

        {/* Urethra */}
        <path
          d="M 110 215 L 110 250"
          stroke="oklch(0.5 0.15 252)"
          strokeWidth="8" fill="none" strokeLinecap="round"
        />

        {/* Bladder catheter (intravesical pressure - Pves) */}
        <path
          d="M 110 100 L 110 175"
          stroke="oklch(0.6 0.18 18)"
          strokeWidth="3" fill="none"
        />
        <circle cx="110" cy="175" r="4" fill="oklch(0.6 0.18 18)" />
        <motion.circle
          cx="110"
          r="3"
          fill="oklch(0.6 0.18 18)"
          initial={{ cy: 110, opacity: 0.6 }}
          animate={{ cy: [110, 175, 110] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Rectal catheter (abdominal pressure - Pabd) */}
        <path
          d="M 30 250 Q 25 240 30 220"
          stroke="oklch(0.55 0.15 252)"
          strokeWidth="2.5" fill="none"
          strokeDasharray="4 2"
        />

        {/* Flow meter at outlet */}
        <g transform="translate(80, 250)">
          <rect x="0" y="0" width="60" height="20" rx="4" fill="oklch(0.2 0.05 252)" />
          <text x="30" y="14" textAnchor="middle" fill="white" fontSize="9" fontWeight="600" fontFamily="Inter, system-ui, sans-serif">
            FLOW METER
          </text>
          {/* Urine drops */}
          <motion.circle
            cx="30" cy="22" r="2.5" fill="oklch(0.7 0.15 230)"
            initial={{ cy: 22, opacity: 1 }}
            animate={{ cy: [22, 38], opacity: [1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeIn' }}
          />
          <motion.circle
            cx="22" cy="22" r="2" fill="oklch(0.7 0.15 230)"
            initial={{ cy: 22, opacity: 1 }}
            animate={{ cy: [22, 38], opacity: [1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeIn', delay: 0.4 }}
          />
          <motion.circle
            cx="38" cy="22" r="2" fill="oklch(0.7 0.15 230)"
            initial={{ cy: 22, opacity: 1 }}
            animate={{ cy: [22, 38], opacity: [1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeIn', delay: 0.8 }}
          />
        </g>

        {/* Labels */}
        <g fontFamily="Inter, system-ui, sans-serif" fontSize="9" fontWeight="600">
          <line x1="113" y1="140" x2="200" y2="120" stroke="oklch(0.6 0.18 18)" strokeWidth="0.8" strokeDasharray="2 1.5" />
          <text x="204" y="116" fill="oklch(0.6 0.2 18)">Pves catheter</text>
          <text x="204" y="128" fill="currentColor" className="text-muted-foreground" fontSize="8" fontWeight="400">intravesical pressure</text>

          <line x1="25" y1="230" x2="-15" y2="200" stroke="oklch(0.55 0.15 252)" strokeWidth="0.8" strokeDasharray="2 1.5" />
          <text x="-19" y="196" textAnchor="end" fill="oklch(0.55 0.15 252)">Pabd catheter</text>
          <text x="-19" y="208" textAnchor="end" fill="currentColor" className="text-muted-foreground" fontSize="8" fontWeight="400">abdominal pressure</text>

          <text x="110" y="100" textAnchor="middle" fill="currentColor" className="text-foreground" fontSize="9">Bladder</text>
        </g>
      </g>

      {/* === Right: Pressure-flow graph === */}
      <g transform="translate(340, 80)">
        <rect x="0" y="0" width="230" height="220" rx="8" fill="oklch(0.97 0.005 240)" stroke="oklch(0.9 0.01 240)" strokeWidth="1" />

        {/* Axes */}
        <line x1="35" y1="180" x2="210" y2="180" stroke="currentColor" className="text-foreground" strokeWidth="1" opacity="0.5" />
        <line x1="35" y1="180" x2="35" y2="20" stroke="currentColor" className="text-foreground" strokeWidth="1" opacity="0.5" />

        {/* Y-axis label (Pressure) */}
        <text x="-100" y="14" transform="rotate(-90)" textAnchor="middle" fill="currentColor" className="text-muted-foreground" fontSize="9" fontWeight="600" fontFamily="Inter, system-ui, sans-serif">
          Detrusor Pressure (cm H₂O)
        </text>
        {/* X-axis label (Flow) */}
        <text x="122" y="205" textAnchor="middle" fill="currentColor" className="text-muted-foreground" fontSize="9" fontWeight="600" fontFamily="Inter, system-ui, sans-serif">
          Flow Rate (mL/s)
        </text>

        {/* Gridlines */}
        <g opacity="0.3">
          <line x1="35" y1="60" x2="210" y2="60" stroke="currentColor" className="text-muted-foreground" strokeWidth="0.5" strokeDasharray="2 2" />
          <line x1="35" y1="120" x2="210" y2="120" stroke="currentColor" className="text-muted-foreground" strokeWidth="0.5" strokeDasharray="2 2" />
          <line x1="80" y1="20" x2="80" y2="180" stroke="currentColor" className="text-muted-foreground" strokeWidth="0.5" strokeDasharray="2 2" />
          <line x1="130" y1="20" x2="130" y2="180" stroke="currentColor" className="text-muted-foreground" strokeWidth="0.5" strokeDasharray="2 2" />
          <line x1="180" y1="20" x2="180" y2="180" stroke="currentColor" className="text-muted-foreground" strokeWidth="0.5" strokeDasharray="2 2" />
        </g>

        {/* Y-axis ticks */}
        <g fontFamily="Inter, system-ui, sans-serif" fontSize="8" fill="currentColor" className="text-muted-foreground">
          <text x="30" y="184" textAnchor="end">0</text>
          <text x="30" y="124" textAnchor="end">20</text>
          <text x="30" y="64" textAnchor="end">40</text>
        </g>
        {/* X-axis ticks */}
        <g fontFamily="Inter, system-ui, sans-serif" fontSize="8" fill="currentColor" className="text-muted-foreground">
          <text x="35" y="194">0</text>
          <text x="80" y="194">10</text>
          <text x="130" y="194">20</text>
          <text x="180" y="194">30</text>
        </g>

        {/* Normal curve (faded, dashed) */}
        <path
          d="M 35 170 Q 80 60 130 80 Q 180 130 200 175"
          stroke="oklch(0.5 0.1 252)"
          strokeWidth="1.5" fill="none"
          strokeDasharray="4 3"
          opacity="0.5"
        />
        <text x="195" y="115" fill="oklch(0.5 0.1 252)" fontSize="8" fontWeight="600" fontFamily="Inter, system-ui, sans-serif" opacity="0.7">Normal</text>

        {/* UAB curve (highlighted - low pressure, low flow) */}
        <motion.path
          d="M 35 178 Q 80 145 130 135 Q 180 150 200 175"
          stroke="url(#uds-flow)"
          strokeWidth="3" fill="none" strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse', repeatDelay: 1 }}
        />
        <text x="155" y="130" fill="oklch(0.6 0.2 18)" fontSize="9" fontWeight="700" fontFamily="Inter, system-ui, sans-serif">UAB</text>
        <text x="155" y="142" fill="currentColor" className="text-muted-foreground" fontSize="7.5" fontFamily="Inter, system-ui, sans-serif">low pressure</text>
        <text x="155" y="152" fill="currentColor" className="text-muted-foreground" fontSize="7.5" fontFamily="Inter, system-ui, sans-serif">low flow</text>

        {/* Critical point marker (PdetQmax) */}
        <circle cx="130" cy="135" r="4" fill="oklch(0.6 0.2 18)" stroke="white" strokeWidth="1.5" />
        <line x1="130" y1="135" x2="160" y2="100" stroke="oklch(0.6 0.2 18)" strokeWidth="0.8" strokeDasharray="2 1.5" />
        <text x="163" y="96" fill="oklch(0.6 0.2 18)" fontSize="8" fontWeight="700" fontFamily="Inter, system-ui, sans-serif">PdetQmax</text>
        <text x="163" y="108" fill="currentColor" className="text-muted-foreground" fontSize="7" fontFamily="Inter, system-ui, sans-serif">used in BCI calc</text>

        {/* Graph title */}
        <text x="122" y="35" textAnchor="middle" fill="currentColor" className="text-foreground" fontSize="10" fontWeight="700" fontFamily="Inter, system-ui, sans-serif">
          Pressure-Flow Plot
        </text>
      </g>
    </svg>
  )
}
