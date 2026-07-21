'use client';

import React from 'react';
import { X, Award, CheckCircle2, ShieldCheck, Calendar, FileText, Download } from 'lucide-react';
import { Certification } from '@/data/certifications';

interface CertificationModalProps {
  cert: Certification | null;
  onClose: () => void;
}

export default function CertificationModal({ cert, onClose }: CertificationModalProps) {
  if (!cert) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4 overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 my-8">
        
        {/* Top Header */}
        <div className={`bg-gradient-to-r ${cert.badgeColor} text-white p-6 md:p-8 relative`}>
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-4 h-4" />
            <span>Verified Official Certification</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-extrabold text-white">{cert.name}</h3>
          <p className="text-white/90 text-sm mt-1 max-w-xl">
            Issued by <strong className="text-white">{cert.issuer}</strong> • Registration #: <span className="font-mono bg-white/20 px-2 py-0.5 rounded">{cert.registrationNumber}</span>
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 space-y-6">
          
          {/* Certificate Graphic Simulation */}
          <div className="bg-slate-50 border-2 border-dashed border-slate-300 rounded-2xl p-6 text-center relative overflow-hidden">
            <div className="absolute -right-8 -bottom-8 opacity-10">
              <Award className="w-64 h-64 text-slate-800" />
            </div>
            
            <div className="max-w-md mx-auto space-y-3">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto font-black text-lg">
                ✓
              </div>
              <h4 className="text-slate-900 font-serif font-bold text-xl uppercase tracking-widest">
                Certificate of Compliance
              </h4>
              <p className="text-xs text-slate-500 font-mono">
                {cert.scope}
              </p>
              <div className="py-2 border-y border-slate-200 flex justify-between text-xs text-slate-600">
                <span>Valid Until: <strong>{cert.validity}</strong></span>
                <span>Reg No: <strong>{cert.registrationNumber}</strong></span>
              </div>
              <p className="text-[11px] text-slate-400 italic">
                Official document issued to Mishari Phytolabs Private Limited following annual facility audit.
              </p>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Certification Scope & Standards
            </h4>
            <p className="text-slate-700 text-sm leading-relaxed">
              {cert.description}
            </p>
          </div>

          {/* Key Compliance Points */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              Audited Facility Compliance Guidelines
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {cert.complianceDetails.map((detail, idx) => (
                <div key={idx} className="flex items-start space-x-2 text-xs text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
            <div className="flex items-center space-x-2 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Verified Audit Status: <strong>Active & Compliant</strong></span>
            </div>

            <button
              onClick={() => {
                alert(`Downloading official PDF for ${cert.name}`);
              }}
              className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs rounded-xl flex items-center space-x-2 transition-all shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF Certificate</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
