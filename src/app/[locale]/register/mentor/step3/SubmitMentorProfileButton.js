"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { request } from "@/lib/api";

export default function SubmitMentorProfileButton({ currentLocale, submitText }) {
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
                sessionStorage.getItem("mentorRegistration") || "{}"
            );

            if (!savedData.step1 || !savedData.step2) {
                alert("Mentor registration information is incomplete.");
                return;
            }

            const step1 = savedData.step1;
            const step2 = savedData.step2;
            const documents = step2.documents || {};
            const skills = Array.isArray(step2.skills) ? step2.skills : [];
            const industries = Array.isArray(step2.industries) ? step2.industries : [step2.industries].filter(Boolean);
            const availability = {
                ...(typeof step1.availability === "object" ? step1.availability : { hours_per_week: step1.availability }),
                ...(step2.availability || {}),
            };
            const dataURLtoBlob = (dataUrl) => {
                const arr = dataUrl.split(",");
                const mime = arr[0].match(/:(.*?);/)?.[1] || "application/octet-stream";
                const bstr = atob(arr[1]);
                let n = bstr.length;
                const u8arr = new Uint8Array(n);
                while (n--) {
                    u8arr[n] = bstr.charCodeAt(n);
                }
                return new Blob([u8arr], { type: mime });
            };
            const appendStoredFile = (fieldName, storedFile) => {
                if (!storedFile?.dataUrl) return;
                formData.append(fieldName, dataURLtoBlob(storedFile.dataUrl), storedFile.name);
            };

            const formData = new FormData();
            const expertise = skills.length ? skills : (step1.expertise ? [step1.expertise] : []);
            
            // Use the field names and simple values accepted by the mentor profile API.
            formData.append("phone_number", step1.phone_number);
            formData.append("headline", step1.headline);
            formData.append("expertise", JSON.stringify(expertise));
            formData.append("skills", JSON.stringify(skills));
            formData.append("industries", JSON.stringify(industries));
            formData.append("years_experience", step1.years_experience);
            formData.append("hourly_rate", step1.hourly_rate);
            formData.append("country", step2.country);
            formData.append("bio", step1.bio);
            formData.append("availability", JSON.stringify(availability));
            formData.append("language", step1.language);
            formData.append("linkedin_profile", step1.linkedin_profile);
            formData.append("verification_status", "pending");
            formData.append("ai_text", "");
            formData.append("embedding", JSON.stringify([]));
            
            // Append files
            appendStoredFile("government_id", documents.government_id);
            appendStoredFile("cv", documents.cv);
            appendStoredFile("certifications", documents.cv);
            appendStoredFile("profile_image", documents.profile_picture);

            const responseData = await request("/api/mentors/profile", {
                method: "POST",
                body: formData,
            });

            console.log("Mentor submit response:", responseData);

            router.push(`/${currentLocale}/register/mentor/success`);
        } catch (error) {
            console.error("Mentor submit error:", error);
            if (error.message?.toLowerCase().includes("mentor profile already exists")) {
                router.push(`/${currentLocale}/register/mentor/success`);
                return;
            }
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
            className="bg-[#0f3d32] hover:bg-[#0a2921] text-white text-xs font-bold py-3 px-8 rounded-full transition shadow-lg shadow-[#0f3d32]/20 flex items-center justify-center gap-2"
        >
            {loading ? "Submitting..." : submitText}
        </button>
    );
}
