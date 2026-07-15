'use client'

import * as React from 'react'
import Link from 'next/link'
import {
  Activity, ShieldCheck, FileText, Lock, Cookie, Scale,
  Mail, MapPin, Phone, Twitter, Linkedin, Youtube, Github, Rss,
} from 'lucide-react'
import { editorialBoard } from '@/lib/medical-data'

const footerSections = [
  {
    title: 'About UAB',
    links: [
      { label: 'What is UAB?', href: '#about-uab' },
      { label: 'Symptoms', href: '#symptoms' },
      { label: 'Causes', href: '#causes' },
      { label: 'Diagnosis', href: '#diagnosis' },
      { label: 'Differential Diagnosis', href: '#diagnosis' },
      { label: 'Living with UAB', href: '#community' },
    ],
  },
  {
    title: 'Treatments',
    links: [
      { label: 'Lifestyle & Behavioral', href: '#treatments' },
      { label: 'Pelvic Floor Therapy', href: '#treatments' },
      { label: 'Medications', href: '#treatments' },
      { label: 'Clean Intermittent Catheterization', href: '#treatments' },
      { label: 'Sacral Neuromodulation', href: '#treatments' },
      { label: 'PTNS', href: '#treatments' },
      { label: 'Stem Cell Therapy', href: '#treatments' },
      { label: 'Shockwave Therapy', href: '#treatments' },
    ],
  },
  {
    title: 'Research',
    links: [
      { label: 'Latest Research', href: '#research' },
      { label: 'Clinical Trials', href: '#research' },
      { label: 'Drug Pipeline', href: '#drug-pipeline' },
      { label: 'TAC-302', href: '#drug-pipeline' },
      { label: 'ZG-802', href: '#drug-pipeline' },
      { label: 'Acotiamide', href: '#drug-pipeline' },
      { label: 'Medical Library', href: '#medical-library' },
      { label: 'Medical News', href: '#featured-articles' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Patient Stories', href: '#community' },
      { label: 'Discussion Forum', href: '#community' },
      { label: 'Interactive Tools', href: '#community' },
      { label: 'Glossary', href: '#medical-library' },
      { label: 'FAQ', href: '#faq' },
      { label: 'AI Assistant', href: '#ai-assistant' },
      { label: 'Doctor Directory', href: '#community' },
      { label: 'Hospital Finder', href: '#community' },
    ],
  },
  {
    title: 'Legal & Policy',
    links: [
      { label: 'Privacy Policy', href: '#footer' },
      { label: 'Terms of Service', href: '#footer' },
      { label: 'Cookie Policy', href: '#footer' },
      { label: 'Editorial Policy', href: '#editorial' },
      { label: 'Medical Disclaimer', href: '#footer' },
      { label: 'Conflict of Interest', href: '#footer' },
      { label: 'Accessibility Statement', href: '#footer' },
      { label: 'Contact Us', href: '#footer' },
    ],
  },
]

const socialLinks = [
  { icon: Twitter, label: 'Twitter / X', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
  { icon: Github, label: 'GitHub', href: '#' },
  { icon: Rss, label: 'RSS Feed', href: '#' },
]

export function Footer() {
  return (
    <footer
      id="footer"
      className="relative bg-[var(--navy)] text-white scroll-mt-20"
      role="contentinfo"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      {/* Top decorative gradient line */}
      <div className="h-1 bg-gradient-to-r from-[var(--navy)] via-[var(--medical)] to-[var(--teal)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top: brand + newsletter summary */}
        <div className="py-12 lg:py-16 grid lg:grid-cols-12 gap-8 lg:gap-12 border-b border-white/10">
          <div className="lg:col-span-4">
            <Link href="#hero" className="flex items-center gap-2.5" aria-label="UAB Research home">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[var(--medical)] via-[var(--teal)] to-white/80 flex items-center justify-center shadow-glow">
                <Activity className="w-5 h-5 text-[var(--navy)]" strokeWidth={2.5} aria-hidden="true" />
              </div>
              <div className="leading-none">
                <span className="font-bold text-lg tracking-tight">UAB Research</span>
                <p className="text-[11px] text-white/70 font-medium tracking-wide uppercase mt-0.5">
                  Evidence-Based Medicine
                </p>
              </div>
            </Link>

            <p className="mt-5 text-sm text-white/80 leading-relaxed max-w-md">
              The world&apos;s most trusted educational platform for Underactive Bladder (UAB),
              Hypocontractile Bladder, and Detrusor Underactivity (DU). Built for patients,
              caregivers, clinicians, and researchers.
            </p>

            {/* Contact info */}
            <div className="mt-6 space-y-2 text-sm text-white/80">
              <a href="mailto:contact@uab-research.org" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
                contact@uab-research.org
              </a>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 shrink-0" aria-hidden="true" />
                Global Office • Cambridge, MA, USA
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
                +1 (617) 555-0142 (media inquiries only)
              </p>
            </div>

            {/* Social */}
            <div className="mt-6 flex items-center gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <s.icon className="w-4 h-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4">
            {footerSections.map((section) => (
              <nav key={section.title} aria-label={section.title}>
                <h3 className="text-xs font-bold text-white uppercase tracking-wide mb-3">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[13px] text-white/70 hover:text-white transition-colors leading-snug block"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* Editorial Board */}
        <div id="editorial" className="py-10 lg:py-12 border-b border-white/10 scroll-mt-20">
          <div className="flex items-center gap-2 mb-6">
            <ShieldCheck className="w-5 h-5 text-[var(--medical-light)]" aria-hidden="true" />
            <h3 className="text-base font-bold">Editorial & Medical Review Board</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {editorialBoard.map((member) => (
              <div key={member.name} className="rounded-xl bg-white/5 border border-white/10 p-4">
                <p className="font-bold text-sm text-white leading-tight">{member.name}</p>
                <p className="text-[11px] text-[var(--medical-light)] font-semibold mt-1">{member.credential}</p>
                <p className="text-xs text-white/70 mt-2">{member.specialty}</p>
                <p className="text-[11px] text-white/50 mt-1 leading-snug">{member.affiliation}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust badges row */}
        <div className="py-8 border-b border-white/10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: ShieldCheck, label: 'WCAG 2.2 AA Compliant', sub: 'Accessibility' },
              { icon: Lock, label: 'HTTPS + CSP + HSTS', sub: 'Security' },
              { icon: FileText, label: 'YMYL Compliant Content', sub: 'Editorial Standards' },
              { icon: Scale, label: 'HIPAA-Aware Architecture', sub: 'Privacy First' },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <b.icon className="w-5 h-5 text-[var(--medical-light)]" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white leading-tight">{b.label}</p>
                  <p className="text-[11px] text-white/60">{b.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Medical disclaimer */}
        <div className="py-8">
          <div className="rounded-xl bg-amber-500/10 border border-amber-400/30 p-5">
            <p className="text-sm text-amber-100 leading-relaxed">
              <strong className="text-amber-50">Medical Disclaimer:</strong> This website is for
              educational purposes only and is not a substitute for professional medical advice,
              diagnosis, or treatment. Always seek the advice of a qualified healthcare provider with
              any questions about a medical condition. Never disregard professional medical advice or
              delay seeking it because of something you have read on this website. In a medical
              emergency, call your local emergency number (911 in the US) immediately.
            </p>
          </div>
        </div>

        {/* Bottom: legal + copyright */}
        <div className="py-6 border-t border-white/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 text-xs text-white/60">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span>© 2024 UAB Research Platform. All rights reserved.</span>
            <span className="hidden lg:inline">|</span>
            <Link href="#footer" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#footer" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#footer" className="hover:text-white transition-colors">Cookie Policy</Link>
            <Link href="#footer" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
          <div className="flex items-center gap-4 text-white/50">
            <span className="flex items-center gap-1">
              <Cookie className="w-3 h-3" aria-hidden="true" />
              Cookie preferences
            </span>
            <span>v2.4.1 • Last updated: July 15, 2024</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
