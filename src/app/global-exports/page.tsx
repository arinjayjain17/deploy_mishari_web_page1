'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import QuoteModal from '@/components/ui/QuoteModal';
import WhatsAppWidget from '@/components/ui/WhatsAppWidget';
import { Globe, Plane, Ship, FileCheck, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export default function GlobalExportsPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAFCF9] text-slate-900 flex flex-col font-sans">
      <Header onOpenQuoteModal={() => setQuoteModalOpen(true)} />

      {/* Banner */}
      <section className="bg-slate-950 text-white py-16 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <Globe className="w-4 h-4" />
              <span>Worldwide Container Logistics</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white">
              Global Supply Chain & Export Capabilities
            </h1>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Exporting standardized botanical extracts and nutraceutical raw materials to over 45 countries with complete customs regulatory dossiers, Incoterms flexibility, and air/ocean freight logistics.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive World Map SVG & Routes */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 space-y-12">
          
          <div className="bg-slate-900 p-8 rounded-3xl text-white border border-slate-800 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center space-x-2">
              <Ship className="w-5 h-5 text-emerald-400" />
              <span>International Shipping Freight & Incoterms</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <span className="text-emerald-400 font-mono font-bold text-sm">CIF</span>
                <h4 className="text-xs font-bold text-white mt-1">Cost, Insurance & Freight</h4>
                <p className="text-[11px] text-slate-400 mt-1">Delivered to buyer's preferred port of destination (e.g. Rotterdam, Hamburg, Los Angeles, Tokyo).</p>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <span className="text-emerald-400 font-mono font-bold text-sm">FOB</span>
                <h4 className="text-xs font-bold text-white mt-1">Free On Board</h4>
                <p className="text-[11px] text-slate-400 mt-1">Loaded onto vessel at Nhava Sheva (JNPT) or Mundra Port, Gujarat.</p>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <span className="text-emerald-400 font-mono font-bold text-sm">DDP</span>
                <h4 className="text-xs font-bold text-white mt-1">Delivered Duty Paid</h4>
                <p className="text-[11px] text-slate-400 mt-1">Full door-to-door delivery cleared through local customs in North America and EU.</p>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <span className="text-emerald-400 font-mono font-bold text-sm">EXW</span>
                <h4 className="text-xs font-bold text-white mt-1">Ex Works Factory</h4>
                <p className="text-[11px] text-slate-400 mt-1">Picked up directly from our manufacturing facility warehouse in Gujarat.</p>
              </div>
            </div>
          </div>

          <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-xs space-y-6">
            <h3 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
              <FileCheck className="w-5 h-5 text-emerald-700" />
              <span>Standard Regulatory Export Documentation Provided</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs text-slate-700">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">✓ Batch Certificate of Analysis (COA)</div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">✓ Material Safety Data Sheet (MSDS)</div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">✓ Non-EtO (Ethylene Oxide) Certificate</div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">✓ Non-GMO & Allergen Free Declaration</div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">✓ Phytosanitary Export Certificate</div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">✓ Certificate of Origin (COO)</div>
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
