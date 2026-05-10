"use client";

export default function AdminStartupsPage() {
  return (
    <div className="max-w-6xl mx-auto pb-12 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#e6f0ee] text-[#006054] flex items-center justify-center shrink-0">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-slate-800">Manage Startups</h1>
        </div>
      </div>
      
      <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm text-center py-20 flex flex-col items-center justify-center">
        <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6">
          <svg className="w-10 h-10 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        </div>
        <h2 className="text-xl font-bold text-slate-800 mb-2">Startup Management</h2>
        <p className="text-slate-500 max-w-md mx-auto mb-8">
          This section is currently under construction. Here you will be able to review, approve, and manage all startup profiles on the platform.
        </p>
      </div>
    </div>
  );
}
