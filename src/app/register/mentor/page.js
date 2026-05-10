import Link from "next/link";
import Image from "next/image";

export default function MentorRegistration() {
  return (
    <div className="min-h-screen bg-[#f3f4f6] font-sans text-gray-900 flex flex-col md:flex-row">
      
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
      <div className="w-full lg:w-[60%] flex flex-col items-center py-12 px-4 sm:px-6 overflow-y-auto">
        
        <div className="w-full max-w-3xl flex flex-col items-center">
          
          {/* Progress Stepper */}
          <div className="w-full max-w-md mb-10 px-4">
            <div className="relative flex justify-between items-start">
              {/* Connecting Line */}
              <div className="absolute top-4 left-8 right-8 h-[2px] bg-gray-200 -z-10"></div>
              
              {/* Step 1 */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#0f3d32] text-white flex items-center justify-center font-bold text-xs ring-4 ring-[#f3f4f6]">
                  1
                </div>
                <span className="text-[10px] font-bold text-[#0f3d32]">Account Info</span>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#e5e7eb] text-gray-500 flex items-center justify-center font-bold text-xs ring-4 ring-[#f3f4f6]">
                  2
                </div>
                <span className="text-[10px] font-medium text-gray-400">Professional</span>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#e5e7eb] text-gray-500 flex items-center justify-center font-bold text-xs ring-4 ring-[#f3f4f6]">
                  3
                </div>
                <span className="text-[10px] font-medium text-gray-400">Review</span>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#e5e7eb] text-gray-500 flex items-center justify-center font-bold text-xs ring-4 ring-[#f3f4f6]">
                  4
                </div>
                <span className="text-[10px] font-medium text-gray-400">Verification</span>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="w-full bg-white rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.03)] p-8 sm:p-12 mb-10 border border-gray-100">
            
            <div className="text-center mb-10">
              <h1 className="text-3xl font-bold text-[#0f3d32] mb-3">Create Mentor Profile</h1>
              <p className="text-gray-500 text-sm">Share your expertise and help drive innovation in Ethiopia</p>
            </div>

            <form className="flex flex-col gap-6 w-full">
              
              {/* Phone Number */}
              <div>
                <label className="block text-xs font-bold text-gray-900 mb-2">Phone Number</label>
                <input 
                  type="text" 
                  placeholder="+251 911..." 
                  className="w-full px-4 py-3.5 bg-[#f0f2f5] border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-[#136150] transition text-sm text-gray-800 placeholder-gray-400"
                />
              </div>

              {/* Professional Title */}
              <div>
                <label className="block text-xs font-bold text-gray-900 mb-2">Professional Title</label>
                <input 
                  type="text" 
                  placeholder="e.g. Senior Software Engineer" 
                  className="w-full px-4 py-3.5 bg-[#f0f2f5] border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-[#136150] transition text-sm text-gray-800 placeholder-gray-400"
                />
              </div>

              {/* Experience & Languages */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-900 mb-2">Years of Experience</label>
                  <div className="relative">
                    <select className="w-full px-4 py-3.5 bg-[#f0f2f5] border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-[#136150] transition text-sm appearance-none text-gray-800">
                      <option value="5-10">5 - 10 years</option>
                      <option value="1-4">1 - 4 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-900 mb-2">Languages</label>
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2 flex-wrap mb-1">
                      <span className="bg-[#bdf0db] text-[#136150] px-3 py-1.5 rounded-md text-xs font-bold flex items-center gap-1.5">
                        Amharic <button type="button" className="opacity-60 hover:opacity-100 transition"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>
                      </span>
                      <span className="bg-[#bdf0db] text-[#136150] px-3 py-1.5 rounded-md text-xs font-bold flex items-center gap-1.5">
                        English <button type="button" className="opacity-60 hover:opacity-100 transition"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>
                      </span>
                    </div>
                    <input 
                      type="text" 
                      placeholder="Add another..." 
                      className="w-full px-4 py-2 bg-[#f0f2f5] border-none rounded focus:outline-none focus:ring-2 focus:ring-[#136150] transition text-sm text-gray-800 placeholder-gray-400"
                    />
                  </div>
                </div>
              </div>

              {/* Expertise Areas */}
              <div>
                <label className="block text-xs font-bold text-gray-900 mb-2">Expertise Areas</label>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-[#bdf0db] text-[#136150] px-3 py-1.5 rounded-md text-xs font-bold flex items-center gap-1.5">
                    Fintech Strategy <button type="button" className="opacity-60 hover:opacity-100 transition"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>
                  </span>
                  <span className="bg-[#bdf0db] text-[#136150] px-3 py-1.5 rounded-md text-xs font-bold flex items-center gap-1.5">
                    Scaling Teams <button type="button" className="opacity-60 hover:opacity-100 transition"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>
                  </span>
                  <button type="button" className="border border-dashed border-[#136150] text-[#136150] px-3 py-1.5 rounded-md text-xs font-bold flex items-center gap-1.5 hover:bg-[#f0f7f5] transition">
                    + Add Expertise
                  </button>
                </div>
              </div>

              {/* Professional Bio */}
              <div>
                <label className="block text-xs font-bold text-gray-900 mb-2">Professional Bio</label>
                <textarea 
                  rows="4" 
                  placeholder="Briefly describe your journey and how you can help startups..." 
                  className="w-full px-4 py-3 bg-[#f0f2f5] border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-[#136150] transition text-sm resize-none text-gray-800 placeholder-gray-400"
                ></textarea>
              </div>

              {/* LinkedIn URL */}
              <div>
                <label className="block text-xs font-bold text-gray-900 mb-2">LinkedIn/Portfolio URL</label>
                <input 
                  type="text" 
                  placeholder="https://linkedin.com/in/..." 
                  className="w-full px-4 py-3.5 bg-[#f0f2f5] border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-[#136150] transition text-sm text-gray-800 placeholder-gray-400"
                />
              </div>

              {/* Certifications & Credentials */}
              <div>
                <label className="block text-xs font-bold text-gray-900 mb-2">Certifications & Credentials</label>
                <div className="border border-dashed border-gray-300 bg-[#fafafa] hover:bg-[#f0f2f5] transition rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer">
                  <svg className="w-6 h-6 text-gray-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4m0 0l-2-2m2 2l2-2"></path></svg>
                  <h4 className="font-bold text-gray-900 text-xs mb-1">Drag and drop files here</h4>
                  <p className="text-[10px] text-gray-500">PDF, JPG up to 10MB</p>
                </div>
              </div>

              {/* Availability & Pricing */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-900 mb-2">Availability Preference</label>
                  <div className="relative">
                    <select className="w-full px-4 py-3.5 bg-[#f0f2f5] border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-[#136150] transition text-sm appearance-none text-gray-800">
                      <option value="1-2">1-2 hours / week</option>
                      <option value="3-5">3-5 hours / week</option>
                      <option value="5+">5+ hours / week</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-900 mb-2">Optional Session Pricing (ETB)</label>
                  <div className="flex">
                    <div className="bg-[#e5e7eb] px-4 py-3.5 rounded-l-lg text-xs font-bold text-gray-600 border-r border-[#d1d5db] shrink-0 flex items-center justify-center">
                      ETB
                    </div>
                    <input 
                      type="text" 
                      placeholder="0.00" 
                      className="w-full px-4 py-3.5 bg-[#f0f2f5] border-none rounded-r-lg focus:outline-none focus:ring-2 focus:ring-[#136150] transition text-sm text-gray-800 placeholder-gray-400"
                    />
                  </div>
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="bg-[#f8f9fa] rounded-lg p-5 mt-2 border border-gray-100">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="mt-0.5 w-4 h-4 text-[#136150] border-gray-300 rounded focus:ring-[#136150]" />
                  <span className="text-[11px] text-gray-600 leading-snug">
                    I agree to the <span className="font-bold">Terms of Service</span> and <span className="font-bold">Privacy Policy</span>. I certify that all professional information provided is accurate and verifiable.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <Link href="/register/mentor/step2" className="w-full py-4 bg-[#053023] hover:bg-[#032017] text-white font-bold rounded-lg shadow-xl shadow-[#053023]/20 transition text-sm mt-4 flex items-center justify-center">
                Continue to Professional
              </Link>
              
              <p className="text-center text-xs text-gray-500 mt-2">
                Already have an account? <Link href="/login" className="font-bold text-[#053023] hover:underline">Sign in</Link>
              </p>

            </form>
          </div>

          {/* Footer inside main column */}
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-gray-500 px-2 mt-4">
            <div className="text-[#053023] text-sm tracking-tight font-black">
              Mentor<span className="font-medium">Portal</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 uppercase tracking-widest">
              <Link href="#" className="hover:text-[#136150] transition">Privacy Policy</Link>
              <Link href="#" className="hover:text-[#136150] transition">Institutional Terms</Link>
              <Link href="#" className="hover:text-[#136150] transition">Accessibility</Link>
              <Link href="#" className="hover:text-[#136150] transition">Contact Registry</Link>
            </div>

            <p>&copy; 2024 Mentor Portal</p>
          </div>

        </div>
      </div>
    </div>
  );
}
