"use client";
import { useState } from "react";

export default function AdminSettingsPage() {
  const [toggles, setToggles] = useState({
    userRegistration: true,
    strictVerification: false,
    twoFactor: true,
    notifNewUsers: true,
    notifVerification: true,
    notifAlerts: false,
  });

  const handleToggle = (key) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="max-w-6xl mx-auto pb-12 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Settings</h1>
          <p className="text-slate-500 mt-1">Configure global platform parameters and account security.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-bold text-sm hover:bg-slate-50 transition">
            Discard Changes
          </button>
          <button className="px-5 py-2.5 rounded-xl bg-[#006054] text-white font-bold text-sm hover:bg-[#004d43] transition shadow-md shadow-[#006054]/20">
            Save All Settings
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Profile Card */}
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col items-center text-center">
            <div className="relative mb-6">
              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img src="https://i.pravatar.cc/150?img=11" alt="Abebe Bikila" className="w-full h-full object-cover" />
              </div>
              <button className="absolute bottom-0 right-0 w-8 h-8 bg-[#006054] text-white rounded-full flex items-center justify-center border-2 border-white hover:bg-[#004d43] transition">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </button>
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Abebe Bikila</h2>
            <div className="px-3 py-1 rounded-md bg-[#e6f0ee] text-[#006054] text-[10px] font-bold tracking-widest uppercase mb-4">
              ADMINISTRATOR
            </div>
            <p className="text-sm text-slate-500 mb-8 leading-relaxed max-w-[250px]">
              Primary administrator responsible for platform governance and user verification workflows.
            </p>
            <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border-2 border-[#006054] text-[#006054] font-bold text-sm hover:bg-[#f0fdf4] transition">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
              </svg>
              Edit Profile
            </button>
          </div>

          {/* Platform Settings Card */}
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-5 h-5 text-[#006054]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <h2 className="text-lg font-bold text-slate-800">Platform Settings</h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-bold text-sm text-slate-800">User Registration Control</h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">Allow new users to sign up without direct invitation.</p>
                </div>
                <button 
                  onClick={() => handleToggle('userRegistration')}
                  className={`w-12 h-6 rounded-full relative transition-colors duration-300 shrink-0 ${toggles.userRegistration ? 'bg-[#006054]' : 'bg-slate-200'}`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 shadow-sm transition-transform duration-300 ${toggles.userRegistration ? 'translate-x-6' : 'translate-x-0.5'}`}></div>
                </button>
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-bold text-sm text-slate-800">Strict Verification</h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">Manual KYC approval required for all new startups.</p>
                </div>
                <button 
                  onClick={() => handleToggle('strictVerification')}
                  className={`w-12 h-6 rounded-full relative transition-colors duration-300 shrink-0 ${toggles.strictVerification ? 'bg-[#006054]' : 'bg-slate-200'}`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 shadow-sm transition-transform duration-300 ${toggles.strictVerification ? 'translate-x-6' : 'translate-x-0.5'}`}></div>
                </button>
              </div>

              <div className="pt-2">
                <h3 className="font-bold text-sm text-slate-800 mb-3">Language Preference</h3>
                <div className="flex bg-slate-50 p-1 rounded-xl border border-slate-200">
                  <button className="flex-1 py-2 text-sm font-bold bg-white text-[#006054] rounded-lg shadow-sm">
                    English
                  </button>
                  <button className="flex-1 py-2 text-sm font-bold text-slate-500 hover:text-slate-700 transition">
                    Amharic
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Reports & Logs Card */}
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-5 h-5 text-[#006054]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              <h2 className="text-lg font-bold text-slate-800">Reports & Logs</h2>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <button className="bg-slate-50 p-4 rounded-2xl border border-slate-100 hover:border-slate-200 hover:bg-slate-100 transition text-left group">
                <svg className="w-6 h-6 text-slate-400 group-hover:text-[#006054] transition mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                <h3 className="font-bold text-sm text-slate-800">View System Logs</h3>
                <p className="text-[10px] text-slate-500 mt-1">Real-time activity tracking</p>
              </button>
              <button className="bg-slate-50 p-4 rounded-2xl border border-slate-100 hover:border-slate-200 hover:bg-slate-100 transition text-left group">
                <svg className="w-6 h-6 text-slate-400 group-hover:text-[#006054] transition mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
                <h3 className="font-bold text-sm text-slate-800">Download Data</h3>
                <p className="text-[10px] text-slate-500 mt-1">Export platform analytics</p>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Account & Security Card */}
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-5 h-5 text-[#006054]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
              <h2 className="text-lg font-bold text-slate-800">Account & Security</h2>
            </div>

            <div className="space-y-4">
              <button className="w-full flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-slate-200 transition group">
                <div className="flex items-center gap-4">
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-[#006054] transition shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                  <div className="text-left">
                    <h3 className="font-bold text-sm text-slate-800">Change Password</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Last changed 42 days ago</p>
                  </div>
                </div>
                <svg className="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>

              <div className="w-full flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-4">
                  <svg className="w-5 h-5 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                  <div className="text-left">
                    <h3 className="font-bold text-sm text-slate-800">Two-Factor Authentication</h3>
                    <p className="text-xs text-[#006054] mt-0.5 font-medium">Currently enabled via SMS/Email</p>
                  </div>
                </div>
                <button 
                  onClick={() => handleToggle('twoFactor')}
                  className={`w-12 h-6 rounded-full relative transition-colors duration-300 shrink-0 ${toggles.twoFactor ? 'bg-[#006054]' : 'bg-slate-200'}`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 shadow-sm transition-transform duration-300 ${toggles.twoFactor ? 'translate-x-6' : 'translate-x-0.5'}`}></div>
                </button>
              </div>

              <button className="w-full flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-slate-200 transition group">
                <div className="flex items-center gap-4">
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-[#006054] transition shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <div className="text-left">
                    <h3 className="font-bold text-sm text-slate-800">Manage Sessions</h3>
                    <p className="text-xs text-slate-500 mt-0.5">3 active devices globally</p>
                  </div>
                </div>
                <svg className="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Notifications Card */}
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-5 h-5 text-[#006054]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
              </svg>
              <h2 className="text-lg font-bold text-slate-800">Notifications</h2>
            </div>

            <div className="space-y-6 mb-10">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-slate-700">New User Registrations</h3>
                <button 
                  onClick={() => handleToggle('notifNewUsers')}
                  className={`w-12 h-6 rounded-full relative transition-colors duration-300 shrink-0 ${toggles.notifNewUsers ? 'bg-[#006054]' : 'bg-slate-200'}`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 shadow-sm transition-transform duration-300 ${toggles.notifNewUsers ? 'translate-x-6' : 'translate-x-0.5'}`}></div>
                </button>
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-slate-700">Verification Requests</h3>
                <button 
                  onClick={() => handleToggle('notifVerification')}
                  className={`w-12 h-6 rounded-full relative transition-colors duration-300 shrink-0 ${toggles.notifVerification ? 'bg-[#006054]' : 'bg-slate-200'}`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 shadow-sm transition-transform duration-300 ${toggles.notifVerification ? 'translate-x-6' : 'translate-x-0.5'}`}></div>
                </button>
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-slate-700">System Alerts</h3>
                <button 
                  onClick={() => handleToggle('notifAlerts')}
                  className={`w-12 h-6 rounded-full relative transition-colors duration-300 shrink-0 ${toggles.notifAlerts ? 'bg-[#006054]' : 'bg-slate-200'}`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 shadow-sm transition-transform duration-300 ${toggles.notifAlerts ? 'translate-x-6' : 'translate-x-0.5'}`}></div>
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <svg className="w-5 h-5 text-[#006054]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
              <h2 className="text-lg font-bold text-slate-800">User Management</h2>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <button className="py-2.5 rounded-xl border border-slate-200 text-slate-700 font-bold text-sm hover:bg-slate-50 transition">
                Default User Roles
              </button>
              <button className="py-2.5 rounded-xl border border-slate-200 text-slate-700 font-bold text-sm hover:bg-slate-50 transition">
                Permissions Overview
              </button>
            </div>
          </div>

          {/* Danger Zone Card */}
          <div className="bg-red-50/30 rounded-3xl p-8 border border-red-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
              </svg>
              <h2 className="text-lg font-bold text-red-600">Danger Zone</h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-bold text-sm text-slate-800">Reset Platform Data</h3>
                  <p className="text-xs text-slate-500 mt-1">Permanently delete all user and startup records.</p>
                </div>
                <button className="px-5 py-2 rounded-xl border border-red-200 text-red-600 font-bold text-sm hover:bg-red-50 transition shrink-0">
                  Reset All
                </button>
              </div>
              
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-bold text-sm text-slate-800">Logout Everywhere</h3>
                  <p className="text-xs text-slate-500 mt-1">Terminate all active sessions for this account.</p>
                </div>
                <button className="px-5 py-2 rounded-xl bg-red-600 text-white font-bold text-sm hover:bg-red-700 transition shadow-md shadow-red-600/20 shrink-0">
                  Log Out
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer Details */}
      <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between text-[10px] font-bold text-slate-400 tracking-widest uppercase">
        <p>Build 2.4.0-STABLE • © 2024 Admin Central Platform</p>
        <div className="flex items-center gap-6 mt-4 md:mt-0">
          <span>System Status: 100%</span>
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </div>
  );
}
