'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import {
  FileText, BookOpen, FlaskConical, Microscope, Globe, Calendar,
  ExternalLink, MapPin, Activity, Beaker,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { researchArticles, clinicalTrials } from '@/lib/medical-data'
import { ResearchTrendsChart } from '@/components/charts/research-trends'
import { ClinicalTrialTimeline } from '@/components/charts/clinical-trial-timeline'
import { DiagramCard } from '@/components/diagram-card'

const categoryColors: Record<string, string> = {
  'Review': 'bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300',
  'Original Research': 'bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300',
  'Guideline': 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300',
  'Meta-Analysis': 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300',
}

const trialStatusColors: Record<string, string> = {
  'Recruiting': 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-800/50',
  'Active': 'bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-900/30 dark:text-sky-300 dark:border-sky-800/50',
  'Completed': 'bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-900/30 dark:text-violet-300 dark:border-violet-800/50',
  'Not yet recruiting': 'bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-800/40 dark:text-slate-300 dark:border-slate-700',
}

const researchCategories = [
  { label: 'Latest Research', icon: FileText, desc: 'Recent peer-reviewed publications' },
  { label: 'Medical Journals', icon: BookOpen, desc: 'Source publications and impact factors' },
  { label: 'Clinical Trials', icon: FlaskConical, desc: 'Active and recruiting studies' },
  { label: 'FDA Updates', icon: Activity, desc: 'Regulatory news and approvals' },
  { label: 'EMA Updates', icon: Globe, desc: 'European Medicines Agency news' },
  { label: 'Conferences', icon: Calendar, desc: 'AUA, EAU, ICS meeting highlights' },
  { label: 'Emerging Tech', icon: Microscope, desc: 'Novel diagnostic and therapeutic tools' },
  { label: 'Future Therapies', icon: Beaker, desc: 'Preclinical and early-stage research' },
]

export function ResearchCenter() {
  return (
    <section
      id="research"
      className="relative py-20 lg:py-28 scroll-mt-20"
      aria-labelledby="research-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Research center"
          title={
            <>
              The latest in <span className="gradient-text">UAB science</span>
            </>
          }
          description="Track peer-reviewed research, registered clinical trials, regulatory updates, and conference highlights—all curated by our editorial team and updated continuously as the field evolves."
        />

        {/* Research category grid */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {researchCategories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
            >
              <Card className="glass shadow-soft hover:shadow-glow transition-all h-full group hover:-translate-y-0.5 cursor-pointer">
                <CardContent className="p-4">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[var(--medical)] to-[var(--teal)] flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
                    <cat.icon className="w-4 h-4 text-white" aria-hidden="true" />
                  </div>
                  <p className="text-sm font-bold text-foreground leading-tight">{cat.label}</p>
                  <p className="text-[11px] text-muted-foreground mt-1 leading-snug">{cat.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Articles + Trials tabs */}
        <div className="mt-16">
          <Tabs defaultValue="articles" className="w-full">
            <TabsList className="flex flex-wrap h-auto gap-1 bg-muted/60 p-1 rounded-xl mb-8" aria-label="Research content">
              <TabsTrigger value="articles" className="data-[state=active]:bg-white dark:data-[state=active]:bg-card data-[state=active]:shadow-soft rounded-lg px-4 py-2 text-sm">
                <FileText className="w-4 h-4 mr-2" aria-hidden="true" />
                Featured Research ({researchArticles.length})
              </TabsTrigger>
              <TabsTrigger value="trials" className="data-[state=active]:bg-white dark:data-[state=active]:bg-card data-[state=active]:shadow-soft rounded-lg px-4 py-2 text-sm">
                <FlaskConical className="w-4 h-4 mr-2" aria-hidden="true" />
                Clinical Trials ({clinicalTrials.length})
              </TabsTrigger>
            </TabsList>

            {/* Articles */}
            <TabsContent value="articles" className="mt-0">
              <div className="grid lg:grid-cols-2 gap-4">
                {researchArticles.map((article, i) => (
                  <motion.div
                    key={article.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    <Card className="glass shadow-soft hover:shadow-glow transition-all h-full group">
                      <CardContent className="p-5">
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className={`text-[10px] font-semibold rounded-full px-2 py-0.5 ${categoryColors[article.category]}`}>
                            {article.category}
                          </span>
                          <span className="text-[11px] text-muted-foreground flex items-center gap-1">
                            <Calendar className="w-3 h-3" aria-hidden="true" />
                            {article.date}
                          </span>
                        </div>
                        <h4 className="font-bold text-foreground leading-tight group-hover:text-[var(--medical)] transition-colors">
                          {article.title}
                        </h4>
                        <p className="mt-1 text-xs text-[var(--medical)] font-medium">{article.journal}</p>
                        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{article.summary}</p>
                        <Button
                          asChild
                          variant="ghost"
                          size="sm"
                          className="mt-4 -ml-2 text-[var(--medical)] hover:bg-[var(--medical)]/10 px-2"
                        >
                          <a href="https://pubmed.ncbi.nlm.nih.gov/" target="_blank" rel="noopener noreferrer">
                            Read abstract
                            <ExternalLink className="w-3 h-3 ml-1.5" aria-hidden="true" />
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Trials */}
            <TabsContent value="trials" className="mt-0">
              <div className="overflow-hidden rounded-2xl glass shadow-soft">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-muted/60">
                      <tr>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">NCT ID</th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">Study Title</th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground hidden md:table-cell">Phase</th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">Status</th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground hidden lg:table-cell">Intervention</th>
                        <th className="text-right py-3 px-4 font-semibold text-foreground hidden sm:table-cell">Sites</th>
                      </tr>
                    </thead>
                    <tbody>
                      {clinicalTrials.map((trial, i) => (
                        <motion.tr
                          key={trial.nctId}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: i * 0.04 }}
                          className="border-t border-border/60 hover:bg-muted/40 transition-colors"
                        >
                          <td className="py-3 px-4">
                            <a
                              href={`https://clinicaltrials.gov/study/${trial.nctId}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-mono text-xs font-semibold text-[var(--medical)] hover:underline inline-flex items-center gap-1"
                            >
                              {trial.nctId}
                              <ExternalLink className="w-3 h-3" aria-hidden="true" />
                            </a>
                          </td>
                          <td className="py-3 px-4">
                            <p className="font-medium text-foreground leading-snug">{trial.title}</p>
                            <p className="text-[11px] text-muted-foreground mt-0.5">{trial.condition}</p>
                          </td>
                          <td className="py-3 px-4 hidden md:table-cell">
                            <Badge variant="outline" className="text-[10px] font-medium">{trial.phase}</Badge>
                          </td>
                          <td className="py-3 px-4">
                            <span className={`inline-block text-[10px] font-semibold rounded-full px-2 py-0.5 border ${trialStatusColors[trial.status]}`}>
                              {trial.status}
                            </span>
                          </td>
                          <td className="py-3 px-4 hidden lg:table-cell text-xs text-muted-foreground leading-relaxed max-w-xs">
                            {trial.intervention}
                          </td>
                          <td className="py-3 px-4 hidden sm:table-cell text-right">
                            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                              <MapPin className="w-3 h-3" aria-hidden="true" />
                              {trial.locations}
                            </span>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-xs text-muted-foreground">
                  Showing {clinicalTrials.length} of 50+ active trials. Data sourced from ClinicalTrials.gov.
                </p>
                <Button asChild variant="outline" className="border-[var(--medical)] text-[var(--medical)]">
                  <a href="https://clinicaltrials.gov/search?cond=Underactive+Bladder" target="_blank" rel="noopener noreferrer">
                    Browse all trials
                    <ExternalLink className="w-3.5 h-3.5 ml-1.5" aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Visual: Research trends chart + clinical trial timeline */}
        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          <DiagramCard
            title="A Decade of UAB Research Growth"
            description="Research output has grown nearly 6x over the past decade, reflecting growing recognition of UAB as a distinct clinical entity. Active clinical trials have followed a similar trajectory."
            badge="Trend Chart"
          >
            <ResearchTrendsChart />
          </DiagramCard>

          <DiagramCard
            title="Drug Development Pipeline"
            description="Visual timeline of UAB-targeted therapies advancing through clinical development phases — from preclinical gene therapy research to active Phase 2 trials of TAC-302 and stem cell therapy."
            badge="Timeline"
          >
            <ClinicalTrialTimeline />
          </DiagramCard>
        </div>
      </div>

      {/* Medical Library preview anchor */}
      <div id="medical-library" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20 scroll-mt-20">
        <Card className="glass shadow-soft overflow-hidden border-2 border-[var(--medical)]/20">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-12">
              <div className="lg:col-span-5 p-6 lg:p-8 bg-gradient-to-br from-[var(--navy)] via-[var(--medical)] to-[var(--teal)] text-white">
                <BookOpen className="w-10 h-10 mb-4 opacity-90" aria-hidden="true" />
                <h3 className="text-2xl font-bold">Medical Library</h3>
                <p className="mt-2 text-sm opacity-90 leading-relaxed">
                  Comprehensive resources for patients, caregivers, and clinicians: research papers,
                  clinical guidelines, downloadable PDFs, medical illustrations, educational videos,
                  infographics, patient education materials, and a glossary of urologic terms.
                </p>
                <Button asChild variant="secondary" className="mt-6 bg-white text-[var(--navy)] hover:bg-white/90">
                  <a href="#resources">
                    Browse Library
                    <ExternalLink className="w-3.5 h-3.5 ml-1.5" aria-hidden="true" />
                  </a>
                </Button>
              </div>
              <div className="lg:col-span-7 p-6 lg:p-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { label: 'Research Papers', count: '450+' },
                    { label: 'Clinical Guidelines', count: '12' },
                    { label: 'PDF Downloads', count: '85' },
                    { label: 'Medical Illustrations', count: '120+' },
                    { label: 'Educational Videos', count: '34' },
                    { label: 'Infographics', count: '28' },
                    { label: 'Patient Handouts', count: '46' },
                    { label: 'Glossary Terms', count: '210+' },
                    { label: 'Case Studies', count: '18' },
                  ].map((item) => (
                    <div key={item.label} className="rounded-xl bg-white/60 dark:bg-white/5 border border-border/60 p-3 hover:border-[var(--medical)]/40 transition-colors cursor-pointer">
                      <p className="text-lg font-bold gradient-text leading-none">{item.count}</p>
                      <p className="text-[11px] text-muted-foreground mt-1 leading-tight">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
