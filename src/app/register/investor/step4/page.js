import Link from "next/link";
import Image from "next/image";

export default function InvestorRegistrationStep4() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans text-gray-900 flex flex-col">
      {/* Header */}
      <header className="py-5 px-6 md:px-12 flex justify-between items-center w-full z-20 bg-white shadow-sm">
        <Link href="/" className="font-bold text-xl tracking-tight text-[#0f3d32]">
          StartupConnect Ethiopia
        </Link>
        <div className="flex items-center gap-6 text-sm font-bold">
          <div className="hidden md:flex items-center gap-1.5 text-[#5e6b75]">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
            Secure Encryption
          </div>
          <button className="text-[#136150] transition hover:opacity-80 font-bold">Save as Draft</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center pb-20 pt-10 px-4 sm:px-6 z-10 w-full max-w-4xl mx-auto">
        
        {/* Progress Stepper */}
        <div className="w-full mb-12 px-4 max-w-2xl mx-auto">
          <div className="relative flex justify-between items-start">
            {/* Connecting Line */}
            <div className="absolute top-5 left-8 right-8 h-[2px] bg-gray-200 -z-10">
               <div className="h-full bg-[#0f3d32]" style={{ width: '75%' }}></div>
            </div>
            
            {/* Step 1 */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0f3d32] text-white flex items-center justify-center font-bold text-sm shadow-sm ring-4 ring-[#f8f9fa] relative z-10">
                1
              </div>
              <span className="text-xs font-bold text-[#0f3d32] uppercase tracking-widest scale-90">Account</span>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0f3d32] text-white flex items-center justify-center font-bold text-sm shadow-sm ring-4 ring-[#f8f9fa] relative z-10">
                2
              </div>
              <span className="text-xs font-bold text-[#0f3d32] uppercase tracking-widest scale-90">Profile</span>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0f3d32] text-white flex items-center justify-center font-bold text-sm shadow-sm ring-4 ring-[#f8f9fa] relative z-10">
                3
              </div>
              <span className="text-xs font-bold text-[#0f3d32] uppercase tracking-widest scale-90">Verification</span>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0f3d32] text-white flex items-center justify-center font-bold text-sm shadow-sm ring-4 ring-[#f8f9fa] relative z-10">
                4
              </div>
              <span className="text-xs font-bold text-[#0f3d32] uppercase tracking-widest scale-90">Review</span>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#e9ecef] text-gray-500 flex items-center justify-center font-bold text-sm shadow-sm ring-4 ring-[#f8f9fa] relative z-10">
                5
              </div>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest scale-90">Approval</span>
            </div>
          </div>
        </div>

        {/* Center Card Area */}
        <div className="w-full max-w-2xl bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative">
          
          <h1 className="text-3xl font-bold text-[#0f3d32] mb-3 tracking-tight">Review and Submit</h1>
          <p className="text-gray-500 mb-10 text-sm leading-relaxed">Review your information before submitting your investor account for verification.</p>

          <div className="flex flex-col gap-10">
            
            {/* Section 1: Account Information */}
            <section>
              <div className="flex justify-between items-center mb-6 pb-2 border-b border-gray-100">
                <div className="flex items-center gap-2 text-[#0f3d32]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                  <h3 className="text-xs font-bold uppercase tracking-widest">Account Information</h3>
                </div>
                <Link href="/register/investor" className="text-xs font-bold text-[#136150] hover:text-[#0f3d32] flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                  Edit
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 pl-2">
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1.5">Full Legal Name</p>
                  <p className="text-sm font-bold text-gray-800">Abebe Bekele</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1.5">Work Email</p>
                  <p className="text-sm font-bold text-gray-800">abebe@invest.com</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1.5">Phone Number</p>
                  <p className="text-sm font-bold text-gray-800">+251 911 123 4567</p>
                </div>
              </div>
            </section>

            {/* Section 2: Investor Type and Profile */}
            <section>
              <div className="flex justify-between items-center mb-6 pb-2 border-b border-gray-100">
                <div className="flex items-center gap-2 text-[#0f3d32]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                  <h3 className="text-xs font-bold uppercase tracking-widest">Investor Type And Profile</h3>
                </div>
                <Link href="/register/investor/step2" className="text-xs font-bold text-[#136150] hover:text-[#0f3d32] flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                  Edit
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 pl-2">
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1.5">Investor Type</p>
                  <div className="inline-block bg-[#eef6f3] text-[#136150] px-3 py-1 rounded text-xs font-bold border border-[#cde5dd]">Angel Investor</div>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1.5">Location Preference</p>
                  <p className="text-sm font-bold text-gray-800">Addis Ababa, Ethiopia</p>
                </div>
                
                <div className="sm:col-span-2">
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-2">Preferred Sectors</p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-[#0f3d32] text-white px-3 py-1 rounded text-xs font-bold">Fintech</span>
                    <span className="bg-[#0f3d32] text-white px-3 py-1 rounded text-xs font-bold">AgriTech</span>
                    <span className="bg-[#0f3d32] text-white px-3 py-1 rounded text-xs font-bold">HealthTech</span>
                  </div>
                </div>

                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1.5">Startup Stage</p>
                  <p className="text-sm font-bold text-gray-800">Series A</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1.5">Investment Range</p>
                  <p className="text-sm font-bold text-gray-800">$250k - $1M</p>
                </div>

                <div className="sm:col-span-2">
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1.5">Professional Bio</p>
                  <p className="text-sm text-gray-700 leading-relaxed font-medium bg-[#fcfcfd] p-3 rounded border border-gray-100">
                    Experienced investor focusing on tech driven technology startups with strong social impact and scalable business models.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Verification Summary */}
            <section>
              <div className="flex justify-between items-center mb-6 pb-2 border-b border-gray-100">
                <div className="flex items-center gap-2 text-[#0f3d32]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <h3 className="text-xs font-bold uppercase tracking-widest">Verification Summary</h3>
                </div>
                <Link href="/register/investor/step3" className="text-xs font-bold text-[#136150] hover:text-[#0f3d32] flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                  Edit
                </Link>
              </div>

              <div className="flex flex-col gap-3 pl-2">
                {/* Document 1 */}
                <div className="bg-white border border-gray-200 rounded-lg p-3.5 flex justify-between items-center shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="text-[#0f3d32]">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                    </div>
                    <span className="text-sm font-bold text-gray-800 mt-0.5">ID_Card_Scan.pdf</span>
                  </div>
                  <div className="w-5 h-5 bg-[#d1e7dd] text-[#0f3d32] rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                </div>

                {/* Document 2 */}
                <div className="bg-white border border-gray-200 rounded-lg p-3.5 flex justify-between items-center shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="text-[#0f3d32]">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    </div>
                    <span className="text-sm font-bold text-gray-800 mt-0.5">profile_photo_hq.jpg</span>
                  </div>
                  <div className="w-5 h-5 bg-[#d1e7dd] text-[#0f3d32] rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                </div>

                {/* Check text */}
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-4 h-4 bg-[#0f3d32] rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <p className="text-[11px] font-bold text-gray-600 uppercase tracking-widest mt-0.5">Terms & Conditions accepted. Identity verified.</p>
                </div>
              </div>
            </section>

          </div>

          {/* Info Alert Box */}
          <div className="mt-12 bg-[#f4f6f5] rounded-xl p-5 border border-[#e8eceb] flex items-start gap-4">
            <div className="text-[#136150] shrink-0 mt-0.5">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed font-medium">
              By clicking submit, your investor profile will enter a verification review. This process ensures the highest institutional standards of validity. You will receive an email update within 48 hours.
            </p>
          </div>

          {/* Bottom Actions */}
          <div className="flex justify-between items-center mt-8">
            <Link href="/register/investor/step3" className="flex items-center gap-2 text-sm font-bold text-gray-600 px-6 py-3 border border-gray-300 rounded-lg hover:border-gray-400 hover:text-gray-800 transition">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
              Back
            </Link>
            <button type="button" className="px-8 py-3.5 bg-[#0f3d32] hover:bg-[#0a2921] text-white font-bold rounded shadow-xl shadow-[#0f3d32]/20 transition text-sm flex items-center gap-2">
              Submit for Verification
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
          </div>

          {/* Badges Footer inside Card */}
          <div className="flex justify-center items-center gap-6 mt-12 pt-8 border-t border-gray-100 flex-wrap">
            <div className="flex items-center gap-2 text-[8px] font-bold text-gray-400 uppercase tracking-widest">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              Sovereign Data Enclave
            </div>
            <div className="flex items-center gap-2 text-[8px] font-bold text-gray-400 uppercase tracking-widest">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
              Administrator Audit
            </div>
            <div className="flex items-center gap-2 text-[8px] font-bold text-gray-400 uppercase tracking-widest">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              Verified Platform
            </div>
          </div>

        </div>

      </main>

      {/* Footer Below Card */}
      <div className="w-full text-center pb-10">
        <div className="flex justify-center flex-wrap gap-8 text-[9px] font-bold text-gray-400 hover:text-gray-600 uppercase tracking-widest transition">
          <Link href="#" className="hover:text-[#136150] transition">Privacy Policy</Link>
          <Link href="#" className="hover:text-[#136150] transition">Compliance Standards</Link>
          <Link href="#" className="hover:text-[#136150] transition">Contact Support</Link>
        </div>
      </div>
      
    </div>
  );
}
