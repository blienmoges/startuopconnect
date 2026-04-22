import Link from "next/link";
import Image from "next/image";

export default function MentorRegistrationStep2() {
  return (
    <div className="min-h-screen bg-[#f9fafb] font-sans text-gray-900 flex">
      
      {/* Left Sidebar (Dark Green graphic) */}
      <div className="hidden lg:flex w-[40%] bg-[#061e16] relative overflow-hidden flex-col justify-between py-12 px-12">
        {/* Abstract Green Light Beams / Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#061e16]"></div>
          {/* Faux light beams using rotated divs */}
          <div className="absolute top-[-10%] left-[10%] w-[150%] h-[30px] bg-[#10b981] opacity-20 transform -rotate-45 blur-md"></div>
          <div className="absolute top-[10%] left-[10%] w-[150%] h-[40px] bg-[#10b981] opacity-20 transform -rotate-45 blur-md"></div>
          <div className="absolute top-[30%] left-[0%] w-[150%] h-[20px] bg-[#10b981] opacity-25 transform -rotate-45 blur-md"></div>
          <div className="absolute top-[50%] left-[-10%] w-[150%] h-[60px] bg-[#10b981] opacity-15 transform -rotate-45 blur-xl"></div>
          <div className="absolute top-[70%] left-[-20%] w-[150%] h-[25px] bg-[#10b981] opacity-30 transform -rotate-45 blur-md"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#061e16]/80 via-transparent to-[#061e16]/90"></div>
        </div>

        <div className="relative z-10">
          <Link href="/" className="flex items-center gap-2 mb-16">
            <svg className="w-5 h-5 text-[#10b981]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2zm0 3.5L18.5 19H5.5L12 5.5z"/></svg>
            <span className="font-bold text-lg text-white tracking-tight">StartupConnect Ethiopia</span>
          </Link>
          
          <h1 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
            Empower the <br/> Next Generation <br/> of Ethiopian <br/> Founders
          </h1>
          <p className="text-[#8ba39e] text-sm leading-relaxed max-w-sm font-medium">
            Join a prestigious network of industry leaders shaping the future of Ethiopia's innovation ecosystem through high-impact mentorship.
          </p>
        </div>

        <div className="relative z-10 border-t border-[#ffffff15] pt-8 mt-12 pr-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-10 h-10 rounded-full bg-blue-500 overflow-hidden shrink-0 flex items-center justify-center text-white text-xs font-bold">
              SF
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Solomon Fikrey</h4>
              <p className="text-[#10b981] text-xs">Ex-Director Safaricom M-Pesa, <br/>Angel Investor</p>
            </div>
          </div>
          <p className="text-[#8ba39e] text-xs leading-relaxed italic">
            "Guiding young founders at StartupConnect doesn't just help them build better KPIs or pitch decks. It gives me a direct pulse on the incredible ingenuity emerging from Addis and verifies the pure tech talent high-value startups are built on."
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="w-full lg:w-[60%] flex flex-col pt-10 pb-6 px-4 md:px-8 overflow-y-auto">
        
        {/* Progress Stepper */}
         <div className="w-full max-w-2xl mx-auto mb-8 px-4">
          <div className="relative flex justify-between items-center">
            {/* Connecting Line */}
            <div className="absolute left-[10%] right-[10%] h-[2px] bg-gray-200 -z-10">
               <div className="h-full bg-[#0f3d32]" style={{ width: '50%' }}></div>
            </div>
            
            {/* Step 1 */}
            <div className="flex items-center gap-2 bg-[#f9fafb] pr-2">
              <div className="w-6 h-6 rounded-full bg-[#0f3d32] text-white flex items-center justify-center font-bold text-[10px] shadow-sm">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest hidden sm:inline-block">Account Info</span>
            </div>

            {/* Step 2 */}
            <div className="flex items-center gap-2 bg-[#f9fafb] px-2 shadow-[0_0_0_4px_#f9fafb]">
              <div className="w-6 h-6 rounded-full bg-[#0f3d32] text-white flex items-center justify-center font-bold text-[10px] shadow-sm">
                2
              </div>
              <span className="text-[10px] font-bold text-[#0f3d32] uppercase tracking-widest hidden sm:inline-block">Professional</span>
            </div>

            {/* Step 3 */}
            <div className="flex items-center gap-2 bg-[#f9fafb] pl-2 shadow-[0_0_0_4px_#f9fafb]">
              <div className="w-6 h-6 rounded-full bg-[#e9ecef] text-gray-400 flex items-center justify-center font-bold text-[10px] shadow-sm">
                3
              </div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest hidden sm:inline-block">Verification</span>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 flex-grow">
          
          <h2 className="text-2xl font-bold text-[#0f3d32] mb-2">Professional Mentor Details</h2>
          <p className="text-gray-500 text-xs mb-10">Help startups understand your expertise, mentoring style, and the value you bring to the table.</p>

          <form className="flex flex-col gap-6">
            
            {/* Roles */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2">Current Organization</label>
                <input type="text" placeholder="e.g. Safaricom Inc" className="w-full px-4 py-3 bg-[#f8f9fa] border-none rounded-lg focus:ring-2 focus:ring-[#10b981] text-xs text-gray-800 outline-none" />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2">Current Title</label>
                <input type="text" placeholder="e.g. Chief Product Officer" className="w-full px-4 py-3 bg-[#f8f9fa] border-none rounded-lg focus:ring-2 focus:ring-[#10b981] text-xs text-gray-800 outline-none" />
              </div>
            </div>

            {/* Industries */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2">Primary Industry</label>
                <select className="w-full px-4 py-3 bg-[#f8f9fa] border-none rounded-lg focus:ring-2 focus:ring-[#10b981] text-xs text-gray-800 outline-none appearance-none">
                  <option value="">Select Industry</option>
                  <option value="fintech">Fintech</option>
                  <option value="telecom">Telecommunications</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2">Secondary Industry</label>
                <select className="w-full px-4 py-3 bg-[#f8f9fa] border-none rounded-lg focus:ring-2 focus:ring-[#10b981] text-xs text-gray-800 outline-none appearance-none">
                  <option value="">Select Industry</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="agritech">Agritech</option>
                </select>
              </div>
            </div>

            {/* Categories */}
            <div>
              <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-3">Mentorship Categories</label>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 text-[10px] font-bold cursor-pointer hover:border-gray-300 transition">Product Strategy</span>
                <span className="px-3 py-1.5 rounded-full bg-[#e8f5e9] text-[#136150] border border-[#a5d6a7] text-[10px] font-bold cursor-pointer">Business Model</span>
                <span className="px-3 py-1.5 rounded-full bg-[#e8f5e9] text-[#136150] border border-[#a5d6a7] text-[10px] font-bold cursor-pointer">Fundraising</span>
                <span className="px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 text-[10px] font-bold cursor-pointer hover:border-gray-300 transition">Market Entry</span>
                <span className="px-3 py-1.5 rounded-full bg-[#e8f5e9] text-[#136150] border border-[#a5d6a7] text-[10px] font-bold cursor-pointer">Operations</span>
                <span className="px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 text-[10px] font-bold cursor-pointer hover:border-gray-300 transition">Leadership</span>
                <span className="px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 text-[10px] font-bold cursor-pointer hover:border-gray-300 transition">Technology</span>
                <span className="px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 text-[10px] font-bold cursor-pointer hover:border-gray-300 transition">Other</span>
              </div>
            </div>

            {/* Startup Stage */}
            <div>
              <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-3">Preferred Startup Stage</label>
              <div className="grid grid-cols-3 gap-3">
                <label className="flex items-center gap-2 p-2.5 rounded-lg border border-[#a5d6a7] bg-[#e8f5e9] cursor-pointer">
                  <input type="checkbox" className="w-3.5 h-3.5 text-[#136150] rounded focus:ring-[#136150]" defaultChecked />
                  <span className="text-[10px] font-bold text-[#136150]">Idea</span>
                </label>
                <label className="flex items-center gap-2 p-2.5 rounded-lg border border-[#a5d6a7] bg-[#e8f5e9] cursor-pointer">
                  <input type="checkbox" className="w-3.5 h-3.5 text-[#136150] rounded focus:ring-[#136150]" defaultChecked />
                  <span className="text-[10px] font-bold text-[#136150]">MVP</span>
                </label>
                <label className="flex items-center gap-2 p-2.5 rounded-lg border border-gray-200 bg-white cursor-pointer hover:border-gray-300 transition">
                  <input type="checkbox" className="w-3.5 h-3.5 text-[#136150] rounded focus:ring-[#136150]" />
                  <span className="text-[10px] font-bold text-gray-700">Early Revenue</span>
                </label>
                <label className="flex items-center gap-2 p-2.5 rounded-lg border border-gray-200 bg-white cursor-pointer hover:border-gray-300 transition">
                  <input type="checkbox" className="w-3.5 h-3.5 text-[#136150] rounded focus:ring-[#136150]" />
                  <span className="text-[10px] font-bold text-gray-700">Growth</span>
                </label>
                <label className="flex items-center gap-2 p-2.5 rounded-lg border border-gray-200 bg-white cursor-pointer hover:border-gray-300 transition">
                  <input type="checkbox" className="w-3.5 h-3.5 text-[#136150] rounded focus:ring-[#136150]" />
                  <span className="text-[10px] font-bold text-gray-700">Scale Up</span>
                </label>
              </div>
            </div>

            {/* Location & Platform */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2">City / Location</label>
                <select className="w-full px-4 py-3 bg-[#f8f9fa] border-none rounded-lg focus:ring-2 focus:ring-[#10b981] text-xs text-gray-800 outline-none appearance-none">
                  <option value="addis-ababa">Addis Ababa</option>
                  <option value="remote">Remote (Global)</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-3">Mentor Platform</label>
                <div className="flex gap-6 mt-1">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="platform" className="w-4 h-4 text-[#0f3d32] focus:ring-[#0f3d32]" defaultChecked />
                    <span className="text-xs font-bold text-gray-800">Remote</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="platform" className="w-4 h-4 text-[#0f3d32] focus:ring-[#0f3d32]" />
                    <span className="text-xs font-bold text-gray-800">In-person</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Availability Days */}
            <div>
              <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2">Availability Days</label>
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded bg-[#f8f9fa] border border-gray-200 flex items-center justify-center text-xs font-bold text-gray-500 cursor-pointer">M</div>
                <div className="w-8 h-8 rounded bg-[#0f3d32] text-white flex items-center justify-center text-xs font-bold shadow-sm cursor-pointer border border-[#0f3d32]">T</div>
                <div className="w-8 h-8 rounded bg-[#f8f9fa] border border-gray-200 flex items-center justify-center text-xs font-bold text-gray-500 cursor-pointer">W</div>
                <div className="w-8 h-8 rounded bg-[#0f3d32] text-white flex items-center justify-center text-xs font-bold shadow-sm cursor-pointer border border-[#0f3d32]">T</div>
                <div className="w-8 h-8 rounded bg-[#f8f9fa] border border-gray-200 flex items-center justify-center text-xs font-bold text-gray-500 cursor-pointer">F</div>
                <div className="w-8 h-8 rounded bg-[#f8f9fa] border border-gray-200 flex items-center justify-center text-xs font-bold text-gray-500 cursor-pointer">S</div>
                <div className="w-8 h-8 rounded bg-[#f8f9fa] border border-gray-200 flex items-center justify-center text-xs font-bold text-gray-500 cursor-pointer">S</div>
              </div>
            </div>

            {/* Frequency & Times */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2">Session Frequency</label>
                <select className="w-full px-4 py-3 bg-[#f8f9fa] border-none rounded-lg focus:ring-2 focus:ring-[#10b981] text-xs text-gray-800 outline-none appearance-none">
                  <option value="biweekly">Biweekly (Recommended)</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2">Preferred Time Slots</label>
                <input type="text" placeholder="e.g. 5:00 PM - 7:00 PM EAT" className="w-full px-4 py-3 bg-[#f8f9fa] border-none rounded-lg focus:ring-2 focus:ring-[#10b981] text-xs text-gray-800 outline-none" />
              </div>
            </div>

            {/* Long Text Areas */}
            <div>
              <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2">Mentoring Style / Approach</label>
              <textarea rows="2" placeholder="Briefly describe your history with mentoring individuals or teams..." className="w-full px-4 py-3 bg-[#f8f9fa] border-none rounded-lg focus:ring-2 focus:ring-[#10b981] text-xs text-gray-800 outline-none resize-none"></textarea>
            </div>
            
            <div>
              <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2">Notable Startups / Projects Mentored</label>
              <textarea rows="2" placeholder="List companies or major projects you have advised..." className="w-full px-4 py-3 bg-[#f8f9fa] border-none rounded-lg focus:ring-2 focus:ring-[#10b981] text-xs text-gray-800 outline-none resize-none"></textarea>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2">Key Achievements</label>
              <textarea rows="2" placeholder="What are the key achievements in your professional career?" className="w-full px-4 py-3 bg-[#f8f9fa] border-none rounded-lg focus:ring-2 focus:ring-[#10b981] text-xs text-gray-800 outline-none resize-none"></textarea>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2">Media / Press Links (Optional)</label>
              <textarea rows="2" placeholder="Blogs, published articles (e.g. Tech Crunch link with major exclusive launch)" className="w-full px-4 py-3 bg-[#f8f9fa] border-none rounded-lg focus:ring-2 focus:ring-[#10b981] text-xs text-gray-800 outline-none resize-none"></textarea>
            </div>

            {/* Video Upload */}
            <div>
              <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2">Introduction Video (Optional)</label>
              <div className="border border-dashed border-[#b6e2d1] bg-[#f0fdf7] rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-[#e0f8eb] transition">
                <div className="w-8 h-8 rounded-full bg-[#dcfce7] flex items-center justify-center text-[#10b981] mb-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                </div>
                <h4 className="text-[11px] font-bold text-[#0f3d32] mb-0.5">Upload a short video</h4>
                <p className="text-[9px] text-gray-500 font-medium">Let the founders know your mentoring philosophy and what you look...</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-100">
               <Link href="/register/mentor" className="text-xs font-bold text-gray-500 hover:text-[#0f3d32] transition flex items-center gap-1.5 px-4 py-2">
                 <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                 Back
               </Link>
               <Link href="/register/mentor/step3" className="bg-[#0f3d32] hover:bg-[#0a2921] text-white text-xs font-bold py-3 px-6 rounded-lg transition shadow-md flex items-center gap-2">
                 Continue to Verification
               </Link>
            </div>

          </form>
          
        </div>

        {/* Form area footer text */}
        <div className="w-full max-w-2xl mx-auto mt-6 text-center">
            <p className="text-[9px] text-gray-400 font-medium max-w-sm mx-auto leading-relaxed">
              By clicking continue, you confirm that all information provided is accurate and verifiable. You will be held accountable closely by your investors on StartupConnect Ethiopia.
            </p>
        </div>

        {/* Global Footer (Right column) */}
        <div className="w-full max-w-2xl mx-auto mt-12 flex justify-between items-center px-4">
          <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">&copy; 2024 StartupConnect Ethiopia. All rights reserved.</p>
          <div className="flex gap-4 text-[9px] text-gray-400 font-bold uppercase tracking-widest">
            <Link href="#" className="hover:text-gray-600 transition">Privacy Policy</Link>
            <Link href="#" className="hover:text-gray-600 transition">Terms of Use</Link>
          </div>
        </div>

      </div>
    </div>
  );
}
