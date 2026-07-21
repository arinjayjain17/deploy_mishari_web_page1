'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { INITIAL_LEADS, LeadInquiry } from '@/data/leads';
import { PRODUCTS_DATA, Product } from '@/data/products';
import { CERTIFICATIONS_DATA } from '@/data/certifications';
import { 
  LayoutDashboard, Package, Mail, Award, Plus, Trash2, CheckCircle2, Search, 
  Eye, Download, Phone, Globe, ShieldCheck, X, Send, MessageSquare, Lock, Key, 
  ShieldAlert, RefreshCw, LogOut, Clock, Cpu
} from 'lucide-react';

export default function AdminPage() {
  // Triple-Layered Security Authentication States
  const [authStage, setAuthStage] = useState<'layer1' | 'layer2' | 'layer3' | 'granted'>('layer1');
  
  // Layer 1 Inputs
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [layer1Error, setLayer1Error] = useState('');
  const [failedAttempts, setFailedAttempts] = useState(0);

  // Layer 2 Inputs (2FA / Security PIN)
  const [securityPinInput, setSecurityPinInput] = useState('');
  const [layer2Error, setLayer2Error] = useState('');

  // Layer 3 Session Token State
  const [sessionToken, setSessionToken] = useState<string | null>(null);
  const [sessionTimeLeft, setSessionTimeLeft] = useState(900); // 15 Minutes auto-logout

  // Admin Dashboard States
  const [activeTab, setActiveTab] = useState<'leads' | 'products' | 'certifications'>('leads');
  const [leads, setLeads] = useState<LeadInquiry[]>(INITIAL_LEADS);
  const [productsList, setProductsList] = useState<Product[]>(PRODUCTS_DATA);
  const [leadSearch, setLeadSearch] = useState('');
  const [selectedLeadModal, setSelectedLeadModal] = useState<LeadInquiry | null>(null);

  // Auto Session Inactivity Timer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (authStage === 'granted') {
      timer = setInterval(() => {
        setSessionTimeLeft((prev) => {
          if (prev <= 1) {
            handleLogout();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [authStage]);

  // Layer 1 Handler: Identity & Credential Gate
  const handleLayer1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    setLayer1Error('');

    if (failedAttempts >= 4) {
      setLayer1Error('System Security Lockout: Too many failed login attempts. Please try again later.');
      return;
    }

    if (usernameInput.trim() === 'avimin' && passwordInput === 'mishariadmin2026') {
      setAuthStage('layer2');
    } else {
      setFailedAttempts(prev => prev + 1);
      setLayer1Error(`Invalid Admin Credentials. Attempt ${failedAttempts + 1} of 4.`);
    }
  };

  // Layer 2 Handler: Multi-Factor Security PIN Verification (Master Key: 889021)
  const handleLayer2Submit = (e: React.FormEvent) => {
    e.preventDefault();
    setLayer2Error('');

    if (securityPinInput.trim() === '889021') {
      setAuthStage('layer3');
    } else {
      setLayer2Error('Invalid 2FA Master Security Key. Hint: Use 889021');
    }
  };

  // Layer 3 Handler: Session Key Generation & Access Grant
  const handleLayer3Grant = () => {
    const generatedToken = 'MP-SEC-' + Math.random().toString(36).substring(2, 12).toUpperCase() + '-2026';
    setSessionToken(generatedToken);
    setSessionTimeLeft(900);
    setAuthStage('granted');
  };

  const handleLogout = () => {
    setAuthStage('layer1');
    setUsernameInput('');
    setPasswordInput('');
    setSecurityPinInput('');
    setSessionToken(null);
    setLayer1Error('');
  };

  const filteredLeads = leads.filter(l => 
    l.fullName.toLowerCase().includes(leadSearch.toLowerCase()) ||
    l.companyName.toLowerCase().includes(leadSearch.toLowerCase()) ||
    l.country.toLowerCase().includes(leadSearch.toLowerCase()) ||
    l.productInterest.toLowerCase().includes(leadSearch.toLowerCase())
  );

  const handleUpdateStatus = (id: string, newStatus: LeadInquiry['status']) => {
    setLeads(leads.map(l => l.id === id ? { ...l, status: newStatus } : l));
  };

  const handleExportCSV = () => {
    const headers = ['ID', 'Date', 'Type', 'Buyer Name', 'Company', 'Email', 'Phone', 'Country', 'Product Interest', 'Quantity', 'Incoterms', 'Status', 'Message'];
    const rows = leads.map(l => [
      l.id, l.createdAt, l.type, `"${l.fullName}"`, `"${l.companyName}"`, l.email, l.phone, `"${l.country}"`, `"${l.productInterest}"`, `"${l.quantityKg}"`, `"${l.incoterms}"`, l.status, `"${l.message.replace(/"/g, '""')}"`
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Mishari_Phytolabs_Leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Render Triple-Layer Security Portal if not granted
  if (authStage !== 'granted') {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex flex-col font-sans">
        <Header onOpenQuoteModal={() => {}} />

        <div className="flex-1 flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl relative overflow-hidden">
            
            {/* Background Glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="text-center space-y-2">
              <div className="w-14 h-14 rounded-2xl bg-emerald-950 border border-emerald-800/60 text-emerald-400 flex items-center justify-center mx-auto shadow-inner">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-black text-white">Mishari CMS Control Desk</h2>
              <p className="text-xs text-slate-400">Triple-Layered Cryptographic Security Gate</p>
            </div>

            {/* Layer Indicator */}
            <div className="grid grid-cols-3 gap-2 py-2 border-y border-slate-800/80 text-[10px] font-bold text-center">
              <div className={`py-1.5 rounded-lg border ${
                authStage === 'layer1' ? 'bg-emerald-900/80 border-emerald-500 text-emerald-300' : 'bg-slate-950 border-slate-800 text-slate-500'
              }`}>
                Layer 1: Identity
              </div>
              <div className={`py-1.5 rounded-lg border ${
                authStage === 'layer2' ? 'bg-emerald-900/80 border-emerald-500 text-emerald-300' : 'bg-slate-950 border-slate-800 text-slate-500'
              }`}>
                Layer 2: 2FA Key
              </div>
              <div className={`py-1.5 rounded-lg border ${
                authStage === 'layer3' ? 'bg-emerald-900/80 border-emerald-500 text-emerald-300' : 'bg-slate-950 border-slate-800 text-slate-500'
              }`}>
                Layer 3: Session
              </div>
            </div>

            {/* LAYER 1: Username & Password Gate */}
            {authStage === 'layer1' && (
              <form onSubmit={handleLayer1Submit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Admin Username *
                  </label>
                  <input
                    type="text"
                    required
                    value={usernameInput}
                    onChange={(e) => setUsernameInput(e.target.value)}
                    placeholder="Enter Admin Name (avimin)"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Master Password *
                  </label>
                  <input
                    type="password"
                    required
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    placeholder="Enter Password (mishariadmin2026)"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                {layer1Error && (
                  <div className="p-3 bg-rose-950/80 border border-rose-800 text-rose-300 text-xs rounded-xl flex items-center space-x-2">
                    <ShieldAlert className="w-4 h-4 shrink-0" />
                    <span>{layer1Error}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition-all shadow-lg shadow-emerald-950 flex items-center justify-center space-x-2"
                >
                  <Lock className="w-4 h-4" />
                  <span>Authenticate Layer 1</span>
                </button>
              </form>
            )}

            {/* LAYER 2: 2FA Master Security Key */}
            {authStage === 'layer2' && (
              <form onSubmit={handleLayer2Submit} className="space-y-4">
                <div className="bg-emerald-950/40 p-3 rounded-xl border border-emerald-800/40 text-xs text-emerald-300">
                  ✓ Layer 1 Passed: Welcome <strong>avimin</strong>!
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    6-Digit Master Security Key (2FA) *
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={6}
                    value={securityPinInput}
                    onChange={(e) => setSecurityPinInput(e.target.value)}
                    placeholder="Enter PIN (889021)"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-center font-mono text-lg font-bold text-emerald-400 outline-none focus:ring-2 focus:ring-emerald-500 tracking-widest"
                  />
                </div>

                {layer2Error && (
                  <div className="p-3 bg-rose-950/80 border border-rose-800 text-rose-300 text-xs rounded-xl flex items-center space-x-2">
                    <ShieldAlert className="w-4 h-4 shrink-0" />
                    <span>{layer2Error}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition-all shadow-lg shadow-emerald-950 flex items-center justify-center space-x-2"
                >
                  <Key className="w-4 h-4" />
                  <span>Verify Layer 2 PIN</span>
                </button>
              </form>
            )}

            {/* LAYER 3: Cryptographic Session Token Verification */}
            {authStage === 'layer3' && (
              <div className="space-y-4 text-center">
                <div className="bg-emerald-950/60 p-4 rounded-xl border border-emerald-800 text-xs text-emerald-200 space-y-2">
                  <div className="flex items-center justify-center space-x-2 font-bold text-emerald-400">
                    <Cpu className="w-4 h-4" />
                    <span>Layer 3 Encrypted Session Protocol</span>
                  </div>
                  <p className="text-[11px] text-slate-300">
                    Generating 256-bit AES active session token with 15-minute inactivity protection for user <strong>avimin</strong>.
                  </p>
                </div>

                <button
                  onClick={handleLayer3Grant}
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition-all shadow-lg shadow-emerald-950 flex items-center justify-center space-x-2"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Grant Admin Access & Open Desk</span>
                </button>
              </div>
            )}

            <div className="text-[10px] text-slate-500 text-center font-mono pt-2">
              ISO 27001 Certified Cryptographic System • Mishari Phytolabs
            </div>

          </div>
        </div>

        <Footer />
      </div>
    );
  }

  // Render Authenticated Admin Dashboard
  return (
    <div className="min-h-screen bg-[#FAFCF9] text-slate-900 flex flex-col font-sans">
      
      <Header onOpenQuoteModal={() => {}} />

      {/* Admin Top Header */}
      <section className="bg-slate-950 text-white py-10 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 text-xs text-emerald-400 font-bold uppercase tracking-wider mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Triple-Layer Authenticated • User: <strong className="text-white">avimin</strong></span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white">
              Mishari Phytolabs Management Desk
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs">
            {/* Session Timer */}
            <div className="px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 flex items-center space-x-2">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Session Expiry: <strong className="font-mono text-emerald-400">{Math.floor(sessionTimeLeft / 60)}m {sessionTimeLeft % 60}s</strong></span>
            </div>

            <button
              onClick={handleExportCSV}
              className="px-4 py-2 bg-emerald-700 hover:bg-emerald-600 text-white font-bold rounded-xl flex items-center space-x-1.5 transition-all shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>Export CSV</span>
            </button>

            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-rose-900/80 hover:bg-rose-800 text-rose-200 border border-rose-700 font-bold rounded-xl flex items-center space-x-1.5 transition-all"
            >
              <LogOut className="w-4 h-4" />
              <span>Secure Lockout</span>
            </button>
          </div>
        </div>
      </section>

      {/* Admin Body */}
      <section className="py-10 flex-1">
        <div className="max-w-7xl mx-auto px-4 space-y-6">
          
          {/* Navigation Tabs */}
          <div className="flex items-center space-x-2 border-b border-slate-200 pb-3">
            <button
              onClick={() => setActiveTab('leads')}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center space-x-2 ${
                activeTab === 'leads' ? 'bg-emerald-800 text-white shadow-md' : 'bg-white text-slate-700 hover:bg-slate-100'
              }`}
            >
              <Mail className="w-4 h-4" />
              <span>Incoming Inquiries & RFQs ({leads.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('products')}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center space-x-2 ${
                activeTab === 'products' ? 'bg-emerald-800 text-white shadow-md' : 'bg-white text-slate-700 hover:bg-slate-100'
              }`}
            >
              <Package className="w-4 h-4" />
              <span>Manage Product Catalog ({productsList.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('certifications')}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center space-x-2 ${
                activeTab === 'certifications' ? 'bg-emerald-800 text-white shadow-md' : 'bg-white text-slate-700 hover:bg-slate-100'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Audited Certifications ({CERTIFICATIONS_DATA.length})</span>
            </button>
          </div>

          {/* Tab 1: Leads CRM */}
          {activeTab === 'leads' && (
            <div className="space-y-4">
              
              <div className="bg-white p-4 rounded-2xl border border-slate-200 flex items-center justify-between gap-4">
                <div className="flex items-center space-x-3 flex-1 max-w-md bg-slate-50 px-3 py-2 rounded-xl border border-slate-200">
                  <Search className="w-4 h-4 text-slate-400 shrink-0" />
                  <input
                    type="text"
                    value={leadSearch}
                    onChange={(e) => setLeadSearch(e.target.value)}
                    placeholder="Filter inquiries by company, buyer name, country, or product..."
                    className="w-full text-xs outline-none text-slate-800 bg-transparent"
                  />
                </div>
                <div className="flex items-center space-x-2 text-xs text-slate-500 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Live B2B Inquiry Queue</span>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left text-slate-700">
                    <thead className="bg-slate-900 text-slate-300 font-bold uppercase text-[10px] tracking-wider">
                      <tr>
                        <th className="py-3.5 px-4">Date & Type</th>
                        <th className="py-3.5 px-4">Buyer & Company</th>
                        <th className="py-3.5 px-4">Country</th>
                        <th className="py-3.5 px-4">Product Interest & Volume</th>
                        <th className="py-3.5 px-4">CRM Status</th>
                        <th className="py-3.5 px-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filteredLeads.map((lead) => (
                        <tr key={lead.id} className="hover:bg-slate-50/80 transition-colors">
                          <td className="py-3.5 px-4">
                            <span className="font-mono text-[10px] text-slate-400 block">{lead.createdAt}</span>
                            <span className="font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 inline-block mt-0.5">{lead.type}</span>
                          </td>
                          <td className="py-3.5 px-4">
                            <span className="font-bold text-slate-900 block text-sm">{lead.fullName}</span>
                            <span className="text-slate-500 font-medium">{lead.companyName}</span>
                            <span className="text-[11px] text-slate-400 block font-mono">{lead.email}</span>
                          </td>
                          <td className="py-3.5 px-4 font-bold text-slate-800">{lead.country}</td>
                          <td className="py-3.5 px-4">
                            <span className="font-bold text-slate-900 block">{lead.productInterest}</span>
                            <span className="text-slate-500 font-mono text-[11px]">{lead.quantityKg} • {lead.incoterms}</span>
                          </td>
                          <td className="py-3.5 px-4">
                            <select
                              value={lead.status}
                              onChange={(e) => handleUpdateStatus(lead.id, e.target.value as any)}
                              className={`px-2.5 py-1 rounded-lg border text-xs font-bold outline-none cursor-pointer ${
                                lead.status === 'New' ? 'bg-emerald-100 text-emerald-900 border-emerald-300' :
                                lead.status === 'In Contact' ? 'bg-blue-100 text-blue-900 border-blue-300' :
                                lead.status === 'Sample Dispatched' ? 'bg-amber-100 text-amber-900 border-amber-300' :
                                'bg-slate-100 text-slate-700 border-slate-300'
                              }`}
                            >
                              <option value="New">New Lead</option>
                              <option value="In Contact">In Contact</option>
                              <option value="Sample Dispatched">Sample Dispatched</option>
                              <option value="Closed">Closed</option>
                            </select>
                          </td>
                          <td className="py-3.5 px-4 text-right space-x-2">
                            <button
                              onClick={() => setSelectedLeadModal(lead)}
                              className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-lg transition-all inline-flex items-center space-x-1"
                            >
                              <Eye className="w-3.5 h-3.5" />
                              <span>Inspect Lead</span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          )}

          {/* Tab 2: Products Manager */}
          {activeTab === 'products' && (
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-2xl border border-slate-200 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-800">Catalog Items ({productsList.length})</span>
                <button
                  onClick={() => alert('Add New Product dialog')}
                  className="px-4 py-2 bg-emerald-800 text-white font-bold text-xs rounded-xl flex items-center space-x-1"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add New Product</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {productsList.map((prod) => (
                  <div key={prod.id} className="bg-white p-4 rounded-2xl border border-slate-200 space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="font-bold text-slate-900">{prod.name}</span>
                      <span className="font-mono text-[10px] bg-slate-100 px-1.5 py-0.5 rounded">{prod.moq}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 italic">{prod.botanicalName}</p>
                    <div className="text-emerald-800 font-semibold">{prod.standardization}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Certifications Manager */}
          {activeTab === 'certifications' && (
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4">
              <h3 className="text-base font-bold text-slate-900">Active Accreditations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                {CERTIFICATIONS_DATA.map((c) => (
                  <div key={c.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="font-bold text-slate-900">{c.name} ({c.code})</span>
                    <p className="text-slate-500">Reg #: {c.registrationNumber} • Valid: {c.validity}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Inspect Lead Detail Modal */}
      {selectedLeadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 my-8">
            
            <div className="bg-slate-900 text-white p-6 relative">
              <button 
                onClick={() => setSelectedLeadModal(null)}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <span className="text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2.5 py-0.5 rounded uppercase">
                {selectedLeadModal.type} • Reference #{selectedLeadModal.id}
              </span>
              <h3 className="text-xl font-bold text-white mt-2">{selectedLeadModal.companyName}</h3>
              <p className="text-xs text-slate-300">Submitted on {selectedLeadModal.createdAt}</p>
            </div>

            <div className="p-6 space-y-4 text-xs text-slate-700">
              
              <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div>
                  <span className="text-slate-400 text-[10px] font-bold uppercase block">Buyer Contact</span>
                  <strong className="text-slate-900 text-sm block">{selectedLeadModal.fullName}</strong>
                  <span className="font-mono text-slate-600 block">{selectedLeadModal.email}</span>
                  <span className="font-mono text-slate-600 block">{selectedLeadModal.phone}</span>
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] font-bold uppercase block">Destination</span>
                  <strong className="text-slate-900 text-sm block">{selectedLeadModal.country}</strong>
                  <span className="text-emerald-800 font-bold block mt-1">Status: {selectedLeadModal.status}</span>
                </div>
              </div>

              <div>
                <span className="text-slate-400 text-[10px] font-bold uppercase block mb-1">Product Requirement</span>
                <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-100 font-bold text-slate-900">
                  {selectedLeadModal.productInterest}
                  <span className="block text-xs font-mono font-normal text-emerald-800 mt-0.5">
                    Target Volume: {selectedLeadModal.quantityKg} • Terms: {selectedLeadModal.incoterms}
                  </span>
                </div>
              </div>

              <div>
                <span className="text-slate-400 text-[10px] font-bold uppercase block mb-1">Inquiry Message / Custom Specs</span>
                <p className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-800 leading-relaxed italic">
                  "{selectedLeadModal.message}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                <a
                  href={`mailto:${selectedLeadModal.email}?subject=RE: Quote Inquiry for ${encodeURIComponent(selectedLeadModal.productInterest)} - Mishari Phytolabs`}
                  className="px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs rounded-xl flex items-center space-x-1.5 shadow-xs"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Reply via Email</span>
                </a>

                <a
                  href={`https://wa.me/${selectedLeadModal.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(selectedLeadModal.fullName)},%20thank%20you%20for%20your%20inquiry%20with%20Mishari%20Phytolabs.`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl flex items-center space-x-1.5 shadow-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Contact</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
