import Link from "next/link";

export default function StartupRegistrationStep2() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 flex flex-col lg:flex-row">
      
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

      {/* Main Content Area */}
      <div className="w-full lg:w-[60%] flex flex-col pt-10 pb-6 px-4 md:px-8 overflow-y-auto">
        <div className="w-full max-w-2xl mx-auto flex flex-col">
          <div className="flex items-center gap-3 mb-4 pl-6">
            <Link href="/register/startup" className="text-[#167b66] hover:text-[#0f5c4a] transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
            </Link>
            <span className="font-bold text-lg tracking-tight text-[#115b4c]">
              Company Details
            </span>
          </div>

            <div className="mb-10 pl-6">
              <div className="flex items-center gap-8">
                <span className="text-xs font-bold text-gray-500 tracking-wider uppercase">Step 2 of 4</span>
                <div className="flex gap-1.5 ml-auto mr-4">
                  <div className="h-1.5 w-6 bg-gray-200 rounded-full"></div>
                  <div className="h-1.5 w-6 bg-[#167b66] rounded-full"></div>
                  <div className="h-1.5 w-6 bg-gray-200 rounded-full"></div>
                  <div className="h-1.5 w-6 bg-gray-200 rounded-full"></div>
                </div>
              </div>
            </div>

            <form className="flex flex-col gap-8">

              {/* SECTION: Identity */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-[#8b4513]"></div>
                  <h2 className="text-lg font-bold text-[#115b4c]">Identity</h2>
                </div>

                <div className="bg-[#f8f9fa] p-6 rounded-xl border border-gray-100 flex flex-col gap-5">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-gray-800 mb-2">Startup name</label>
                      <input
                        type="text"
                        placeholder="e.g. Axum Pay"
                        className="w-full px-4 py-3 bg-white border border-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-[#167b66] transition text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-800 mb-2">Sector / Industry</label>
                      <div className="relative">
                        <select className="w-full px-4 py-3 bg-white border border-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-[#167b66] transition text-sm appearance-none text-gray-600">
                          <option value="">Select Sector</option>
                          <option value="agritech">AgriTech</option>
                          <option value="fintech">FinTech</option>
                          <option value="healthtech">HealthTech</option>
                          <option value="edtech">EdTech</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-800 mb-2">Startup tagline</label>
                    <input
                      type="text"
                      placeholder="The digital future of Ethiopia in one sentence"
                      className="w-full px-4 py-3 bg-white border border-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-[#167b66] transition text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* SECTION: Status */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-[#40e0d0]"></div>
                  <h2 className="text-lg font-bold text-[#115b4c]">Status</h2>
                </div>

                <div className="bg-[#f8f9fa] p-6 rounded-xl border border-gray-100 grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-800 mb-2">Startup stage</label>
                    <div className="relative">
                      <select className="w-full px-4 py-3 bg-white border border-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-[#167b66] transition text-sm appearance-none text-gray-600">
                        <option value="">Select Stage</option>
                        <option value="idea">Idea Stage</option>
                        <option value="pre-seed">Pre-Seed</option>
                        <option value="seed">Seed</option>
                        <option value="early">Early Growth</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-800 mb-2">Startup type</label>
                    <div className="relative">
                      <select className="w-full px-4 py-3 bg-white border border-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-[#167b66] transition text-sm appearance-none text-gray-600">
                        <option value="">Select Type</option>
                        <option value="b2b">B2B (Business to Business)</option>
                        <option value="b2c">B2C (Business to Consumer)</option>
                        <option value="b2g">B2G (Business to Gov)</option>
                        <option value="marketplace">Marketplace</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION: Details */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-[#167b66]"></div>
                  <h2 className="text-lg font-bold text-[#115b4c]">Details</h2>
                </div>

                <div className="bg-[#f8f9fa] p-6 rounded-xl border border-gray-100 flex flex-col gap-5">
                  <div className="grid grid-cols-3 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-gray-800 mb-2">Year founded</label>
                      <input
                        type="text"
                        placeholder="2024"
                        className="w-full px-4 py-3 bg-white border border-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-[#167b66] transition text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-800 mb-2">Region</label>
                      <input
                        type="text"
                        placeholder="Addis Ababa"
                        className="w-full px-4 py-3 bg-white border border-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-[#167b66] transition text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-800 mb-2">City</label>
                      <input
                        type="text"
                        placeholder="Bole"
                        className="w-full px-4 py-3 bg-white border border-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-[#167b66] transition text-sm"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-gray-800 mb-2">Number of team members</label>
                      <input
                        type="text"
                        placeholder="1-5"
                        className="w-full px-4 py-3 bg-white border border-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-[#167b66] transition text-sm"
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-xs font-bold text-gray-800 mb-2">Founder role</label>
                      <input
                        type="text"
                        placeholder="CEO, CTO, Lead Engineer..."
                        className="w-full px-4 py-3 bg-white border border-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-[#167b66] transition text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION: Socials & Description */}
              {/* <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-[#167b66]"></div>
                  <h2 className="text-lg font-bold text-[#115b4c]">Socials & Description</h2>
                </div>
                
                <div className="bg-[#f8f9fa] p-6 rounded-xl border border-gray-100 flex flex-col gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-800 mb-2">Website or social link</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                      </div>
                      <input 
                        type="url" 
                        placeholder="https://" 
                        className="w-full pl-10 pr-4 py-3 bg-white border border-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-[#167b66] transition text-sm text-gray-600"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-800 mb-2">Short startup description</label>
                    <textarea 
                      rows="4" 
                      placeholder="Tell us about your mission, problem you're solving, and your solution..." 
                      className="w-full px-4 py-3 bg-white border border-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-[#167b66] transition text-sm resize-none"
                    ></textarea>
                  </div>
                </div>
              </div> */}

              {/* Action Buttons */}
              <div className="flex items-center gap-4 mt-4 pb-12">
                <Link href="/register/startup/step3" className="px-8 py-4 flex justify-center items-center bg-[#0f5c4a] hover:bg-[#0c4a3b] text-white font-bold rounded-lg shadow-md transition text-sm min-w-[200px]">
                  Continue to Step 3
                </Link>
                <div className="flex items-center gap-3 bg-[#f0f7f6] py-3.5 px-5 rounded-lg text-xs text-[#0f5c4a] flex-grow">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  Note: You will be asked to upload project files like your pitch deck and business plan in Step 4.
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
}
