"use client";

import { useRouter } from "next/navigation";

export default function ClientContinueButton({ currentLocale, continueText }) {
    const router = useRouter();

    const handleContinue = () => {
        const existingData = JSON.parse(
            sessionStorage.getItem("startupRegistration") || "{}"
        );

        const updatedData = {
            ...existingData,
            step3: {
                ...(existingData.step3 || {}),
                documents_step_completed: true,
            },
        };

        sessionStorage.setItem(
            "startupRegistration",
            JSON.stringify(updatedData)
        );

        router.push(`/${currentLocale}/register/startup/step4`);
    };

    return (
        <button
            type="button"
            onClick={handleContinue}
            className="px-8 py-3.5 bg-[#0f5c4a] hover:bg-[#0c4a3b] text-white font-bold rounded shadow-md transition text-sm flex items-center gap-2"
        >
            {continueText}
            <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
            </svg>
        </button>
    );
}
