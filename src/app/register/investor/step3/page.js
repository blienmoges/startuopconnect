import Link from "next/link";
import Image from "next/image";

export default function InvestorRegistrationStep3() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] font-sans text-gray-900 flex flex-col lg:flex-row">
      
      {/* Left Sidebar (Dark Green graphic) */}
      <div className="hidden lg:flex w-[40%] bg-[#061e16] relative overflow-hidden flex-col justify-between py-12 px-12">
        {/* Abstract Green Light Beams / Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#061e16]"></div>
          {/* Faux light beams using rotated divs */}
          <div className="absolute top-[-10%] left-[10%] w-[150%] h-[30px] bg-[#008f64] opacity-30 transform -rotate-[55deg] blur-[2px]"></div>
          <div className="absolute top-[10%] left-[10%] w-[150%] h-[40px] bg-[#008f64] opacity-30 transform -rotate-[55deg] blur-[2px]"></div>
          <div className="absolute top-[30%] left-[0%] w-[150%] h-[20px] bg-[#008f64] opacity-30 transform -rotate-[55deg] blur-[2px]"></div>
          <div className="absolute top-[50%] left-[-10%] w-[150%] h-[60px] bg-[#008f64] opacity-20 transform -rotate-[55deg] blur-[4px]"></div>
          <div className="absolute top-[70%] left-[-20%] w-[150%] h-[25px] bg-[#008f64] opacity-40 transform -rotate-[55deg] blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#061e16]/60 via-transparent to-[#061e16]/90"></div>
        </div>

        <div className="relative z-10">
          <Link href="/" className="flex items-center gap-2 mb-16">
            <div className="flex items-center gap-2"><img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain" /><span className="font-bold text-lg text-white tracking-tight">StartupConnect</span></div>
          </Link>
          
          <h1 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
            Empower the <br/> Next Generation <br/> of Ethiopian <br/> Founders
          </h1>
          <p className="text-[#10b981] text-sm leading-relaxed max-w-sm font-medium">
            Join a prestigious network of industry leaders curating the future of Ethiopia's innovation ecosystem through high-impact mentorship.
          </p>
        </div>

        <div className="relative z-10">
          <p className="text-[#8ba39e] text-[10px] font-medium tracking-widest uppercase opacity-50">
            &copy; 2024 StartupConnect Ethiopia. All rights reserved.
          </p>
        </div>
      </div>

      {/* Main Content Form Side */}
      <div className="w-full lg:w-[60%] flex flex-col pt-10 pb-6 px-4 md:px-8 overflow-y-auto">
        <div className="w-full max-w-2xl mx-auto flex flex-col">
          <div className="w-full flex items-center gap-3 mb-6 pl-4">
            <Link href="/register/investor/step2" className="text-[#167b66] hover:text-[#0f5c4a] transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
            </Link>
            <span className="font-bold text-lg tracking-tight text-[#115b4c]">
              Verification
            </span>
          </div>

          <div className="mb-8">
            <h1 className="text-3xl font-extrabold text-[#115b4c] tracking-tight mb-2">Verification and Documents</h1>
            <p className="text-gray-500 mb-10 text-[15px]">Upload the required documents to verify your identity and investor status.</p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-xs font-bold text-gray-400 tracking-wider uppercase">Step 3 of 5</span>
              <div className="flex gap-1.5">
                <div className="h-1.5 w-6 bg-[#167b66] rounded-full"></div>
                <div className="h-1.5 w-6 bg-[#167b66] rounded-full"></div>
                <div className="h-1.5 w-6 bg-[#167b66] rounded-full"></div>
                <div className="h-1.5 w-6 bg-gray-200 rounded-full"></div>
                <div className="h-1.5 w-6 bg-gray-200 rounded-full"></div>
              </div>
            </div>
          </div>

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
      </div>
    </div>
  );
}
