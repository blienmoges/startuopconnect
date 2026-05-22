"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import { useRouter } from "next/navigation";

const schema = z.object({
  field_1: z.string().trim().min(2, "Required"),
  field_2: z.string().trim().min(1, "Required"),
  field_3: z.string().trim().min(5, "Tagline must be at least 5 characters"),
  field_4: z.string().trim().min(1, "Required"),
  field_5: z.string().trim().min(1, "Required"),
  field_6: z.string().trim().regex(/^(19|20)\d{2}$/, "Must be a valid 4-digit year"),
  field_7: z.string().trim().min(2, "Required"),
  field_8: z.string().trim().min(2, "Required"),
  field_9: z.string().trim().min(1, "Required"),
  field_10: z.string().trim().min(2, "Required")
});

export default function ClientForm({ t, currentLocale }) {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  });

  // const onSubmit = (data) => {
  //   console.log("Validated & Sanitized Data:", data);
  //   router.push(`/${currentLocale}/register/startup/step3`);
  // };
  const onSubmit = (data) => {
    const existingData = JSON.parse(
      sessionStorage.getItem("startupRegistration") || "{}"
    );

    const updatedData = {
      ...existingData,
      step2: {
        startup_name: data.field_1,
        sector: data.field_2,
        tagline: data.field_3,
        startup_stage: data.field_4,
        startup_type: data.field_5,
        year_founded: data.field_6,
        region: data.field_7,
        city: data.field_8,
        team_members: data.field_9,
        founder_role: data.field_10,
      },
    };

    sessionStorage.setItem(
      "startupRegistration",
      JSON.stringify(updatedData)
    );

    router.push(`/${currentLocale}/register/startup/step3`);
  };
  const languageHref = (lang) => `/${lang}/register/startup`;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">

      {/* SECTION: Identity */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-[#8b4513]"></div>
          <h2 className="text-lg font-bold text-[#115b4c]">{t.identity.title}</h2>
        </div>

        <div className="bg-transparent p-6 rounded-xl border-none flex flex-col gap-5">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-gray-800 mb-2">{t.identity.startupName}</label>
              <input {...register("field_1")}
                type="text"
                placeholder={t.identity.startupNamePlaceholder}
                className="w-full px-4 py-3 bg-[#9dbab0] bg-opacity-70 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#376b52] transition text-[14px] text-[#1c3a2a] placeholder-[#4a6b5a] font-medium"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-800 mb-2">{t.identity.sector}</label>
              <div className="relative">
                <select {...register("field_2")} className="w-full px-4 py-3 bg-[#9dbab0] bg-opacity-70 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#376b52] transition text-[14px] text-[#1c3a2a] placeholder-[#4a6b5a] font-medium appearance-none text-gray-600">
                  <option value="">{t.identity.selectSector}</option>
                  <option value="agritech">{t.options.agritech}</option>
                  <option value="fintech">{t.options.fintech}</option>
                  <option value="healthtech">{t.options.healthtech}</option>
                  <option value="edtech">{t.options.edtech}</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#4a6b5a]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-800 mb-2">{t.identity.tagline}</label>
            <input {...register("field_3")}
              type="text"
              placeholder={t.identity.taglinePlaceholder}
              className="w-full px-4 py-3 bg-[#9dbab0] bg-opacity-70 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#376b52] transition text-[14px] text-[#1c3a2a] placeholder-[#4a6b5a] font-medium"
            />
          </div>
        </div>
      </div>

      {/* SECTION: Status */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-[#40e0d0]"></div>
          <h2 className="text-lg font-bold text-[#115b4c]">{t.status.title}</h2>
        </div>

        <div className="bg-transparent p-6 rounded-xl border-none grid grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold text-gray-800 mb-2">{t.status.startupStage}</label>
            <div className="relative">
              <select {...register("field_4")} className="w-full px-4 py-3 bg-[#9dbab0] bg-opacity-70 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#376b52] transition text-[14px] text-[#1c3a2a] placeholder-[#4a6b5a] font-medium appearance-none text-gray-600">
                <option value="">{t.status.selectStage}</option>
                <option value="idea">{t.options.ideaStage}</option>
                <option value="pre-seed">{t.options.preSeed}</option>
                <option value="seed">{t.options.seed}</option>
                <option value="early">{t.options.earlyGrowth}</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-800 mb-2">{t.status.startupType}</label>
            <div className="relative">
              <select {...register("field_5")} className="w-full px-4 py-3 bg-[#9dbab0] bg-opacity-70 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#376b52] transition text-[14px] text-[#1c3a2a] placeholder-[#4a6b5a] font-medium appearance-none text-gray-600">
                <option value="">{t.status.selectType}</option>
                <option value="b2b">{t.options.b2b}</option>
                <option value="b2c">{t.options.b2c}</option>
                <option value="b2g">{t.options.b2g}</option>
                <option value="marketplace">{t.options.marketplace}</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION: Details */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-[#167b66]"></div>
          <h2 className="text-lg font-bold text-[#115b4c]">{t.details.title}</h2>
        </div>

        <div className="bg-transparent p-6 rounded-xl border-none flex flex-col gap-5">
          <div className="grid grid-cols-3 gap-6">
            <div>
              <label className="block text-xs font-bold text-gray-800 mb-2">{t.details.yearFounded}</label>
              <input {...register("field_6")}
                type="text"
                placeholder="2024"
                className="w-full px-4 py-3 bg-[#9dbab0] bg-opacity-70 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#376b52] transition text-[14px] text-[#1c3a2a] placeholder-[#4a6b5a] font-medium"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-800 mb-2">{t.details.region}</label>
              <input {...register("field_7")}
                type="text"
                placeholder={t.details.regionPlaceholder}
                className="w-full px-4 py-3 bg-[#9dbab0] bg-opacity-70 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#376b52] transition text-[14px] text-[#1c3a2a] placeholder-[#4a6b5a] font-medium"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-800 mb-2">{t.details.city}</label>
              <input {...register("field_8")}
                type="text"
                placeholder={t.details.cityPlaceholder}
                className="w-full px-4 py-3 bg-[#9dbab0] bg-opacity-70 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#376b52] transition text-[14px] text-[#1c3a2a] placeholder-[#4a6b5a] font-medium"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <label className="block text-xs font-bold text-gray-800 mb-2">{t.details.teamMembers}</label>
              <input {...register("field_9")}
                type="text"
                placeholder="1-5"
                className="w-full px-4 py-3 bg-[#9dbab0] bg-opacity-70 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#376b52] transition text-[14px] text-[#1c3a2a] placeholder-[#4a6b5a] font-medium"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-xs font-bold text-gray-800 mb-2">{t.details.founderRole}</label>
              <input {...register("field_10")}
                type="text"
                placeholder={t.details.founderRolePlaceholder}
                className="w-full px-4 py-3 bg-[#9dbab0] bg-opacity-70 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#376b52] transition text-[14px] text-[#1c3a2a] placeholder-[#4a6b5a] font-medium"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-4 mt-4 pb-12">
        <button type="submit" className="px-8 py-4 flex justify-center items-center bg-[#0f5c4a] hover:bg-[#0c4a3b] text-white font-bold rounded-lg shadow-md transition text-sm min-w-[200px]">
          {t.actions.continue}
        </button>
        <div className="flex items-center gap-3 bg-transparent border border-[#376b52] border-opacity-30 py-3.5 px-5 rounded-lg text-xs text-[#0f5c4a] flex-grow">
          <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          {t.actions.note}
        </div>
      </div>
    </form>
  );
}