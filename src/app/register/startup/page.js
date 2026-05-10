import Link from "next/link";
import Image from "next/image";

export default function StartupRegistrationStep1() {
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
      </div>
    </div>
  );
}
