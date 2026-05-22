"use client";

import { useEffect, useRef, useState } from "react";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const optionalDocuments = [
    {
        key: "support_letter",
        titlePath: ["supportLetter", "title"],
        descriptionPath: ["supportLetter", "description"],
        accept: ".pdf,.jpg,.jpeg,.png",
    },
    {
        key: "tin_certificate",
        titlePath: ["tin", "title"],
        descriptionPath: ["tin", "description"],
        accept: ".pdf,.jpg,.jpeg,.png",
    },
    {
        key: "logo",
        titlePath: ["logo", "title"],
        descriptionPath: ["logo", "description"],
        accept: ".jpg,.jpeg,.png,.webp",
    },
    {
        key: "proof_of_addres",
        titlePath: ["address", "title"],
        descriptionPath: ["address", "description"],
        accept: ".pdf,.jpg,.jpeg,.png",
        wide: true,
    },
];

function getText(source, path, fallback) {
    return path.reduce((value, key) => value?.[key], source) || fallback;
}

function formatFileSize(size) {
    if (!size) return "";
    return `${(size / (1024 * 1024)).toFixed(1)} MB`;
}

export default function ClientOptionalDocuments({ t }) {
    const inputRefs = useRef({});
    const [files, setFiles] = useState({});
    const [error, setError] = useState("");

    useEffect(() => {
        const saved = JSON.parse(sessionStorage.getItem("startupRegistration") || "{}");
        setFiles(saved.step3 || {});
    }, []);

    const saveFile = (key, file) => {
        if (!file) return;

        const allowedTypes = [
            "application/pdf",
            "image/jpeg",
            "image/png",
            "image/webp",
        ];

        if (!allowedTypes.includes(file.type)) {
            setError("Only PDF, JPG, PNG, and WEBP files are allowed.");
            return;
        }

        if (file.size > MAX_FILE_SIZE) {
            setError("File size must be less than 5MB.");
            return;
        }

        const reader = new FileReader();
        reader.onload = (event) => {
            const existingData = JSON.parse(sessionStorage.getItem("startupRegistration") || "{}");
            const fileData = {
                name: file.name,
                size: Number(file.size || 0),
                size_bytes: Number(file.size || 0),
                type: file.type,
                uploaded_at: new Date().toISOString(),
                dataUrl: event.target.result,
            };

            const updatedData = {
                ...existingData,
                step3: {
                    ...(existingData.step3 || {}),
                    [key]: fileData,
                },
            };

            sessionStorage.setItem("startupRegistration", JSON.stringify(updatedData));
            setFiles(updatedData.step3);
            setError("");
        };
        reader.readAsDataURL(file);
    };

    return (
        <div className="w-full">
            <div className="flex justify-between items-end mb-6">
                <h2 className="text-xl font-bold text-[#115b4c] font-serif">{t.optional.title}</h2>
                <span className="text-xs font-bold text-gray-400 tracking-widest uppercase">
                    {t.optional.enhancedProfile}
                </span>
            </div>

            {error ? (
                <div className="mb-4 bg-[#fff1f2] border border-[#ffe4e6] rounded-lg p-3 text-sm font-bold text-[#e11d48]">
                    {error}
                </div>
            ) : null}

            <div className="grid grid-cols-2 gap-4">
                {optionalDocuments.map((document) => {
                    const file = files[document.key];

                    return (
                        <div
                            key={document.key}
                            className={`${document.wide ? "col-span-2" : ""} bg-transparent p-5 rounded-xl border-none flex flex-col justify-between`}
                        >
                            <input
                                ref={(node) => {
                                    inputRefs.current[document.key] = node;
                                }}
                                type="file"
                                accept={document.accept}
                                className="hidden"
                                onChange={(event) => saveFile(document.key, event.target.files?.[0])}
                            />
                            <div className="flex items-start gap-4 mb-5">
                                <div className="text-gray-400 mt-1">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414A1 1 0 0120 6.414V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-[13px]">
                                        {getText(t.optional, document.titlePath, document.key.replaceAll("_", " "))}
                                    </h3>
                                    <p className="text-[11px] text-gray-500 mt-0.5">
                                        {file?.name || getText(t.optional, document.descriptionPath, "Upload supporting document")}
                                    </p>
                                    {file?.size ? (
                                        <p className="text-[10px] font-bold text-[#167b66] mt-1">
                                            {formatFileSize(file.size)} - Ready to submit
                                        </p>
                                    ) : null}
                                </div>
                            </div>
                            <button
                                type="button"
                                onClick={() => inputRefs.current[document.key]?.click()}
                                className="w-full py-2.5 bg-[#9dbab0] bg-opacity-70 text-[#1c3a2a] border-none text-xs font-bold rounded hover:bg-[#f3f4f6] transition flex justify-center items-center gap-1.5"
                            >
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                </svg>
                                {file?.name ? "Replace" : t.upload.upload}
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
