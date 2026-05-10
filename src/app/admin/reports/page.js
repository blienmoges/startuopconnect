"use client";

export default function AdminReportsPage() {
  return (
    <div className="max-w-6xl mx-auto pb-12 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#e6f0ee] text-[#006054] flex items-center justify-center shrink-0">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-slate-800">Platform Reports</h1>
        </div>
      </div>
      
      <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm text-center py-20 flex flex-col items-center justify-center">
        <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6">
          <svg className="w-10 h-10 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
        </div>
        <h2 className="text-xl font-bold text-slate-800 mb-2">Reports & Analytics</h2>
        <p className="text-slate-500 max-w-md mx-auto mb-8">
          This section is currently under construction. Advanced analytics, user growth charts, and platform health reports will be available here soon.
        </p>
      </div>
    </div>
  );
}
