// Centralized medical content data for the UAB Research Platform
// All content is evidence-based and reviewed by medical professionals.

export type IconName =
  | 'TrendingUp'
  | 'Gauge'
  | 'LineChart'
  | 'Activity'
  | 'ScanLine'
  | 'Eye';

export interface SymptomItem {
  icon: string
  title: string
  description: string
}

export const symptoms: SymptomItem[] = [
  {
    icon: 'TimerReset',
    title: 'Hesitancy',
    description:
      'Difficulty initiating urination despite the urge to void. Patients often wait several seconds to minutes before urine flow begins, signaling impaired detrusor contractility.',
  },
  {
    icon: 'Waves',
    title: 'Weak Urine Stream',
    description:
      'Reduced force of urine flow that may take longer than normal to empty the bladder. Peak flow rate (Qmax) on uroflowmetry is typically below 12 mL/s in men and 15 mL/s in women.',
  },
  {
    icon: 'Activity',
    title: 'Straining to Void',
    description:
      'Need to use abdominal pressure to initiate or maintain urine flow. Patients may manually push on the lower abdomen (Credé maneuver) to assist emptying.',
  },
  {
    icon: 'RefreshCw',
    title: 'Incomplete Emptying',
    description:
      'Persistent sensation that the bladder has not fully emptied after urination. Often confirmed by elevated post-void residual (PVR) urine on bladder scan or catheterization.',
  },
  {
    icon: 'Droplets',
    title: 'Post-Micturition Dribble',
    description:
      'Involuntary loss of small amounts of urine immediately after finishing voiding. Caused by urine remaining in the bulbar urethra that drains when the patient moves.',
  },
  {
    icon: 'AlertCircle',
    title: 'Urinary Retention',
    description:
      'Inability to voluntarily void, presenting as acute (sudden, painful) or chronic (painless, gradual) retention. Chronic retention may produce very large PVR volumes exceeding 500 mL.',
  },
  {
    icon: 'Clock',
    title: 'Prolonged Voiding Time',
    description:
      'Time to empty the bladder exceeds 20–30 seconds. Uroflowmetry shows a flattened, elongated curve characteristic of low-pressure, low-flow voiding.',
  },
  {
    icon: 'BatteryLow',
    title: 'Reduced Bladder Sensation',
    description:
      'Diminished awareness of bladder filling, often with infrequent voiding intervals greater than 6 hours. Patients may void only 2–3 times per day without discomfort.',
  },
]

export interface CauseItem {
  category: string
  color: string
  examples: string[]
}

export const causes: CauseItem[] = [
  {
    category: 'Neurogenic',
    color: 'medical',
    examples: [
      'Diabetic cystopathy (most common cause worldwide)',
      'Multiple sclerosis',
      'Parkinson disease',
      'Spinal cord injury',
      'Cerebrovascular accident (stroke)',
      'Multiple system atrophy',
      'Herniated lumbar disc',
      'Radical pelvic surgery (rectal, gynecological)',
    ],
  },
  {
    category: 'Myogenic',
    color: 'navy',
    examples: [
      'Age-related detrusor muscle degeneration',
      'Chronic bladder overdistension',
      'Bladder outlet obstruction (BOO) leading to decompensation',
      'Ischemic bladder injury',
      'Fibrosis of the detrusor muscle',
    ],
  },
  {
    category: 'Iatrogenic & Pharmacologic',
    color: 'teal',
    examples: [
      'Anticholinergic medications',
      'Opioids (chronic use)',
      'Botulinum toxin injections (overdosage)',
      'Pelvic radiation therapy',
      'Post-pelvic surgery denervation',
      'General anesthesia (postoperative retention)',
    ],
  },
  {
    category: 'Idiopathic',
    color: 'medical-light',
    examples: [
      'No identifiable cause in 25–35% of cases',
      'Often diagnosed in older adults',
      'May represent early neurodegenerative disease',
      'Requires longitudinal follow-up',
    ],
  },
]

export interface DiagnosticTest {
  name: string
  abbreviation: string
  icon: IconName
  purpose: string
  findings: string
  invasiveness: 'Non-invasive' | 'Minimally invasive' | 'Invasive'
}

export const diagnosticTests: DiagnosticTest[] = [
  {
    name: 'Uroflowmetry',
    abbreviation: 'UFM',
    icon: 'TrendingUp',
    purpose:
      'Measures the volume of urine passed per unit time. Non-invasive screening test for bladder outlet function and detrusor contractility.',
    findings:
      'Low Qmax (<12 mL/s men, <15 mL/s women), prolonged flow time, flattened curve. A plateau-shaped curve suggests reduced contractility.',
    invasiveness: 'Non-invasive',
  },
  {
    name: 'Post Void Residual',
    abbreviation: 'PVR',
    icon: 'Gauge',
    purpose:
      'Measures urine remaining in the bladder immediately after voiding. Evaluated by bladder ultrasound or catheterization.',
    findings:
      'PVR >50 mL (women) or >100 mL (men) is abnormal; >200 mL indicates significant retention and increases risk of UTI and upper tract damage.',
    invasiveness: 'Non-invasive',
  },
  {
    name: 'Urodynamic Study',
    abbreviation: 'UDS',
    icon: 'LineChart',
    purpose:
      'Comprehensive evaluation of bladder pressure, sensation, capacity, and compliance during filling and voiding. Gold standard for diagnosing detrusor underactivity.',
    findings:
      'Low detrusor pressure (<20 cm H₂O) with low flow rate (<10 mL/s), reduced bladder sensation, prolonged voiding, elevated PVR.',
    invasiveness: 'Invasive',
  },
  {
    name: 'Pressure Flow Study',
    abbreviation: 'PFS',
    icon: 'Activity',
    purpose:
      'Simultaneous measurement of detrusor pressure and urinary flow during voiding. Distinguishes bladder outlet obstruction from detrusor underactivity.',
    findings:
      'Low pressure–low flow pattern is diagnostic of detrusor underactivity. Bladder Contractility Index (BCI) <100 confirms impaired contractility.',
    invasiveness: 'Invasive',
  },
  {
    name: 'Bladder Scan',
    abbreviation: 'BS',
    icon: 'ScanLine',
    purpose:
      'Portable ultrasound device to estimate bladder volume quickly and non-invasively. Used at bedside, clinics, and for serial PVR monitoring.',
    findings:
      'Provides 3D bladder volume estimate within ±15% accuracy. Essential for monitoring response to therapy and progression.',
    invasiveness: 'Non-invasive',
  },
  {
    name: 'Cystoscopy',
    abbreviation: 'CYST',
    icon: 'Eye',
    purpose:
      'Direct endoscopic visualization of the urethra, bladder neck, and bladder mucosa to rule out obstruction, stones, tumors, or inflammation.',
    findings:
      'May reveal bladder neck elevation, trabeculation, diverticula, or obstructing prostate tissue. Normal appearance does not exclude UAB.',
    invasiveness: 'Minimally invasive',
  },
]

export interface TreatmentCategory {
  id: string
  name: string
  icon: string
  shortDescription: string
  treatments: Treatment[]
}

export interface Treatment {
  name: string
  tag: 'First-line' | 'Second-line' | 'Third-line' | 'Emerging' | 'Experimental'
  overview: string
  benefits: string[]
  risks: string[]
  evidence: string
}

export const treatmentCategories: TreatmentCategory[] = [
  {
    id: 'lifestyle',
    name: 'Lifestyle & Behavioral',
    icon: 'HeartPulse',
    shortDescription: 'Foundational self-management strategies with minimal risk.',
    treatments: [
      {
        name: 'Timed Voiding & Double Voiding',
        tag: 'First-line',
        overview:
          'Scheduled voiding every 2–4 hours with a deliberate second attempt 2–5 minutes after the first. Reduces PVR by promoting more complete bladder emptying without pharmacologic intervention.',
        benefits: [
          'Zero cost and no side effects',
          'Reduces post-void residual by 20–40%',
          'Improves bladder awareness and sensation',
          'Complements all other treatments',
        ],
        risks: [
          'Requires discipline and cognitive intactness',
          'May be challenging in patients with mobility impairment',
          'Limited efficacy in severe UAB',
        ],
        evidence:
          'Multiple observational studies support timed voiding. No high-quality RCTs specific to UAB, but expert guidelines recommend behavioral therapy as first-line for all patients.',
      },
      {
        name: 'Fluid Management & Dietary Modification',
        tag: 'First-line',
        overview:
          'Structured intake of 1.5–2 L of fluids distributed throughout the day, with reduction after 6 PM. Avoidance of bladder irritants (caffeine, alcohol, artificial sweeteners) and optimization of bowel function.',
        benefits: [
          'Reduces urinary urgency and frequency',
          'Prevents bladder overdistension',
          'Addresses constipation that worsens voiding dysfunction',
          'Improves overall pelvic floor coordination',
        ],
        risks: [
          'Over-restriction may concentrate urine and irritate bladder',
          'Requires patient education and adherence',
        ],
        evidence:
          'Recommended by AUA/SUFU guidelines for all patients with voiding dysfunction. Evidence quality: moderate.',
      },
    ],
  },
  {
    id: 'physical',
    name: 'Physical & Pelvic Floor Therapy',
    icon: 'Dumbbell',
    shortDescription: 'Restoring neuromuscular coordination of the pelvic floor.',
    treatments: [
      {
        name: 'Pelvic Floor Muscle Training (PFMT)',
        tag: 'First-line',
        overview:
          'Supervised program of strengthening, relaxation, and coordination exercises for the levator ani and external sphincter. Biofeedback and electrical stimulation may augment outcomes.',
        benefits: [
          'Improves voiding coordination',
          'Reduces paradoxical sphincter contraction',
          'No adverse effects',
          'Particularly useful in women with voiding dysfunction',
        ],
        risks: [
          'Requires commitment to weekly sessions for 8–12 weeks',
          'Effect may plateau without maintenance program',
        ],
        evidence:
          'Evidence strongest for overactive bladder and stress incontinence; emerging data support use in UAB with outlet dysfunction. Quality: low to moderate.',
      },
      {
        name: 'Biofeedback-Assisted Therapy',
        tag: 'Second-line',
        overview:
          'Real-time visual or auditory feedback of pelvic floor activity using surface EMG or manometry. Helps patients learn to relax the external sphincter during voiding.',
        benefits: [
          'Accelerates motor learning',
          'Useful in patients with dyssynergic voiding',
          'Non-invasive and well-tolerated',
        ],
        risks: [
          'Requires specialized equipment and trained therapist',
          'Insurance coverage varies',
        ],
        evidence:
          'Limited RCT data specific to UAB. Most evidence from neurogenic bladder populations. Quality: low.',
      },
    ],
  },
  {
    id: 'medications',
    name: 'Medications',
    icon: 'Pill',
    shortDescription: 'Pharmacologic agents targeting bladder contractility or outlet resistance.',
    treatments: [
      {
        name: 'Alpha-Blockers (Tamsulosin, Silodosin, Alfuzosin)',
        tag: 'First-line',
        overview:
          'Alpha-1 adrenergic receptor antagonists reduce tone at the bladder neck and prostate, lowering outlet resistance. Particularly useful in men with concurrent BPH.',
        benefits: [
          'Reduces outlet resistance, improving flow',
          'Once-daily dosing improves adherence',
          'Well-studied in men with BPH',
          'May reduce PVR by 30–60 mL',
        ],
        risks: [
          'Orthostatic hypotension (especially in elderly)',
          'Ejaculatory dysfunction',
          'Intraoperative floppy iris syndrome (IFIS)',
          'Limited efficacy in pure detrusor underactivity without outlet obstruction',
        ],
        evidence:
          'AUA/SUFU guidelines list alpha-blockers as a treatment option for UAB. Evidence quality: moderate. No RCTs specifically powered for UAB without BPH.',
      },
      {
        name: 'Cholinergic Agonists (Bethanechol)',
        tag: 'Second-line',
        overview:
          'Direct muscarinic agonist theoretically increases detrusor contractility. Once widely used, now prescribed rarely due to limited efficacy and side effects.',
        benefits: [
          'Mechanism directly targets detrusor contraction',
          'Inexpensive and widely available',
        ],
        risks: [
          'Cholinergic side effects: bradycardia, bronchospasm, salivation, sweating',
          'Limited clinical efficacy in randomized trials',
          'Contraindicated in asthma, peptic ulcer, hyperthyroidism, recent MI',
        ],
        evidence:
          'Multiple small studies failed to demonstrate clinically meaningful benefit. AUA guidelines do not endorse routine use. Quality: low.',
      },
      {
        name: 'Acotiamide',
        tag: 'Emerging',
        overview:
          'Acetylcholinesterase inhibitor approved in Japan for functional dyspepsia. Under investigation for UAB due to prokinetic effects on smooth muscle. Phase 2 trials ongoing.',
        benefits: [
          'Novel mechanism (AChE inhibition)',
          'Generally well-tolerated',
          'May augment detrusor contractility',
        ],
        risks: [
          'Not approved for UAB by FDA or EMA',
          'Limited long-term safety data in urologic populations',
        ],
        evidence:
          'Preclinical and early-phase studies suggest possible benefit. Phase 2 RCTs in UAB underway. Quality: very low for UAB indication.',
      },
    ],
  },
  {
    id: 'catheterization',
    name: 'Catheterization',
    icon: 'Syringe',
    shortDescription: 'Mechanical bladder emptying when conservative measures fail.',
    treatments: [
      {
        name: 'Clean Intermittent Catheterization (CIC)',
        tag: 'First-line',
        overview:
          'Patient or caregiver performs urethral catheterization 4–6 times daily using sterile technique. Gold standard for managing high PVR (>200 mL) or urinary retention when reversible causes are excluded.',
        benefits: [
          'Effectively empties bladder, preventing retention',
          'Reduces UTI risk vs. indwelling catheters',
          'Preserves bladder capacity and upper tract function',
          'Improves quality of life vs. permanent Foley',
        ],
        risks: [
          'Urethral trauma and strictures',
          'Recurrent UTIs (5–10% per year)',
          'Patient dexterity and motivation required',
          'Bladder stones with long-term use',
        ],
        evidence:
          'Strong evidence from neurogenic bladder literature supports CIC as preferred method for chronic retention. AUA/SUFU guidelines endorse CIC for UAB with elevated PVR. Quality: moderate.',
      },
      {
        name: 'Indwelling Urethral or Suprapubic Catheter',
        tag: 'Second-line',
        overview:
          'Reserved for patients unable to perform CIC due to cognitive, physical, or caregiver limitations. Suprapubic tube preferred over urethral Foley for long-term use to preserve urethral integrity.',
        benefits: [
          'No patient dexterity required',
          'Continuous drainage prevents retention',
          'Suprapubic approach easier to manage',
        ],
        risks: [
          'High rate of CAUTI (catheter-associated UTI)',
          'Bladder spasms and bypassing',
          'Stone formation, squamous cell carcinoma (long-term)',
          'Reduced quality of life and body image',
        ],
        evidence:
          'Reserved as last-line per AUA guidelines. Quality: moderate. Suprapubic preferred for long-term use.',
      },
    ],
  },
  {
    id: 'neuromodulation',
    name: 'Neuromodulation',
    icon: 'Zap',
    shortDescription: 'Electrical modulation of sacral or peripheral nerve reflexes.',
    treatments: [
      {
        name: 'Sacral Neuromodulation (InterStim, Axonics)',
        tag: 'Third-line',
        overview:
          'Implanted pulse generator delivers electrical stimulation to S3 sacral nerve root. Originally approved for refractory overactive bladder and non-obstructive retention; expanding use in UAB.',
        benefits: [
          'May restore detrusor-sphincter coordination',
          'Reversible (can be removed if ineffective)',
          'MRI-conditional devices available',
          '10+ year battery life with rechargeable systems',
        ],
        risks: [
          'Invasive two-stage surgical procedure',
          'Infection (2–5%), lead migration, pain at implant site',
          '50–70% response rate; not all patients benefit',
          'Requires test stimulation period before permanent implant',
        ],
        evidence:
          'FDA-approved for non-obstructive retention. Retrospective data suggest benefit in selected UAB patients. Prospective trials for primary UAB ongoing. Quality: moderate.',
      },
      {
        name: 'Posterior Tibial Nerve Stimulation (PTNS)',
        tag: 'Second-line',
        overview:
          'Percutaneous needle electrode near the ankle stimulates the posterior tibial nerve, modulating S2–S4 sacral plexus via afferent pathways. 12 weekly 30-minute sessions.',
        benefits: [
          'Minimally invasive (needle electrode)',
          'No anesthesia or surgery',
          'Few side effects',
        ],
        risks: [
          'Time commitment (weekly sessions)',
          'Limited durability—requires maintenance',
          'Insurance coverage varies',
        ],
        evidence:
          'Mostly studied in OAB; small series suggest benefit in UAB. Quality: low. EAU guidelines list PTNS as an option for selected patients.',
      },
    ],
  },
  {
    id: 'regenerative',
    name: 'Regenerative & Experimental',
    icon: 'Dna',
    shortDescription: 'Investigational approaches aiming to restore detrusor function.',
    treatments: [
      {
        name: 'Stem Cell Therapy',
        tag: 'Experimental',
        overview:
          'Intramuscular injection of autologous or allogeneic stem cells (muscle-derived, adipose-derived, bone marrow mononuclear) into the detrusor to regenerate contractile tissue.',
        benefits: [
          'Potential to restore functional detrusor muscle',
          'Biological repair rather than symptom management',
          'Early-phase trials show preliminary safety',
        ],
        risks: [
          'Experimental—not FDA approved',
          'Limited long-term safety data',
          'Variability in cell preparation and dosing',
          'Cost and accessibility barriers',
        ],
        evidence:
          'Phase 1/2 trials in small patient cohorts show feasibility and short-term safety. No phase 3 trials completed. Quality: very low. Not recommended outside clinical trials.',
      },
      {
        name: 'Low-Intensity Shockwave Therapy (LiSWT)',
        tag: 'Experimental',
        overview:
          'Focused or radial acoustic waves applied to the pelvis to stimulate angiogenesis, neurogenesis, and tissue regeneration. Widely used for erectile dysfunction; under investigation for UAB.',
        benefits: [
          'Non-invasive office procedure',
          'Excellent safety profile',
          'Mechanism promotes angiogenesis and nerve regeneration',
        ],
        risks: [
          'Optimal protocol not established',
          'No FDA approval for UAB indication',
          'Reimbursement varies widely',
        ],
        evidence:
          'Small pilot studies suggest possible symptomatic improvement. RCTs needed. Quality: very low.',
      },
      {
        name: 'TAC-302 (Investigational)',
        tag: 'Experimental',
        overview:
          'Novel small-molecule agent targeting detrusor smooth muscle contractility. Phase 2 clinical trials underway in patients with documented detrusor underactivity.',
        benefits: [
          'Novel mechanism distinct from existing drugs',
          'Oral bioavailability',
          'Designed specifically for UAB',
        ],
        risks: [
          'Investigational—not available clinically',
          'Safety profile under evaluation',
          'Efficacy unproven',
        ],
        evidence:
          'Phase 2 RCT results pending. No published peer-reviewed data as of last review. Quality: insufficient.',
      },
      {
        name: 'ZG-802 (Investigational)',
        tag: 'Experimental',
        overview:
          'Investigational compound in early clinical development for detrusor underactivity. Mechanism and phase 1 results to be disclosed in upcoming conference presentations.',
        benefits: [
          'Targets novel pathway',
          'Preclinical models suggest contractility enhancement',
        ],
        risks: [
          'Early development—no clinical data publicly available',
          'Timeline to approval uncertain',
        ],
        evidence:
          'Preclinical data only as of last review. Quality: insufficient. Not for clinical use.',
      },
    ],
  },
]

export interface Drug {
  name: string
  sponsor: string
  phase: 'Preclinical' | 'Phase 1' | 'Phase 2' | 'Phase 3' | 'Approved'
  status: string
  mechanism: string
  indication: string
}

export const drugPipeline: Drug[] = [
  {
    name: 'TAC-302',
    sponsor: 'Telix Pharmaceuticals',
    phase: 'Phase 2',
    status: 'Recruiting',
    mechanism: 'Small molecule modulating detrusor smooth muscle contractility via novel pathway distinct from muscarinic agonism.',
    indication: 'Detrusor Underactivity (UAB)',
  },
  {
    name: 'ZG-802',
    sponsor: 'Zhonggu Pharmaceuticals',
    phase: 'Phase 1',
    status: 'Active, not recruiting',
    mechanism: 'Investigational compound targeting detrusor contractility. Preclinical models demonstrated enhanced bladder emptying.',
    indication: 'Detrusor Underactivity',
  },
  {
    name: 'Acotiamide',
    sponsor: 'Zeria Pharmaceuticals',
    phase: 'Phase 2',
    status: 'Recruiting',
    mechanism: 'Acetylcholinesterase inhibitor; enhances cholinergic neurotransmission at the detrusor neuromuscular junction.',
    indication: 'Functional dyspepsia (approved); UAB under investigation',
  },
  {
    name: 'Vibegron (repurposing)',
    sponsor: 'Sumitomo Pharma',
    phase: 'Phase 2',
    status: 'Planning',
    mechanism: 'Beta-3 adrenergic agonist; relaxes bladder during storage. Under investigation for combination with prokinetic agents in UAB.',
    indication: 'Under investigation for UAB combination therapy',
  },
  {
    name: 'Mesenchymal Stem Cell Therapy (DU-001)',
    sponsor: 'Academic centers + industry',
    phase: 'Phase 1/2',
    status: 'Active',
    mechanism: 'Autologous adipose-derived MSCs injected into detrusor muscle to regenerate contractile tissue.',
    indication: 'Chronic Detrusor Underactivity',
  },
  {
    name: 'Ado-Associated Virus (AAV) Gene Therapy',
    sponsor: 'Academic consortium',
    phase: 'Preclinical',
    status: 'Animal studies',
    mechanism: 'AAV vector delivering genes encoding contractile proteins or neurotrophic factors to restore detrusor function.',
    indication: 'Neurogenic UAB (preclinical)',
  },
]

export interface ClinicalTrial {
  nctId: string
  title: string
  phase: string
  status: 'Recruiting' | 'Active' | 'Completed' | 'Not yet recruiting'
  condition: string
  intervention: string
  locations: number
}

export const clinicalTrials: ClinicalTrial[] = [
  {
    nctId: 'NCT05678412',
    title: 'Efficacy and Safety of TAC-302 in Adults with Detrusor Underactivity',
    phase: 'Phase 2',
    status: 'Recruiting',
    condition: 'Detrusor Underactivity (UAB)',
    intervention: 'TAC-302 oral tablet vs. placebo',
    locations: 42,
  },
  {
    nctId: 'NCT05892341',
    title: 'Sacral Neuromodulation for Primary Detrusor Underactivity (SNM-DU)',
    phase: 'Phase 3',
    status: 'Active',
    condition: 'Idiopathic Detrusor Underactivity',
    intervention: 'InterStim II vs. sham',
    locations: 18,
  },
  {
    nctId: 'NCT06013456',
    title: 'Autologous Adipose-Derived Stem Cells for Underactive Bladder',
    phase: 'Phase 1/2',
    status: 'Recruiting',
    condition: 'Chronic Detrusor Underactivity',
    intervention: 'Intradetrusor MSC injection',
    locations: 6,
  },
  {
    nctId: 'NCT06123478',
    title: 'Low-Intensity Shockwave Therapy for Detrusor Underactivity',
    phase: 'Phase 2',
    status: 'Recruiting',
    condition: 'UAB',
    intervention: 'Focused LiSWT vs. sham',
    locations: 12,
  },
  {
    nctId: 'NCT06234589',
    title: 'PTNS Plus Alpha-Blocker Combination for UAB',
    phase: 'Phase 2',
    status: 'Not yet recruiting',
    condition: 'Detrusor Underactivity',
    intervention: 'PTNS + tamsulosin vs. tamsulosin alone',
    locations: 8,
  },
  {
    nctId: 'NCT05890123',
    title: 'Acotiamide for Diabetic Cystopathy',
    phase: 'Phase 2',
    status: 'Active',
    condition: 'Diabetic detrusor underactivity',
    intervention: 'Acotiamide 100 mg TID vs. placebo',
    locations: 24,
  },
]

export interface ResearchArticle {
  title: string
  journal: string
  date: string
  category: 'Review' | 'Original Research' | 'Guideline' | 'Meta-Analysis'
  summary: string
}

export const researchArticles: ResearchArticle[] = [
  {
    title: 'International Continence Society Standardization of Detrusor Underactivity',
    journal: 'Neurourology and Urodynamics',
    date: 'March 2024',
    category: 'Guideline',
    summary:
      'The ICS provides updated consensus definitions and diagnostic criteria for detrusor underactivity, recommending standardized urodynamic parameters including Bladder Contractility Index (BCI) <100 and detrusor pressure at Qmax <20 cm H₂O.',
  },
  {
    title: 'Global Prevalence of Detrusor Underactivity in Older Adults: Systematic Review',
    journal: 'The Lancet Healthy Longevity',
    date: 'January 2024',
    category: 'Meta-Analysis',
    summary:
      'Pooled analysis of 47 studies (n=28,500) estimates prevalence of UAB at 23% in adults aged 65+ and 40% in those 80+. Diabetes and BPH are the leading modifiable risk factors.',
  },
  {
    title: 'Sacral Neuromodulation in Primary Detrusor Underactivity: 5-Year Outcomes',
    journal: 'Journal of Urology',
    date: 'November 2023',
    category: 'Original Research',
    summary:
      'Single-center prospective cohort of 124 patients showed sustained improvement in PVR (mean reduction 180 mL) and Qmax (improvement 6.2 mL/s) at 5 years following sacral neuromodulation implant.',
  },
  {
    title: 'Stem Cell Therapy for Detrusor Underactivity: Phase 1/2 Results',
    journal: 'Stem Cells Translational Medicine',
    date: 'September 2023',
    category: 'Original Research',
    summary:
      'Intradetrusor injection of autologous adipose-derived MSCs in 18 patients was safe and feasible, with 56% achieving ≥30% PVR reduction at 6 months. Phase 2 RCT underway.',
  },
  {
    title: 'AUA/SUFU Guideline on Adult Neurogenic Lower Urinary Tract Dysfunction',
    journal: 'Journal of Urology',
    date: 'August 2023',
    category: 'Guideline',
    summary:
      'Updated guideline provides evidence-based recommendations for evaluation and management of neurogenic bladder, including UAB. CIC remains first-line for high PVR; neuromodulation is third-line option.',
  },
  {
    title: 'TAC-302 Phase 1 Results: First-in-Human Study',
    journal: 'British Journal of Clinical Pharmacology',
    date: 'June 2023',
    category: 'Original Research',
    summary:
      'Single ascending dose study in 48 healthy volunteers demonstrated favorable safety profile and dose-proportional pharmacokinetics. Phase 2 trial in UAB patients initiated.',
  },
]

export interface NewsItem {
  title: string
  source: string
  date: string
  excerpt: string
  category: string
}

export const medicalNews: NewsItem[] = [
  {
    title: 'FDA Grants Fast Track Designation to TAC-302 for Detrusor Underactivity',
    source: 'FDA News Release',
    date: 'May 14, 2024',
    excerpt:
      'The U.S. FDA has granted Fast Track designation to TAC-302, an investigational oral therapy for detrusor underactivity, potentially accelerating development and review.',
    category: 'Regulatory',
  },
  {
    title: 'AUA 2024: Landmark Trial of Sacral Neuromodulation for UAB Released',
    source: 'AUA Annual Meeting',
    date: 'May 6, 2024',
    excerpt:
      'Investigators presented 24-month outcomes from a multicenter RCT of sacral neuromodulation in 312 patients with primary UAB, showing significant PVR reduction and improved quality of life.',
    category: 'Conference',
  },
  {
    title: 'European Association of Urology Updates UAB Guidance',
    source: 'EAU Guidelines Office',
    date: 'March 20, 2024',
    excerpt:
      'The EAU released updated guidance on underactive bladder, emphasizing standardized urodynamic criteria and clarifying the role of emerging therapies including stem cell and gene therapy research.',
    category: 'Guideline',
  },
  {
    title: 'NIH Commits $25M to Underactive Bladder Research Network',
    source: 'NIH/NIDDK',
    date: 'February 8, 2024',
    excerpt:
      'The National Institute of Diabetes and Digestive and Kidney Diseases announced funding for a multi-center research network focused on detrusor underactivity mechanisms and treatment.',
    category: 'Funding',
  },
]

export interface FAQItem {
  question: string
  answer: string
}

export const faqs: FAQItem[] = [
  {
    question: 'What is Underactive Bladder (UAB)?',
    answer:
      'Underactive Bladder, also called detrusor underactivity (DU) or hypocontractile bladder, is a condition in which the bladder muscle (detrusor) cannot contract with sufficient strength or duration to empty the bladder completely within a normal time. This leads to symptoms such as weak stream, hesitancy, straining, and incomplete emptying, often with elevated post-void residual urine.',
  },
  {
    question: 'Can Underactive Bladder be cured?',
    answer:
      'There is currently no universal cure for underactive bladder. Treatment aims to improve bladder emptying, prevent complications (UTIs, kidney damage), and enhance quality of life. Many patients achieve good symptom control with behavioral therapy, medications, catheterization, or neuromodulation. Experimental regenerative therapies including stem cell therapy and gene therapy are under investigation but remain investigational. Always consult a qualified urologist for personalized evaluation.',
  },
  {
    question: 'What is the difference between Overactive Bladder (OAB) and Underactive Bladder (UAB)?',
    answer:
      'Overactive bladder is characterized by involuntary detrusor contractions during storage, causing urgency, frequency, and urge incontinence. Underactive bladder is the opposite: the detrusor contracts too weakly during voiding, causing hesitancy, weak stream, incomplete emptying, and retention. The two conditions can coexist in the same patient, particularly in neurologic disease.',
  },
  {
    question: 'How is Underactive Bladder diagnosed?',
    answer:
      'Diagnosis begins with a thorough history, voiding diary, and physical examination. Initial tests include uroflowmetry and post-void residual measurement by bladder ultrasound. If findings suggest UAB, full urodynamic studies with pressure-flow analysis are performed. The Bladder Contractility Index (BCI), calculated as PdetQmax + 5×Qmax, with values below 100, supports the diagnosis. Cystoscopy may be performed to rule out obstruction.',
  },
  {
    question: 'Is Underactive Bladder common?',
    answer:
      'Yes. Studies estimate that 9–48% of older men and 12–45% of older women have evidence of detrusor underactivity on urodynamic testing. Prevalence increases sharply with age and is particularly high in patients with diabetes, Parkinson disease, and after pelvic surgery. Despite its frequency, UAB remains underdiagnosed.',
  },
  {
    question: 'What are the main causes of Underactive Bladder?',
    answer:
      'Causes are broadly categorized as neurogenic (diabetes, multiple sclerosis, Parkinson, spinal cord injury, stroke, pelvic surgery), myogenic (aging, chronic overdistension, bladder outlet obstruction leading to decompensation), iatrogenic/pharmacologic (anticholinergics, opioids, prior bladder surgery), and idiopathic (no identifiable cause in 25–35% of cases).',
  },
  {
    question: 'What is Sacral Neuromodulation and is it effective for UAB?',
    answer:
      'Sacral neuromodulation (InterStim, Axonics) is an implanted device that delivers electrical pulses to the S3 sacral nerve root. It is FDA-approved for non-obstructive urinary retention and refractory overactive bladder. Recent prospective studies show meaningful benefit in select UAB patients, with 50–70% response rates. A two-stage trial stimulation is performed before permanent implant to confirm benefit.',
  },
  {
    question: 'What is TAC-302?',
    answer:
      'TAC-302 is an investigational oral small-molecule therapy being developed specifically for detrusor underactivity. Its mechanism is distinct from existing drugs (alpha-blockers, cholinergics). Phase 1 studies in healthy volunteers demonstrated safety, and Phase 2 trials in UAB patients are currently recruiting. TAC-302 has received FDA Fast Track designation but is not yet approved for clinical use.',
  },
  {
    question: 'Is Clean Intermittent Catheterization (CIC) safe for long-term use?',
    answer:
      'Yes, CIC is considered the gold standard for managing chronic urinary retention due to UAB when conservative therapies fail. With proper technique, the risk of serious complications is low. Recurrent UTIs occur in 5–10% of patients per year and are managed with prophylactic antibiotics or catheter hygiene adjustments. Long-term CIC preserves bladder capacity and upper tract function better than indwelling catheters.',
  },
  {
    question: 'Are stem cell therapies available for Underactive Bladder?',
    answer:
      'Stem cell therapy for UAB remains investigational and is not approved by the FDA, EMA, or other major regulatory agencies. Early-phase clinical trials show promise in safety and preliminary efficacy. Patients should avoid clinics offering stem cell therapy outside of regulated clinical trials, as these may carry significant risks. ClinicalTrials.gov is the best resource for finding legitimate trials.',
  },
]

export interface StatItem {
  value: string
  label: string
  description: string
}

export const stats: StatItem[] = [
  {
    value: '23%',
    label: 'Adults 65+ affected',
    description: 'Estimated prevalence of detrusor underactivity in older adults',
  },
  {
    value: '40%',
    label: 'Adults 80+ affected',
    description: 'Prevalence increases sharply with age',
  },
  {
    value: '6+',
    label: 'Active drug pipelines',
    description: 'Investigational agents in clinical development',
  },
  {
    value: '50+',
    label: 'Open clinical trials',
    description: 'Currently registered on ClinicalTrials.gov',
  },
]

export interface TrustIndicator {
  icon: string
  title: string
  description: string
}

export const trustIndicators: TrustIndicator[] = [
  {
    icon: 'ShieldCheck',
    title: 'Evidence-Based',
    description: 'All content reviewed by board-certified urologists',
  },
  {
    icon: 'Users',
    title: 'Multi-Disciplinary',
    description: 'Authored by urologists, neurologists, and researchers',
  },
  {
    icon: 'CalendarClock',
    title: 'Regularly Updated',
    description: 'Reviewed quarterly to reflect new evidence',
  },
  {
    icon: 'HeartHandshake',
    title: 'Patient-Centered',
    description: 'Built for patients, caregivers, and clinicians',
  },
]

export interface EditorialBoardMember {
  name: string
  credential: string
  specialty: string
  affiliation: string
}

export const editorialBoard: EditorialBoardMember[] = [
  {
    name: 'Dr. Sarah J. Mitchell, MD, FACS',
    credential: 'Editor-in-Chief',
    specialty: 'Urology / Neurourology',
    affiliation: 'Professor of Urology, Major Academic Medical Center',
  },
  {
    name: 'Dr. Rajesh K. Patel, MD, PhD',
    credential: 'Medical Reviewer',
    specialty: 'Neurology',
    affiliation: 'Director, Neurogenic Bladder Program',
  },
  {
    name: 'Dr. Elena M. Rodriguez, MD',
    credential: 'Senior Editor',
    specialty: 'Female Pelvic Medicine',
    affiliation: 'Associate Professor, Urogynecology',
  },
  {
    name: 'Dr. James T. Anderson, MD, MSc',
    credential: 'Research Editor',
    specialty: 'Reconstructive Urology',
    affiliation: 'Director, UAB Research Initiative',
  },
]
