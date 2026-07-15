'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * Animated explainer: How Clean Intermittent Catheterization (CIC) works.
 * Shows the 4-step process: prepare, insert, drain, remove.
 * Includes a step indicator and animated catheter.
 */
const cicSteps = [
  {
    num: 1,
    title: 'Prepare',
    desc: 'Wash hands. Gather sterile catheter, lubricant, and container.',
  },
  {
    num: 2,
    title: 'Insert',
    desc: 'Gently insert the lubricated catheter through the urethra into the bladder.',
  },
  {
    num: 3,
    title: 'Drain',
    desc: 'Allow urine to flow out completely through the catheter into a container.',
  },
  {
    num: 4,
    title: 'Remove',
    desc: 'Once urine stops flowing, slowly remove the catheter. Repeat 4–6 times daily.',
  },
]

export function CICProcedureAnimation({ className }: { className?: string }) {
  const [activeStep, setActiveStep] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((s) => (s + 1) % cicSteps.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={className}>
      <div className="grid lg:grid-cols-2 gap-6 items-center">
        {/* Left: animated SVG */}
        <div className="aspect-square max-w-md mx-auto w-full">
          <svg viewBox="0 0 320 320" className="w-full h-full" role="img" aria-labelledby="cic-title cic-desc" xmlns="http://www.w3.org/2000/svg">
            <title id="cic-title">Clean intermittent catheterization procedure</title>
            <desc id="cic-desc">Animated 4-step demonstration of clean intermittent catheterization for emptying the bladder.</desc>

            <defs>
              <linearGradient id="cic-bladder" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.82 0.12 230)" stopOpacity="0.5" />
                <stop offset="100%" stopColor="oklch(0.6 0.15 252)" stopOpacity="0.5" />
              </linearGradient>
              <linearGradient id="cic-urine" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.78 0.15 230)" stopOpacity="0.7" />
                <stop offset="100%" stopColor="oklch(0.6 0.18 230)" stopOpacity="0.9" />
              </linearGradient>
              <clipPath id="cic-bladder-clip">
                <ellipse cx="160" cy="120" rx="65" ry="55" />
              </clipPath>
            </defs>

            {/* Title */}
            <text x="160" y="22" textAnchor="middle" fontSize="14" fontWeight="700" fill="currentColor" className="text-foreground" fontFamily="Inter, system-ui">
              Clean Intermittent Catheterization
            </text>

            {/* Bladder */}
            <ellipse cx="160" cy="120" rx="65" ry="55" fill="url(#cic-bladder)" stroke="oklch(0.4 0.12 252)" strokeWidth="2" />
            {/* Urine inside (visible during steps 1-3) */}
            <motion.rect
              x="95" y="120" width="130" height="55" fill="url(#cic-urine)" clipPath="url(#cic-bladder-clip)"
              initial={{ opacity: 1, height: 55 }}
              animate={{
                opacity: activeStep === 3 ? 0 : 1,
                height: activeStep === 3 ? 0 : 55,
              }}
              transition={{ duration: 1 }}
            />

            {/* Urethra */}
            <path d="M160 175 L160 260" stroke="oklch(0.5 0.15 252)" strokeWidth="10" fill="none" strokeLinecap="round" opacity="0.4" />

            {/* Catheter - position depends on step */}
            {activeStep >= 1 && activeStep <= 3 && (
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.line
                  x1="160" y1="260"
                  x2="160"
                  y2={activeStep === 1 ? 175 : 120}
                  stroke="oklch(0.6 0.18 18)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ y2: 260 }}
                  animate={{ y2: activeStep === 1 ? [260, 175] : 120 }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                />
                {/* Catheter handle */}
                <circle cx="160" cy="265" r="5" fill="oklch(0.5 0.18 18)" />
              </motion.g>
            )}

            {/* Urine draining (step 3) */}
            {activeStep === 3 && (
              <motion.g>
                {[0, 0.2, 0.4, 0.6].map((delay) => (
                  <motion.circle
                    key={delay}
                    cx="160" r="3" fill="oklch(0.7 0.15 230)"
                    initial={{ cy: 175, opacity: 0 }}
                    animate={{ cy: [175, 290], opacity: [0, 1, 0] }}
                    transition={{ duration: 1, repeat: Infinity, delay, ease: 'easeIn' }}
                  />
                ))}
                {/* Collection bag */}
                <motion.ellipse
                  cx="160" cy="295" rx="20" ry="8"
                  fill="oklch(0.7 0.15 230)" fillOpacity="0.4"
                  stroke="oklch(0.5 0.15 230)" strokeWidth="1"
                  initial={{ ry: 6 }}
                  animate={{ ry: [6, 10, 6] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.g>
            )}

            {/* Step indicator */}
            <text x="160" y="315" textAnchor="middle" fontSize="11" fontWeight="700" fill="oklch(0.55 0.15 252)" fontFamily="Inter, system-ui">
              Step {activeStep + 1} of 4: {cicSteps[activeStep].title}
            </text>
          </svg>
        </div>

        {/* Right: step descriptions */}
        <div>
          <div className="space-y-2.5">
            {cicSteps.map((step, i) => (
              <motion.button
                key={step.num}
                onClick={() => setActiveStep(i)}
                className={`w-full text-left rounded-xl p-3.5 border-2 transition-all ${
                  activeStep === i
                    ? 'glass-strong border-[var(--medical)] shadow-glow'
                    : 'glass border-transparent opacity-60 hover:opacity-100'
                }`}
                aria-pressed={activeStep === i}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold text-sm transition-colors ${
                      activeStep === i
                        ? 'bg-gradient-to-br from-[var(--navy)] to-[var(--medical)] text-white shadow-glow'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {step.num}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-foreground text-sm leading-tight">{step.title}</h4>
                    <AnimatePresence mode="wait">
                      {activeStep === i && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-xs text-muted-foreground mt-1.5 leading-relaxed overflow-hidden"
                        >
                          {step.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          <div className="mt-4 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/50 p-3">
            <p className="text-xs text-emerald-900 dark:text-emerald-200 leading-relaxed">
              <strong>Gold standard for chronic retention.</strong> CIC is preferred over indwelling catheters because it reduces UTI risk, preserves bladder capacity, and improves quality of life. Most patients learn the technique in a single training session.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
