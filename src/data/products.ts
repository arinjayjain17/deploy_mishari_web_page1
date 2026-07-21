export interface Product {
  id: string;
  name: string;
  botanicalName: string;
  commonName: string;
  category: 'herbal-extracts' | 'botanical-powders' | 'nutraceutical-ingredients' | 'plant-proteins' | 'essential-oils' | 'ayurvedic-ingredients' | 'customized-ingredients';
  categoryLabel: string;
  slug: string;
  plantPartUsed: string;
  activeMarker: string;
  standardization: string;
  extractionRatio: string;
  appearance: string;
  solubility: string;
  grade: 'Pharma Grade' | 'Nutraceutical Grade' | 'Cosmetic Grade' | 'Food Grade';
  industries: string[];
  applications: string[];
  packaging: string;
  shelfLife: string;
  storage: string;
  moq: string;
  hasCoa: boolean;
  hasMsds: boolean;
  hasTds: boolean;
  featured: boolean;
  description: string;
  keyBenefits: string[];
  assayMethod: string;
  heavyMetals: string;
  microbialLimit: string;
}

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'prod-1',
    name: 'Ashwagandha Root Extract (Standardized Withanolides)',
    botanicalName: 'Withania somnifera',
    commonName: 'Indian Ginseng / Winter Cherry',
    category: 'herbal-extracts',
    categoryLabel: 'Herbal Extracts',
    slug: 'ashwagandha-extract',
    plantPartUsed: 'Roots (Sustainably Farmed)',
    activeMarker: 'Withanolides (5% to 10% by HPLC / Gravimetry)',
    standardization: '5.0% - 10.0% Withanolides',
    extractionRatio: '10:1 to 15:1',
    appearance: 'Fine Light Brown to Tan Powder',
    solubility: 'Soluble in Water/Ethanol Hydro-alcoholic system',
    grade: 'Pharma Grade',
    industries: ['Nutraceutical', 'Pharmaceutical', 'Sports Nutrition', 'Cosmetics'],
    applications: ['Stress & Cortisol Management', 'Cognitive Support', 'Adaptogenic Blends', 'Sleep Formulas'],
    packaging: '25 kg Fiber Drums with Food-grade Double Polyethylene Liners',
    shelfLife: '36 Months from Date of Manufacturing',
    storage: 'Store in cool, dry place away from direct sunlight & humidity (< 25°C)',
    moq: '25 kg',
    hasCoa: true,
    hasMsds: true,
    hasTds: true,
    featured: true,
    description: 'Mishari Phytolabs premium Ashwagandha extract is produced from organic Indian Withania somnifera roots using eco-friendly hydro-alcoholic extraction. Standardized up to 10% Withanolides with low Withaferin A content for superior adaptogenic potency.',
    keyBenefits: [
      'Clinically documented stress reduction & cortisol modulation',
      'Supports stamina, muscle strength & endurance recovery',
      'Zero synthetic solvents or harmful chemical residues',
      'Non-GMO, Organic certified & Kosher/Halal compliant'
    ],
    assayMethod: 'HPLC / USP Method',
    heavyMetals: 'Total Heavy Metals < 10 ppm (Pb < 2ppm, As < 1ppm, Cd < 1ppm, Hg < 0.1ppm)',
    microbialLimit: 'Total Plate Count < 1,000 CFU/g, Yeast & Mold < 100 CFU/g, Pathogens Negative'
  },
  {
    id: 'prod-2',
    name: 'Curcumin 95% Standardized Extract',
    botanicalName: 'Curcuma longa L.',
    commonName: 'Turmeric Extract',
    category: 'herbal-extracts',
    categoryLabel: 'Herbal Extracts',
    slug: 'curcumin-extract-95',
    plantPartUsed: 'Rhizomes',
    activeMarker: 'Total Curcuminoids (Curcumin, Demethoxycurcumin, Bisdemethoxycurcumin)',
    standardization: '≥ 95.0% Total Curcuminoids by HPLC',
    extractionRatio: '25:1 to 30:1',
    appearance: 'Vibrant Yellow-Orange Crystalline Powder',
    solubility: 'Soluble in Ethanol, Acetone & Organic Solvents; Water dispersible available',
    grade: 'Pharma Grade',
    industries: ['Pharmaceutical', 'Nutraceutical', 'Cosmetics', 'Food & Beverage'],
    applications: ['Anti-inflammatory Formulations', 'Joint Health', 'Antioxidant Complexes', 'Skincare Brightening'],
    packaging: '25 kg HD Polyethylene Drums with aluminum foil moisture barrier',
    shelfLife: '36 Months',
    storage: 'Keep tightly closed in light-resistant containers',
    moq: '25 kg',
    hasCoa: true,
    hasMsds: true,
    hasTds: true,
    featured: true,
    description: 'Ultra-pure Curcuminoid extract refined to 95%+ total curcuminoids. Utilizes advanced solvent recovery and crystallization for high bioactivity and purity suitable for pharmaceutical tablets, capsules, and softgels.',
    keyBenefits: [
      'High-potency natural anti-inflammatory & cell antioxidant',
      'Fully compliant with EP, USP & IP pharmacopoeial limits',
      'Pesticide-free certified raw turmeric rhizomes',
      'Custom water-soluble and liposomal bio-enhanced grades available'
    ],
    assayMethod: 'HPLC / UV-Vis Spectrophotometry',
    heavyMetals: 'Total Heavy Metals < 10 ppm',
    microbialLimit: 'TPC < 1,000 CFU/g, Salmonella & E. coli Absent'
  },
  {
    id: 'prod-3',
    name: 'Bacopa Monnieri Extract (50% Bacosides)',
    botanicalName: 'Bacopa monnieri',
    commonName: 'Brahmi Extract',
    category: 'ayurvedic-ingredients',
    categoryLabel: 'Ayurvedic Ingredients',
    slug: 'bacopa-monnieri-extract',
    plantPartUsed: 'Whole Herb',
    activeMarker: 'Bacosides A & B (by HPLC / Spectrophotometry)',
    standardization: '20% to 50% Bacosides',
    extractionRatio: '12:1',
    appearance: 'Fine Light Greenish-Brown Powder',
    solubility: 'Soluble in Hydro-alcoholic Media',
    grade: 'Nutraceutical Grade',
    industries: ['Nutraceutical', 'Pharmaceutical', 'Sports Nutrition'],
    applications: ['Nootropics', 'Brain Health & Memory Enhancement', 'Focus & Mental Clarity'],
    packaging: '25 kg Fiber Drum',
    shelfLife: '36 Months',
    storage: 'Cool, dry, dark environment below 25°C',
    moq: '25 kg',
    hasCoa: true,
    hasMsds: true,
    hasTds: true,
    featured: true,
    description: 'Brahmi extract rich in bacosides, validated to cross the blood-brain barrier and enhance synaptic neurotransmission. Ideal for premium memory and focus formulations.',
    keyBenefits: [
      'Nootropic memory enhancement & neuro-protective activity',
      'Extracted via low-temperature vacuum evaporation',
      'Rigorous testing for heavy metals and PAHs'
    ],
    assayMethod: 'HPLC Assay',
    heavyMetals: 'Total Heavy Metals < 10 ppm',
    microbialLimit: 'Microbiology compliant with USP <2021>'
  },
  {
    id: 'prod-4',
    name: 'Boswellia Serrata Extract (65% Boswellic Acids / 30% AKBA)',
    botanicalName: 'Boswellia serrata',
    commonName: 'Indian Frankincense / Salai Guggul',
    category: 'herbal-extracts',
    categoryLabel: 'Herbal Extracts',
    slug: 'boswellia-serrata-extract',
    plantPartUsed: 'Gum Resin',
    activeMarker: 'Total Boswellic Acids / 30% 3-O-acetyl-11-keto-β-boswellic acid (AKBA)',
    standardization: '65% Boswellic Acids / 30% AKBA',
    extractionRatio: '8:1',
    appearance: 'Off-White to Creamish Powder',
    solubility: 'Dispersible in Alcohol & Oils',
    grade: 'Pharma Grade',
    industries: ['Pharmaceutical', 'Nutraceutical', 'Cosmetics'],
    applications: ['Joint Mobility & Osteoarthritis Support', 'Respiratory Health', 'Anti-aging Topicals'],
    packaging: '25 kg Drums',
    shelfLife: '36 Months',
    storage: 'Store in dry place away from heat',
    moq: '25 kg',
    hasCoa: true,
    hasMsds: true,
    hasTds: true,
    featured: true,
    description: 'Boswellia serrata gum resin extract standardized to 65% Boswellic Acids or concentrated 30% AKBA. Potent 5-LOX enzyme inhibitor for bone, joint, and intestinal comfort.',
    keyBenefits: [
      'Targeted 5-Lipoxygenase (5-LOX) inhibition',
      'Rapid joint comfort & mobility improvement in clinical trials',
      'Zero residual ethylene oxide or toxic solvents'
    ],
    assayMethod: 'Titration / HPLC for AKBA',
    heavyMetals: 'Total Heavy Metals < 10 ppm',
    microbialLimit: 'Complies with EP/USP standards'
  },
  {
    id: 'prod-5',
    name: 'Moringa Oleifera Leaf Powder & Extract',
    botanicalName: 'Moringa oleifera',
    commonName: 'Drumstick Tree / Miracle Tree',
    category: 'botanical-powders',
    categoryLabel: 'Botanical Powders',
    slug: 'moringa-leaf-powder',
    plantPartUsed: 'Fresh Organic Leaves',
    activeMarker: 'Flavonoids, Chlorophyll & Polyphenols',
    standardization: '100% Pure Organic Leaf Powder / 10:1 Extract',
    extractionRatio: 'Direct Milling / 10:1 Extract',
    appearance: 'Vibrant Emerald Green Powder',
    solubility: 'Water Dispersible',
    grade: 'Food Grade',
    industries: ['Food & Beverage', 'Nutraceutical', 'Cosmetics', 'Animal Nutrition'],
    applications: ['Superfood Blends', 'Green Drinks', 'Nutritional Fortification', 'Hair & Skin Care'],
    packaging: '20 kg Vacuum-sealed foil bags in double drums',
    shelfLife: '24 Months',
    storage: 'Cool, dark, oxygen-controlled environment',
    moq: '50 kg',
    hasCoa: true,
    hasMsds: true,
    hasTds: true,
    featured: false,
    description: 'Nutrient-dense organic Moringa leaf powder processed via low-temperature shadow drying to preserve vitamins A, C, E, potassium, iron, and essential amino acids.',
    keyBenefits: [
      'High chlorophyll & nutrient preservation',
      '100% organic, non-irradiated & vegan',
      'Microbiologically sterilized via steam processing'
    ],
    assayMethod: 'Nutritional Assay & UV Spectroscopy',
    heavyMetals: 'Heavy Metals < 5 ppm',
    microbialLimit: 'Steam-sterilized, TPC < 5,000 CFU/g'
  },
  {
    id: 'prod-6',
    name: 'Organic Mung Bean & Organic Pea Protein 80%',
    botanicalName: 'Vigna radiata / Pisum sativum',
    commonName: 'Plant Protein Isolate',
    category: 'plant-proteins',
    categoryLabel: 'Plant Proteins',
    slug: 'mung-bean-pea-protein-80',
    plantPartUsed: 'Seeds',
    activeMarker: 'Crude Protein Content (Dry Basis)',
    standardization: '≥ 80.0% Protein Isolate',
    extractionRatio: 'Mechanical Aqueous Separation',
    appearance: 'Cream to Off-White Fine Powder',
    solubility: 'High Solubility & Emulsification in Aqueous Systems',
    grade: 'Food Grade',
    industries: ['Food & Beverage', 'Sports Nutrition', 'Nutraceutical'],
    applications: ['Plant-based Meat & Dairy Alternatives', 'Protein Powders & Shakes', 'Functional Bars'],
    packaging: '20 kg Multi-wall Paper Bags with PE Inliner',
    shelfLife: '24 Months',
    storage: 'Store below 25°C, relative humidity < 65%',
    moq: '100 kg',
    hasCoa: true,
    hasMsds: true,
    hasTds: true,
    featured: false,
    description: 'Hypoallergenic plant protein isolate produced using enzyme-free aqueous extraction. Complete amino acid profile rich in BCAAs, glutamic acid, and arginine.',
    keyBenefits: [
      'Non-GMO, Allergen-free (Dairy, Soy, Gluten free)',
      'Smooth texture with neutral taste and zero grit',
      'High digestibility score (PDCAAS close to 1.0)'
    ],
    assayMethod: 'Kjeldahl Method (N x 6.25)',
    heavyMetals: 'Heavy Metals < 5 ppm',
    microbialLimit: 'TPC < 3,000 CFU/g'
  },
  {
    id: 'prod-7',
    name: 'Lemongrass Essential Oil (Steam Distilled)',
    botanicalName: 'Cymbopogon citratus',
    commonName: 'Lemongrass Oil',
    category: 'essential-oils',
    categoryLabel: 'Essential Oils',
    slug: 'lemongrass-essential-oil',
    plantPartUsed: 'Fresh & Partially Dried Grass',
    activeMarker: 'Citral (Geranial + Neral)',
    standardization: '75.0% - 85.0% Citral Content by GC-MS',
    extractionRatio: 'Steam Distillation',
    appearance: 'Clear Yellow to Reddish-Brown Liquid',
    solubility: 'Soluble in Alcohol and Fixed Oils; Insoluble in Water',
    grade: 'Cosmetic Grade',
    industries: ['Cosmetics', 'Food & Beverage', 'Pharmaceutical', 'Agriculture'],
    applications: ['Aromatherapy', 'Natural Flavors & Fragrances', 'Insect Repellents', 'Antimicrobial Soaps'],
    packaging: '25 kg / 180 kg Aluminium Drums & Fluorinated HDPE Containers',
    shelfLife: '24 Months',
    storage: 'Store in airtight containers in dark, cool storage (< 20°C)',
    moq: '25 kg',
    hasCoa: true,
    hasMsds: true,
    hasTds: true,
    featured: false,
    description: 'Pure 100% natural steam-distilled Lemongrass oil harvested from sustainable plantations in South India. High citral yield ensures vibrant aroma and antimicrobial efficacy.',
    keyBenefits: [
      '100% Pure & Natural steam-distilled essential oil',
      'Validated by GC-MS spectrum analysis',
      'Free from synthetic additives, phthalates, or carrier oils'
    ],
    assayMethod: 'GC-MS Analysis',
    heavyMetals: 'N/A (Essential Oil)',
    microbialLimit: 'Anhydrous Liquid'
  },
  {
    id: 'prod-8',
    name: 'Gymnema Sylvestre Extract (75% Gymnemic Acids)',
    botanicalName: 'Gymnema sylvestre',
    commonName: 'Gurmar / Sugar Destroyer',
    category: 'nutraceutical-ingredients',
    categoryLabel: 'Nutraceutical Ingredients',
    slug: 'gymnema-sylvestre-extract',
    plantPartUsed: 'Leaves',
    activeMarker: 'Gymnemic Acids',
    standardization: '25% - 75% Gymnemic Acids by Gravimetry/HPLC',
    extractionRatio: '10:1',
    appearance: 'Brownish Fine Powder',
    solubility: 'Soluble in Hydro-alcoholic Solutions',
    grade: 'Nutraceutical Grade',
    industries: ['Nutraceutical', 'Pharmaceutical'],
    applications: ['Blood Sugar & Glucose Regulation', 'Metabolic Health', 'Weight Management'],
    packaging: '25 kg Fiber Drums',
    shelfLife: '36 Months',
    storage: 'Cool & dry place below 25°C',
    moq: '25 kg',
    hasCoa: true,
    hasMsds: true,
    hasTds: true,
    featured: true,
    description: 'Renowned Ayurvedic extract known for suppressing sugar absorption and supporting pancreatic beta-cell function. Standardized up to 75% Gymnemic acids.',
    keyBenefits: [
      'Supports healthy blood glucose levels & insulin sensitivity',
      'Naturally blocks sweet taste receptors',
      'Extracted under strict cGMP pharmaceutical standards'
    ],
    assayMethod: 'Gravimetric / HPLC',
    heavyMetals: 'Total Heavy Metals < 10 ppm',
    microbialLimit: 'USP Compliant'
  },
  {
    id: 'prod-9',
    name: 'Custom Liposomal & Nano-Emulsified Phytochemical Complexes',
    botanicalName: 'Multi-Botanical Synergistic Blends',
    commonName: 'Custom Phytochemical Matrix',
    category: 'customized-ingredients',
    categoryLabel: 'Customized Ingredients',
    slug: 'custom-liposomal-phytochemical-complexes',
    plantPartUsed: 'Customized (Roots, Leaves, Bark, Flowers)',
    activeMarker: 'Tailored Active Markers per Formulation Request',
    standardization: 'Custom Standardized per OEM Specification',
    extractionRatio: 'Custom Micro-encapsulated & Liposomal Formulations',
    appearance: 'Free-flowing Micro-granules or Liquid Nano-emulsions',
    solubility: 'Instant Water Soluble / Enhanced Bioavailability',
    grade: 'Pharma Grade',
    industries: ['Pharmaceutical', 'Nutraceutical', 'Cosmetics', 'Food & Beverage', 'Sports Nutrition'],
    applications: ['High-absorption Supplements', 'Effervescent Tablets', 'Functional Beverages', 'Dermatological Serums'],
    packaging: 'Custom Nitrogen-flushed Aluminum Drums or Tote Tanks',
    shelfLife: '24 - 36 Months',
    storage: 'Temperature controlled storage as specified',
    moq: '50 kg',
    hasCoa: true,
    hasMsds: true,
    hasTds: true,
    featured: true,
    description: 'Mishari Phytolabs specialized R&D division crafts custom micro-encapsulated and liposomal botanical complexes designed to improve cellular bioavailability up to 10x over standard extract powders.',
    keyBenefits: [
      'Up to 1000% increased cellular uptake and stability',
      'Taste masking and thermal resistance for beverage processing',
      'Comprehensive IP protection and contract OEM development'
    ],
    assayMethod: 'HPLC / Particle Size Analyzer (Dynamic Light Scattering)',
    heavyMetals: 'Heavy Metals < 5 ppm',
    microbialLimit: 'Sterile Grade / TPC < 100 CFU/g'
  }
];

export const CATEGORIES = [
  { id: 'all', label: 'All Products', count: PRODUCTS_DATA.length },
  { id: 'herbal-extracts', label: 'Herbal Extracts', count: PRODUCTS_DATA.filter(p => p.category === 'herbal-extracts').length },
  { id: 'botanical-powders', label: 'Botanical Powders', count: PRODUCTS_DATA.filter(p => p.category === 'botanical-powders').length },
  { id: 'nutraceutical-ingredients', label: 'Nutraceutical Raw Materials', count: PRODUCTS_DATA.filter(p => p.category === 'nutraceutical-ingredients').length },
  { id: 'plant-proteins', label: 'Plant Proteins', count: PRODUCTS_DATA.filter(p => p.category === 'plant-proteins').length },
  { id: 'essential-oils', label: 'Essential Oils', count: PRODUCTS_DATA.filter(p => p.category === 'essential-oils').length },
  { id: 'ayurvedic-ingredients', label: 'Ayurvedic Ingredients', count: PRODUCTS_DATA.filter(p => p.category === 'ayurvedic-ingredients').length },
  { id: 'customized-ingredients', label: 'Customized & Liposomal Solutions', count: PRODUCTS_DATA.filter(p => p.category === 'customized-ingredients').length },
];

export const INDUSTRIES = [
  { id: 'Pharmaceutical', name: 'Pharmaceutical Companies', slug: 'pharmaceutical', description: 'Pharma-grade botanical active pharmaceutical ingredients (APIs), standardized extracts conforming to EP, USP, and IP pharmacopoeias.' },
  { id: 'Nutraceutical', name: 'Nutraceutical & Dietary Brands', slug: 'nutraceutical', description: 'High-potency adaptogens, brain health nootropics, joint care active markers, and liposomal bioavailability boosters.' },
  { id: 'Cosmetics', name: 'Cosmetic & Personal Care', slug: 'cosmetics', description: 'Natural bioactive polyphenols, anti-aging anti-oxidants, essential oils, and botanical extracts for clean beauty.' },
  { id: 'Food & Beverage', name: 'Food & Beverage Industry', slug: 'food-beverage', description: 'Water-soluble extract powders, natural colorants, plant proteins, and functional superfood fortifiers.' },
  { id: 'Sports Nutrition', name: 'Sports Nutrition Brands', slug: 'sports-nutrition', description: 'Clean energy, recovery, endurance, and anabolic muscle-support botanical ingredients with zero prohibited substances.' },
  { id: 'Animal Nutrition', name: 'Animal Health & Veterinary', slug: 'animal-nutrition', description: 'Botanical digestive enhancers, natural immune support extracts, and organic feed additives for livestock and pets.' },
  { id: 'Agriculture', name: 'Agri-Tech & Organic Protection', slug: 'agriculture', description: 'Plant-based botanical biopesticides, neem derivatives, and organic bio-stimulants for sustainable farming.' }
];
