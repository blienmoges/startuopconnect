"use client";
import { useState } from "next";

export default function VerifyUsersPage() {
  return (
    <div className="max-w-6xl mx-auto pb-12 animate-fade-in relative min-h-[calc(100vh-100px)]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#e6f0ee] text-[#006054] flex items-center justify-center shrink-0">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-slate-800">Verify Users</h1>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative w-full md:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <input 
              type="text" 
              placeholder="Search users..." 
              className="w-full pl-9 pr-4 py-2 border border-slate-200 bg-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#10b981] transition-all"
            />
          </div>
          <button className="w-10 h-10 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:bg-slate-50 transition shrink-0">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Main Status Tabs */}
      <div className="flex items-center gap-2 mb-6 border-b border-slate-200 pb-px">
        <button className="px-6 py-2.5 text-sm font-bold border-b-2 border-[#10b981] text-[#006054] bg-[#f0fdf4] rounded-t-lg transition">
          Pending
        </button>
        <button className="px-6 py-2.5 text-sm font-bold border-b-2 border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50 rounded-t-lg transition">
          Approved
        </button>
        <button className="px-6 py-2.5 text-sm font-bold border-b-2 border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50 rounded-t-lg transition">
          Rejected
        </button>
      </div>

      {/* Role Filters */}
      <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
        <button className="px-4 py-1.5 rounded-full text-xs font-bold bg-[#006054] text-white whitespace-nowrap">
          All Roles
        </button>
        <button className="px-4 py-1.5 rounded-full text-xs font-bold bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 whitespace-nowrap transition">
          Startups
        </button>
        <button className="px-4 py-1.5 rounded-full text-xs font-bold bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 whitespace-nowrap transition">
          Investors
        </button>
        <button className="px-4 py-1.5 rounded-full text-xs font-bold bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 whitespace-nowrap transition">
          Mentors
        </button>
      </div>

      {/* Users Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* User Card 1 */}
        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-slate-200">
                <img src="https://i.pravatar.cc/150?img=11" alt="Abebe Bikila" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-lg">Abebe Bikila</h3>
                <p className="text-sm text-slate-500">abebe.b@startup.co</p>
              </div>
            </div>
            <div className="px-2 py-1 rounded-md bg-orange-100 text-orange-700 text-[10px] font-bold tracking-widest uppercase">
              STARTUP
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-slate-500 text-xs mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            Registered: Oct 24, 2023
          </div>

          <div className="flex items-center gap-3">
            <button className="flex-1 py-2 rounded-xl border border-slate-200 text-slate-700 font-bold text-sm hover:bg-slate-50 transition">
              Reject
            </button>
            <button className="flex-1 py-2 rounded-xl bg-[#006054] text-white font-bold text-sm hover:bg-[#004d43] transition shadow-md shadow-[#006054]/20">
              Approve
            </button>
          </div>
        </div>

        {/* User Card 2 */}
        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-slate-200">
                <img src="https://i.pravatar.cc/150?img=5" alt="Selamawit Tessema" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-lg">Selamawit Tessema</h3>
                <p className="text-sm text-slate-500">selam@fintech.et</p>
              </div>
            </div>
            <div className="px-2 py-1 rounded-md bg-blue-100 text-blue-700 text-[10px] font-bold tracking-widest uppercase">
              INVESTOR
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-slate-500 text-xs mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            Registered: Oct 23, 2023
          </div>

          <div className="flex items-center gap-3">
            <button className="flex-1 py-2 rounded-xl border border-slate-200 text-slate-700 font-bold text-sm hover:bg-slate-50 transition">
              Reject
            </button>
            <button className="flex-1 py-2 rounded-xl bg-[#006054] text-white font-bold text-sm hover:bg-[#004d43] transition shadow-md shadow-[#006054]/20">
              Approve
            </button>
          </div>
        </div>

        {/* User Card 3 */}
        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-slate-200">
                <img src="https://i.pravatar.cc/150?img=8" alt="Dawit Yohannes" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-lg">Dawit Yohannes</h3>
                <p className="text-sm text-slate-500">dawit.y@mentor.com</p>
              </div>
            </div>
            <div className="px-2 py-1 rounded-md bg-rose-100 text-rose-700 text-[10px] font-bold tracking-widest uppercase">
              MENTOR
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-slate-500 text-xs mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            Registered: Oct 22, 2023
          </div>

          <div className="flex items-center gap-3">
            <button className="flex-1 py-2 rounded-xl border border-slate-200 text-slate-700 font-bold text-sm hover:bg-slate-50 transition">
              Reject
            </button>
            <button className="flex-1 py-2 rounded-xl bg-[#006054] text-white font-bold text-sm hover:bg-[#004d43] transition shadow-md shadow-[#006054]/20">
              Approve
            </button>
          </div>
        </div>

      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-[#006054] text-white rounded-full flex items-center justify-center shadow-lg shadow-[#006054]/30 hover:bg-[#004d43] transition hover:scale-105 z-50">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
        </svg>
      </button>

    </div>
  );
}
