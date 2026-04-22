import Link from "next/link";

export default function StartupRegistrationStep2() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] font-sans text-gray-900 flex flex-col">
      {/* Minimal Header */}
      <header className="border-b border-gray-100 py-4 px-6 md:px-12 flex justify-between items-center bg-white sticky top-0 z-10 w-full">
        {/* Back navigation & Title */}
        <div className="flex items-center gap-3">
          <Link href="/register/startup" className="text-[#167b66] hover:text-[#0f5c4a] transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
          </Link>
          <span className="font-bold text-lg tracking-tight text-[#115b4c]">
            Company Details
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

      {/* Main Registration Content */}
      <main className="flex-grow flex justify-center py-12 px-4 sm:px-6">
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20">

          {/* Left Column: Form Section */}
          <div className="md:col-span-8 flex flex-col">

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

          {/* Right Column: Guide Info */}
          <div className="md:col-span-4 flex flex-col pt-2">

            {/* Guide Card */}
            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] sticky top-28">
              <h3 className="text-[#115b4c] text-xl font-extrabold mb-4">Registration Guide</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                Complete your profile to unlock access to Ethiopia's premier network of investors and mentors. Precise company details improve your visibility.
              </p>

              {/* Feature 1 */}
              <div className="flex gap-4 mb-6">
                <div className="w-10 h-10 bg-[#feedd8] rounded-lg flex items-center justify-center text-[#d97736] flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900 mb-1">Data Verification</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Information will be verified by our curators within 48 hours.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4 mb-10">
                <div className="w-10 h-10 bg-[#e6effc] rounded-lg flex items-center justify-center text-[#3b82f6] flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900 mb-1">Private & Secure</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Your detailed business metrics are only visible to verified investors.
                  </p>
                </div>
              </div>

              {/* Illustration placeholder */}
              <div className="flex flex-col items-center justify-center mt-6">
                <div className="relative w-48 h-32 bg-[#fafafa] rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-[#e2e8f0]">
                    {/* SVG placeholder for two people sitting and talking */}
                    <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                    </svg>
                  </div>
                  <div className="absolute -bottom-3 px-4 py-1 bg-[#fef0db] rounded-full shadow-sm">
                    <span className="text-[#a64e12] font-extrabold text-[10px] tracking-widest">COMMUNITY</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-gray-400 mt-2 tracking-widest uppercase text-center block">JOIN 500+ STARTUPS</span>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
