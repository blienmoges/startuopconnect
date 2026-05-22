"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

function formatFileSize(file) {
    const size = Number(file?.size || file?.size_bytes || 0);

    if (!size) return "Unknown size";

    return `${(size / (1024 * 1024)).toFixed(1)} MB`;
}
export default function StartupReviewCards({ t, currentLocale }) {
    const [reviewData, setReviewData] = useState(null);

    useEffect(() => {
        const startupRegistration = JSON.parse(
            sessionStorage.getItem("startupRegistration") || "{}"
        );

        const user = JSON.parse(localStorage.getItem("user") || "{}");

        setReviewData({
            step1: startupRegistration.step1 || {},
            step2: startupRegistration.step2 || {},
            step3: startupRegistration.step3 || {},
            user,
        });
    }, []);

    if (!reviewData) {
        return null;
    }

    const { step1, step2, step3, user } = reviewData;

    const founderFile = step3.founder_id_file;
    const businessFile = step3.business_registration_file;

    const files = [
        founderFile,
        businessFile,
    ].filter(Boolean);

    return (
        <div className="flex flex-col gap-6 mb-12">
            {/* Card 1: Account Information */}
            <div className="bg-transparent rounded-2xl p-6 border-none flex flex-col">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2 text-[#167b66]">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <h2 className="text-lg font-bold">{t.account.title}</h2>
                    </div>

                    <Link
                        href={`/${currentLocale}/register/startup`}
                        className="text-xs font-bold text-[#167b66] hover:underline uppercase tracking-wide"
                    >
                        {t.editSection}
                    </Link>
                </div>

                <div className="bg-transparent rounded-xl p-5 border border-[#376b52] border-opacity-30 grid grid-cols-2 gap-y-6 gap-x-8">
                    <div>
                        <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                            {t.account.fullName}
                        </h4>
                        <p className="text-sm font-medium text-gray-900">
                            {step1.full_name || "Not provided"}
                        </p>
                    </div>

                    <div>
                        <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                            {t.account.workEmail}
                        </h4>
                        <p className="text-sm font-medium text-gray-900">
                            {user.email || "Not provided"}
                        </p>
                    </div>

                    <div>
                        <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                            {t.account.phoneNumber}
                        </h4>
                        <p className="text-sm font-medium text-gray-900">
                            {step1.phone_number || "Not provided"}
                        </p>
                    </div>

                    <div>
                        <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                            {t.account.role}
                        </h4>
                        <p className="text-sm font-medium text-gray-900">
                            {user.role || localStorage.getItem("role") || "Startup"}
                        </p>
                    </div>
                </div>
            </div>

            {/* Card 2: Company Details */}
            <div className="bg-transparent rounded-2xl p-6 border-none flex flex-col">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2 text-[#167b66]">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <h2 className="text-lg font-bold">{t.company.title}</h2>
                    </div>

                    <Link
                        href={`/${currentLocale}/register/startup/step2`}
                        className="text-xs font-bold text-[#167b66] hover:underline uppercase tracking-wide"
                    >
                        {t.editSection}
                    </Link>
                </div>

                <div className="bg-transparent rounded-xl p-5 border border-[#376b52] border-opacity-30 grid grid-cols-2 gap-y-6 gap-x-8">
                    <div className="col-span-2">
                        <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                            {t.company.companyName}
                        </h4>
                        <p className="text-[15px] font-bold text-gray-900">
                            {step2.startup_name || "Not provided"}
                        </p>
                    </div>

                    <div>
                        <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                            {t.company.industry}
                        </h4>
                        <p className="text-sm font-medium text-gray-900">
                            {step2.sector || "Not provided"}
                        </p>
                    </div>

                    <div>
                        <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                            {t.company.registrationNumber}
                        </h4>
                        <p className="text-sm font-medium text-gray-900">
                            {step2.year_founded || "Not provided"}
                        </p>
                    </div>

                    <div>
                        <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                            Stage
                        </h4>
                        <p className="text-sm font-medium text-gray-900">
                            {step2.startup_stage || "Not provided"}
                        </p>
                    </div>

                    <div>
                        <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                            Location
                        </h4>
                        <p className="text-sm font-medium text-gray-900">
                            {step2.city && step2.region
                                ? `${step2.city}, ${step2.region}`
                                : step2.city || step2.region || "Not provided"}
                        </p>
                    </div>

                    <div className="col-span-2">
                        <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                            {t.company.businessSummary}
                        </h4>
                        <p className="text-sm font-medium text-gray-700 leading-relaxed">
                            {step2.tagline || "Not provided"}
                        </p>
                    </div>
                </div>
            </div>

            {/* Card 3: Verification Documents */}
            <div className="bg-transparent rounded-2xl p-6 border-none flex flex-col">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2 text-[#167b66]">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <h2 className="text-lg font-bold">{t.documents.title}</h2>
                    </div>

                    <Link
                        href={`/${currentLocale}/register/startup/step3`}
                        className="text-xs font-bold text-[#167b66] hover:underline uppercase tracking-wide"
                    >
                        {t.editSection}
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {files.length === 0 ? (
                        <div className="bg-transparent rounded-xl p-4 border border-[#376b52] border-opacity-30 flex items-center gap-3">
                            <div className="bg-[#fef0db] text-[#d97736] p-2 rounded-lg">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-xs font-bold text-[#115b4c] truncate w-32">
                                    No documents selected
                                </h4>
                                <span className="text-[10px] text-gray-500">0 MB</span>
                            </div>
                        </div>
                    ) : (
                        files.map((file, index) => (
                            <div
                                key={`${file.name}-${index}`}
                                className="bg-transparent rounded-xl p-4 border border-[#376b52] border-opacity-30 flex items-center gap-3"
                            >
                                <div className="bg-[#fef0db] text-[#d97736] p-2 rounded-lg">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4
                                        className="text-xs font-bold text-[#115b4c] truncate w-32"
                                        title={file.name}
                                    >
                                        {file.name}
                                    </h4>
                                    <span className="text-[10px] text-gray-500">
                                        {formatFileSize(file)}
                                    </span>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}