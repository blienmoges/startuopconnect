"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function UserDropdown({ company, role, initials, currentLocale }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div 
        className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="hidden sm:flex flex-col items-end">
          <span className="text-xs font-bold text-gray-900">{company || "Global Tech Fund"}</span>
          <span className="text-[10px] text-gray-500 font-medium">{role || "Partner"}</span>
        </div>
        <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden shrink-0 border border-gray-200 flex items-center justify-center">
          <div className="w-full h-full bg-[#115b4c] text-white flex items-center justify-center font-bold text-[10px]">
            {initials || "GT"}
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          <Link 
            href={`/investor/feedback`}
            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-[#f6f8f9] hover:text-[#0f3d32] transition font-medium"
            onClick={() => setIsOpen(false)}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
            Feedback
          </Link>
          <Link 
            href={`/investor/settings`}
            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-[#f6f8f9] hover:text-[#0f3d32] transition font-medium"
            onClick={() => setIsOpen(false)}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path></svg>
            Settings
          </Link>
          <div className="h-px bg-gray-100 my-1"></div>
          <Link 
            href={`/${currentLocale || "en"}/login`}
            className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition font-bold"
            onClick={() => setIsOpen(false)}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
            Logout
          </Link>
        </div>
      )}
    </div>
  );
}
