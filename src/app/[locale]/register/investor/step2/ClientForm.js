"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import { useRouter } from "next/navigation";

const schema = z.object({
  investorType: z.string({ required_error: "Please select an investor type" }),
  sectors: z.array(z.string()).optional(),
  field_7: z.string().trim().min(1, "Required"),
  field_8: z.string().trim().min(1, "Required"),
  field_9: z.string().trim().min(1, "Required"),
  field_10: z.string().trim().url("Must be a valid URL").includes("linkedin.com", { message: "Must be a valid LinkedIn URL" }).or(z.literal("")),
  field_11: z.string().trim().min(10, "Bio must be at least 10 characters")
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
      step2: {
        investor_type: data.investorType,
        preferred_industry: data.sectors ? data.sectors.join(",") : "",
        investment_stage: data.field_7,
        investment_budget: data.field_8 === "under-250k" ? 200000 : data.field_8 === "250k-1m" ? 500000 : 2000000,
        country: data.field_9,
        linkedin_url: data.field_10,
        bio: data.field_11,
      },
    };

    sessionStorage.setItem(
      "investorRegistration",
      JSON.stringify(updatedData)
    );

    router.push(`/${currentLocale}/register/investor/step3`);
  };

  const languageHref = (lang) => `/${lang}/register/investor`;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10">

            {/* Investor Type Section */}
            <section>
              <h3 className="text-lg font-bold text-[#0f3d32] mb-4">{t.investorType.title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {/* Selected Card */}
                <label className="cursor-pointer border-2 border-[#167b66] bg-transparent rounded-xl p-4 flex flex-col items-start gap-4 transition ">
                  <input {...register("investorType")} type="radio" value="individual" className="hidden" defaultChecked />
                  <div className="text-[#136150]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                  </div>
                  <span className="text-sm font-bold text-[#0f3d32]">{t.investorType.individual}</span>
                </label>

                {/* Unselected Cards */}
                <label className="cursor-pointer border border-[#376b52] border-opacity-30 bg-transparent rounded-xl p-4 flex flex-col items-start gap-4 transition  hover:border-[#376b52]">
                  <input {...register("investorType")} type="radio" value="angel" className="hidden" />
                  <div className="text-[#136150]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  </div>
                  <span className="text-sm font-bold text-gray-700">{t.investorType.angel}</span>
                </label>

                <label className="cursor-pointer border border-[#376b52] border-opacity-30 bg-transparent rounded-xl p-4 flex flex-col items-start gap-4 transition  hover:border-[#376b52]">
                  <input {...register("investorType")} type="radio" value="vc" className="hidden" />
                  <div className="text-[#136150]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                  </div>
                  <span className="text-sm font-bold text-gray-700">{t.investorType.ventureCapital}</span>
                </label>

                <label className="cursor-pointer border border-[#376b52] border-opacity-30 bg-transparent rounded-xl p-4 flex flex-col items-start gap-4 transition  hover:border-[#376b52]">
                  <input {...register("investorType")} type="radio" value="investmentCompany" className="hidden" />
                  <div className="text-[#136150]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                  </div>
                  <span className="text-sm font-bold text-gray-700">{t.investorType.investmentCompany}</span>
                </label>

                <label className="cursor-pointer border border-[#376b52] border-opacity-30 bg-transparent rounded-xl p-4 flex flex-col items-start gap-4 transition  hover:border-[#376b52]">
                  <input {...register("investorType")} type="radio" value="corporate" className="hidden" />
                  <div className="text-[#136150]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                  </div>
                  <span className="text-sm font-bold text-gray-700">{t.investorType.corporate}</span>
                </label>

                <label className="cursor-pointer border border-[#376b52] border-opacity-30 bg-transparent rounded-xl p-4 flex flex-col items-start gap-4 transition  hover:border-[#376b52]">
                  <input {...register("investorType")} type="radio" value="diaspora" className="hidden" />
                  <div className="text-[#136150]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                  </div>
                  <span className="text-sm font-bold text-gray-700">{t.investorType.diaspora}</span>
                </label>
              </div>
            </section>

            {/* Investment Preferences Section */}
            <section>
              <h3 className="text-lg font-bold text-[#0f3d32] mb-6">{t.preferences.title}</h3>

              <div className="flex flex-col gap-6">

                {/* Sectors */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-3">{t.preferences.preferredSectors}</label>
                  <div className="flex flex-wrap gap-2">
                    <label className="cursor-pointer">
                      <input type="checkbox" {...register("sectors")} value="fintech" className="peer hidden" />
                      <div className="peer-checked:bg-[#167b66] peer-checked:text-white bg-[#9dbab0] bg-opacity-70 text-[#1c3a2a] px-4 py-2 rounded-full text-xs font-bold hover:bg-[#167b66] hover:text-white transition">
                        {t.sectors.fintech}
                      </div>
                    </label>
                    <label className="cursor-pointer">
                      <input type="checkbox" {...register("sectors")} value="agritech" className="peer hidden" />
                      <div className="peer-checked:bg-[#167b66] peer-checked:text-white bg-[#9dbab0] bg-opacity-70 text-[#1c3a2a] px-4 py-2 rounded-full text-xs font-bold hover:bg-[#167b66] hover:text-white transition">
                        {t.sectors.agritech}
                      </div>
                    </label>
                    <label className="cursor-pointer">
                      <input type="checkbox" {...register("sectors")} value="logistics" className="peer hidden" />
                      <div className="peer-checked:bg-[#167b66] peer-checked:text-white bg-[#9dbab0] bg-opacity-70 text-[#1c3a2a] px-4 py-2 rounded-full text-xs font-bold hover:bg-[#167b66] hover:text-white transition">
                        {t.sectors.logistics}
                      </div>
                    </label>
                    <label className="cursor-pointer">
                      <input type="checkbox" {...register("sectors")} value="healthtech" className="peer hidden" />
                      <div className="peer-checked:bg-[#167b66] peer-checked:text-white bg-[#9dbab0] bg-opacity-70 text-[#1c3a2a] px-4 py-2 rounded-full text-xs font-bold hover:bg-[#167b66] hover:text-white transition">
                        {t.sectors.healthtech}
                      </div>
                    </label>
                    <label className="cursor-pointer">
                      <input type="checkbox" {...register("sectors")} value="edtech" className="peer hidden" />
                      <div className="peer-checked:bg-[#167b66] peer-checked:text-white bg-[#9dbab0] bg-opacity-70 text-[#1c3a2a] px-4 py-2 rounded-full text-xs font-bold hover:bg-[#167b66] hover:text-white transition">
                        {t.sectors.edtech}
                      </div>
                    </label>
                    <label className="cursor-pointer">
                      <input type="checkbox" {...register("sectors")} value="energy" className="peer hidden" />
                      <div className="peer-checked:bg-[#167b66] peer-checked:text-white bg-[#9dbab0] bg-opacity-70 text-[#1c3a2a] px-4 py-2 rounded-full text-xs font-bold hover:bg-[#167b66] hover:text-white transition">
                        {t.sectors.energy}
                      </div>
                    </label>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2.5">{t.preferences.startupStage}</label>
                    <div className="relative">
                      <select {...register("field_7")}  className="w-full px-4 py-3.5 bg-[#9dbab0] bg-opacity-70 border-none rounded focus:outline-none focus:ring-2 focus:ring-[#376b52] transition text-sm appearance-none text-gray-800 ">
                        <option value="series-a">{t.options.seriesA}</option>
                        <option value="seed">{t.options.seed}</option>
                        <option value="pre-seed">{t.options.preSeed}</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2.5">{t.preferences.investmentRange}</label>
                    <div className="relative">
                      <select {...register("field_8")}  className="w-full px-4 py-3.5 bg-[#9dbab0] bg-opacity-70 border-none rounded focus:outline-none focus:ring-2 focus:ring-[#376b52] transition text-sm appearance-none text-gray-800 ">
                        <option value="250k-1m">$250k - $1M</option>
                        <option value="under-250k">{t.options.under250k}</option>
                        <option value="over-1m">{t.options.over1m}</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2.5">{t.preferences.locationPreference}</label>
                    <div className="relative">
                      <select {...register("field_9")}  className="w-full px-4 py-3.5 bg-[#9dbab0] bg-opacity-70 border-none rounded focus:outline-none focus:ring-2 focus:ring-[#376b52] transition text-sm appearance-none text-gray-800 ">
                        <option value="addis-ababa">{t.options.addisAbaba}</option>
                        <option value="regional">{t.options.regionalEthiopia}</option>
                        <option value="any">{t.options.anywhere}</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2.5">{t.preferences.linkedin}</label>
                    <input {...register("field_10")} 
                      type="text"
                      placeholder="https://linkedin.com/in/..."
                      className="w-full px-4 py-3.5 bg-[#9dbab0] bg-opacity-70 border-none rounded focus:outline-none focus:ring-2 focus:ring-[#376b52] transition text-sm text-[#1c3a2a] placeholder-[#4a6b5a] "
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2.5">{t.preferences.bio}</label>
                  <textarea {...register("field_11")} 
                    rows="4"
                    placeholder={t.preferences.bioPlaceholder}
                    className="w-full px-4 py-3 bg-[#9dbab0] bg-opacity-70 border-none rounded focus:outline-none focus:ring-2 focus:ring-[#376b52] transition text-sm resize-none  text-[#1c3a2a] placeholder-[#4a6b5a]"
                  ></textarea>
                </div>

              </div>
            </section>

            {/* Bottom Actions */}
            <div className="flex justify-between items-center mt-6 pt-8 border-t border-gray-200">
              <Link href={`/${currentLocale}/register/investor`} className="flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-[#136150] transition">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                {t.actions.back}
              </Link>
              <button type="submit" className="px-8 py-3.5 bg-[#0f3d32] hover:bg-[#0a2921] text-white font-bold rounded  transition text-sm flex items-center gap-2">
                {t.actions.continue}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </div>

          </form>
  );
}