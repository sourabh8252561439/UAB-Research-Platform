'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * Interactive body map showing where UAB symptoms manifest.
 * Users hover/click on body regions to see associated symptoms.
 */
interface SymptomLocation {
  id: string
  region: string
  cx: number
  cy: number
  symptoms: string[]
  color: string
}

const symptomLocations: SymptomLocation[] = [
  {
    id: 'lower-abdomen',
    region: 'Lower Abdomen',
    cx: 150,
    cy: 200,
    symptoms: ['Sense of incomplete emptying', 'Bladder fullness', 'Discomfort or pressure', 'Visible distension in chronic retention'],
    color: 'oklch(0.65 0.2 18)',
  },
  {
    id: 'pelvis',
    region: 'Pelvic Floor',
    cx: 150,
    cy: 260,
    symptoms: ['Straining to void', 'Pelvic pressure', 'Paradoxical sphincter contraction', 'Post-micturition dribble'],
    color: 'oklch(0.7 0.18 60)',
  },
  {
    id: 'back',
    region: 'Lower Back',
    cx: 100,
    cy: 200,
    symptoms: ['Flank pain (with hydronephrosis)', 'Kidney discomfort in advanced cases', 'Indicates upper tract involvement'],
    color: 'oklch(0.7 0.15 200)',
  },
  {
    id: 'spine',
    region: 'Spine (Neurologic)',
    cx: 90,
    cy: 150,
    symptoms: ['Underlying neurologic cause', 'Diabetes, MS, Parkinson', 'Spinal cord injury', 'Pelvic surgery nerve damage'],
    color: 'oklch(0.55 0.15 252)',
  },
  {
    id: 'genital',
    region: 'Genital Area',
    cx: 150,
    cy: 300,
    symptoms: ['Weak urine stream', 'Hesitancy', 'Prolonged voiding time', 'Urinary retention'],
    color: 'oklch(0.6 0.18 18)',
  },
]

export function InteractiveBodyMap({ className }: { className?: string }) {
  const [active, setActive] = React.useState<SymptomLocation>(symptomLocations[0])

  return (
    <div className={className}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="mb-4"
      >
        <h3 className="font-bold text-foreground text-base">Where UAB Symptoms Appear</h3>
        <p className="text-xs text-muted-foreground mt-0.5">
          Click on body regions to see associated symptoms. UAB affects multiple areas — understanding the pattern helps with diagnosis.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-4 items-center">
        {/* Body diagram */}
        <div className="aspect-[3/4] max-w-xs mx-auto w-full">
          <svg viewBox="0 0 300 400" className="w-full h-full" role="img" aria-labelledby="bm-title bm-desc" xmlns="http://www.w3.org/2000/svg">
            <title id="bm-title">Interactive body map of UAB symptoms</title>
            <desc id="bm-desc">Click body regions to see associated Underactive Bladder symptoms.</desc>

            <defs>
              <linearGradient id="bm-body" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.9 0.03 60)" />
                <stop offset="100%" stopColor="oklch(0.8 0.05 60)" />
              </linearGradient>
            </defs>

            {/* Body outline (stylized human) */}
            {/* Head */}
            <circle cx="150" cy="50" r="28" fill="url(#bm-body)" stroke="currentColor" className="text-muted-foreground" strokeWidth="1.5" opacity="0.7" />
            {/* Neck */}
            <rect x="142" y="74" width="16" height="14" fill="url(#bm-body)" stroke="currentColor" className="text-muted-foreground" strokeWidth="1.5" opacity="0.7" />
            {/* Torso */}
            <path
              d="M110 90 Q90 100 90 140 L90 220 Q90 260 110 280 L190 280 Q210 260 210 220 L210 140 Q210 100 190 90 Z"
              fill="url(#bm-body)"
              stroke="currentColor"
              className="text-muted-foreground"
              strokeWidth="1.5"
              opacity="0.7"
            />
            {/* Arms */}
            <path d="M95 100 L70 200" stroke="currentColor" className="text-muted-foreground" strokeWidth="14" strokeLinecap="round" opacity="0.5" />
            <path d="M205 100 L230 200" stroke="currentColor" className="text-muted-foreground" strokeWidth="14" strokeLinecap="round" opacity="0.5" />
            {/* Legs */}
            <path d="M130 280 L120 380" stroke="currentColor" className="text-muted-foreground" strokeWidth="22" strokeLinecap="round" opacity="0.5" />
            <path d="M170 280 L180 380" stroke="currentColor" className="text-muted-foreground" strokeWidth="22" strokeLinecap="round" opacity="0.5" />

            {/* Hotspots */}
            {symptomLocations.map((loc) => {
              const isActive = active.id === loc.id
              return (
                <g key={loc.id}>
                  {/* Pulsing ring on active */}
                  {isActive && (
                    <motion.circle
                      cx={loc.cx} cy={loc.cy} r="14"
                      fill="none" stroke={loc.color} strokeWidth="2"
                      initial={{ r: 12, opacity: 0.8 }}
                      animate={{ r: [12, 20, 12], opacity: [0.8, 0, 0.8] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
                    />
                  )}
                  {/* Button */}
                  <motion.circle
                    cx={loc.cx} cy={loc.cy}
                    r={isActive ? 11 : 9}
                    fill={loc.color}
                    stroke="white"
                    strokeWidth="2.5"
                    whileHover={{ scale: 1.15, cursor: 'pointer' }}
                    onClick={() => setActive(loc)}
                    style={{ cursor: 'pointer' }}
                  />
                  {/* Label */}
                  <text
                    x={loc.cx}
                    y={loc.cy + 4}
                    textAnchor="middle"
                    fontSize="8"
                    fontWeight="700"
                    fill="white"
                    fontFamily="Inter, system-ui"
                    pointerEvents="none"
                  >
                    {symptomLocations.indexOf(loc) + 1}
                  </text>
                </g>
              )
            })}
          </svg>
        </div>

        {/* Symptom info panel */}
        <div className="min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.3 }}
              className="rounded-xl glass-strong shadow-soft p-4"
            >
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ background: active.color }}
                />
                <h4 className="font-bold text-foreground text-sm">{active.region}</h4>
              </div>
              <ul className="space-y-2">
                {active.symptoms.map((symptom, i) => (
                  <motion.li
                    key={symptom}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.08 }}
                    className="flex items-start gap-2 text-xs text-foreground leading-relaxed"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                      style={{ background: active.color }}
                    />
                    <span>{symptom}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>

          {/* Region chips */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {symptomLocations.map((loc, i) => (
              <button
                key={loc.id}
                onClick={() => setActive(loc)}
                className={`text-[10px] font-medium rounded-full px-2 py-1 border transition-all ${
                  active.id === loc.id
                    ? 'text-white border-transparent shadow-soft'
                    : 'bg-background text-muted-foreground border-border hover:border-foreground/30'
                }`}
                style={active.id === loc.id ? { background: loc.color } : {}}
                aria-pressed={active.id === loc.id}
              >
                {i + 1}. {loc.region}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
