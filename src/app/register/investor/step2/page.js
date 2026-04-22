import Link from "next/link";
import Image from "next/image";

export default function InvestorRegistrationStep2() {
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
          <button className="text-[#136150] transition hover:opacity-80 font-bold">Save as Draft</button>
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
              <div className="w-10 h-10 rounded-full bg-[#0f3d32] text-white flex items-center justify-center font-bold text-sm shadow-sm ring-4 ring-[#f8f9fa]">
                2
              </div>
              <span className="text-xs font-bold text-[#0f3d32]">Profile</span>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#e9ecef] text-gray-500 flex items-center justify-center font-bold text-sm shadow-sm ring-4 ring-[#f8f9fa]">
                3
              </div>
              <span className="text-xs font-bold text-gray-400">Verification</span>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#e9ecef] text-gray-500 flex items-center justify-center font-bold text-sm shadow-sm ring-4 ring-[#f8f9fa]">
                4
              </div>
              <span className="text-xs font-bold text-gray-400">review</span>
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
          <div className="flex-grow lg:max-w-[650px]">
            <h1 className="text-4xl font-light text-[#0f3d32] mb-3 tracking-tight">Investor Type and Profile</h1>
            <p className="text-gray-500 mb-10 text-[15px]">Tell us about your investment background and preferences to match you with relevant Ethiopian startups.</p>

            <form className="flex flex-col gap-10">
              
              {/* Investor Type Section */}
              <section>
                <h3 className="text-lg font-bold text-[#0f3d32] mb-4">Investor Type</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {/* Selected Card */}
                  <label className="cursor-pointer border-2 border-[#136150] bg-[#f0f7f5] rounded-xl p-4 flex flex-col items-start gap-4 transition shadow-sm">
                    <input type="radio" name="investorType" className="hidden" defaultChecked />
                    <div className="text-[#136150]">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                    </div>
                    <span className="text-sm font-bold text-[#0f3d32]">Individual</span>
                  </label>
                  
                  {/* Unselected Cards */}
                  <label className="cursor-pointer border border-gray-200 bg-white rounded-xl p-4 flex flex-col items-start gap-4 transition shadow-sm hover:border-gray-300">
                    <input type="radio" name="investorType" className="hidden" />
                    <div className="text-[#136150]">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <span className="text-sm font-bold text-gray-700">Angel</span>
                  </label>

                  <label className="cursor-pointer border border-gray-200 bg-white rounded-xl p-4 flex flex-col items-start gap-4 transition shadow-sm hover:border-gray-300">
                    <input type="radio" name="investorType" className="hidden" />
                    <div className="text-[#136150]">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    </div>
                    <span className="text-sm font-bold text-gray-700">Venture Capital</span>
                  </label>

                  <label className="cursor-pointer border border-gray-200 bg-white rounded-xl p-4 flex flex-col items-start gap-4 transition shadow-sm hover:border-gray-300">
                    <input type="radio" name="investorType" className="hidden" />
                    <div className="text-[#136150]">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                    </div>
                    <span className="text-sm font-bold text-gray-700">Investment Co.</span>
                  </label>

                  <label className="cursor-pointer border border-gray-200 bg-white rounded-xl p-4 flex flex-col items-start gap-4 transition shadow-sm hover:border-gray-300">
                    <input type="radio" name="investorType" className="hidden" />
                    <div className="text-[#136150]">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                    </div>
                    <span className="text-sm font-bold text-gray-700">Corporate</span>
                  </label>

                  <label className="cursor-pointer border border-gray-200 bg-white rounded-xl p-4 flex flex-col items-start gap-4 transition shadow-sm hover:border-gray-300">
                    <input type="radio" name="investorType" className="hidden" />
                    <div className="text-[#136150]">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                    </div>
                    <span className="text-sm font-bold text-gray-700">Diaspora</span>
                  </label>
                </div>
              </section>

              {/* Investment Preferences Section */}
              <section>
                <h3 className="text-lg font-bold text-[#0f3d32] mb-6">Investment Preferences</h3>
                
                <div className="flex flex-col gap-6">
                  
                  {/* Sectors */}
                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-3">Preferred Sectors</label>
                    <div className="flex flex-wrap gap-2">
                       <button type="button" className="bg-[#0f2c25] text-white px-4 py-2 rounded-full text-xs font-bold">Fintech</button>
                       <button type="button" className="bg-[#d1e7dd] text-[#136150] px-4 py-2 rounded-full text-xs font-bold hover:bg-[#c3dfd3] transition">AgriTech</button>
                       <button type="button" className="bg-[#d1e7dd] text-[#136150] px-4 py-2 rounded-full text-xs font-bold hover:bg-[#c3dfd3] transition">Logistics</button>
                       <button type="button" className="bg-[#d1e7dd] text-[#136150] px-4 py-2 rounded-full text-xs font-bold hover:bg-[#c3dfd3] transition">HealthTech</button>
                       <button type="button" className="bg-[#d1e7dd] text-[#136150] px-4 py-2 rounded-full text-xs font-bold hover:bg-[#c3dfd3] transition">EdTech</button>
                       <button type="button" className="bg-[#d1e7dd] text-[#136150] px-4 py-2 rounded-full text-xs font-bold hover:bg-[#c3dfd3] transition">Energy</button>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2.5">Startup Stage</label>
                      <div className="relative">
                        <select className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#136150] transition text-sm appearance-none text-gray-800 shadow-sm">
                          <option value="series-a">Series A</option>
                          <option value="seed">Seed</option>
                          <option value="pre-seed">Pre-Seed</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2.5">Investment Range (USD)</label>
                      <div className="relative">
                        <select className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#136150] transition text-sm appearance-none text-gray-800 shadow-sm">
                          <option value="250k-1m">$250k - $1M</option>
                          <option value="under-250k">Under $250k</option>
                          <option value="over-1m">Over $1M</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2.5">Location Preference</label>
                      <div className="relative">
                        <select className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#136150] transition text-sm appearance-none text-gray-800 shadow-sm">
                          <option value="addis-ababa">Addis Ababa</option>
                          <option value="regional">Regional Ethiopia</option>
                          <option value="any">Anywhere</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2.5">LinkedIn or Website</label>
                      <input 
                        type="text" 
                        placeholder="https://linkedin.com/in/..." 
                        className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#136150] transition text-sm text-gray-800 placeholder-gray-400 shadow-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2.5">Short Professional Bio</label>
                    <textarea 
                      rows="4" 
                      placeholder="Briefly describe your investment philosophy and previous experience..." 
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#136150] transition text-sm resize-none shadow-sm text-gray-800 placeholder-gray-400"
                    ></textarea>
                  </div>

                </div>
              </section>

              {/* Bottom Actions */}
              <div className="flex justify-between items-center mt-6 pt-8 border-t border-gray-200">
                <Link href="/register/investor" className="flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-[#136150] transition">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                  Back
                </Link>
                <Link href="/register/investor/step3" className="px-8 py-3.5 bg-[#0f3d32] hover:bg-[#0a2921] text-white font-bold rounded shadow-md transition text-sm flex items-center gap-2">
                  Continue to Profile
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </Link>
              </div>

            </form>
          </div>

          {/* Right Column (Info Card) */}
          <div className="lg:w-[400px] shrink-0 pt-2 lg:sticky lg:top-8 self-start">
            
            {/* Security Card */}
            <div className="bg-[#0f3d32] rounded-xl p-8 relative overflow-hidden text-white shadow-xl">
              <div className="w-10 h-10 bg-[#165042] rounded-full flex items-center justify-center mb-6 relative z-10 border border-[#216554]">
                <svg className="w-5 h-5 text-[#4ade80]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              
              <h3 className="text-xl font-bold mb-4 relative z-10">Your security is our priority</h3>
              <p className="text-sm text-[#8ba39e] leading-relaxed mb-8 relative z-10 font-medium">
                We use military-grade encryption and secure vault protocols to protect your investment data and identity. Only verified stakeholders can access sensitive information.
              </p>
              
              <div className="flex flex-col gap-3 relative z-10">
                <div className="flex items-center gap-2 text-xs font-bold text-[#4ade80]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  End-to-end encryption
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#4ade80]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Sovereign data protection
                </div>
              </div>
            </div>

          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white py-8 px-6 md:px-12 w-full mt-auto border-t border-gray-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-[#0f3d32] font-bold uppercase tracking-widest">&copy; 2024 STARTUPCONNECT ETHIOPIA. SOVEREIGN INVESTMENT PORTAL.</p>
          
          <div className="flex flex-wrap gap-6 text-[10px] font-bold text-gray-400 hover:text-gray-600 uppercase tracking-widest transition">
            <Link href="#" className="hover:text-[#136150] transition">Support</Link>
            <Link href="#" className="hover:text-[#136150] transition">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#136150] transition">Institutional Terms</Link>
            <Link href="#" className="hover:text-[#136150] transition">Investment Guidelines</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
