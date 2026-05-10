import Link from "next/link";
import Image from "next/image";

export default function InvestorRegistration() {
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
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold text-[#115b4c] tracking-tight mb-2">Account Information</h1>
            <p className="text-gray-500 mb-10 text-[15px]">Begin your journey as a verified investor in Ethiopia's growing tech ecosystem.</p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-xs font-bold text-gray-400 tracking-wider uppercase">Step 1 of 5</span>
              <div className="flex gap-1.5">
                <div className="h-1.5 w-6 bg-[#167b66] rounded-full"></div>
                <div className="h-1.5 w-6 bg-gray-200 rounded-full"></div>
                <div className="h-1.5 w-6 bg-gray-200 rounded-full"></div>
                <div className="h-1.5 w-6 bg-gray-200 rounded-full"></div>
                <div className="h-1.5 w-6 bg-gray-200 rounded-full"></div>
              </div>
            </div>
          </div>

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

            </div>

            <div className="flex justify-start mt-10">
              <Link href="/register/investor/step2" className="px-8 py-3.5 bg-[#0f3d32] hover:bg-[#0a2921] text-white font-bold rounded shadow-md transition text-sm flex items-center gap-2">
                Continue to Profile
              </Link>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}
