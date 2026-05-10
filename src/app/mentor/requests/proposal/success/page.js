"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ProposalSuccess() {
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
                {item.icon === 'grid' && <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012-2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>}
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
      <div className="flex-grow flex flex-col overflow-hidden bg-[#fafbfc]">
        
        {/* Global Header */}
        <header className="flex justify-between items-center px-10 py-5 bg-white border-b border-gray-100 z-10 shrink-0 h-[80px]">
          <div className="flex items-center gap-6">
             <span className="text-[16px] font-bold text-[#0a3a2e] hidden md:block">Mentor Portal</span>
          </div>

          <div className="flex items-center gap-5">
            <button className="relative text-gray-400 hover:text-gray-800 transition">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
            </button>
            <button className="relative text-gray-400 hover:text-gray-800 transition">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </button>
            <div className="w-px h-6 bg-gray-200 mx-1"></div>
            <div className="flex items-center gap-3 cursor-pointer">
               <div className="flex flex-col text-right hidden md:flex">
                  <span className="text-[13px] font-bold text-gray-900 leading-tight">Dr. Elias Tadesse</span>
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">SENIOR STRATEGIST</span>
               </div>
               <img src="https://i.pravatar.cc/150?img=11" alt="Avatar" className="w-8 h-8 rounded-full object-cover border border-gray-200" />
            </div>
          </div>
        </header>

        {/* Scrollable Main Content */}
        <main className="flex-grow flex flex-col overflow-y-auto">
           <div className="p-8 lg:p-10 max-w-[1200px] w-full mx-auto flex flex-col pb-20">
             
             {/* Breadcrumb */}
             <div className="flex items-center gap-2 text-[12px] font-medium text-gray-500 mb-8">
                <Link href="/mentor/requests" className="hover:text-gray-900 transition">Requests</Link>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                <Link href="/mentor/requests/profile" className="hover:text-gray-900 transition">Startup Profile</Link>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                <Link href="/mentor/requests/proposal" className="hover:text-gray-900 transition">Send Proposal</Link>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                <span className="text-gray-900 font-bold">Proposal Sent</span>
             </div>

             {/* Split Content Layout */}
             <div className="flex flex-col lg:flex-row gap-8 items-start">
                
                {/* Left Column - Success Info */}
                <div className="flex-grow flex flex-col gap-6 w-full lg:w-[65%]">
                   
                   {/* Main Success Hero */}
                   <div className="bg-white rounded-2xl p-10 border border-gray-100 shadow-sm border-l-4 border-l-[#0a4d3c] flex flex-col items-center justify-center text-center">
                      <div className="w-16 h-16 rounded-full bg-[#d1f4e0] flex items-center justify-center text-[#0a4d3c] mb-6 shadow-sm">
                         <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                      </div>
                      <h1 className="text-[28px] font-bold text-[#0a3a2e] mb-3 tracking-tight">Mentorship Proposal Sent<br/>Successfully</h1>
                      <div className="flex items-center gap-2 text-[13px] text-gray-500 font-medium">
                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                         Submitted on Oct 24, 2023 • 14:45 PM EAT
                      </div>
                   </div>

                   {/* Proposal Summary Card */}
                   <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                      <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-4">
                         <svg className="w-5 h-5 text-[#0a4d3c]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                         <h2 className="text-[16px] font-bold text-[#0a3a2e]">Proposal Summary</h2>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         <div>
                            <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">TITLE</span>
                            <span className="text-[14px] font-bold text-gray-900 leading-tight">Strategic Growth & Content Monetization</span>
                         </div>
                         <div>
                            <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">FOCUS AREA</span>
                            <span className="text-[14px] font-bold text-gray-900 leading-tight">Market Entry Strategy</span>
                         </div>
                         <div>
                            <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">DURATION</span>
                            <div className="flex items-center gap-1.5">
                               <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                               <span className="text-[14px] font-bold text-gray-900 leading-tight">3 Months</span>
                            </div>
                         </div>
                         <div>
                            <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">SESSION FREQUENCY</span>
                            <div className="flex items-center gap-1.5">
                               <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                               <span className="text-[14px] font-bold text-gray-900 leading-tight">12 Sessions (Weekly)</span>
                            </div>
                         </div>
                         <div>
                            <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">FORMAT</span>
                            <div className="flex items-center gap-1.5">
                               <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                               <span className="text-[14px] font-bold text-gray-900 leading-tight">Hybrid</span>
                            </div>
                         </div>
                         <div>
                            <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">PROPOSED FEE</span>
                            <span className="text-[14px] font-bold text-[#0a4d3c] leading-tight">0.00 ETB</span>
                         </div>
                      </div>
                   </div>

                   {/* Action Buttons */}
                   <div className="flex flex-col sm:flex-row gap-4 mt-2">
                      <button 
                         onClick={() => router.push('/mentor/dashboard')}
                         className="flex-1 py-4 bg-[#0a3a2e] text-white text-[13px] font-bold rounded-xl hover:bg-[#072a21] transition shadow-md flex items-center justify-center gap-2"
                      >
                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                         Back to Dashboard
                      </button>
                      <button 
                         onClick={() => router.push('/mentor/requests')}
                         className="flex-1 py-4 bg-[#e8ebee] text-[#0a3a2e] text-[13px] font-bold rounded-xl hover:bg-gray-200 transition shadow-sm flex items-center justify-center gap-2"
                      >
                         View Requests
                      </button>
                      <button className="flex-1 py-4 bg-white border border-gray-200 text-[#0a3a2e] text-[13px] font-bold rounded-xl hover:bg-gray-50 transition shadow-sm flex items-center justify-center gap-2">
                         <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                         Message Founder
                      </button>
                   </div>
                </div>

                {/* Right Column - Context Data */}
                <div className="w-full lg:w-[35%] shrink-0 flex flex-col gap-6">
                   
                   {/* Startup Info Card */}
                   <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                      <div className="flex items-center gap-4 mb-6">
                         <div className="w-14 h-14 bg-[#0a3a2e] rounded-xl flex items-center justify-center shrink-0">
                            {/* EthioStream Mock Logo */}
                            <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
                         </div>
                         <div>
                            <h3 className="text-[16px] font-bold text-[#0a3a2e] leading-tight">EthioStream</h3>
                            <p className="text-[12px] text-gray-500 mt-1">Media Tech • Seed Stage</p>
                         </div>
                      </div>
                      
                      <div className="flex items-center gap-3 mb-5 border-t border-gray-100 pt-5">
                         <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150" alt="Founder" className="w-10 h-10 rounded-full object-cover shrink-0" />
                         <div>
                            <span className="block text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">FOUNDER</span>
                            <span className="text-[13px] font-bold text-gray-900 leading-tight">Amara Selassie</span>
                         </div>
                      </div>

                      <div className="flex items-center gap-2 px-3 py-2 bg-[#f0f2f5] rounded-lg text-gray-600 text-[12px] font-medium">
                         <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                         Addis Ababa, Ethiopia
                      </div>
                   </div>

                   {/* Status Card */}
                   <div className="bg-[#115543] rounded-2xl p-6 text-white shadow-sm relative overflow-hidden">
                      <div className="absolute right-[-20px] top-[-20px] opacity-10">
                         <svg className="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      </div>
                      
                      <div className="flex justify-between items-center mb-4 relative z-10">
                         <h3 className="text-[14px] font-bold text-white">Status</h3>
                         <span className="px-2.5 py-1 bg-[#0a3a2e] text-[#86b5a5] text-[9px] font-bold uppercase tracking-widest rounded-full border border-[#1b5e4c]">
                            AWAITING RESPONSE
                         </span>
                      </div>
                      <p className="text-[13px] leading-relaxed text-gray-200 mb-6 relative z-10">
                         The startup has been notified. You can typically expect a response within the next <span className="font-bold text-white">48-72 hours</span>.
                      </p>
                      
                      <div className="flex items-center gap-2 text-[#86b5a5] text-[11px] font-medium relative z-10 border-t border-[#1b5e4c] pt-4">
                         <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                         Response rate: 94% (Avg. 2 days)
                      </div>
                   </div>

                   {/* Quick Actions */}
                   <div className="flex flex-col gap-3">
                      <button className="w-full py-3.5 bg-white border border-gray-100 text-gray-700 text-[13px] font-bold rounded-xl hover:bg-gray-50 transition shadow-sm flex items-center justify-center gap-2">
                         <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                         Set Reminder
                      </button>
                      <button 
                         onClick={() => router.push('/mentor/requests/profile')}
                         className="w-full py-3.5 bg-white border border-gray-100 text-gray-700 text-[13px] font-bold rounded-xl hover:bg-gray-50 transition shadow-sm flex items-center justify-center gap-2"
                      >
                         <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                         View Full Profile
                      </button>
                   </div>

                   {/* Note Card */}
                   <div className="bg-[#f5f7f6] rounded-2xl p-6 border border-gray-100 shadow-sm relative">
                      <div className="absolute top-4 right-4 text-gray-300">
                         <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"></path></svg>
                      </div>
                      <p className="text-[13px] text-gray-600 leading-relaxed italic mb-4 relative z-10">
                         "Focusing on market entry and content monetization will give EthioStream the operational resilience they need for their upcoming series A."
                      </p>
                      <span className="block text-[9px] font-bold text-gray-400 uppercase tracking-widest border-t border-gray-200 pt-4">
                         — NOTE FROM YOUR STRATEGY BOARD
                      </span>
                   </div>

                </div>
             </div>

           </div>
        </main>
      </div>
    </div>
  );
}
