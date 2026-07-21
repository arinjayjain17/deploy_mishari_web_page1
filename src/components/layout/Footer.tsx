'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Award, Mail, Phone, MapPin, Globe, ArrowRight } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '@/data/certifications';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Certification Badges Strip */}
        <div className="pb-12 mb-12 border-b border-slate-800">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">Global Compliance</span>
            <h4 className="text-lg font-bold text-white mt-1">Certified Quality & International Manufacturing Standards</h4>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 text-center">
            {CERTIFICATIONS_DATA.map((cert) => (
              <div key={cert.id} className="p-3 bg-slate-900/60 rounded-xl border border-slate-800/80 flex flex-col items-center justify-center space-y-1 hover:border-emerald-500/50 transition-all">
                <Award className="w-6 h-6 text-emerald-400" />
                <span className="text-xs font-bold text-white">{cert.code}</span>
                <span className="text-[10px] text-slate-400 truncate w-full">{cert.issuer.split('/')[0]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12">
          
          {/* Brand Info & Logo */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 relative">
                <img 
                  src="/logo.png" 
                  alt="Mishari Phytolabs Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">
                MISHARI <span className="text-emerald-400 font-light">PHYTOLABS</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Mishari Phytolabs Private Limited is an Indian manufacturer and global supplier of botanical extracts, herbal ingredients, nutraceutical raw materials, phytochemicals, and customized plant-based solutions.
            </p>
            <div className="flex items-center space-x-2 text-xs text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>WHO-cGMP • ISO 9001:2015 • US FDA Registered</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h5 className="text-white text-xs font-bold uppercase tracking-wider">Product Categories</h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/products?category=herbal-extracts" className="hover:text-emerald-400 transition-colors">Standardized Herbal Extracts</Link></li>
              <li><Link href="/products?category=botanical-powders" className="hover:text-emerald-400 transition-colors">Organic Botanical Powders</Link></li>
              <li><Link href="/products?category=nutraceutical-ingredients" className="hover:text-emerald-400 transition-colors">Nutraceutical Ingredients</Link></li>
              <li><Link href="/products?category=plant-proteins" className="hover:text-emerald-400 transition-colors">Plant Protein Isolates</Link></li>
              <li><Link href="/products?category=essential-oils" className="hover:text-emerald-400 transition-colors">Pure Essential Oils</Link></li>
              <li><Link href="/products?category=customized-ingredients" className="hover:text-emerald-400 transition-colors">Liposomal Formulations</Link></li>
            </ul>
          </div>

          {/* Company & Operations */}
          <div className="space-y-3">
            <h5 className="text-white text-xs font-bold uppercase tracking-wider">Company & Quality</h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/manufacturing" className="hover:text-emerald-400 transition-colors">Manufacturing Infrastructure</Link></li>
              <li><Link href="/quality-assurance" className="hover:text-emerald-400 transition-colors">Quality Control & Laboratory</Link></li>
              <li><Link href="/rd" className="hover:text-emerald-400 transition-colors">Research & Development</Link></li>
              <li><Link href="/certifications" className="hover:text-emerald-400 transition-colors">Accreditations & Certificates</Link></li>
              <li><Link href="/global-exports" className="hover:text-emerald-400 transition-colors">Global Export Logistics</Link></li>
              <li><Link href="/resources" className="hover:text-emerald-400 transition-colors">Whitepapers & Blog</Link></li>
            </ul>
          </div>

          {/* Corporate Contact */}
          <div className="space-y-3">
            <h5 className="text-white text-xs font-bold uppercase tracking-wider">Corporate Headquarters</h5>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>1 Ka 38, Manu Marg, Alwar, Rajasthan, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="mailto:director@mishariphytolabs.in" className="hover:text-white">director@mishariphytolabs.in</a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+919001969764" className="hover:text-white font-mono">+91-9001969764</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Copyright */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Mishari Phytolabs Private Limited. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/resources" className="hover:text-slate-300">Privacy Policy</Link>
            <Link href="/resources" className="hover:text-slate-300">Terms of Supply</Link>
            <Link href="/resources" className="hover:text-slate-300">Quality Disclaimer</Link>
            <Link href="/admin" className="hover:text-emerald-400">CMS Portal</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
