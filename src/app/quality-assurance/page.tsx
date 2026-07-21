'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import QuoteModal from '@/components/ui/QuoteModal';
import WhatsAppWidget from '@/components/ui/WhatsAppWidget';
import { FlaskConical, ShieldCheck, CheckCircle2, Award, FileText, Download } from 'lucide-react';

export default function QualityAssurancePage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAFCF9] text-slate-900 flex flex-col font-sans">
      <Header onOpenQuoteModal={() => setQuoteModalOpen(true)} />

      {/* Banner */}
      <section className="bg-slate-950 text-white py-16 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <FlaskConical className="w-4 h-4" />
              <span>ISO 17025 Compliant Analytical Testing</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white">
              Quality Assurance & Testing Laboratories
            </h1>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Every batch of botanical extract undergoes 100% rigorous analytical testing for active marker potency, pesticide screening, residual solvents, heavy metals, and micro-biology.
            </p>
          </div>
        </div>
      </section>

      {/* Analytical Equipment Showcase */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 space-y-12">
          
          <div className="text-center max-w-xl mx-auto">
            <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest">In-House Analytical Instrumentation</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-1">
              Precision Chemical & Microbiological Assay
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
                HPLC
              </div>
              <h3 className="text-lg font-bold text-slate-900">Waters HPLC with PDA Detector</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Quantitative assay of active phytochemical markers (Withanolides, Curcuminoids, Bacosides, Boswellic Acids) with high resolution and 3D spectral matching.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
                GC-MS
              </div>
              <h3 className="text-lg font-bold text-slate-900">Agilent GC-MS / HS Residual Solvents</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Headspace Gas Chromatography for residual solvent detection conforming to USP &lt;467&gt; Class 1, 2, and 3 limits.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
                ICP-MS
              </div>
              <h3 className="text-lg font-bold text-slate-900">ICP-MS Heavy Metal Spectrometry</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Trace element analysis detecting Lead (Pb), Arsenic (As), Cadmium (Cd), and Mercury (Hg) down to parts-per-billion (ppb) sensitivity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
                LC-MS
              </div>
              <h3 className="text-lg font-bold text-slate-900">LC-MS/MS Pesticide Screening</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Screens for over 400 agrochemical and pesticide residues to guarantee compliance with EU Regulation 2023/915 and US FDA standards.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
                MICRO
              </div>
              <h3 className="text-lg font-bold text-slate-900">Sterile Microbiology Suite</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Class 100 laminar flow hoods for 5-day incubation of Total Plate Count, Yeast & Mold, E. coli, Salmonella, and Staphylococcus aureus.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
                STAB
              </div>
              <h3 className="text-lg font-bold text-slate-900">ICH Stability Chambers</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Real-time (25°C/60% RH) and accelerated (40°C/75% RH) stability testing for 36-month shelf life validation.
              </p>
            </div>

          </div>

        </div>
      </section>

      <Footer />
      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
      <WhatsAppWidget />
    </div>
  );
}
