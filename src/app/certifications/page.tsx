'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import QuoteModal from '@/components/ui/QuoteModal';
import CertificationModal from '@/components/ui/CertificationModal';
import WhatsAppWidget from '@/components/ui/WhatsAppWidget';
import { CERTIFICATIONS_DATA, Certification } from '@/data/certifications';
import { Award, ShieldCheck, ChevronRight } from 'lucide-react';

export default function CertificationsPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <div className="min-h-screen bg-[#FAFCF9] text-slate-900 flex flex-col font-sans">
      <Header onOpenQuoteModal={() => setQuoteModalOpen(true)} />

      {/* Banner */}
      <section className="bg-slate-950 text-white py-16 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>International Quality Accreditations</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white">
              Certifications & Regulatory Compliance
            </h1>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Mishari Phytolabs operates under strict global compliance frameworks audited by independent international registrars including TÜV SÜD, SGS, Star-K, and US FDA.
            </p>
          </div>
        </div>
      </section>

      {/* Certification Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CERTIFICATIONS_DATA.map((cert) => (
              <div
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-xl hover:border-emerald-500 transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                      {cert.code}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">Issuing Authority: <strong>{cert.issuer}</strong></p>
                  <p className="text-xs text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-emerald-700 font-semibold">
                  <span>Click for Official Document</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
      <CertificationModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
      <WhatsAppWidget />
    </div>
  );
}
