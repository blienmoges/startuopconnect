"use client";
import Link from "next/link";
import Sidebar from "@/components/startup/Sidebar";

export default function MentorshipPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-gray-900 flex h-screen overflow-hidden">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col h-full bg-white overflow-hidden">
        
        {/* Top Navbar */}
        <header className="flex justify-between items-center px-8 py-5 bg-white border-b border-gray-100 w-full z-10 sticky top-0 shrink-0">
          <div className="flex items-center gap-12">
            <h1 className="text-xl font-bold text-gray-900 tracking-tight">Mentor Chat</h1>
            
            <div className="relative w-[400px] hidden lg:block">
               <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
               </div>
               <input type="text" placeholder="Search conversations..." className="w-full pl-11 pr-4 py-2 bg-[#f8fafc] border border-gray-100 rounded-xl text-xs outline-none focus:ring-2 focus:ring-[#0f3d32]/10 transition" />
            </div>
          </div>

          <div className="flex items-center gap-6 ml-auto">
             <button className="text-gray-400 hover:text-gray-600 transition relative">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
               <div className="absolute top-0 right-0.5 w-1.5 h-1.5 bg-red-500 rounded-full border-2 border-white"></div>
             </button>
             <button className="text-gray-400 hover:text-gray-600 transition">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
             </button>
             
             <div className="flex items-center gap-3 border-l border-gray-200 pl-6 cursor-pointer hover:bg-gray-50 transition rounded-lg">
                <div className="hidden sm:flex flex-col items-end">
                  <span className="text-xs font-bold text-gray-900">Abel Tesfaye</span>
                  <span className="text-[10px] text-gray-400 font-medium">Startup Founder</span>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#3b2a24] text-white flex items-center justify-center font-bold text-xs shadow-sm overflow-hidden shrink-0">
                  <div className="w-full h-full bg-gradient-to-br from-[#4c3b35] to-[#2c1b15] flex items-center justify-center">AT</div>
                </div>
             </div>
          </div>
        </header>

        {/* Page Content Layout */}
        <div className="flex flex-grow overflow-hidden">
          
          {/* Mentor Profile Column */}
          <div className="w-[320px] shrink-0 border-r border-gray-100 bg-[#fcfcfd]/50 p-6 flex flex-col gap-6 overflow-y-auto">
            
            {/* Profile Card */}
            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm text-center">
              <div className="relative w-20 h-20 mx-auto mb-4">
                <div className="w-full h-full rounded-2xl bg-orange-100 flex items-center justify-center text-[#0f3d32] font-black text-2xl overflow-hidden shadow-md">
                   {/* Placeholder for Dr. Sara */}
                   <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-4 border-white rounded-full"></div>
              </div>
              <h2 className="text-lg font-bold text-gray-900 leading-tight mb-1">Dr. Sara Melaku</h2>
              <p className="text-[11px] text-[#0f3d32] font-bold uppercase tracking-widest mb-6">Senior Advisor, Global VC</p>
              
              <div className="flex flex-col gap-4 text-left border-t border-gray-50 pt-6">
                <div className="flex items-start gap-3">
                   <svg className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.952 11.952 0 01-9.618 3.07L3 7c0 5.148 2.214 9.774 5.765 13.041a1.996 1.996 0 002.47 0C14.786 16.774 17 12.148 17 7l-.382-.986z"></path></svg>
                   <div>
                     <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Expertise</p>
                     <p className="text-[11px] font-bold text-gray-700">Strategy & Venture Capital</p>
                   </div>
                </div>
                <div className="flex items-start gap-3">
                   <svg className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                   <div>
                     <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Availability</p>
                     <p className="text-[11px] font-bold text-gray-700">Mon-Fri, 9AM-5PM</p>
                   </div>
                </div>
                <div className="flex items-start gap-3">
                   <svg className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                   <div>
                     <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Next Session</p>
                     <p className="text-[11px] font-bold text-gray-700">Oct 28, 2024 • 2:30 PM</p>
                   </div>
                </div>
              </div>

              <button className="w-full mt-8 bg-[#0f3d32] text-white py-3 rounded-xl text-xs font-bold hover:bg-[#0a2921] transition shadow-md flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                Schedule Session
              </button>
            </div>

            {/* Pinned Resources */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <svg className="w-3.5 h-3.5 text-[#0f3d32]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
                <h3 className="text-xs font-bold text-gray-900 tracking-tight">Pinned Resources</h3>
              </div>
              
              <div className="flex flex-col gap-3">
                {[
                  { name: "Pitch_Deck_v2.pdf", meta: "Shared 2 days ago", type: "file" },
                  { name: "Market Analysis Data", meta: "docs.google.com/spread...", type: "link" }
                ].map((res, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-[#f8fafc] rounded-xl border border-gray-50 hover:border-[#0f3d32]/20 transition cursor-pointer group">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-gray-400 group-hover:text-[#0f3d32] transition shadow-sm border border-gray-50">
                      {res.type === 'file' ? (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                      ) : (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.826a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                      )}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-bold text-gray-800 truncate leading-tight">{res.name}</p>
                      <p className="text-[9px] text-gray-400 font-medium truncate">{res.meta}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Chat Window Column */}
          <div className="flex-grow flex flex-col h-full bg-[#fcfcfd]/30">
            
            {/* Chat Header */}
            <div className="px-8 py-5 border-b border-gray-100 flex items-center justify-between bg-white/80 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <h3 className="text-sm font-bold text-gray-900 tracking-tight">Live Chat with Dr. Sara</h3>
              </div>
              <div className="flex items-center gap-4 text-gray-400">
                <button className="hover:text-[#0f3d32] transition"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg></button>
                <button className="hover:text-[#0f3d32] transition"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg></button>
              </div>
            </div>

            {/* Chat History */}
            <div className="flex-grow overflow-y-auto p-8 flex flex-col gap-8">
              
              <div className="flex justify-center">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] bg-white px-4 py-1 rounded-full border border-gray-50 shadow-sm">October 24, 2024</span>
              </div>

              {/* Left Bubble */}
              <div className="flex items-start gap-4 max-w-[80%] group">
                <div className="w-8 h-8 rounded-xl bg-orange-100 flex items-center justify-center shrink-0 border border-orange-200">
                   <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-none p-5 shadow-sm">
                    <p className="text-xs text-gray-700 leading-relaxed font-medium">
                      Hello Abel! I've just finished reviewing your latest financial projections. Your revenue model for the Q3 looks much more realistic now. Have you considered the new tax regulations for tech exports?
                    </p>
                  </div>
                  <span className="text-[9px] text-gray-400 font-bold ml-1">10:45 AM</span>
                </div>
              </div>

              {/* Right Bubble */}
              <div className="flex items-start gap-4 max-w-[80%] ml-auto flex-row-reverse">
                <div className="w-8 h-8 rounded-xl bg-[#2c1b15] text-white flex items-center justify-center font-bold text-[10px] shrink-0 border border-gray-800">AT</div>
                <div className="flex flex-col gap-1.5 items-end">
                  <div className="bg-[#0f3d32] rounded-2xl rounded-tr-none p-5 shadow-md">
                    <p className="text-xs text-white leading-relaxed font-medium">
                      Thank you, Dr. Sara! I was actually looking into those yesterday. I've updated the cash flow statement to reflect the potential impact. I'll share the new file here.
                    </p>
                  </div>
                  <div className="flex items-center gap-1 mr-1">
                    <span className="text-[9px] text-gray-400 font-bold tracking-tight">10:48 AM</span>
                    <svg className="w-3.5 h-3.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7m-10 6l4 4L19 7"></path></svg>
                  </div>
                </div>
              </div>

              {/* Left Bubble 2 */}
              <div className="flex items-start gap-4 max-w-[80%]">
                <div className="w-8 h-8 rounded-xl bg-orange-100 flex items-center justify-center shrink-0 border border-orange-200">
                   <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-none p-5 shadow-sm">
                    <p className="text-xs text-gray-700 leading-relaxed font-medium">
                      Great. Send it over. Also, our session on Monday will focus heavily on your investor pitch. We need to sharpen the "Why Ethiopia, Why Now?" section of your presentation.
                    </p>
                  </div>
                  <span className="text-[9px] text-gray-400 font-bold ml-1">10:52 AM</span>
                </div>
              </div>

            </div>

            {/* Input & Suggestions Area */}
            <div className="p-8 border-t border-gray-100 bg-white shadow-[0_-4px_12px_rgba(0,0,0,0.02)]">
              
              {/* Quick Actions / Suggestions */}
              <div className="flex flex-wrap gap-2 mb-6">
                {["Review my pitch", "Help with business model", "Improve financial plan", "Prepare for investor meeting"].map((text, i) => (
                  <button key={i} className="px-4 py-2 bg-white border border-gray-100 rounded-full text-[10px] font-bold text-gray-500 hover:text-[#0f3d32] hover:border-[#0f3d32]/30 hover:bg-[#eaf4f1]/30 transition shadow-sm">
                    {text}
                  </button>
                ))}
              </div>

              {/* Input Bar */}
              <div className="flex items-center gap-4 bg-[#f8fafc] border border-gray-100 rounded-2xl p-4 group focus-within:border-[#0f3d32]/20 focus-within:ring-2 focus-within:ring-[#0f3d32]/5 transition shadow-sm">
                <div className="flex items-center gap-3 pr-4 border-r border-gray-200">
                   <button className="text-gray-400 hover:text-[#0f3d32] transition"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg></button>
                   <button className="text-gray-400 hover:text-[#0f3d32] transition"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4"></path></svg></button>
                </div>
                <input type="text" placeholder="Type your message here..." className="flex-grow bg-transparent border-none text-xs font-medium outline-none focus:ring-0 placeholder-gray-400" />
                <button className="bg-[#0f3d32] text-white p-2.5 rounded-xl hover:bg-[#0a2921] transition shadow-md flex items-center justify-center">
                  <svg className="w-5 h-5 rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                </button>
              </div>
            </div>

          </div>

        </div>

      </main>

    </div>
  );
}
