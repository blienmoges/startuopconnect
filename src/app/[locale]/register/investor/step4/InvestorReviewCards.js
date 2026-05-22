"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function InvestorReviewCards({ t, currentLocale }) {
    const [savedData, setSavedData] = useState(null);

    useEffect(() => {
        const data = sessionStorage.getItem("investorRegistration");
        if (data) {
            setSavedData(JSON.parse(data));
        }
    }, []);

    if (!savedData) {
        return <div className="text-center py-10 text-gray-500">Loading...</div>;
    }

    const { step1, step2, step3 } = savedData;

    return (
        <div className="flex flex-col gap-10">
            {/* Section 1: Account Information */}
            <section>
              <div className="flex justify-between items-center mb-6 pb-2 border-b border-gray-100">
                <div className="flex items-center gap-2 text-[#0f3d32]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                  <h3 className="text-xs font-bold uppercase tracking-widest">{t.account.title}</h3>
                </div>
                <Link href={`/${currentLocale}/register/investor`} className="text-xs font-bold text-[#136150] hover:text-[#0f3d32] flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                  {t.edit}
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 pl-2">
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1.5">{t.account.fullLegalName}</p>
                  <p className="text-sm font-bold text-gray-800">{step1?.legal_name || "N/A"}</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1.5">{t.account.workEmail}</p>
                  <p className="text-sm font-bold text-gray-800">{step1?.work_email || "N/A"}</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1.5">{t.account.phoneNumber}</p>
                  <p className="text-sm font-bold text-gray-800">{step1?.phone_number || "N/A"}</p>
                </div>
              </div>
            </section>

            {/* Section 2: Investor Type and Profile */}
            <section>
              <div className="flex justify-between items-center mb-6 pb-2 border-b border-gray-100">
                <div className="flex items-center gap-2 text-[#0f3d32]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                  <h3 className="text-xs font-bold uppercase tracking-widest">{t.profile.title}</h3>
                </div>
                <Link href={`/${currentLocale}/register/investor/step2`} className="text-xs font-bold text-[#136150] hover:text-[#0f3d32] flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                  {t.edit}
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 pl-2">
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1.5">{t.profile.investorType}</p>
                  <div className="inline-block bg-transparent text-[#167b66] px-3 py-1 rounded text-xs font-bold border border-[#376b52] border-opacity-30">{step2?.investor_type || "N/A"}</div>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1.5">{t.profile.locationPreference}</p>
                  <p className="text-sm font-bold text-gray-800">{step2?.country || "N/A"}</p>
                </div>

                <div className="sm:col-span-2">
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-2">{t.profile.preferredSectors}</p>
                  <div className="flex gap-2 flex-wrap">
                    {(step2?.preferred_industry || "").split(",").map((sector, index) => (
                        <span key={index} className="bg-[#9dbab0] bg-opacity-70 text-[#1c3a2a] px-3 py-1 rounded text-xs font-bold">{sector || "N/A"}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1.5">{t.profile.startupStage}</p>
                  <p className="text-sm font-bold text-gray-800">{step2?.investment_stage || "N/A"}</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1.5">{t.profile.investmentRange}</p>
                  <p className="text-sm font-bold text-gray-800">${step2?.investment_budget?.toLocaleString() || "N/A"}</p>
                </div>

                <div className="sm:col-span-2">
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1.5">{t.profile.professionalBio}</p>
                  <p className="text-sm text-gray-700 leading-relaxed font-medium bg-transparent p-3 rounded border border-[#376b52] border-opacity-30">
                    {step2?.bio || "N/A"}
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Verification Summary */}
            <section>
              <div className="flex justify-between items-center mb-6 pb-2 border-b border-gray-100">
                <div className="flex items-center gap-2 text-[#0f3d32]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <h3 className="text-xs font-bold uppercase tracking-widest">{t.verification.title}</h3>
                </div>
                <Link href={`/${currentLocale}/register/investor/step3`} className="text-xs font-bold text-[#136150] hover:text-[#0f3d32] flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                  {t.edit}
                </Link>
              </div>

              <div className="flex flex-col gap-3 pl-2">
                {/* Document 1 */}
                {step3?.personalDoc?.name && (
                    <div className="bg-transparent border border-[#376b52] border-opacity-30 rounded-lg p-3.5 flex justify-between items-center ">
                      <div className="flex items-center gap-3">
                        <div className="text-[#0f3d32]">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                        </div>
                        <span className="text-sm font-bold text-gray-800 mt-0.5">{step3.personalDoc.name}</span>
                      </div>
                      <div className="w-5 h-5 bg-[#9dbab0] bg-opacity-70 text-[#1c3a2a] rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                      </div>
                    </div>
                )}

                {/* Document 2 */}
                {step3?.tradeLicense?.name && (
                    <div className="bg-transparent border border-[#376b52] border-opacity-30 rounded-lg p-3.5 flex justify-between items-center ">
                      <div className="flex items-center gap-3">
                        <div className="text-[#0f3d32]">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                        </div>
                        <span className="text-sm font-bold text-gray-800 mt-0.5">{step3.tradeLicense.name}</span>
                      </div>
                      <div className="w-5 h-5 bg-[#9dbab0] bg-opacity-70 text-[#1c3a2a] rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                      </div>
                    </div>
                )}

                {/* Document 3 */}
                {step3?.tinCertificate?.name && (
                    <div className="bg-transparent border border-[#376b52] border-opacity-30 rounded-lg p-3.5 flex justify-between items-center ">
                      <div className="flex items-center gap-3">
                        <div className="text-[#0f3d32]">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                        </div>
                        <span className="text-sm font-bold text-gray-800 mt-0.5">{step3.tinCertificate.name}</span>
                      </div>
                      <div className="w-5 h-5 bg-[#9dbab0] bg-opacity-70 text-[#1c3a2a] rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                      </div>
                    </div>
                )}

                {/* Check text */}
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-4 h-4 bg-[#167b66] rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <p className="text-[11px] font-bold text-gray-600 uppercase tracking-widest mt-0.5">{t.verification.accepted}</p>
                </div>
              </div>
            </section>
        </div>
    );
}
