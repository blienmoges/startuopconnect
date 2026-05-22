"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import { useRouter } from "next/navigation";

const schema = z.object({
  field_1: z.string().trim().min(3, "Name must be at least 3 characters"),
  field_2: z.string().trim().regex(/^[0-9]{9}$/, "Phone number must be exactly 9 digits")
});

export default function ClientForm({ t, currentLocale }) {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  });

  // const onSubmit = (data) => {
  //   console.log("Validated & Sanitized Data:", data);
  //   router.push(`/${currentLocale}/register/startup/step2`);
  // };
  const onSubmit = (data) => {
    const existingData = JSON.parse(
      sessionStorage.getItem("startupRegistration") || "{}"
    );

    const updatedData = {
      ...existingData,
      step1: {
        full_name: data.field_1,
        phone_number: `+251${data.field_2}`,
        preferred_language: currentLocale,
      },
    };

    sessionStorage.setItem(
      "startupRegistration",
      JSON.stringify(updatedData)
    );

    router.push(`/${currentLocale}/register/startup/step2`);
  };
  const languageHref = (lang) => `/${lang}/register/startup`;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      {/* Full Name */}
      <div>
        <label className="block text-sm font-bold text-gray-800 mb-2">
          {t.form.fullName} <span className="text-red-500">*</span>
        </label>
        <input {...register("field_1")}
          type="text"
          placeholder={t.form.fullNamePlaceholder}
          className="w-full px-4 py-3.5 bg-[#9dbab0] bg-opacity-70 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#376b52] transition text-[14px] text-[#1c3a2a] placeholder-[#4a6b5a] font-medium"
        />
      </div>

      {/* Phone Number */}
      <div>
        <label className="block text-sm font-bold text-gray-800 mb-2">{t.form.phoneNumber}</label>
        <div className="flex gap-3 mb-1.5">
          <div className="w-20 px-4 py-3.5 bg-[#9dbab0] bg-opacity-70 border-none rounded-md flex items-center justify-center font-medium text-[#1c3a2a] text-[14px]">
            +251
          </div>
          <input {...register("field_2")}
            type="tel"
            placeholder="9XX XXX XXX"
            className="flex-grow px-4 py-3.5 bg-[#9dbab0] bg-opacity-70 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#376b52] transition text-[14px] tracking-wide text-[#1c3a2a] placeholder-[#4a6b5a] font-medium"
          />
        </div>
        <div className="text-xs text-gray-500">{t.form.phoneFormat}</div>
      </div>

      {/* Preferred Language */}
      <div className="mt-2">
        <label className="block text-sm font-bold text-gray-800 mb-3">
          {t.form.preferredLanguage}
        </label>

        <div className="flex bg-[#9dbab0] bg-opacity-70 p-1 rounded-md border-none w-fit">
          <Link
            href={languageHref("en")}
            className={`px-6 py-2 font-bold text-sm rounded transition ${currentLocale === "en"
              ? "bg-[#376b52] text-white shadow-sm"
              : "text-[#4a6b5a] hover:text-[#1c3a2a]"
              }`}
          >
            {t.form.english}
          </Link>

          <Link
            href={languageHref("am")}
            className={`px-6 py-2 font-bold text-sm rounded transition ${currentLocale === "am"
              ? "bg-[#376b52] text-white shadow-sm"
              : "text-[#4a6b5a] hover:text-[#1c3a2a]"
              }`}
          >
            {t.form.amharic}
          </Link>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-4 mt-8">
        <button type="submit" className="px-8 py-3.5 bg-[#427a5b] hover:bg-[#346248] text-white font-bold rounded shadow-md transition text-sm text-center inline-block">
          {t.actions.continue}
        </button>
        <button type="button" className="px-8 py-3.5 bg-[#9dbab0] bg-opacity-70 border-none text-[#214a36] font-bold rounded hover:bg-opacity-100 transition text-sm">
          {t.actions.saveDraft}
        </button>
      </div>
    </form>
  );
}