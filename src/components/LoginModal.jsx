import React, { useState } from 'react';

const LoginModal = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
      <div 
        className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8">
          <h2 className="text-2xl font-bold text-railway-dark mb-6">Sign in</h2>
          
          {submitted ? (
            <div className="bg-blue-50 text-railway-blue border border-blue-200 p-4 rounded-md text-sm font-medium">
              Demo login submitted. Connect this form to your authentication API.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Official Email
                </label>
                <input 
                  type="email" 
                  required
                  placeholder="officer@division.gov.in"
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-railway-blue focus:border-transparent transition-all"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Password
                </label>
                <input 
                  type="password" 
                  required
                  placeholder="••••••••"
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-railway-blue focus:border-transparent transition-all"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-railway-dark hover:bg-slate-800 text-white font-medium py-3 rounded-md transition-colors flex items-center justify-center mt-2"
              >
                Continue <span className="ml-2">→</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
