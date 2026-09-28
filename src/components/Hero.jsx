import React from 'react';

const Hero = () => {
  return (
    <section className="bg-white py-16 md:py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold text-railway-blue bg-blue-50 border border-blue-100 rounded-full tracking-wider uppercase">
              Railway Maintenance Intelligence Platform
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-railway-dark leading-tight mb-6 tracking-tight">
              Plan safer blocks.<br />
              <span className="text-railway-blue">Execute smarter.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
              YANTRANA brings railway maintenance demands, train paths, assets, resources and operational constraints into one decision-support platform — helping teams create coordinated, explainable and approval-ready maintenance plans.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <a href="#workflow" className="bg-railway-dark hover:bg-slate-800 text-white px-6 py-3 rounded-md font-medium transition-colors flex items-center">
                View Workflow <span className="ml-2">→</span>
              </a>
              <a href="#architecture" className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 px-6 py-3 rounded-md font-medium transition-colors">
                Explore Architecture
              </a>
            </div>
            
            <p className="text-xs text-slate-500">
              Human approval remains mandatory for operationally significant decisions.
            </p>
          </div>

          {/* Right Dashboard Preview */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 shadow-sm relative overflow-hidden">
            <div className="flex justify-between items-center mb-8 border-b border-slate-200 pb-4">
              <div className="text-sm font-bold text-railway-dark tracking-wide">YANTRANA / DIVISION CONTROL</div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span className="text-xs font-medium text-slate-600">SYSTEM READY</span>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-4 border border-slate-200 rounded-lg">
                <div className="text-xs text-slate-500 mb-1">Active Blocks</div>
                <div className="text-2xl font-bold text-railway-dark">18</div>
              </div>
              <div className="bg-white p-4 border border-slate-200 rounded-lg">
                <div className="text-xs text-slate-500 mb-1">Integrated Work</div>
                <div className="text-2xl font-bold text-railway-blue">72%</div>
              </div>
              <div className="bg-white p-4 border border-slate-200 rounded-lg">
                <div className="text-xs text-slate-500 mb-1">Tasks at Risk</div>
                <div className="text-2xl font-bold text-amber-600">06</div>
              </div>
            </div>

            <div className="bg-white p-4 border border-slate-200 rounded-lg mb-6">
              <div className="text-xs font-medium text-slate-600 mb-4">Corridor Utilisation</div>
              <div className="h-24 w-full flex items-end space-x-1">
                {[40, 60, 45, 80, 55, 90, 75, 50, 65, 85].map((h, i) => (
                  <div key={i} className="flex-1 bg-slate-100 rounded-t-sm relative group">
                    <div 
                      className={`absolute bottom-0 w-full rounded-t-sm transition-all duration-500 ${h > 75 ? 'bg-railway-blue' : 'bg-slate-300'}`} 
                      style={{ height: `${h}%` }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex items-center justify-between text-[10px] font-medium text-slate-500 uppercase tracking-wider bg-white p-3 border border-slate-200 rounded-md">
              <span>Demand Intake</span>
              <span>→</span>
              <span>AI Priority</span>
              <span>→</span>
              <span>Optimise</span>
              <span>→</span>
              <span className="text-railway-blue font-bold">Approval</span>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
