import Link from "next/link";
import Image from "next/image";

export default function StartupRegistrationStep1() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 flex flex-col">
      {/* Minimal Header */}
      <header className="border-b border-gray-100 py-4 px-6 md:px-12 flex justify-between items-center bg-white sticky top-0 z-10 w-full">
        {/* Logo Text */}
        <Link href="/" className="font-bold text-xl tracking-tight text-[#167b66]">
          StartupConnect <span className="text-gray-900 font-semibold">Ethiopia</span>
        </Link>
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
          <div className="md:col-span-7 flex flex-col">
            <div className="mb-8">
              <h1 className="text-3xl font-extrabold text-[#115b4c] tracking-tight mb-2">Account Information</h1>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs font-bold text-gray-400 tracking-wider uppercase">Step 1 of 4</span>
                <div className="flex gap-1.5">
                  <div className="h-1.5 w-6 bg-[#167b66] rounded-full"></div>
                  <div className="h-1.5 w-6 bg-gray-200 rounded-full"></div>
                  <div className="h-1.5 w-6 bg-gray-200 rounded-full"></div>
                  <div className="h-1.5 w-6 bg-gray-200 rounded-full"></div>
                </div>
              </div>
            </div>

            <form className="flex flex-col gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-bold text-gray-800 mb-2">
                  Founder or representative full name <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  placeholder="Enter your full legal name" 
                  className="w-full px-4 py-3.5 bg-gray-50 border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#167b66] focus:bg-white transition text-sm"
                />
              </div>

              {/* Work Email */}
              <div>
                <label className="block text-sm font-bold text-gray-800 mb-2">Work email</label>
                <input 
                  type="email" 
                  placeholder="name@company.com" 
                  className="w-full px-4 py-3.5 bg-gray-50 border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#167b66] focus:bg-white transition text-sm mb-1.5"
                />
                <div className="flex items-center text-xs text-gray-500">
                  <svg className="w-3.5 h-3.5 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  Verification code will be sent to this email
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-bold text-gray-800 mb-2">Phone number</label>
                <div className="flex gap-3 mb-1.5">
                  <div className="w-20 px-4 py-3.5 bg-gray-50 border border-gray-100 rounded-md flex items-center justify-center font-medium text-gray-700 text-sm">
                    +251
                  </div>
                  <input 
                    type="tel" 
                    placeholder="9XX XXX XXX" 
                    className="flex-grow px-4 py-3.5 bg-gray-50 border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#167b66] focus:bg-white transition text-sm tracking-wide"
                  />
                </div>
                <div className="text-xs text-gray-500">Format: +251 9XX XXX XXX</div>
              </div>

              {/* Passwords */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-2">Password</label>
                  <input 
                    type="password" 
                    placeholder="••••••••" 
                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#167b66] focus:bg-white transition text-sm tracking-widest mb-1.5"
                  />
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-[#167b66] uppercase tracking-wider">Strong</span>
                    <div className="flex gap-1">
                      <div className="h-1 w-6 bg-[#167b66] rounded-sm"></div>
                      <div className="h-1 w-6 bg-[#167b66] rounded-sm"></div>
                      <div className="h-1 w-6 bg-[#167b66] rounded-sm"></div>
                      <div className="h-1 w-6 bg-gray-200 rounded-sm"></div>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-2">Confirm password</label>
                  <input 
                    type="password" 
                    placeholder="••••••••" 
                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#167b66] focus:bg-white transition text-sm tracking-widest"
                  />
                </div>
              </div>

              {/* Preferred Language */}
              <div className="mt-2">
                <label className="block text-sm font-bold text-gray-800 mb-3">Preferred language</label>
                <div className="flex bg-gray-50 p-1 rounded-md border border-gray-100 w-fit">
                  <button type="button" className="px-6 py-2 bg-white text-[#167b66] font-bold text-sm rounded shadow-sm border border-gray-100 transition">
                    English
                  </button>
                  <button type="button" className="px-6 py-2 text-gray-500 font-medium text-sm rounded hover:text-gray-700 transition">
                    Amharic
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 mt-8">
                <Link href="/register/startup/step2" className="px-8 py-3.5 bg-[#0f5c4a] hover:bg-[#0c4a3b] text-white font-bold rounded shadow-md transition text-sm text-center inline-block">
                  Continue to Step 2
                </Link>
                <button type="button" className="px-8 py-3.5 bg-white border border-gray-200 text-[#167b66] font-bold rounded hover:bg-gray-50 transition text-sm">
                  Save as Draft
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Info Cards Section */}
          <div className="md:col-span-5 flex flex-col gap-6 pt-2">
            
            {/* Security Notice Card */}
            <div className="bg-[#fcfdfd] border border-gray-100 rounded-2xl p-8 shadow-sm">
              <div className="w-10 h-10 bg-[#e8f3f1] rounded-full flex items-center justify-center text-[#167b66] mb-5">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h3 className="text-[#115b4c] text-lg font-extrabold mb-3">Your security is our priority</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                We use industry-standard encryption to protect your professional data. Your account information is used to verify your identity and ensure a safe networking environment for the Ethiopian startup ecosystem.
              </p>
            </div>

            {/* Social Proof Card */}
            <div className="bg-[#feebd9] rounded-2xl p-6 flex items-center gap-4">
              <div className="w-2.5 h-2.5 bg-[#d97736] rounded-full shadow-[0_0_8px_#d97736]"></div>
              <span className="text-[#a64e12] font-bold text-xs uppercase tracking-wide">
                Join 500+ startups registered this month
              </span>
            </div>

            {/* Image Card Placeholder */}
            <div className="h-64 rounded-2xl overflow-hidden relative border border-gray-100 mt-2">
              <div className="absolute inset-0 bg-gradient-to-t from-[#167b66]/60 to-transparent z-10"></div>
              {/* Fallback pattern if no image */}
              <div className="absolute inset-0 bg-[#eef5f4] flex items-center justify-center">
                <div className="text-center opacity-40">
                  <svg className="w-16 h-16 mx-auto text-[#167b66] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                  <span className="text-[#167b66] font-medium text-sm">Community of Innovators</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </main>
    </div>
  );
}
