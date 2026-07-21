export interface Step {
  stepNumber: number;
  title: string;
  shortDesc: string;
  detailDesc: string;
  equipmentUsed: string;
  qualityControlPoint: string;
  iconName: string;
}

export const MANUFACTURING_STEPS: Step[] = [
  {
    stepNumber: 1,
    title: 'Raw Material Procurement & Fingerprinting',
    shortDesc: 'Sustainable wild-crafting and organic contract farming with GPS geographical origin logging.',
    detailDesc: 'Every batch of raw botanical roots, leaves, or resin is ethically harvested at peak phytochemical concentration. Botanists perform HPTLC fingerprinting and organoleptic verification upon arrival at our warehouse to confirm botanical species authenticity.',
    equipmentUsed: 'HPTLC (High-Performance Thin-Layer Chromatography), Digital Moisture Meters, Analytical Balances',
    qualityControlPoint: 'Species verification, moisture content < 8%, zero adulterants or foreign matter',
    iconName: 'Sprout'
  },
  {
    stepNumber: 2,
    title: 'Cleaning, Sifting & Micro-Decontamination',
    shortDesc: 'Multi-stage air-jet cleaning, mechanical sifting, and eco-friendly sterilization.',
    detailDesc: 'Botanicals are thoroughly washed with de-ionized water, passed through magnetic separators to eliminate metallic debris, and mechanically sifted into uniform mesh sizes to maximize solvent contact surface area.',
    equipmentUsed: 'Vibratory Sifters, Air-Jet Cleaners, High-Gauss Rare Earth Magnetic Separators',
    qualityControlPoint: 'Foreign matter < 0.1%, zero metallic contamination, uniform particle size distribution',
    iconName: 'Sparkles'
  },
  {
    stepNumber: 3,
    title: 'Counter-Current Multi-Stage Extraction',
    shortDesc: 'Temperature-controlled SS316L extraction vessels using food-grade hydro-alcoholic solvents.',
    detailDesc: 'Cleaned biomass undergoes counter-current extraction in multi-stage SS316L extractors. Temperature, pressure, and solvent ratio are dynamically regulated via PLC automation to preserve heat-sensitive active phytochemical markers (e.g. Withanolides, Curcuminoids).',
    equipmentUsed: 'SS316L Counter-Current Extractors, Automated Vacuum Percolators, PLC Control Panels',
    qualityControlPoint: 'Extraction efficiency > 96%, monitored solvent flow rate & thermal stability',
    iconName: 'FlaskConical'
  },
  {
    stepNumber: 4,
    title: 'Centrifugal Clarification & Micro-Filtration',
    shortDesc: 'High-speed disc-stack centrifuges remove fine insoluble fibers down to 0.2 microns.',
    detailDesc: 'The liquid extract miscella is pumped through high-g disc stack centrifuges and multi-plate stainless steel sparkler filters to yield a crystal-clear liquid extract free of cell wall debris.',
    equipmentUsed: 'Disc-Stack Centrifuges, Sparkler Polypropylene & SS Filter Presses, Cartridge Filters',
    qualityControlPoint: 'Turbidity < 5 NTU, complete removal of micro-particulates',
    iconName: 'Filter'
  },
  {
    stepNumber: 5,
    title: 'Low-Temperature Vacuum Evaporation',
    shortDesc: 'Falling film vacuum evaporators concentrate miscella while recovering 99.5% of extraction solvents.',
    detailDesc: 'Solvent is rapidly evaporated at low temperatures (< 45°C) under high vacuum (700 mmHg). This prevents thermal degradation of key active markers while achieving a 99.5% solvent recovery rate for eco-friendly sustainability.',
    equipmentUsed: 'Triple-Effect Falling Film Evaporators, Agitated Thin Film Evaporators (ATFE)',
    qualityControlPoint: 'Concentrated total solids (Brix) verification, solvent recovery monitoring',
    iconName: 'Gauge'
  },
  {
    stepNumber: 6,
    title: 'Spray Drying & Fluid Bed Granulation',
    shortDesc: 'Instant co-current spray dryer transforms liquid concentrate into homogenous free-flowing powder.',
    detailDesc: 'Concentrated extract syrup is atomized into microscopic droplets inside a Class 100,000 cleanroom spray dryer tower. Hot sterile air instantly dries the mist into a uniform, free-flowing powder with tailored bulk density.',
    equipmentUsed: 'High-Capacity Co-Current Spray Dryer, Fluid Bed Dryer & Granulator (FBD)',
    qualityControlPoint: 'Moisture content < 5%, particle size consistency (80-100 mesh), bulk density targets',
    iconName: 'Wind'
  },
  {
    stepNumber: 7,
    title: 'Analytical Quality Assurance & Assay Testing',
    shortDesc: 'Every lot is rigorously tested for active marker purity, heavy metals, micro-biology & PAHs.',
    detailDesc: 'Our ISO 17025 accredited quality laboratory conducts HPLC quantitative assays, GC-MS residual solvent screening, ICP-MS heavy metal detection, pesticide residue profiling, and 5-day microbiological incubation.',
    equipmentUsed: 'Waters HPLC with PDA Detector, Agilent GC-MS, ICP-MS Heavy Metal Spectrometer',
    qualityControlPoint: 'Active Marker % conformance, heavy metals < 10 ppm, pesticide residue < EU limit',
    iconName: 'ShieldCheck'
  },
  {
    stepNumber: 8,
    title: 'Hygienic Cleanroom Packaging',
    shortDesc: 'Double-liner polyethylene bag sealing inside aluminum foil drums in Class 100,000 cleanroom.',
    detailDesc: 'Powders pass through 200-mesh inline sifters and metal detectors before being sealed in food-grade polyethylene inner bags with silica desiccants inside lightproof fiber/aluminum drums.',
    equipmentUsed: 'Inline Lock Metal Detector, Automated Vacuum Drum Sealer, Nitrogen Purge Station',
    qualityControlPoint: 'Zero metal detection, vacuum seal integrity, lot & barcode traceability',
    iconName: 'PackageCheck'
  },
  {
    stepNumber: 9,
    title: 'Global Export & Cold-Chain Logistics',
    shortDesc: 'Containerized air and ocean freight shipping with real-time temperature & humidity logging.',
    detailDesc: 'Palletized shipments are stretch-wrapped, custom-cleared, and dispatched via certified freight partners (FOB, CIF, DDP) to North America, Europe, Asia-Pacific, and the Middle East with comprehensive regulatory export documentation.',
    equipmentUsed: 'IoT Temperature/Humidity Data Loggers, Custom Pallet Wrapping, Export Freight Containers',
    qualityControlPoint: 'Incoterms documentation complete (COA, MSDS, Certificate of Origin, Phytosanitary)',
    iconName: 'Globe'
  }
];

export const CAPACITIES = [
  { metric: 'Annual Extraction Capacity', value: '50,000 MT', desc: 'Raw botanical biomass processed per annum across 3 production lines' },
  { metric: 'Spray Drying Capacity', value: '15,000 MT', desc: 'Finished standardized extract powder output per year' },
  { metric: 'Facility Footprint', value: '120,000 Sq. Ft.', desc: 'State-of-the-art manufacturing campus & cleanroom facilities' },
  { metric: 'Cleanroom Area', value: '25,000 Sq. Ft.', desc: 'Class 100,000 (ISO Class 8) climate-controlled processing environment' },
  { metric: 'Solvent Recovery Rate', value: '99.5%', desc: 'Closed-loop eco-friendly zero liquid discharge sustainability' },
  { metric: 'Global Export Footprint', value: '45+ Countries', desc: 'Serving Fortune 500 pharmaceutical & nutraceutical manufacturers' }
];
