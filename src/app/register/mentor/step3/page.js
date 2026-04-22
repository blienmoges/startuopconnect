import Link from "next/link";
import Image from "next/image";

export default function MentorRegistrationStep3() {
  return (
    <div className="min-h-screen bg-[#f9fafb] font-sans text-gray-900 flex">
      
      {/* Left Sidebar (Dark Green graphic) */}
      <div className="hidden lg:flex w-[40%] bg-[#061e16] relative overflow-hidden flex-col justify-between py-12 px-12">
        {/* Abstract Green Light Beams / Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#061e16]"></div>
          {/* Faux light beams using rotated divs */}
          <div className="absolute top-[-10%] left-[10%] w-[150%] h-[40px] bg-[#10b981] opacity-20 transform -rotate-45 blur-lg"></div>
          <div className="absolute top-[10%] left-[10%] w-[150%] h-[50px] bg-[#10b981] opacity-20 transform -rotate-45 blur-lg"></div>
          <div className="absolute top-[30%] left-[0%] w-[150%] h-[30px] bg-[#10b981] opacity-25 transform -rotate-45 blur-lg"></div>
          <div className="absolute top-[50%] left-[-10%] w-[150%] h-[80px] bg-[#10b981] opacity-15 transform -rotate-45 blur-2xl"></div>
          <div className="absolute top-[70%] left-[-20%] w-[150%] h-[35px] bg-[#10b981] opacity-30 transform -rotate-45 blur-lg"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#061e16]/80 via-transparent to-[#061e16]/95"></div>
        </div>

        <div className="relative z-10">
          <Link href="/" className="flex items-center gap-2 mb-16">
            <span className="font-bold text-lg text-white tracking-tight">StartupConnect Ethiopia</span>
          </Link>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
            Empowering <br/> Ethiopia's Next <br/> Generation of <br/> Growth
          </h1>
        </div>

        <div className="relative z-10">
          <p className="text-[#8ba39e] text-[10px] font-medium tracking-widest uppercase opacity-50">
            &copy; 2024 StartupConnect Ethiopia. All rights reserved.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="w-full lg:w-[60%] flex flex-col pt-10 pb-6 px-4 md:px-8 overflow-y-auto">
        
        {/* Progress Stepper */}
         <div className="w-full max-w-2xl mx-auto mb-8 px-4">
          <div className="relative flex justify-between items-center">
            {/* Connecting Line */}
            <div className="absolute left-[10%] right-[10%] h-[2px] bg-[#0f3d32] -z-10"></div>
            
            {/* Step 1 */}
            <div className="flex items-center gap-2 bg-[#f9fafb] pr-2">
              <div className="w-6 h-6 rounded-full bg-[#0f3d32] text-white flex items-center justify-center font-bold text-[10px] shadow-sm">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest hidden sm:inline-block">Account Info</span>
            </div>

            {/* Step 2 */}
            <div className="flex items-center gap-2 bg-[#f9fafb] px-2">
              <div className="w-6 h-6 rounded-full bg-[#0f3d32] text-white flex items-center justify-center font-bold text-[10px] shadow-sm">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest hidden sm:inline-block">Professional</span>
            </div>

            {/* Step 3 */}
            <div className="flex items-center gap-2 bg-[#f9fafb] pl-2 shadow-[0_0_0_4px_#f9fafb]">
              <div className="w-6 h-6 rounded-full bg-[#dcfce7] border border-[#a5d6a7] text-[#0f3d32] flex items-center justify-center font-bold text-[10px] shadow-sm">
                3
              </div>
              <span className="text-[10px] font-bold text-[#0f3d32] uppercase tracking-widest hidden sm:inline-block">Verification</span>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="w-full max-w-2xl mx-auto flex-grow flex flex-col">
          
          <h2 className="text-2xl font-bold text-[#0f3d32] mb-2 px-1">Verification & Review</h2>
          <p className="text-gray-500 text-[11px] mb-8 font-medium px-1">Review your details and complete identity and expertise verification before submission.</p>

          <div className="flex flex-col gap-6 w-full">
            
            {/* Account Info Card */}
            <div className="bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-100 p-6 relative">
              <div className="flex justify-between items-center mb-6">
                 <div className="flex items-center gap-2 text-[#0f3d32] font-bold text-xs uppercase tracking-widest">
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                   Account Info
                 </div>
                 <Link href="/register/mentor" className="text-[10px] font-bold text-[#136150] hover:text-[#0f3d32] flex items-center gap-1 uppercase tracking-widest transition">
                   <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                   Edit
                 </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-y-6 gap-x-4">
                <div>
                  <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-1.5">Full Name</p>
                  <p className="text-xs font-bold text-gray-800">Dawit Abraham</p>
                </div>
                <div>
                  <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-1.5">Email Address</p>
                  <p className="text-xs font-bold text-gray-800">dawit.a@startupconnect.com</p>
                </div>
                <div>
                  <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-1.5">Professional Title</p>
                  <p className="text-xs font-bold text-gray-800">Senior Strategy Consultant</p>
                </div>
                <div>
                  <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-1.5">Years of Experience</p>
                  <p className="text-xs font-bold text-gray-800">10+ Years</p>
                </div>
              </div>
            </div>

            {/* Professional Summary Card */}
            <div className="bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-100 p-6 relative">
              <div className="flex justify-between items-center mb-6">
                 <div className="flex items-center gap-2 text-[#0f3d32] font-bold text-xs uppercase tracking-widest">
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                   Professional Summary
                 </div>
                 <Link href="/register/mentor/step2" className="text-[10px] font-bold text-[#136150] hover:text-[#0f3d32] flex items-center gap-1 uppercase tracking-widest transition">
                   <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                   Edit
                 </Link>
              </div>

              <div className="flex flex-col gap-5">
                <div>
                  <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-2">Core Expertise</p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-[#e8f5e9] text-[#136150] px-3 py-1 rounded-full text-[10px] font-bold border border-[#cde5dd]">Scaling Ops</span>
                    <span className="bg-[#e8f5e9] text-[#136150] px-3 py-1 rounded-full text-[10px] font-bold border border-[#cde5dd]">Venture Capital</span>
                    <span className="bg-[#e8f5e9] text-[#136150] px-3 py-1 rounded-full text-[10px] font-bold border border-[#cde5dd]">Fintech</span>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-1.5">Target Stages</p>
                    <p className="text-xs font-bold text-gray-800">Seed, Series A</p>
                  </div>
                  <div>
                    <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-1.5">Session Format</p>
                    <p className="text-xs font-bold text-gray-800">Virtual & In-Person (Addis)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Verification Documents */}
            <div className="mt-2">
              <h3 className="text-xs font-bold text-[#0f3d32] mb-4 px-1">Verification Documents</h3>
              
              <div className="grid sm:grid-cols-2 gap-4">
                
                {/* Government ID */}
                <div className="border border-dashed border-gray-300 bg-white rounded-xl p-5 flex flex-col items-center justify-center text-center cursor-pointer hover:border-[#10b981] transition group">
                  <svg className="w-5 h-5 text-[#0f3d32] mb-2 group-hover:text-[#10b981] transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"></path></svg>
                  <h4 className="text-[11px] font-bold text-gray-800 mb-1">Government ID</h4>
                  <p className="text-[9px] text-gray-400 font-medium">Passport or National ID (PDF, JPG)</p>
                </div>

                {/* Certificates */}
                <div className="border border-dashed border-gray-300 bg-white rounded-xl p-5 flex flex-col items-center justify-center text-center cursor-pointer hover:border-[#10b981] transition group">
                  <svg className="w-5 h-5 text-[#0f3d32] mb-2 group-hover:text-[#10b981] transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                  <h4 className="text-[11px] font-bold text-gray-800 mb-1">Certificates</h4>
                  <p className="text-[9px] text-gray-400 font-medium">Degrees or Professional Certs</p>
                </div>

                {/* Employment Proof */}
                <div className="border border-dashed border-gray-300 bg-white rounded-xl p-5 flex flex-col items-center justify-center text-center cursor-pointer hover:border-[#10b981] transition group">
                  <svg className="w-5 h-5 text-[#0f3d32] mb-2 group-hover:text-[#10b981] transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                  <h4 className="text-[11px] font-bold text-gray-800 mb-1">Employment Proof</h4>
                  <p className="text-[9px] text-gray-400 font-medium">Reference letter or LinkedIn URL</p>
                </div>

                {/* Profile Photo */}
                <div className="border border-dashed border-gray-300 bg-white rounded-xl p-5 flex flex-col items-center justify-center text-center cursor-pointer hover:border-[#10b981] transition group">
                  <svg className="w-5 h-5 text-[#0f3d32] mb-2 group-hover:text-[#10b981] transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <h4 className="text-[11px] font-bold text-gray-800 mb-1">Profile Photo</h4>
                  <p className="text-[9px] text-gray-400 font-medium">High-quality professional headshot</p>
                </div>
                
              </div>
            </div>

            {/* Comment Area */}
             <div className="mt-2">
               <label className="block text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-2 px-1">Comment Details (Optional)</label>
               <textarea rows="3" placeholder="Any additional context for the verification team..." className="w-full px-4 py-3 bg-[#f0f2f5] border-none rounded-lg focus:ring-2 focus:ring-[#136150] text-xs text-gray-800 outline-none resize-none placeholder-gray-400"></textarea>
             </div>

            {/* Checkboxes */}
            <div className="flex flex-col gap-3 px-1 mt-2">
               <label className="flex items-start gap-3 cursor-pointer">
                 <input type="checkbox" className="mt-0.5 w-3.5 h-3.5 text-[#136150] border-gray-300 rounded focus:ring-[#136150]" />
                 <span className="text-[10px] text-gray-500 font-medium leading-snug">
                   I verify that all information and documents provided are authentic and accurate.
                 </span>
               </label>
               
               <label className="flex items-start gap-3 cursor-pointer">
                 <input type="checkbox" className="mt-0.5 w-3.5 h-3.5 text-[#136150] border-gray-300 rounded focus:ring-[#136150]" />
                 <span className="text-[10px] text-gray-500 font-medium leading-snug">
                   I agree to abide by the StartupConnect <Link href="#" className="font-bold text-[#136150] hover:underline">Mentor Code of Conduct</Link>.
                 </span>
               </label>

               <label className="flex items-start gap-3 cursor-pointer">
                 <input type="checkbox" className="mt-0.5 w-3.5 h-3.5 text-[#136150] border-gray-300 rounded focus:ring-[#136150]" />
                 <span className="text-[10px] text-gray-500 font-medium leading-snug">
                   I acknowledge the <Link href="#" className="font-bold text-[#136150] hover:underline">Privacy Policy</Link> regarding my personal data.
                 </span>
               </label>
            </div>

            {/* Actions */}
            <div className="flex justify-between items-center mt-6 pt-6 mb-8">
               <Link href="/register/mentor/step2" className="text-xs font-bold text-[#0f3d32] hover:text-[#136150] transition flex items-center gap-1.5 px-2 py-2">
                 <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                 Back
               </Link>
               <button type="button" className="bg-[#0f3d32] hover:bg-[#0a2921] text-white text-xs font-bold py-3 px-8 rounded-full transition shadow-lg shadow-[#0f3d32]/20 flex items-center gap-2">
                 Submit for Verification
               </button>
            </div>

          </div>
        </div>

        {/* Global Footer (Right column) */}
        <div className="w-full max-w-2xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 py-8 border-t border-gray-200 mt-auto">
          <div className="flex items-center gap-3 text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4 sm:mb-0">
            <span className="text-[#0f3d32]">MentorPortal</span>
            <span className="text-gray-300">|</span>
            <span>Institutional Dashboard</span>
          </div>
          
          <div className="flex gap-6 text-[9px] text-gray-400 font-bold uppercase tracking-widest">
            <Link href="#" className="hover:text-gray-600 transition">Support</Link>
            <Link href="#" className="hover:text-gray-600 transition">Terms</Link>
            <Link href="#" className="hover:text-gray-600 transition">Accessibility</Link>
          </div>
        </div>

      </div>
    </div>
  );
}
