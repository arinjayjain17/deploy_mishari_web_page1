'use client';

import React, { useState } from 'react';
import { MessageSquare, X, Send, Check } from 'lucide-react';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('Hello Mishari Phytolabs team, I am interested in procuring botanical extracts.');

  const handleOpenWhatsApp = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919001969764?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {isOpen && (
        <div className="mb-4 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          <div className="bg-emerald-900 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-white/20 p-1.5 flex items-center justify-center">
                <img src="/logo.png" alt="Mishari Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Mishari Export Desk</h4>
                <p className="text-xs text-emerald-200 flex items-center space-x-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
                  <span>Online • Immediate Support</span>
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4 bg-slate-50 text-slate-700 text-xs space-y-3">
            <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
              <p className="font-semibold text-slate-900 mb-1">Welcome to Mishari Phytolabs!</p>
              <p>Looking for pricing, batch COA, or custom extraction ratios? Connect directly with our management on WhatsApp.</p>
            </div>

            <div>
              <label className="block text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
                Your Message
              </label>
              <textarea
                rows={2}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-2 text-xs border border-slate-300 rounded-lg outline-none focus:ring-1 focus:ring-emerald-600 bg-white text-slate-800"
              ></textarea>
            </div>

            <button
              onClick={handleOpenWhatsApp}
              className="w-full py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold rounded-xl flex items-center justify-center space-x-2 transition-all shadow-md"
            >
              <Send className="w-4 h-4" />
              <span>Start WhatsApp Chat (+91-9001969764)</span>
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-emerald-700 hover:bg-emerald-800 text-white rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-all focus:outline-none pulse-emerald"
        title="Chat with Mishari Export Desk"
      >
        {isOpen ? <X className="w-7 h-7" /> : <MessageSquare className="w-7 h-7" />}
      </button>
    </div>
  );
}
