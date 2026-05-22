"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const primaryLinks = [
    { 
      name: "Dashboard", 
      href: "/investor/dashboard", 
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path> 
    },
    { 
      name: "Startups", 
      href: "/investor/discover", 
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path> 
    },
    { 
      name: "Recommendations", 
      href: "/investor/recommendations", 
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path> 
    },
    { 
      name: "Funding Requests", 
      href: "/investor/funding", 
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> 
    },
    { 
      name: "Offers", 
      href: "/investor/offers", 
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path> 
    },
    { 
      name: "Payment", 
      href: "/investor/payment", 
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path> 
    }
  ];

  const commLinks = [
    { 
      name: "Messages", 
      href: "/investor/messages", 
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path> 
    },
    { 
      name: "Meetings", 
      href: "/investor/meetings", 
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path> 
    }
  ];

  // System links removed since they are now in the top right user dropdown
  
  return (
    <aside className="hidden md:flex flex-col w-[260px] bg-[#061e16] border-r border-[#0f3d32] shrink-0 sticky top-0 h-screen overflow-y-auto relative">
      {/* Abstract Green Light Beams / Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[#061e16]"></div>
        <div className="absolute top-[-10%] left-[10%] w-[150%] h-[30px] bg-[#008f64] opacity-30 transform -rotate-[55deg] blur-[2px]"></div>
        <div className="absolute top-[10%] left-[10%] w-[150%] h-[40px] bg-[#008f64] opacity-30 transform -rotate-[55deg] blur-[2px]"></div>
        <div className="absolute top-[30%] left-[0%] w-[150%] h-[20px] bg-[#008f64] opacity-30 transform -rotate-[55deg] blur-[2px]"></div>
        <div className="absolute top-[50%] left-[-10%] w-[150%] h-[60px] bg-[#008f64] opacity-20 transform -rotate-[55deg] blur-[4px]"></div>
        <div className="absolute top-[70%] left-[-20%] w-[150%] h-[25px] bg-[#008f64] opacity-40 transform -rotate-[55deg] blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#061e16]/60 via-transparent to-[#061e16]/90"></div>
      </div>

      {/* Logo */}
      <div className="p-6 pb-2 relative z-10">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="StartupConnect Logo" className="w-10 h-10 object-contain" />
          <div className="flex flex-col">
             <span className="font-bold text-white text-lg tracking-tight leading-tight">StartupConnect</span>
             <span className="text-[9px] font-bold text-[#10b981] uppercase tracking-widest leading-tight">Investor Dashboard</span>
          </div>
        </Link>
      </div>

      {/* Primary Nav */}
      <div className="px-4 py-4 flex flex-col gap-1 mt-2 relative z-10">
        {primaryLinks.map((link) => {
          const isActive = pathname === link.href || (link.href !== "/investor/dashboard" && pathname?.startsWith(link.href));
          return (
            <Link 
              key={link.name} 
              href={link.href} 
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-xs transition relative overflow-hidden group ${
                isActive 
                  ? "bg-[#0f3d32] text-white" 
                  : "text-[#8ba39e] hover:text-white hover:bg-[#0a2921]"
              }`}
            >
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {link.icon}
              </svg>
              {link.name}
              {isActive && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-[#10b981] rounded-l-full"></div>
              )}
            </Link>
          );
        })}
      </div>

      {/* Communication Nav */}
      <div className="px-4 py-2 mt-2 flex flex-col gap-1 relative z-10">
        <p className="text-[10px] font-bold text-[#4d7066] uppercase tracking-widest px-4 mb-2">Communication</p>
        {commLinks.map((link) => {
          const isActive = pathname === link.href || pathname?.startsWith(link.href);
          return (
            <Link 
              key={link.name} 
              href={link.href} 
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-xs transition relative overflow-hidden group ${
                isActive 
                  ? "bg-[#0f3d32] text-white" 
                  : "text-[#8ba39e] hover:text-white hover:bg-[#0a2921]"
              }`}
            >
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {link.icon}
              </svg>
              {link.name}
              {isActive && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-[#10b981] rounded-l-full"></div>
              )}
            </Link>
          );
        })}
      </div>


    </aside>
  );
}
