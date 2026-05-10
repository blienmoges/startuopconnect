import Link from "next/link";
import Sidebar from "@/components/startup/Sidebar";

export default function StartupProjectDocuments() {
  return (
    <div className="min-h-screen bg-[#f6f8f9] font-sans text-gray-900 flex">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-grow flex flex-col overflow-y-auto">
        
        {/* Top Navbar */}
        <header className="flex justify-between items-center px-8 py-5 bg-white border-b border-gray-100 w-full z-10 sticky top-0">
          {/* Search */}
          <div className="relative w-full max-w-[400px] hidden sm:block">
             <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
             </div>
             <input type="text" placeholder="Search resources..." className="w-full pl-11 pr-4 py-2.5 bg-[#f3f4f6] border-none rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#0f3d32]/20 transition" />
          </div>

          <div className="flex items-center gap-6 ml-auto">
             <button className="text-gray-400 hover:text-gray-600 transition">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
             </button>
             <button className="text-gray-400 hover:text-gray-600 transition">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
             </button>
             
             <div className="flex items-center gap-3 border-l border-gray-200 pl-6">
               <div className="hidden sm:flex flex-col items-end">
                 <span className="text-xs font-bold text-gray-900">Abebe Bikila</span>
                 <span className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">Founder</span>
               </div>
               <div className="w-9 h-9 rounded-full bg-[#1e293b] text-white overflow-hidden shrink-0 flex items-center justify-center font-bold text-xs shadow-sm border border-gray-200">
                 AB
               </div>
             </div>
          </div>
        </header>

        {/* Page Content Container */}
        <div className="px-4 sm:px-10 py-10 w-full max-w-[1000px] mx-auto">
          
          {/* Centered Stepper Header */}
          <div className="flex justify-center mb-10">
            <div className="flex items-center gap-4">
              
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full border-2 border-[#0f3d32] text-[#0f3d32] flex items-center justify-center font-bold shadow-sm">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span className="text-sm font-bold text-[#0f3d32]">Project<br/>Info</span>
              </div>
              
              <div className="w-16 h-[2px] bg-[#0f3d32] mx-2"></div>
              
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#0f3d32] text-white flex items-center justify-center font-bold text-[10px] shadow-sm">
                  2
                </div>
                <span className="text-sm font-bold text-[#0f3d32]">Documents</span>
              </div>

            </div>
          </div>

          {/* Error Banner */}
          <div className="bg-[#fff1f1] rounded-xl p-5 mb-8 flex items-start gap-4 border border-[#ffd1d1]">
            <div className="text-red-600 mt-0.5 shrink-0">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div>
              <h4 className="text-sm font-bold text-red-600 mb-0.5">Invalid Format Detected</h4>
              <p className="text-xs text-red-500 font-medium">Please ensure all files are in PDF or MP4 format as specified in the document requirements.</p>
            </div>
          </div>

          {/* Upload Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            
            {/* Pitch Deck (Uploaded) */}
            <div className="bg-white rounded-xl border-2 border-[#0f3d32] p-6 flex flex-col items-center justify-center text-center shadow-sm">
              <div className="w-12 h-12 bg-[#dcfce7] rounded-xl flex items-center justify-center text-[#136150] mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
              </div>
              <h4 className="text-sm font-bold text-[#0f3d32] mb-1">Pitch Deck</h4>
              <p className="text-[10px] text-gray-500 font-medium mb-4">PDF only, max 10MB</p>
              
              <div className="bg-[#dcfce7] text-[#136150] px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1 mb-5">
                 <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                 Uploaded
              </div>

              <button className="w-full py-2.5 bg-white border border-[#0f3d32] text-[#0f3d32] text-xs font-bold rounded-lg hover:bg-gray-50 transition mt-auto">
                Replace
              </button>
            </div>

            {/* Business Plan (Missing) */}
            <div className="bg-[#f8fafc] rounded-xl border border-gray-200 p-6 flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 bg-[#f1f5f9] rounded-xl flex items-center justify-center text-gray-400 mb-4 border border-gray-100">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              </div>
              <h4 className="text-sm font-bold text-[#0f3d32] mb-1">Business Plan</h4>
              <p className="text-[10px] text-gray-500 font-medium mb-4">PDF only, max 20MB</p>
              
              <span className="text-[11px] font-bold text-gray-400 mb-6">Missing</span>

              <button className="w-full py-2.5 bg-[#0f3d32] text-white text-xs font-bold rounded-lg hover:bg-[#0a2921] transition shadow-sm mt-auto">
                Upload
              </button>
            </div>

            {/* Financial Doc (Missing) */}
            <div className="bg-[#f8fafc] rounded-xl border border-gray-200 p-6 flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 bg-[#f1f5f9] rounded-xl flex items-center justify-center text-gray-400 mb-4 border border-gray-100">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
              </div>
              <h4 className="text-sm font-bold text-[#0f3d32] mb-1">Financial Doc</h4>
              <p className="text-[10px] text-gray-500 font-medium mb-4">Excel/PDF, max 15MB</p>
              
              <span className="text-[11px] font-bold text-gray-400 mb-6">Missing</span>

              <button className="w-full py-2.5 bg-[#0f3d32] text-white text-xs font-bold rounded-lg hover:bg-[#0a2921] transition shadow-sm mt-auto">
                Upload
              </button>
            </div>

            {/* Demo Video (Error) */}
            <div className="bg-white rounded-xl border-2 border-red-600 p-6 flex flex-col items-center justify-center text-center shadow-[0_4px_14px_rgba(220,38,38,0.1)] relative">
              <div className="w-12 h-12 bg-[#fee2e2] rounded-xl flex items-center justify-center text-red-500 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
              </div>
              <h4 className="text-sm font-bold text-[#0f3d32] mb-1">Demo Video</h4>
              <p className="text-[10px] text-gray-500 font-medium mb-3">MP4 only, max 50MB</p>
              
              <div className="bg-red-700 text-white px-3 py-1 rounded-full text-[10px] font-bold mb-2">
                 Invalid Format
              </div>
              <p className="text-[9px] text-red-500 font-medium mb-5">Upload failed: file must be .mp4</p>

              <button className="w-full py-2.5 bg-[#0f3d32] text-white text-xs font-bold rounded-lg hover:bg-[#0a2921] transition shadow-sm mt-auto">
                Upload
              </button>
            </div>

          </div>

          {/* Successfully Uploaded Documents Table */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-12 shadow-sm">
            <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-[#fcfcfd]">
              <h3 className="text-sm font-bold text-[#0f3d32]">Successfully Uploaded Documents</h3>
              <span className="text-[11px] font-bold text-gray-400">1/4 Mandatory Documents Uploaded</span>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-gray-50/50">Document Name</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-gray-50/50">Type</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-gray-50/50">Upload Date</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-gray-50/50">Status</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-gray-50/50 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  <tr className="hover:bg-gray-50/50 transition">
                    <td className="px-6 py-5">
                      <span className="font-bold text-sm text-[#0f3d32]">StartupConnect_Pitch_v2.pdf</span>
                    </td>
                    <td className="px-6 py-5">
                      <span className="text-xs text-gray-600 font-bold">PDF</span>
                    </td>
                    <td className="px-6 py-5">
                      <span className="text-xs text-gray-600">Oct 24, 2023</span>
                    </td>
                    <td className="px-6 py-5">
                      <span className="bg-[#eaf4f1] border border-[#a5d6a7] text-[#136150] px-2.5 py-1 rounded-full text-[10px] font-bold flex items-center gap-1 w-fit">
                         <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                         Verified
                      </span>
                    </td>
                    <td className="px-6 py-5 flex items-center justify-end gap-3 text-gray-400">
                      <button className="hover:text-[#0f3d32] transition">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                      </button>
                      <button className="hover:text-red-600 transition">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-gray-200">
            <Link href="/startup/project" className="px-8 py-3.5 bg-white border border-[#0f3d32] text-[#0f3d32] font-bold rounded-lg hover:bg-gray-50 transition text-sm shadow-sm">
              Back to Project Info
            </Link>
            <div className="flex items-center gap-4 ml-auto">
              <span className="text-[11px] text-gray-400 font-medium italic hidden sm:block">Auto-saving progress...</span>
              <button type="button" className="px-8 py-3.5 bg-[#0f3d32] hover:bg-[#0a2921] text-white font-bold rounded-lg transition shadow-md text-sm">
                Publish Project
              </button>
            </div>
          </div>

        </div>

      </main>

    </div>
  );
}
