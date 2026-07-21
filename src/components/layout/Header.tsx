'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ChevronDown, Search, Globe, Phone, Mail, FileText, 
  Menu, X, Sparkles, ShieldCheck, Award, Factory, FlaskConical, Package 
} from 'lucide-react';
import { CATEGORIES } from '@/data/products';

interface HeaderProps {
  onOpenQuoteModal: (productName?: string) => void;
}

export default function Header({ onOpenQuoteModal }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [region, setRegion] = useState('USD ($)');

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      
      {/* Top Utility Bar */}
      <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1.5 text-emerald-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>WHO-cGMP & US FDA Registered Manufacturer</span>
            </span>
            <span className="hidden md:inline text-slate-700">|</span>
            <span className="hidden md:flex items-center space-x-1 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <a href="mailto:director@mishariphytolabs.in">director@mishariphytolabs.in</a>
            </span>
            <span className="hidden lg:flex items-center space-x-1 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <a href="tel:+919001969764">+91-9001969764</a>
            </span>
          </div>

          <div className="flex items-center space-x-4 ml-auto">
            <div className="flex items-center space-x-1 bg-slate-900 px-2 py-0.5 rounded text-[11px] text-slate-300 border border-slate-800">
              <Globe className="w-3 h-3 text-emerald-400" />
              <select 
                value={region} 
                onChange={(e) => setRegion(e.target.value)}
                className="bg-transparent outline-none cursor-pointer text-slate-200"
              >
                <option value="USD ($)" className="bg-slate-900 text-white">Global (USD $)</option>
                <option value="EUR (€)" className="bg-slate-900 text-white">Europe (EUR €)</option>
                <option value="INR (₹)" className="bg-slate-900 text-white">India (INR ₹)</option>
                <option value="JPY (¥)" className="bg-slate-900 text-white">Japan (JPY ¥)</option>
              </select>
            </div>

            <Link href="/admin" className="text-[11px] hover:text-emerald-400 transition-colors font-medium">
              CMS Admin Desk
            </Link>
          </div>

        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Official Brand Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative w-11 h-11 transition-transform group-hover:scale-105">
            <img 
              src="/logo.png" 
              alt="Mishari Phytolabs Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <span className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-emerald-800 transition-colors block leading-tight">
              MISHARI <span className="text-emerald-600 font-light">PHYTOLABS</span>
            </span>
            <span className="block text-[9px] uppercase tracking-widest text-slate-500 font-semibold">
              Botanical Extracts & Phytochemicals
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium text-slate-700">
          
          <Link href="/" className="hover:text-emerald-700 transition-colors">
            Home
          </Link>

          {/* Products Mega Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('products')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link 
              href="/products"
              className="flex items-center space-x-1 hover:text-emerald-700 transition-colors py-2"
            >
              <span>Products</span>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </Link>

            {activeDropdown === 'products' && (
              <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-xl border border-slate-200 p-4 grid grid-cols-1 gap-2 animate-in fade-in-50 duration-200">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-3 py-1">
                  Product Categories
                </div>
                {CATEGORIES.filter(c => c.id !== 'all').map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/products?category=${cat.id}`}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-emerald-50 text-slate-800 hover:text-emerald-800 transition-all text-xs font-medium"
                  >
                    <span>{cat.label}</span>
                    <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-mono">
                      {cat.count}
                    </span>
                  </Link>
                ))}
                <div className="mt-2 pt-2 border-t border-slate-100">
                  <Link 
                    href="/products" 
                    className="block text-center text-xs font-bold text-emerald-700 hover:underline py-1"
                  >
                    Explore Full Product Catalog →
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/manufacturing" className="hover:text-emerald-700 transition-colors">
            Manufacturing
          </Link>

          <Link href="/quality-assurance" className="hover:text-emerald-700 transition-colors">
            Quality & QA
          </Link>

          <Link href="/rd" className="hover:text-emerald-700 transition-colors">
            R&D
          </Link>

          <Link href="/certifications" className="hover:text-emerald-700 transition-colors">
            Certifications
          </Link>

          <Link href="/global-exports" className="hover:text-emerald-700 transition-colors">
            Exports
          </Link>

          <Link href="/resources" className="hover:text-emerald-700 transition-colors">
            Resources
          </Link>

          <Link href="/contact" className="hover:text-emerald-700 transition-colors">
            Contact
          </Link>
        </nav>

        {/* Header Right Actions */}
        <div className="hidden sm:flex items-center space-x-3">
          <button
            onClick={() => onOpenQuoteModal()}
            className="px-5 py-2.5 bg-gradient-to-r from-emerald-800 to-emerald-900 hover:from-emerald-900 hover:to-slate-900 text-white font-medium text-xs rounded-xl shadow-md hover:shadow-lg transition-all flex items-center space-x-2"
          >
            <Sparkles className="w-4 h-4 text-emerald-300" />
            <span>Request Quote</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 p-4 space-y-3 animate-in slide-in-from-top-4">
          <Link 
            href="/" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-800 hover:text-emerald-700"
          >
            Home
          </Link>
          <Link 
            href="/products" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-800 hover:text-emerald-700"
          >
            Product Catalog
          </Link>
          <Link 
            href="/manufacturing" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-800 hover:text-emerald-700"
          >
            Manufacturing Infrastructure
          </Link>
          <Link 
            href="/quality-assurance" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-800 hover:text-emerald-700"
          >
            Quality Assurance & Lab
          </Link>
          <Link 
            href="/rd" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-800 hover:text-emerald-700"
          >
            Research & Innovation
          </Link>
          <Link 
            href="/certifications" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-800 hover:text-emerald-700"
          >
            Certifications (GMP/ISO)
          </Link>
          <Link 
            href="/global-exports" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-800 hover:text-emerald-700"
          >
            Global Exports & Shipping
          </Link>
          <Link 
            href="/resources" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-800 hover:text-emerald-700"
          >
            Resources & Blog
          </Link>
          <Link 
            href="/contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-800 hover:text-emerald-700"
          >
            Contact & Office Map
          </Link>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-3 bg-emerald-800 text-white font-medium text-sm rounded-xl text-center shadow-md"
            >
              Request a Quote
            </button>
          </div>
        </div>
      )}

    </header>
  );
}
