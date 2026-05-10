import Link from "next/link";
import Image from "next/image";
import Sidebar from "@/components/startup/Sidebar";

export default function AIRecommendations() {
  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-gray-900 flex">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-grow flex flex-col overflow-y-auto relative bg-[#f8fafc]">
        
        {/* Top Navbar */}
        <header className="flex justify-between items-center px-8 py-5 bg-white border-b border-gray-100 w-full z-10 sticky top-0">
          <div className="relative w-full max-w-[400px] hidden sm:block">
             <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
             </div>
             <input type="text" placeholder="Search resources, mentors, or investors..." className="w-full pl-11 pr-4 py-2.5 bg-[#f8fafc] border-none rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#0f3d32]/20 transition" />
          </div>

          <div className="flex items-center gap-6 ml-auto">
             <button className="text-gray-400 hover:text-gray-600 transition relative">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
               <div className="absolute top-0 right-0.5 w-1.5 h-1.5 bg-red-500 rounded-full border-2 border-white"></div>
             </button>
             <button className="text-gray-400 hover:text-gray-600 transition">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
             </button>
             
             <div className="flex items-center gap-3 border-l border-gray-200 pl-6">
                <div className="hidden sm:flex flex-col items-end">
                  <span className="text-xs font-bold text-gray-900">Abebe Kebede</span>
                  <span className="text-[10px] text-gray-400 font-medium tracking-tight">AgriTech Founder</span>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#1e293b] text-white overflow-hidden shrink-0 flex items-center justify-center font-bold text-xs shadow-sm border border-gray-200">
                  AK
                </div>
             </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-8 max-w-[1200px] mx-auto">
          
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#0f3d32] mb-2 tracking-tight">AI Recommendations</h1>
            <p className="text-sm text-gray-400 font-medium">Best matches based on your startup profile, project stage, funding needs, and industry.</p>
          </div>

          {/* Metrics Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
            {[
              { label: "Startup Industry", value: "AgriTech" },
              { label: "Funding Need", value: "$50,000" },
              { label: "Project Stage", value: "Early Stage" }
            ].map((metric, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-2">{metric.label}</p>
                <p className="text-lg font-bold text-gray-900">{metric.value}</p>
              </div>
            ))}
            <div className="bg-[#0f3d32] rounded-2xl p-6 shadow-lg flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-bl-full"></div>
              <p className="text-[9px] font-bold text-white/60 uppercase tracking-widest mb-1 relative z-10">Recommendation Status</p>
              <div className="flex items-center gap-2 relative z-10">
                <svg className="w-5 h-5 text-[#64ffda]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                <p className="text-lg font-bold text-white tracking-tight">12 New Matches</p>
              </div>
            </div>
          </div>

          {/* Recommended Investors Section */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#eaf4f1] rounded-xl flex items-center justify-center text-[#0f3d32]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m4 0h1m-5 10h1m4 0h1m-5-4h1m4 0h1"></path></svg>
                </div>
                <h2 className="text-xl font-bold text-gray-900 tracking-tight">Recommended Investors</h2>
              </div>
              <Link href="#" className="text-xs font-bold text-[#0f3d32] hover:underline uppercase tracking-widest">View All ›</Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Green Horizon Capital",
                  loc: "Based in Addis Ababa",
                  match: "95% Match",
                  reason: "Matches your focus on sustainable agriculture in East Africa and your current seed-stage funding requirements.",
                  focus: ["AgriTech", "Sustainability", "Seed Stage"],
                  color: "bg-blue-600"
                },
                {
                  name: "EthioVentures Group",
                  loc: "Global Partners",
                  match: "91% Match",
                  reason: "Strong alignment with your scaling strategy for rural Ethiopian markets and previous successful Agri-fintech exits.",
                  focus: ["FinTech", "Emerging Markets"],
                  color: "bg-gray-900"
                },
                {
                  name: "Blue Nile Angel Network",
                  loc: "Multiple Locations",
                  match: "89% Match",
                  reason: "Highly active in the pre-seed space for tech-enabled traditional industries in the Horn of Africa.",
                  focus: ["Tech-Enabled", "Angel Investment"],
                  color: "bg-[#0f3d32]"
                }
              ].map((investor, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:border-[#0f3d32]/20 transition flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 ${investor.color} rounded-xl shrink-0 flex items-center justify-center text-white text-[10px] font-black`}>
                        {investor.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-gray-900 leading-tight">{investor.name}</h3>
                        <p className="text-[10px] text-gray-400 font-medium">{investor.loc}</p>
                      </div>
                    </div>
                    <div className="bg-[#eaf4f1] text-[#0f3d32] text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-lg shrink-0">
                      ✨ {investor.match}
                    </div>
                  </div>

                  <div className="bg-[#f8fafc] rounded-xl p-4 mb-6 flex-grow">
                    <p className="text-[9px] font-bold text-[#0f3d32] uppercase tracking-widest mb-1.5">AI Reasoning:</p>
                    <p className="text-[11px] text-gray-500 font-medium leading-relaxed italic">
                      "{investor.reason}"
                    </p>
                  </div>

                  <div className="mb-6">
                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-2">Investment Focus</p>
                    <div className="flex flex-wrap gap-2">
                      {investor.focus.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[9px] font-bold text-gray-500 border border-gray-100 px-2 py-1 rounded-lg bg-white">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mt-auto">
                    <Link href="/startup/discover/apply" className="flex-grow bg-[#0f3d32] text-white text-[10px] font-bold py-2.5 rounded-lg text-center hover:bg-[#0a2921] transition">Apply for Investment</Link>
                    <Link href="/startup/discover/profile" className="flex-grow border border-gray-200 text-gray-600 text-[10px] font-bold py-2.5 rounded-lg text-center hover:bg-gray-50 transition">View Profile</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Mentors Section */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#fefce8] rounded-xl flex items-center justify-center text-[#854d0e]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                </div>
                <h2 className="text-xl font-bold text-gray-900 tracking-tight">Recommended Mentors</h2>
              </div>
              <Link href="#" className="text-xs font-bold text-[#0f3d32] hover:underline uppercase tracking-widest">View All ›</Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Dr. Selamawit T.",
                  title: "15+ Years Industry Experience",
                  match: "98% Match",
                  reason: "Expert in scaling AgriTech startups in Ethiopia with specific knowledge of local regulatory compliance and distribution networks.",
                  focus: ["Operations", "Regulation", "Scaling"],
                  color: "bg-orange-100"
                },
                {
                  name: "Elias Gebre",
                  title: "Former Tech Lead @ Safaricom",
                  match: "88% Match",
                  reason: "Highly recommended for your project's technical architecture, specifically for building low-connectivity mobile solutions.",
                  focus: ["Product Engineering", "Mobile Strategy"],
                  color: "bg-red-100"
                },
                {
                  name: "Martha Bekele",
                  title: "Marketing & Brand Strategist",
                  match: "85% Match",
                  reason: "Can assist with your B2B go-to-market strategy and brand positioning for corporate agricultural partners.",
                  focus: ["Marketing", "Go-To-Market"],
                  color: "bg-green-100"
                }
              ].map((mentor, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:border-[#0f3d32]/20 transition flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 ${mentor.color} rounded-xl shrink-0 flex items-center justify-center text-[#0f3d32] text-xs font-black`}>
                        {mentor.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-gray-900 leading-tight">{mentor.name}</h3>
                        <p className="text-[10px] text-gray-400 font-medium">{mentor.title}</p>
                      </div>
                    </div>
                    <div className="bg-[#eaf4f1] text-[#0f3d32] text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-lg shrink-0">
                      ✨ {mentor.match}
                    </div>
                  </div>

                  <div className="bg-[#f8fafc] rounded-xl p-4 mb-6 flex-grow">
                    <p className="text-[9px] font-bold text-[#0f3d32] uppercase tracking-widest mb-1.5">AI Reasoning:</p>
                    <p className="text-[11px] text-gray-500 font-medium leading-relaxed italic">
                      "{mentor.reason}"
                    </p>
                  </div>

                  <div className="mb-6">
                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-2">Expertise</p>
                    <div className="flex flex-wrap gap-2">
                      {mentor.focus.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[9px] font-bold text-gray-500 border border-gray-100 px-2 py-1 rounded-lg bg-white">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mt-auto">
                    <button className="flex-grow bg-[#0f3d32] text-white text-[10px] font-bold py-2.5 rounded-lg text-center hover:bg-[#0a2921] transition">Request Mentorship</button>
                    <button className="flex-grow border border-gray-200 text-gray-600 text-[10px] font-bold py-2.5 rounded-lg text-center hover:bg-gray-50 transition">View Profile</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

    </div>
  );
}
