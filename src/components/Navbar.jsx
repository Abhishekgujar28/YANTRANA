import React from 'react';

const Navbar = ({ onLoginClick }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold text-railway-dark tracking-tight">YANTRANA</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#platform" className="text-slate-600 hover:text-railway-blue font-medium transition-colors">Platform</a>
            <a href="#architecture" className="text-slate-600 hover:text-railway-blue font-medium transition-colors">Architecture</a>
            <a href="#workflow" className="text-slate-600 hover:text-railway-blue font-medium transition-colors">Workflow</a>
            <a href="#capabilities" className="text-slate-600 hover:text-railway-blue font-medium transition-colors">Capabilities</a>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={onLoginClick}
              className="text-slate-600 hover:text-railway-dark font-medium transition-colors"
            >
              Login
            </button>
            <a 
              href="#platform" 
              className="bg-railway-blue hover:bg-railway-accent text-white px-4 py-2 rounded-md font-medium transition-colors text-sm"
            >
              Explore Platform
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
