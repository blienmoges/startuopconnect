"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { request } from "@/lib/api";

export default function SubmitStartupProfileButton({ currentLocale, submitText }) {
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
                sessionStorage.getItem("startupRegistration") || "{}"
            );

            console.log("Saved startup registration:", savedData);

            if (!savedData.step1 || !savedData.step2) {
                alert("Startup registration information is incomplete.");
                return;
            }

            const step1 = savedData.step1;
            const step2 = savedData.step2;
            const step3 = savedData.step3 || {};

            if (!step3.founder_id_file || !step3.business_registration_file) {
                alert("Please upload the required startup documents before submitting.");
                return;
            }

            const dataURLtoBlob = (dataurl) => {
                const arr = dataurl.split(",");
                const mime = arr[0].match(/:(.*?);/)?.[1] || "application/octet-stream";
                const bstr = atob(arr[1]);
                let n = bstr.length;
                const u8arr = new Uint8Array(n);
                while (n--) {
                    u8arr[n] = bstr.charCodeAt(n);
                }
                return new Blob([u8arr], { type: mime });
            };

            const formData = new FormData();
            const appendStoredFile = (fieldName, storedFile) => {
                if (!storedFile?.dataUrl) return false;
                formData.append(
                    fieldName,
                    dataURLtoBlob(storedFile.dataUrl),
                    storedFile.name || `${fieldName}.bin`
                );
                return true;
            };

            formData.append("full_name", step1.full_name || "");
            formData.append("phone_number", step1.phone_number || "");
            formData.append("preferred_language", step1.preferred_language || "");

            formData.append("startup_name", step2.startup_name || "");
            formData.append("company_name", step2.startup_name || "");
            formData.append("business_name", step2.startup_name || "");

            formData.append("sector", step2.sector || "");
            formData.append("industry", step2.sector || "");

            formData.append("tagline", step2.tagline || "");
            formData.append("description", step2.tagline || "");
            formData.append("business_summary", step2.tagline || "");

            formData.append("startup_stage", step2.startup_stage || "");
            formData.append("stage", step2.startup_stage || "");

            formData.append("startup_type", step2.startup_type || "");
            formData.append("business_type", step2.startup_type || "");

            formData.append("year_founded", String(step2.year_founded || ""));
            formData.append("founded_year", String(step2.year_founded || ""));

            formData.append("region", step2.region || "");
            formData.append("city", step2.city || "");

            formData.append("team_members", String(step2.team_members || ""));
            formData.append("team_size", String(step2.team_members || ""));

            formData.append("founder_role", step2.founder_role || "");

            appendStoredFile("founder_id", step3.founder_id_file);
            appendStoredFile("business_registration", step3.business_registration_file);
            [
                "pitch_deck",
                "business_plan",
                "government_id",
                "passport",
                "kebele_id",
                "trade_license",
                "support_letter",
                "tin_certificate",
                "logo",
                "profile_image",
                "proof_of_addres",
                "proof_of_address",
                "file",
            ].forEach((fieldName) => {
                appendStoredFile(fieldName, step3[fieldName]);
            });

            console.log(
                "Submitting startup FormData file fields:",
                Array.from(formData.entries())
                    .filter(([, value]) => value instanceof Blob)
                    .map(([key, value]) => ({
                        key,
                        name: value.name,
                        type: value.type,
                        size: value.size,
                    }))
            );

            const responseData = await request("/api/startups/profile", {
                method: "POST",
                body: formData,
            });

            console.log("Startup submit response:", responseData);

            router.push(`/${currentLocale}/register/startup/success`);
        } catch (error) {
            console.error("Startup submit error:", error);
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
            className="px-8 py-3.5 bg-white text-[#0f5c4a] font-bold rounded-lg shadow-sm hover:bg-gray-50 transition flex justify-center items-center w-full sm:w-auto min-w-[200px]"
        >
            {loading ? "Submitting..." : submitText}
        </button>
    );
}
