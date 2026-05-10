import Link from "next/link";
import Image from "next/image";
import Sidebar from "@/components/startup/Sidebar";

export default function StartupDiscover() {
  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-gray-900 flex">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-grow flex flex-col overflow-y-auto relative">
        
        {/* Top Navbar */}
        <header className="flex justify-between items-center px-8 py-5 bg-white border-b border-gray-100 w-full z-10 sticky top-0">
          {/* Search */}
          <div className="relative w-full max-w-[400px] hidden sm:block">
             <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
             </div>
             <input type="text" placeholder="Search startup opportunities..." className="w-full pl-11 pr-4 py-2.5 bg-[#f8fafc] border-none rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#0f3d32]/20 transition" />
          </div>

          <div className="flex items-center gap-6 ml-auto">
             <button className="text-gray-400 hover:text-gray-600 transition relative">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
               <div className="absolute top-0 right-0.5 w-1.5 h-1.5 bg-red-500 rounded-full border-2 border-white"></div>
             </button>
             
             <div className="flex items-center gap-3 border-l border-gray-200 pl-6">
               <div className="hidden sm:flex flex-col items-end">
                 <span className="text-xs font-bold text-gray-900">Abebe Kebede</span>
                 <span className="text-[10px] text-gray-400 font-medium">Founder, AgriFlow</span>
               </div>
               <div className="w-9 h-9 rounded-full bg-[#1e293b] text-white overflow-hidden shrink-0 flex items-center justify-center font-bold text-xs shadow-sm border border-gray-200">
                 AK
               </div>
             </div>
          </div>
        </header>

        {/* Page Content Container */}
        <div className="px-4 sm:px-10 py-10 w-full max-w-[1200px] mx-auto pb-24">
          
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#0f3d32] mb-3 tracking-tight">Discover Investors and Mentors</h1>
            <p className="text-sm text-gray-500 font-medium">Connect with Ethiopia's leading investment firms and industry experts to scale your startup.</p>
          </div>

          {/* Filters Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {/* Filter 1 */}
            <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm flex flex-col justify-center">
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">Industry</span>
              <div className="relative">
                <select className="w-full bg-[#f8fafc] text-sm text-gray-700 font-medium px-4 py-2.5 rounded-lg border-none appearance-none focus:outline-none focus:ring-2 focus:ring-[#0f3d32]/20">
                  <option>All Industries</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>
            {/* Filter 2 */}
            <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm flex flex-col justify-center">
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">Location</span>
              <div className="relative">
                <select className="w-full bg-[#f8fafc] text-sm text-gray-700 font-medium px-4 py-2.5 rounded-lg border-none appearance-none focus:outline-none focus:ring-2 focus:ring-[#0f3d32]/20">
                  <option>All Locations</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>
            {/* Filter 3 */}
            <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm flex flex-col justify-center">
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">Range / Expertise</span>
              <div className="relative">
                <select className="w-full bg-[#f8fafc] text-sm text-gray-700 font-medium px-4 py-2.5 rounded-lg border-none appearance-none focus:outline-none focus:ring-2 focus:ring-[#0f3d32]/20">
                  <option>Any Type</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>
            {/* Filter 4 */}
            <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm flex flex-col justify-center">
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">Availability</span>
              <div className="relative">
                <select className="w-full bg-[#f8fafc] text-sm text-gray-700 font-medium px-4 py-2.5 rounded-lg border-none appearance-none focus:outline-none focus:ring-2 focus:ring-[#0f3d32]/20">
                  <option>All Available</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-8 mb-8 border-b border-gray-200">
            <button className="pb-3 border-b-2 border-[#0f3d32] flex items-center gap-2">
              <span className="text-lg font-bold text-[#0f3d32]">Investors</span>
              <span className="bg-[#ccfbf1] text-[#0f766e] text-[9px] font-bold px-2 py-0.5 rounded-full">24</span>
            </button>
            <button className="pb-3 border-b-2 border-transparent text-gray-400 hover:text-gray-600 transition">
              <span className="text-lg font-bold">Mentors</span>
            </button>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col">
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-[#0a192f] rounded-xl flex items-center justify-center shrink-0 border border-gray-100">
                  <svg className="w-8 h-8 text-[#64ffda]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 21a9 9 0 100-18 9 9 0 000 18z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v8m-4-4h8"></path></svg>
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold text-gray-900">EthioVenture Capital</h3>
                    <span className="bg-[#f0fdf4] text-[#16a34a] text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded">Active</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500 mt-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    <span className="text-xs">Addis Ababa, ET</span>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-[#f1f5f9] text-gray-600 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded">Agritech</span>
                <span className="bg-[#f1f5f9] text-gray-600 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded">Fintech</span>
                <span className="bg-[#f1f5f9] text-gray-600 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded">Energy</span>
              </div>

              {/* Stats */}
              <div className="flex gap-8 mb-6 border-b border-gray-100 pb-6">
                <div>
                  <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Investment Range</p>
                  <p className="text-[#059669] font-bold text-sm">$50k - $250k</p>
                </div>
                <div>
                  <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Portfolio</p>
                  <p className="text-gray-900 font-bold text-sm">12 Startups</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 mt-auto">
                <Link href="/startup/discover/profile" className="flex-1 py-2.5 bg-white border border-[#0f3d32] text-[#0f3d32] text-xs font-bold rounded-lg hover:bg-gray-50 transition text-center flex items-center justify-center">View Profile</Link>
                <Link href="/startup/discover/apply" className="flex-1 py-2.5 bg-[#0f3d32] text-white text-xs font-bold rounded-lg hover:bg-[#0a2921] transition shadow-sm text-center flex items-center justify-center">Apply</Link>
                <button className="w-10 h-10 border border-[#0f3d32] text-[#0f3d32] rounded-lg flex items-center justify-center hover:bg-gray-50 transition shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col">
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-[#113a30] rounded-xl flex items-center justify-center shrink-0 border border-gray-100">
                  <span className="text-[#a7f3d0] font-bold text-[8px] tracking-widest uppercase">Sheba</span>
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold text-gray-900">Sheba Angels</h3>
                    <span className="bg-[#eff6ff] text-[#3b82f6] text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded">Early Stage</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500 mt-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    <span className="text-xs">Regional East Africa</span>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-[#f1f5f9] text-gray-600 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded">Logistics</span>
                <span className="bg-[#f1f5f9] text-gray-600 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded">E-Commerce</span>
              </div>

              {/* Stats */}
              <div className="flex gap-8 mb-6 border-b border-gray-100 pb-6">
                <div>
                  <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Investment Range</p>
                  <p className="text-[#059669] font-bold text-sm">$10k - $75k</p>
                </div>
                <div>
                  <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Focus</p>
                  <p className="text-gray-900 font-bold text-sm">Female Founders</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 mt-auto">
                <button className="flex-1 py-2.5 bg-white border border-[#0f3d32] text-[#0f3d32] text-xs font-bold rounded-lg hover:bg-gray-50 transition">
                  View Profile
                </button>
                <button className="flex-1 py-2.5 bg-[#0f3d32] text-white text-xs font-bold rounded-lg hover:bg-[#0a2921] transition shadow-sm">
                  Apply
                </button>
                <button className="w-10 h-10 border border-[#0f3d32] text-[#0f3d32] rounded-lg flex items-center justify-center hover:bg-gray-50 transition shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col">
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-[#ecfdf5] rounded-xl flex items-center justify-center shrink-0 border border-gray-100">
                  <svg className="w-8 h-8 text-[#047857]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path></svg>
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold text-gray-900">Blue Nile Holdings</h3>
                    <span className="bg-[#f0fdf4] text-[#16a34a] text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded">Active</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500 mt-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    <span className="text-xs">Addis Ababa, ET</span>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-[#f1f5f9] text-gray-600 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded">Manufacturing</span>
                <span className="bg-[#f1f5f9] text-gray-600 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded">Export</span>
              </div>

              {/* Stats */}
              <div className="flex gap-8 mb-6 border-b border-gray-100 pb-6">
                <div>
                  <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Investment Range</p>
                  <p className="text-[#059669] font-bold text-sm">$250k - $1M</p>
                </div>
                <div>
                  <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Series</p>
                  <p className="text-gray-900 font-bold text-sm">Pre-A / A</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 mt-auto">
                <button className="flex-1 py-2.5 bg-white border border-[#0f3d32] text-[#0f3d32] text-xs font-bold rounded-lg hover:bg-gray-50 transition">
                  View Profile
                </button>
                <button className="flex-1 py-2.5 bg-[#0f3d32] text-white text-xs font-bold rounded-lg hover:bg-[#0a2921] transition shadow-sm">
                  Apply
                </button>
                <button className="w-10 h-10 border border-[#0f3d32] text-[#0f3d32] rounded-lg flex items-center justify-center hover:bg-gray-50 transition shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                </button>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col">
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-gray-200 rounded-xl overflow-hidden shrink-0 border border-gray-100 flex items-center justify-center">
                  {/* Generic group icon fallback since we don't have the image */}
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold text-gray-900">Horizon Ventures</h3>
                    <span className="bg-[#faf5ff] text-[#a855f7] text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded">Cross-Border</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500 mt-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    <span className="text-xs">Silicon Valley / Addis</span>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-[#f1f5f9] text-gray-600 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded">SaaS</span>
                <span className="bg-[#f1f5f9] text-gray-600 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded">Healthtech</span>
              </div>

              {/* Stats */}
              <div className="flex gap-8 mb-6 border-b border-gray-100 pb-6">
                <div>
                  <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Investment Range</p>
                  <p className="text-[#059669] font-bold text-sm">$100k - $500k</p>
                </div>
                <div>
                  <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Tech Focus</p>
                  <p className="text-gray-900 font-bold text-sm">DeepTech / AI</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 mt-auto">
                <button className="flex-1 py-2.5 bg-white border border-[#0f3d32] text-[#0f3d32] text-xs font-bold rounded-lg hover:bg-gray-50 transition">
                  View Profile
                </button>
                <button className="flex-1 py-2.5 bg-[#0f3d32] text-white text-xs font-bold rounded-lg hover:bg-[#0a2921] transition shadow-sm">
                  Apply
                </button>
                <button className="w-10 h-10 border border-[#0f3d32] text-[#0f3d32] rounded-lg flex items-center justify-center hover:bg-gray-50 transition shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                </button>
              </div>
            </div>

          </div>

          {/* Load More */}
          <div className="flex justify-center mt-2">
            <button className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-gray-800 transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
              Load More Investors
            </button>
          </div>

        </div>

      </main>

      {/* Floating Action Add Button */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-[#0f3d32] hover:bg-[#0a2921] rounded-full shadow-lg flex items-center justify-center text-white transition hover:scale-105 z-50">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
      </button>

    </div>
  );
}
