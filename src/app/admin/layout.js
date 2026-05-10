import Sidebar from "@/components/admin/Sidebar";

export const metadata = {
  title: "Admin Dashboard | StartupConnect",
  description: "Platform management for StartupConnect",
};

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-[#10b981] selection:text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Header */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0 relative z-10">
          <div className="flex items-center gap-4 flex-1">
            {/* Search */}
            <div className="relative w-full max-w-md hidden md:block">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full pl-10 pr-4 py-2 border-none bg-slate-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#10b981] focus:bg-white transition-all shadow-inner"
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            {/* Notifications */}
            <button className="relative text-slate-400 hover:text-slate-600 transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
              </svg>
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Profile Dropdown (static for now) */}
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 text-[#006054] flex items-center justify-center font-bold text-sm shrink-0 shadow-sm group-hover:shadow transition">
                 AD
              </div>
              <div className="hidden md:flex flex-col">
                <span className="text-sm font-bold text-slate-700 leading-none">Admin User</span>
              </div>
              <svg className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
        </header>

        {/* Main Scrollable Area */}
        <main className="flex-1 overflow-y-auto bg-[#f8fafc] p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
