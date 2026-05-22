"use client";
import Link from "next/link";
import Sidebar from "@/components/mentor/Sidebar";

export default function ProvideResources() {
  return (
    <div className="flex h-screen bg-[#fbfcfc] font-sans text-gray-900 overflow-hidden">
      
      {/* Sidebar - Keeps the original exact list and new styling */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col overflow-hidden bg-[#f8f9fa]">
        
        {/* Global Header */}
        <header className="flex justify-between items-center px-10 py-5 bg-white border-b border-gray-100 z-10 shrink-0 h-[80px]">
          <div className="relative w-full max-w-[500px]">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input 
              type="text" 
              placeholder="Search resources or startups..." 
              className="w-full pl-11 pr-4 py-2.5 bg-[#f5f7f6] border border-transparent rounded-lg text-[13px] outline-none focus:bg-white focus:border-[#0a4d3c]/30 focus:ring-4 focus:ring-[#0a4d3c]/10 transition" 
            />
          </div>

          <div className="flex items-center gap-6">
            <button className="relative text-gray-400 hover:text-gray-800 transition">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
            </button>
            <button className="relative text-gray-400 hover:text-gray-800 transition">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </button>
            <div className="w-px h-8 bg-gray-200"></div>
            <div className="flex items-center gap-3">
               <span className="text-[13px] font-medium text-gray-800">StartupConnect Ethiopia</span>
            </div>
          </div>
        </header>

        {/* Scrollable Main Content */}
        <main className="flex-grow flex flex-col overflow-y-auto">
           <div className="p-8 lg:p-10 max-w-[1200px] w-full mx-auto flex flex-col">
             
             {/* Title Section */}
             <div className="mb-8">
                <h1 className="text-[28px] font-bold text-[#0a3a2e] tracking-tight mb-2">Provide Learning Resources</h1>
                <p className="text-gray-500 text-[15px]">Share guides, templates, links, and documents to help startups improve their business.</p>
             </div>

             <div className="flex flex-col lg:flex-row gap-8">
                
                {/* Left Column (Forms & Table) */}
                <div className="flex-grow flex flex-col gap-6 lg:w-2/3">
                   
                   {/* Select Startup */}
                   <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                      <h2 className="text-[14px] font-bold text-gray-900 flex items-center gap-2 mb-4">
                         <svg className="w-4 h-4 text-[#0a4d3c]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                         Select Startup
                      </h2>
                      <div className="flex flex-col md:flex-row gap-6">
                         <div className="w-full md:w-1/2">
                            <label className="block text-[12px] font-medium text-gray-500 mb-2">Target Startup</label>
                            <div className="relative">
                               <select className="w-full appearance-none bg-white border border-gray-200 text-gray-700 py-3 pl-4 pr-10 rounded-xl outline-none focus:border-[#0a4d3c] transition text-[14px]">
                                  <option>GreenAgro</option>
                               </select>
                               <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                               </div>
                            </div>
                         </div>
                         <div className="w-full md:w-1/2 bg-[#f5f7f6] rounded-xl p-4 flex flex-col gap-3">
                            <div className="flex justify-between">
                               <div>
                                  <span className="block text-[10px] font-bold text-gray-500 mb-0.5">Industry</span>
                                  <span className="text-[13px] font-bold text-gray-900">AgriTech</span>
                               </div>
                               <div>
                                  <span className="block text-[10px] font-bold text-gray-500 mb-0.5">Stage</span>
                                  <span className="text-[13px] font-bold text-gray-900">Seed</span>
                               </div>
                            </div>
                            <div>
                               <span className="block text-[10px] font-bold text-gray-500 mb-0.5">Mentorship Goal</span>
                               <span className="text-[13px] font-bold text-gray-900">Scaling supply chain logistics</span>
                            </div>
                         </div>
                      </div>
                   </div>

                   {/* Resource Details */}
                   <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                      <h2 className="text-[14px] font-bold text-gray-900 flex items-center gap-2 mb-5">
                         <svg className="w-4 h-4 text-[#0a4d3c]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                         Resource Details
                      </h2>

                      <div className="mb-5">
                         <label className="block text-[12px] font-medium text-gray-600 mb-2">Resource Title</label>
                         <input type="text" placeholder="e.g., Supply Chain Optimization Guide 2024" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-[14px] outline-none focus:border-[#0a4d3c] transition" />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                         <div>
                            <label className="block text-[12px] font-medium text-gray-600 mb-2">Resource Type</label>
                            <div className="relative">
                               <select className="w-full appearance-none bg-white border border-gray-200 text-gray-700 py-3 pl-4 pr-10 rounded-xl outline-none focus:border-[#0a4d3c] transition text-[14px]">
                                  <option>Guide</option>
                                  <option>Template</option>
                                  <option>Link</option>
                                  <option>Video</option>
                               </select>
                               <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                               </div>
                            </div>
                         </div>
                         <div>
                            <label className="block text-[12px] font-medium text-gray-600 mb-2">Category</label>
                            <div className="relative">
                               <select className="w-full appearance-none bg-white border border-gray-200 text-gray-700 py-3 pl-4 pr-10 rounded-xl outline-none focus:border-[#0a4d3c] transition text-[14px]">
                                  <option>Business Model</option>
                                  <option>Marketing</option>
                                  <option>Finance</option>
                                  <option>Operations</option>
                               </select>
                               <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                               </div>
                            </div>
                         </div>
                      </div>

                      <div className="mb-5">
                         <label className="block text-[12px] font-medium text-gray-600 mb-2">Resource Link (Optional)</label>
                         <input type="text" placeholder="https://example.com/resource" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-[14px] outline-none focus:border-[#0a4d3c] transition" />
                      </div>

                      <div className="mb-5">
                         <label className="block text-[12px] font-medium text-gray-600 mb-2">Upload Files</label>
                         <div className="w-full border-2 border-dashed border-gray-300 rounded-xl bg-[#fcfcfc] p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50 transition">
                            <svg className="w-8 h-8 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                            <p className="text-[13px] text-gray-600 mb-1">Drag and drop files here, or <span className="font-bold text-[#0a4d3c]">browse</span></p>
                            <p className="text-[11px] text-gray-400">PDF, DOCX, PPTX, PNG, JPG (Max 25MB)</p>
                         </div>
                      </div>

                      <div className="mb-5">
                         <label className="block text-[12px] font-medium text-gray-600 mb-2">Short Description</label>
                         <textarea placeholder="Briefly describe what this resource covers..." className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-[14px] outline-none focus:border-[#0a4d3c] transition h-20 resize-none"></textarea>
                      </div>

                      <div className="mb-8">
                         <label className="block text-[12px] font-medium text-gray-600 mb-2">Notes for Startup</label>
                         <textarea placeholder="Personalized advice or specific sections to focus on..." className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-[14px] outline-none focus:border-[#0a4d3c] transition h-24 resize-none"></textarea>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center justify-end gap-4 border-t border-gray-100 pt-6">
                         <button className="px-5 py-2.5 text-gray-500 text-[14px] font-medium hover:text-gray-800 transition">
                            Cancel
                         </button>
                         <button className="px-5 py-2.5 bg-white text-gray-700 text-[14px] font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition shadow-sm">
                            Save as Draft
                         </button>
                         <button className="px-6 py-2.5 bg-[#0a4d3c] text-white text-[14px] font-bold rounded-lg hover:bg-[#07382b] transition shadow-sm">
                            Share Resource
                         </button>
                      </div>
                   </div>

                   {/* Previously Shared Resources */}
                   <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm mb-10">
                      <div className="flex justify-between items-center mb-6">
                         <h2 className="text-[14px] font-medium text-gray-700">Previously Shared Resources</h2>
                         <Link href="#" className="text-[12px] font-medium text-[#0a4d3c] hover:underline">View All</Link>
                      </div>
                      
                      <div className="overflow-x-auto">
                         <table className="w-full text-left">
                            <thead>
                               <tr>
                                  <th className="pb-4 text-[11px] font-bold text-gray-500 uppercase tracking-widest border-b border-gray-100">TITLE</th>
                                  <th className="pb-4 text-[11px] font-bold text-gray-500 uppercase tracking-widest border-b border-gray-100">STARTUP</th>
                                  <th className="pb-4 text-[11px] font-bold text-gray-500 uppercase tracking-widest border-b border-gray-100">TYPE</th>
                                  <th className="pb-4 text-[11px] font-bold text-gray-500 uppercase tracking-widest border-b border-gray-100">DATE</th>
                                  <th className="pb-4 text-[11px] font-bold text-gray-500 uppercase tracking-widest border-b border-gray-100 text-right">STATUS</th>
                               </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                               {/* Row 1 */}
                               <tr>
                                  <td className="py-4 pr-4">
                                     <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-[#0a4d3c] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                                        <span className="text-[13px] font-medium text-gray-900 leading-tight">Pitch Deck Analysis<br/>Template</span>
                                     </div>
                                  </td>
                                  <td className="py-4 text-[13px] text-gray-800">EthioFintech</td>
                                  <td className="py-4">
                                     <span className="px-2 py-0.5 bg-orange-100 text-orange-800 text-[9px] font-bold rounded uppercase tracking-wide">TEMPLATE</span>
                                  </td>
                                  <td className="py-4 text-[12px] text-gray-500">Oct 24,<br/>2023</td>
                                  <td className="py-4 text-right">
                                     <span className="px-2 py-1 bg-green-50 text-green-700 text-[10px] font-medium rounded-full">Viewed</span>
                                  </td>
                               </tr>
                               {/* Row 2 */}
                               <tr>
                                  <td className="py-4 pr-4">
                                     <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-red-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                                        <span className="text-[13px] font-medium text-gray-900 leading-tight">Market Trends Ethiopia<br/>2023</span>
                                     </div>
                                  </td>
                                  <td className="py-4 text-[13px] text-gray-800">GreenAgro</td>
                                  <td className="py-4">
                                     <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[9px] font-bold rounded uppercase tracking-wide">LINK</span>
                                  </td>
                                  <td className="py-4 text-[12px] text-gray-500">Oct 20,<br/>2023</td>
                                  <td className="py-4 text-right">
                                     <span className="px-2 py-1 bg-[#e8fbf0] text-[#0a4d3c] text-[10px] font-medium rounded-full">Downloaded</span>
                                  </td>
                               </tr>
                               {/* Row 3 */}
                               <tr>
                                  <td className="py-4 pr-4">
                                     <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-gray-800 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                                        <span className="text-[13px] font-medium text-gray-900 leading-tight">AgriTech Scaling<br/>Seminar</span>
                                     </div>
                                  </td>
                                  <td className="py-4 text-[13px] text-gray-800">GreenAgro</td>
                                  <td className="py-4">
                                     <span className="px-2 py-0.5 bg-green-100 text-green-800 text-[9px] font-bold rounded uppercase tracking-wide">VIDEO</span>
                                  </td>
                                  <td className="py-4 text-[12px] text-gray-500">Oct 15,<br/>2023</td>
                                  <td className="py-4 text-right">
                                     <span className="px-2 py-1 bg-gray-100 text-gray-600 text-[10px] font-medium rounded-full">Sent</span>
                                  </td>
                               </tr>
                            </tbody>
                         </table>
                      </div>
                   </div>

                </div>

                {/* Right Column (Sidebar Widgets) */}
                <div className="flex-col gap-6 lg:w-1/3 hidden lg:flex">
                   
                   {/* Resource Preview */}
                   <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                      <h3 className="text-[13px] font-medium text-gray-700 mb-4">Resource Preview</h3>
                      
                      <div className="rounded-xl overflow-hidden border border-gray-100">
                         {/* Header Graphic */}
                         <div className="bg-[#5f877d] h-[120px] relative flex items-center justify-center p-4">
                            <div className="w-full h-full bg-white/10 rounded border border-white/20 p-2 flex flex-col gap-2">
                               <div className="h-2 w-1/3 bg-white/30 rounded"></div>
                               <div className="flex gap-2">
                                  <div className="h-10 flex-grow bg-white/20 rounded"></div>
                                  <div className="h-10 w-1/4 bg-white/20 rounded"></div>
                               </div>
                               <div className="flex gap-2">
                                  <div className="h-4 w-4 rounded-full bg-white/30"></div>
                                  <div className="h-4 flex-grow bg-white/20 rounded"></div>
                               </div>
                            </div>
                         </div>
                         {/* Content */}
                         <div className="p-4 bg-white">
                            <div className="flex justify-between items-center mb-3">
                               <span className="px-2 py-0.5 bg-[#0a4d3c] text-white text-[9px] font-bold rounded uppercase tracking-wide">GUIDE</span>
                               <span className="text-[10px] text-gray-400">Shared with GreenAgro</span>
                            </div>
                            <h4 className="text-[14px] font-bold text-gray-900 mb-2 leading-tight">Supply Chain Optimization...</h4>
                            <p className="text-[11px] text-gray-500 leading-relaxed mb-4">
                               A comprehensive guide on optimizing rural supply chain...
                            </p>
                            <div className="flex justify-between items-center border-t border-gray-100 pt-3">
                               <div className="flex items-center gap-1.5 text-gray-400">
                                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
                                  <span className="text-[10px]">1 file attached</span>
                               </div>
                               <svg className="w-4 h-4 text-[#0a4d3c]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                         </div>
                      </div>
                   </div>

                   {/* Quick Templates */}
                   <div className="bg-[#0a3a2e] rounded-2xl shadow-sm p-6 text-white">
                      <h3 className="text-[14px] font-bold flex items-center gap-2 mb-2">
                         <svg className="w-4 h-4 text-[#86b5a5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                         Quick Templates
                      </h3>
                      <p className="text-[12px] text-[#86b5a5] mb-5 leading-relaxed">
                         Use these pre-approved templates to quickly share standards with your startups.
                      </p>
                      
                      <div className="flex flex-col gap-2">
                         <button className="w-full flex items-center justify-between p-3 bg-[#0d4738] rounded-xl hover:bg-[#115543] transition border border-[#145d4a]">
                            <div className="flex items-center gap-3">
                               <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                               <span className="text-[13px] font-medium">Pitch Deck Template</span>
                            </div>
                            <svg className="w-4 h-4 text-[#86b5a5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                         </button>
                         <button className="w-full flex items-center justify-between p-3 bg-[#0d4738] rounded-xl hover:bg-[#115543] transition border border-[#145d4a]">
                            <div className="flex items-center gap-3">
                               <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                               <span className="text-[13px] font-medium">Business Model Canvas</span>
                            </div>
                            <svg className="w-4 h-4 text-[#86b5a5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                         </button>
                         <button className="w-full flex items-center justify-between p-3 bg-[#0d4738] rounded-xl hover:bg-[#115543] transition border border-[#145d4a]">
                            <div className="flex items-center gap-3">
                               <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                               <span className="text-[13px] font-medium">Financial Projection Sheet</span>
                            </div>
                            <svg className="w-4 h-4 text-[#86b5a5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                         </button>
                         <button className="w-full flex items-center justify-between p-3 bg-[#0d4738] rounded-xl hover:bg-[#115543] transition border border-[#145d4a]">
                            <div className="flex items-center gap-3">
                               <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path></svg>
                               <span className="text-[13px] font-medium">Marketing Plan Guide</span>
                            </div>
                            <svg className="w-4 h-4 text-[#86b5a5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                         </button>
                      </div>
                   </div>

                   {/* Mentor Tip Card */}
                   <div className="bg-[#faecd9] rounded-2xl p-6 border border-[#e6c9a3]">
                      <div className="flex items-center gap-2 mb-3">
                         <svg className="w-4 h-4 text-[#d97706]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                         <span className="text-[13px] font-bold text-[#b45309]">Mentor Tip</span>
                      </div>
                      <p className="text-[13px] text-[#92400e] italic leading-relaxed">
                         "Adding a personalized note to each resource significantly increases the likelihood of the founder implementing the advice."
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
