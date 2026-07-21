'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import QuoteModal from '@/components/ui/QuoteModal';
import WhatsAppWidget from '@/components/ui/WhatsAppWidget';
import { INDUSTRIES, PRODUCTS_DATA } from '@/data/products';
import { ArrowRight, CheckCircle2, ShieldCheck, ChevronRight } from 'lucide-react';

export default function IndustryDetailPage() {
  const params = useParams();
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  const industrySlug = params?.industry as string;
  const currentIndustry = INDUSTRIES.find(i => i.slug === industrySlug) || INDUSTRIES[0];

  const matchingProducts = PRODUCTS_DATA.filter(p => p.industries.includes(currentIndustry.id));

  return (
    <div className="min-h-screen bg-[#FAFCF9] text-slate-900 flex flex-col font-sans">
      <Header onOpenQuoteModal={() => setQuoteModalOpen(true)} />

      {/* Banner */}
      <section className="bg-slate-950 text-white py-16 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl space-y-3">
            <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest">
              Industry Specific Solutions
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white">
              Botanical Ingredients for {currentIndustry.name}
            </h1>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              {currentIndustry.description}
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid for this Industry */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 space-y-8">
          
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-900">
              Recommended Ingredients for {currentIndustry.name}
            </h2>
            <span className="text-xs text-slate-500 font-mono">
              {matchingProducts.length} Standardized Products Available
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {matchingProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 hover:shadow-xl transition-all">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-full">
                  {product.categoryLabel}
                </span>
                <h3 className="text-lg font-bold text-slate-900">{product.name}</h3>
                <p className="text-xs text-slate-500 italic">{product.botanicalName}</p>
                <div className="text-xs text-slate-700 pt-2 border-t border-slate-100 flex justify-between">
                  <span className="text-slate-500">Active Marker:</span>
                  <span className="font-bold text-emerald-800">{product.standardization}</span>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/products/${product.category}/${product.slug}`}
                    className="text-xs font-bold text-slate-700 hover:text-emerald-800 flex items-center space-x-1"
                  >
                    <span>View Specifications</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                  <button
                    onClick={() => setQuoteModalOpen(true)}
                    className="px-3.5 py-1.5 bg-emerald-800 text-white text-xs font-medium rounded-xl"
                  >
                    Request Quote
                  </button>
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
