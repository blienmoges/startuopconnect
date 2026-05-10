"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function StartupProfile() {
  const router = useRouter();
  return (
    <div className="flex h-screen bg-[#f8f9fa] font-sans text-gray-900 overflow-hidden">
      
      {/* Sidebar - Mentor Portal Theme (Dark Green) */}
      <aside className="w-[240px] lg:w-[260px] bg-[#0a3a2e] flex flex-col shrink-0 h-full overflow-y-auto text-white">
        <div className="p-8 pb-6">
          <Link href="/mentor/dashboard" className="flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <img src="/logo.png" alt="StartupConnect Logo" className="w-8 h-8 object-contain" />
              <div className="flex flex-col -gap-1">
                <span className="font-bold text-white text-[20px] lg:text-[22px] tracking-tight">Mentor Portal</span>
              </div>
            </div>
          </Link>
        </div>

        <nav className="px-4 py-4 flex flex-col gap-1.5 flex-grow">
          {[
            { id: 'overview', label: 'Overview', icon: 'grid', href: '/mentor/dashboard' },
            { id: 'requests', label: 'Requests', icon: 'clipboard', active: true, href: '/mentor/requests' },
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

        {/* Bottom Actions */}
        <div className="p-6 mt-auto flex flex-col gap-4">
           <button className="flex items-center gap-3 text-[#86b5a5] hover:text-white transition font-bold text-[13px]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              Profile
           </button>
           <button className="flex items-center gap-3 text-[#86b5a5] hover:text-white transition font-bold text-[13px]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
              Logout
           </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col overflow-hidden bg-white">
        
        {/* Global Header */}
        <header className="flex justify-between items-center px-10 py-5 bg-white border-b border-gray-100 z-10 shrink-0 h-[80px]">
          <div className="flex items-center gap-4">
             <span className="text-[14px] font-bold text-gray-900 hidden md:block">StartupConnect Ethiopia</span>
             <div className="relative w-[320px] lg:w-[400px]">
               <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
               </div>
               <input 
                 type="text" 
                 placeholder="Search startups, documents..." 
                 className="w-full pl-11 pr-4 py-2.5 bg-[#f0f2f5] border border-transparent rounded-full text-[13px] outline-none focus:bg-white focus:border-[#0a4d3c]/30 focus:ring-4 focus:ring-[#0a4d3c]/10 transition" 
               />
             </div>
          </div>

          <div className="flex items-center gap-5">
            <button className="relative text-gray-400 hover:text-gray-800 transition">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
               <span className="absolute top-0 right-0.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
            <button className="relative text-gray-400 hover:text-gray-800 transition">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </button>
            <div className="w-px h-6 bg-gray-200 mx-1"></div>
            <div className="flex items-center gap-3 cursor-pointer">
               <img src="https://i.pravatar.cc/150?img=11" alt="Avatar" className="w-8 h-8 rounded-full object-cover border border-gray-200" />
               <span className="text-[13px] font-bold text-gray-900 hidden md:block">Dr. Elias T.</span>
            </div>
          </div>
        </header>

        {/* Scrollable Main Content */}
        <main className="flex-grow flex flex-col overflow-y-auto bg-[#fafbfc]">
           <div className="p-8 lg:p-10 max-w-[1200px] w-full mx-auto flex flex-col pb-20">
             
             {/* Breadcrumb */}
             <div className="flex items-center gap-2 text-[12px] font-medium text-gray-500 mb-6">
                <Link href="/mentor/requests" className="hover:text-gray-900 transition">Requests</Link>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                <span className="text-gray-900 font-bold">Startup Profile</span>
             </div>

             {/* Profile Header */}
             <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
                <div className="flex items-center gap-5">
                   <div className="w-16 h-16 bg-[#165643] rounded-2xl flex items-center justify-center text-white shrink-0 shadow-sm">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                   </div>
                   <div>
                      <div className="flex items-center gap-3 mb-1.5">
                         <h1 className="text-[28px] font-bold text-gray-900 tracking-tight leading-none">BioFarm Inc.</h1>
                         <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-sm shrink-0">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                         </div>
                         <span className="px-2.5 py-1 bg-[#0a3a2e] text-white text-[10px] font-bold rounded-full uppercase tracking-wider shrink-0">
                            EARLY REVENUE
                         </span>
                      </div>
                      <p className="text-[14px] text-gray-500">
                         Founded by <span className="font-bold text-gray-800">Sara Mebratu</span> • AgTech Innovation
                      </p>
                   </div>
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto">
                   <button className="flex-grow md:flex-grow-0 px-6 py-2.5 bg-gray-100 text-gray-700 text-[13px] font-bold rounded-xl hover:bg-gray-200 transition flex items-center justify-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                      Message
                   </button>
                   <button className="flex-grow md:flex-grow-0 px-6 py-2.5 bg-[#0a3a2e] text-white text-[13px] font-bold rounded-xl hover:bg-[#072a21] transition flex items-center justify-center gap-2 shadow-sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                      Accept Request
                   </button>
                </div>
             </div>

             {/* Split Content */}
             <div className="flex flex-col lg:flex-row gap-8 items-start">
                
                {/* Left Column (Main Profile) */}
                <div className="flex-grow flex flex-col gap-8 w-full lg:w-[65%]">
                   
                   {/* Startup Overview */}
                   <div>
                      <h2 className="text-[18px] font-bold text-gray-900 mb-4">Startup Overview</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                         <div className="bg-[#f5f7f6] rounded-2xl p-6">
                            <span className="block text-[10px] font-bold text-[#115543] uppercase tracking-widest mb-3">MISSION</span>
                            <p className="text-[14px] text-gray-800 font-serif italic leading-relaxed">
                               "Empowering smallholder farmers across Ethiopia with AI-driven irrigation and supply chain logistics to triple annual yields."
                            </p>
                         </div>
                         <div className="bg-[#f5f7f6] rounded-2xl p-6">
                            <span className="block text-[10px] font-bold text-[#115543] uppercase tracking-widest mb-3">THE PROBLEM</span>
                            <p className="text-[14px] text-gray-600 leading-relaxed">
                               High post-harvest loss (up to 40%) due to inefficient cold storage and lack of direct market access for rural coffee and teff growers in the Oromia region.
                            </p>
                         </div>
                      </div>
                      <div className="bg-[#f5f7f6] rounded-2xl p-6">
                         <span className="block text-[10px] font-bold text-[#115543] uppercase tracking-widest mb-3">THE SOLUTION</span>
                         <p className="text-[14px] text-gray-600 leading-relaxed mb-4">
                            BioFarm provides a dual-interface platform: a solar-powered sensor kit for real-time soil data and a mobile marketplace connecting farmers directly to exporters, bypassing multiple middlemen.
                         </p>
                         <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-[#d1f4e0] text-[#0a4d3c] text-[11px] font-bold rounded-md">Ethiopian Smallholder Farmers</span>
                            <span className="px-3 py-1 bg-[#d1f4e0] text-[#0a4d3c] text-[11px] font-bold rounded-md">Subscription + Commission Model</span>
                            <span className="px-3 py-1 bg-[#d1f4e0] text-[#0a4d3c] text-[11px] font-bold rounded-md">Addis Ababa & Regional Hubs</span>
                         </div>
                      </div>
                   </div>

                   {/* Traction & Milestones */}
                   <div>
                      <div className="flex justify-between items-center mb-4">
                         <h2 className="text-[18px] font-bold text-gray-900">Traction & Milestones</h2>
                         <div className="flex items-center gap-1.5 text-gray-500 text-[11px] font-bold">
                            <span>Update 2 days ago</span>
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                         </div>
                      </div>

                      <div className="bg-[#0a3a2e] rounded-2xl p-8 mb-6 shadow-md flex justify-between items-center text-white">
                         <div className="text-center">
                            <span className="block text-[28px] font-bold leading-none mb-1">2,400+</span>
                            <span className="text-[10px] font-bold text-[#86b5a5] uppercase tracking-widest">ACTIVE FARMERS</span>
                         </div>
                         <div className="text-center">
                            <span className="block text-[28px] font-bold leading-none mb-1">$120k</span>
                            <span className="text-[10px] font-bold text-[#86b5a5] uppercase tracking-widest">ANNUAL REVENUE</span>
                         </div>
                         <div className="text-center">
                            <span className="block text-[28px] font-bold leading-none mb-1">14%</span>
                            <span className="text-[10px] font-bold text-[#86b5a5] uppercase tracking-widest">MOM GROWTH</span>
                         </div>
                      </div>

                      {/* Timeline */}
                      <div className="pl-2 border-l-2 border-[#d1f4e0] ml-4 flex flex-col gap-6">
                         <div className="relative pl-6">
                            <div className="absolute left-[-21px] top-0 w-10 h-10 bg-white flex items-center justify-center">
                               <div className="w-7 h-7 rounded-full bg-[#115543] text-white flex items-center justify-center shadow-sm">
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                               </div>
                            </div>
                            <h3 className="text-[14px] font-bold text-gray-900 leading-tight">Pilot Launch in Jimma</h3>
                            <p className="text-[12px] text-gray-500 mt-0.5">Jan 2023 • Onboarded first 500 farmers</p>
                         </div>
                         
                         <div className="relative pl-6">
                            <div className="absolute left-[-21px] top-0 w-10 h-10 bg-white flex items-center justify-center">
                               <div className="w-7 h-7 rounded-full bg-[#115543] text-white flex items-center justify-center shadow-sm">
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                               </div>
                            </div>
                            <h3 className="text-[14px] font-bold text-gray-900 leading-tight">Angel Round Closed</h3>
                            <p className="text-[12px] text-gray-500 mt-0.5">June 2023 • Raised $50,000 for R&D</p>
                         </div>

                         <div className="relative pl-6">
                            <div className="absolute left-[-21px] top-0 w-10 h-10 bg-white flex items-center justify-center">
                               <div className="w-7 h-7 rounded-full bg-gray-200 border-4 border-white shadow-sm flex items-center justify-center">
                                  <div className="w-2.5 h-2.5 bg-gray-400 rounded-full"></div>
                               </div>
                            </div>
                            <h3 className="text-[14px] font-bold text-gray-400 leading-tight">Nationwide Expansion</h3>
                            <p className="text-[12px] text-gray-400 mt-0.5">Target: Q4 2024</p>
                         </div>
                      </div>
                   </div>

                   {/* Mentorship Needs */}
                   <div className="bg-[#faf9f5] border-l-4 border-[#0a3a2e] rounded-r-2xl p-8 shadow-sm">
                      <h2 className="text-[16px] font-bold text-gray-900 mb-4">Specific Mentorship Needs</h2>
                      <p className="text-[14px] text-gray-700 leading-relaxed italic mb-6">
                         "We are currently facing bottlenecks in our B2B logistics network. We need a mentor with deep experience in supply chain automation to help us scale from 2,000 to 10,000 farmers."
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         <div className="flex gap-3">
                            <div className="mt-1 text-[#0a3a2e]">
                               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                            </div>
                            <div>
                               <h4 className="text-[13px] font-bold text-gray-900">Scale-up Strategy</h4>
                               <p className="text-[12px] text-gray-500">Frameworks for regional growth</p>
                            </div>
                         </div>
                         <div className="flex gap-3">
                            <div className="mt-1 text-[#0a3a2e]">
                               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            </div>
                            <div>
                               <h4 className="text-[13px] font-bold text-gray-900">Supply Chain Automation</h4>
                               <p className="text-[12px] text-gray-500">Optimizing cold storage routing</p>
                            </div>
                         </div>
                      </div>
                   </div>

                   {/* Founder & Team */}
                   <div>
                      <h2 className="text-[18px] font-bold text-gray-900 mb-4">Founder & Team</h2>
                      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm mb-4 flex gap-5">
                         <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150" alt="Sara" className="w-20 h-20 rounded-full object-cover shrink-0" />
                         <div>
                            <h3 className="text-[16px] font-bold text-gray-900 mb-1">Sara Mebratu</h3>
                            <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-3">FOUNDER & CEO</p>
                            <p className="text-[13px] text-gray-600 leading-relaxed mb-4">
                               MSc in Agricultural Engineering from Addis Ababa University. 8 years experience in regional agribusiness logistics.
                            </p>
                            <div className="flex gap-3 text-gray-400">
                               <a href="#" className="hover:text-gray-900 transition">
                                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                               </a>
                               <a href="#" className="hover:text-gray-900 transition">
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                               </a>
                            </div>
                         </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4">
                         <div className="bg-[#f8f9fa] rounded-xl p-4 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-[#e8ebee] shrink-0"></div>
                            <div>
                               <p className="text-[12px] font-bold text-gray-900 leading-tight">Dawit L.</p>
                               <p className="text-[10px] text-gray-500 uppercase">CTO</p>
                            </div>
                         </div>
                         <div className="bg-[#f8f9fa] rounded-xl p-4 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-[#e8ebee] shrink-0"></div>
                            <div>
                               <p className="text-[12px] font-bold text-gray-900 leading-tight">Helen K.</p>
                               <p className="text-[10px] text-gray-500 uppercase">OPERATIONS</p>
                            </div>
                         </div>
                         <div className="bg-[#f8f9fa] rounded-xl p-4 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-[#e8ebee] shrink-0"></div>
                            <div>
                               <p className="text-[12px] font-bold text-gray-900 leading-tight">Abdi Y.</p>
                               <p className="text-[10px] text-gray-500 uppercase">SALES LEAD</p>
                            </div>
                         </div>
                      </div>
                   </div>

                   {/* Uploaded Documents */}
                   <div>
                      <h2 className="text-[18px] font-bold text-gray-900 mb-4">Uploaded Documents</h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                         <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center gap-4 cursor-pointer hover:shadow-sm transition">
                            <div className="w-10 h-10 rounded-lg bg-red-50 text-red-500 flex items-center justify-center shrink-0">
                               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                            </div>
                            <div className="flex-grow min-w-0">
                               <h4 className="text-[13px] font-bold text-gray-900 truncate">BioFarm Pitch Deck 2024</h4>
                               <p className="text-[11px] text-gray-400">PDF • 4.2 MB</p>
                            </div>
                            <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                         </div>
                         
                         <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center gap-4 cursor-pointer hover:shadow-sm transition">
                            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                            </div>
                            <div className="flex-grow min-w-0">
                               <h4 className="text-[13px] font-bold text-gray-900 truncate">Financial Summary Q3</h4>
                               <p className="text-[11px] text-gray-400">XLSX • 1.1 MB</p>
                            </div>
                            <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                         </div>
                      </div>
                   </div>

                </div>

                {/* Right Column (Side Panels) */}
                <div className="w-full lg:w-[35%] shrink-0 flex flex-col gap-6">
                   
                   {/* Snapshot Card */}
                   <div className="bg-[#f5f7f6] rounded-2xl p-6">
                      <h3 className="text-[11px] font-bold text-gray-900 uppercase tracking-widest mb-5">STARTUP SNAPSHOT</h3>
                      <div className="flex flex-col gap-4">
                         <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                            <span className="text-[13px] text-gray-500">Industry</span>
                            <span className="text-[13px] font-bold text-gray-900">AgTech</span>
                         </div>
                         <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                            <span className="text-[13px] text-gray-500">Stage</span>
                            <span className="text-[13px] font-bold text-gray-900">Early Revenue</span>
                         </div>
                         <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                            <span className="text-[13px] text-gray-500">Location</span>
                            <span className="text-[13px] font-bold text-gray-900">Addis Ababa, ET</span>
                         </div>
                         <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                            <span className="text-[13px] text-gray-500">Founder</span>
                            <span className="text-[13px] font-bold text-[#0a3a2e] underline">Sara Mebratu</span>
                         </div>
                         <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                            <span className="text-[13px] text-gray-500">Request Date</span>
                            <span className="text-[13px] font-bold text-gray-900">Oct 12, 2024</span>
                         </div>
                         <div className="flex justify-between items-center">
                            <span className="text-[13px] text-gray-500">Status</span>
                            <span className="px-3 py-1 bg-[#d1f4e0] text-[#0a4d3c] text-[10px] font-bold rounded-full uppercase tracking-wider">New</span>
                         </div>
                      </div>
                   </div>

                   {/* Match Insight */}
                   <div className="bg-[#115543] rounded-2xl p-6 text-white relative overflow-hidden">
                      <div className="absolute right-[-10px] top-4 opacity-10">
                         <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                      </div>
                      <h3 className="text-[11px] font-bold uppercase tracking-widest mb-3 text-white">MATCH INSIGHT</h3>
                      <p className="text-[13px] text-gray-100 leading-relaxed mb-4">
                         BioFarm aligns with your expertise in <span className="font-bold text-white">Emerging Markets Logistics</span> and <span className="font-bold text-white">Agri-business Scaling</span>.
                      </p>
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#86b5a5] mb-2">YOUR EXPERTISE MATCHES</h4>
                      <div className="flex flex-wrap gap-2">
                         <span className="px-2.5 py-1 bg-[#0a3a2e] text-white text-[11px] font-medium rounded border border-[#1b5e4c]">Supply Chain</span>
                         <span className="px-2.5 py-1 bg-[#0a3a2e] text-white text-[11px] font-medium rounded border border-[#1b5e4c]">Operations</span>
                         <span className="px-2.5 py-1 bg-[#0a3a2e] text-white text-[11px] font-medium rounded border border-[#1b5e4c]">Logistics</span>
                      </div>
                   </div>

                   {/* Action Block */}
                   <div className="flex flex-col gap-3">
                      <button className="w-full py-3.5 bg-[#0a3a2e] text-white text-[13px] font-bold rounded-xl hover:bg-[#072a21] transition shadow-sm">
                         Accept Request
                      </button>
                      <button onClick={() => router.push('/mentor/requests/proposal')} className="w-full py-3.5 bg-white border border-gray-200 text-gray-700 text-[13px] font-bold rounded-xl hover:bg-gray-50 transition shadow-sm">
                         Send Proposal
                      </button>
                      <button className="w-full py-3.5 bg-white border border-gray-200 text-gray-700 text-[13px] font-bold rounded-xl hover:bg-gray-50 transition shadow-sm flex items-center justify-center gap-2">
                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                         Schedule Session
                      </button>
                   </div>

                   {/* Private Notes */}
                   <div className="bg-[#f5f7f6] rounded-2xl p-6">
                      <div className="flex justify-between items-center mb-4">
                         <h3 className="text-[11px] font-bold text-gray-900 uppercase tracking-widest">YOUR PRIVATE NOTES</h3>
                         <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                      </div>
                      <textarea 
                         rows="4" 
                         className="w-full bg-white border border-transparent rounded-xl p-4 text-[13px] text-gray-700 outline-none focus:ring-2 focus:ring-[#0a4d3c]/10 transition resize-none mb-3 shadow-sm"
                         placeholder="Draft notes for the first session..."
                      ></textarea>
                      <button className="text-[11px] font-bold text-gray-900 hover:underline w-full text-center">Save Note</button>
                   </div>

                   {/* Deadlines */}
                   <div className="bg-[#f5f7f6] rounded-2xl p-6">
                      <h3 className="text-[11px] font-bold text-gray-900 uppercase tracking-widest mb-5">DEADLINES</h3>
                      
                      <div className="flex gap-4 mb-5">
                         <div className="w-10 h-10 rounded-lg bg-[#f0d6d6] flex flex-col items-center justify-center text-[#a13b3b] shrink-0">
                            <span className="text-[9px] font-bold uppercase leading-none mt-0.5">Oct</span>
                            <span className="text-[15px] font-bold leading-none">20</span>
                         </div>
                         <div>
                            <h4 className="text-[13px] font-bold text-gray-900 leading-tight mb-0.5">Response Required</h4>
                            <p className="text-[11px] text-gray-500">Please review in 3 days</p>
                         </div>
                      </div>

                      <div className="flex gap-4 opacity-60">
                         <div className="w-10 h-10 rounded-lg bg-gray-200 flex flex-col items-center justify-center text-gray-600 shrink-0">
                            <span className="text-[9px] font-bold uppercase leading-none mt-0.5">Nov</span>
                            <span className="text-[15px] font-bold leading-none">05</span>
                         </div>
                         <div>
                            <h4 className="text-[13px] font-bold text-gray-900 leading-tight mb-0.5">Pitch Demo Session</h4>
                            <p className="text-[11px] text-gray-500">Tentative schedule</p>
                         </div>
                      </div>
                   </div>

                </div>

             </div>

           </div>
        </main>

      </div>
    </div>
  );
}
