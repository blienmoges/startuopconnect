import Link from "next/link";
import Image from "next/image";

export default function InvestorRegistrationStep3() {
  return (
    <div className="min-h-screen bg-[#fcfcfd] font-sans text-gray-900 flex flex-col">
      {/* Header */}
      <header className="py-5 px-6 md:px-12 flex justify-between items-center w-full z-20">
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
      <main className="flex-grow flex flex-col items-center pb-20 pt-8 px-4 sm:px-6 z-10 w-full max-w-4xl mx-auto">
        
        {/* Progress Stepper */}
        <div className="w-full mb-12 px-4">
          <div className="relative flex justify-between items-start">
            {/* Connecting Line */}
            <div className="absolute top-5 left-8 right-8 h-[2px] bg-gray-200 -z-10"></div>
            
            {/* Step 1 */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0f3d32] text-white flex items-center justify-center font-bold text-sm shadow-sm ring-4 ring-[#fcfcfd]">
                1
              </div>
              <span className="text-xs font-bold text-[#0f3d32]">Account Info</span>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0f3d32] text-white flex items-center justify-center font-bold text-sm shadow-sm ring-4 ring-[#fcfcfd]">
                2
              </div>
              <span className="text-xs font-bold text-[#0f3d32]">Profile</span>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0f3d32] text-white flex items-center justify-center font-bold text-sm shadow-sm ring-4 ring-[#fcfcfd]">
                3
              </div>
              <span className="text-xs font-bold text-[#0f3d32]">Verification</span>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#e9ecef] text-gray-500 flex items-center justify-center font-bold text-sm shadow-sm ring-4 ring-[#fcfcfd]">
                4
              </div>
              <span className="text-xs font-medium text-gray-400">Review</span>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#e9ecef] text-gray-500 flex items-center justify-center font-bold text-sm shadow-sm ring-4 ring-[#fcfcfd]">
                5
              </div>
              <span className="text-xs font-medium text-gray-400">Approval</span>
            </div>
          </div>
        </div>

        {/* Center Card Area */}
        <div className="w-full max-w-2xl bg-[#fafafa] rounded-2xl p-8 sm:p-12 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
          <h1 className="text-3xl font-bold text-[#0f3d32] mb-3 tracking-tight">Verification and Documents</h1>
          <p className="text-gray-500 mb-10 text-sm leading-relaxed">Upload the required documents to verify your identity and investor status.</p>

          <form className="flex flex-col gap-8">
            
            {/* Personal Verification */}
            <section>
              <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">Personal Verification</h3>
              <div className="border-2 border-dashed border-[#c5d3ce] bg-white rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50 transition">
                <div className="w-12 h-12 bg-[#d1e7dd] rounded-full flex items-center justify-center mb-4 text-[#136150]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                </div>
                <h4 className="font-bold text-[#0f3d32] text-sm mb-1">ID or Passport Upload</h4>
                <p className="text-[11px] text-gray-500 font-medium">Supported formats: PDF, JPG, PNG (Max 10MB)</p>
              </div>
            </section>

            {/* Institutional Verification */}
            <section>
              <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">Institutional Verification</h3>
              <div className="flex flex-col gap-3">
                
                {/* Uploaded File */}
                <div className="bg-[#eef2f1] border border-[#d2dfdb] rounded-xl p-4 flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#0f3d32] rounded-lg flex items-center justify-center text-white shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0f3d32]">registration_doc.pdf</h4>
                      <p className="text-[11px] text-gray-500 font-medium">Uploaded &bull; 2.4 MB</p>
                    </div>
                  </div>
                  <button type="button" className="text-red-500 hover:text-red-600 transition p-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                  </button>
                </div>

                {/* Empty Requirement 1 */}
                <div className="bg-white border border-gray-200 rounded-xl p-4 flex justify-between items-center cursor-pointer hover:border-[#136150] transition">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#f1f3f5] rounded-lg flex items-center justify-center text-gray-400 shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                    </div>
                    <h4 className="text-sm font-bold text-gray-800">Trade License</h4>
                  </div>
                  <div className="text-[#136150] p-1.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                </div>

                {/* Empty Requirement 2 */}
                <div className="bg-white border border-gray-200 rounded-xl p-4 flex justify-between items-center cursor-pointer hover:border-[#136150] transition">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#f1f3f5] rounded-lg flex items-center justify-center text-gray-400 shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
                    </div>
                    <h4 className="text-sm font-bold text-gray-800">TIN Certificate</h4>
                  </div>
                  <div className="text-[#136150] p-1.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                </div>

              </div>
            </section>

            {/* Checkboxes */}
            <section className="pt-6 border-t border-gray-200 flex flex-col gap-4">
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-1 w-4 h-4 text-[#136150] border-gray-300 rounded focus:ring-[#136150]" />
                <span className="text-[13px] text-gray-600 font-medium leading-snug">
                  I confirm that I possess the <span className="font-bold">financial capacity</span> to engage in institutional investments.
                </span>
              </label>
              
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-1 w-4 h-4 text-[#136150] border-gray-300 rounded focus:ring-[#136150]" />
                <span className="text-[13px] text-gray-600 font-medium leading-snug">
                  I agree to the <span className="font-bold">Terms of Use</span> and acknowledge that false information may lead to permanent disqualification.
                </span>
              </label>

              <div className="flex items-center gap-2 mt-4 text-[#5e6b75] font-bold text-[9px] uppercase tracking-widest pl-1">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path></svg>
                Your documents are protected by AES-256 encryption.
              </div>
            </section>

            {/* Bottom Actions */}
            <div className="flex justify-between items-center pt-8 border-t border-gray-200">
              <Link href="/register/investor/step2" className="flex items-center gap-2 text-sm font-bold text-[#0f3d32] hover:text-[#136150] transition">
                Back
              </Link>
              <Link href="/register/investor/step4" className="px-8 py-3.5 bg-[#0f3d32] hover:bg-[#0a2921] text-white font-bold rounded shadow-md transition text-sm">
                Continue to Review
              </Link>
            </div>

          </form>
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-[#fcfcfd] py-8 px-6 md:px-12 w-full mt-auto">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[#b1baba] text-sm tracking-[0.2em] font-bold uppercase">
            Sovereign Ethiopia
          </div>
          
          <div className="flex flex-wrap gap-8 text-[10px] text-gray-400 hover:text-gray-600 transition">
            <Link href="#" className="hover:text-[#136150] transition">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#136150] transition">Institutional Disclosure</Link>
            <Link href="#" className="hover:text-[#136150] transition">Regulatory Compliance</Link>
          </div>

          <p className="text-[10px] text-gray-400">&copy; 2024 Sovereign Ethiopia Investment Board. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
