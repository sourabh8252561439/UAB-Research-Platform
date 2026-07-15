'use client'

import * as React from 'react'
import { motion } from 'framer-motion'

/**
 * Premium SVG illustration of the urinary tract anatomy.
 * Shows kidneys, ureters, bladder (with detrusor muscle hatching),
 * urethra, and key anatomical labels relevant to Underactive Bladder.
 *
 * Uses CSS variables for theming (light/dark support).
 * All decorative gradients have unique IDs to avoid collisions.
 */
export function BladderAnatomyDiagram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 520"
      className={className}
      role="img"
      aria-labelledby="bladder-anatomy-title bladder-anatomy-desc"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="bladder-anatomy-title">Urinary tract anatomy</title>
      <desc id="bladder-anatomy-desc">
        Anatomical illustration showing the kidneys, ureters, bladder with detrusor muscle,
        urethra, and sphincter — the structures involved in Underactive Bladder.
      </desc>

      <defs>
        <linearGradient id="ba-tissue" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.85 0.05 25)" />
          <stop offset="100%" stopColor="oklch(0.72 0.08 25)" />
        </linearGradient>
        <linearGradient id="ba-bladder" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.82 0.12 230)" stopOpacity="0.85" />
          <stop offset="100%" stopColor="oklch(0.6 0.15 252)" stopOpacity="0.85" />
        </linearGradient>
        <linearGradient id="ba-kidney" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.7 0.1 25)" />
          <stop offset="100%" stopColor="oklch(0.55 0.13 25)" />
        </linearGradient>
        <linearGradient id="ba-urethra" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.7 0.15 252)" />
          <stop offset="100%" stopColor="oklch(0.55 0.18 252)" />
        </linearGradient>
        <pattern id="ba-detrusor" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
          <path d="M 0 3 L 6 3" stroke="oklch(0.4 0.1 252)" strokeWidth="0.4" opacity="0.4" />
        </pattern>
        <filter id="ba-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
          <feOffset dx="0" dy="3" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.25" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background subtle grid */}
      <rect width="600" height="520" fill="transparent" />

      {/* Kidneys */}
      <g filter="url(#ba-shadow)">
        {/* Left kidney */}
        <path
          d="M 130 90 Q 100 90 95 130 Q 90 170 110 200 Q 130 215 155 205 Q 175 195 175 160 Q 175 125 165 105 Q 155 90 130 90 Z"
          fill="url(#ba-kidney)"
          stroke="oklch(0.4 0.1 25)"
          strokeWidth="1.5"
        />
        {/* Right kidney */}
        <path
          d="M 470 90 Q 500 90 505 130 Q 510 170 490 200 Q 470 215 445 205 Q 425 195 425 160 Q 425 125 435 105 Q 445 90 470 90 Z"
          fill="url(#ba-kidney)"
          stroke="oklch(0.4 0.1 25)"
          strokeWidth="1.5"
        />
        {/* Kidney inner (medulla) */}
        <ellipse cx="135" cy="150" rx="20" ry="35" fill="oklch(0.6 0.12 25)" opacity="0.6" />
        <ellipse cx="465" cy="150" rx="20" ry="35" fill="oklch(0.6 0.12 25)" opacity="0.6" />
      </g>

      {/* Ureters */}
      <path
        d="M 145 205 Q 160 260 200 320 Q 230 360 270 370"
        stroke="url(#ba-urethra)"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M 455 205 Q 440 260 400 320 Q 370 360 330 370"
        stroke="url(#ba-urethra)"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
        opacity="0.85"
      />

      {/* Bladder body (oval shape) */}
      <g filter="url(#ba-shadow)">
        <ellipse
          cx="300"
          cy="395"
          rx="115"
          ry="80"
          fill="url(#ba-bladder)"
          stroke="oklch(0.35 0.12 252)"
          strokeWidth="2"
        />
        {/* Detrusor muscle hatching overlay */}
        <ellipse
          cx="300"
          cy="395"
          rx="115"
          ry="80"
          fill="url(#ba-detrusor)"
          opacity="0.7"
        />
        {/* Bladder dome highlight */}
        <ellipse
          cx="300"
          cy="370"
          rx="80"
          ry="30"
          fill="white"
          opacity="0.15"
        />
      </g>

      {/* Urethra */}
      <path
        d="M 300 475 L 300 505"
        stroke="url(#ba-urethra)"
        strokeWidth="9"
        fill="none"
        strokeLinecap="round"
      />
      {/* External sphincter */}
      <ellipse
        cx="300"
        cy="495"
        rx="14"
        ry="6"
        fill="oklch(0.55 0.18 252)"
        stroke="oklch(0.4 0.15 252)"
        strokeWidth="1"
      />

      {/* Pulsing highlight on detrusor (the affected muscle in UAB) */}
      <motion.ellipse
        cx="300"
        cy="395"
        rx="115"
        ry="80"
        fill="none"
        stroke="oklch(0.7 0.18 18)"
        strokeWidth="2"
        strokeDasharray="6 4"
        initial={{ opacity: 0.3, strokeWidth: 1.5 }}
        animate={{ opacity: [0.3, 0.8, 0.3], strokeWidth: [1.5, 2.5, 1.5] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Labels with leader lines */}
      <g fontFamily="Inter, system-ui, sans-serif" fontSize="11" fontWeight="600">
        {/* Left kidney label */}
        <line x1="100" y1="140" x2="60" y2="100" stroke="oklch(0.5 0.05 252)" strokeWidth="1" strokeDasharray="3 2" />
        <circle cx="100" cy="140" r="2.5" fill="oklch(0.5 0.05 252)" />
        <text x="56" y="90" textAnchor="end" fill="currentColor" className="text-foreground">Left Kidney</text>
        <text x="56" y="104" textAnchor="end" fill="currentColor" className="text-muted-foreground" fontSize="9" fontWeight="400">Produces urine</text>

        {/* Right kidney label */}
        <line x1="500" y1="140" x2="544" y2="100" stroke="oklch(0.5 0.05 252)" strokeWidth="1" strokeDasharray="3 2" />
        <circle cx="500" cy="140" r="2.5" fill="oklch(0.5 0.05 252)" />
        <text x="548" y="90" fill="currentColor" className="text-foreground">Right Kidney</text>
        <text x="548" y="104" fill="currentColor" className="text-muted-foreground" fontSize="9" fontWeight="400">Filters blood</text>

        {/* Ureter label */}
        <line x1="180" y1="280" x2="80" y2="260" stroke="oklch(0.5 0.05 252)" strokeWidth="1" strokeDasharray="3 2" />
        <circle cx="180" cy="280" r="2.5" fill="oklch(0.5 0.05 252)" />
        <text x="76" y="252" textAnchor="end" fill="currentColor" className="text-foreground">Ureter</text>
        <text x="76" y="266" textAnchor="end" fill="currentColor" className="text-muted-foreground" fontSize="9" fontWeight="400">Carries urine to bladder</text>

        {/* Detrusor muscle label (highlighted - key in UAB) */}
        <line x1="395" y1="380" x2="490" y2="340" stroke="oklch(0.7 0.18 18)" strokeWidth="1.2" strokeDasharray="3 2" />
        <circle cx="395" cy="380" r="3" fill="oklch(0.7 0.18 18)" />
        <text x="494" y="332" fill="oklch(0.6 0.2 18)" fontWeight="700">Detrusor Muscle</text>
        <text x="494" y="346" fill="currentColor" className="text-muted-foreground" fontSize="9" fontWeight="400">Affected in UAB — weak</text>
        <text x="494" y="358" fill="currentColor" className="text-muted-foreground" fontSize="9" fontWeight="400">contraction impairs emptying</text>

        {/* Bladder label */}
        <line x1="220" y1="430" x2="100" y2="450" stroke="oklch(0.5 0.05 252)" strokeWidth="1" strokeDasharray="3 2" />
        <circle cx="220" cy="430" r="2.5" fill="oklch(0.5 0.05 252)" />
        <text x="96" y="442" textAnchor="end" fill="currentColor" className="text-foreground">Urinary Bladder</text>
        <text x="96" y="456" textAnchor="end" fill="currentColor" className="text-muted-foreground" fontSize="9" fontWeight="400">Stores urine (300–500 mL)</text>

        {/* Sphincter label */}
        <line x1="314" y1="495" x2="440" y2="495" stroke="oklch(0.5 0.05 252)" strokeWidth="1" strokeDasharray="3 2" />
        <circle cx="314" cy="495" r="2.5" fill="oklch(0.5 0.05 252)" />
        <text x="444" y="492" fill="currentColor" className="text-foreground">External Sphincter</text>
        <text x="444" y="504" fill="currentColor" className="text-muted-foreground" fontSize="9" fontWeight="400">Controls voiding</text>
      </g>

      {/* Title */}
      <text
        x="300"
        y="30"
        textAnchor="middle"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="14"
        fontWeight="700"
        fill="currentColor"
        className="text-foreground"
      >
        Urinary Tract Anatomy
      </text>
      <text
        x="300"
        y="48"
        textAnchor="middle"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="10"
        fill="currentColor"
        className="text-muted-foreground"
      >
        Key structures involved in Underactive Bladder
      </text>
    </svg>
  )
}
