import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://uab-research.org";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Underactive Bladder Research & Awareness Platform | Evidence-Based Medical Resource",
    template: "%s | UAB Research Platform",
  },
  description:
    "The world's most trusted educational platform for Underactive Bladder (UAB) / Hypocontractile Bladder / Detrusor Underactivity. Evidence-based information on symptoms, diagnosis, treatments, clinical trials, and research for patients, caregivers, and healthcare professionals.",
  keywords: [
    "underactive bladder",
    "hypocontractile bladder",
    "detrusor underactivity",
    "UAB",
    "DU",
    "bladder dysfunction",
    "urodynamics",
    "sacral neuromodulation",
    "TAC-302",
    "ZG-802",
    "clean intermittent catheterization",
    "neurogenic bladder",
    "urinary retention",
    "post void residual",
    "bladder contractility index",
  ],
  authors: [{ name: "UAB Research Platform Editorial Team" }],
  creator: "UAB Research Platform",
  publisher: "UAB Research Platform",
  applicationName: "UAB Research Platform",
  category: "Medical Education",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "en-GB": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Underactive Bladder Research & Awareness Platform",
    description:
      "Evidence-based medical information on Underactive Bladder (UAB) / Detrusor Underactivity for patients, caregivers, and healthcare professionals.",
    url: SITE_URL,
    siteName: "UAB Research Platform",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Underactive Bladder Research Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Underactive Bladder Research & Awareness Platform",
    description:
      "Evidence-based information on Underactive Bladder (UAB) / Detrusor Underactivity.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-token",
  },
  other: {
    "msapplication-TileColor": "#0a1f44",
    "theme-color": "#0a1f44",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0a1f44" },
    { media: "(prefers-color-scheme: dark)", color: "#0a1f44" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  name: "UAB Research Platform",
  alternateName: "Underactive Bladder Research & Awareness Platform",
  url: SITE_URL,
  description:
    "Educational platform dedicated to Underactive Bladder (UAB) / Hypocontractile Bladder / Detrusor Underactivity research and awareness.",
  medicalSpecialty: ["Urology", "Neurology"],
  areaServed: "Global",
  knowsAbout: [
    "Underactive Bladder",
    "Detrusor Underactivity",
    "Hypocontractile Bladder",
    "Urodynamics",
    "Sacral Neuromodulation",
    "Clean Intermittent Catheterization",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "UAB Research Platform",
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const medicalConditionSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalCondition",
  name: "Underactive Bladder",
  alternateName: ["Detrusor Underactivity", "Hypocontractile Bladder", "DU"],
  description:
    "Underactive Bladder (UAB) is a condition characterized by the detrusor muscle's inability to contract with sufficient strength or duration to empty the bladder completely within a normal time frame, resulting in incomplete bladder emptying or urinary retention.",
  possibleTreatment: [
    "Clean Intermittent Catheterization",
    "Sacral Neuromodulation",
    "Alpha Blockers",
    "Pelvic Floor Therapy",
    "Posterior Tibial Nerve Stimulation",
  ],
  signOrSymptom: [
    "Hesitancy",
    "Straining to void",
    "Weak urine stream",
    "Incomplete emptying",
    "Post-void residual urine",
    "Urinary retention",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Combine all JSON-LD schemas into a single script tag in <head>.
  // This minimizes the surface area for browser-extension interference
  // and keeps the body React tree clean (which prevents Radix useId
  // hydration mismatches in client components like NavigationMenu).
  const combinedSchema = [
    organizationSchema,
    websiteSchema,
    medicalConditionSchema,
  ];

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${inter.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
