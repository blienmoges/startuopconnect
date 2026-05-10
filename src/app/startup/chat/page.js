"use client";
import Link from "next/link";
import { useState } from "react";
import Sidebar from "@/components/startup/Sidebar";

export default function InvestorChat() {
  const [activeChat, setActiveChat] = useState("EthioVenture");

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 flex h-screen overflow-hidden">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Messages List Column */}
      <div className="w-[320px] bg-[#fcfcfd] border-r border-gray-100 flex flex-col shrink-0 h-full">
        <div className="p-6 pb-2">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-xl font-bold text-gray-900 tracking-tight">Messages</h1>
            <span className="bg-[#eaf4f1] text-[#0f3d32] text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-lg">12 UNREAD</span>
          </div>
          
          <div className="flex gap-2 mb-6">
            {["All Chats", "Investors", "Unread"].map((filter, i) => (
              <button key={i} className={`px-3 py-1.5 rounded-full text-[10px] font-bold transition ${i === 0 ? 'bg-[#0f3d32] text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}>
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-grow overflow-y-auto">
          {[
            { id: "EthioVenture", name: "EthioVenture Capital", person: "Dawit Yemane", time: "10:24 AM", text: "We've reviewed your latest pitch deck. Can we discu...", online: true, active: activeChat === "EthioVenture" },
            { id: "Sheba", name: "Sheba Angels", person: "Sara Tesfaye", time: "Yesterday", text: "The meeting invitation has been sent for Thursday.", online: true, status: "ONLINE", active: activeChat === "Sheba" },
            { id: "Zemen", name: "Zemen Fund", person: "Yared Alemu", time: "Tue", text: "Waiting for your response regarding the cap table...", offline: true, status: "OFFLINE", active: activeChat === "Zemen" },
            { id: "Addis", name: "Addis Partners", time: "Archived", text: "Archived conversation", status: "WAITING REPLY", active: activeChat === "Addis" }
          ].map((chat, idx) => (
            <div 
              key={idx} 
              onClick={() => setActiveChat(chat.id)}
              className={`p-5 flex gap-4 cursor-pointer hover:bg-gray-50 transition border-l-4 ${chat.active ? 'bg-white border-[#0f3d32]' : 'border-transparent'}`}
            >
              <div className="relative shrink-0">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white text-xs font-bold ${idx === 2 ? 'bg-[#7c2d12]' : idx === 3 ? 'bg-[#1e293b]' : 'bg-[#0f3d32]'}`}>
                  {chat.name[0]}
                </div>
                {chat.online && <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>}
                {chat.offline && <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-orange-500 border-2 border-white rounded-full"></div>}
              </div>
              <div className="flex-grow min-w-0">
                <div className="flex justify-between items-start mb-0.5">
                  <h3 className="text-sm font-bold text-gray-900 truncate">{chat.name}</h3>
                  <span className="text-[10px] text-gray-400 font-medium whitespace-nowrap">{chat.time}</span>
                </div>
                <div className="flex items-center gap-1.5 mb-1">
                   {chat.status && <span className={`text-[8px] font-black tracking-widest px-1.5 py-0.5 rounded ${chat.status === 'ONLINE' ? 'bg-[#f0fdf4] text-[#16a34a]' : chat.status === 'OFFLINE' ? 'bg-gray-100 text-gray-400' : 'bg-orange-50 text-orange-600'}`}>{chat.status}</span>}
                   {chat.person && <span className="text-[11px] font-bold text-gray-700">{chat.person}</span>}
                </div>
                <p className="text-[11px] text-gray-500 truncate leading-relaxed">{chat.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Active Chat Column */}
      <div className="flex-grow bg-white flex flex-col h-full">
        
        {/* Chat Header */}
        <header className="px-8 py-5 border-b border-gray-100 flex items-center justify-between bg-white z-10">
          <div className="flex items-center gap-8 flex-grow">
             <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0f3d32] text-white flex items-center justify-center font-bold text-sm shrink-0 relative">
                  D
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                </div>
                <div>
                  <h2 className="text-sm font-bold text-gray-900">Dawit Yemane</h2>
                  <p className="text-[10px] text-gray-400 font-medium">EthioVenture Capital</p>
                </div>
             </div>
             
             {/* Middle Search Bar */}
             <div className="relative w-full max-w-[400px] hidden lg:block">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="text" placeholder="Search conversations or messages..." className="w-full pl-11 pr-4 py-2 bg-[#f8fafc] border border-gray-100 rounded-xl text-xs outline-none focus:ring-2 focus:ring-[#0f3d32]/10 transition" />
             </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-gray-400 hover:text-gray-600 p-2 rounded-lg hover:bg-gray-50 transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
            </button>
            <button className="text-gray-400 hover:text-gray-600 p-2 rounded-lg hover:bg-gray-50 transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
            </button>
            <button className="text-gray-400 hover:text-gray-600 p-2 rounded-lg hover:bg-gray-50 transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg>
            </button>
            <div className="w-9 h-9 rounded-full bg-[#1e293b] text-white flex items-center justify-center font-bold text-xs shrink-0 border border-gray-100 ml-4">AK</div>
          </div>
        </header>

        {/* Chat History */}
        <div className="flex-grow overflow-y-auto p-8 flex flex-col gap-8 bg-[#fcfcfd]/30">
          
          <div className="flex justify-center">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] bg-white px-4 py-1 rounded-full border border-gray-50 shadow-sm">Today</span>
          </div>

          {/* Left Bubble */}
          <div className="flex items-start gap-4 max-w-[80%]">
            <div className="w-8 h-8 rounded-lg bg-[#0f3d32] text-white flex items-center justify-center font-bold text-[10px] shrink-0">D</div>
            <div className="flex flex-col gap-1.5">
              <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-none p-4 shadow-sm">
                <p className="text-xs text-gray-700 leading-relaxed font-medium">
                  Greetings Abebe. We've gone through the operational plan for the Q3 expansion in the Bahir Dar region. The logistics part looks solid, but we have some concerns regarding the local vendor partnerships.
                </p>
              </div>
              <span className="text-[10px] text-gray-400 font-medium ml-1">09:15 AM</span>
            </div>
          </div>

          {/* Right Bubble */}
          <div className="flex items-start gap-4 max-w-[80%] ml-auto flex-row-reverse">
            <div className="w-8 h-8 rounded-lg bg-[#1e293b] text-white flex items-center justify-center font-bold text-[10px] shrink-0">AK</div>
            <div className="flex flex-col gap-1.5 items-end">
              <div className="bg-[#0f3d32] rounded-2xl rounded-tr-none p-4 shadow-md">
                <p className="text-xs text-white leading-relaxed font-medium">
                  Thank you for the quick feedback, Dawit. We are aware of the vendor fragmentation there. We are currently finalizing a MOU with two major logistics hubs to centralize our sourcing. Would you like to see the preliminary MOU drafts?
                </p>
              </div>
              <div className="flex items-center gap-1.5 mr-1">
                <span className="text-[10px] text-gray-400 font-medium">09:42 AM</span>
                <svg className="w-3.5 h-3.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7m-10 6l4 4L19 7"></path></svg>
              </div>
            </div>
          </div>

          {/* Left Bubble 2 */}
          <div className="flex items-start gap-4 max-w-[80%]">
            <div className="w-8 h-8 rounded-lg bg-[#0f3d32] text-white flex items-center justify-center font-bold text-[10px] shrink-0">D</div>
            <div className="flex flex-col gap-1.5">
              <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-none p-4 shadow-sm">
                <p className="text-xs text-gray-700 leading-relaxed font-medium">
                  Yes, that would be very helpful. Also, please attach the latest user growth chart for the mobile app version. We noticed a spike last week.
                </p>
              </div>
              <span className="text-[10px] text-gray-400 font-medium ml-1">10:24 AM</span>
            </div>
          </div>

          {/* Right Bubble 2 (Text + File) */}
          <div className="flex items-start gap-4 max-w-[80%] ml-auto flex-row-reverse">
            <div className="w-8 h-8 rounded-lg bg-[#1e293b] text-white flex items-center justify-center font-bold text-[10px] shrink-0">AK</div>
            <div className="flex flex-col gap-3 items-end">
              <div className="bg-[#0f3d32] rounded-2xl rounded-tr-none p-4 shadow-md">
                <p className="text-xs text-white leading-relaxed font-medium">
                  Absolutely. Here is the growth analytics report from last week. The spike was due to our integrated marketing campaign with EthioTelecom.
                </p>
              </div>
              
              {/* File Attachment Card */}
              <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm flex items-center justify-between gap-8 min-w-[280px]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-red-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-gray-900 leading-tight">Q2_Growth_Report_v2.pdf</h4>
                    <p className="text-[10px] text-gray-400 font-medium">2.4 MB • PDF Document</p>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-[#0f3d32] transition">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0-4l-4 4m4-4V4"></path></svg>
                </button>
              </div>

              <div className="flex items-center gap-1.5 mr-1">
                <span className="text-[10px] text-gray-400 font-medium">10:30 AM</span>
                <svg className="w-3.5 h-3.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7m-10 6l4 4L19 7"></path></svg>
              </div>
            </div>
          </div>

        </div>

        {/* Message Input Area */}
        <div className="p-8 border-t border-gray-100 bg-white">
          <div className="flex items-center gap-4 bg-[#f8fafc] border border-gray-100 rounded-2xl p-4 shadow-sm">
            <div className="flex items-center gap-2 pr-4 border-r border-gray-200">
              <button className="text-gray-400 hover:text-gray-600 transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4"></path></svg>
              </button>
              <button className="text-gray-400 hover:text-gray-600 transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
              </button>
            </div>
            <textarea 
              rows="1" 
              placeholder="Write your message to Dawit..." 
              className="flex-grow bg-transparent border-none text-xs font-medium focus:ring-0 outline-none resize-none py-1"
            ></textarea>
            <div className="flex items-center gap-3 pl-4">
              <button className="text-gray-400 hover:text-gray-600 transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </button>
              <button className="bg-[#0f3d32] text-white p-2.5 rounded-xl hover:bg-[#0a2921] transition shadow-md">
                <svg className="w-5 h-5 rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center mt-3 px-1">
             <div className="flex items-center gap-1.5">
               <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
               <span className="text-[10px] text-gray-400 font-medium">End-to-end encrypted for your security</span>
             </div>
             <span className="text-[10px] text-gray-400 font-medium tracking-tight">Press Enter to send</span>
          </div>
        </div>

      </div>

    </div>
  );
}
