import React from 'react';

const Workflow = () => {
  const steps = [
    {
      num: "01",
      name: "INTAKE",
      title: "Maintenance Demands",
      desc: "Engineering, TRD and S&T submit tasks, assets, duration and block requirements."
    },
    {
      num: "02",
      name: "INTELLIGENCE",
      title: "Unify + Prioritise",
      desc: "Canonical model checks data quality, dependencies, criticality and compatibility."
    },
    {
      num: "03",
      name: "OPTIMISATION",
      title: "Generate Plan",
      desc: "CP-SAT / MILP generates feasible block planning candidates."
    },
    {
      num: "04",
      name: "GOVERNANCE",
      title: "Review + Approve",
      desc: "Authorized officers review, modify and approve the recommended plan."
    },
    {
      num: "05",
      name: "FIELD",
      title: "Execute + Learn",
      desc: "Execution status and actuals return to YANTRANA."
    }
  ];

  return (
    <section id="workflow" className="bg-white py-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-railway-dark tracking-tight">
            Demand → Intelligence → Approval → Execution.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-8 lg:space-y-0 relative">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-slate-200 -z-10 transform -translate-y-1/2"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col lg:items-center w-full lg:w-1/5 lg:px-4 relative group">
              
              <div className="bg-white border-2 border-slate-200 group-hover:border-railway-blue transition-colors w-12 h-12 rounded-full flex items-center justify-center font-bold text-railway-dark mb-4 lg:mx-auto shadow-sm">
                {step.num}
              </div>
              
              <div className="lg:text-center">
                <div className="text-[10px] font-bold text-railway-blue tracking-widest uppercase mb-1">
                  {step.name}
                </div>
                <h3 className="text-sm font-bold text-railway-dark mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Mobile Connector */}
              {idx < steps.length - 1 && (
                <div className="lg:hidden w-px h-8 bg-slate-200 ml-6 my-2"></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-50 border border-slate-200 rounded-md p-4 flex flex-col sm:flex-row items-center justify-center text-sm text-slate-600 space-y-2 sm:space-y-0 sm:space-x-4">
          <span className="font-semibold text-railway-dark">Disruption / Change detected</span>
          <span className="hidden sm:inline text-slate-400">→</span>
          <span>Affected corridor</span>
          <span className="hidden sm:inline text-slate-400">→</span>
          <span>Re-plan</span>
          <span className="hidden sm:inline text-slate-400">→</span>
          <span className="font-medium text-railway-blue">Review again</span>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
