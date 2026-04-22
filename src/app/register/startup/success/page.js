import Link from "next/link";
import Image from "next/image";

export default function StartupRegistrationSuccess() {
  return (
    <div className="min-h-screen bg-[#f3f7f6] font-sans text-gray-900 flex flex-col relative overflow-hidden">
      
      {/* Dynamic Background Glow */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-[600px] h-[400px] bg-[#d7ebe7] rounded-full blur-[80px] opacity-70 pointer-events-none"></div>

      {/* Founder Portal Header */}
      <header className="border-b border-gray-200 py-3 px-6 md:px-8 flex justify-between items-center bg-white sticky top-0 z-20 w-full shadow-sm">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#167b66] rounded-lg flex items-center justify-center text-white shadow-sm">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.5 10.5L21 3m-7.5 7.5L3 21m10.5-10.5l-3-3m3 3l3 3m-3-3l-7.5-7.5M21 3l-3 3M3 21l3-3"></path></svg>
            </div>
            <div className="flex flex-col -gap-1">
              <span className="font-bold text-lg tracking-tight text-[#115b4c] leading-none">StartupConnect</span>
              <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">Founder Portal</span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="#" className="text-gray-500 hover:text-[#167b66] transition">Dashboard</Link>
            <Link href="#" className="text-gray-500 hover:text-[#167b66] transition">Resources</Link>
            <Link href="#" className="text-gray-500 hover:text-[#167b66] transition">Network</Link>
          </nav>
        </div>
        
        {/* User Actions */}
        <div className="flex items-center gap-5 text-gray-500">
          <button className="hover:text-[#167b66] transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
          </button>
          <button className="hover:text-[#167b66] transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </button>
          <div className="w-8 h-8 rounded-full border border-gray-200 overflow-hidden cursor-pointer">
            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center py-16 px-4 z-10 relative">
        
        {/* Floating Shield Icon */}
        <div className="bg-white w-20 h-20 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center justify-center absolute top-12 left-1/2 transform -translate-x-1/2 z-20">
          <div className="text-[#0f5c4a]">
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" className="text-[#0c4a3b]" />
              <path d="M16 9l-6 6-2-2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </div>
        </div>

        {/* Success Card */}
        <div className="bg-white rounded-[24px] shadow-[0_10px_40px_rgb(0,0,0,0.05)] pt-24 pb-12 px-8 sm:px-16 max-w-2xl w-full flex flex-col items-center text-center mt-6 border border-white">
          
          <div className="flex items-center gap-2 bg-[#d7ebe7] text-[#0f5c4a] px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            <div className="w-1.5 h-1.5 bg-[#0f5c4a] rounded-full"></div>
            Pending Verification
          </div>

          <h1 className="text-4xl font-bold text-[#115b4c] font-serif mb-6">Registration Submitted</h1>
          
          <p className="text-gray-600 leading-relaxed mb-10 max-w-lg">
            Thank you for joining the StartupConnect ecosystem. Your profile is currently being reviewed by our administrative team to ensure quality and security within our network.
          </p>

          <div className="bg-[#f8f9fa] border border-gray-100 rounded-lg px-6 py-4 flex items-center justify-center gap-3 text-sm text-[#115b4c] font-medium mb-10 shadow-sm w-full sm:w-auto">
            <svg className="w-5 h-5 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            Expected activation: 3-5 business days
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-14 w-full sm:w-auto">
            <Link href="/" className="px-8 py-3.5 bg-[#0f5c4a] text-white font-bold text-sm rounded-lg hover:bg-[#0c4a3b] transition shadow-md flex items-center justify-center gap-2 min-w-[180px]">
              Go to Home
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </Link>
            <Link href="/register/startup/step4" className="px-8 py-3.5 bg-white border border-gray-200 text-[#115b4c] font-bold text-sm rounded-lg hover:bg-gray-50 transition drop-shadow-sm flex items-center justify-center min-w-[180px]">
              Edit Submission
            </Link>
          </div>

          <div className="text-sm">
            <span className="text-gray-500 block mb-1">Need immediate assistance?</span>
            <Link href="/contact" className="text-[#167b66] font-bold hover:underline flex items-center justify-center gap-1.5">
              Contact our verification team
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </Link>
          </div>

        </div>

        {/* Footer Badges */}
        <div className="flex gap-8 mt-16 text-gray-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-center">
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
            Enterprise Grade Security
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            Compliance Verified
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
            Ethiopian Tech Ecosystem
          </div>
        </div>
      </main>

      {/* Floating Support Button */}
      <div className="fixed bottom-6 right-6 bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.08)] px-4 py-3 rounded-full flex items-center gap-2 cursor-pointer hover:bg-gray-50 transition z-50">
        <div className="w-2.5 h-2.5 bg-[#8b4513] rounded-full"></div>
        <span className="text-xs font-bold text-gray-800 tracking-wide">Live Support Active</span>
      </div>

    </div>
  );
}
