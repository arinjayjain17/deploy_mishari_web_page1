'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import QuoteModal from '@/components/ui/QuoteModal';
import WhatsAppWidget from '@/components/ui/WhatsAppWidget';
import { PRODUCTS_DATA, Product } from '@/data/products';
import { 
  CheckCircle2, ShieldCheck, FileText, Download, ArrowLeft, Send, 
  Sparkles, Award, Globe, PackageCheck, FlaskConical 
} from 'lucide-react';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  const slug = params?.slug as string;
  const product = PRODUCTS_DATA.find((p) => p.slug === slug) || PRODUCTS_DATA[0];

  const handleOpenQuote = () => {
    setQuoteModalOpen(true);
  };

  // Structured Data for SEO (JSON-LD)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': product.name,
    'description': product.description,
    'brand': {
      '@type': 'Brand',
      'name': 'Mishari Phytolabs'
    },
    'sku': product.id,
    'mpn': product.id,
    'offers': {
      '@type': 'AggregateOffer',
      'priceCurrency': 'USD',
      'offerCount': '10',
      'availability': 'https://schema.org/InStock',
      'itemCondition': 'https://schema.org/NewCondition'
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFCF9] text-slate-900 flex flex-col font-sans">
      
      {/* Inject JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header onOpenQuoteModal={handleOpenQuote} />

      {/* Breadcrumb Header */}
      <div className="bg-slate-950 text-white py-10 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-2 text-xs text-slate-400 mb-4">
            <Link href="/" className="hover:text-emerald-400">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-emerald-400">Products</Link>
            <span>/</span>
            <span className="text-emerald-400 font-semibold">{product.categoryLabel}</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono font-bold bg-emerald-950 text-emerald-300 border border-emerald-800 px-3 py-1 rounded-full uppercase tracking-wider">
                {product.grade}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-3">
                {product.name}
              </h1>
              <p className="text-emerald-400 text-sm font-serif italic mt-1">
                Botanical Name: {product.botanicalName} ({product.commonName})
              </p>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={handleOpenQuote}
                className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Request Quotation & Samples</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Detail Content */}
      <section className="py-12 flex-1">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Main Column */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Product Overview & Description */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 space-y-4 shadow-xs">
                <h3 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-emerald-700" />
                  <span>Product Overview & Chemical Description</span>
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  {product.description}
                </p>

                <div className="pt-4 border-t border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Key Product Advantages & Documentation
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {product.keyBenefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs text-slate-700 bg-emerald-50/50 p-3 rounded-xl border border-emerald-100">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Complete Scientific Specifications Table */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 space-y-4 shadow-xs">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <h3 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
                    <FlaskConical className="w-5 h-5 text-emerald-700" />
                    <span>Technical & Pharmacopoeial Specifications</span>
                  </h3>
                  <span className="text-xs font-mono text-emerald-800 font-bold bg-emerald-100 px-2.5 py-1 rounded">
                    USP / EP Monograph
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left text-slate-700 border-collapse">
                    <tbody>
                      <tr className="border-b border-slate-100 bg-slate-50/50">
                        <td className="py-3 px-4 font-bold text-slate-900 w-1/3">Botanical Name</td>
                        <td className="py-3 px-4 italic font-serif text-slate-800">{product.botanicalName}</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-3 px-4 font-bold text-slate-900">Plant Part Used</td>
                        <td className="py-3 px-4">{product.plantPartUsed}</td>
                      </tr>
                      <tr className="border-b border-slate-100 bg-slate-50/50">
                        <td className="py-3 px-4 font-bold text-slate-900">Active Marker %</td>
                        <td className="py-3 px-4 font-bold text-emerald-800">{product.standardization}</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-3 px-4 font-bold text-slate-900">Extraction Ratio</td>
                        <td className="py-3 px-4 font-mono">{product.extractionRatio}</td>
                      </tr>
                      <tr className="border-b border-slate-100 bg-slate-50/50">
                        <td className="py-3 px-4 font-bold text-slate-900">Assay Testing Method</td>
                        <td className="py-3 px-4 font-semibold text-slate-800">{product.assayMethod}</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-3 px-4 font-bold text-slate-900">Appearance & Texture</td>
                        <td className="py-3 px-4">{product.appearance}</td>
                      </tr>
                      <tr className="border-b border-slate-100 bg-slate-50/50">
                        <td className="py-3 px-4 font-bold text-slate-900">Solubility Profile</td>
                        <td className="py-3 px-4">{product.solubility}</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-3 px-4 font-bold text-slate-900">Heavy Metals Profile</td>
                        <td className="py-3 px-4">{product.heavyMetals}</td>
                      </tr>
                      <tr className="border-b border-slate-100 bg-slate-50/50">
                        <td className="py-3 px-4 font-bold text-slate-900">Microbiological Limits</td>
                        <td className="py-3 px-4">{product.microbialLimit}</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-3 px-4 font-bold text-slate-900">Packaging Standard</td>
                        <td className="py-3 px-4">{product.packaging}</td>
                      </tr>
                      <tr className="border-b border-slate-100 bg-slate-50/50">
                        <td className="py-3 px-4 font-bold text-slate-900">Shelf Life & Storage</td>
                        <td className="py-3 px-4">{product.shelfLife} • {product.storage}</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold text-slate-900">Minimum Order Quantity (MOQ)</td>
                        <td className="py-3 px-4 font-mono font-bold text-emerald-800">{product.moq}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

              </div>

              {/* Target Applications & Industries */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 space-y-4 shadow-xs">
                <h3 className="text-xl font-bold text-slate-900">Formulation Applications</h3>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app) => (
                    <span key={app} className="px-3 py-1.5 bg-slate-100 text-slate-800 rounded-xl text-xs font-medium border border-slate-200">
                      ⚡ {app}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Action Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Quick RFQ Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-6 space-y-4 shadow-xl border border-slate-800">
                <div className="flex items-center space-x-2 text-xs text-emerald-400 font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Direct Export Desk</span>
                </div>

                <h4 className="text-xl font-bold text-white">Commercial Quote & Batch COA</h4>
                <p className="text-xs text-slate-300">
                  Request custom pricing per drum, non-EtO declarations, and sample dispatch to your facility.
                </p>

                <div className="pt-2 space-y-3">
                  <button
                    onClick={handleOpenQuote}
                    className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition-all shadow-md flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit RFQ for {product.name.split(' ')[0]}</span>
                  </button>

                  <button
                    onClick={() => {
                      alert(`Downloading Technical Data Sheet (TDS) for ${product.name}`);
                    }}
                    className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs rounded-xl transition-all flex items-center justify-center space-x-2 border border-slate-700"
                  >
                    <Download className="w-4 h-4 text-emerald-400" />
                    <span>Download Technical Specs (TDS)</span>
                  </button>
                </div>

                <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400 space-y-1">
                  <div>✓ Guaranteed Response within 12 Hours</div>
                  <div>✓ Custom Extraction Ratios Available</div>
                  <div>✓ NDA & Confidentiality Guaranteed</div>
                </div>
              </div>

              {/* Related Products */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Related Botanical Ingredients</h4>
                <div className="space-y-3">
                  {PRODUCTS_DATA.filter(p => p.id !== product.id).slice(0, 3).map((rel) => (
                    <Link
                      key={rel.id}
                      href={`/products/${rel.category}/${rel.slug}`}
                      className="block p-3 rounded-xl hover:bg-slate-50 border border-slate-100 transition-all text-xs"
                    >
                      <span className="font-bold text-slate-900 block truncate">{rel.name}</span>
                      <span className="text-[10px] text-slate-500 font-serif italic">{rel.botanicalName}</span>
                    </Link>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      <Footer />

      <QuoteModal 
        isOpen={quoteModalOpen} 
        onClose={() => setQuoteModalOpen(false)} 
        preselectedProduct={product.name}
      />

      <WhatsAppWidget />

    </div>
  );
}
