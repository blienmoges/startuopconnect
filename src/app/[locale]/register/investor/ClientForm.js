"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import { useRouter } from "next/navigation";

const schema = z.object({
  field_1: z.string().trim().min(3, "Legal name must be at least 3 characters"),
  field_2: z.string().trim().regex(/^[0-9]{9}$/, "Phone number must be exactly 9 digits")
});

export default function ClientForm({ t, currentLocale }) {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data) => {
    const existingData = JSON.parse(
      sessionStorage.getItem("investorRegistration") || "{}"
    );

    const updatedData = {
      ...existingData,
      step1: {
        legal_name: data.field_1,
        phone_number: `+251${data.field_2}`,
        preferred_language: currentLocale,
      },
    };

    sessionStorage.setItem(
      "investorRegistration",
      JSON.stringify(updatedData)
    );

    router.push(`/${currentLocale}/register/investor/step2`);
  };

  const languageHref = (lang) => `/${lang}/register/investor`;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="sm:col-span-2">
                <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2.5">{t.form.fullLegalName}</label>
                <input {...register("field_1")} 
                  type="text"
                  placeholder={t.form.fullLegalNamePlaceholder}
                  className="w-full px-4 py-3.5 bg-[#9dbab0] bg-opacity-70 border-none rounded focus:outline-none focus:ring-2 focus:ring-[#376b52] transition text-sm text-[#1c3a2a] placeholder-[#4a6b5a]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2.5">{t.form.phoneNumber}</label>
                <div className="flex">
                  <div className="bg-transparent border border-[#376b52] border-opacity-30 px-3 lg:px-4 py-3.5 rounded-l text-sm font-bold text-gray-600 border-r border-[#dee2e6] shrink-0 flex items-center justify-center">
                    +251
                  </div>
                  <input {...register("field_2")} 
                    type="text"
                    placeholder="911 234 567"
                    className="w-full px-4 py-3.5 bg-[#9dbab0] bg-opacity-70 border-none rounded-r focus:outline-none focus:ring-2 focus:ring-[#376b52] transition text-sm text-[#1c3a2a] placeholder-[#4a6b5a]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2.5">{t.form.preferredLanguage}</label>
                <div className="flex bg-[#9dbab0] bg-opacity-70 rounded p-1 h-[48px]">
                  <button type="button" className="flex-1 bg-[#9dbab0] bg-opacity-70  rounded text-[13px] font-bold text-[#136150] transition h-full">
                    {t.form.english}
                  </button>
                  <button type="button" className="flex-1 text-[13px] font-bold text-gray-500 hover:text-gray-700 transition h-full">
                    {t.form.amharic}
                  </button>
                </div>
              </div>

            </div>

            <div className="flex justify-start mt-10">
              <button type="submit" className="px-8 py-3.5 bg-[#0f3d32] hover:bg-[#0a2921] text-white font-bold rounded  transition text-sm flex items-center gap-2">
                {t.actions.continue}
              </button>
            </div>

          </form>
  );
}