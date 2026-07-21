'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import QuoteModal from '@/components/ui/QuoteModal';
import CertificationModal from '@/components/ui/CertificationModal';
import WhatsAppWidget from '@/components/ui/WhatsAppWidget';
import { PRODUCTS_DATA, CATEGORIES, INDUSTRIES } from '@/data/products';
import { CERTIFICATIONS_DATA, Certification } from '@/data/certifications';
import { MANUFACTURING_STEPS, CAPACITIES } from '@/data/manufacturing';
import { 
  ArrowRight, ShieldCheck, Sparkles, Award, Globe, Factory, FlaskConical, 
  CheckCircle2, Search, Zap, Cpu, Leaf, FileText, ChevronRight, Send 
} from 'lucide-react';

export default function HomePage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedProductForQuote, setSelectedProductForQuote] = useState<string | undefined>(undefined);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const handleOpenQuote = (productName?: string) => {
    setSelectedProductForQuote(productName);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAFCF9] text-slate-900 flex flex-col font-sans">
      
      {/* Header */}
      <Header onOpenQuoteModal={handleOpenQuote} />

      {/* Hero Section */}
      <section className="relative bg-slate-950 text-white overflow-hidden py-20 lg:py-28">
        
        {/* Background Visual Graphic Elements */}
        <div className="absolute inset-0 hero-gradient-overlay z-10" />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-emerald-600/20 blur-3xl z-0" />
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full bg-teal-500/10 blur-3xl z-0" />

        <div className="relative z-20 max-w-7xl mx-auto px-4">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>WHO-cGMP & US FDA Registered Manufacturer</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                Global Manufacturer of Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">Botanical Extracts</span> & Herbal Ingredients
              </h1>

              <p className="text-slate-300 text-base md:text-lg max-w-2xl font-light leading-relaxed">
                Empowering international pharmaceutical, nutraceutical, cosmetic, and functional food brands with standardized plant extracts, bio-enhanced phytochemicals, and custom liposomal formulations.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <button
                  onClick={() => handleOpenQuote()}
                  className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl transition-all shadow-lg shadow-emerald-900/40 flex items-center space-x-2 hover:scale-[1.02]"
                >
                  <span>Request a Commercial Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <Link
                  href="/products"
                  className="px-8 py-4 bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-sm rounded-xl transition-all flex items-center space-x-2"
                >
                  <span>Explore Product Catalog</span>
                  <ChevronRight className="w-4 h-4 text-emerald-400" />
                </Link>
              </div>

              {/* Trust Badges Bar */}
              <div className="pt-8 border-t border-slate-800/80">
                <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                  Accreditations & Global Compliance:
                </span>
                <div className="flex flex-wrap gap-3">
                  {['WHO-cGMP', 'ISO 9001:2015', 'HACCP', 'USDA Organic', 'Halal', 'Kosher', 'FSSAI Central', 'US FDA'].map((badge) => (
                    <span key={badge} className="px-3 py-1 bg-slate-900/90 border border-slate-800 rounded-lg text-xs font-mono text-emerald-400 font-semibold">
                      ✓ {badge}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Interactive Card Preview */}
            <div className="lg:col-span-5">
              <div className="glass-panel-dark rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">Production & Quality Metrics</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">Live Facility Stats</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
                    <span className="text-2xl font-black text-emerald-400">50,000 MT</span>
                    <span className="block text-xs text-slate-400 mt-1">Annual Extraction Capacity</span>
                  </div>
                  <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
                    <span className="text-2xl font-black text-emerald-400">45+</span>
                    <span className="block text-xs text-slate-400 mt-1">Export Countries</span>
                  </div>
                  <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
                    <span className="text-2xl font-black text-emerald-400">150+</span>
                    <span className="block text-xs text-slate-400 mt-1">Standardized Extracts</span>
                  </div>
                  <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
                    <span className="text-2xl font-black text-emerald-400">99.8%</span>
                    <span className="block text-xs text-slate-400 mt-1">HPLC Purity Pass Rate</span>
                  </div>
                </div>

                <div className="p-4 bg-emerald-950/40 rounded-2xl border border-emerald-800/40 space-y-2">
                  <div className="flex items-center justify-between text-xs text-emerald-300">
                    <span className="font-semibold">Featured Batch: Ashwagandha 10% Withanolides</span>
                    <span className="text-[10px] bg-emerald-800/60 px-2 py-0.5 rounded text-emerald-200">COA Ready</span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Hydro-alcoholic extract manufactured in Class 100,000 cleanroom. Guaranteed low Withaferin A.
                  </p>
                  <button
                    onClick={() => handleOpenQuote('Ashwagandha Root Extract (Standardized Withanolides)')}
                    className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-xl transition-all"
                  >
                    Request Batch COA & Pricing
                  </button>
                </div>

              </div>
            </div>

          </div>

        </div>

      </section>

      {/* Featured Product Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest">Scalable Product Management</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-1">
                Standardized Botanical Ingredients Catalog
              </h2>
            </div>
            <Link
              href="/products"
              className="mt-4 md:mt-0 inline-flex items-center space-x-2 text-sm font-bold text-emerald-700 hover:text-emerald-800"
            >
              <span>View All 150+ Ingredients</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS_DATA.slice(0, 6).map((product) => (
              <div 
                key={product.id}
                className="bg-[#FAFCF9] rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-emerald-500 hover:shadow-xl transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-full">
                      {product.categoryLabel}
                    </span>
                    <span className="text-[10px] font-mono text-slate-600 bg-slate-200/60 px-2 py-0.5 rounded">
                      {product.grade}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-500 italic mt-0.5">{product.botanicalName}</p>

                  <div className="mt-4 space-y-2 text-xs border-t border-slate-200/80 pt-4">
                    <div className="flex justify-between text-slate-700">
                      <span className="text-slate-500">Active Marker:</span>
                      <span className="font-semibold text-slate-900 text-right">{product.standardization}</span>
                    </div>
                    <div className="flex justify-between text-slate-700">
                      <span className="text-slate-500">Plant Part:</span>
                      <span className="font-medium">{product.plantPartUsed}</span>
                    </div>
                    <div className="flex justify-between text-slate-700">
                      <span className="text-slate-500">Assay Method:</span>
                      <span className="font-mono text-emerald-800 font-bold">{product.assayMethod}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <Link
                    href={`/products/${product.category}/${product.slug}`}
                    className="text-xs font-bold text-slate-700 hover:text-emerald-800 flex items-center space-x-1"
                  >
                    <span>View Specifications</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={() => handleOpenQuote(product.name)}
                    className="px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-medium rounded-xl transition-all shadow-xs"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9-Step Interactive Manufacturing Journey */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest">Pharmaceutical Grade Quality</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-1">
              The Mishari Extraction & Manufacturing Journey
            </h2>
            <p className="text-slate-300 text-sm mt-3">
              From sustainable raw botanical origin logging to cleanroom spray drying and export packaging.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Step Selection List */}
            <div className="lg:col-span-5 space-y-2">
              {MANUFACTURING_STEPS.map((step, idx) => (
                <button
                  key={step.stepNumber}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`w-full p-4 rounded-2xl text-left transition-all flex items-center justify-between border ${
                    activeStepIndex === idx
                      ? 'bg-emerald-950/80 border-emerald-500 text-white shadow-lg shadow-emerald-950'
                      : 'bg-slate-950/40 border-slate-800 text-slate-400 hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
                      activeStepIndex === idx ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {step.stepNumber}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">{step.title}</h4>
                      <p className="text-[11px] text-slate-400 line-clamp-1">{step.shortDesc}</p>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 ${activeStepIndex === idx ? 'text-emerald-400' : 'text-slate-600'}`} />
                </button>
              ))}
            </div>

            {/* Step Detail View */}
            <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-3xl p-8 space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center space-x-3">
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-mono font-bold">
                    Step 0{MANUFACTURING_STEPS[activeStepIndex].stepNumber} of 09
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {MANUFACTURING_STEPS[activeStepIndex].title}
                  </h3>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                {MANUFACTURING_STEPS[activeStepIndex].detailDesc}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">Equipment Utilized</span>
                  <p className="text-xs font-medium text-slate-200">
                    {MANUFACTURING_STEPS[activeStepIndex].equipmentUsed}
                  </p>
                </div>

                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">Critical Control Point (CCP)</span>
                  <p className="text-xs font-medium text-slate-200">
                    {MANUFACTURING_STEPS[activeStepIndex].qualityControlPoint}
                  </p>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <Link
                  href="/manufacturing"
                  className="px-6 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white font-medium text-xs rounded-xl flex items-center space-x-2"
                >
                  <span>Explore Complete Factory Tour</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Industries Served Matrix */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest">Global B2B Solutions</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-1">
              Industries Served Worldwide
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Formulated to satisfy strict international pharmacopoeial and food safety monographs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((ind) => (
              <div 
                key={ind.id}
                className="p-6 rounded-2xl bg-[#FAFCF9] border border-slate-200 hover:border-emerald-500 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-2xl flex items-center justify-center font-bold text-xl mb-4">
                  {ind.name.charAt(0)}
                </div>
                <h3 className="text-lg font-bold text-slate-900">{ind.name}</h3>
                <p className="text-xs text-slate-600 leading-relaxed mt-2">{ind.description}</p>
                <div className="mt-4 pt-4 border-t border-slate-200/80">
                  <Link
                    href={`/industries/${ind.slug}`}
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center space-x-1"
                  >
                    <span>View Industry Applications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Certifications Modal Trigger Grid */}
      <section className="py-20 bg-[#FAFCF9] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest">Uncompromising Quality</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-1">
              Verified Compliance & Certificates
            </h2>
            <p className="text-slate-600 text-xs mt-2">
              Click any certificate card below to view detailed scope, issuing body registration numbers, and audit validity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CERTIFICATIONS_DATA.map((cert) => (
              <div
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-xl hover:border-emerald-500 transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                    {cert.code}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                  {cert.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1">Issued by {cert.issuer}</p>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-emerald-700 font-semibold">
                  <span>View Details</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Global Presence Map Preview */}
      <section className="py-20 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          
          <div className="max-w-xl mx-auto space-y-3 mb-12">
            <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest">Global Logistics Network</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Exporting to 45+ Countries Worldwide
            </h2>
            <p className="text-slate-400 text-sm">
              Seamless containerized shipping (FOB, CIF, DDP) with custom clearing support.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 text-left grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white flex items-center space-x-2">
                <Globe className="w-5 h-5 text-emerald-400" />
                <span>Primary Export Destinations</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center space-x-2"><span className="text-emerald-400 font-bold">✓</span> <span>North America (USA, Canada, Mexico)</span></li>
                <li className="flex items-center space-x-2"><span className="text-emerald-400 font-bold">✓</span> <span>European Union (Germany, France, Italy, Netherlands)</span></li>
                <li className="flex items-center space-x-2"><span className="text-emerald-400 font-bold">✓</span> <span>Asia-Pacific (Japan, South Korea, Australia, Taiwan)</span></li>
                <li className="flex items-center space-x-2"><span className="text-emerald-400 font-bold">✓</span> <span>Middle East (UAE, Saudi Arabia, Oman, Qatar)</span></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white flex items-center space-x-2">
                <FileText className="w-5 h-5 text-emerald-400" />
                <span>Standard Regulatory Dossiers</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center space-x-2"><span className="text-emerald-400 font-bold">✓</span> <span>US-DMF (Drug Master Files) available for key extracts</span></li>
                <li className="flex items-center space-x-2"><span className="text-emerald-400 font-bold">✓</span> <span>Non-EtO & Non-GMO Declarations</span></li>
                <li className="flex items-center space-x-2"><span className="text-emerald-400 font-bold">✓</span> <span>Phytosanitary & Certificate of Origin (COO)</span></li>
                <li className="flex items-center space-x-2"><span className="text-emerald-400 font-bold">✓</span> <span>Batch Specific HPLC & GC Chromatograms</span></li>
              </ul>
            </div>

            <div className="bg-emerald-950/60 p-6 rounded-2xl border border-emerald-800/60 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Direct Factory Dispatch</span>
                <h4 className="text-xl font-bold text-white mt-1">Need Freight & Cost Quotation?</h4>
                <p className="text-xs text-slate-300 mt-2">
                  Our international logistics desk calculates competitive CIF / DDP quotes within 12 hours.
                </p>
              </div>
              <button
                onClick={() => handleOpenQuote()}
                className="mt-6 w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition-all shadow-md"
              >
                Request Export Shipping Quote
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Modals & Floating Widgets */}
      <QuoteModal 
        isOpen={quoteModalOpen} 
        onClose={() => setQuoteModalOpen(false)} 
        preselectedProduct={selectedProductForQuote}
      />

      <CertificationModal 
        cert={selectedCert} 
        onClose={() => setSelectedCert(null)} 
      />

      <WhatsAppWidget />

    </div>
  );
}
