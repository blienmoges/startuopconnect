"use client";

import { useState } from "react";
import { useParams, usePathname, useRouter } from "next/navigation";
import Sidebar from "@/components/startup/Sidebar";
import en from "@/dictionaries/en.json";
import am from "@/dictionaries/am.json";
import UserDropdown from "@/components/startup/UserDropdown";

export default function SettingsPage() {
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();

  const currentLocale = params.locale === "am" ? "am" : "en";
  const dict = currentLocale === "am" ? am : en;
  const t = dict.startupSettings;

  const handleLanguageChange = (newLocale) => {
    const newPath = pathname.replace(/^\/(en|am)(?=\/|$)/, `/${newLocale}`);

    if (newPath === pathname) {
      router.push(`/${newLocale}${pathname}`);
    } else {
      router.push(newPath);
    }
  };

  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", label: t.tabs.profileSettings, icon: "user" },
    { id: "security", label: t.tabs.accountSecurity, icon: "lock" },
    { id: "language", label: t.tabs.languageAccessibility, icon: "globe" },
    { id: "support", label: t.tabs.support, icon: "help" }
  ];

  const startupStages = [
    { id: "ideation", label: t.profile.stages.ideation },
    { id: "early", label: t.profile.stages.earlyStage },
    { id: "scaling", label: t.profile.stages.scaling },
    { id: "mature", label: t.profile.stages.mature }
  ];

  const securityAlerts = [
    {
      id: "login",
      title: t.security.alerts.loginAttempts.title,
      desc: t.security.alerts.loginAttempts.description
    },
    {
      id: "pwd_change",
      title: t.security.alerts.passwordChanges.title,
      desc: t.security.alerts.passwordChanges.description
    },
    {
      id: "suspicious",
      title: t.security.alerts.suspiciousActivity.title,
      desc: t.security.alerts.suspiciousActivity.description
    }
  ];

  const accessibilityOptions = [
    {
      id: "high_contrast",
      title: t.language.accessibility.highContrast.title,
      desc: t.language.accessibility.highContrast.description
    },
    {
      id: "reduce_motion",
      title: t.language.accessibility.reduceMotion.title,
      desc: t.language.accessibility.reduceMotion.description
    },
    {
      id: "larger_text",
      title: t.language.accessibility.largerText.title,
      desc: t.language.accessibility.largerText.description,
      active: true
    },
    {
      id: "screen_reader",
      title: t.language.accessibility.screenReader.title,
      desc: t.language.accessibility.screenReader.description,
      active: true
    },
    {
      id: "keyboard",
      title: t.language.accessibility.keyboardSupport.title,
      desc: t.language.accessibility.keyboardSupport.description,
      active: true
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-gray-900 flex h-screen overflow-hidden">

      {/* Main Sidebar */}
      <Sidebar />

      {/* Settings Content Wrapper */}
      <main className="flex-grow flex flex-col h-full bg-white overflow-hidden">

        {/* Top Navbar */}
        <header className="flex justify-between items-center px-8 py-5 bg-white border-b border-gray-100 w-full z-10 sticky top-0 shrink-0">
          <div className="flex items-center gap-4">
            <div className="relative w-[400px] hidden lg:block">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              <input
                type="text"
                placeholder={t.topbar.searchPlaceholder}
                className="w-full pl-11 pr-4 py-2 bg-[#f8fafc] border border-gray-100 rounded-xl text-xs outline-none focus:ring-2 focus:ring-[#0f3d32]/10 transition"
              />
            </div>
          </div>

          <div className="flex items-center gap-6 ml-auto">
            <button className="text-gray-400 hover:text-gray-600 transition relative">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
              </svg>
            </button>

            <button className="text-gray-400 hover:text-gray-600 transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </button>

            <div className="ml-4">
              <UserDropdown company={t.profile?.company || "Company"} role={t.profile?.role} initials="AK" currentLocale={currentLocale} />
            </div>
          </div>
        </header>

        <div className="flex flex-grow overflow-hidden bg-[#f8fafc]/50">

          {/* Settings Sub-Sidebar */}
          <div className="w-[300px] shrink-0 p-8 flex flex-col gap-4 border-r border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">
              {t.sidebar.title}
            </h2>
            <p className="text-xs text-gray-500 mb-6 leading-relaxed">
              {t.sidebar.description}
            </p>

            <div className="flex flex-col gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-xs font-bold transition text-left ${activeTab === tab.id
                    ? "bg-[#eaf4f1] text-[#0f3d32] shadow-sm border border-[#0f3d32]/10"
                    : "text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                    }`}
                >
                  <div className="w-5 h-5 flex items-center justify-center">
                    {tab.icon === "user" && (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                    )}
                    {tab.icon === "lock" && (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                      </svg>
                    )}
                    {tab.icon === "globe" && (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                      </svg>
                    )}
                    {tab.icon === "help" && (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    )}
                  </div>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Active Settings Panel */}
          <div className="flex-grow overflow-y-auto p-8 lg:p-12">
            <div className="max-w-[800px] mx-auto">

              {activeTab === "profile" && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="bg-white rounded-3xl border border-gray-100 p-8 lg:p-10 shadow-sm relative overflow-hidden">
                    <div className="flex justify-between items-start mb-10 relative z-10">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 tracking-tight mb-1">
                          {t.profile.title}
                        </h3>
                        <p className="text-xs text-gray-500 font-medium">
                          {t.profile.subtitle}
                        </p>
                      </div>

                      <div className="relative group">
                        <div className="w-20 h-20 rounded-2xl bg-gray-50 border-2 border-dashed border-gray-200 flex items-center justify-center text-gray-300 overflow-hidden relative">
                          <svg className="w-full h-full opacity-10" viewBox="0 0 80 80">
                            <rect width="80" height="80" fill="currentColor" />
                            <circle cx="40" cy="40" r="20" fill="white" />
                          </svg>
                        </div>
                        <button className="absolute -bottom-2 -right-2 w-7 h-7 bg-[#0f3d32] text-white rounded-full flex items-center justify-center shadow-lg border-2 border-white hover:scale-110 transition group-hover:bg-[#0a2921]">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">
                          {t.profile.form.startupName}
                        </label>
                        <input
                          type="text"
                          defaultValue="EthioTech Solutions"
                          className="w-full px-5 py-3 bg-[#f8fafc] border border-gray-100 rounded-xl text-sm font-medium focus:ring-2 focus:ring-[#0f3d32]/10 outline-none transition"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">
                          {t.profile.form.founderName}
                        </label>
                        <input
                          type="text"
                          defaultValue="Abebe Kebede"
                          className="w-full px-5 py-3 bg-[#f8fafc] border border-gray-100 rounded-xl text-sm font-medium focus:ring-2 focus:ring-[#0f3d32]/10 outline-none transition"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">
                          {t.profile.form.emailAddress}
                        </label>
                        <input
                          type="email"
                          defaultValue="abebe@ethiotech.com"
                          className="w-full px-5 py-3 bg-[#f8fafc] border border-gray-100 rounded-xl text-sm font-medium focus:ring-2 focus:ring-[#0f3d32]/10 outline-none transition"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">
                          {t.profile.form.phoneNumber}
                        </label>
                        <input
                          type="text"
                          defaultValue="+251 911 234 567"
                          className="w-full px-5 py-3 bg-[#f8fafc] border border-gray-100 rounded-xl text-sm font-medium focus:ring-2 focus:ring-[#0f3d32]/10 outline-none transition"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">
                          {t.profile.form.location}
                        </label>
                        <div className="relative">
                          <select className="w-full px-5 py-3 bg-[#f8fafc] border border-gray-100 rounded-xl text-sm font-medium appearance-none focus:ring-2 focus:ring-[#0f3d32]/10 outline-none transition">
                            <option>{t.profile.locations.addisAbaba}</option>
                            <option>{t.profile.locations.nairobi}</option>
                          </select>
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">
                          {t.profile.form.industry}
                        </label>
                        <div className="relative">
                          <select className="w-full px-5 py-3 bg-[#f8fafc] border border-gray-100 rounded-xl text-sm font-medium appearance-none focus:ring-2 focus:ring-[#0f3d32]/10 outline-none transition">
                            <option>{t.profile.industries.fintech}</option>
                            <option>{t.profile.industries.agritech}</option>
                            <option>{t.profile.industries.healthtech}</option>
                          </select>
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 mb-8">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">
                        {t.profile.form.startupStage}
                      </label>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {startupStages.map((stage) => (
                          <button
                            key={stage.id}
                            className={`py-3.5 rounded-xl text-[11px] font-bold border transition ${stage.id === "early"
                              ? "bg-[#0f3d32] text-white border-[#0f3d32] shadow-md"
                              : "bg-white border-gray-100 text-gray-500 hover:border-[#0f3d32]/30"
                              }`}
                          >
                            {stage.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-1.5 mb-10">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">
                        {t.profile.form.shortDescription}
                      </label>
                      <textarea
                        rows="4"
                        defaultValue={t.profile.descriptionValue}
                        className="w-full px-5 py-4 bg-[#f8fafc] border border-gray-100 rounded-xl text-sm font-medium focus:ring-2 focus:ring-[#0f3d32]/10 outline-none transition resize-none leading-relaxed"
                      ></textarea>

                      <div className="flex justify-end mt-1">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                          {t.profile.characterCount}
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-end gap-4 pt-6 border-t border-gray-50">
                      <button className="px-8 py-3 rounded-xl text-xs font-bold text-gray-500 hover:bg-gray-50 transition border border-transparent">
                        {t.actions.cancel}
                      </button>
                      <button className="px-8 py-3 bg-[#0f3d32] text-white rounded-xl text-xs font-bold hover:bg-[#0a2921] transition shadow-md">
                        {t.actions.saveChanges}
                      </button>
                    </div>
                  </div>

                  {/* Banner */}
                  <div className="bg-white rounded-3xl border border-gray-100 p-6 flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 bg-[#f0fdf4] rounded-2xl flex items-center justify-center text-[#16a34a] border border-[#dcfce7]">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.952 11.952 0 01-9.618 3.07L3 7c0 5.148 2.214 9.774 5.765 13.041a1.996 1.996 0 002.47 0C14.786 16.774 17 12.148 17 7l-.382-.986z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-900 tracking-tight mb-0.5">
                          {t.profile.securityBanner.title}
                        </h4>
                        <p className="text-[11px] text-gray-500 font-medium leading-relaxed">
                          {t.profile.securityBanner.description}
                        </p>
                      </div>
                    </div>

                    <button className="text-[#0f3d32] font-black text-[11px] uppercase tracking-widest hover:underline whitespace-nowrap ml-6">
                      {t.actions.setup2fa}
                    </button>
                  </div>
                </div>
              )}

              {activeTab === "security" && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="bg-white rounded-3xl border border-gray-100 p-8 lg:p-10 shadow-sm">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="text-[#0f3d32]">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                        {t.security.passwordSettings.title}
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 gap-8 mb-10">
                      <div className="space-y-1.5 max-w-md">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">
                          {t.security.passwordSettings.currentPassword}
                        </label>
                        <input
                          type="password"
                          placeholder="••••••••"
                          className="w-full px-5 py-3 bg-[#f8fafc] border border-gray-100 rounded-xl text-sm font-medium focus:ring-2 focus:ring-[#0f3d32]/10 outline-none transition"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">
                            {t.security.passwordSettings.newPassword}
                          </label>
                          <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full px-5 py-3 bg-[#f8fafc] border border-gray-100 rounded-xl text-sm font-medium focus:ring-2 focus:ring-[#0f3d32]/10 outline-none transition"
                          />
                          <div className="flex items-center justify-between mt-2 px-1">
                            <div className="flex-grow bg-gray-100 h-1 rounded-full mr-3 overflow-hidden">
                              <div className="bg-[#16a34a] w-3/4 h-full"></div>
                            </div>
                            <span className="text-[9px] font-black text-[#16a34a] uppercase tracking-widest whitespace-nowrap">
                              {t.security.passwordSettings.strong}
                            </span>
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">
                            {t.security.passwordSettings.confirmNewPassword}
                          </label>
                          <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full px-5 py-3 bg-[#f8fafc] border border-gray-100 rounded-xl text-sm font-medium focus:ring-2 focus:ring-[#0f3d32]/10 outline-none transition"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button className="px-8 py-3 bg-[#0f3d32] text-white rounded-xl text-xs font-bold hover:bg-[#0a2921] transition shadow-md">
                        {t.actions.updatePassword}
                      </button>
                    </div>
                  </div>

                  <div className="bg-white rounded-3xl border border-gray-100 p-8 lg:p-10 shadow-sm">
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#eff6ff] text-[#3b82f6] rounded-xl flex items-center justify-center border border-[#dbeafe]">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-gray-900 tracking-tight">
                            {t.security.twoFactor.title}
                          </h4>
                          <p className="text-[11px] text-gray-500 font-medium">
                            {t.security.twoFactor.description}
                          </p>
                        </div>
                      </div>

                      <div className="relative inline-flex items-center cursor-pointer group">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0f3d32]"></div>
                      </div>
                    </div>

                    <button className="text-[10px] font-black text-[#0f3d32] uppercase tracking-[0.15em] hover:underline flex items-center gap-2">
                      {t.actions.setup2fa}
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </button>
                  </div>

                  <div className="bg-white rounded-3xl border border-gray-100 p-8 lg:p-10 shadow-sm">
                    <div className="flex items-center gap-3 mb-10">
                      <div className="text-[#0f3d32]">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                        {t.security.alerts.title}
                      </h3>
                    </div>

                    <div className="space-y-8">
                      {securityAlerts.map((alert, i) => (
                        <div
                          key={alert.id}
                          className={`flex items-center justify-between pb-8 ${i !== 2 ? "border-b border-gray-50" : ""
                            }`}
                        >
                          <div>
                            <h4 className="text-sm font-bold text-gray-800 tracking-tight mb-1">
                              {alert.title}
                            </h4>
                            <p className="text-[11px] text-gray-500 font-medium leading-relaxed">
                              {alert.desc}
                            </p>
                          </div>

                          <div className="relative inline-flex items-center cursor-pointer group">
                            <input type="checkbox" defaultChecked className="sr-only peer" />
                            <div className="w-10 h-5.5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#0f3d32]"></div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-end gap-4 pt-4 mt-4 border-t border-gray-50">
                      <button className="px-8 py-3 rounded-xl text-xs font-bold text-gray-500 hover:bg-gray-50 transition">
                        {t.actions.cancel}
                      </button>
                      <button className="px-8 py-3 bg-[#0f3d32] text-white rounded-xl text-xs font-bold hover:bg-[#0a2921] transition shadow-md">
                        {t.actions.saveSecuritySettings}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "language" && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="bg-white rounded-3xl border border-gray-100 p-8 lg:p-10 shadow-sm">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="text-[#0f3d32]">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.582a7.33 7.33 0 01-3.938-2.486m14.77-1.114a11.873 11.873 0 01-2.25 7.414m-1.114-14.77A11.873 11.873 0 0013.5 13.5m-4.5 4.5a11.873 11.873 0 01-7.414-2.25"></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                        {t.language.languageSettings.title}
                      </h3>
                    </div>

                    <div className="space-y-1.5 max-w-md mb-8">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">
                        {t.language.languageSettings.preferredLanguage}
                      </label>

                      <div className="relative">
                        <select
                          value={currentLocale}
                          onChange={(e) => handleLanguageChange(e.target.value)}
                          className="w-full px-5 py-3 bg-[#f8fafc] border border-gray-100 rounded-xl text-sm font-medium appearance-none outline-none focus:ring-2 focus:ring-[#0f3d32]/10 transition"
                        >
                          <option value="en">
                            {t.language.languageSettings.english}
                          </option>
                          <option value="am">
                            {t.language.languageSettings.amharic}
                          </option>
                        </select>

                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-3xl border border-gray-100 p-8 lg:p-10 shadow-sm">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="text-[#0f3d32]">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                        {t.language.display.title}
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-4">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">
                          {t.language.display.theme}
                        </label>

                        <div className="flex gap-4">
                          <button className="flex-grow p-4 bg-[#eaf4f1] border-2 border-[#0f3d32] rounded-2xl text-[#0f3d32] font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 shadow-sm transition">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m12.728 12.728L5.636 5.636"></path>
                            </svg>
                            {t.language.display.lightMode}
                          </button>

                          <button className="flex-grow p-4 bg-gray-50 border border-gray-100 rounded-2xl text-gray-400 font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-gray-100 transition">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                            </svg>
                            {t.language.display.darkMode}
                          </button>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">
                          {t.language.display.fontSize}
                        </label>
                        <input
                          type="range"
                          min="12"
                          max="20"
                          defaultValue="14"
                          className="w-full accent-[#0f3d32] h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="flex justify-between text-[9px] font-black text-gray-400 uppercase tracking-widest">
                          <span>{t.language.display.small}</span>
                          <span>{t.language.display.default}</span>
                          <span>{t.language.display.large}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-3xl border border-gray-100 p-8 lg:p-10 shadow-sm">
                    <div className="flex items-center gap-3 mb-10">
                      <div className="text-[#0f3d32]">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                        {t.language.accessibility.title}
                      </h3>
                    </div>

                    <div className="space-y-6">
                      {accessibilityOptions.map((opt, i) => (
                        <div
                          key={opt.id}
                          className={`flex items-center justify-between pb-6 ${i !== 4 ? "border-b border-gray-50" : ""
                            }`}
                        >
                          <div>
                            <h4 className="text-sm font-bold text-gray-800 tracking-tight mb-0.5">
                              {opt.title}
                            </h4>
                            <p className="text-[10px] text-gray-500 font-medium leading-relaxed">
                              {opt.desc}
                            </p>
                          </div>

                          <div className="relative inline-flex items-center cursor-pointer group">
                            <input type="checkbox" defaultChecked={opt.active} className="sr-only peer" />
                            <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#0f3d32]"></div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-end gap-4 pt-6 mt-6 border-t border-gray-50">
                      <button className="px-8 py-3 rounded-xl text-xs font-bold text-gray-500 hover:bg-gray-50 transition">
                        {t.actions.cancel}
                      </button>
                      <button className="px-8 py-3 bg-[#0f3d32] text-white rounded-xl text-xs font-bold hover:bg-[#0a2921] transition shadow-md">
                        {t.actions.savePreferences}
                      </button>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </main>

    </div>
  );
}