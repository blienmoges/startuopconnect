"use client";
import Link from "next/link";
import { useState } from "react";
import Sidebar from "@/components/mentor/Sidebar";

export default function Messages() {
  const [activeTab, setActiveTab] = useState('all');
  const [activeChat, setActiveChat] = useState(1);

  const chats = [
    {
      id: 1,
      startup: "BioFarm Inc.",
      founder: "Abebe Kebede",
      time: "10:24 AM",
      preview: "The revised Q3 projections look ready f...",
      unread: 0,
      active: true,
      logo: "B"
    },
    {
      id: 2,
      startup: "EthioStream",
      founder: "Selamawit Yared",
      time: "Yesterday",
      preview: "Could we reschedule Friday's...",
      unread: 2,
      active: false,
      logo: "E"
    },
    {
      id: 3,
      startup: "MedLink Health",
      founder: "Dawit Getaneh",
      time: "Oct 12",
      preview: "I've uploaded the user testing results...",
      unread: 0,
      active: false,
      logo: "M"
    }
  ];

  return (
    <div className="flex h-screen bg-[#f8f9fa] font-sans text-gray-900 overflow-hidden">
      
      {/* Sidebar - Mentor Portal Theme (Dark Green) */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col overflow-hidden bg-[#fafbfc]">
        
        {/* Global Header */}
        <header className="flex justify-between items-center px-6 lg:px-10 py-4 bg-white border-b border-gray-100 z-10 shrink-0 h-[72px]">
          <div className="flex items-center gap-6">
             <span className="text-[18px] font-bold text-[#0a3a2e] hidden md:block tracking-tight">Messages</span>
             <div className="relative w-[280px] lg:w-[360px]">
               <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
               </div>
               <input 
                 type="text" 
                 placeholder="Search conversations..." 
                 className="w-full pl-11 pr-4 py-2 bg-[#f0f2f5] border border-transparent rounded-full text-[13px] outline-none focus:bg-white focus:border-[#0a4d3c]/30 focus:ring-4 focus:ring-[#0a4d3c]/10 transition" 
               />
             </div>
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
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">LEAD MENTOR</span>
               </div>
               <img src="https://i.pravatar.cc/150?img=11" alt="Avatar" className="w-8 h-8 rounded-full object-cover border border-gray-200" />
            </div>
          </div>
        </header>

        {/* Messaging Layout */}
        <main className="flex-grow flex overflow-hidden">
           
           {/* Inbox Sidebar */}
           <div className="w-full md:w-[320px] lg:w-[380px] bg-white border-r border-gray-100 flex flex-col shrink-0">
              
              <div className="p-5 border-b border-gray-100">
                 <div className="flex justify-between items-center mb-4">
                    <h2 className="text-[16px] font-bold text-gray-900 tracking-tight">Inbox</h2>
                    <button className="text-gray-400 hover:text-[#0a3a2e] transition">
                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
                    </button>
                 </div>
                 
                 <div className="flex gap-2">
                    <button 
                       onClick={() => setActiveTab('all')}
                       className={`flex-1 py-1.5 text-[12px] font-bold rounded-full transition ${activeTab === 'all' ? 'bg-[#0a3a2e] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                    >
                       All
                    </button>
                    <button 
                       onClick={() => setActiveTab('unread')}
                       className={`flex-1 py-1.5 text-[12px] font-bold rounded-full transition ${activeTab === 'unread' ? 'bg-[#0a3a2e] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                    >
                       Unread
                    </button>
                    <button 
                       onClick={() => setActiveTab('priority')}
                       className={`flex-1 py-1.5 text-[12px] font-bold rounded-full transition ${activeTab === 'priority' ? 'bg-[#0a3a2e] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                    >
                       Priority
                    </button>
                 </div>
              </div>

              <div className="flex-grow overflow-y-auto">
                 {chats.map((chat) => (
                    <div 
                       key={chat.id}
                       onClick={() => setActiveChat(chat.id)}
                       className={`p-5 border-b border-gray-50 cursor-pointer transition flex items-start gap-4 ${activeChat === chat.id ? 'bg-[#f0f9f4] border-l-4 border-l-[#0a4d3c]' : 'hover:bg-gray-50 border-l-4 border-l-transparent'}`}
                    >
                       <div className="w-10 h-10 rounded-full bg-[#0a3a2e] text-white flex items-center justify-center font-bold text-[14px] shrink-0">
                          {chat.logo}
                       </div>
                       <div className="flex-grow min-w-0">
                          <div className="flex justify-between items-baseline mb-0.5">
                             <h3 className="text-[13px] font-bold text-gray-900 truncate pr-2">{chat.startup}</h3>
                             <span className={`text-[11px] shrink-0 ${chat.unread > 0 ? 'text-[#0a4d3c] font-bold' : 'text-gray-400 font-medium'}`}>{chat.time}</span>
                          </div>
                          <p className="text-[12px] font-bold text-gray-500 mb-1 truncate">{chat.founder}</p>
                          <div className="flex justify-between items-center gap-2">
                             <p className={`text-[13px] truncate ${chat.unread > 0 ? 'text-gray-900 font-bold' : 'text-gray-500'}`}>
                                {chat.preview}
                             </p>
                             {chat.unread > 0 && (
                                <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                                   {chat.unread}
                                </div>
                             )}
                          </div>
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           {/* Active Chat View */}
           <div className="flex-grow flex flex-col bg-white">
              
              {/* Chat Header */}
              <div className="p-5 border-b border-gray-100 flex justify-between items-center shrink-0">
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0a3a2e] text-white flex items-center justify-center font-bold text-[14px] shrink-0">
                       B
                    </div>
                    <div>
                       <div className="flex items-center gap-2 mb-0.5">
                          <h2 className="text-[16px] font-bold text-gray-900">BioFarm Inc. • Abebe Kebede</h2>
                          <div className="w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center">
                             <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                          </div>
                       </div>
                       <div className="flex items-center gap-2 text-[12px] text-gray-500">
                          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                          <span>Active now • Agri-Tech Sector</span>
                       </div>
                    </div>
                 </div>
                 <div className="flex gap-3">
                    <button className="px-4 py-2 bg-[#e8fbf0] text-[#0a4d3c] text-[12px] font-bold rounded-lg hover:bg-[#d1f4e0] transition">
                       View Startup
                    </button>
                    <button className="px-4 py-2 bg-[#0a3a2e] text-white text-[12px] font-bold rounded-lg hover:bg-[#072a21] transition shadow-sm">
                       Schedule Session
                    </button>
                 </div>
              </div>

              {/* Chat History */}
              <div className="flex-grow overflow-y-auto p-6 md:p-10 flex flex-col gap-6 bg-[#fafbfc]">
                 
                 <div className="flex justify-center mb-4">
                    <span className="px-4 py-1 bg-white border border-gray-200 text-[10px] font-bold text-gray-400 uppercase tracking-widest rounded-full">
                       Today, October 14
                    </span>
                 </div>

                 {/* Mentor Message (Right) */}
                 <div className="flex justify-end">
                    <div className="max-w-[75%] md:max-w-[60%] flex flex-col items-end">
                       <div className="bg-[#0a3a2e] text-white p-4 rounded-2xl rounded-tr-sm shadow-sm mb-1.5">
                          <p className="text-[13px] leading-relaxed">
                             Hello Abebe, I reviewed the financial model you sent yesterday. The burn rate looks manageable, but we should discuss the acquisition cost assumptions.
                          </p>
                       </div>
                       <span className="text-[10px] font-medium text-gray-400 pr-1">10:24 AM • Read</span>
                    </div>
                 </div>

                 {/* Founder Message (Left) */}
                 <div className="flex justify-start">
                    <div className="max-w-[75%] md:max-w-[60%] flex flex-col items-start">
                       <div className="bg-white border border-gray-100 text-gray-800 p-4 rounded-2xl rounded-tl-sm shadow-sm mb-1.5">
                          <p className="text-[13px] leading-relaxed">
                             Thanks, Dr. Elias! We realized the marketing spend was slightly under-budgeted for the first phase. I've updated the spreadsheet with the new projections.
                          </p>
                       </div>
                       <span className="text-[10px] font-medium text-gray-400 pl-1">10:32 AM</span>
                    </div>
                 </div>

                 {/* Founder Attachment (Left) */}
                 <div className="flex justify-start">
                    <div className="max-w-[75%] md:max-w-[60%] flex flex-col items-start">
                       <div className="bg-white border border-gray-100 p-4 rounded-2xl rounded-tl-sm shadow-sm mb-1.5 flex items-center gap-4 cursor-pointer hover:bg-gray-50 transition w-full md:w-[320px]">
                          <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                          </div>
                          <div className="flex-grow min-w-0">
                             <h4 className="text-[13px] font-bold text-gray-900 truncate">Q3 Projections v2.xlsx</h4>
                             <p className="text-[11px] text-gray-400">1.1 MB • Excel Sheet</p>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 shrink-0 hover:bg-gray-200 transition">
                             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                          </div>
                       </div>
                       <span className="text-[10px] font-medium text-gray-400 pl-1">10:34 AM</span>
                    </div>
                 </div>

                 {/* System/Mentor Note */}
                 <div className="flex justify-start">
                    <div className="w-full md:w-[80%] bg-[#f5f7f6] border-l-4 border-l-[#0a4d3c] rounded-r-2xl p-5 shadow-sm mt-2">
                       <div className="flex items-center gap-2 mb-2">
                          <svg className="w-4 h-4 text-[#0a4d3c]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
                          <span className="text-[10px] font-bold text-[#0a4d3c] uppercase tracking-widest">MENTOR NOTE</span>
                       </div>
                       <p className="text-[13px] text-gray-700 leading-relaxed">
                          Focus for our next call: Validating the customer churn rate from the last cohort. This will be critical for the Series A deck.
                       </p>
                    </div>
                 </div>

              </div>

              {/* Chat Input */}
              <div className="p-5 md:p-6 bg-white border-t border-gray-100 shrink-0">
                 <div className="bg-[#f0f2f5] rounded-full flex items-center px-2 py-2">
                    <button className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-700 transition shrink-0">
                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
                    </button>
                    <input 
                       type="text" 
                       placeholder="Type your message here..." 
                       className="flex-grow bg-transparent border-none outline-none text-[14px] text-gray-700 px-2 placeholder-gray-400"
                    />
                    <button className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-700 transition shrink-0">
                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </button>
                    <button className="w-10 h-10 rounded-full bg-[#0a3a2e] text-white flex items-center justify-center hover:bg-[#072a21] transition shadow-md shrink-0 ml-1">
                       <svg className="w-4 h-4 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                    </button>
                 </div>
              </div>

           </div>

        </main>
      </div>
    </div>
  );
}
