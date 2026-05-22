"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/mentor/Sidebar";

export default function MentorshipRequests() {
  const [activeRequest, setActiveRequest] = useState(1);
  const router = useRouter();

  const requests = [
    {
      id: 1,
      startup: "BioFarm Inc.",
      founder: "Sara Mebirate",
      industry: "AGTECH",
      stage: "Early Revenue",
      support: "Scale-up Strategy",
      priority: "High Priority",
      priorityColor: "bg-red-500",
      status: "New",
      statusColor: "bg-[#0a4d3c] text-white",
      logo: "B"
    },
    {
      id: 2,
      startup: "ZayRide Express",
      founder: "Abebe Bikila",
      industry: "LOGISTICS",
      stage: "MVP Stage",
      support: "Fleet Management",
      priority: "Med Priority",
      priorityColor: "bg-emerald-500",
      status: "Reviewing",
      statusColor: "bg-gray-200 text-gray-700",
      logo: "Z"
    },
    {
      id: 3,
      startup: "EthioStream",
      founder: "Dawit Yemane",
      industry: "MEDIA",
      stage: "Growth Phase",
      support: "Monetization",
      priority: "Low Priority",
      priorityColor: "bg-gray-400",
      status: "Pending",
      statusColor: "bg-[#d1f4e0] text-[#0a4d3c]",
      logo: "E"
    },
    {
      id: 4,
      startup: "ChapaPay",
      founder: "Ismail Seid",
      industry: "FINTECH",
      stage: "Late Revenue",
      support: "Regional Compliance",
      priority: "High Priority",
      priorityColor: "bg-red-500",
      status: "New",
      statusColor: "bg-[#0a4d3c] text-white",
      logo: "C"
    }
  ];

  return (
    <div className="flex h-screen bg-[#f8f9fa] font-sans text-gray-900 overflow-hidden">
      
      {/* Sidebar - Mentor Portal Theme (Dark Green) */}
      <Sidebar />

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
              placeholder="Search startups or founders..." 
              className="w-full pl-11 pr-4 py-3 bg-[#f0f2f5] border border-transparent rounded-full text-[13px] outline-none focus:bg-white focus:border-[#0a4d3c]/30 focus:ring-4 focus:ring-[#0a4d3c]/10 transition" 
            />
          </div>

          <div className="flex items-center gap-5">
            <button className="relative text-gray-400 hover:text-gray-800 transition">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
            </button>
            <button className="relative text-gray-400 hover:text-gray-800 transition">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </button>
            <div className="w-px h-6 bg-gray-200 mx-1"></div>
            <img src="https://i.pravatar.cc/150?img=11" alt="Avatar" className="w-8 h-8 rounded-full object-cover border border-gray-200 cursor-pointer" />
          </div>
        </header>

        {/* Scrollable Main Content */}
        <main className="flex-grow flex flex-col overflow-y-auto">
           <div className="p-8 lg:p-10 max-w-[1400px] w-full mx-auto flex flex-col">
             
             {/* Title Section */}
             <div className="mb-8">
                <h1 className="text-[32px] font-bold text-[#0a3a2e] tracking-tight mb-2">Mentorship Requests</h1>
                <p className="text-gray-500 text-[15px]">Review, accept, and manage startup mentorship opportunities from across Ethiopia.</p>
             </div>

             {/* Stats Row */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center gap-5">
                   <div className="w-12 h-12 rounded-full bg-[#e8fbf0] text-[#0a4d3c] flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
                   </div>
                   <div>
                      <span className="text-[12px] font-bold text-gray-500 uppercase tracking-widest block mb-1">Total Requests</span>
                      <span className="text-[28px] font-bold text-gray-900 leading-none">42</span>
                   </div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center gap-5">
                   <div className="w-12 h-12 rounded-full bg-[#e8fbf0] text-[#0a4d3c] flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                   </div>
                   <div>
                      <span className="text-[12px] font-bold text-gray-500 uppercase tracking-widest block mb-1">Proposals Sent</span>
                      <span className="text-[28px] font-bold text-gray-900 leading-none">12</span>
                   </div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center gap-5">
                   <div className="w-12 h-12 rounded-full bg-[#0a3a2e] text-white flex items-center justify-center shrink-0 font-serif italic font-bold text-xl">
                      H
                   </div>
                   <div>
                      <span className="text-[12px] font-bold text-gray-500 uppercase tracking-widest block mb-1">Awaiting Response</span>
                      <span className="text-[28px] font-bold text-[#2d9c6c] leading-none">5</span>
                   </div>
                </div>
             </div>

             {/* Filters & Export */}
             <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                <div className="flex flex-wrap items-center gap-3">
                   <div className="relative">
                      <select className="appearance-none bg-gray-100 text-gray-700 py-2.5 pl-4 pr-10 rounded-xl outline-none hover:bg-gray-200 transition text-[13px] font-bold border border-transparent">
                         <option>Status: All</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                   </div>
                   <div className="relative">
                      <select className="appearance-none bg-gray-100 text-gray-700 py-2.5 pl-4 pr-10 rounded-xl outline-none hover:bg-gray-200 transition text-[13px] font-bold border border-transparent">
                         <option>Industry: All</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                   </div>
                   <div className="relative">
                      <select className="appearance-none bg-gray-100 text-gray-700 py-2.5 pl-4 pr-10 rounded-xl outline-none hover:bg-gray-200 transition text-[13px] font-bold border border-transparent">
                         <option>Stage: All</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                   </div>
                   <div className="relative">
                      <select className="appearance-none bg-gray-100 text-gray-700 py-2.5 pl-4 pr-10 rounded-xl outline-none hover:bg-gray-200 transition text-[13px] font-bold border border-transparent">
                         <option>Focus: All</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                   </div>
                </div>
                <button className="px-5 py-2.5 bg-[#0a3a2e] text-white text-[13px] font-bold rounded-xl hover:bg-[#072a21] transition flex items-center gap-2 shadow-sm shrink-0">
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                   Export Data
                </button>
             </div>

             {/* Main Split Content */}
             <div className="flex flex-col xl:flex-row gap-6 items-start">
                
                {/* Table Area (Left) */}
                <div className="flex-grow w-full bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
                   <div className="overflow-x-auto">
                      <table className="w-full text-left min-w-[700px]">
                         <thead className="bg-[#f8f9fa] border-b border-gray-100">
                            <tr>
                               <th className="px-6 py-5 text-[10px] font-bold text-gray-500 tracking-widest uppercase">STARTUP & FOUNDER</th>
                               <th className="px-6 py-5 text-[10px] font-bold text-gray-500 tracking-widest uppercase">CONTEXT</th>
                               <th className="px-6 py-5 text-[10px] font-bold text-gray-500 tracking-widest uppercase">REQUESTED SUPPORT</th>
                               <th className="px-6 py-5 text-[10px] font-bold text-gray-500 tracking-widest uppercase">STATUS</th>
                               <th className="px-6 py-5 text-[10px] font-bold text-gray-500 tracking-widest uppercase text-center">ACTIONS</th>
                            </tr>
                         </thead>
                         <tbody className="divide-y divide-gray-50">
                            {requests.map((req) => (
                               <tr 
                                 key={req.id} 
                                 onClick={() => router.push('/mentor/requests/profile')}
                                 className={`transition cursor-pointer ${activeRequest === req.id ? 'bg-[#f0f4f2]' : 'hover:bg-gray-50'}`}
                               >
                                  <td className="px-6 py-5">
                                     <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-[#0a3a2e] flex items-center justify-center text-white font-bold shrink-0">
                                           {req.logo}
                                        </div>
                                        <div>
                                           <h4 className="text-[14px] font-bold text-gray-900 leading-tight">{req.startup}</h4>
                                           <p className="text-[12px] text-gray-500 mt-0.5">{req.founder}</p>
                                        </div>
                                     </div>
                                  </td>
                                  <td className="px-6 py-5">
                                     <div className="flex flex-col items-start gap-1.5">
                                        <span className={`px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide rounded ${req.industry === 'AGTECH' || req.industry === 'FINTECH' ? 'bg-[#d1f4e0] text-[#0a4d3c]' : 'bg-gray-100 text-gray-600'}`}>
                                           {req.industry}
                                        </span>
                                        <span className="text-[12px] text-gray-600">{req.stage}</span>
                                     </div>
                                  </td>
                                  <td className="px-6 py-5">
                                     <div className="flex flex-col gap-1">
                                        <span className="text-[13px] font-bold text-gray-900">{req.support}</span>
                                        <div className="flex items-center gap-1.5">
                                           <div className={`w-1.5 h-1.5 rounded-full ${req.priorityColor}`}></div>
                                           <span className="text-[11px] font-medium text-gray-500">{req.priority}</span>
                                        </div>
                                     </div>
                                  </td>
                                  <td className="px-6 py-5">
                                     <span className={`px-3 py-1 text-[11px] font-bold rounded-full ${req.statusColor}`}>
                                        {req.status}
                                     </span>
                                  </td>
                                  <td className="px-6 py-5 text-center">
                                     <button className="w-8 h-8 rounded-full bg-[#eef2f0] text-[#0a3a2e] flex items-center justify-center mx-auto hover:bg-[#dce6e1] transition">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                                     </button>
                                  </td>
                               </tr>
                            ))}
                         </tbody>
                      </table>
                   </div>
                </div>

                {/* Detail Panel (Right) */}
                <div className="w-full xl:w-[360px] shrink-0 bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden flex flex-col">
                   
                   {/* Banner */}
                   <div className="h-24 bg-[#0a3a2e] relative"></div>
                   
                   <div className="px-6 pb-6 pt-0 relative flex flex-col flex-grow">
                      {/* Floating Logo */}
                      <div className="w-[68px] h-[68px] bg-white rounded-2xl p-1.5 shadow-md absolute -top-[34px] left-6">
                         <div className="w-full h-full bg-[#0a3a2e] rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                            B
                         </div>
                      </div>

                      <div className="mt-12 mb-6">
                         <div className="flex justify-between items-start mb-1">
                            <h2 className="text-[20px] font-bold text-gray-900 tracking-tight">BioFarm Inc.</h2>
                            <button className="text-gray-400 hover:text-gray-800 transition mt-1">
                               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                            </button>
                         </div>
                         <p className="text-[13px] text-gray-500">Addis Ababa, Ethiopia</p>
                      </div>

                      {/* Founder Info */}
                      <div className="bg-[#f8f9fa] rounded-xl p-4 flex items-center gap-3 mb-6">
                         <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100&h=100" alt="Sara" className="w-10 h-10 rounded-full object-cover shrink-0" />
                         <div>
                            <h3 className="text-[14px] font-bold text-gray-900">Sara Mebirate</h3>
                            <p className="text-[12px] text-gray-500">Founder & CEO</p>
                         </div>
                      </div>

                      {/* Key Challenge Quote */}
                      <div className="mb-6">
                         <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">KEY CHALLENGE</span>
                         <div className="bg-[#e8fbf0] border-l-4 border-[#0a3a2e] rounded-r-xl p-4">
                            <p className="text-[13px] text-[#0a4d3c] font-medium leading-relaxed italic">
                               "Seeking guidance on scaling logistics and supply chain automation in regional Ethiopia."
                            </p>
                         </div>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-3 mb-8">
                         <div className="bg-[#f8f9fa] rounded-xl p-4">
                            <span className="block text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-1">MONTHLY REV</span>
                            <span className="text-[16px] font-bold text-gray-900">$12k</span>
                         </div>
                         <div className="bg-[#f8f9fa] rounded-xl p-4">
                            <span className="block text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-1">TEAM SIZE</span>
                            <span className="text-[16px] font-bold text-gray-900">12 Emp.</span>
                         </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="mt-auto flex flex-col gap-3">
                         <button className="w-full py-3.5 bg-[#0a3a2e] text-white text-[13px] font-bold rounded-xl hover:bg-[#072a21] transition flex items-center justify-center gap-2 shadow-sm">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                            Accept Request
                         </button>
                         <button onClick={() => router.push('/mentor/requests/proposal')} className="w-full py-3.5 bg-[#f0f2f5] text-gray-800 text-[13px] font-bold rounded-xl hover:bg-gray-200 transition flex items-center justify-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                            Send Proposal
                         </button>
                         <div className="flex gap-3 mt-1">
                            <button className="w-1/2 py-2.5 bg-white border border-gray-200 text-gray-600 text-[12px] font-bold rounded-lg hover:bg-gray-50 transition">Decline</button>
                            <button onClick={() => router.push('/mentor/requests/profile')} className="w-1/2 py-2.5 bg-white border border-gray-200 text-gray-600 text-[12px] font-bold rounded-lg hover:bg-gray-50 transition">Full Profile</button>
                         </div>
                      </div>

                   </div>
                   
                   {/* Bottom Mentor Tip */}
                   <div className="bg-[#115543] p-5 text-white">
                      <div className="flex items-center gap-2 mb-2">
                         <svg className="w-4 h-4 text-[#86b5a5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                         <span className="text-[11px] font-bold uppercase tracking-widest text-[#86b5a5]">MENTOR TIP</span>
                      </div>
                      <p className="text-[12px] leading-relaxed text-gray-100">
                         BioFarm is currently leading the Agritech sector in the Amhara region. Their logistics friction suggests a need for deep rural infrastructure ops rather than just software routing.
                      </p>
                   </div>
                </div>

             </div>

           </div>
        </main>

      </div>
    </div>
  );
}
