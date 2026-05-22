"use client";

import Link from "next/link";
import { useState } from "react";
import { useParams } from "next/navigation";
import Sidebar from "@/components/startup/Sidebar";
import en from "@/dictionaries/en.json";
import am from "@/dictionaries/am.json";
import UserDropdown from "@/components/startup/UserDropdown";

export default function StartupFeedbackPage() {
   const params = useParams();
   const currentLocale = params.locale === "am" ? "am" : "en";
   const dict = currentLocale === "am" ? am : en;
   const t = dict.startupFeedback;

   const [ratings, setRatings] = useState({
      strategic: 4,
      communication: 5,
      support: 4,
      funding: 3
   });

   const renderStars = (rating, key) => {
      return (
         <div className="flex gap-1.5 mt-2">
            {[1, 2, 3, 4, 5].map((star) => (
               <button
                  key={star}
                  onClick={() => setRatings({ ...ratings, [key]: star })}
                  className={`transition ${star <= rating ? "text-[#8a611c]" : "text-gray-300"}`}
               >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
               </button>
            ))}
         </div>
      );
   };

   const recentFeedback = [
      {
         id: 1,
         name: "Abebe Tekle",
         score: "4.8",
         time: t.recent.cards.abebe.time,
         text: t.recent.cards.abebe.text
      },
      {
         id: 2,
         name: "Global Tech Fund",
         score: "4.2",
         time: t.recent.cards.globalTech.time,
         text: t.recent.cards.globalTech.text
      },
      {
         id: 3,
         name: "Africa Ventures",
         score: "4.5",
         time: t.recent.cards.africaVentures.time,
         text: t.recent.cards.africaVentures.text
      }
   ];

   return (
      <div className="flex h-screen bg-[#f8f9fa] font-sans text-gray-900 overflow-hidden">

         {/* Sidebar */}
         <Sidebar />

         {/* Main Content Area */}
         <div className="flex-grow flex flex-col overflow-hidden bg-white">

            {/* Global Header */}
            <header className="flex justify-between items-center px-10 py-5 bg-white border-b border-gray-100 z-10 shrink-0">
               <div className="relative w-full max-w-[440px]">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  </div>
                  <input
                     type="text"
                     placeholder={t.topbar.searchPlaceholder}
                     className="w-full pl-9 pr-4 py-2.5 bg-gray-50 border border-transparent rounded-lg text-sm outline-none focus:border-[#0a4d3c]/30 focus:bg-white focus:ring-2 focus:ring-[#0a4d3c]/10 transition"
                  />
               </div>

               <div className="flex items-center gap-6 text-gray-600">
                  <button className="hover:text-gray-900 transition flex items-center gap-2 text-[14px] font-medium">
                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                     {t.topbar.support}
                  </button>
                  <button className="hover:text-gray-900 transition relative">
                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                     <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                  </button>
                  <div className="ml-2">
                     <UserDropdown company={t.profile?.company || "Company"} role={t.profile?.role} initials="N" currentLocale={currentLocale} />
                  </div>
               </div>
            </header>

            {/* Scrollable Content */}
            <main className="flex-grow flex flex-col overflow-y-auto bg-white">
               <div className="p-10 max-w-[1200px] w-full mx-auto flex flex-col">

                  {/* Title Section */}
                  <div className="mb-10">
                     <h1 className="text-[34px] font-bold text-gray-900 tracking-tight mb-3">{t.main.title}</h1>
                     <p className="text-gray-500 text-[15px] max-w-3xl">{t.main.subtitle}</p>
                  </div>

                  <div className="flex flex-col lg:flex-row gap-10 items-start">

                     {/* Left Form Card */}
                     <div className="flex-grow w-full bg-white border border-gray-200 rounded-[20px] p-8 shadow-sm">

                        {/* Select Investor */}
                        <div className="mb-8">
                           <label className="block text-[10px] font-bold text-gray-900 uppercase tracking-widest mb-3">{t.form.selectInvestor}</label>
                           <div className="relative">
                              <select className="w-full appearance-none bg-[#f8f9fa] border border-gray-200 text-gray-700 py-3.5 px-4 rounded-xl outline-none focus:border-[#0a4d3c]/50 focus:ring-4 focus:ring-[#0a4d3c]/10 transition text-[14px]">
                                 <option value="">{t.form.selectInvestorPlaceholder}</option>
                                 <option value="abebe">Abebe Tekle</option>
                                 <option value="globaltech">Global Tech Fund</option>
                                 <option value="africaventures">Africa Ventures</option>
                              </select>
                              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                              </div>
                           </div>
                        </div>

                        {/* Ratings Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                           <div className="bg-[#f8f9fa] rounded-xl p-5 border border-transparent">
                              <label className="block text-[11px] font-bold text-gray-900 uppercase tracking-widest">{t.ratings.strategicValue}</label>
                              {renderStars(ratings.strategic, "strategic")}
                           </div>
                           <div className="bg-[#f8f9fa] rounded-xl p-5 border border-transparent">
                              <label className="block text-[11px] font-bold text-gray-900 uppercase tracking-widest">{t.ratings.communication}</label>
                              {renderStars(ratings.communication, "communication")}
                           </div>
                           <div className="bg-[#f8f9fa] rounded-xl p-5 border border-transparent">
                              <label className="block text-[11px] font-bold text-gray-900 uppercase tracking-widest">{t.ratings.supportiveness}</label>
                              {renderStars(ratings.support, "support")}
                           </div>
                           <div className="bg-[#f8f9fa] rounded-xl p-5 border border-transparent">
                              <label className="block text-[11px] font-bold text-gray-900 uppercase tracking-widest">{t.ratings.fundingProcess}</label>
                              {renderStars(ratings.funding, "funding")}
                           </div>
                        </div>

                        {/* Comments */}
                        <div className="mb-8">
                           <label className="block text-[10px] font-bold text-gray-900 uppercase tracking-widest mb-3">{t.form.commentsAdvice}</label>
                           <textarea
                              rows="5"
                              placeholder={t.form.commentsPlaceholder}
                              className="w-full bg-[#f8f9fa] border border-gray-200 text-gray-700 py-4 px-5 rounded-xl outline-none focus:border-[#0a4d3c]/50 focus:ring-4 focus:ring-[#0a4d3c]/10 transition text-[14px] resize-none"
                           ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button className="w-full py-4 bg-[#0a3a2e] hover:bg-[#072a21] text-white font-bold text-[14px] rounded-xl transition shadow-md">
                           {t.actions.submitFeedback}
                        </button>
                     </div>

                     {/* Right Column - Recent Feedback */}
                     <div className="w-full lg:w-[400px] shrink-0 flex flex-col gap-5">

                        <div className="flex justify-between items-center mb-1">
                           <h2 className="text-[22px] font-bold text-gray-900">{t.recent.title}</h2>
                           <button className="px-4 py-1.5 bg-[#a3792c] hover:bg-[#8f6925] text-white text-[11px] font-bold rounded-full transition shadow-sm">
                              {t.actions.viewAll}
                           </button>
                        </div>

                        {/* Cards */}
                        {recentFeedback.map((fb) => (
                           <div key={fb.id} className="bg-white border border-gray-200 rounded-[16px] p-5 shadow-sm hover:shadow-md transition cursor-pointer">
                              <div className="flex justify-between items-start mb-1">
                                 <h3 className="font-bold text-[15px] text-gray-900">{fb.name}</h3>
                                 <div className="flex items-center gap-1 px-2 py-0.5 bg-[#fae8c8] text-[#8a611c] rounded-md text-[11px] font-bold">
                                    {fb.score}
                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                 </div>
                              </div>
                              <div className="text-[11px] text-gray-400 font-medium mb-3">{fb.time}</div>
                              <p className="text-[13px] text-gray-600 leading-relaxed line-clamp-2">
                                 {fb.text}
                              </p>
                           </div>
                        ))}

                        {/* Insight Card */}
                        <div className="bg-[#052e20] rounded-[20px] p-8 text-white relative overflow-hidden mt-2 shadow-lg">
                           <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-[0.03] rounded-bl-[100px] pointer-events-none"></div>
                           <div className="text-[#10704c] text-5xl font-serif leading-none mb-2">"</div>
                           <p className="text-[14px] text-white/90 leading-relaxed font-medium mb-6 relative z-10 pr-2">
                              {t.insight.message}
                           </p>
                           <div className="text-[10px] font-bold text-[#4ade80] uppercase tracking-widest relative z-10">
                              {t.insight.label}
                           </div>
                        </div>

                     </div>

                  </div>
               </div>
            </main>

         </div>
      </div>
   );
}