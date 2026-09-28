import React from 'react';

const Capabilities = () => {
  const capabilities = [
    {
      category: "AI",
      title: "Explainable Priority Engine",
      desc: "Assigns transparent, multi-factor priority scores based on asset criticality, safety risk and service impact."
    },
    {
      category: "OPTIMISATION",
      title: "Constraint-Based Block Planning",
      desc: "Generates operationally feasible maintenance plans while respecting movement, power, and resource constraints."
    },
    {
      category: "COORDINATION",
      title: "Cross-Department Integration",
      desc: "Unifies Engineering, TRD, and S&T work into a single view to eliminate redundant block requests and conflicts."
    },
    {
      category: "GOVERNANCE",
      title: "Human-in-the-Loop Approval",
      desc: "Keeps authorized railway officers in control with clear review, modification and approval workflows."
    },
    {
      category: "PLANNING",
      title: "Rolling Planning Horizons",
      desc: "Supports tactical short-term planning and strategic long-term maintenance scheduling seamlessly."
    },
    {
      category: "LIVE",
      title: "Disruption-Aware Replanning",
      desc: "Rapidly adjusts maintenance plans when incidents, delays or resource shortages alter operational realities."
    }
  ];

  return (
    <section id="capabilities" className="bg-slate-50 py-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-railway-dark tracking-tight">
            Built around railway maintenance realities.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, idx) => (
            <div key={idx} className="bg-white border border-slate-200 p-6 rounded-md hover:shadow-sm transition-shadow">
              <div className="text-[10px] font-bold text-railway-blue mb-3 tracking-widest uppercase">
                {cap.category}
              </div>
              <h3 className="text-lg font-bold text-railway-dark mb-2">
                {cap.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {cap.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
