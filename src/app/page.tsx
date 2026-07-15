import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/sections/hero'
import { VisualStory } from '@/components/sections/visual-story'
import { AboutUAB } from '@/components/sections/about-uab'
import { SymptomsCauses } from '@/components/sections/symptoms-causes'
import { Diagnosis } from '@/components/sections/diagnosis'
import { Treatments } from '@/components/sections/treatments'
import { DrugPipeline } from '@/components/sections/drug-pipeline'
import { ResearchCenter } from '@/components/sections/research'
import { AIAssistant } from '@/components/sections/ai-assistant'
import { ArticlesNews } from '@/components/sections/articles-news'
import { FaqNewsletter } from '@/components/sections/faq-newsletter'
import { Footer } from '@/components/sections/footer'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Underactive Bladder (UAB)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Underactive Bladder (UAB), also called detrusor underactivity (DU) or hypocontractile bladder, is a condition in which the bladder muscle (detrusor) cannot contract with sufficient strength or duration to empty the bladder completely within a normal time. This leads to symptoms such as weak stream, hesitancy, straining, and incomplete emptying, often with elevated post-void residual urine.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Underactive Bladder be cured?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is currently no universal cure for underactive bladder. Treatment aims to improve bladder emptying, prevent complications (UTIs, kidney damage), and enhance quality of life. Many patients achieve good symptom control with behavioral therapy, medications, catheterization, or neuromodulation. Experimental regenerative therapies including stem cell therapy and gene therapy are under investigation but remain investigational.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is Underactive Bladder diagnosed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Diagnosis begins with history, voiding diary, and physical examination. Initial tests include uroflowmetry and post-void residual measurement by bladder ultrasound. If findings suggest UAB, full urodynamic studies with pressure-flow analysis are performed. The Bladder Contractility Index (BCI), calculated as PdetQmax + 5×Qmax, with values below 100, supports the diagnosis.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is TAC-302?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TAC-302 is an investigational oral small-molecule therapy being developed specifically for detrusor underactivity. Its mechanism is distinct from existing drugs. Phase 1 studies in healthy volunteers demonstrated safety, and Phase 2 trials in UAB patients are currently recruiting. TAC-302 has received FDA Fast Track designation but is not yet approved for clinical use.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://uab-research.org/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'About UAB',
      item: 'https://uab-research.org/#about-uab',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Treatments',
      item: 'https://uab-research.org/#treatments',
    },
  ],
}

export default function Home() {
  // Combine page-level JSON-LD into a single script to keep the React tree
  // minimal and avoid hydration mismatches with Radix components downstream.
  const pageSchema = [faqSchema, breadcrumbSchema];

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <Navbar />
      <main id="main-content" className="min-h-screen">
        <Hero />
        <VisualStory />
        <AboutUAB />
        <SymptomsCauses />
        <Diagnosis />
        <Treatments />
        <DrugPipeline />
        <ResearchCenter />
        <AIAssistant />
        <ArticlesNews />
        <FaqNewsletter />
      </main>
      <Footer />
    </>
  )
}
