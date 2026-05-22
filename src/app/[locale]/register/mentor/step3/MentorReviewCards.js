"use client";

import Link from "next/link";
import { useState } from "react";

const emptyText = "Not provided";

function formatList(value) {
  if (Array.isArray(value)) return value.filter(Boolean);
  if (typeof value === "string") {
    try {
      const parsed = JSON.parse(value);
      if (Array.isArray(parsed)) return parsed.filter(Boolean);
    } catch {
      // Fall back to comma-separated text below.
    }
    return value.split(",").map(item => item.trim()).filter(Boolean);
  }
  return [];
}

function DocumentRow({ file, label }) {
  if (!file?.name) return null;

  return (
    <div className="bg-white rounded-lg border border-gray-100 p-3.5 flex justify-between items-center gap-3">
      <div className="flex items-center gap-3 min-w-0">
        <div className="text-[#0f3d32] shrink-0">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414A1 1 0 0120 6.414V19a2 2 0 01-2 2z"></path></svg>
        </div>
        <div className="min-w-0">
          <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">{label}</p>
          <p className="text-sm font-bold text-gray-800 truncate">{file.name}</p>
        </div>
      </div>
      <div className="w-5 h-5 bg-[#9dbab0] bg-opacity-70 text-[#1c3a2a] rounded-full flex items-center justify-center shrink-0">
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
      </div>
    </div>
  );
}

export default function MentorReviewCards({ t, currentLocale }) {
  const [reviewData] = useState(() => {
    if (typeof window === "undefined") return null;

    const mentorRegistration = JSON.parse(
      sessionStorage.getItem("mentorRegistration") || "{}"
    );
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    return {
      step1: mentorRegistration.step1 || {},
      step2: mentorRegistration.step2 || {},
      user,
    };
  });

  if (!reviewData) {
    return <div className="text-center py-8 text-xs font-bold text-gray-400">Loading...</div>;
  }

  const { step1, step2, user } = reviewData;
  const skills = formatList(step2.skills);
  const industries = formatList(step2.industries);
  const expertise = formatList(step1.expertise);
  const stages = step2.availability?.preferred_startup_stage || [];
  const documents = step2.documents || {};

  return (
    <>
      <div className="bg-white rounded-xl border border-gray-100 p-6 relative">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2 text-[#0f3d32] font-bold text-xs uppercase tracking-widest">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            {t.account.title}
          </div>
          <Link href={`/${currentLocale}/register/mentor`} className="text-[10px] font-bold text-[#136150] hover:text-[#0f3d32] flex items-center gap-1 uppercase tracking-widest transition">
            {t.edit}
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 gap-y-6 gap-x-4">
          <div>
            <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-1.5">{t.account.fullName}</p>
            <p className="text-xs font-bold text-gray-800">{user.full_name || user.name || emptyText}</p>
          </div>
          <div>
            <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-1.5">{t.account.emailAddress}</p>
            <p className="text-xs font-bold text-gray-800">{user.email || emptyText}</p>
          </div>
          <div>
            <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-1.5">Phone number</p>
            <p className="text-xs font-bold text-gray-800">{step1.phone_number || emptyText}</p>
          </div>
          <div>
            <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-1.5">{t.account.professionalTitle}</p>
            <p className="text-xs font-bold text-gray-800">{step1.headline || emptyText}</p>
          </div>
          <div>
            <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-1.5">{t.account.yearsOfExperience}</p>
            <p className="text-xs font-bold text-gray-800">{step1.years_experience ? `${step1.years_experience}+ years` : emptyText}</p>
          </div>
          <div>
            <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-1.5">Languages</p>
            <p className="text-xs font-bold text-gray-800">{step1.language || emptyText}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 relative">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2 text-[#0f3d32] font-bold text-xs uppercase tracking-widest">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
            {t.professional.title}
          </div>
          <Link href={`/${currentLocale}/register/mentor/step2`} className="text-[10px] font-bold text-[#136150] hover:text-[#0f3d32] flex items-center gap-1 uppercase tracking-widest transition">
            {t.edit}
          </Link>
        </div>

        <div className="flex flex-col gap-5">
          <div>
            <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-2">{t.professional.coreExpertise}</p>
            <div className="flex gap-2 flex-wrap">
              {[...expertise, ...skills].length ? [...expertise, ...skills].map(item => (
                <span key={item} className="bg-[#e8f5e9] text-[#136150] px-3 py-1 rounded-full text-[10px] font-bold border border-[#cde5dd]">{item}</span>
              )) : <p className="text-xs font-bold text-gray-800">{emptyText}</p>}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-1.5">Industries</p>
              <p className="text-xs font-bold text-gray-800">{industries.join(", ") || emptyText}</p>
            </div>
            <div>
              <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-1.5">Country</p>
              <p className="text-xs font-bold text-gray-800">{step2.country || emptyText}</p>
            </div>
            <div>
              <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-1.5">{t.professional.targetStages}</p>
              <p className="text-xs font-bold text-gray-800">{stages.join(", ") || emptyText}</p>
            </div>
            <div>
              <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-1.5">{t.professional.sessionFormat}</p>
              <p className="text-xs font-bold text-gray-800">{step2.availability?.mentorship_mode || emptyText}</p>
            </div>
            <div>
              <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-1.5">Availability</p>
              <p className="text-xs font-bold text-gray-800">{step2.availability?.days?.join(", ") || emptyText}</p>
            </div>
            <div>
              <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-1.5">Hourly rate</p>
              <p className="text-xs font-bold text-gray-800">{step1.hourly_rate ? `ETB ${step1.hourly_rate}` : emptyText}</p>
            </div>
            <div className="sm:col-span-2">
              <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-1.5">Bio</p>
              <p className="text-xs font-medium text-gray-700 leading-relaxed">{step1.bio || emptyText}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 relative">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2 text-[#0f3d32] font-bold text-xs uppercase tracking-widest">
            Verification Documents
          </div>
          <Link href={`/${currentLocale}/register/mentor/step2`} className="text-[10px] font-bold text-[#136150] hover:text-[#0f3d32] uppercase tracking-widest transition">
            {t.edit}
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <DocumentRow label="Government ID" file={documents.government_id} />
          <DocumentRow label="CV" file={documents.cv} />
          <DocumentRow label="Profile photo" file={documents.profile_picture} />
          {!documents.government_id?.name && !documents.cv?.name && !documents.profile_picture?.name && (
            <p className="text-xs font-bold text-gray-400">{emptyText}</p>
          )}
        </div>
      </div>
    </>
  );
}
