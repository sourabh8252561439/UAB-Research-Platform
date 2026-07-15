'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Activity, ChevronDown, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'

const navStructure = [
  {
    label: 'About UAB',
    href: '#about-uab',
    children: [
      { label: 'Overview & Definition', href: '#about-uab', desc: 'Understand the condition, causes, and impact' },
      { label: 'Symptoms', href: '#symptoms', desc: 'Recognize the warning signs' },
      { label: 'Causes', href: '#causes', desc: 'Neurogenic, myogenic, and idiopathic' },
      { label: 'Differential Diagnosis', href: '#diagnosis', desc: 'Distinguishing UAB from OAB and obstruction' },
    ],
  },
  {
    label: 'Diagnosis',
    href: '#diagnosis',
    children: [
      { label: 'Uroflowmetry', href: '#diagnosis', desc: 'Non-invasive flow measurement' },
      { label: 'Post Void Residual (PVR)', href: '#diagnosis', desc: 'Bladder scan for retained urine' },
      { label: 'Urodynamic Study', href: '#diagnosis', desc: 'Gold standard pressure-flow analysis' },
      { label: 'Bladder Contractility Index', href: '#diagnosis', desc: 'BCI <100 supports UAB diagnosis' },
      { label: 'Cystoscopy', href: '#diagnosis', desc: 'Direct visualization of bladder' },
    ],
  },
  {
    label: 'Treatments',
    href: '#treatments',
    children: [
      { label: 'Lifestyle & Behavioral', href: '#treatments', desc: 'Timed voiding, fluid management' },
      { label: 'Pelvic Floor Therapy', href: '#treatments', desc: 'PFMT and biofeedback' },
      { label: 'Medications', href: '#treatments', desc: 'Alpha-blockers, bethanechol' },
      { label: 'Catheterization', href: '#treatments', desc: 'CIC and indwelling catheters' },
      { label: 'Neuromodulation', href: '#treatments', desc: 'Sacral and PTNS' },
      { label: 'Regenerative Therapy', href: '#treatments', desc: 'Stem cell, shockwave, gene therapy' },
    ],
  },
  {
    label: 'Research',
    href: '#research',
    children: [
      { label: 'Latest Research', href: '#research', desc: 'Peer-reviewed publications' },
      { label: 'Clinical Trials', href: '#clinical-trials', desc: 'Active trials and enrollment' },
      { label: 'Drug Pipeline', href: '#drug-pipeline', desc: 'TAC-302, ZG-802, and emerging agents' },
      { label: 'Medical Library', href: '#medical-library', desc: 'Guidelines, illustrations, videos' },
    ],
  },
  {
    label: 'Resources',
    href: '#resources',
    children: [
      { label: 'Patient Stories', href: '#community', desc: 'Real experiences from the community' },
      { label: 'FAQ', href: '#faq', desc: 'Frequently asked questions' },
      { label: 'Community', href: '#community', desc: 'Support and discussion' },
      { label: 'Contact', href: '#footer', desc: 'Get in touch with our team' },
    ],
  },
]

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled ? 'glass-nav shadow-soft' : 'bg-transparent',
      )}
      role="banner"
    >
      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex h-16 lg:h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="#hero"
            className="flex items-center gap-2.5 group"
            aria-label="UAB Research Platform home"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--navy)] via-[var(--medical)] to-[var(--teal)] flex items-center justify-center shadow-glow group-hover:scale-105 transition-transform">
              <Activity className="w-5 h-5 text-white" strokeWidth={2.5} aria-hidden="true" />
              <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-base lg:text-lg text-[var(--navy)] dark:text-white tracking-tight">
                UAB Research
              </span>
              <span className="text-[10px] lg:text-[11px] text-muted-foreground font-medium tracking-wide uppercase">
                Evidence-Based Medicine
              </span>
            </div>
          </Link>

          {/* Desktop nav — gated on `mounted` to avoid Radix useId
              hydration mismatches. During SSR + first client render we
              show plain anchor links (no useId); after mount we swap to
              the full Radix NavigationMenu with dropdowns. */}
          <div className="hidden lg:flex items-center gap-1">
            {mounted ? (
              <NavigationMenu>
                <NavigationMenuList>
                  {navStructure.map((item) => (
                    <NavigationMenuItem key={item.label}>
                      <NavigationMenuTrigger className="text-sm font-medium bg-transparent hover:bg-accent/60 data-[state=open]:bg-accent/60 h-9">
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[420px] gap-1 p-3">
                          {item.children.map((child) => (
                            <li key={child.label}>
                              <NavigationMenuLink asChild>
                                <a
                                  href={child.href}
                                  className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="text-sm font-semibold leading-tight text-foreground">
                                    {child.label}
                                  </div>
                                  <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                                    {child.desc}
                                  </p>
                                </a>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ))}
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="#ai-assistant"
                      className={cn(navigationMenuTriggerStyle(), 'h-9')}
                    >
                      AI Assistant
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            ) : (
              <nav className="flex items-center gap-1" aria-label="Main">
                {navStructure.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-sm font-medium bg-transparent hover:bg-accent/60 h-9 px-3 py-2 rounded-md inline-flex items-center"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#ai-assistant"
                  className="text-sm font-medium bg-transparent hover:bg-accent/60 h-9 px-3 py-2 rounded-md inline-flex items-center"
                >
                  AI Assistant
                </a>
              </nav>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
              className="rounded-full"
            >
              {mounted && theme === 'dark' ? (
                <Sun className="w-4 h-4" aria-hidden="true" />
              ) : (
                <Moon className="w-4 h-4" aria-hidden="true" />
              )}
            </Button>
            <Button
              asChild
              className="hidden sm:inline-flex bg-gradient-to-r from-[var(--navy)] to-[var(--medical)] hover:opacity-90 text-white shadow-glow"
            >
              <a href="#newsletter">Subscribe</a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden rounded-full"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden glass-strong border-t border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
              {navStructure.map((item) => (
                <div key={item.label} className="border-b border-border/60 pb-2 mb-2 last:border-0">
                  <a
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 font-semibold text-foreground"
                  >
                    {item.label}
                  </a>
                  <div className="pl-3 grid grid-cols-1 gap-1">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
              <a
                href="#ai-assistant"
                onClick={() => setMobileOpen(false)}
                className="block py-2 font-semibold text-[var(--medical)]"
              >
                AI Assistant
              </a>
              <a
                href="#newsletter"
                onClick={() => setMobileOpen(false)}
                className="block mt-3 text-center py-2.5 rounded-xl bg-gradient-to-r from-[var(--navy)] to-[var(--medical)] text-white font-semibold"
              >
                Subscribe to Newsletter
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
