import React from 'react';

const Platform = () => {
  return (
    <section id="platform" className="bg-slate-50 py-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-3xl font-bold text-railway-dark mb-4 tracking-tight">
            One planning layer for a fragmented maintenance workflow.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Railway maintenance inherently involves multiple departments—Engineering, TRD, and S&T—competing for limited track access. YANTRANA unifies these fragmented requirements alongside train paths, assets, and resources into a single planning layer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white border border-slate-200 p-8 rounded-lg hover:border-slate-300 transition-colors">
            <div className="text-xs font-bold text-railway-blue mb-2 tracking-wider">01 / DATA</div>
            <h3 className="text-xl font-semibold text-railway-dark mb-3">Departmental Inputs</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Integrates engineering, TRD, S&T, timetable, asset condition, machine availability, and resource information into a canonical format.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-slate-200 p-8 rounded-lg hover:border-slate-300 transition-colors">
            <div className="text-xs font-bold text-railway-blue mb-2 tracking-wider">02 / DECISION</div>
            <h3 className="text-xl font-semibold text-railway-dark mb-3">Explainable Prioritisation</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Evaluates asset criticality, safety risk, operational urgency, service impact, and coordination potential to score maintenance demands.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-slate-200 p-8 rounded-lg hover:border-slate-300 transition-colors">
            <div className="text-xs font-bold text-railway-blue mb-2 tracking-wider">03 / EXECUTION</div>
            <h3 className="text-xl font-semibold text-railway-dark mb-3">Approval-Ready Plans</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Generates operationally feasible candidates, exposing constraints clearly, and routes recommended plans through authorized review workflows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platform;
