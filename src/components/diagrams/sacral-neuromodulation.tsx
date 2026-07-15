'use client'

import * as React from 'react'
import { motion } from 'framer-motion'

/**
 * SVG showing sacral neuromodulation: implanted pulse generator,
 * lead wire, S3 sacral nerve root, and signal pathway to bladder.
 */
export function SacralNeuromodulationDiagram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 440"
      className={className}
      role="img"
      aria-labelledby="snm-title snm-desc"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="snm-title">Sacral neuromodulation</title>
      <desc id="snm-desc">
        Diagram of an implanted sacral neuromodulation system. A pulse generator implanted
        in the upper buttock sends electrical signals through a lead to the S3 sacral nerve
        root, modulating the reflex pathways between the sacral spinal cord and the bladder.
      </desc>

      <defs>
        <linearGradient id="snm-spine" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.85 0.04 60)" />
          <stop offset="100%" stopColor="oklch(0.7 0.06 60)" />
        </linearGradient>
        <linearGradient id="snm-device" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.4 0.1 252)" />
          <stop offset="100%" stopColor="oklch(0.25 0.08 252)" />
        </linearGradient>
        <linearGradient id="snm-bladder" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.82 0.12 230)" stopOpacity="0.75" />
          <stop offset="100%" stopColor="oklch(0.6 0.15 252)" stopOpacity="0.75" />
        </linearGradient>
        <radialGradient id="snm-impulse" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="oklch(0.7 0.2 60)" stopOpacity="0.8" />
          <stop offset="100%" stopColor="oklch(0.7 0.2 60)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Title */}
      <text x="300" y="28" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontSize="14" fontWeight="700" fill="currentColor" className="text-foreground">
        Sacral Neuromodulation (InterStim / Axonics)
      </text>
      <text x="300" y="46" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontSize="10" fill="currentColor" className="text-muted-foreground">
        Implanted device modulates S3 sacral nerve root to restore bladder coordination
      </text>

      {/* === Spine / sacrum === */}
      <g transform="translate(220, 70)">
        {/* Spinal column */}
        <path
          d="M 30 0 L 30 80 Q 30 100 45 110 L 60 130 Q 70 145 70 170 L 70 280"
          stroke="url(#snm-spine)"
          strokeWidth="22" fill="none" strokeLinecap="round"
        />
        {/* Vertebrae */}
        {[10, 30, 50, 70].map((y) => (
          <ellipse key={y} cx="30" cy={y} rx="14" ry="5" fill="oklch(0.75 0.05 60)" stroke="oklch(0.5 0.05 60)" strokeWidth="0.8" />
        ))}
        {/* Sacrum */}
        <path
          d="M 45 130 Q 55 150 65 180 L 75 220 Q 80 250 75 280 Q 70 290 60 285 Q 55 270 55 240 Q 55 200 50 170 Q 45 145 45 130 Z"
          fill="url(#snm-spine)"
          stroke="oklch(0.5 0.05 60)"
          strokeWidth="1"
        />
        {/* Sacral foramina (where nerve roots exit) */}
        <ellipse cx="62" cy="180" rx="3" ry="4" fill="oklch(0.3 0.05 60)" />
        <ellipse cx="65" cy="210" rx="3" ry="4" fill="oklch(0.3 0.05 60)" />
        <ellipse cx="68" cy="240" rx="3" ry="4" fill="oklch(0.3 0.05 60)" />

        {/* S3 nerve root (target) - highlighted */}
        <motion.g
          initial={{ opacity: 0.6 }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path
            d="M 65 210 Q 90 215 110 220"
            stroke="oklch(0.7 0.2 18)"
            strokeWidth="3" fill="none" strokeLinecap="round"
          />
          <circle cx="65" cy="210" r="5" fill="oklch(0.7 0.2 18)" />
          {/* Impulse halo */}
          <motion.circle
            cx="65" cy="210" r="6"
            fill="url(#snm-impulse)"
            initial={{ r: 6, opacity: 0.8 }}
            animate={{ r: [6, 14, 6], opacity: [0.8, 0, 0.8] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
          />
        </motion.g>

        {/* Other nerve roots (faded) */}
        <path d="M 62 180 Q 90 175 105 175" stroke="oklch(0.5 0.1 252)" strokeWidth="1.5" fill="none" opacity="0.5" />
        <path d="M 68 240 Q 95 245 115 250" stroke="oklch(0.5 0.1 252)" strokeWidth="1.5" fill="none" opacity="0.5" />
      </g>

      {/* === Implantable pulse generator (IPG) === */}
      <g transform="translate(160, 290)">
        {/* Pocket in buttock */}
        <ellipse cx="50" cy="30" rx="55" ry="22" fill="oklch(0.95 0.01 240)" stroke="oklch(0.85 0.01 240)" strokeWidth="1" opacity="0.6" />
        {/* Device body */}
        <motion.g
          initial={{ y: 0 }}
          animate={{ y: [0, -1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <rect x="20" y="18" width="60" height="28" rx="8" fill="url(#snm-device)" stroke="oklch(0.2 0.05 252)" strokeWidth="1" />
          {/* Device logo circle */}
          <circle cx="50" cy="32" r="6" fill="oklch(0.6 0.18 230)" stroke="oklch(0.4 0.1 252)" strokeWidth="0.5" />
          {/* Pulsing center */}
          <motion.circle
            cx="50" cy="32" r="2.5"
            fill="white"
            initial={{ opacity: 0.3, scale: 0.8 }}
            animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.g>
        <text x="50" y="62" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontSize="9" fontWeight="700" fill="currentColor" className="text-foreground">
          Pulse Generator
        </text>
        <text x="50" y="74" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontSize="8" fill="currentColor" className="text-muted-foreground">
          Implanted in upper buttock
        </text>

        {/* Lead wire from IPG to S3 */}
        <motion.path
          d="M 80 32 Q 130 30 175 0 Q 220 -25 285 -10"
          stroke="oklch(0.6 0.18 18)"
          strokeWidth="2.5" fill="none" strokeLinecap="round"
          strokeDasharray="6 3"
        />
        {/* Electrical signal traveling along lead */}
        <motion.circle
          r="3" fill="oklch(0.7 0.2 60)"
          initial={{ cx: 80, cy: 32, opacity: 0 }}
          animate={{
            cx: [80, 130, 175, 220, 285],
            cy: [32, 30, 0, -25, -10],
            opacity: [0, 1, 1, 1, 0]
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </g>

      {/* === Bladder (right side) === */}
      <g transform="translate(440, 220)">
        <ellipse cx="0" cy="0" rx="50" ry="38" fill="url(#snm-bladder)" stroke="oklch(0.35 0.12 252)" strokeWidth="1.5" />
        {/* Detrusor hatching */}
        <g opacity="0.3">
          <line x1="-40" y1="-10" x2="40" y2="-10" stroke="oklch(0.4 0.1 252)" strokeWidth="0.5" />
          <line x1="-42" y1="5" x2="42" y2="5" stroke="oklch(0.4 0.1 252)" strokeWidth="0.5" />
          <line x1="-40" y1="20" x2="40" y2="20" stroke="oklch(0.4 0.1 252)" strokeWidth="0.5" />
        </g>
        {/* Urethra */}
        <path d="M 0 38 L 0 60" stroke="oklch(0.5 0.15 252)" strokeWidth="6" fill="none" strokeLinecap="round" />
        <text x="0" y="-50" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontSize="9" fontWeight="700" fill="currentColor" className="text-foreground">Bladder</text>

        {/* Efferent signal from S3 to bladder */}
        <motion.path
          d="M 110 -10 Q 80 -5 50 -5"
          stroke="oklch(0.7 0.2 18)"
          strokeWidth="2" fill="none" strokeLinecap="round"
          strokeDasharray="4 2"
          opacity="0.7"
        />
        {/* Signal pulses traveling to bladder */}
        <motion.circle
          r="2.5" fill="oklch(0.7 0.2 60)"
          initial={{ cx: 110, cy: -10, opacity: 0 }}
          animate={{
            cx: [110, 80, 50],
            cy: [-10, -5, -5],
            opacity: [0, 1, 0]
          }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'easeIn', delay: 0.3 }}
        />
      </g>

      {/* === Annotations === */}
      <g fontFamily="Inter, system-ui, sans-serif" fontSize="9" fontWeight="600">
        {/* S3 label */}
        <line x1="285" y1="280" x2="340" y2="305" stroke="oklch(0.7 0.2 18)" strokeWidth="0.8" strokeDasharray="2 1.5" />
        <text x="344" y="302" fill="oklch(0.6 0.2 18)" fontWeight="700">S3 Sacral Nerve Root</text>
        <text x="344" y="314" fill="currentColor" className="text-muted-foreground" fontSize="8" fontWeight="400">Target of stimulation</text>

        {/* Lead label */}
        <line x1="280" y1="290" x2="280" y2="340" stroke="oklch(0.6 0.18 18)" strokeWidth="0.8" strokeDasharray="2 1.5" />
        <text x="280" y="354" textAnchor="middle" fill="oklch(0.6 0.18 18)" fontWeight="700">Lead Wire</text>
        <text x="280" y="366" textAnchor="middle" fill="currentColor" className="text-muted-foreground" fontSize="8" fontWeight="400">tunneled under skin</text>

        {/* Signal label */}
        <text x="500" y="200" textAnchor="middle" fill="oklch(0.6 0.18 18)" fontWeight="700">Modulated Reflex</text>
        <text x="500" y="212" textAnchor="middle" fill="currentColor" className="text-muted-foreground" fontSize="8" fontWeight="400">restores coordination</text>

        {/* Spine label */}
        <text x="245" y="78" textAnchor="middle" fill="currentColor" className="text-foreground" fontSize="9">Spinal Cord</text>
        <text x="265" y="220" textAnchor="middle" fill="currentColor" className="text-foreground" fontSize="9">Sacrum</text>
      </g>

      {/* === Effect callouts === */}
      <g transform="translate(30, 380)" fontFamily="Inter, system-ui, sans-serif" fontSize="9">
        <rect x="0" y="0" width="540" height="44" rx="6" fill="oklch(0.95 0.01 240)" stroke="oklch(0.9 0.01 240)" />
        <text x="14" y="16" fontWeight="700" fill="currentColor" className="text-foreground">How it helps:</text>
        <text x="14" y="32" fill="currentColor" className="text-muted-foreground">
          Electrical stimulation of S3 modulates spinal reflexes, improving detrusor-sphincter coordination and bladder emptying in selected UAB patients.
        </text>
      </g>
    </svg>
  )
}
