'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { HelpCircle, Mail, Send, CheckCircle2, Users, HeartHandshake } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { faqs } from '@/lib/medical-data'

export function FaqNewsletter() {
  return (
    <>
      {/* FAQ */}
      <section
        id="faq"
        className="relative py-20 lg:py-28 scroll-mt-20"
        aria-labelledby="faq-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Frequently asked questions"
            title={
              <>
                Your <span className="gradient-text">UAB questions</span>, answered
              </>
            }
            description="Clear, evidence-based answers to the most common questions patients and caregivers ask about Underactive Bladder. Each answer has been reviewed by our medical editorial board."
            align="center"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="mt-12 max-w-4xl mx-auto"
          >
            <Card className="glass shadow-soft">
              <CardContent className="p-2 lg:p-3">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, i) => (
                    <AccordionItem
                      key={i}
                      value={`item-${i}`}
                      className="border-b border-border/60 last:border-0 px-3 lg:px-4"
                    >
                      <AccordionTrigger className="text-left text-sm lg:text-base font-semibold text-foreground hover:no-underline py-5 hover:text-[var(--medical)] transition-colors">
                        <span className="flex items-start gap-3">
                          <HelpCircle className="w-4 h-4 text-[var(--medical)] shrink-0 mt-0.5" aria-hidden="true" />
                          {faq.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-sm lg:text-base text-muted-foreground leading-relaxed pb-5 pt-1 pl-7">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>

            <p className="mt-6 text-center text-sm text-muted-foreground">
              Have more questions?{' '}
              <a href="#ai-assistant" className="text-[var(--medical)] font-semibold hover:underline">
                Ask our AI Assistant
              </a>{' '}
              or{' '}
              <a href="#footer" className="text-[var(--medical)] font-semibold hover:underline">
                contact our team
              </a>
              .
            </p>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section
        id="newsletter"
        className="relative py-20 lg:py-28 scroll-mt-20"
        aria-labelledby="newsletter-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <Card className="glass-strong shadow-premium overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2">
                  {/* Left: pitch */}
                  <div className="p-8 lg:p-12 bg-gradient-to-br from-[var(--navy)] via-[var(--medical)] to-[var(--teal)] text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-hero-grid opacity-20" aria-hidden="true" />
                    <div className="relative">
                      <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-3 py-1 text-xs font-medium mb-6">
                        <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                        Weekly Research Briefing
                      </div>
                      <h2 className="text-3xl lg:text-4xl font-bold leading-tight text-balance">
                        Stay current with UAB research breakthroughs
                      </h2>
                      <p className="mt-4 text-base lg:text-lg opacity-90 leading-relaxed max-w-md">
                        Get the latest peer-reviewed research, clinical trial updates, regulatory
                        news, and patient resources — delivered to your inbox every week.
                      </p>

                      <div className="mt-8 space-y-3">
                        {[
                          'Weekly curated research summaries',
                          'Clinical trial enrollment alerts',
                          'Drug pipeline updates (TAC-302, ZG-802)',
                          'Patient education resources',
                        ].map((benefit) => (
                          <div key={benefit} className="flex items-center gap-2.5 text-sm">
                            <CheckCircle2 className="w-4 h-4 shrink-0 opacity-90" aria-hidden="true" />
                            <span className="opacity-95">{benefit}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 pt-6 border-t border-white/20 flex items-center gap-6">
                        <div>
                          <p className="text-2xl font-bold">15,000+</p>
                          <p className="text-xs opacity-80">subscribers</p>
                        </div>
                        <div className="w-px h-10 bg-white/20" />
                        <div>
                          <p className="text-2xl font-bold">52</p>
                          <p className="text-xs opacity-80">issues per year</p>
                        </div>
                        <div className="w-px h-10 bg-white/20" />
                        <div>
                          <p className="text-2xl font-bold">100%</p>
                          <p className="text-xs opacity-80">free, no spam</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: form */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <NewsletterForm />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Community & Resources preview */}
      <section
        id="community"
        className="relative py-20 lg:py-28 scroll-mt-20 bg-gradient-to-b from-muted/40 to-background"
        aria-labelledby="community-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Resources & Community"
            title={
              <>
                A <span className="gradient-text">supportive community</span> for everyone affected by UAB
              </>
            }
            description="You're not alone. Connect with patients, caregivers, and clinicians through our moderated community, find a specialist near you, and access practical tools to manage daily life with Underactive Bladder."
          />

          <div className="mt-12 grid lg:grid-cols-3 gap-6">
            {[
              {
                icon: HeartHandshake,
                title: 'Patient Stories',
                description:
                  'Read real experiences from individuals living with UAB. Share your own story to help others navigate their journey.',
                cta: 'Read stories',
                count: '120+ stories',
              },
              {
                icon: Users,
                title: 'Discussion Forum',
                description:
                  'Ask questions, share tips, and connect with peers and clinicians in our moderated community forums.',
                cta: 'Join the discussion',
                count: '8,500+ members',
              },
              {
                icon: CheckCircle2,
                title: 'Interactive Tools',
                description:
                  'Bladder diary, fluid intake tracker, symptom checker, voiding frequency tracker, medication reminder, and more.',
                cta: 'Explore tools',
                count: '9 tools available',
              },
            ].map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="glass shadow-soft hover:shadow-glow transition-all h-full group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--navy)] to-[var(--medical)] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform shadow-glow">
                      <c.icon className="w-6 h-6 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="font-bold text-foreground text-lg leading-tight">{c.title}</h3>
                    <p className="mt-1 text-xs text-[var(--medical)] font-semibold">{c.count}</p>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.description}</p>
                    <Button
                      asChild
                      variant="ghost"
                      className="mt-4 -ml-2 text-[var(--medical)] hover:bg-[var(--medical)]/10 px-2"
                    >
                      <a href="#footer">
                        {c.cta}
                        <Send className="w-3 h-3 ml-1.5" aria-hidden="true" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function NewsletterForm() {
  const [email, setEmail] = React.useState('')
  const [role, setRole] = React.useState<'patient' | 'caregiver' | 'clinician' | 'researcher'>('patient')
  const [submitted, setSubmitted] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim() || !email.includes('@')) return
    // In production this would POST to a real backend
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-8"
      >
        <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-emerald-600" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-bold text-foreground">You&apos;re subscribed!</h3>
        <p className="mt-2 text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">
          Welcome to the UAB Research community. Check your inbox for a confirmation email and your
          first issue arriving this week.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => {
            setSubmitted(false)
            setEmail('')
          }}
        >
          Subscribe another email
        </Button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <h3 className="text-2xl font-bold text-foreground mb-2">Subscribe for free</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Join 15,000+ patients, caregivers, and clinicians receiving our weekly research briefing.
        </p>
      </div>

      <div>
        <label htmlFor="newsletter-email" className="block text-xs font-semibold text-foreground mb-1.5">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--medical)] focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-foreground mb-2">I am a…</label>
        <div className="grid grid-cols-2 gap-2">
          {([
            { value: 'patient', label: 'Patient' },
            { value: 'caregiver', label: 'Caregiver' },
            { value: 'clinician', label: 'Clinician' },
            { value: 'researcher', label: 'Researcher' },
          ] as const).map((r) => (
            <button
              key={r.value}
              type="button"
              onClick={() => setRole(r.value)}
              className={`text-sm font-medium rounded-lg px-3 py-2.5 border transition-all ${
                role === r.value
                  ? 'border-[var(--medical)] bg-[var(--medical)]/10 text-[var(--medical)]'
                  : 'border-border bg-background text-muted-foreground hover:bg-muted'
              }`}
              aria-pressed={role === r.value}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-[var(--navy)] to-[var(--medical)] hover:opacity-90 text-white shadow-glow h-12"
      >
        Subscribe Now
        <Send className="w-4 h-4 ml-2" aria-hidden="true" />
      </Button>

      <p className="text-[11px] text-muted-foreground leading-relaxed text-center">
        By subscribing you agree to our{' '}
        <a href="#footer" className="underline hover:text-foreground">Privacy Policy</a>. Unsubscribe
        anytime. We never share your email.
      </p>
    </form>
  )
}
