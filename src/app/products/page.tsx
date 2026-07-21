'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import QuoteModal from '@/components/ui/QuoteModal';
import WhatsAppWidget from '@/components/ui/WhatsAppWidget';
import { PRODUCTS_DATA, CATEGORIES, Product } from '@/data/products';
import { Search, Filter, ArrowRight, ChevronRight, ShieldCheck, FileText, Download } from 'lucide-react';

export default function ProductsPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedProductForQuote, setSelectedProductForQuote] = useState<string | undefined>(undefined);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedGrade, setSelectedGrade] = useState('all');

  const handleOpenQuote = (productName?: string) => {
    setSelectedProductForQuote(productName);
    setQuoteModalOpen(true);
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((p) => {
      const matchesSearch = 
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.botanicalName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.activeMarker.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.commonName.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
      const matchesIndustry = selectedIndustry === 'all' || p.industries.includes(selectedIndustry);
      const matchesGrade = selectedGrade === 'all' || p.grade === selectedGrade;

      return matchesSearch && matchesCategory && matchesIndustry && matchesGrade;
    });
  }, [searchTerm, selectedCategory, selectedIndustry, selectedGrade]);

  return (
    <div className="min-h-screen bg-[#FAFCF9] text-slate-900 flex flex-col font-sans">
      
      <Header onOpenQuoteModal={handleOpenQuote} />

      {/* Page Banner */}
      <section className="bg-slate-950 text-white py-14 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl space-y-3">
            <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest">
              Standardized Botanical Ingredients Catalog
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white">
              Phytochemicals, Extracts & Active Ingredients
            </h1>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Explore our comprehensive portfolio of standardized herbal extracts, organic powders, plant proteins, essential oils, and liposomal bioavailability matrices.
            </p>
          </div>
        </div>
      </section>

      {/* Catalog Main Content */}
      <section className="py-12 flex-1">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Filter Sidebar */}
            <div className="lg:col-span-3 space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6 sticky top-24">
                
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center space-x-2 text-slate-900 font-bold text-sm">
                    <Filter className="w-4 h-4 text-emerald-700" />
                    <span>Filter Catalog</span>
                  </div>
                  {(searchTerm || selectedCategory !== 'all' || selectedIndustry !== 'all' || selectedGrade !== 'all') && (
                    <button
                      onClick={() => {
                        setSearchTerm('');
                        setSelectedCategory('all');
                        setSelectedIndustry('all');
                        setSelectedGrade('all');
                      }}
                      className="text-[11px] font-bold text-emerald-700 hover:underline"
                    >
                      Reset All
                    </button>
                  )}
                </div>

                {/* Category Filter */}
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Product Category
                  </label>
                  <div className="space-y-1">
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`w-full text-left text-xs px-3 py-2 rounded-xl transition-all flex items-center justify-between ${
                          selectedCategory === cat.id
                            ? 'bg-emerald-800 text-white font-bold'
                            : 'text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <span className="truncate">{cat.label}</span>
                        <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                          selectedCategory === cat.id ? 'bg-emerald-900 text-emerald-200' : 'bg-slate-100 text-slate-500'
                        }`}>
                          {cat.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Industry Filter */}
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Target Industry
                  </label>
                  <select
                    value={selectedIndustry}
                    onChange={(e) => setSelectedIndustry(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-300 bg-white outline-none focus:ring-2 focus:ring-emerald-500 text-slate-800"
                  >
                    <option value="all">All Target Industries</option>
                    <option value="Pharmaceutical">Pharmaceutical</option>
                    <option value="Nutraceutical">Nutraceutical</option>
                    <option value="Cosmetics">Cosmetics</option>
                    <option value="Food & Beverage">Food & Beverage</option>
                    <option value="Sports Nutrition">Sports Nutrition</option>
                    <option value="Animal Nutrition">Animal Nutrition</option>
                  </select>
                </div>

                {/* Grade Filter */}
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Pharmacopoeial Grade
                  </label>
                  <select
                    value={selectedGrade}
                    onChange={(e) => setSelectedGrade(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-300 bg-white outline-none focus:ring-2 focus:ring-emerald-500 text-slate-800"
                  >
                    <option value="all">All Grades</option>
                    <option value="Pharma Grade">Pharma Grade</option>
                    <option value="Nutraceutical Grade">Nutraceutical Grade</option>
                    <option value="Cosmetic Grade">Cosmetic Grade</option>
                    <option value="Food Grade">Food Grade</option>
                  </select>
                </div>

              </div>
            </div>

            {/* Product Grid & Search */}
            <div className="lg:col-span-9 space-y-6">
              
              {/* Search Bar */}
              <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs flex items-center space-x-3">
                <Search className="w-5 h-5 text-slate-400 shrink-0" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by botanical name (e.g. Withania), active marker (e.g. Curcumin 95%), or common name..."
                  className="w-full text-sm outline-none text-slate-800 placeholder:text-slate-400 bg-transparent"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="text-xs font-bold text-slate-400 hover:text-slate-600 px-2"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Result Count Header */}
              <div className="flex items-center justify-between text-xs text-slate-500 font-medium px-1">
                <span>Showing <strong>{filteredProducts.length}</strong> standardized botanical products</span>
                <span className="font-mono text-emerald-800 font-bold">WHO-cGMP & ISO Tested</span>
              </div>

              {/* Products List Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-emerald-500 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-full">
                          {product.categoryLabel}
                        </span>
                        <span className="text-[10px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded font-semibold">
                          {product.grade}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-xs text-slate-500 italic mt-0.5">{product.botanicalName}</p>

                      <div className="mt-4 space-y-2 text-xs border-t border-slate-100 pt-4">
                        <div className="flex justify-between text-slate-700">
                          <span className="text-slate-500">Active Marker:</span>
                          <span className="font-bold text-slate-900 text-right">{product.standardization}</span>
                        </div>
                        <div className="flex justify-between text-slate-700">
                          <span className="text-slate-500">Plant Part Used:</span>
                          <span className="font-medium">{product.plantPartUsed}</span>
                        </div>
                        <div className="flex justify-between text-slate-700">
                          <span className="text-slate-500">Solubility:</span>
                          <span className="font-medium text-right text-slate-800 truncate max-w-[180px]">{product.solubility}</span>
                        </div>
                        <div className="flex justify-between text-slate-700">
                          <span className="text-slate-500">Moq:</span>
                          <span className="font-mono font-bold text-emerald-800">{product.moq}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        href={`/products/${product.category}/${product.slug}`}
                        className="text-xs font-bold text-slate-700 hover:text-emerald-800 flex items-center space-x-1"
                      >
                        <span>Full Specs Sheet</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>

                      <button
                        onClick={() => handleOpenQuote(product.name)}
                        className="px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-medium rounded-xl transition-all shadow-xs"
                      >
                        Request Quote
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="bg-white p-12 rounded-2xl border border-slate-200 text-center space-y-4">
                  <div className="w-12 h-12 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                    ?
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">No Matching Botanical Products Found</h4>
                  <p className="text-xs text-slate-500 max-w-md mx-auto">
                    We specialize in custom extraction ratios and tailormade active markers. Contact our R&D team directly to discuss your custom specification.
                  </p>
                  <button
                    onClick={() => handleOpenQuote('Custom Phytochemical Blend')}
                    className="px-6 py-2.5 bg-emerald-800 text-white font-medium text-xs rounded-xl shadow-md"
                  >
                    Request Custom Extraction Formulation
                  </button>
                </div>
              )}

            </div>

          </div>

        </div>
      </section>

      <Footer />

      <QuoteModal 
        isOpen={quoteModalOpen} 
        onClose={() => setQuoteModalOpen(false)} 
        preselectedProduct={selectedProductForQuote}
      />

      <WhatsAppWidget />

    </div>
  );
}
