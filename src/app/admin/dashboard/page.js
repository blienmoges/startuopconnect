"use client";
import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div className="max-w-6xl mx-auto pb-12 animate-fade-in">
      {/* Alert Banners */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-4 flex items-center gap-3 shadow-sm text-orange-800">
          <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
            </svg>
          </div>
          <span className="font-medium text-sm">5 identity verifications pending</span>
        </div>
        <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 flex items-center gap-3 shadow-sm text-amber-800">
          <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
            </svg>
          </div>
          <span className="font-medium text-sm">2 system maintenance alerts</span>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition">
          <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
            </svg>
          </div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Total Users</p>
          <p className="text-3xl font-black text-slate-800">1,240</p>
        </div>
        <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition">
          <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Startups</p>
          <p className="text-3xl font-black text-slate-800">450</p>
        </div>
        <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition">
          <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Investors</p>
          <p className="text-3xl font-black text-slate-800">180</p>
        </div>
        <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition">
          <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
          </div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Mentors</p>
          <p className="text-3xl font-black text-slate-800">120</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* User Verification */}
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-lg font-bold text-slate-800">User Verification</h2>
              <button className="text-slate-400 hover:text-slate-600 transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-8 text-center divide-x divide-slate-100">
              <div>
                <p className="text-3xl font-bold text-amber-500">24</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Pending</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-800">1,180</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Approved</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-rose-500">36</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Rejected</p>
              </div>
            </div>

            <div className="flex justify-center">
              <button className="bg-[#006054] hover:bg-[#004d43] text-white px-8 py-3 rounded-full font-bold text-sm transition shadow-md shadow-[#006054]/20">
                Review Requests
              </button>
            </div>
          </div>

          {/* Recent Platform Activity */}
          <div>
            <h2 className="text-lg font-bold text-slate-800 mb-4 px-2">Recent Platform Activity</h2>
            <div className="bg-white rounded-3xl p-2 border border-slate-100 shadow-sm">
              <div className="divide-y divide-slate-50">
                <div className="p-4 hover:bg-slate-50 rounded-2xl transition cursor-pointer flex items-center justify-between group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-sm text-slate-800">New investor registration: Aman K.</p>
                      <p className="text-xs text-slate-500">2m ago</p>
                    </div>
                  </div>
                  <svg className="w-4 h-4 text-slate-300 group-hover:text-slate-500 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>

                <div className="p-4 hover:bg-slate-50 rounded-2xl transition cursor-pointer flex items-center justify-between group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-sm text-slate-800">Startup 'EcoFlow' submitted profile</p>
                      <p className="text-xs text-slate-500">15m ago</p>
                    </div>
                  </div>
                  <svg className="w-4 h-4 text-slate-300 group-hover:text-slate-500 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>

                <div className="p-4 hover:bg-slate-50 rounded-2xl transition cursor-pointer flex items-center justify-between group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-sm text-slate-800">Investor 'BlueSky' sent offer</p>
                      <p className="text-xs text-slate-500">1h ago</p>
                    </div>
                  </div>
                  <svg className="w-4 h-4 text-slate-300 group-hover:text-slate-500 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Quick Actions */}
          <div>
            <h2 className="text-lg font-bold text-slate-800 mb-4 px-2">Quick Actions</h2>
            <div className="bg-white rounded-3xl p-2 border border-slate-100 shadow-sm space-y-1">
              <Link href="/admin/users/verify" className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-2xl transition group">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#006054]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span className="font-bold text-sm text-slate-700">Verify Users</span>
                </div>
                <svg className="w-4 h-4 text-slate-300 group-hover:text-slate-500 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
              <Link href="/admin/startups" className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-2xl transition group">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#006054]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                  <span className="font-bold text-sm text-slate-700">Manage Startups</span>
                </div>
                <svg className="w-4 h-4 text-slate-300 group-hover:text-slate-500 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
              <Link href="/admin/reports" className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-2xl transition group">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#006054]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  <span className="font-bold text-sm text-slate-700">View Reports</span>
                </div>
                <svg className="w-4 h-4 text-slate-300 group-hover:text-slate-500 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>

          {/* Platform Health */}
          <div className="bg-[#006054] text-white rounded-3xl p-6 shadow-md shadow-[#006054]/20 relative overflow-hidden">
            {/* Abstract Background element */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            
            <h2 className="text-lg font-bold mb-2 relative z-10">Platform Health</h2>
            <p className="text-sm text-[#8ba39e] mb-6 relative z-10">
              Systems are running optimally at 99.9% uptime.
            </p>
            
            <div className="relative z-10">
              <div className="h-2 w-full bg-[#0f3d32] rounded-full overflow-hidden mb-2">
                <div className="h-full bg-[#10b981] rounded-full" style={{ width: "99.9%" }}></div>
              </div>
              <p className="text-[10px] font-bold text-right text-[#8ba39e] uppercase tracking-widest">Live Uptime Status</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
