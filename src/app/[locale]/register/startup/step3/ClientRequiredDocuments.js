"use client";

import { useRef, useState, useEffect } from "react";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

function formatFileSize(size) {
    if (!size) return "";
    return `${(size / (1024 * 1024)).toFixed(1)} MB`;
}

export default function ClientRequiredDocuments({ t }) {
    const founderInputRef = useRef(null);
    const businessInputRef = useRef(null);

    const [founderFile, setFounderFile] = useState(null);
    const [businessFile, setBusinessFile] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        const saved = JSON.parse(
            sessionStorage.getItem("startupRegistration") || "{}"
        );

        if (saved.step3?.founder_id_file) {
            setFounderFile(saved.step3.founder_id_file);
        }

        if (saved.step3?.business_registration_file) {
            setBusinessFile(saved.step3.business_registration_file);
        }
    }, []);

    const saveToSession = (key, file) => {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                const existingData = JSON.parse(
                    sessionStorage.getItem("startupRegistration") || "{}"
                );

                const fileData = {
                    name: file.name,
                    size: Number(file.size || 0),
                    size_bytes: Number(file.size || 0),
                    type: file.type,
                    uploaded_at: new Date().toISOString(),
                    dataUrl: e.target.result,
                };

                const updatedData = {
                    ...existingData,
                    step3: {
                        ...(existingData.step3 || {}),
                        [key]: fileData,
                    },
                };

                sessionStorage.setItem(
                    "startupRegistration",
                    JSON.stringify(updatedData)
                );
                
                resolve(fileData);
            };
            reader.readAsDataURL(file);
        });
    };
    const validateFile = (file) => {
        if (!file) return false;

        const allowedTypes = [
            "application/pdf",
            "image/jpeg",
            "image/png",
        ];

        if (!allowedTypes.includes(file.type)) {
            setError("Only PDF, JPG, and PNG files are allowed.");
            return false;
        }

        if (file.size > MAX_FILE_SIZE) {
            setError("File size must be less than 5MB.");
            return false;
        }

        setError("");
        return true;
    };

    const handleFounderFile = async (file) => {
        if (!validateFile(file)) return;

        const savedFile = await saveToSession("founder_id_file", file);
        setFounderFile(savedFile);
    };

    const handleBusinessFile = async (file) => {
        if (!validateFile(file)) return;

        const savedFile = await saveToSession("business_registration_file", file);
        setBusinessFile(savedFile);
    };

    const handleBusinessDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files?.[0];
        handleBusinessFile(file);
    };

    return (
        <div className="w-full mb-12">
            <input
                ref={founderInputRef}
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                className="hidden"
                onChange={(e) => handleFounderFile(e.target.files?.[0])}
            />

            <input
                ref={businessInputRef}
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                className="hidden"
                onChange={(e) => handleBusinessFile(e.target.files?.[0])}
            />

            <div className="flex justify-between items-end mb-6">
                <h2 className="text-xl font-bold text-[#115b4c] font-serif">
                    {t.required.title}
                </h2>
                <span className="text-xs font-bold text-gray-400 tracking-widest uppercase">
                    {t.required.itemsNeeded}
                </span>
            </div>

            {error && (
                <div className="mb-4 bg-[#fff1f2] border border-[#ffe4e6] rounded-lg p-3 text-sm font-bold text-[#e11d48]">
                    {error}
                </div>
            )}

            <div className="flex flex-col gap-6">
                {/* Document 1: Founder ID */}
                <div className="bg-transparent p-6 rounded-xl border-none flex flex-col gap-4">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="font-bold text-gray-900 text-[15px] mb-1">
                                {t.required.doc1.title}
                            </h3>
                            <p className="text-sm text-gray-500">
                                {t.required.doc1.description}
                            </p>
                        </div>
                        <span className="bg-[#e8f3f1] text-[#167b66] px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
                            {t.required.requiredLabel}
                        </span>
                    </div>

                    <div className="bg-[#9dbab0] bg-opacity-30 border-none rounded-lg p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-6 h-6 bg-[#167b66] rounded-full flex items-center justify-center text-white">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-gray-900 leading-tight">
                                    {founderFile?.name || "Click replace icon to upload founder ID"}
                                </p>
                                <p className="text-[11px] text-gray-500 mt-0.5">
                                    {founderFile
                                        ? `${formatFileSize(founderFile.size)} • Uploaded now`
                                        : t.required.doc1.uploadInfo}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 text-[#167b66]">
                            <button
                                type="button"
                                className="hover:text-[#0f5c4a] transition"
                                title={t.required.replaceTitle}
                                onClick={() => founderInputRef.current?.click()}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Document 2: Business Registration Proof */}
                <div className="bg-transparent p-6 rounded-xl border-none flex flex-col gap-4">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="font-bold text-gray-900 text-[15px] mb-1">
                                {t.required.doc2.title}
                            </h3>
                            <p className="text-sm text-gray-500">
                                {t.required.doc2.description}
                            </p>
                        </div>
                        <span className="bg-[#e8f3f1] text-[#167b66] px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
                            {t.required.requiredLabel}
                        </span>
                    </div>

                    {businessFile ? (
                        <div className="bg-[#9dbab0] bg-opacity-30 border-none rounded-lg p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 bg-[#167b66] rounded-full flex items-center justify-center text-white">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-900 leading-tight">
                                        {businessFile.name}
                                    </p>
                                    <p className="text-[11px] text-gray-500 mt-0.5">
                                        {formatFileSize(businessFile.size)} • Uploaded now
                                    </p>
                                </div>
                            </div>

                            <button
                                type="button"
                                className="hover:text-[#0f5c4a] transition text-[#167b66]"
                                title={t.required.replaceTitle}
                                onClick={() => businessInputRef.current?.click()}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                            </button>
                        </div>
                    ) : (
                        <div
                            onClick={() => businessInputRef.current?.click()}
                            onDrop={handleBusinessDrop}
                            onDragOver={(e) => e.preventDefault()}
                            className="border-2 border-dashed border-[#9dbab0] rounded-lg p-8 flex flex-col items-center justify-center hover:bg-[#9dbab0] hover:bg-opacity-30 transition cursor-pointer"
                        >
                            <div className="w-12 h-12 bg-transparent border border-[#376b52] border-opacity-30 rounded-full flex items-center justify-center text-[#167b66] mb-3">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                </svg>
                            </div>
                            <p className="text-sm font-bold text-[#115b4c] mb-1">
                                {t.upload.clickOrDrag}
                            </p>
                            <p className="text-[11px] text-gray-400">
                                {t.upload.fileTypes}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}