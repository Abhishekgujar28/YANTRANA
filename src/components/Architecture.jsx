import React from 'react';

const Architecture = () => {
  const layers = [
    {
      num: "06",
      title: "GOVERNANCE & EXECUTION",
      desc: "RBAC · review · approval · audit trail · execution · restoration status"
    },
    {
      num: "05",
      title: "HARD SAFETY CONSTRAINTS",
      desc: "Protected movement · power isolation · S&T procedures · dependencies · resource conflicts"
    },
    {
      num: "04",
      title: "CONSTRAINT OPTIMISATION",
      desc: "CP-SAT / MILP / heuristic search"
    },
    {
      num: "03",
      title: "DECISION INTELLIGENCE",
      desc: "Priority scoring · asset criticality · urgency · task compatibility"
    },
    {
      num: "02",
      title: "CANONICAL MODEL",
      desc: "MaintenanceTask · Asset · Corridor · TrainPath · BlockRequest · Resource · Approval · ExecutionLog"
    },
    {
      num: "01",
      title: "DATA & INTEGRATION",
      desc: "TMS / SMMS / TDMS / timetable / assets / resources / historical execution data"
    }
  ];

  return (
    <section id="architecture" className="bg-[#0a192f] py-20 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4 tracking-tight">
            From raw railway data to an executable plan.
          </h2>
          <div className="w-16 h-1 bg-railway-blue mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col space-y-4">
          {layers.map((layer, idx) => (
            <div 
              key={idx} 
              className="border border-slate-700 bg-[#112240] p-6 rounded-md hover:border-slate-500 transition-colors flex items-center"
            >
              <div className="w-16 flex-shrink-0 text-slate-400 font-mono text-xl font-bold">
                {layer.num}
              </div>
              <div>
                <h3 className="text-lg font-bold tracking-wide text-slate-200 mb-1">
                  {layer.title}
                </h3>
                <p className="text-sm text-slate-400 font-mono">
                  {layer.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Architecture;
