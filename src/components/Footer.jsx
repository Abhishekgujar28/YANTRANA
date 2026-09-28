import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        
        <div>
          <div className="text-xl font-bold text-railway-dark tracking-tight mb-1">YANTRANA</div>
          <div className="text-sm text-slate-500 font-medium">Railway Maintenance Intelligence Platform</div>
        </div>
        
        <div className="text-sm text-slate-400">
          Decision Support, not autonomous control.
        </div>
        
        <div className="text-sm font-medium text-slate-500">
          © 2026 DEVIANTS
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
