export default function StudentDashboard() {
  const student = {
    name: "Bilvanth Ram",
    regNo: "2500031922",
    dept: "CSE",
    year: "I"
  };

  const subjects = [
    { name: "Data Structures", attendance: 85 },
    { name: "Mathematics II", attendance: 72 },
    { name: "Digital Electronics", attendance: 55 },
    { name: "Python Programming", attendance: 90 },
    { name: "Technical English", attendance: 68 },
  ];

  // Helper function for color coding
  const getColor = (percent) => {
    if (percent > 75) return "bg-green-100 text-green-800 border-green-500";
    if (percent >= 60) return "bg-yellow-100 text-yellow-800 border-yellow-500";
    return "bg-red-100 text-red-800 border-red-500";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 1. Navigation Bar */}
      <nav className="bg-blue-800 text-white p-4 shadow-md">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <h1 className="text-xl font-bold tracking-tight">KL University</h1>
          <div className="flex gap-6 text-sm md:text-base">
            <p><span className="opacity-80">Student:</span> {student.name}</p>
            <p><span className="opacity-80">Reg:</span> {student.regNo}</p>
            <p><span className="opacity-80">Dept:</span> {student.dept}</p>
          </div>
        </div>
      </nav>

      {/* 2. Main Content Section */}
      <main className="container mx-auto p-6">
        <header className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Attendance Overview</h2>
          <p className="text-gray-500">Academic Year 2025-2026 | Semester II</p>
        </header>

        {/* Attendance Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((sub, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-xl border-l-8 shadow-sm transition hover:shadow-md bg-white ${getColor(sub.attendance)}`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{sub.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">Total Classes: 40</p>
                </div>
                <span className="text-2xl font-black">{sub.attendance}%</span>
              </div>
              
              {/* Simple Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                <div 
                  className={`h-2 rounded-full ${sub.attendance > 75 ? 'bg-green-500' : sub.attendance >= 60 ? 'bg-yellow-500' : 'bg-red-500'}`} 
                  style={{ width: `${sub.attendance}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}