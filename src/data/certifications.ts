export interface Certification {
  id: string;
  name: string;
  code: string;
  issuer: string;
  validity: string;
  registrationNumber: string;
  description: string;
  complianceDetails: string[];
  badgeColor: string;
  imagePlaceholder: string;
  scope: string;
}

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: 'cert-gmp',
    name: 'WHO-cGMP Certification',
    code: 'cGMP',
    issuer: 'FDA / WHO Compliance Board',
    validity: '2027-12-31',
    registrationNumber: 'GMP-IND-2024-8892',
    description: 'Current Good Manufacturing Practice compliance certifying that our manufacturing facilities, sanitation, quality control, equipment validation, and process workflows meet WHO and US FDA pharmaceutical standards.',
    complianceDetails: [
      'Cleanroom Class 100,000 environmental control',
      'SS316L pharmaceutical grade contact machinery',
      'Batch-to-batch complete analytical traceability',
      'Validated CIP (Clean-in-Place) and SIP systems'
    ],
    badgeColor: 'from-emerald-600 to-teal-700',
    imagePlaceholder: 'WHO-cGMP Official Certificate of Compliance',
    scope: 'Pharmaceutical & Nutraceutical Botanical Extract Production'
  },
  {
    id: 'cert-iso-9001',
    name: 'ISO 9001:2015 Quality Management',
    code: 'ISO 9001:2015',
    issuer: 'TÜV SÜD South Asia',
    validity: '2028-06-30',
    registrationNumber: 'ISO-9001-99812-IN',
    description: 'International benchmark for Quality Management Systems covering raw material sourcing, chemical extraction, standardized spray-drying, analytical laboratory testing, packaging, and customer service.',
    complianceDetails: [
      'Continuous process optimization and risk management',
      '100% Vendor audit & raw material qualification',
      'Strict corrective & preventive action (CAPA) framework'
    ],
    badgeColor: 'from-blue-600 to-indigo-700',
    imagePlaceholder: 'ISO 9001:2015 Certified Certificate',
    scope: 'Global Sourcing, R&D, Extraction & Export of Botanical Raw Materials'
  },
  {
    id: 'cert-haccp',
    name: 'HACCP Food Safety Management',
    code: 'HACCP',
    issuer: 'SGS International Services',
    validity: '2027-09-15',
    registrationNumber: 'HACCP-2024-771',
    description: 'Hazard Analysis Critical Control Point (HACCP) system ensuring total elimination of biological, chemical, physical, and radiological contamination across our botanical extraction pipeline.',
    complianceDetails: [
      'Identified Critical Control Points (CCPs) for heat & evaporation',
      'Automated magnet separators and mesh filtration (200 mesh)',
      'Allergen cross-contamination prevention protocol'
    ],
    badgeColor: 'from-emerald-700 to-green-800',
    imagePlaceholder: 'HACCP Certified Safety Compliance',
    scope: 'Botanical Powders, Functional Food Ingredients & Plant Proteins'
  },
  {
    id: 'cert-usda-organic',
    name: 'USDA & EU Organic Certification',
    code: 'Organic (USDA/EU)',
    issuer: 'OneCert International / NPOP India',
    validity: '2027-11-30',
    registrationNumber: 'ORG-IND-541209',
    description: 'Guarantees that our certified organic botanical extracts (e.g. Ashwagandha, Moringa, Turmeric) are cultivated without synthetic fertilizers, GMOs, or chemical pesticides.',
    complianceDetails: [
      'Direct contract farming with certified organic grower co-ops',
      'Zero synthetic pesticide or herbicide residues verified by LC-MS/MS',
      '100% organic solvent processing options (Water / Bio-Ethanol)'
    ],
    badgeColor: 'from-green-600 to-emerald-700',
    imagePlaceholder: 'USDA Organic & EU Organic Dual Certificate',
    scope: 'Organic Botanical Cultivation & Hydro-Extraction Processing'
  },
  {
    id: 'cert-halal',
    name: 'HALAL International Certification',
    code: 'HALAL',
    issuer: 'Halal India / JAMIAT Halal Trust',
    validity: '2028-03-31',
    registrationNumber: 'HAL-2024-0098',
    description: 'Certifies that all manufacturing procedures, solvents, equipment cleaning agents, and packaging containers strictly conform to Islamic dietary laws.',
    complianceDetails: [
      'Zero porcine or prohibited animal-derived ingredients or enzymes',
      'Non-alcoholic extraction options for Middle East & S.E. Asian markets',
      'Segregated storage and dedicated clean production drums'
    ],
    badgeColor: 'from-teal-600 to-cyan-700',
    imagePlaceholder: 'Halal Certified Global Supplier',
    scope: 'Global Export of Halal Certified Plant Extracts & Oils'
  },
  {
    id: 'cert-kosher',
    name: 'KOSHER Certification',
    code: 'KOSHER',
    issuer: 'Star-K Kosher Certification',
    validity: '2027-10-31',
    registrationNumber: 'KSH-STK-4412',
    description: 'Validates that our manufacturing facility, raw materials, processing aids, and cleaning protocols comply with strict Jewish dietary laws under annual Rabbi inspection.',
    complianceDetails: [
      'Pareve status across all botanical extract product lines',
      'Kosher for Passover certification available upon customer request',
      'Strict equipment segregation'
    ],
    badgeColor: 'from-sky-700 to-blue-800',
    imagePlaceholder: 'Star-K Kosher Certificate of Compliance',
    scope: 'Standardized Botanical Powders, Extracts & Active Markers'
  },
  {
    id: 'cert-fssai',
    name: 'FSSAI Central Export License',
    code: 'FSSAI Central',
    issuer: 'Food Safety and Standards Authority of India',
    validity: '2029-01-15',
    registrationNumber: '10019042005510',
    description: 'Apex food safety license issued by the Government of India authorizing large-scale commercial processing, manufacturing, testing, and international export of dietary ingredients.',
    complianceDetails: [
      'Monitored by FSSAI Central Food Testing Laboratories',
      'Compliance with Indian Food Safety and Standards (Nutraceuticals) Regs',
      'State-of-the-art in-house quality control testing lab'
    ],
    badgeColor: 'from-amber-600 to-orange-700',
    imagePlaceholder: 'FSSAI Central Manufacturing & Export License',
    scope: 'Manufacturer & Exporter of Food Ingredients & Nutraceuticals'
  },
  {
    id: 'cert-fda',
    name: 'US FDA Facility Registration',
    code: 'US FDA Registered',
    issuer: 'US Food and Drug Administration',
    validity: '2026-12-31',
    registrationNumber: 'FDA-FEI-198402199',
    description: 'Registered with the United States FDA under the Food Safety Modernization Act (FSMA) for direct export of botanical ingredients and nutraceutical raw materials into North America.',
    complianceDetails: [
      'FSVP (Foreign Supplier Verification Program) compliant',
      'Regular Dun & Bradstreet audit validation',
      'US-DMF (Drug Master File) submissions available for key extract APIs'
    ],
    badgeColor: 'from-slate-700 to-slate-900',
    imagePlaceholder: 'US FDA Establishment Registration Certificate',
    scope: 'Facility Registration for US Export & Distribution'
  }
];
