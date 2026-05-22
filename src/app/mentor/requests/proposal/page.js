"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/mentor/Sidebar";

export default function SendProposal() {
  const [format, setFormat] = useState('1:1');
  const [mode, setMode] = useState('in-person');
  const router = useRouter();
  
  return (
    <div className="flex h-screen bg-[#f8f9fa] font-sans text-gray-900 overflow-hidden">
      
      {/* Sidebar - Mentor Portal Theme (Dark Green) */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col overflow-hidden bg-[#fafbfc] relative">
        
        {/* Global Header */}
        <header className="flex justify-between items-center px-10 py-5 bg-white border-b border-gray-100 z-10 shrink-0 h-[80px]">
          <div className="flex items-center gap-6">
             <span className="text-[16px] font-bold text-[#0a3a2e] hidden md:block">Send Proposal</span>
             <div className="relative w-[320px] lg:w-[400px]">
               <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-emerald-600/50">
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
               </div>
               <input 
                 type="text" 
                 placeholder="Search startups..." 
                 className="w-full pl-11 pr-4 py-2 bg-[#e8fbf0]/50 border border-transparent rounded-full text-[13px] outline-none focus:bg-[#e8fbf0] focus:border-[#0a4d3c]/30 focus:ring-4 focus:ring-[#0a4d3c]/10 transition" 
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
            </div>
          </div>
        </header>

        {/* Scrollable Main Content */}
        <main className="flex-grow flex flex-col overflow-y-auto">
           <div className="p-8 lg:p-10 max-w-[1200px] w-full mx-auto flex flex-col pb-[120px]">
             
             {/* Breadcrumb */}
             <div className="flex items-center gap-2 text-[12px] font-medium text-gray-500 mb-6">
                <Link href="/mentor/requests" className="hover:text-gray-900 transition">Requests</Link>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                <Link href="/mentor/requests/profile" className="hover:text-gray-900 transition">Startup Profile</Link>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                <span className="text-gray-900 font-bold">Send Proposal</span>
             </div>

             {/* Hero Banner */}
             <div className="bg-[#0a3a2e] rounded-[20px] p-6 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-sm">
                <div className="flex items-center gap-5">
                   <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm overflow-hidden">
                      {/* EthioStream Logo Mock */}
                      <svg className="w-8 h-8 text-[#0a3a2e]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
                   </div>
                   <div>
                      <h1 className="text-[28px] font-bold text-white tracking-tight leading-none mb-2">EthioStream</h1>
                      <div className="flex flex-wrap items-center gap-4 text-[13px] text-[#86b5a5]">
                         <div className="flex items-center gap-1.5">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                            Amara Selassie
                         </div>
                         <span>•</span>
                         <div className="flex items-center gap-1.5">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>
                            Media Tech
                         </div>
                         <span>•</span>
                         <div className="flex items-center gap-1.5">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            Seed Stage
                         </div>
                      </div>
                   </div>
                </div>

                <span className="px-4 py-2 bg-[#0d4738] text-[#86b5a5] text-[11px] font-bold rounded-lg uppercase tracking-widest shrink-0 border border-[#1b5e4c]">
                   REQUEST STATUS: ACTIVE
                </span>
             </div>

             {/* Split Content */}
             <div className="flex flex-col lg:flex-row gap-8 items-start">
                
                {/* Left Column (Forms) */}
                <div className="flex-grow flex flex-col gap-8 w-full lg:w-[65%]">
                   
                   {/* Card 1: Proposal Setup */}
                   <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                      <div className="flex items-center gap-3 mb-8">
                         <div className="w-10 h-10 rounded-xl bg-[#e8fbf0] text-[#0a4d3c] flex items-center justify-center shrink-0">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                         </div>
                         <h2 className="text-[18px] font-bold text-[#0a3a2e]">Proposal Setup</h2>
                      </div>

                      <div className="flex flex-col gap-6">
                         <div>
                            <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">PROPOSAL TITLE</label>
                            <input type="text" placeholder="e.g., Strategic Growth & Content Monetization Roadmap" className="w-full bg-[#f8f9fa] border border-transparent text-gray-900 py-3.5 px-4 rounded-xl outline-none focus:border-[#0a4d3c]/50 focus:bg-white focus:ring-4 focus:ring-[#0a4d3c]/10 transition text-[13px]" />
                         </div>

                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                               <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">FOCUS AREA</label>
                               <div className="relative">
                                  <select className="w-full appearance-none bg-[#f8f9fa] border border-transparent text-gray-900 py-3.5 px-4 rounded-xl outline-none focus:border-[#0a4d3c]/50 focus:bg-white focus:ring-4 focus:ring-[#0a4d3c]/10 transition text-[13px]">
                                     <option>Market Entry Strategy</option>
                                  </select>
                                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                  </div>
                               </div>
                            </div>
                            <div>
                               <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">DURATION</label>
                               <div className="relative">
                                  <select className="w-full appearance-none bg-[#f8f9fa] border border-transparent text-gray-900 py-3.5 px-4 rounded-xl outline-none focus:border-[#0a4d3c]/50 focus:bg-white focus:ring-4 focus:ring-[#0a4d3c]/10 transition text-[13px]">
                                     <option>3 Months</option>
                                  </select>
                                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                  </div>
                               </div>
                            </div>
                         </div>

                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                               <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">SESSIONS COUNT</label>
                               <input type="text" defaultValue="12" className="w-full bg-[#f8f9fa] border border-transparent text-gray-900 py-3.5 px-4 rounded-xl outline-none focus:border-[#0a4d3c]/50 focus:bg-white focus:ring-4 focus:ring-[#0a4d3c]/10 transition text-[13px]" />
                            </div>
                            <div>
                               <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">FREQUENCY</label>
                               <div className="relative">
                                  <select className="w-full appearance-none bg-[#f8f9fa] border border-transparent text-gray-900 py-3.5 px-4 rounded-xl outline-none focus:border-[#0a4d3c]/50 focus:bg-white focus:ring-4 focus:ring-[#0a4d3c]/10 transition text-[13px]">
                                     <option>Weekly</option>
                                  </select>
                                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                  </div>
                               </div>
                            </div>
                         </div>

                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                               <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">FORMAT</label>
                               <div className="flex gap-2">
                                  <button 
                                    onClick={() => setFormat('1:1')}
                                    className={`flex-1 py-3 text-[13px] font-bold rounded-xl transition ${format === '1:1' ? 'bg-[#0a3a2e] text-white' : 'bg-[#f8f9fa] text-gray-600 hover:bg-gray-100'}`}
                                  >
                                     1:1 Session
                                  </button>
                                  <button 
                                    onClick={() => setFormat('group')}
                                    className={`flex-1 py-3 text-[13px] font-bold rounded-xl transition ${format === 'group' ? 'bg-[#0a3a2e] text-white' : 'bg-[#f8f9fa] text-gray-600 hover:bg-gray-100'}`}
                                  >
                                     Group
                                  </button>
                               </div>
                            </div>
                            <div>
                               <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">MODE</label>
                               <div className="flex gap-2">
                                  <button 
                                    onClick={() => setMode('remote')}
                                    className={`flex-1 py-3 text-[13px] font-bold rounded-xl transition ${mode === 'remote' ? 'bg-[#0a3a2e] text-white' : 'bg-[#f8f9fa] text-gray-600 hover:bg-gray-100'}`}
                                  >
                                     Remote
                                  </button>
                                  <button 
                                    onClick={() => setMode('in-person')}
                                    className={`flex-1 py-3 text-[13px] font-bold rounded-xl transition ${mode === 'in-person' ? 'bg-[#0a3a2e] text-white' : 'bg-[#f8f9fa] text-gray-600 hover:bg-gray-100'}`}
                                  >
                                     In-person
                                  </button>
                               </div>
                            </div>
                         </div>

                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                               <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">START DATE</label>
                               <input type="text" placeholder="mm/dd/yyyy" className="w-full bg-[#f8f9fa] border border-transparent text-gray-900 py-3.5 px-4 rounded-xl outline-none focus:border-[#0a4d3c]/50 focus:bg-white focus:ring-4 focus:ring-[#0a4d3c]/10 transition text-[13px]" />
                            </div>
                            <div>
                               <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">OPTIONAL FEE (ETB / MONTH)</label>
                               <input type="text" defaultValue="0.00" className="w-full bg-[#f8f9fa] border border-transparent text-gray-900 py-3.5 px-4 rounded-xl outline-none focus:border-[#0a4d3c]/50 focus:bg-white focus:ring-4 focus:ring-[#0a4d3c]/10 transition text-[13px]" />
                            </div>
                         </div>

                         <div>
                            <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">SCOPE & OBJECTIVES</label>
                            <textarea 
                               rows="4" 
                               placeholder="Define the boundaries and key goals of this engagement..."
                               className="w-full bg-[#f8f9fa] border border-transparent text-gray-900 py-3.5 px-4 rounded-xl outline-none focus:border-[#0a4d3c]/50 focus:bg-white focus:ring-4 focus:ring-[#0a4d3c]/10 transition text-[13px] resize-none" 
                            ></textarea>
                         </div>

                      </div>
                   </div>

                   {/* Card 2: Mentorship Plan */}
                   <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                      <div className="flex items-center gap-3 mb-8">
                         <div className="w-10 h-10 rounded-xl bg-[#e8fbf0] text-[#0a4d3c] flex items-center justify-center shrink-0">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                         </div>
                         <h2 className="text-[18px] font-bold text-[#0a3a2e]">Mentorship Plan</h2>
                      </div>

                      <div className="flex flex-col gap-5">
                         {/* Phase 1 */}
                         <div className="bg-[#f8f9fa] border-l-4 border-[#0a3a2e] rounded-r-2xl p-6">
                            <div className="flex items-center gap-3 mb-4">
                               <div className="w-6 h-6 rounded-full bg-[#0a3a2e] text-white flex items-center justify-center text-[10px] font-bold">01</div>
                               <h3 className="text-[13px] font-bold text-[#0a3a2e] uppercase tracking-widest">PHASE 1: ASSESSMENT & STRATEGY</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                               <div>
                                  <label className="block text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">FOCUS & ACTIVITIES</label>
                                  <div className="bg-white border border-gray-200 rounded-lg p-3 text-[13px] text-gray-700 min-h-[80px]">
                                     Deep dive into current monetization models and user retention data.
                                  </div>
                               </div>
                               <div>
                                  <label className="block text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">DELIVERABLES</label>
                                  <div className="bg-white border border-gray-200 rounded-lg p-3 text-[13px] text-gray-700 min-h-[80px]">
                                     Comprehensive Audit Report & Updated Value Proposition Map.
                                  </div>
                               </div>
                            </div>
                         </div>

                         {/* Phase 2 */}
                         <div className="bg-[#f8f9fa] border-l-4 border-[#86b5a5] rounded-r-2xl p-6">
                            <div className="flex items-center gap-3 mb-4">
                               <div className="w-6 h-6 rounded-full bg-[#86b5a5] text-white flex items-center justify-center text-[10px] font-bold">02</div>
                               <h3 className="text-[13px] font-bold text-[#456b5d] uppercase tracking-widest">PHASE 2: OPERATIONAL OPTIMIZATION</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                               <div>
                                  <label className="block text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">FOCUS & ACTIVITIES</label>
                                  <div className="bg-white border border-gray-200 rounded-lg p-3 text-[13px] text-gray-700 min-h-[80px]">
                                     Workflow automation for content pipeline and scaling ad-tech infrastructure.
                                  </div>
                               </div>
                               <div>
                                  <label className="block text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">DELIVERABLES</label>
                                  <div className="bg-white border border-gray-200 rounded-lg p-3 text-[13px] text-gray-700 min-h-[80px]">
                                     Operational Playbook & 3rd Party Integration List.
                                  </div>
                               </div>
                            </div>
                         </div>

                         <button className="w-full py-4 bg-white border-2 border-dashed border-gray-200 rounded-2xl text-[13px] font-bold text-[#0a3a2e] hover:bg-[#f8f9fa] hover:border-[#0a3a2e]/30 transition flex items-center justify-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"></path></svg>
                            Add Milestone / Phase
                         </button>
                      </div>
                   </div>

                   {/* Card 3: Terms & Agreement */}
                   <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                      <h2 className="text-[18px] font-bold text-[#0a3a2e] mb-6">Terms & Agreement</h2>
                      
                      <div className="flex flex-col gap-4">
                         <div className="bg-[#e8fbf0]/50 border border-[#e8fbf0] rounded-xl p-5 flex gap-4 cursor-pointer">
                            <div className="mt-0.5">
                               <div className="w-5 h-5 bg-white border-2 border-[#0a4d3c] rounded flex items-center justify-center">
                                  <svg className="w-3 h-3 text-[#0a4d3c]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                               </div>
                            </div>
                            <div>
                               <h4 className="text-[14px] font-bold text-[#0a3a2e] mb-1">Mentor Code of Conduct</h4>
                               <p className="text-[13px] text-[#0a3a2e]/70 leading-relaxed">I agree to maintain confidentiality and provide objective, professional guidance as per the StartupConnect Ethiopia guidelines.</p>
                            </div>
                         </div>

                         <div className="bg-[#e8fbf0]/50 border border-[#e8fbf0] rounded-xl p-5 flex gap-4 cursor-pointer">
                            <div className="mt-0.5">
                               <div className="w-5 h-5 bg-white border-2 border-gray-300 rounded flex items-center justify-center">
                                  {/* Unchecked */}
                               </div>
                            </div>
                            <div>
                               <h4 className="text-[14px] font-bold text-[#0a3a2e] mb-1">Platform Service Agreement</h4>
                               <p className="text-[13px] text-[#0a3a2e]/70 leading-relaxed">I acknowledge that all transactions and agreements within this proposal are governed by the overarching Institutional Mentor Agreement.</p>
                            </div>
                         </div>
                      </div>
                   </div>

                </div>

                {/* Right Column (Side Panels) */}
                <div className="w-full lg:w-[35%] shrink-0 flex flex-col gap-6">
                   
                   {/* Snapshot Card */}
                   <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                      <h3 className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-5">STARTUP SNAPSHOT</h3>
                      <div className="flex flex-col gap-4">
                         <div className="flex justify-between items-center border-b border-gray-50 pb-3">
                            <span className="text-[13px] text-gray-500">Founded</span>
                            <span className="text-[13px] font-bold text-gray-900">2022</span>
                         </div>
                         <div className="flex justify-between items-center border-b border-gray-50 pb-3">
                            <span className="text-[13px] text-gray-500">Location</span>
                            <span className="text-[13px] font-bold text-gray-900">Addis Ababa, ET</span>
                         </div>
                         <div className="flex justify-between items-center border-b border-gray-50 pb-3">
                            <span className="text-[13px] text-gray-500">Team Size</span>
                            <span className="text-[13px] font-bold text-gray-900">12 Employees</span>
                         </div>
                         <div className="flex justify-between items-center">
                            <span className="text-[13px] text-gray-500">Current Revenue</span>
                            <span className="text-[13px] font-bold text-[#0a3a2e]">$15k - $25k MRR</span>
                         </div>
                      </div>
                   </div>

                   {/* Match Insight */}
                   <div className="bg-[#0a3a2e] rounded-2xl p-6 text-white relative overflow-hidden shadow-sm">
                      <div className="absolute right-[-20px] top-4 opacity-10">
                         <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                      </div>
                      <h3 className="text-[11px] font-bold uppercase tracking-widest mb-4 text-[#86b5a5]">MATCH INSIGHT</h3>
                      <p className="text-[13px] text-gray-100 leading-relaxed mb-6">
                         The founder is specifically looking for expertise in <span className="font-bold text-white">Sub-Saharan media regulation</span> and <span className="font-bold text-white">subscription-based scaling</span>, which matches 94% of your verified profile skills.
                      </p>
                      <div className="flex flex-wrap gap-2">
                         <span className="px-2.5 py-1 bg-[#115543] text-white text-[10px] font-medium rounded-md border border-[#1b5e4c]">Media Policy</span>
                         <span className="px-2.5 py-1 bg-[#115543] text-white text-[10px] font-medium rounded-md border border-[#1b5e4c]">SaaS Scaling</span>
                         <span className="px-2.5 py-1 bg-[#115543] text-white text-[10px] font-medium rounded-md border border-[#1b5e4c]">Local Market</span>
                      </div>
                   </div>

                   {/* Proposal Summary */}
                   <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                      <h3 className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-6">PROPOSAL SUMMARY</h3>
                      
                      <div className="flex flex-col gap-5">
                         <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-xl bg-[#f8f9fa] text-[#0a3a2e] flex items-center justify-center shrink-0">
                               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <div>
                               <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">ENGAGEMENT</span>
                               <span className="text-[13px] font-bold text-[#0a3a2e]">3 Months • Bi-Weekly</span>
                            </div>
                         </div>
                         <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-xl bg-[#f8f9fa] text-[#0a3a2e] flex items-center justify-center shrink-0">
                               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            </div>
                            <div>
                               <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">DELIVERY FORMAT</span>
                               <span className="text-[13px] font-bold text-[#0a3a2e]">1:1 • In-person / Hybrid</span>
                            </div>
                         </div>
                         <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-xl bg-[#e8fbf0] text-[#0a4d3c] flex items-center justify-center shrink-0">
                               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <div>
                               <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">TOTAL ESTIMATED FEE</span>
                               <span className="text-[13px] font-bold text-[#0a3a2e]">0.00 ETB <span className="text-[10px] font-medium text-emerald-600">(Pro-bono noted)</span></span>
                            </div>
                         </div>
                      </div>
                   </div>

                   {/* Process Workflow */}
                   <div className="bg-[#f8f9fa] rounded-2xl p-6">
                      <h3 className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-6">PROCESS WORKFLOW</h3>
                      
                      <div className="flex flex-col gap-5">
                         <div className="flex gap-4 relative">
                            <div className="absolute left-[11px] top-6 bottom-[-20px] w-0.5 bg-gray-200"></div>
                            <div className="w-6 h-6 rounded-full bg-[#0a3a2e] text-white flex items-center justify-center text-[10px] font-bold shrink-0 relative z-10">1</div>
                            <div>
                               <h4 className="text-[13px] font-bold text-[#0a3a2e] mb-0.5">Proposal Sent</h4>
                               <p className="text-[11px] text-gray-500">Sent to EthioStream for founder review.</p>
                            </div>
                         </div>
                         <div className="flex gap-4 relative">
                            <div className="absolute left-[11px] top-6 bottom-[-20px] w-0.5 bg-gray-200"></div>
                            <div className="w-6 h-6 rounded-full bg-white border-2 border-gray-200 text-gray-400 flex items-center justify-center text-[10px] font-bold shrink-0 relative z-10">2</div>
                            <div>
                               <h4 className="text-[13px] font-bold text-gray-400 mb-0.5">Review & Negotiate</h4>
                               <p className="text-[11px] text-gray-400">Adjustments if requested by founder.</p>
                            </div>
                         </div>
                         <div className="flex gap-4 relative">
                            <div className="w-6 h-6 rounded-full bg-white border-2 border-gray-200 text-gray-400 flex items-center justify-center text-[10px] font-bold shrink-0 relative z-10">3</div>
                            <div>
                               <h4 className="text-[13px] font-bold text-gray-400 mb-0.5">Agreement Signed</h4>
                               <p className="text-[11px] text-gray-400">Official onboarding to your portfolio.</p>
                            </div>
                         </div>
                      </div>
                   </div>

                </div>

             </div>

           </div>
        </main>

        {/* Sticky Bottom Action Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:px-10 md:py-5 flex justify-between items-center z-20">
           <div className="flex items-center gap-2 text-gray-400 hidden sm:flex">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
              <span className="text-[12px] font-medium">Auto-saved at 14:32</span>
           </div>
           
           <div className="flex items-center gap-3 w-full sm:w-auto">
              <button className="px-6 py-2.5 text-gray-600 font-bold text-[13px] hover:text-gray-900 transition hidden md:block">
                 Save Draft
              </button>
              <button className="flex-1 sm:flex-none px-6 py-2.5 bg-gray-100 text-gray-700 font-bold text-[13px] rounded-xl hover:bg-gray-200 transition">
                 Preview Proposal
              </button>
              <button onClick={() => router.push('/mentor/requests/proposal/success')} className="flex-1 sm:flex-none px-8 py-2.5 bg-[#0a3a2e] text-white font-bold text-[13px] rounded-xl hover:bg-[#072a21] transition shadow-md flex items-center justify-center gap-2">
                 Send Proposal
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
           </div>
        </div>

      </div>
    </div>
  );
}
