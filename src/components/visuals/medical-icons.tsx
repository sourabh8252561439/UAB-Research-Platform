'use client'

import * as React from 'react'
import { motion } from 'framer-motion'

/**
 * Premium animated medical icon set.
 * Each icon is a self-contained SVG with subtle animations.
 * Used throughout the site to replace plain bullet lists.
 */

type IconProps = { className?: string }

const baseProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  viewBox: '0 0 48 48',
}

// Bladder with pulsing contraction
export function BladderIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bladder">
      <motion.g
        animate={{ scaleY: [1, 0.92, 1] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: '24px 22px' }}
      >
        <path
          d="M16 12 Q16 6 24 6 Q32 6 32 12 L32 24 Q32 34 24 34 Q16 34 16 24 Z"
          fill="oklch(0.82 0.12 230)" fillOpacity="0.4"
          stroke="currentColor" strokeWidth="1.8"
        />
      </motion.g>
      <path d="M24 34 L24 42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <motion.circle
        cx="24" cy="42" r="2"
        fill="oklch(0.7 0.18 60)"
        initial={{ scale: 0.5, opacity: 0.4 }}
        animate={{ scale: [0.5, 1.2, 0.5], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />
    </svg>
  )
}

// Kidney with filter animation
export function KidneyIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Kidney">
      <path
        d="M14 10 Q8 10 8 18 Q8 28 14 34 Q20 38 24 34 Q26 30 24 24 Q22 16 20 12 Q18 10 14 10 Z"
        fill="oklch(0.75 0.1 25)" fillOpacity="0.4" stroke="currentColor" strokeWidth="1.8"
      />
      <motion.circle
        cx="16" cy="20" r="3"
        fill="oklch(0.7 0.18 60)"
        initial={{ scale: 0.5, opacity: 0.3 }}
        animate={{ scale: [0.5, 1.2, 0.5], opacity: [0.3, 0.9, 0.3] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <path d="M22 28 Q26 30 32 28" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
    </svg>
  )
}

// Urine droplet with drip
export function DropletIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Urine drop">
      <path
        d="M24 6 Q14 22 14 30 Q14 38 24 38 Q34 38 34 30 Q34 22 24 6 Z"
        fill="oklch(0.7 0.15 230)" fillOpacity="0.5" stroke="currentColor" strokeWidth="1.8"
      />
      <motion.circle
        cx="24" cy="44" r="2"
        fill="oklch(0.6 0.15 230)"
        initial={{ cy: 38, opacity: 1 }}
        animate={{ cy: [38, 46], opacity: [1, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeIn' }}
      />
    </svg>
  )
}

// Nerve with signal pulse
export function NerveIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Nerve">
      <path
        d="M6 24 Q12 16 18 24 Q24 32 30 24 Q36 16 42 24"
        stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"
      />
      <motion.circle
        cx="6" cy="24" r="3" fill="oklch(0.7 0.18 18)"
        initial={{ cx: 6, cy: 24, opacity: 0 }}
        animate={{ cx: [6, 18, 30, 42], cy: [24, 24, 24, 24], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />
      <circle cx="6" cy="24" r="2" fill="currentColor" />
      <circle cx="42" cy="24" r="2" fill="currentColor" />
    </svg>
  )
}

// Catheter
export function CatheterIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Catheter">
      <ellipse cx="24" cy="18" rx="10" ry="8" fill="oklch(0.82 0.12 230)" fillOpacity="0.4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M24 26 L24 40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <motion.circle
        cx="24" cy="14" r="1.5" fill="oklch(0.6 0.18 18)"
        initial={{ cy: 12, opacity: 0 }}
        animate={{ cy: [12, 26, 38], opacity: [0, 1, 0] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: 'easeIn' }}
      />
    </svg>
  )
}

// Pill / medication
export function PillIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Medication">
      <motion.g
        initial={{ rotate: 0 }}
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: '24px 24px' }}
      >
        <rect x="8" y="18" width="32" height="12" rx="6" fill="oklch(0.7 0.18 60)" fillOpacity="0.4" stroke="currentColor" strokeWidth="1.8" />
        <line x1="24" y1="18" x2="24" y2="30" stroke="currentColor" strokeWidth="1.8" />
        <rect x="8" y="18" width="16" height="12" rx="6" fill="oklch(0.7 0.18 18)" fillOpacity="0.5" />
      </motion.g>
    </svg>
  )
}

// DNA / regenerative
export function DnaIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Regenerative medicine">
      <motion.g
        initial={{ rotate: 0 }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: '24px 24px' }}
      >
        <path d="M14 6 Q34 18 14 30 Q34 42 14 42" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <path d="M34 6 Q14 18 34 30 Q14 42 34 42" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <line x1="16" y1="12" x2="32" y2="12" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
        <line x1="18" y1="18" x2="30" y2="18" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
        <line x1="16" y1="24" x2="32" y2="24" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
        <line x1="18" y1="30" x2="30" y2="30" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
        <line x1="16" y1="36" x2="32" y2="36" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
      </motion.g>
    </svg>
  )
}

// Brain / neuro
export function BrainIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Neurology">
      <motion.g
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: '24px 24px' }}
      >
        <path
          d="M16 12 Q10 12 10 18 Q10 22 14 24 Q10 26 10 30 Q10 36 16 36 Q18 40 24 40 Q30 40 32 36 Q38 36 38 30 Q38 26 34 24 Q38 22 38 18 Q38 12 32 12 Q28 8 24 8 Q20 8 16 12 Z"
          fill="oklch(0.75 0.12 252)" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.8"
        />
        <path d="M24 8 L24 40" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
        <path d="M16 18 Q20 20 16 24" stroke="currentColor" strokeWidth="1.2" opacity="0.5" fill="none" />
        <path d="M32 18 Q28 20 32 24" stroke="currentColor" strokeWidth="1.2" opacity="0.5" fill="none" />
      </motion.g>
    </svg>
  )
}

// Heart with pulse
export function PulseIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Vital signs">
      <motion.path
        d="M4 24 L14 24 L18 14 L24 34 L28 20 L32 24 L44 24"
        stroke="oklch(0.65 0.2 18)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />
    </svg>
  )
}

// Microscope
export function MicroscopeIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Research">
      <motion.g
        initial={{ rotate: 0 }}
        animate={{ rotate: [0, -3, 3, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: '24px 30px' }}
      >
        <rect x="20" y="6" width="8" height="14" rx="2" fill="oklch(0.55 0.15 252)" fillOpacity="0.4" stroke="currentColor" strokeWidth="1.5" transform="rotate(20 24 13)" />
        <circle cx="30" cy="10" r="3" fill="oklch(0.7 0.18 60)" stroke="currentColor" strokeWidth="1.5" />
      </motion.g>
      <path d="M14 38 L34 38 L34 42 L14 42 Z" fill="oklch(0.4 0.08 252)" fillOpacity="0.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M18 38 L18 30 Q22 26 26 26 Q30 26 34 30 L34 38" stroke="currentColor" strokeWidth="1.8" fill="none" />
    </svg>
  )
}

// Stethoscope
export function StethoscopeIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Clinical exam">
      <path d="M12 6 L12 18 Q12 26 20 26" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M28 6 L28 18 Q28 26 20 26 Q20 32 26 32" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="12" cy="6" r="2" fill="currentColor" />
      <circle cx="28" cy="6" r="2" fill="currentColor" />
      <motion.circle
        cx="30" cy="36" r="6"
        fill="oklch(0.7 0.18 18)" fillOpacity="0.3" stroke="currentColor" strokeWidth="2"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      />
    </svg>
  )
}

// Document / clinical guidelines
export function DocumentIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Guidelines">
      <path
        d="M10 6 L30 6 L38 14 L38 42 L10 42 Z"
        fill="oklch(0.95 0.02 240)" stroke="currentColor" strokeWidth="1.8"
      />
      <path d="M30 6 L30 14 L38 14" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <motion.line
        x1="16" y1="22" x2="32" y2="22"
        stroke="oklch(0.55 0.15 252)" strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
      />
      <motion.line
        x1="16" y1="28" x2="28" y2="28"
        stroke="oklch(0.55 0.15 252)" strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1, delay: 0.3 }}
      />
      <motion.line
        x1="16" y1="34" x2="30" y2="34"
        stroke="oklch(0.55 0.15 252)" strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1, delay: 0.6 }}
      />
    </svg>
  )
}

// Hospital
export function HospitalIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Hospital">
      <rect x="8" y="14" width="32" height="28" rx="2" fill="oklch(0.85 0.05 200)" fillOpacity="0.4" stroke="currentColor" strokeWidth="1.8" />
      <motion.rect
        x="22" y="20" width="4" height="10" fill="oklch(0.65 0.2 18)"
        initial={{ opacity: 0.6 }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.rect
        x="19" y="23" width="10" height="4" fill="oklch(0.65 0.2 18)"
        initial={{ opacity: 0.6 }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <rect x="14" y="34" width="6" height="8" fill="currentColor" fillOpacity="0.3" />
      <rect x="28" y="34" width="6" height="8" fill="currentColor" fillOpacity="0.3" />
    </svg>
  )
}

// Clock / time
export function ClockIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Time">
      <circle cx="24" cy="24" r="16" fill="oklch(0.95 0.02 240)" stroke="currentColor" strokeWidth="1.8" />
      <motion.line
        x1="24" y1="24" x2="24" y2="14"
        stroke="oklch(0.55 0.15 252)" strokeWidth="2.5" strokeLinecap="round"
        style={{ transformOrigin: '24px 24px' }}
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
      />
      <line x1="24" y1="24" x2="30" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="24" cy="24" r="2" fill="currentColor" />
    </svg>
  )
}

// Shield / safety
export function ShieldIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Safety">
      <motion.path
        d="M24 6 L38 12 L38 24 Q38 36 24 42 Q10 36 10 24 L10 12 Z"
        fill="oklch(0.7 0.18 165)" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.8"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: '24px 24px' }}
      />
      <path d="M18 24 L22 28 L30 18" stroke="oklch(0.55 0.15 165)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// Target / diagnosis
export function TargetIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagnosis">
      <circle cx="24" cy="24" r="16" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <motion.circle
        cx="24" cy="24" r="10"
        fill="none" stroke="oklch(0.65 0.2 18)" strokeWidth="1.5"
        initial={{ scale: 1, opacity: 0.7 }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.7, 0.3, 0.7] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: '24px 24px' }}
      />
      <circle cx="24" cy="24" r="4" fill="oklch(0.65 0.2 18)" />
      <circle cx="24" cy="24" r="1.5" fill="white" />
    </svg>
  )
}

// Lightning / neuromodulation
export function ZapIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Neuromodulation">
      <motion.path
        d="M26 6 L14 26 L22 26 L20 42 L34 20 L26 20 L28 6 Z"
        fill="oklch(0.7 0.2 60)" fillOpacity="0.6" stroke="currentColor" strokeWidth="1.5"
        initial={{ opacity: 0.6, scale: 1 }}
        animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.05, 1] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: '24px 24px' }}
      />
    </svg>
  )
}

// Activity / contraction wave
export function WaveIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bladder contraction">
      <motion.path
        d="M4 24 L12 24 Q14 18 16 24 Q18 30 20 24 Q22 14 24 24 Q26 34 28 24 Q30 18 32 24 Q34 30 36 24 L44 24"
        stroke="oklch(0.55 0.15 252)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      />
    </svg>
  )
}

export const medicalIcons = {
  BladderIcon, KidneyIcon, DropletIcon, NerveIcon, CatheterIcon, PillIcon,
  DnaIcon, BrainIcon, PulseIcon, MicroscopeIcon, StethoscopeIcon, DocumentIcon,
  HospitalIcon, ClockIcon, ShieldIcon, TargetIcon, ZapIcon, WaveIcon,
}

export type MedicalIconName = keyof typeof medicalIcons
