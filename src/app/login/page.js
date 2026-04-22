import Link from "next/link";

export default function Login() {
  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-gray-900 flex items-center justify-center py-12">
      {/* Centered Content Area */}
      <div className="w-full max-w-xl flex flex-col justify-center px-6 sm:px-12 relative z-10">
        
        <div className="w-full mx-auto">
          
          {/* Header Text */}
          <div className="mb-8 pl-2">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">Startup Login</h1>
            <p className="text-[15px] text-gray-500 leading-relaxed pr-4">
              Access your investor dashboard to discover verified startups, manage offers, and track your portfolio.
            </p>
          </div>

          {/* Login Form Card */}
          <div className="bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-gray-50 p-8 mb-8">
            <form className="flex flex-col gap-5">
              
              {/* Email / Phone Field */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2">Email or Phone Number</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <input 
                    type="text" 
                    placeholder="investor@institution.com" 
                    className="w-full pl-11 pr-4 py-3.5 bg-[#f8f9fa] border-none rounded-xl focus:outline-none focus:ring-2 focus:ring-[#115b4c] transition text-sm text-gray-800 placeholder-gray-400 font-medium"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                  </div>
                  <input 
                    type="password" 
                    placeholder="••••••••" 
                    className="w-full pl-11 pr-12 py-3.5 bg-[#f8f9fa] border-none rounded-xl focus:outline-none focus:ring-2 focus:ring-[#115b4c] transition text-[15px] tracking-widest text-gray-800 placeholder-gray-400 font-medium"
                  />
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer text-gray-400 hover:text-gray-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                  </div>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between mt-1 mb-2">
                <label className="flex items-center gap-2.5 cursor-pointer group">
                  <div className="w-4 h-4 rounded-[4px] border border-gray-300 bg-white group-hover:border-[#115b4c] transition flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="text-[13px] font-bold text-gray-600">Remember me</span>
                </label>
                <Link href="#" className="text-[13px] font-bold text-[#115b4c] hover:underline">
                  Forgot password?
                </Link>
              </div>

              {/* Login Button */}
              <Link href="/dashboard" className="w-full py-4 bg-[#0f5c4a] hover:bg-[#0c4a3b] text-white font-bold rounded-xl shadow-[0_4px_14px_rgba(15,92,74,0.3)] transition text-[15px] flex items-center justify-center gap-2 mt-2">
                Log In
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path></svg>
              </Link>

              {/* Register Link */}
              <div className="text-center mt-6">
                <p className="text-[13px] text-gray-500">
                  Don't have an account? <Link href="/register/startup" className="font-bold text-[#115b4c] hover:underline">Register</Link>
                </p>
              </div>
            </form>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-2 mb-6 pl-2">
            <div className="bg-[#e8f3f1] text-[#0f5c4a] px-3 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest flex items-center gap-1.5 border border-[#cce8e2]">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              Secure Login
            </div>
            <div className="bg-[#e8f3f1] text-[#0f5c4a] px-3 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest flex items-center gap-1.5 border border-[#cce8e2]">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 00-.515.774l-1.5 10a1 1 0 001.211 1.107l7-2.625 7 2.625a1 1 0 001.211-1.107l-1.5-10a1 1 0 00-.515-.774l-7-3zM10 12l-4.5 1.688L6.87 5.068 10 3.725l3.13 1.343 1.37 8.62L10 12z"></path></svg>
              Verified Investor Platform
            </div>
            <div className="bg-[#e8f3f1] text-[#0f5c4a] px-3 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest flex items-center gap-1.5 border border-[#cce8e2]">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              Admin-Approved Access
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-[#f0f3f5] rounded-xl p-4 flex items-start gap-3 mb-10 border border-gray-100">
            <div className="text-[#0f5c4a] mt-0.5">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed font-medium">
              Only verified and approved investors can access the investor dashboard. Applications are reviewed by our institutional audit team within 48 hours.
            </p>
          </div>

          {/* Footer Text */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[9px] font-bold text-gray-400 uppercase tracking-widest pl-2">
            <span>&copy; 2024 STARTUPCONNECT ETHIOPIA</span>
            <Link href="#" className="hover:text-gray-600 transition">Privacy Policy</Link>
            <Link href="#" className="hover:text-gray-600 transition">Terms of Service</Link>
            <Link href="#" className="hover:text-gray-600 transition">Security Architecture</Link>
          </div>

        </div>

      </div>



    </div>
  );
}
