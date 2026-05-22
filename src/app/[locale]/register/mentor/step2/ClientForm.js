"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const schema = z.object({
  categories: z.array(z.string()).min(1, "Select at least one category"),
  field_3: z.string().trim().min(1, "Required"),
  field_5: z.boolean().optional(),
  field_6: z.boolean().optional(),
  field_7: z.boolean().optional(),
  field_8: z.boolean().optional(),
  field_9: z.boolean().optional(),
  field_10: z.string().trim().min(1, "Required"),
  field_11: z.string().optional()
});

export default function ClientForm({ t, currentLocale }) {
  const router = useRouter();

  const [selectedDays, setSelectedDays] = useState([]);
  const [govId, setGovId] = useState(null);
  const [cv, setCv] = useState(null);
  const [photo, setPhoto] = useState(null);
  const toggleDay = (day) => {
    setSelectedDays(prev => prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]);
  };

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  });

  const fileToStoredFile = (file) => {
    if (!file) return Promise.resolve(null);

    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve({
          name: file.name,
          type: file.type,
          dataUrl: reader.result,
        });
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const onSubmit = async (data) => {
    const existingData = JSON.parse(
      sessionStorage.getItem("mentorRegistration") || "{}"
    );

    const updatedData = {
      ...existingData,
      step2: {
        industries: [data.field_3],
        skills: data.categories || [],
        country: data.field_10,
        city: data.field_10,
        availability: {
          ...(existingData.step1?.availability || {}),
          days: selectedDays,
          mentorship_mode: data.field_11 || "remote",
          preferred_startup_stage: [
            data.field_5 && "idea",
            data.field_6 && "mvp",
            data.field_7 && "early_revenue",
            data.field_8 && "growth",
            data.field_9 && "scale_up",
          ].filter(Boolean),
        },
        documents: {
          government_id: await fileToStoredFile(govId),
          cv: await fileToStoredFile(cv),
          profile_picture: await fileToStoredFile(photo),
        },
      },
    };

    sessionStorage.setItem(
      "mentorRegistration",
      JSON.stringify(updatedData)
    );

    router.push(`/${currentLocale}/register/mentor/step3`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">

            <div className="grid sm:grid-cols-1 gap-5">
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2">{t.form.primaryIndustry}</label>
                <select {...register("field_3")}  className="w-full px-4 py-3 bg-[#f8f9fa] border-none rounded-lg focus:ring-2 focus:ring-[#10b981] text-xs text-gray-800 outline-none appearance-none">
                  <option value="">{t.options.selectIndustry}</option>
                  <option value="fintech">{t.industries.fintech}</option>
                  <option value="telecom">{t.industries.telecommunications}</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-3">{t.form.mentorshipCategories}</label>
              <div className="flex flex-wrap gap-2">
                <label className="cursor-pointer">
                      <input type="checkbox" {...register("categories")} value="productStrategy" className="peer hidden" />
                      <span className="peer-checked:bg-[#e8f5e9] peer-checked:text-[#136150] peer-checked:border-[#a5d6a7] px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 text-[10px] font-bold hover:border-gray-300 transition block">
                        {t.categories.productStrategy}
                      </span>
                    </label>
                <label className="cursor-pointer">
                      <input type="checkbox" {...register("categories")} value="businessModel" className="peer hidden" />
                      <span className="peer-checked:bg-[#e8f5e9] peer-checked:text-[#136150] peer-checked:border-[#a5d6a7] px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 text-[10px] font-bold hover:border-gray-300 transition block">
                        {t.categories.businessModel}
                      </span>
                    </label>
                <label className="cursor-pointer">
                      <input type="checkbox" {...register("categories")} value="fundraising" className="peer hidden" />
                      <span className="peer-checked:bg-[#e8f5e9] peer-checked:text-[#136150] peer-checked:border-[#a5d6a7] px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 text-[10px] font-bold hover:border-gray-300 transition block">
                        {t.categories.fundraising}
                      </span>
                    </label>
                <label className="cursor-pointer">
                      <input type="checkbox" {...register("categories")} value="marketEntry" className="peer hidden" />
                      <span className="peer-checked:bg-[#e8f5e9] peer-checked:text-[#136150] peer-checked:border-[#a5d6a7] px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 text-[10px] font-bold hover:border-gray-300 transition block">
                        {t.categories.marketEntry}
                      </span>
                    </label>
                <label className="cursor-pointer">
                      <input type="checkbox" {...register("categories")} value="operations" className="peer hidden" />
                      <span className="peer-checked:bg-[#e8f5e9] peer-checked:text-[#136150] peer-checked:border-[#a5d6a7] px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 text-[10px] font-bold hover:border-gray-300 transition block">
                        {t.categories.operations}
                      </span>
                    </label>
                <label className="cursor-pointer">
                      <input type="checkbox" {...register("categories")} value="leadership" className="peer hidden" />
                      <span className="peer-checked:bg-[#e8f5e9] peer-checked:text-[#136150] peer-checked:border-[#a5d6a7] px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 text-[10px] font-bold hover:border-gray-300 transition block">
                        {t.categories.leadership}
                      </span>
                    </label>
                <label className="cursor-pointer">
                      <input type="checkbox" {...register("categories")} value="technology" className="peer hidden" />
                      <span className="peer-checked:bg-[#e8f5e9] peer-checked:text-[#136150] peer-checked:border-[#a5d6a7] px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 text-[10px] font-bold hover:border-gray-300 transition block">
                        {t.categories.technology}
                      </span>
                    </label>
                <label className="cursor-pointer">
                      <input type="checkbox" {...register("categories")} value="other" className="peer hidden" />
                      <span className="peer-checked:bg-[#e8f5e9] peer-checked:text-[#136150] peer-checked:border-[#a5d6a7] px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 text-[10px] font-bold hover:border-gray-300 transition block">
                        {t.categories.other}
                      </span>
                    </label>
              </div>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-3">{t.form.preferredStartupStage}</label>
              <div className="grid grid-cols-3 gap-3">
                <label className="flex items-center gap-2 p-2.5 rounded-lg border border-[#a5d6a7] bg-[#e8f5e9] cursor-pointer">
                  <input {...register("field_5")}  type="checkbox" className="w-3.5 h-3.5 text-[#136150] rounded focus:ring-[#376b52]" defaultChecked />
                  <span className="text-[10px] font-bold text-[#136150]">{t.stages.idea}</span>
                </label>
                <label className="flex items-center gap-2 p-2.5 rounded-lg border border-[#a5d6a7] bg-[#e8f5e9] cursor-pointer">
                  <input {...register("field_6")}  type="checkbox" className="w-3.5 h-3.5 text-[#136150] rounded focus:ring-[#376b52]" defaultChecked />
                  <span className="text-[10px] font-bold text-[#136150]">{t.stages.mvp}</span>
                </label>
                <label className="flex items-center gap-2 p-2.5 rounded-lg border border-gray-200 bg-white cursor-pointer hover:border-gray-300 transition">
                  <input {...register("field_7")}  type="checkbox" className="w-3.5 h-3.5 text-[#136150] rounded focus:ring-[#376b52]" />
                  <span className="text-[10px] font-bold text-gray-700">{t.stages.earlyRevenue}</span>
                </label>
                <label className="flex items-center gap-2 p-2.5 rounded-lg border border-gray-200 bg-white cursor-pointer hover:border-gray-300 transition">
                  <input {...register("field_8")}  type="checkbox" className="w-3.5 h-3.5 text-[#136150] rounded focus:ring-[#376b52]" />
                  <span className="text-[10px] font-bold text-gray-700">{t.stages.growth}</span>
                </label>
                <label className="flex items-center gap-2 p-2.5 rounded-lg border border-gray-200 bg-white cursor-pointer hover:border-gray-300 transition">
                  <input {...register("field_9")}  type="checkbox" className="w-3.5 h-3.5 text-[#136150] rounded focus:ring-[#376b52]" />
                  <span className="text-[10px] font-bold text-gray-700">{t.stages.scaleUp}</span>
                </label>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2">{t.form.country || t.form.cityLocation}</label>
                <select {...register("field_10")}  className="w-full px-4 py-3 bg-[#f8f9fa] border-none rounded-lg focus:ring-2 focus:ring-[#10b981] text-xs text-gray-800 outline-none appearance-none">
                  <option value="Ethiopia">Ethiopia</option>
                  <option value="Remote">{t.locations.remoteGlobal}</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-3">{t.form.mentorPlatform}</label>
                <div className="flex gap-6 mt-1">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input {...register("field_11")} value="remote" type="radio" className="w-4 h-4 text-[#0f3d32] focus:ring-[#0f3d32]" defaultChecked />
                    <span className="text-xs font-bold text-gray-800">{t.platform.remote}</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input {...register("field_11")} value="in_person" type="radio" className="w-4 h-4 text-[#0f3d32] focus:ring-[#0f3d32]" />
                    <span className="text-xs font-bold text-gray-800">{t.platform.inPerson}</span>
                  </label>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2">{t.form.availabilityDays}</label>
              <div className="flex gap-2">
                {['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].map(day => (
                  <div 
                    key={day}
                    onClick={() => toggleDay(t.days[day])}
                    className={`w-8 h-8 rounded border flex items-center justify-center text-xs font-bold cursor-pointer transition ${selectedDays.includes(t.days[day]) ? 'bg-[#0f3d32] text-white border-[#0f3d32]' : 'bg-[#f8f9fa] border-gray-200 text-gray-500 hover:border-gray-300'}`}
                  >
                    {t.days[day]}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-2">
              <h3 className="text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-3">{t.documents?.title || "Verification Documents"}</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <label className="border border-dashed border-[#376b52] bg-white rounded-xl p-5 flex flex-col items-center justify-center text-center cursor-pointer hover:border-[#10b981] transition group min-h-32">
                  <input type="file" accept=".pdf,.jpg,.jpeg,.png" className="hidden" onChange={e => setGovId(e.target.files[0] || null)} />
                  <svg className="w-5 h-5 text-[#0f3d32] mb-2 group-hover:text-[#10b981] transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                  <h4 className="text-[11px] font-bold text-gray-800 mb-1">{t.documents?.governmentId?.title || "Government ID"}</h4>
                  <p className="text-[9px] text-gray-400 font-medium break-all">{govId ? govId.name : t.documents?.governmentId?.description || "Upload ID document"}</p>
                </label>

                <label className="border border-dashed border-[#376b52] bg-white rounded-xl p-5 flex flex-col items-center justify-center text-center cursor-pointer hover:border-[#10b981] transition group min-h-32">
                  <input type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={e => setCv(e.target.files[0] || null)} />
                  <svg className="w-5 h-5 text-[#0f3d32] mb-2 group-hover:text-[#10b981] transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414A1 1 0 0120 6.414V19a2 2 0 01-2 2z"></path></svg>
                  <h4 className="text-[11px] font-bold text-gray-800 mb-1">CV</h4>
                  <p className="text-[9px] text-gray-400 font-medium break-all">{cv ? cv.name : "Upload your CV"}</p>
                </label>

                <label className="border border-dashed border-[#376b52] bg-white rounded-xl p-5 flex flex-col items-center justify-center text-center cursor-pointer hover:border-[#10b981] transition group min-h-32">
                  <input type="file" accept=".jpg,.jpeg,.png,.webp" className="hidden" onChange={e => setPhoto(e.target.files[0] || null)} />
                  <svg className="w-5 h-5 text-[#0f3d32] mb-2 group-hover:text-[#10b981] transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <h4 className="text-[11px] font-bold text-gray-800 mb-1">{t.documents?.profilePhoto?.title || "Profile Photo"}</h4>
                  <p className="text-[9px] text-gray-400 font-medium break-all">{photo ? photo.name : t.documents?.profilePhoto?.description || "Upload profile photo"}</p>
                </label>
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-100">
              <Link href={`/${currentLocale}/register/mentor`} className="text-xs font-bold text-gray-500 hover:text-[#0f3d32] transition flex items-center gap-1.5 px-4 py-2">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                {t.actions.back}
              </Link>
              <button type="submit" className="bg-[#0f3d32] hover:bg-[#0a2921] text-white text-xs font-bold py-3 px-6 rounded-lg transition  flex items-center gap-2">
                {t.actions.continue}
              </button>
            </div>

          </form>
  );
}
