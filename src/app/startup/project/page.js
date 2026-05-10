import Link from "next/link";
import Image from "next/image";
import Sidebar from "@/components/startup/Sidebar";

export default function StartupProjectsListing() {
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
            <input type="text" placeholder="Search projects or investors..." className="w-full pl-11 pr-4 py-2.5 bg-[#f3f4f6] border-none rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#0f3d32]/20 transition" />
          </div>

          <div className="flex items-center gap-5 ml-auto">
            <button className="text-gray-400 hover:text-gray-600 transition relative">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
              <div className="absolute top-0 right-0.5 w-1.5 h-1.5 bg-red-500 rounded-full"></div>
            </button>
            <button className="text-gray-400 hover:text-gray-600 transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </button>

            <div className="flex items-center gap-2 border-l border-gray-200 pl-5 cursor-pointer hover:text-gray-600 transition">
              <span className="text-xs font-bold text-gray-700">ET Ecosystem</span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>
        </header>

        {/* Page Content Container */}
        <div className="px-4 sm:px-10 py-10 w-full max-w-[1200px] mx-auto pb-24">

          {/* Header Row */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">My Projects</h1>
              <p className="text-sm text-gray-500 font-medium">Manage your startup projects, funding requests, documents, and progress updates.</p>
            </div>
            <Link href="/startup/project/create" className="px-6 py-3 bg-[#0f3d32] hover:bg-[#0a2921] text-white font-bold rounded-xl transition shadow-md text-sm flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4"></path></svg>
              Create New Project
            </Link>
          </div>

          {/* Stats Summary Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">
            {/* Card 1 */}
            <div className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Total Projects</p>
                <p className="text-3xl font-bold text-gray-900">12</p>
              </div>
              <div className="w-12 h-12 bg-[#eff6ff] rounded-xl flex items-center justify-center text-[#3b82f6]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Published</p>
                <p className="text-3xl font-bold text-gray-900">5</p>
              </div>
              <div className="w-12 h-12 bg-[#f0fdf4] rounded-xl flex items-center justify-center text-[#22c55e]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Drafts</p>
                <p className="text-3xl font-bold text-gray-900">4</p>
              </div>
              <div className="w-12 h-12 bg-[#f8fafc] rounded-xl flex items-center justify-center text-gray-500 border border-gray-100">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Applications</p>
                <p className="text-3xl font-bold text-gray-900">3</p>
              </div>
              <div className="w-12 h-12 bg-[#ecfdf5] rounded-xl flex items-center justify-center text-[#10b981]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              </div>
            </div>
          </div>

          {/* Filters Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex flex-wrap items-center gap-2 sm:gap-6">
              <button className="px-5 py-2 bg-[#0f3d32] text-white text-xs font-bold rounded-full transition shadow-sm">All</button>
              <button className="px-2 py-2 text-gray-600 hover:text-gray-900 text-xs font-bold transition">Draft</button>
              <button className="px-2 py-2 text-gray-600 hover:text-gray-900 text-xs font-bold transition">Published</button>
              <button className="px-2 py-2 text-gray-600 hover:text-gray-900 text-xs font-bold transition">Under Review</button>
              <button className="px-2 py-2 text-gray-600 hover:text-gray-900 text-xs font-bold transition">Funded</button>
            </div>

            <div className="relative w-48">
              <select className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0f3d32]/20 transition text-xs font-bold text-gray-700 appearance-none shadow-sm">
                <option>Sort by: Newest</option>
                <option>Sort by: Oldest</option>
                <option>Sort by: Funding Goal</option>
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
          </div>

          {/* Project List */}
          <div className="flex flex-col gap-5 mb-12">

            {/* Card 1 - Draft */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row overflow-hidden relative border-l-4 border-l-gray-300">

              {/* Image box */}
              <div className="w-full md:w-64 h-48 md:h-auto bg-gray-200 shrink-0 relative p-4 m-4 rounded-xl overflow-hidden flex items-center justify-center">
                {/* Fallback pattern for drone field */}
                <div className="absolute inset-0 bg-[#e8f5e9] opacity-50"></div>
                <div className="relative z-10 w-16 h-16 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center text-[#2e7d32]">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow p-6 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">AgriTech Ethiopia Hub</h3>
                  <span className="bg-gray-100 text-gray-600 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-md">Draft</span>
                </div>

                <div className="flex flex-wrap items-center gap-2 mb-6">
                  <span className="bg-[#f0f2f5] text-gray-600 text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded">Agriculture Technology</span>
                  <span className="bg-[#fff7ed] text-[#ea580c] text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded">Prototype</span>
                  <div className="ml-auto bg-[#fff1f1] text-red-600 px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    Missing Documents
                  </div>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 border-t border-gray-100 pt-6">
                  <div>
                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Funding Goal</p>
                    <p className="text-sm font-bold text-gray-900">$50,000</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Progress</p>
                    <div className="flex items-center gap-3">
                      <div className="w-full bg-gray-100 rounded-full h-1.5">
                        <div className="bg-[#0f3d32] h-full rounded-full" style={{ width: '45%' }}></div>
                      </div>
                      <span className="text-xs font-bold text-gray-900">45%</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Last Updated</p>
                    <p className="text-sm text-gray-600">2 days ago</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Inquiries</p>
                    <p className="text-sm text-gray-600">0 Investors</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-end gap-6 mt-auto">
                  <Link href="/startup/project/create" className="text-xs font-bold text-gray-600 hover:text-gray-900 transition flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                    Edit Project
                  </Link>
                  <Link href="/startup/project/documents" className="px-6 py-2.5 bg-[#0f3d32] hover:bg-[#0a2921] text-white font-bold rounded-lg transition shadow-sm text-xs">
                    Continue Documents
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2 - Published */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row overflow-hidden relative border-l-4 border-l-[#0f3d32]">

              {/* Image box */}
              <div className="w-full md:w-64 h-48 md:h-auto bg-gray-200 shrink-0 relative p-4 m-4 rounded-xl overflow-hidden flex items-center justify-center">
                {/* Fallback pattern for wind turbines */}
                <div className="absolute inset-0 bg-[#e0f2fe] opacity-50"></div>
                <div className="relative z-10 w-16 h-16 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center text-[#0369a1]">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow p-6 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">Green Energy Connect</h3>
                  <span className="text-[#10b981] text-[10px] font-bold uppercase tracking-widest">Published</span>
                </div>

                <div className="flex flex-wrap items-center gap-2 mb-6">
                  <span className="bg-[#f0f2f5] text-gray-600 text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded">Renewable Energy</span>
                  <span className="bg-[#eff6ff] text-[#2563eb] text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded">MVP</span>
                  <div className="ml-auto bg-[#f0fdf4] text-[#16a34a] border border-[#bbf7d0] px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    Complete
                  </div>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 border-t border-gray-100 pt-6">
                  <div>
                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Funding Goal</p>
                    <p className="text-sm font-bold text-gray-900">$75,000</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Progress</p>
                    <div className="flex items-center gap-3">
                      <div className="w-full bg-gray-100 rounded-full h-1.5">
                        <div className="bg-[#0f3d32] h-full rounded-full" style={{ width: '70%' }}></div>
                      </div>
                      <span className="text-xs font-bold text-gray-900">70%</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Last Updated</p>
                    <p className="text-sm text-gray-600">5 hours ago</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Inquiries</p>
                    <p className="text-sm text-gray-600">4 Investors</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-end gap-6 mt-auto">
                  <button className="text-xs font-bold text-gray-600 hover:text-gray-900 transition">View Details</button>
                  <button className="text-xs font-bold text-gray-600 hover:text-gray-900 transition">Update Progress</button>
                  <button className="px-6 py-2.5 bg-[#0f3d32] hover:bg-[#0a2921] text-white font-bold rounded-lg transition shadow-sm text-xs">
                    Apply for Investment
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3 - Under Review */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row overflow-hidden relative border-l-4 border-l-[#f59e0b]">

              {/* Image box */}
              <div className="w-full md:w-64 h-48 md:h-auto bg-gray-200 shrink-0 relative p-4 m-4 rounded-xl overflow-hidden flex items-center justify-center">
                {/* Fallback pattern for EduSmart */}
                <div className="absolute inset-0 bg-[#fef3c7] opacity-50"></div>
                <div className="relative z-10 w-16 h-16 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center text-[#d97706]">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow p-6 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">EduSmart Learning</h3>
                  <span className="text-[#ea580c] text-[10px] font-bold uppercase tracking-widest">Under Review</span>
                </div>

                <div className="flex flex-wrap items-center gap-2 mb-6">
                  <span className="bg-[#f0f2f5] text-gray-600 text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded">EdTech</span>
                  <span className="bg-[#f5f3ff] text-[#7c3aed] text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded">Early Stage</span>
                  <div className="ml-auto bg-[#f0fdf4] text-[#16a34a] border border-[#bbf7d0] px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    Complete
                  </div>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 border-t border-gray-100 pt-6">
                  <div>
                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Funding Goal</p>
                    <p className="text-sm font-bold text-gray-900">$30,000</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Progress</p>
                    <div className="flex items-center gap-3">
                      <div className="w-full bg-gray-100 rounded-full h-1.5">
                        <div className="bg-[#0f3d32] h-full rounded-full" style={{ width: '60%' }}></div>
                      </div>
                      <span className="text-xs font-bold text-gray-900">60%</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Last Updated</p>
                    <p className="text-sm text-gray-600">1 day ago</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Inquiries</p>
                    <p className="text-sm text-gray-600">2 Investors</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-end gap-6 mt-auto">
                  <button className="text-xs font-bold text-gray-600 hover:text-gray-900 transition">View Details</button>
                  <button className="text-xs font-bold text-gray-600 hover:text-gray-900 transition">Edit Project</button>
                  <button disabled className="px-6 py-2.5 bg-[#f1f5f9] text-gray-400 font-bold rounded-lg text-xs cursor-not-allowed">
                    Review in Progress
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Empty State / CTA Bottom Card */}
          <div className="w-full border border-dashed border-gray-200 bg-[#f8fafc] rounded-3xl p-10 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-[#f1f5f9] rounded-full flex items-center justify-center text-gray-400 mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.5 10.5L21 3m-7.5 7.5L9 15m4.5-4.5l3 3m-3-3L10.5 9m-4.5 4.5l-3 3m3-3L3 18.5m6-4.5l-3 3M19.5 4.5l-3 3"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">Have a new vision?</h3>
            <p className="text-sm text-gray-500 max-w-sm mb-8 leading-relaxed">
              Every great unicorn started with a single project entry. Launch your next big idea today.
            </p>
            <Link href="/startup/project/create" className="px-8 py-3.5 bg-[#0f3d32] hover:bg-[#0a2921] text-white font-bold rounded-xl transition shadow-md text-sm">
              Start Onboarding
            </Link>
          </div>

        </div>


        {/* Floating Action Chat Button */}
        <button className="fixed bottom-8 right-8 w-14 h-14 bg-[#0f3d32] hover:bg-[#0a2921] rounded-full shadow-lg flex items-center justify-center text-white transition hover:scale-105 z-50">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
        </button>

      </main>
    </div>
  );
}
