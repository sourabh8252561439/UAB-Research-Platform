'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Clock, ArrowUpRight, Tag } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { medicalNews } from '@/lib/medical-data'

const featuredArticles = [
  {
    title: 'A Patient\'s Guide to Living with Underactive Bladder',
    excerpt:
      'Practical strategies for managing daily life with UAB, including fluid management, catheter use, travel tips, and maintaining quality of life.',
    category: 'Patient Guide',
    readTime: '12 min',
    date: 'June 22, 2024',
    author: 'Dr. Elena M. Rodriguez, MD',
    color: 'from-[var(--navy)] to-[var(--medical)]',
  },
  {
    title: 'Understanding the Bladder Contractility Index (BCI)',
    excerpt:
      'A deep dive into how urodynamic parameters are used to diagnose UAB, with worked examples and clinical interpretation guidance.',
    category: 'Clinical Reference',
    readTime: '8 min',
    date: 'June 15, 2024',
    author: 'Dr. James T. Anderson, MD, MSc',
    color: 'from-[var(--medical)] to-[var(--teal)]',
  },
  {
    title: 'Emerging Therapies: What TAC-302 Means for Patients',
    excerpt:
      'Inside the first-in-class oral therapy in Phase 2 development for UAB — mechanism, trial design, and what patients should know.',
    category: 'Drug Pipeline',
    readTime: '10 min',
    date: 'May 30, 2024',
    author: 'Dr. Sarah J. Mitchell, MD, FACS',
    color: 'from-[var(--teal)] to-[var(--medical-light)]',
  },
]

export function ArticlesNews() {
  return (
    <section
      id="featured-articles"
      className="relative py-20 lg:py-28 scroll-mt-20 bg-gradient-to-b from-background to-muted/40"
      aria-labelledby="articles-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Featured content"
            title={
              <>
                Latest <span className="gradient-text">articles & news</span>
              </>
            }
            description="In-depth guides, clinical references, and breaking medical news from the world of Underactive Bladder research—all curated and reviewed by our editorial board."
          />
          <Button asChild variant="outline" className="border-[var(--medical)] text-[var(--medical)] hover:bg-[var(--medical)]/10 self-start lg:self-end shrink-0">
            <a href="#research">
              View all articles
              <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
            </a>
          </Button>
        </div>

        {/* Featured articles grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {featuredArticles.map((article, i) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="glass shadow-soft hover:shadow-glow transition-all h-full group cursor-pointer overflow-hidden hover:-translate-y-1">
                <div className={`h-32 bg-gradient-to-br ${article.color} relative`}>
                  <div className="absolute inset-0 bg-hero-grid opacity-30" aria-hidden="true" />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-semibold uppercase tracking-wide bg-white/20 backdrop-blur text-white px-2.5 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-5">
                  <h3 className="font-bold text-foreground text-base leading-tight group-hover:text-[var(--medical)] transition-colors">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="mt-4 pt-4 border-t border-border/60 space-y-1.5">
                    <p className="text-xs text-foreground font-medium">{article.author}</p>
                    <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" aria-hidden="true" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" aria-hidden="true" />
                        {article.readTime} read
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Medical News */}
        <div className="mt-16">
          <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Tag className="w-5 h-5 text-[var(--medical)]" aria-hidden="true" />
            Medical News
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {medicalNews.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Card className="glass shadow-soft hover:shadow-glow transition-all group h-full">
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-[10px] font-medium border-[var(--medical)]/30 text-[var(--medical)]">
                        {item.category}
                      </Badge>
                      <span className="text-[11px] text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-3 h-3" aria-hidden="true" />
                        {item.date}
                      </span>
                    </div>
                    <h4 className="font-bold text-foreground text-sm leading-tight group-hover:text-[var(--medical)] transition-colors">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-xs text-[var(--medical)] font-medium">{item.source}</p>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.excerpt}</p>
                    <a
                      href="#research"
                      className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[var(--medical)] hover:underline"
                    >
                      Read more
                      <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
