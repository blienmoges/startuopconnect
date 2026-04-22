import Link from "next/link";
import Image from "next/image";

export default function StartupRegistrationStep4() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] font-sans text-gray-900 flex flex-col pb-24">
      {/* Header */}
      <header className="border-b border-gray-100 py-4 px-6 md:px-12 flex justify-between items-center bg-white sticky top-0 z-10 w-full">
        <Link href="/" className="font-bold text-xl tracking-tight text-[#167b66]">
          StartupConnect <span className="text-gray-900 font-semibold">Ethiopia</span>
        </Link>
        
        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2 text-gray-500 font-medium cursor-pointer hover:text-[#167b66] transition">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path></svg>
            Save as Draft
          </div>
          <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center overflow-hidden border border-gray-200 cursor-pointer">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex justify-center py-12 px-4 sm:px-6">
        <div className="max-w-3xl w-full flex flex-col">
          
          {/* Title Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold text-[#115b4c] tracking-tight mb-2">Review & Submit</h1>
            <p className="text-sm text-gray-500">Double-check your application details before sending them for official verification.</p>
          </div>

          {/* Profile Status Banner */}
          <div className="w-full bg-[#e3f2f0] border border-[#c4e5df] rounded-xl p-5 mb-10 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#167b66] rounded-full flex items-center justify-center text-white border-[3px] border-[#a5d6cd]">
                <span className="font-bold text-sm">100%</span>
              </div>
              <div>
                <h3 className="font-bold text-[#115b4c] text-[15px]">Profile Complete</h3>
                <p className="text-sm text-[#0f5c4a] opacity-80 mt-0.5">All required fields have been successfully populated.</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 bg-[#fef0db] text-[#d97736] px-3 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest shadow-sm">
              <div className="w-1.5 h-1.5 bg-[#d97736] rounded-full"></div>
              READY FOR REVIEW
            </div>
          </div>

          {/* Review Cards */}
          <div className="flex flex-col gap-6 mb-12">
            
            {/* Card 1: Account Information */}
            <div className="bg-[#f8f9fa] rounded-2xl p-6 border border-gray-100 flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2 text-[#167b66]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                  <h2 className="text-lg font-bold">Account Information</h2>
                </div>
                <Link href="/register/startup" className="text-xs font-bold text-[#167b66] hover:underline uppercase tracking-wide">Edit Section</Link>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-100 grid grid-cols-2 gap-y-6 gap-x-8">
                <div>
                  <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Full Name</h4>
                  <p className="text-sm font-medium text-gray-900">Abebe Kebede</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Work Email</h4>
                  <p className="text-sm font-medium text-gray-900">abebe.k@startupeth.et</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Phone Number</h4>
                  <p className="text-sm font-medium text-gray-900">+251 911 234 567</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Role</h4>
                  <p className="text-sm font-medium text-gray-900">Founder | CEO</p>
                </div>
              </div>
            </div>

            {/* Card 2: Company Details */}
            <div className="bg-[#f8f9fa] rounded-2xl p-6 border border-gray-100 flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2 text-[#167b66]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                  <h2 className="text-lg font-bold">Company Details</h2>
                </div>
                <Link href="/register/startup/step2" className="text-xs font-bold text-[#167b66] hover:underline uppercase tracking-wide">Edit Section</Link>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-100 grid grid-cols-2 gap-y-6 gap-x-8">
                <div className="col-span-2">
                  <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Company Name</h4>
                  <p className="text-[15px] font-bold text-gray-900">EthioAgriTech Solutions</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Industry</h4>
                  <p className="text-sm font-medium text-gray-900">Agri-Tech / AI</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Registration Number</h4>
                  <p className="text-sm font-medium text-gray-900">ET-98219-150</p>
                </div>
                <div className="col-span-2">
                  <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Business Summary</h4>
                  <p className="text-sm font-medium text-gray-700 leading-relaxed">
                    Providing data-driven soil analysis for smallholder farmers across the Oromia region to optimize fertilizer usage and increase crop yields by 40%.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Verification Documents */}
            <div className="bg-[#f8f9fa] rounded-2xl p-6 border border-gray-100 flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2 text-[#167b66]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                  <h2 className="text-lg font-bold">Verification Documents</h2>
                </div>
                <Link href="/register/startup/step3" className="text-xs font-bold text-[#167b66] hover:underline uppercase tracking-wide">Edit Section</Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* File 1 */}
                <div className="bg-white rounded-xl p-4 border border-gray-100 flex items-center gap-3">
                  <div className="bg-[#fef0db] text-[#d97736] p-2 rounded-lg">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#115b4c] truncate w-32" title="trade_license.pdf">trade_license.pdf</h4>
                    <span className="text-[10px] text-gray-500">4.2 MB</span>
                  </div>
                </div>
                {/* File 2 */}
                <div className="bg-white rounded-xl p-4 border border-gray-100 flex items-center gap-3">
                  <div className="bg-[#fef0db] text-[#d97736] p-2 rounded-lg">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#115b4c] truncate w-32" title="tin_certificate.pdf">tin_certificate.pdf</h4>
                    <span className="text-[10px] text-gray-500">1.1 MB</span>
                  </div>
                </div>
                {/* File 3 */}
                <div className="bg-white rounded-xl p-4 border border-gray-100 flex items-center gap-3">
                  <div className="bg-[#e6effc] text-[#3b82f6] p-2 rounded-lg">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#115b4c] truncate w-32" title="office_photos.zip">office_photos.zip</h4>
                    <span className="text-[10px] text-gray-500">12.4 MB</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Final Acknowledgements */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-[#115b4c] mb-6">Final Acknowledgements</h2>
            <div className="flex flex-col gap-4">
              <label className="flex items-start gap-4 cursor-pointer">
                <div className="relative flex items-center justify-center w-5 h-5 mt-0.5 rounded border border-gray-300 bg-white leading-none">
                  <input type="checkbox" className="opacity-0 absolute w-full h-full cursor-pointer peer" />
                  <div className="hidden peer-checked:block text-[#167b66]">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-0.5">Accuracy Declaration</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">I certify that all information provided in this application is true and accurate to the best of my knowledge as of the date of submission.</p>
                </div>
              </label>

              <label className="flex items-start gap-4 cursor-pointer">
                <div className="relative flex items-center justify-center w-5 h-5 mt-0.5 rounded border border-gray-300 bg-white leading-none">
                  <input type="checkbox" className="opacity-0 absolute w-full h-full cursor-pointer peer" />
                  <div className="hidden peer-checked:block text-[#167b66]">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-0.5">Terms of Service & Privacy Policy</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">I have read and agree to StartupConnect Ethiopia <span className="text-[#167b66] hover:underline">Privacy Policy</span> and <span className="text-[#167b66] hover:underline">Terms of Use</span> regarding data processing and verification protocols.</p>
                </div>
              </label>
            </div>
          </div>

          {/* Submission Action Box */}
          <div className="bg-[#0f5c4a] rounded-xl p-10 text-center flex flex-col items-center mb-16 shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-3">Ready to Join the Ecosystem?</h2>
            <p className="text-sm text-[#87c5b7] mb-8 max-w-lg leading-relaxed">
              Once submitted, our administrators will review your application within <span className="font-bold text-white">3-5 business days</span>. You will receive an email notification upon approval.
            </p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <Link href="/register/startup/success" className="px-8 py-3.5 bg-white text-[#0f5c4a] font-bold rounded-lg shadow-sm hover:bg-gray-50 transition flex justify-center items-center w-full sm:w-auto min-w-[200px]">
                Submit for Verification
              </Link>
              <button className="px-8 py-3.5 bg-transparent border border-[#2b7866] text-white hover:bg-[#115b4c] font-bold rounded-lg transition w-full sm:w-auto">
                Cancel
              </button>
            </div>
            
            <div className="flex gap-6 items-center justify-center text-[#87c5b7] text-[10px] uppercase font-bold tracking-widest">
              <div className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                Encrypted Connection
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                Secure form SSL TLS
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Data in Ethiopia
              </div>
            </div>
          </div>
          
          {/* Footer Sub-badges */}
          <div className="flex flex-col items-center pt-8 border-t border-gray-100">
            <div className="flex items-center gap-8 mb-6 text-gray-400 text-xs font-bold uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"></path></svg>
                Secure Gateway
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                Data Hosted ET
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>
                MinT Approved
              </div>
            </div>
            <p className="text-[10px] text-gray-400 text-center max-w-xl leading-relaxed">
              StartupConnect Ethiopia is an initiative managed by the Ministry of Innovation and Technology (MinT). In short. Your data is protected by the Ethiopia Personal Data Protection Proclamation.
            </p>
          </div>

        </div>
      </main>
    </div>
  );
}
