'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import QuoteModal from '@/components/ui/QuoteModal';
import WhatsAppWidget from '@/components/ui/WhatsAppWidget';
import { Cpu, Sparkles, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

export default function RDPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAFCF9] text-slate-900 flex flex-col font-sans">
      <Header onOpenQuoteModal={() => setQuoteModalOpen(true)} />

      {/* Banner */}
      <section className="bg-slate-950 text-white py-16 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <Cpu className="w-4 h-4" />
              <span>Phytochemical Innovation & Custom OEM</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white">
              Research & Development Innovation Center
            </h1>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Bridging traditional botanical wisdom with modern pharmaceutical bio-availability engineering, liposomal micro-encapsulation, and custom targeted active markers.
            </p>
          </div>
        </div>
      </section>

      {/* R&D Capabilities Matrix */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-emerald-700" />
                <span>Liposomal & Nano-Emulsified Encapsulation</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Hydrophobic phytochemicals (Curcumin, Boswellic acids, Resveratrol) are entrapped within phospholipid bilayers to enhance oral bioavailability up to 10x and mask bitter tastes for functional beverages and gummies.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-emerald-700" />
                <span>Custom Assay Standardization</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our formulation scientists develop tailored extraction ratios (e.g. 5:1 to 50:1) and standardized marker percentages specifically requested for your brand’s patent or clinical study.
              </p>
            </div>
          </div>

          <div className="p-8 bg-emerald-900 text-white rounded-3xl text-center space-y-4">
            <h3 className="text-2xl font-bold text-white">Looking for Custom Formulation R&D?</h3>
            <p className="text-xs text-emerald-200 max-w-lg mx-auto">
              Collaborate directly with our senior PhD scientists under strict Non-Disclosure Agreement (NDA) protection.
            </p>
            <button
              onClick={() => setQuoteModalOpen(true)}
              className="px-8 py-3 bg-white text-emerald-950 font-bold text-xs rounded-xl hover:bg-emerald-100 transition-all"
            >
              Initiate R&D Collaboration Request
            </button>
          </div>

        </div>
      </section>

      <Footer />
      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
      <WhatsAppWidget />
    </div>
  );
}
