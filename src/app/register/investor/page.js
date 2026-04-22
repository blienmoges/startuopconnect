import Link from "next/link";
import Image from "next/image";

export default function InvestorRegistration() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans text-gray-900 flex flex-col">
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
          <button className="text-[#136150] transition hover:opacity-80">Save as Draft</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center pb-20 pt-8 px-4 sm:px-6 z-10 w-full max-w-6xl mx-auto">
        
        {/* Progress Stepper */}
        <div className="w-full max-w-4xl mb-16 px-4">
          <div className="relative flex justify-between items-start">
            {/* Connecting Line */}
            <div className="absolute top-5 left-8 right-8 h-[2px] bg-gray-200 -z-10"></div>
            
            {/* Step 1 */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0f3d32] text-white flex items-center justify-center font-bold text-sm shadow-sm ring-4 ring-[#f8f9fa]">
                1
              </div>
              <span className="text-xs font-bold text-[#0f3d32]">Account Info</span>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#e9ecef] text-gray-500 flex items-center justify-center font-bold text-sm shadow-sm ring-4 ring-[#f8f9fa]">
                2
              </div>
              <span className="text-xs font-bold text-gray-400">Profile</span>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#e9ecef] text-gray-500 flex items-center justify-center font-bold text-sm shadow-sm ring-4 ring-[#f8f9fa]">
                3
              </div>
              <span className="text-xs font-bold text-transparent">Verification</span>
            </div>

            {/* Step 4 Space */}
            <div className="flex flex-col items-center gap-3 opacity-0">
              <div className="w-10 h-10 rounded-full bg-gray-200"></div>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#e9ecef] text-gray-500 flex items-center justify-center font-bold text-sm shadow-sm ring-4 ring-[#f8f9fa]">
                5
              </div>
              <span className="text-xs font-bold text-gray-400">Approval</span>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left Column (Form) */}
          <div className="flex-grow lg:max-w-xl">
            <h1 className="text-4xl font-light text-[#0f3d32] mb-3 tracking-tight">Account Information</h1>
            <p className="text-gray-500 mb-10 text-[15px]">Begin your journey as a verified investor in Ethiopia's growing tech ecosystem.</p>

            <form className="flex flex-col gap-6">
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="sm:col-span-2">
                  <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2.5">Full Legal Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your full legal name" 
                    className="w-full px-4 py-3.5 bg-[#f4f6f8] border-none rounded focus:outline-none focus:ring-2 focus:ring-[#136150] transition text-sm text-gray-800 placeholder-gray-400"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2.5">Work Email</label>
                  <input 
                    type="email" 
                    placeholder="name@company.com" 
                    className="w-full px-4 py-3.5 bg-[#f4f6f8] border-none rounded focus:outline-none focus:ring-2 focus:ring-[#136150] transition text-sm text-gray-800 placeholder-gray-400"
                  />
                  <p className="mt-1.5 text-[10px] text-gray-400 italic">Verification code will be sent to this email</p>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2.5">Phone Number</label>
                  <div className="flex">
                    <div className="bg-[#e9ecef] px-3 lg:px-4 py-3.5 rounded-l text-sm font-bold text-gray-600 border-r border-[#dee2e6] shrink-0 flex items-center justify-center">
                      +251
                    </div>
                    <input 
                      type="text" 
                      placeholder="911 234 567" 
                      className="w-full px-4 py-3.5 bg-[#f4f6f8] border-none rounded-r focus:outline-none focus:ring-2 focus:ring-[#136150] transition text-sm text-gray-800 placeholder-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2.5">Preferred Language</label>
                  <div className="flex bg-[#f4f6f8] rounded p-1 h-[48px]">
                    <button type="button" className="flex-1 bg-white shadow-sm rounded text-[13px] font-bold text-[#136150] transition h-full">
                      English
                    </button>
                    <button type="button" className="flex-1 text-[13px] font-bold text-gray-500 hover:text-gray-700 transition h-full">
                      Amharic
                    </button>
                  </div>
                </div>

                <div className="sm:col-span-2 grid sm:grid-cols-2 gap-6 relative">
                  <div className="relative">
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2.5">Password</label>
                    <input 
                      type="password" 
                      placeholder="••••••••" 
                      className="w-full px-4 py-3.5 bg-[#f4f6f8] border-none rounded focus:outline-none focus:ring-2 focus:ring-[#136150] transition text-sm tracking-widest text-gray-800 placeholder-gray-400"
                    />
                    
                    {/* Password Strength Widget */}
                    <div className="absolute -bottom-6 w-full flex items-center justify-between">
                      <div className="flex items-center gap-1.5 w-full pr-4">
                        <div className="h-1 bg-[#136150] rounded-full flex-1"></div>
                        <div className="h-1 bg-[#136150] rounded-full flex-1"></div>
                        <div className="h-1 bg-[#136150] rounded-full flex-1"></div>
                        <div className="h-1 bg-[#e9ecef] rounded-full flex-1"></div>
                      </div>
                      <span className="text-[9px] font-bold text-[#0f3d32] uppercase tracking-wide">Strong</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2.5">Confirm Password</label>
                    <input 
                      type="password" 
                      placeholder="••••••••" 
                      className="w-full px-4 py-3.5 bg-[#f4f6f8] border-none rounded focus:outline-none focus:ring-2 focus:ring-[#136150] transition text-sm tracking-widest text-gray-800 placeholder-gray-400"
                    />
                  </div>
                </div>

              </div>

              <div className="flex justify-end mt-10">
                <Link href="/register/investor/step2" className="px-8 py-3.5 bg-[#0f3d32] hover:bg-[#0a2921] text-white font-bold rounded shadow-md transition text-sm flex items-center gap-2">
                  Continue to Profile
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </Link>
              </div>

            </form>
          </div>

          {/* Right Column (Info Cards) */}
          <div className="lg:w-[400px] shrink-0 flex flex-col gap-6">
            
            {/* Security Card */}
            <div className="bg-[#0f2c25] rounded-xl p-8 relative overflow-hidden text-white shadow-xl">
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#163a32] rounded-full opacity-50 flex items-center justify-center pb-8 pr-8">
                 <svg className="w-10 h-10 text-[#0f2c25] opacity-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l10 5v6c0 5.55-3.84 10.74-10 12-6.16-1.26-10-6.45-10-12V7l10-5z"/></svg>
              </div>
              
              <div className="w-12 h-12 bg-[#163a32] rounded-xl flex items-center justify-center mb-6 relative z-10 border border-[#214b42]">
                <svg className="w-6 h-6 text-[#4ade80]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              
              <h3 className="text-xl font-bold mb-4 relative z-10">Your security is our priority</h3>
              <p className="text-sm text-[#8ba39e] leading-relaxed mb-6 relative z-10">
                StartupConnect Ethiopia utilizes AES-256 bit industry-standard encryption to protect your institutional and personal data. We are committed to the highest grade of regulatory compliance and data sovereignty.
              </p>
              
              <div className="flex items-center gap-2 text-xs font-bold text-[#4ade80] relative z-10">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                GDPR & Local Policy Compliant
              </div>
            </div>

            {/* Community Card */}
            <div className="bg-[#466a62] rounded-xl p-8 relative overflow-hidden text-white shadow-xl min-h-[300px] flex flex-col justify-end">
               <div className="absolute inset-0 bg-gradient-to-t from-[#0f2c25] via-[#0f2c25]/80 to-transparent z-10"></div>
               {/* Decorative background representing connection/industry */}
               <div className="absolute inset-0 opacity-20 flex items-center justify-center z-0">
                  <svg className="w-full text-[#0f3d32]" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0 100 V60 Q10 40 30 50 T70 30 T100 60 V100 Z"/></svg>
                  <svg className="w-3/4 absolute bottom-1/4 text-black opacity-30" viewBox="0 0 100 100"><rect x="20" y="40" width="10" height="40"/><rect x="45" y="20" width="10" height="60"/><rect x="70" y="50" width="10" height="30"/></svg>
               </div>

               <div className="relative z-20">
                 <span className="text-[9px] font-bold uppercase tracking-widest text-gray-300 mb-1 block">Community</span>
                 <h3 className="text-2xl font-bold mb-3">Community of Innovators</h3>
                 <p className="text-sm text-gray-300 leading-relaxed font-medium">
                   Join a network of global and domestic investors driving the digital transformation of Ethiopia.
                 </p>
               </div>
            </div>

          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#f0f2f5] py-8 px-6 md:px-12 w-full mt-auto border-t border-gray-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-[15px] font-bold text-[#0f3d32] mb-1">StartupConnect Ethiopia</h2>
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">&copy; 2024 STARTUPCONNECT ETHIOPIA. SOVEREIGN GRADE INSTITUTIONAL SECURITY.</p>
          </div>
          
          <div className="flex flex-wrap gap-6 text-[11px] font-bold text-[#5e6b75] uppercase tracking-widest">
            <Link href="#" className="hover:text-[#136150] transition">Terms of Service</Link>
            <Link href="#" className="hover:text-[#136150] transition">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#136150] transition">Regulatory Disclosure</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
