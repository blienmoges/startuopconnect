"use client";
import Link from "next/link";

export default function MentorDashboard() {
  return (
    <div className="flex h-screen bg-[#f8f9fa] font-sans text-gray-900 overflow-hidden">
      
      {/* Sidebar - Mentor Portal Theme (Dark Green) */}
      <aside className="w-[260px] bg-[#0a3a2e] flex flex-col shrink-0 h-full overflow-y-auto text-white">
        <div className="p-8 pb-6">
          <Link href="/mentor/dashboard" className="flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <img src="/logo.png" alt="StartupConnect Logo" className="w-8 h-8 object-contain" />
              <div className="flex flex-col -gap-1">
                <span className="font-bold text-white text-[22px] tracking-tight">Mentor Portal</span>
              </div>
            </div>
          </Link>
        </div>

        <nav className="px-4 py-4 flex flex-col gap-1.5 flex-grow">
          {[
            { id: 'overview', label: 'Overview', icon: 'grid', active: true, href: '/mentor/dashboard' },
            { id: 'requests', label: 'Requests', icon: 'clipboard', href: '/mentor/requests' },
            { id: 'startups', label: 'My Startups', icon: 'briefcase', href: '/mentor/startups' },
            { id: 'sessions', label: 'Sessions', icon: 'calendar', href: '/mentor/sessions' },
            { id: 'messages', label: 'Messages', icon: 'chat', href: '/mentor/messages' },
            { id: 'resources', label: 'Resources', icon: 'book', href: '/mentor/resources' },
            { id: 'reports', label: 'Reports', icon: 'chart', href: '/mentor/reports' },
          ].map((item) => (
            <Link 
              key={item.id} 
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] font-bold transition relative ${
                item.active 
                ? "bg-[#115543] text-white shadow-sm" 
                : "text-[#86b5a5] hover:bg-[#0d4738] hover:text-white"
              }`}
            >
              <div className={`w-5 h-5 flex items-center justify-center shrink-0 ${item.active ? 'text-white' : 'text-[#86b5a5]'}`}>
                {item.icon === 'grid' && <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>}
                {item.icon === 'clipboard' && <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>}
                {item.icon === 'briefcase' && <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>}
                {item.icon === 'calendar' && <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>}
                {item.icon === 'chat' && <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>}
                {item.icon === 'book' && <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>}
                {item.icon === 'chart' && <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>}
              </div>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Profile Footer */}
        <div className="p-4 mt-auto">
           <div className="bg-[#082a21] rounded-xl p-4 flex items-center gap-3 cursor-pointer hover:bg-[#07241c] transition">
              <img src="https://i.pravatar.cc/150?img=11" alt="Avatar" className="w-10 h-10 rounded-full border-2 border-[#115543]" />
              <div className="flex flex-col">
                 <span className="text-[13px] font-bold text-white leading-tight">Dr. Abel Tadesse</span>
                 <span className="text-[11px] font-medium text-[#86b5a5]">Senior Advisor</span>
              </div>
           </div>
           <button className="w-full mt-4 flex items-center gap-2 px-4 py-2.5 text-[#86b5a5] hover:text-white transition font-bold text-[13px]">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
              Logout
           </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col overflow-hidden bg-[#fbfcfc]">
        
        {/* Global Header */}
        <header className="flex justify-between items-center px-10 py-5 bg-white border-b border-gray-100 z-10 shrink-0 h-[80px]">
          <div className="relative w-full max-w-[500px]">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input 
              type="text" 
              placeholder="Search startups, sessions, or resources..." 
              className="w-full pl-11 pr-4 py-3 bg-[#f0f2f5] border border-transparent rounded-full text-[13px] outline-none focus:bg-white focus:border-[#0a4d3c]/30 focus:ring-4 focus:ring-[#0a4d3c]/10 transition" 
            />
          </div>

          <div className="flex items-center gap-6">
            <button className="relative text-gray-400 hover:text-gray-800 transition">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
               <span className="absolute top-0 right-0.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
            <div className="w-px h-8 bg-gray-200"></div>
            <div className="flex items-center gap-3 cursor-pointer">
               <div className="flex flex-col text-right">
                  <span className="text-[13px] font-bold text-gray-900 leading-tight">Dr. Abel Tadesse</span>
                  <span className="text-[11px] font-medium text-gray-500">Senior Strategy Mentor</span>
               </div>
               <img src="https://i.pravatar.cc/150?img=11" alt="Avatar" className="w-10 h-10 rounded-full object-cover border border-gray-200" />
            </div>
          </div>
        </header>

        {/* Scrollable Dashboard Content */}
        <main className="flex-grow flex flex-col overflow-y-auto">
           <div className="p-8 lg:p-10 max-w-[1400px] w-full mx-auto flex flex-col">
             
             {/* Welcome Section */}
             <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
                <div>
                   <h1 className="text-[32px] font-bold text-[#0a3a2e] tracking-tight mb-1">Good morning, Abel</h1>
                   <p className="text-gray-500 text-[15px]">You have 3 priority tasks requiring immediate attention today.</p>
                </div>
                <div className="flex items-center gap-3 flex-wrap">
                   <div className="px-4 py-2 bg-white border border-gray-200 rounded-full flex items-center gap-2 shadow-sm">
                      <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                      <span className="text-[12px] font-bold text-gray-800">Proposals: 4</span>
                   </div>
                   <div className="px-4 py-2 bg-white border border-gray-200 rounded-full flex items-center gap-2 shadow-sm">
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                      <span className="text-[12px] font-bold text-gray-800">Follow-ups: 2</span>
                   </div>
                   <div className="px-4 py-2 bg-white border border-gray-200 rounded-full flex items-center gap-2 shadow-sm">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      <span className="text-[12px] font-bold text-gray-800">Reports Due: 1</span>
                   </div>
                </div>
             </div>

             {/* Stats Row */}
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                
                <div className="bg-white rounded-2xl p-6 border-l-4 border-[#0a3a2e] shadow-sm flex flex-col justify-between">
                   <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-4">ACTIVE STARTUPS</span>
                   <div className="flex items-baseline gap-3">
                      <span className="text-[36px] font-bold text-gray-900 leading-none">12</span>
                      <span className="text-[12px] font-bold text-emerald-600">+2 this month</span>
                   </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col justify-between">
                   <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-4">PENDING REQUESTS</span>
                   <div className="flex items-baseline gap-3">
                      <span className="text-[36px] font-bold text-gray-900 leading-none">08</span>
                      <span className="text-[12px] font-bold text-orange-500">3 priority</span>
                   </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col justify-between">
                   <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-4">UPCOMING SESSIONS</span>
                   <div className="flex items-baseline gap-3">
                      <span className="text-[36px] font-bold text-gray-900 leading-none">14</span>
                      <span className="text-[12px] font-bold text-gray-400">Next 7 days</span>
                   </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col justify-between relative overflow-hidden">
                   <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-4 relative z-10">EARNINGS (ETB)</span>
                   <div className="flex items-baseline gap-3 relative z-10">
                      <span className="text-[36px] font-bold text-gray-900 leading-none">42.5k</span>
                      <span className="text-[12px] font-bold text-emerald-600">+12% vs last qtr</span>
                   </div>
                   <div className="absolute right-[-20px] bottom-[-20px] opacity-[0.03] pointer-events-none">
                      <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"></path></svg>
                   </div>
                </div>

             </div>

             <div className="flex flex-col lg:flex-row gap-8">
                
                {/* Left Column (Main Content) */}
                <div className="flex-grow flex flex-col gap-8 lg:w-2/3">
                   
                   {/* Upcoming Sessions */}
                   <div>
                      <div className="flex justify-between items-center mb-4">
                         <h2 className="text-[18px] font-bold text-[#0a3a2e] flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                            Upcoming Sessions
                         </h2>
                         <Link href="#" className="text-[13px] font-bold text-[#0a3a2e] hover:underline">View Calendar</Link>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         {/* Session Card 1 */}
                         <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col justify-between">
                            <div className="flex justify-between items-start mb-6">
                               <div className="flex items-center gap-3">
                                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center shrink-0">
                                     <span className="text-white font-bold text-[10px] tracking-widest">ZayRide</span>
                                  </div>
                                  <div>
                                     <h3 className="text-[15px] font-bold text-gray-900">ZayRide</h3>
                                     <p className="text-[12px] text-gray-500">Series A Strategy</p>
                                  </div>
                               </div>
                               <span className="px-2.5 py-1 bg-[#d1f4e0] text-[#0a4d3c] text-[10px] font-bold rounded-md uppercase tracking-wide">
                                  TODAY, 2:00 PM
                               </span>
                            </div>
                            <div className="flex gap-2">
                               <button className="flex-grow py-2.5 bg-[#0a3a2e] text-white text-[13px] font-bold rounded-lg hover:bg-[#072a21] transition shadow-sm">
                                  Join Session
                               </button>
                               <button className="w-10 flex items-center justify-center bg-gray-100 text-gray-500 rounded-lg hover:bg-gray-200 transition">
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                               </button>
                            </div>
                         </div>

                         {/* Session Card 2 */}
                         <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col justify-between">
                            <div className="flex justify-between items-start mb-6">
                               <div className="flex items-center gap-3">
                                  <div className="w-12 h-12 bg-[#2d9cdb] rounded-xl flex items-center justify-center shrink-0 text-white font-bold text-[10px]">
                                     Kubik
                                  </div>
                                  <div>
                                     <h3 className="text-[15px] font-bold text-gray-900">Kubik</h3>
                                     <p className="text-[12px] text-gray-500">Materials Sourcing Review</p>
                                  </div>
                               </div>
                               <span className="px-2.5 py-1 bg-gray-100 text-gray-600 text-[10px] font-bold rounded-md uppercase tracking-wide text-right">
                                  TOMORROW,<br/>10:00 AM
                               </span>
                            </div>
                            <div className="flex gap-2">
                               <button className="flex-grow py-2.5 bg-gray-100 text-gray-700 text-[13px] font-bold rounded-lg hover:bg-gray-200 transition">
                                  Review Docs
                               </button>
                               <button className="w-10 flex items-center justify-center bg-gray-100 text-gray-500 rounded-lg hover:bg-gray-200 transition">
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                               </button>
                            </div>
                         </div>
                      </div>
                   </div>

                   {/* New Mentorship Requests */}
                   <div>
                      <div className="flex justify-between items-center mb-4">
                         <h2 className="text-[18px] font-bold text-[#0a3a2e] flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                            New Mentorship Requests
                         </h2>
                         <Link href="#" className="text-[13px] font-bold text-[#0a3a2e] hover:underline">View All</Link>
                      </div>

                      <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                         <table className="w-full text-left">
                            <thead className="bg-[#f8f9fa] border-b border-gray-100">
                               <tr>
                                  <th className="px-6 py-4 text-[10px] font-bold text-gray-500 tracking-widest uppercase">STARTUP</th>
                                  <th className="px-6 py-4 text-[10px] font-bold text-gray-500 tracking-widest uppercase">INDUSTRY</th>
                                  <th className="px-6 py-4 text-[10px] font-bold text-gray-500 tracking-widest uppercase">FOCUS AREA</th>
                                  <th className="px-6 py-4 text-[10px] font-bold text-gray-500 tracking-widest uppercase text-right">ACTION</th>
                               </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                               <tr className="hover:bg-gray-50 transition">
                                  <td className="px-6 py-4">
                                     <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded bg-[#eef2f0] flex items-center justify-center text-[10px] font-bold text-[#0a3a2e]">SG</div>
                                        <span className="text-[13px] font-bold text-gray-900">SolarGreen Addis</span>
                                     </div>
                                  </td>
                                  <td className="px-6 py-4 text-[13px] text-gray-600">CleanTech</td>
                                  <td className="px-6 py-4">
                                     <span className="px-2.5 py-1 bg-[#e8fbf0] text-[#0a4d3c] text-[10px] font-bold rounded-full">Scale-up Strategy</span>
                                  </td>
                                  <td className="px-6 py-4 text-right">
                                     <button className="text-[13px] font-bold text-[#0a3a2e] hover:underline">Review</button>
                                  </td>
                               </tr>
                               <tr className="hover:bg-gray-50 transition">
                                  <td className="px-6 py-4">
                                     <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded bg-[#eef2f0] flex items-center justify-center text-[10px] font-bold text-[#0a3a2e]">FA</div>
                                        <span className="text-[13px] font-bold text-gray-900">FinTech Africa</span>
                                     </div>
                                  </td>
                                  <td className="px-6 py-4 text-[13px] text-gray-600">FinTech</td>
                                  <td className="px-6 py-4">
                                     <span className="px-2.5 py-1 bg-[#e8fbf0] text-[#0a4d3c] text-[10px] font-bold rounded-full">Regulatory Compliance</span>
                                  </td>
                                  <td className="px-6 py-4 text-right">
                                     <button className="text-[13px] font-bold text-[#0a3a2e] hover:underline">Review</button>
                                  </td>
                               </tr>
                            </tbody>
                         </table>
                      </div>
                   </div>

                   {/* Active Cohort Progress */}
                   <div>
                      <div className="flex justify-between items-center mb-4">
                         <h2 className="text-[18px] font-bold text-[#0a3a2e] flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                            Active Cohort Progress
                         </h2>
                      </div>
                      
                      <div className="bg-[#0a3a2e] rounded-2xl p-6 shadow-md flex flex-col gap-6">
                         
                         {/* Progress Item 1 */}
                         <div>
                            <div className="flex justify-between items-center mb-2">
                               <span className="text-[13px] font-bold text-white">DeliverEth - Logistics Scale-up</span>
                               <span className="text-[13px] font-bold text-white">85%</span>
                            </div>
                            <div className="w-full h-2 bg-[#1b5e4c] rounded-full overflow-hidden">
                               <div className="h-full bg-white rounded-full" style={{ width: '85%' }}></div>
                            </div>
                         </div>

                         {/* Progress Item 2 */}
                         <div>
                            <div className="flex justify-between items-center mb-2">
                               <span className="text-[13px] font-bold text-white">FinTech Africa - MVP Phase</span>
                               <span className="text-[13px] font-bold text-white">42%</span>
                            </div>
                            <div className="w-full h-2 bg-[#1b5e4c] rounded-full overflow-hidden">
                               <div className="h-full bg-white rounded-full" style={{ width: '42%' }}></div>
                            </div>
                         </div>

                         {/* Progress Item 3 */}
                         <div>
                            <div className="flex justify-between items-center mb-2">
                               <span className="text-[13px] font-bold text-white">CoffeeTrace - Supply Chain AI</span>
                               <span className="text-[13px] font-bold text-white">68%</span>
                            </div>
                            <div className="w-full h-2 bg-[#1b5e4c] rounded-full overflow-hidden">
                               <div className="h-full bg-white rounded-full" style={{ width: '68%' }}></div>
                            </div>
                         </div>

                      </div>
                   </div>

                </div>

                {/* Right Column (Sidebar Widgets) */}
                <div className="flex-col gap-8 lg:w-1/3 hidden lg:flex">
                   
                   {/* Quick Actions */}
                   <div>
                      <h3 className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-4">QUICK ACTIONS</h3>
                      <div className="grid grid-cols-2 gap-3">
                         <button className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col items-center justify-center gap-3 text-center h-[120px]">
                            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
                            <span className="text-[12px] font-bold text-gray-900 leading-tight">Review<br/>Requests</span>
                         </button>
                         <button className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col items-center justify-center gap-3 text-center h-[120px]">
                            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2zM12 14h.01M12 14h.01M12 14h.01M16 14h.01"></path></svg>
                            <span className="text-[12px] font-bold text-gray-900 leading-tight">Schedule<br/>Session</span>
                         </button>
                         <button className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col items-center justify-center gap-3 text-center h-[120px]">
                            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-5.368m0 5.368l5.657 5.657m-5.657-5.657l5.657-5.657m5.657 5.657a3 3 0 110-5.368 3 3 0 010 5.368z"></path></svg>
                            <span className="text-[12px] font-bold text-gray-900 leading-tight">Share Resource</span>
                         </button>
                      </div>
                   </div>

                   {/* Recent Messages */}
                   <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                      <div className="flex justify-between items-center mb-6">
                         <h3 className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">RECENT MESSAGES</h3>
                         <button className="text-gray-400 hover:text-gray-800 transition">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                         </button>
                      </div>
                      
                      <div className="flex flex-col gap-5 mb-6">
                         {/* Message 1 */}
                         <div className="flex gap-3">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100" alt="Selamawit" className="w-10 h-10 rounded-full object-cover shrink-0" />
                            <div>
                               <h4 className="text-[13px] font-bold text-gray-900">Selamawit | DeliverEth</h4>
                               <p className="text-[12px] text-gray-500 truncate max-w-[200px]">Abel, I've updated the growth...</p>
                               <span className="text-[10px] font-bold text-gray-400">14 mins ago</span>
                            </div>
                         </div>
                         {/* Message 2 */}
                         <div className="flex gap-3">
                            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100" alt="Yonas" className="w-10 h-10 rounded-full object-cover shrink-0" />
                            <div>
                               <h4 className="text-[13px] font-bold text-gray-900">Yonas | ZayRide</h4>
                               <p className="text-[12px] text-gray-500 truncate max-w-[200px]">Looking forward to our session at...</p>
                               <span className="text-[10px] font-bold text-gray-400">2 hours ago</span>
                            </div>
                         </div>
                         {/* Message 3 */}
                         <div className="flex gap-3">
                            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0 text-gray-400">
                               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                            </div>
                            <div>
                               <h4 className="text-[13px] font-bold text-gray-900">StartupConnect Admins</h4>
                               <p className="text-[12px] text-gray-500 truncate max-w-[200px]">New guidelines for the October...</p>
                               <span className="text-[10px] font-bold text-gray-400">Yesterday</span>
                            </div>
                         </div>
                      </div>

                      <button className="w-full py-2.5 bg-white border border-gray-200 rounded-xl text-[12px] font-bold text-gray-700 hover:bg-gray-50 transition shadow-sm">
                         Go to Messages
                      </button>
                   </div>

                   {/* Institutional Insight */}
                   <div className="bg-[#f0f4f2] border-l-4 border-[#0a3a2e] rounded-r-xl p-6">
                      <h3 className="text-[10px] font-bold text-[#0a3a2e] uppercase tracking-widest mb-3">INSTITUTIONAL INSIGHT</h3>
                      <p className="text-[13px] text-gray-800 font-serif italic leading-relaxed mb-4">
                         "The most successful startups in Ethiopia aren't just solving problems; they're creating infrastructure for the next generation of commerce."
                      </p>
                      <span className="text-[10px] font-bold text-gray-500">— Quarterly Mentor Review</span>
                   </div>

                </div>

             </div>

           </div>
        </main>

      </div>
    </div>
  );
}
