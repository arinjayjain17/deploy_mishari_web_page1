'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import QuoteModal from '@/components/ui/QuoteModal';
import WhatsAppWidget from '@/components/ui/WhatsAppWidget';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, Clock, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    inquiryType: 'Sales Quote',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FAFCF9] text-slate-900 flex flex-col font-sans">
      <Header onOpenQuoteModal={() => setQuoteModalOpen(true)} />

      {/* Banner */}
      <section className="bg-slate-950 text-white py-16 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl space-y-3">
            <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest">
              Direct Corporate Desk
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white">
              Contact Mishari Phytolabs
            </h1>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Connect directly with our corporate management, international export sales desk, or technical R&D team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Grid & Inquiry Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Contact Details Column */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h3 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-emerald-700" />
                  <span>Corporate Office & Registered Address</span>
                </h3>
                <p className="text-sm font-semibold text-slate-900 leading-relaxed">
                  1 Ka 38, Manu Marg, Alwar, Rajasthan, India
                </p>
              </div>

              <div className="bg-emerald-900 text-white p-6 rounded-2xl space-y-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-800 flex items-center justify-center text-white">
                    <img src="/logo.png" alt="Mishari Phytolabs Logo" className="w-7 h-7 object-contain" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Direct Communication</h4>
                    <p className="text-xs text-emerald-200">Export & Corporate Management</p>
                  </div>
                </div>

                <div className="pt-2 text-xs space-y-2.5 border-t border-emerald-800/80">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-emerald-300" />
                    <span>Email: <a href="mailto:director@mishariphytolabs.in" className="text-emerald-300 font-bold underline">director@mishariphytolabs.in</a></span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-emerald-300" />
                    <span>Contact Number: <a href="tel:+919001969764" className="text-emerald-300 font-mono font-bold hover:underline">+91-9001969764</a></span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-emerald-300" />
                    <span>Business Hours: Mon – Sat (09:00 AM – 07:00 PM IST)</span>
                  </div>
                </div>
              </div>

            </div>

            {/* B2B Inquiry Form Column */}
            <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-slate-200 shadow-xs space-y-6">
              
              <h3 className="text-2xl font-bold text-slate-900">B2B Business Inquiry & RFQ</h3>

              {formSubmitted ? (
                <div className="py-12 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="text-xl font-bold text-slate-900">Thank You for Contacting Us!</h4>
                  <p className="text-xs text-slate-600">Our export specialist will respond to {formData.email} within 12 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="Dr. Amanda Ross"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Company Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="Apex Health Labs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="a.ross@apexhealth.com"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Inquiry Type</label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({...formData, inquiryType: e.target.value})}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                      >
                        <option value="Sales Quote">Bulk Sales RFQ</option>
                        <option value="Sample Request">Sample Request</option>
                        <option value="Technical Inquiry">Technical COA / Testing Inquiry</option>
                        <option value="Distributor Application">Distributor Partnership</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Message & Requirements</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="Specify products, target volume in kg, and preferred Incoterms..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="px-8 py-3.5 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs rounded-xl shadow-md flex items-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}

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
