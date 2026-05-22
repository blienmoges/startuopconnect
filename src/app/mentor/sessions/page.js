"use client";
import Link from "next/link";
import Sidebar from "@/components/mentor/Sidebar";

export default function ScheduleSession() {
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
              placeholder="Search startups, sessions..." 
              className="w-full pl-11 pr-4 py-2.5 bg-[#f5f7f6] border border-transparent rounded-lg text-[13px] outline-none focus:bg-white focus:border-[#0a4d3c]/30 focus:ring-4 focus:ring-[#0a4d3c]/10 transition" 
            />
          </div>

          <div className="flex items-center gap-6">
            <button className="relative text-gray-400 hover:text-gray-800 transition">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
               <span className="absolute top-0 right-0.5 w-1.5 h-1.5 bg-red-500 rounded-full border border-white"></span>
            </button>
            <button className="relative text-gray-400 hover:text-gray-800 transition">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </button>
            <div className="w-px h-8 bg-gray-200"></div>
            <div className="flex items-center gap-3 cursor-pointer">
               <div className="flex flex-col text-right">
                  <span className="text-[13px] font-bold text-gray-900 leading-tight">Dr. Elias Tadesse</span>
                  <span className="text-[11px] font-medium text-gray-500">Lead Mentor</span>
               </div>
               <img src="https://i.pravatar.cc/150?img=11" alt="Avatar" className="w-10 h-10 rounded-full object-cover border border-gray-200" />
            </div>
          </div>
        </header>

        {/* Scrollable Dashboard Content */}
        <main className="flex-grow flex flex-col overflow-y-auto">
           <div className="p-8 lg:p-10 max-w-[1200px] w-full mx-auto flex flex-col">
             
             {/* Title Section */}
             <div className="mb-8">
                <h1 className="text-[28px] font-bold text-[#0a3a2e] tracking-tight mb-2">Schedule Mentorship Session</h1>
                <p className="text-gray-500 text-[15px]">Set a date and time for an upcoming mentorship session with a startup.</p>
             </div>

             <div className="flex flex-col lg:flex-row gap-8">
                
                {/* Left Column (Forms) */}
                <div className="flex-grow flex flex-col gap-6 lg:w-2/3">
                   
                   {/* Select Startup */}
                   <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                      <h2 className="text-[16px] font-bold text-gray-900 flex items-center gap-2 mb-4">
                         <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                         Select Startup
                      </h2>
                      <div className="relative mb-5">
                         <select className="w-full appearance-none bg-white border border-gray-200 text-gray-700 py-3 pl-4 pr-10 rounded-xl outline-none focus:border-[#0a4d3c] transition text-[14px]">
                            <option>GreenAgro</option>
                            <option>BioFarm Inc.</option>
                         </select>
                         <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                         </div>
                      </div>

                      <div className="bg-[#f5f7f6] rounded-xl p-5 flex flex-wrap gap-y-4">
                         <div className="w-1/4 min-w-[120px]">
                            <span className="block text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-1">STARTUP NAME</span>
                            <span className="text-[13px] font-bold text-gray-900">GreenAgro</span>
                         </div>
                         <div className="w-1/4 min-w-[120px]">
                            <span className="block text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-1">INDUSTRY</span>
                            <span className="text-[13px] font-bold text-gray-900">AgriTech</span>
                         </div>
                         <div className="w-1/4 min-w-[120px]">
                            <span className="block text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-1">STAGE</span>
                            <span className="text-[13px] font-bold text-gray-900">Seed</span>
                         </div>
                         <div className="w-full">
                            <span className="block text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-1">PRIMARY GOAL</span>
                            <span className="text-[13px] font-bold text-gray-900">Scaling supply chain logistics for regional expansion</span>
                         </div>
                      </div>
                   </div>

                   {/* Session Details */}
                   <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                      <h2 className="text-[16px] font-bold text-gray-900 flex items-center gap-2 mb-5">
                         <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                         Session Details
                      </h2>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                         <div>
                            <label className="block text-[12px] font-medium text-gray-600 mb-2">Session Title</label>
                            <input type="text" placeholder="e.g., Supply Chain Strategy Review" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-[14px] outline-none focus:border-[#0a4d3c] transition" />
                         </div>
                         <div>
                            <label className="block text-[12px] font-medium text-gray-600 mb-2">Session Type</label>
                            <div className="relative">
                               <select className="w-full appearance-none bg-white border border-gray-200 text-gray-700 py-3 pl-4 pr-10 rounded-xl outline-none focus:border-[#0a4d3c] transition text-[14px]">
                                  <option>Video Call</option>
                                  <option>In Person</option>
                               </select>
                               <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                               </div>
                            </div>
                         </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
                         <div>
                            <label className="block text-[12px] font-medium text-gray-600 mb-2">Date</label>
                            <div className="relative">
                               <input type="text" placeholder="mm/dd/yyyy" className="w-full pl-4 pr-10 py-3 bg-white border border-gray-200 rounded-xl text-[14px] outline-none focus:border-[#0a4d3c] transition" />
                               <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                               </div>
                            </div>
                         </div>
                         <div>
                            <label className="block text-[12px] font-medium text-gray-600 mb-2">Start Time</label>
                            <div className="relative">
                               <input type="text" placeholder="--:-- --" className="w-full pl-4 pr-10 py-3 bg-white border border-gray-200 rounded-xl text-[14px] outline-none focus:border-[#0a4d3c] transition" />
                               <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                               </div>
                            </div>
                         </div>
                         <div>
                            <label className="block text-[12px] font-medium text-gray-600 mb-2">End Time</label>
                            <div className="relative">
                               <input type="text" placeholder="--:-- --" className="w-full pl-4 pr-10 py-3 bg-white border border-gray-200 rounded-xl text-[14px] outline-none focus:border-[#0a4d3c] transition" />
                               <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                               </div>
                            </div>
                         </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                         <div>
                            <label className="block text-[12px] font-medium text-gray-600 mb-2">Time Zone</label>
                            <input type="text" defaultValue="Addis Ababa (GMT+3)" className="w-full px-4 py-3 bg-[#f5f7f6] border border-transparent rounded-xl text-[14px] outline-none text-gray-700" readOnly />
                         </div>
                         <div>
                            <label className="block text-[12px] font-medium text-gray-600 mb-2">Meeting Link</label>
                            <input type="text" defaultValue="https://zoom.us/j/..." className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-[14px] outline-none focus:border-[#0a4d3c] transition" />
                         </div>
                      </div>

                      <div>
                         <label className="block text-[12px] font-medium text-gray-600 mb-2">Session Agenda</label>
                         <textarea placeholder="List the topics to be discussed..." className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-[14px] outline-none focus:border-[#0a4d3c] transition h-32 resize-none"></textarea>
                      </div>
                   </div>

                   {/* Your Weekly Availability */}
                   <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                      <div className="flex justify-between items-center mb-5">
                         <h2 className="text-[16px] font-bold text-gray-900 flex items-center gap-2">
                            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            Your Weekly Availability
                         </h2>
                         <button className="text-[13px] font-bold text-[#0a4d3c] hover:underline flex items-center gap-1.5">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                            Modify
                         </button>
                      </div>

                      <div className="flex flex-wrap gap-4">
                         <div className="flex-1 min-w-[150px] bg-[#f5f7f6] rounded-xl p-4">
                            <span className="block text-[12px] font-bold text-gray-900 mb-1">Monday</span>
                            <span className="text-[13px] text-gray-600">10:00 AM - 12:00 PM</span>
                         </div>
                         <div className="flex-1 min-w-[150px] bg-[#f5f7f6] rounded-xl p-4">
                            <span className="block text-[12px] font-bold text-gray-900 mb-1">Wednesday</span>
                            <span className="text-[13px] text-gray-600">02:00 PM - 04:00 PM</span>
                         </div>
                         <div className="flex-1 min-w-[150px] bg-[#f5f7f6] rounded-xl p-4 flex items-center justify-center">
                            <button className="w-full py-2.5 bg-[#0a4d3c] text-white text-[13px] font-bold rounded-lg hover:bg-[#07382b] transition">
                               Check Availability
                            </button>
                         </div>
                      </div>
                   </div>

                   {/* SUMMARY PREVIEW */}
                   <div className="bg-[#f0f2f5] rounded-2xl p-6 border border-gray-200">
                      <span className="block text-[11px] font-bold text-gray-900 uppercase tracking-widest mb-5">SUMMARY PREVIEW</span>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0a4d3c] shrink-0 border border-gray-200 shadow-sm">
                               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                            </div>
                            <div>
                               <span className="block text-[10px] font-bold text-gray-500 mb-0.5">Startup</span>
                               <span className="text-[14px] font-bold text-gray-900">GreenAgro</span>
                            </div>
                         </div>
                         
                         <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0a4d3c] shrink-0 border border-gray-200 shadow-sm">
                               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <div>
                               <span className="block text-[10px] font-bold text-gray-500 mb-0.5">Date & Time</span>
                               <span className="text-[14px] font-bold text-gray-900">Oct 24, 2023 | 10:30 AM (GMT+3)</span>
                            </div>
                         </div>

                         <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0a4d3c] shrink-0 border border-gray-200 shadow-sm">
                               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                            </div>
                            <div>
                               <span className="block text-[10px] font-bold text-gray-500 mb-0.5">Type</span>
                               <span className="text-[14px] font-bold text-gray-900">Video Call</span>
                            </div>
                         </div>

                         <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0a4d3c] shrink-0 border border-gray-200 shadow-sm">
                               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
                            </div>
                            <div>
                               <span className="block text-[10px] font-bold text-gray-500 mb-0.5">Agenda Preview</span>
                               <span className="text-[14px] font-bold text-gray-900 truncate max-w-[200px] block">Review logistics and ex...</span>
                            </div>
                         </div>
                      </div>
                   </div>

                   {/* Action Buttons */}
                   <div className="flex items-center gap-4 mt-2 mb-10">
                      <button className="px-6 py-3 bg-[#0a4d3c] text-white text-[14px] font-bold rounded-xl hover:bg-[#07382b] transition shadow-sm">
                         Schedule Session
                      </button>
                      <button className="px-6 py-3 bg-white text-gray-700 text-[14px] font-bold rounded-xl border border-gray-300 hover:bg-gray-50 transition">
                         Save as Draft
                      </button>
                      <button className="px-4 py-3 text-gray-500 text-[14px] font-bold hover:text-gray-800 transition">
                         Cancel
                      </button>
                   </div>

                </div>

                {/* Right Column (Sidebar Widgets) */}
                <div className="flex-col gap-6 lg:w-1/3 hidden lg:flex">
                   
                   {/* Upcoming Sessions Widget */}
                   <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                      <div className="flex justify-between items-center mb-5">
                         <h3 className="text-[13px] font-bold text-gray-900">Upcoming Sessions</h3>
                         <Link href="#" className="text-[12px] font-bold text-[#0a4d3c] hover:underline">View All</Link>
                      </div>
                      
                      <div className="flex flex-col gap-4">
                         {/* Session 1 */}
                         <div className="bg-[#f8f9fa] rounded-xl p-4 border border-gray-100">
                            <div className="flex justify-between items-start mb-2">
                               <h4 className="text-[13px] font-bold text-gray-900 leading-tight">EduTech Addis</h4>
                               <span className="px-2 py-0.5 bg-[#4ade80] text-gray-900 text-[9px] font-bold rounded-full uppercase tracking-wide">CONFIRMED</span>
                            </div>
                            <div className="flex flex-col gap-1.5 mt-3">
                               <div className="flex items-center gap-2 text-gray-500">
                                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                  <span className="text-[11px] font-medium">Oct 20, 2023</span>
                               </div>
                               <div className="flex items-center gap-2 text-gray-500">
                                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                  <span className="text-[11px] font-medium">02:00 PM - 03:00 PM</span>
                               </div>
                            </div>
                         </div>

                         {/* Session 2 */}
                         <div className="bg-[#f8f9fa] rounded-xl p-4 border border-gray-100">
                            <div className="flex justify-between items-start mb-2">
                               <h4 className="text-[13px] font-bold text-gray-900 leading-tight">HealthLine ET</h4>
                               <span className="px-2 py-0.5 bg-[#4ade80] text-gray-900 text-[9px] font-bold rounded-full uppercase tracking-wide">CONFIRMED</span>
                            </div>
                            <div className="flex flex-col gap-1.5 mt-3">
                               <div className="flex items-center gap-2 text-gray-500">
                                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                  <span className="text-[11px] font-medium">Oct 22, 2023</span>
                               </div>
                               <div className="flex items-center gap-2 text-gray-500">
                                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                  <span className="text-[11px] font-medium">11:00 AM - 12:30 PM</span>
                               </div>
                            </div>
                         </div>

                         {/* Session 3 */}
                         <div className="bg-[#f8f9fa] rounded-xl p-4 border border-gray-100">
                            <div className="flex justify-between items-start mb-2">
                               <h4 className="text-[13px] font-bold text-gray-900 leading-tight">SwiftPay Solutions</h4>
                               <span className="px-2 py-0.5 bg-[#b45309] text-white text-[9px] font-bold rounded-full uppercase tracking-wide">PENDING</span>
                            </div>
                            <div className="flex flex-col gap-1.5 mt-3">
                               <div className="flex items-center gap-2 text-gray-500">
                                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                  <span className="text-[11px] font-medium">Oct 25, 2023</span>
                               </div>
                               <div className="flex items-center gap-2 text-gray-500">
                                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                  <span className="text-[11px] font-medium">04:00 PM - 05:00 PM</span>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>

                   {/* Mentor Toolkit Banner */}
                   <div className="relative rounded-2xl overflow-hidden shadow-sm h-[140px] bg-[#0a3a2e] flex flex-col justify-end p-5 mt-2">
                      <div className="absolute inset-0 bg-black/30 z-0"></div>
                      <div className="relative z-10">
                         <h4 className="text-[13px] font-bold text-white mb-1">Mentor Toolkit</h4>
                         <p className="text-[11px] text-gray-200 leading-relaxed max-w-[180px]">Download new resources for startup scaling.</p>
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
