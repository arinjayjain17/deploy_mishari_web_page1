import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Mishari Phytolabs | Global Manufacturer of Botanical Extracts & Phytochemicals',
    template: '%s | Mishari Phytolabs Private Limited'
  },
  description: 'Mishari Phytolabs Private Limited is a WHO-cGMP & ISO 9001 certified Indian manufacturer and global exporter of standardized herbal extracts, phytochemicals, nutraceutical raw materials, plant proteins, and liposomal formulations.',
  keywords: [
    'Botanical Extracts Manufacturer India',
    'Standardized Ashwagandha Extract Withanolides',
    'Curcumin 95% Manufacturer',
    'Nutraceutical Raw Material Supplier',
    'Phytochemical Active Ingredients',
    'WHO-cGMP Herbal Extract Factory',
    'US FDA Registered Botanical Exporter'
  ],
  authors: [{ name: 'Mishari Phytolabs Private Limited' }],
  creator: 'Mishari Phytolabs',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.mishariphytolabs.com',
    title: 'Mishari Phytolabs | Global Manufacturer of Botanical Extracts & Phytochemicals',
    description: 'Premier Indian manufacturer supplying WHO-cGMP certified standardized herbal extracts and phytochemicals to global pharmaceutical & nutraceutical leaders.',
    siteName: 'Mishari Phytolabs',
    images: [
      {
        url: 'https://www.mishariphytolabs.com/logo.png',
        width: 1000,
        height: 1000,
        alt: 'Mishari Phytolabs Official Logo',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mishari Phytolabs | Premium Botanical Ingredients',
    description: 'WHO-cGMP & ISO 9001 certified botanical extraction facility serving 45+ export markets.'
  },
  robots: {
    index: true,
    follow: true,
  }
};

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': 'Mishari Phytolabs Private Limited',
  'url': 'https://www.mishariphytolabs.com',
  'logo': 'https://www.mishariphytolabs.com/logo.png',
  'email': 'director@mishariphytolabs.in',
  'telephone': '+91-9001969764',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': '1 Ka 38, Manu Marg',
    'addressLocality': 'Alwar',
    'addressRegion': 'Rajasthan',
    'addressCountry': 'India'
  },
  'contactPoint': {
    '@type': 'ContactPoint',
    'telephone': '+91-9001969764',
    'email': 'director@mishariphytolabs.in',
    'contactType': 'sales & management',
    'areaServed': 'Worldwide',
    'availableLanguage': ['English', 'Hindi']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FAFCF9] text-slate-900 font-sans">
        {children}
      </body>
    </html>
  );
}
