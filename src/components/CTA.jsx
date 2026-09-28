import React from 'react';

const CTA = ({ onEnterClick }) => {
  return (
    <section className="bg-blue-50 py-24 border-b border-blue-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-railway-dark mb-6 tracking-tight">
          Turn fragmented maintenance demands into coordinated decisions.
        </h2>
        <p className="text-lg text-slate-600 mb-10">
          AI-assisted planning. Constraint-aware scheduling. Human-controlled execution.
        </p>
        <button 
          onClick={onEnterClick}
          className="bg-railway-blue hover:bg-railway-accent text-white px-8 py-4 rounded-md font-bold text-lg transition-colors shadow-sm inline-flex items-center"
        >
          Enter Platform <span className="ml-2">→</span>
        </button>
      </div>
    </section>
  );
};

export default CTA;
