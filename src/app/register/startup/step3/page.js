import Link from "next/link";

export default function StartupRegistrationStep3() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] font-sans text-gray-900 flex flex-col pb-24">
      {/* Minimal Header */}
      <header className="border-b border-gray-100 py-4 px-6 md:px-12 flex justify-between items-center bg-white sticky top-0 z-10 w-full">
        {/* Back navigation & Title */}
        <div className="flex items-center gap-3">
          <Link href="/register/startup/step2" className="text-[#167b66] hover:text-[#0f5c4a] transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
          </Link>
          <span className="font-bold text-lg tracking-tight text-[#115b4c]">
            Verification Documents
          </span>
        </div>

        <div className="flex items-center gap-6 text-sm">
          <button className="text-gray-600 font-medium hover:text-[#167b66] transition">Save as Draft</button>
          <div className="flex items-center gap-2 bg-[#e8f3f1] text-[#167b66] px-3 py-1.5 rounded text-xs font-bold tracking-wide">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
            SECURE ENCRYPTION
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex justify-center py-12 px-4 sm:px-6">
        <div className="max-w-3xl w-full flex flex-col items-center">

          {/* Progress Indicator */}
          <div className="w-full flex items-center justify-between mb-8">
            <span className="text-xs font-bold text-gray-500 tracking-wider uppercase">Step 3 of 4</span>
            <div className="flex gap-1.5">
              <div className="h-1.5 w-6 bg-gray-200 rounded-full"></div>
              <div className="h-1.5 w-6 bg-gray-200 rounded-full"></div>
              <div className="h-1.5 w-6 bg-[#167b66] rounded-full"></div>
              <div className="h-1.5 w-6 bg-gray-200 rounded-full"></div>
            </div>
          </div>

          {/* Info Banner */}
          <div className="w-full bg-[#e3f2f0] border border-[#c4e5df] rounded-xl p-5 mb-12 flex items-start gap-4">
            <div className="w-6 h-6 bg-[#115b4c] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="font-bold text-sm font-serif italic text-white">i</span>
            </div>
            <p className="text-sm text-[#0f5c4a] font-medium leading-relaxed">
              <span className="font-bold">Important:</span> These files are only for verification. Pitch deck, business plan, financial summary, and demo video are uploaded later when creating a project.
            </p>
          </div>

          {/* SECTION: Required Documents */}
          <div className="w-full mb-12">
            <div className="flex justify-between items-end mb-6">
              <h2 className="text-xl font-bold text-[#115b4c] font-serif">Required Documents</h2>
              <span className="text-xs font-bold text-gray-400 tracking-widest uppercase">3 ITEMS NEEDED</span>
            </div>

            <div className="flex flex-col gap-6">

              {/* Document 1: Uploaded State */}
              <div className="bg-white p-6 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-100 flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-gray-900 text-[15px] mb-1">Founder or representative ID</h3>
                    <p className="text-sm text-gray-500">A clear scan of your National ID, Passport, or Kebele ID.</p>
                  </div>
                  <span className="bg-[#e8f3f1] text-[#167b66] px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Required</span>
                </div>

                {/* Uploaded File Bar */}
                <div className="bg-[#f0f8f7] border border-[#cce8e2] rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#167b66] rounded-full flex items-center justify-center text-white">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900 leading-tight">national_id_founder.pdf</p>
                      <p className="text-[11px] text-gray-500 mt-0.5">1.2 MB • Uploaded 2 mins ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-[#167b66]">
                    <button className="hover:text-[#0f5c4a] transition" title="View">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                    </button>
                    <button className="hover:text-[#0f5c4a] transition" title="Replace">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Document 2: Empty/Upload State */}
              <div className="bg-white p-6 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-100 flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-gray-900 text-[15px] mb-1">Business registration proof</h3>
                    <p className="text-sm text-gray-500">Valid investment permit or business license from MoTI.</p>
                  </div>
                  <span className="bg-[#e8f3f1] text-[#167b66] px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Required</span>
                </div>

                {/* Drag and Drop Zone */}
                <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 flex flex-col items-center justify-center hover:bg-gray-50 transition cursor-pointer">
                  <div className="w-12 h-12 bg-[#f0f8f7] rounded-full flex items-center justify-center text-[#167b66] mb-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                  </div>
                  <p className="text-sm font-bold text-[#115b4c] mb-1">Click to upload or drag & drop</p>
                  <p className="text-[11px] text-gray-400">PDF, JPG, PNG (Max. 5MB)</p>
                </div>
              </div>

              {/* Document 3: Error State */}


            </div>
          </div>

          {/* SECTION: Optional Documents */}
          <div className="w-full">
            <div className="flex justify-between items-end mb-6">
              <h2 className="text-xl font-bold text-[#115b4c] font-serif">Optional Documents</h2>
              <span className="text-xs font-bold text-gray-400 tracking-widest uppercase">ENHANCED PROFILE</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-100 flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-gray-900 text-[15px] mb-1">Support or affiliation letter</h3>
                    <p className="text-sm text-gray-500">Letter from an incubator, hub, or relevant government body.</p>
                  </div>
                  {/* <span className="bg-[#e8f3f1] text-[#167b66] px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider"></span> */}
                </div>

                {/* Error Bar */}
                <div className="bg-[#fff1f2] border border-[#ffe4e6] rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#e11d48] text-white rounded-full flex items-center justify-center">
                      <span className="font-bold text-sm">!</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#e11d48] leading-tight">Invalid format</p>
                      <p className="text-[11px] text-[#e11d48] mt-0.5 opacity-80">Word documents (.docx) are not supported.</p>
                    </div>
                  </div>
                  <button className="px-5 py-2 bg-[#e11d48] text-white text-xs font-bold rounded hover:bg-[#be123c] transition shadow-sm">
                    Try Again
                  </button>
                </div>
              </div>
              {/* TIN Certificate */}
              <div className="bg-white p-5 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-100 flex flex-col justify-between">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-gray-400 mt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-[13px]">TIN Certificate</h3>
                    <p className="text-[11px] text-gray-500 mt-0.5">Tax ID Proof</p>
                  </div>
                </div>
                <button className="w-full py-2.5 bg-[#f8f9fa] text-[#115b4c] border border-gray-200 text-xs font-bold rounded hover:bg-[#f3f4f6] transition flex justify-center items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                  Upload
                </button>
              </div>

              {/* Startup Logo */}
              <div className="bg-white p-5 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-100 flex flex-col justify-between">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-gray-400 mt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-[13px]">Startup logo</h3>
                    <p className="text-[11px] text-gray-500 mt-0.5">PNG or SVG</p>
                  </div>
                </div>
                <button className="w-full py-2.5 bg-[#f8f9fa] text-[#115b4c] border border-gray-200 text-xs font-bold rounded hover:bg-[#f3f4f6] transition flex justify-center items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                  Upload
                </button>
              </div>

              {/* Proof of address */}
              <div className="col-span-2 bg-white p-5 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-100 flex flex-col justify-between">
                <div className="flex items-start gap-4 mb-5">
                  <div className="text-gray-400 mt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-[13px]">Proof of address</h3>
                    <p className="text-[11px] text-gray-500 mt-0.5">Utility bill or lease agreement</p>
                  </div>
                </div>
                <button className="w-full py-2.5 bg-[#f8f9fa] text-[#115b4c] border border-gray-200 text-xs font-bold rounded hover:bg-[#f3f4f6] transition flex justify-center items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                  Upload
                </button>
              </div>

            </div>
          </div>
        </div>
      </main>

      {/* Fixed Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 py-4 px-6 md:px-12 flex justify-between items-center z-20 shadow-[0_-4px_10px_rgba(0,0,0,0.02)]">
        <div>
          <span className="text-[10px] font-bold text-gray-400 tracking-wider uppercase block">Step 3 of 4</span>
          <span className="text-sm font-bold text-[#115b4c]">Next: Final Review</span>
        </div>
        <Link href="/register/startup/step4" className="px-8 py-3.5 bg-[#0f5c4a] hover:bg-[#0c4a3b] text-white font-bold rounded shadow-md transition text-sm flex items-center gap-2">
          Continue to Review
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </Link>
      </div>

    </div>
  );
}
