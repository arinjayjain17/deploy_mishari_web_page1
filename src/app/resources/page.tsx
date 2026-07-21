'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import QuoteModal from '@/components/ui/QuoteModal';
import WhatsAppWidget from '@/components/ui/WhatsAppWidget';
import { BLOGS_DATA } from '@/data/blogs';
import { FAQS_DATA } from '@/data/faqs';
import { FileText, Download, ArrowRight, HelpCircle, BookOpen } from 'lucide-react';

export default function ResourcesPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [activeFaqCategory, setActiveFaqCategory] = useState('All');

  const filteredFaqs = activeFaqCategory === 'All' 
    ? FAQS_DATA 
    : FAQS_DATA.filter(f => f.category === activeFaqCategory);

  return (
    <div className="min-h-screen bg-[#FAFCF9] text-slate-900 flex flex-col font-sans">
      <Header onOpenQuoteModal={() => setQuoteModalOpen(true)} />

      {/* Banner */}
      <section className="bg-slate-950 text-white py-16 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl space-y-3">
            <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest">
              Technical Resources & Insights
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white">
              Blog, Download Center & Knowledgebase
            </h1>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Scientific whitepapers, regulatory guidelines, downloadable specification templates, and frequently asked questions for B2B procurement managers.
            </p>
          </div>
        </div>
      </section>

      {/* Blog & Articles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 space-y-8">
          
          <div className="flex items-center space-x-2 text-emerald-800 font-bold text-sm uppercase tracking-wider">
            <BookOpen className="w-5 h-5" />
            <span>Latest Scientific Articles</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOGS_DATA.map((post) => (
              <div key={post.id} className="bg-[#FAFCF9] rounded-2xl border border-slate-200 p-6 space-y-3 flex flex-col justify-between hover:shadow-lg transition-all">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded">
                    {post.category}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mt-2">{post.title}</h3>
                  <p className="text-xs text-slate-600 line-clamp-3 mt-1 leading-relaxed">{post.excerpt}</p>
                </div>
                <div className="pt-3 border-t border-slate-200 text-xs text-slate-500 flex justify-between items-center">
                  <span>{post.date}</span>
                  <span className="font-semibold text-emerald-800">{post.readTime}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Searchable FAQs */}
      <section className="py-16 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          
          <div className="text-center space-y-2">
            <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase text-emerald-800">
              <HelpCircle className="w-4 h-4" />
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900">Procurement & Quality FAQs</h2>
          </div>

          <div className="space-y-4">
            {filteredFaqs.map((faq) => (
              <div key={faq.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                <h4 className="text-base font-bold text-slate-900">{faq.question}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{faq.answer}</p>
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
