'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import QuoteModal from '@/components/ui/QuoteModal';
import WhatsAppWidget from '@/components/ui/WhatsAppWidget';
import { MANUFACTURING_STEPS, CAPACITIES } from '@/data/manufacturing';
import { Factory, ShieldCheck, Gauge, Wind, Filter, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ManufacturingPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAFCF9] text-slate-900 flex flex-col font-sans">
      
      <Header onOpenQuoteModal={() => setQuoteModalOpen(true)} />

      {/* Page Banner */}
      <section className="bg-slate-950 text-white py-16 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <Factory className="w-4 h-4" />
              <span>Pharmaceutical Grade Infrastructure</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white">
              State-of-the-Art Botanical Manufacturing Facility
            </h1>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Equipped with SS316L multi-stage counter-current extractors, Class 100,000 cleanrooms, high-vacuum falling film evaporators, and zero liquid discharge water treatment systems.
            </p>
          </div>
        </div>
      </section>

      {/* Production Capacity Highlights */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {CAPACITIES.map((cap, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-[#FAFCF9] border border-slate-200 text-center space-y-1">
                <span className="text-2xl font-black text-emerald-800">{cap.value}</span>
                <h4 className="text-xs font-bold text-slate-900">{cap.metric}</h4>
                <p className="text-[10px] text-slate-500 line-clamp-2">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Manufacturing Step-by-Step Flow */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest">Complete Extraction Pipeline</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-1">
              9-Step Quality Extraction & Purification Flow
            </h2>
          </div>

          <div className="space-y-8">
            {MANUFACTURING_STEPS.map((step) => (
              <div key={step.stepNumber} className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                
                <div className="lg:col-span-3 flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-800 text-white flex items-center justify-center font-black text-xl shrink-0">
                    0{step.stepNumber}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">Stage {step.stepNumber}</span>
                    <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-2">
                  <p className="text-xs text-slate-700 leading-relaxed">{step.detailDesc}</p>
                  <div className="text-[11px] text-slate-500 font-medium">
                    <strong>Equipment:</strong> {step.equipmentUsed}
                  </div>
                </div>

                <div className="lg:col-span-3 bg-emerald-50 p-4 rounded-xl border border-emerald-100 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 flex items-center space-x-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Critical Quality Control</span>
                  </span>
                  <p className="text-xs font-semibold text-slate-900">{step.qualityControlPoint}</p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />

      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
      <WhatsAppWidget />

    </div>
  );
}
