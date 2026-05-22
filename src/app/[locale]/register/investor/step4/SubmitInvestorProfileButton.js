"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { request } from "@/lib/api";

export default function SubmitInvestorProfileButton({ currentLocale, submitText }) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        try {
            setLoading(true);

            const token = localStorage.getItem("token");

            if (!token) {
                alert("You are not logged in. Please register again.");
                router.push(`/${currentLocale}/register`);
                return;
            }

            const savedData = JSON.parse(
                sessionStorage.getItem("investorRegistration") || "{}"
            );

            if (!savedData.step1 || !savedData.step2) {
                alert("Investor registration information is incomplete.");
                return;
            }

            const step1 = savedData.step1;
            const step2 = savedData.step2;
            const step3 = savedData.step3 || {};

            const formData = new FormData();
            
            // Map step 1 legal_name to organization_name
            if (step1.legal_name) {
                formData.append("organization_name", step1.legal_name);
            }

            const typeMap = {
                "individual": "Angel",
                "angel": "Angel",
                "vc": "VC",
                "investmentCompany": "Venture Capital",
                "corporate": "Corporate",
                "diaspora": "Angel"
            };

            const stageMap = {
                "pre-seed": "Pre-seed",
                "seed": "Seed",
                "series-a": "Series A"
            };

            // Append step 2
            formData.append("investor_type", typeMap[step2.investor_type] || "Angel");
            formData.append("preferred_industry", step2.preferred_industry);
            formData.append("investment_stage", stageMap[step2.investment_stage] || "Seed");
            formData.append("investment_budget", step2.investment_budget);
            formData.append("country", step2.country);
            formData.append("linkedin_url", step2.linkedin_url);
            formData.append("bio", step2.bio);

            // Append step 3 files if they exist
            const dataURLtoBlob = (dataurl) => {
                const arr = dataurl.split(',');
                const mime = arr[0].match(/:(.*?);/)[1];
                const bstr = atob(arr[1]);
                let n = bstr.length;
                const u8arr = new Uint8Array(n);
                while(n--){
                    u8arr[n] = bstr.charCodeAt(n);
                }
                return new Blob([u8arr], {type:mime});
            };

            if (step3.personalDoc && step3.personalDoc.dataUrl) {
                const blob = dataURLtoBlob(step3.personalDoc.dataUrl);
                formData.append("government_id", blob, step3.personalDoc.name);
            }
            if (step3.tradeLicense && step3.tradeLicense.dataUrl) {
                const blob = dataURLtoBlob(step3.tradeLicense.dataUrl);
                formData.append("trade_license", blob, step3.tradeLicense.name);
            }
            if (step3.tinCertificate && step3.tinCertificate.dataUrl) {
                const blob = dataURLtoBlob(step3.tinCertificate.dataUrl);
                formData.append("tin_certificate", blob, step3.tinCertificate.name);
            }

            const responseData = await request("/api/investors/profile", {
                method: "POST",
                body: formData,
            });

            console.log("Investor submit response:", responseData);

            router.push(`/${currentLocale}/register/investor/success`);
        } catch (error) {
            console.error("Investor submit error:", error);
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <button
            type="button"
            onClick={handleSubmit}
            disabled={loading}
            className="px-8 py-3.5 bg-[#0f3d32] hover:bg-[#0a2921] text-white font-bold rounded shadow-none shadow-[#0f3d32]/20 transition text-sm flex items-center gap-2"
        >
            {loading ? "Submitting..." : submitText}
            {!loading && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>}
        </button>
    );
}
