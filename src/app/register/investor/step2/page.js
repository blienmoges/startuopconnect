import Link from "next/link";
import Image from "next/image";

export default function InvestorRegistrationStep2() {
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
            <Link href="/register/investor" className="text-[#167b66] hover:text-[#0f5c4a] transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
            </Link>
            <span className="font-bold text-lg tracking-tight text-[#115b4c]">
              Investor Profile
            </span>
          </div>

          <div className="mb-8">
            <h1 className="text-3xl font-extrabold text-[#115b4c] tracking-tight mb-2">Investor Type and Profile</h1>
            <p className="text-gray-500 mb-10 text-[15px]">Tell us about your investment background and preferences to match you with relevant Ethiopian startups.</p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-xs font-bold text-gray-400 tracking-wider uppercase">Step 2 of 5</span>
              <div className="flex gap-1.5">
                <div className="h-1.5 w-6 bg-[#167b66] rounded-full"></div>
                <div className="h-1.5 w-6 bg-[#167b66] rounded-full"></div>
                <div className="h-1.5 w-6 bg-gray-200 rounded-full"></div>
                <div className="h-1.5 w-6 bg-gray-200 rounded-full"></div>
                <div className="h-1.5 w-6 bg-gray-200 rounded-full"></div>
              </div>
            </div>
          </div>

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
        </div>
      </div>
  );
}
