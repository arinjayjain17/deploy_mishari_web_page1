export interface LeadInquiry {
  id: string;
  type: 'RFQ' | 'Sample Request' | 'Technical Inquiry' | 'Distributor Application';
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  country: string;
  productInterest: string;
  quantityKg: string;
  incoterms: string;
  message: string;
  createdAt: string;
  status: 'New' | 'In Contact' | 'Sample Dispatched' | 'Closed';
}

export const INITIAL_LEADS: LeadInquiry[] = [
  {
    id: 'lead-101',
    type: 'RFQ',
    fullName: 'Dr. Michael Vance',
    companyName: 'Apex Nutraceuticals USA Inc.',
    email: 'm.vance@apexnutra.com',
    phone: '+1 (415) 892-4410',
    country: 'United States',
    productInterest: 'Ashwagandha Root Extract (Standardized Withanolides 5%)',
    quantityKg: '500 kg',
    incoterms: 'CIF Los Angeles Port',
    message: 'Looking for cGMP grade Ashwagandha extract for our upcoming sleep & stress formulation launch. Please send bulk FOB/CIF pricing, USP COA, and non-EtO declaration.',
    createdAt: '2026-07-20 14:30',
    status: 'New'
  },
  {
    id: 'lead-102',
    type: 'Sample Request',
    fullName: 'Sophie Laurent',
    companyName: 'PhytoBio Cosmetics France',
    email: 's.laurent@phytobio.fr',
    phone: '+33 1 42 68 55 00',
    country: 'France',
    productInterest: 'Curcumin 95% Standardized Extract & Lemongrass Oil',
    quantityKg: '2 kg Sample',
    incoterms: 'DDP Paris',
    message: 'Requesting 250g laboratory testing samples for facial serum anti-oxidant trial. Need heavy metals assay and allergens list.',
    createdAt: '2026-07-19 09:15',
    status: 'In Contact'
  },
  {
    id: 'lead-103',
    type: 'Distributor Application',
    fullName: 'Kenji Takahashi',
    companyName: 'Nippon Bio Ingredients Corp',
    email: 'k-takahashi@nipponbio.co.jp',
    phone: '+81 3 5551 1200',
    country: 'Japan',
    productInterest: 'Boswellia Serrata 30% AKBA & Bacopa Monnieri 50%',
    quantityKg: '2,000 kg/year',
    incoterms: 'FOB Nhava Sheva',
    message: 'Interested in becoming official distribution partner for Japanese pharmaceutical & health food industry.',
    createdAt: '2026-07-18 16:45',
    status: 'Sample Dispatched'
  }
];
