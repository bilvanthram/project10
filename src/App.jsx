export default function StudentDashboard() {
  const student = {
    name: "Bilvanth Ram",
    regNo: "2500031922",
    dept: "CSE"
  };

  const subjects = [
    { name: "Data Structures", attendance: 85 },
    { name: "Mathematics AI", attendance: 59 },
    { name: "Frontend Frameworks", attendance: 95 },
    { name: "Communication Skills", attendance: 70 },
    { name: "Digital System Design", attendance: 68 },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* 1. Navigation Bar - Deep Slate Theme */}
      <nav className="bg-slate-800 text-teal-400 p-5 shadow-lg border-b-4 border-teal-500">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="text-2xl font-black uppercase tracking-widest text-white">
            KL <span className="text-teal-400">Portal</span>
          </h1>
          <div className="flex gap-6 text-sm bg-slate-700 px-4 py-2 rounded-md text-slate-100">
            <p><span className="text-teal-400 font-bold">NAME:</span> {student.name}</p>
            <p><span className="text-teal-400 font-bold">REG:</span> {student.regNo}</p>
            <p><span className="text-teal-400 font-bold">DEPT:</span> {student.dept}</p>
          </div>
        </div>
      </nav>

      {/* 2. Content Section */}
      <main className="container mx-auto p-8">
        <div className="mb-8 border-l-4 border-slate-800 pl-4">
          <h2 className="text-3xl font-bold text-slate-800">Attendance Report</h2>
          <p className="text-slate-500">Semester II Analytics</p>
        </div>

        {/* Attendance Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {subjects.map((sub, index) => {
            // Requirement Color Coding Logic
            let cardStyle = "";
            let statusText = "";

            if (sub.attendance > 75) {
              cardStyle = "bg-emerald-50 border-emerald-500 text-emerald-900";
              statusText = "Above 75%";
            } else if (sub.attendance >= 60) {
              cardStyle = "bg-amber-50 border-amber-500 text-amber-900";
              statusText = "Warning (60-75%)";
            } else {
              cardStyle = "bg-rose-50 border-rose-500 text-rose-900";
              statusText = "Critical (<60%)";
            }

            return (
              <div 
                key={index} 
                className={`p-6 rounded-xl border-t-4 shadow-md bg-white ${cardStyle}`}
              >
                <h3 className="text-lg font-extrabold mb-4 uppercase text-slate-800 tracking-tight">
                  {sub.name}
                </h3>
                
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xs font-bold opacity-70 uppercase mb-1">Current</p>
                    <p className="text-3xl font-black">{sub.attendance}%</p>
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-tighter opacity-60">
                    {statusText}
                  </p>
                </div>
              </div>
            );
          })}
          
        </div>
      </main>
    </div>
  );
}