'use client';

import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, FileText, Globe } from 'lucide-react';
import { PRODUCTS_DATA } from '@/data/products';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProduct?: string;
}

export default function QuoteModal({ isOpen, onClose, preselectedProduct }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    country: 'United States',
    productInterest: preselectedProduct || PRODUCTS_DATA[0].name,
    quantityKg: '100',
    incoterms: 'CIF (Cost, Insurance & Freight)',
    message: '',
    needCoa: true,
    needMsds: true,
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (preselectedProduct) {
      setFormData(prev => ({ ...prev, productInterest: preselectedProduct }));
    }
  }, [preselectedProduct]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 my-8">
        
        {/* Header Strip */}
        <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-slate-900 text-white p-6 relative">
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center space-x-2 text-emerald-300 text-xs font-semibold tracking-wider uppercase mb-1">
            <Globe className="w-4 h-4" />
            <span>Global B2B Inquiry Desk</span>
          </div>
          <h3 className="text-2xl font-bold text-white">Request Commercial Quote & Specifications</h3>
          <p className="text-emerald-100/80 text-sm mt-1">
            Get direct manufacturer pricing, batch COA, and technical documentation within 12 business hours.
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">RFQ Received Successfully!</h4>
              <p className="text-slate-600 text-sm mt-2 max-w-md mx-auto">
                Thank you, <span className="font-semibold text-slate-800">{formData.fullName}</span>. Our export sales manager for <span className="font-semibold text-slate-800">{formData.country}</span> has received your inquiry for <span className="font-semibold text-emerald-700">{formData.productInterest}</span>.
              </p>
              <div className="mt-6 p-4 bg-emerald-50 rounded-xl text-xs text-emerald-800 flex items-center justify-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Reference ID: <strong className="font-mono">RFQ-2026-{(Math.random() * 89999 + 10000).toFixed(0)}</strong> • Guaranteed NDA Protection</span>
              </div>
              <button
                onClick={handleReset}
                className="mt-8 px-8 py-3 bg-emerald-800 hover:bg-emerald-900 text-white font-medium rounded-xl transition-all shadow-md"
              >
                Close & Return to Browsing
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Dr. Sarah Jenkins"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm outline-none text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. BioNutra Global Inc."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm outline-none text-slate-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="s.jenkins@bionutra.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm outline-none text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 019-2831"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm outline-none text-slate-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Product Interest *
                  </label>
                  <select
                    value={formData.productInterest}
                    onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm outline-none text-slate-800 bg-white"
                  >
                    {PRODUCTS_DATA.map((prod) => (
                      <option key={prod.id} value={prod.name}>
                        {prod.name}
                      </option>
                    ))}
                    <option value="Custom Phytochemical Blend">Custom Formulation / OEM Blend</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Destination Country *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    placeholder="e.g. Germany, USA, Japan"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm outline-none text-slate-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Required Quantity (kg)
                  </label>
                  <input
                    type="text"
                    value={formData.quantityKg}
                    onChange={(e) => setFormData({ ...formData, quantityKg: e.target.value })}
                    placeholder="e.g. 100 kg, 1 Metric Ton"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm outline-none text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Preferred Incoterms
                  </label>
                  <select
                    value={formData.incoterms}
                    onChange={(e) => setFormData({ ...formData, incoterms: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm outline-none text-slate-800 bg-white"
                  >
                    <option value="CIF">CIF (Cost, Insurance & Freight)</option>
                    <option value="FOB">FOB (Free on Board - Nhava Sheva / Mundra Port)</option>
                    <option value="DDP">DDP (Delivered Duty Paid)</option>
                    <option value="EXW">EXW (Ex Works Factory)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Required Documents
                </label>
                <div className="flex items-center space-x-6 text-sm">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.needCoa}
                      onChange={(e) => setFormData({ ...formData, needCoa: e.target.checked })}
                      className="w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500"
                    />
                    <span className="text-slate-700">Batch COA</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.needMsds}
                      onChange={(e) => setFormData({ ...formData, needMsds: e.target.checked })}
                      className="w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500"
                    />
                    <span className="text-slate-700">MSDS / Safety Sheet</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Specific Specifications or Custom Markers
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Specify target active marker %, mesh size, solubility, or application requirements..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm outline-none text-slate-800"
                ></textarea>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center space-x-1 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>ISO 27001 Encrypted & Confidential</span>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="px-8 py-3 bg-emerald-800 hover:bg-emerald-900 text-white font-semibold rounded-xl transition-all shadow-lg shadow-emerald-900/20 flex items-center space-x-2 disabled:opacity-50"
                >
                  {loading ? (
                    <span>Processing...</span>
                  ) : (
                    <>
                      <span>Submit RFQ Request</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
}
