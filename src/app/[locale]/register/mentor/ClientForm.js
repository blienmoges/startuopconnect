"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const schema = z.object({
  field_1: z.string().trim().regex(/^[0-9]{9}$/, "Phone number must be exactly 9 digits"),
  field_2: z.string().trim().min(2, "Professional title is required"),
  field_3: z.string().trim().min(1, "Required"),
  field_4: z.string().optional(),
  field_5: z.string().trim().min(10, "Bio must be at least 10 characters"),
  field_6: z.string().trim().url("Must be a valid URL").includes("linkedin.com", { message: "Must be a valid LinkedIn URL" }).or(z.literal("")),
  field_7: z.string().trim().min(1, "Required"),
  field_8: z.string().trim().regex(/^\d+(\.\d{1,2})?$/, "Invalid pricing format"),
  field_9: z.boolean().refine(val => val === true, "You must accept the terms and privacy policy")
});

export default function ClientForm({ t, currentLocale }) {
  const router = useRouter();
  
  const [languages, setLanguages] = useState(["Amharic", "English"]);
  const [newLang, setNewLang] = useState("");
  
  const [expertise, setExpertise] = useState(["Fintech Strategy", "Scaling Teams"]);
  const [newExpertise, setNewExpertise] = useState("");

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data) => {
    const existingData = JSON.parse(
      sessionStorage.getItem("mentorRegistration") || "{}"
    );

    const updatedData = {
      ...existingData,
      step1: {
        phone_number: `+251${data.field_1}`,
        headline: data.field_2,
        years_experience: parseInt(data.field_3),
        language: languages.join(", "),
        expertise: expertise.join(", "),
        bio: data.field_5,
        linkedin_profile: data.field_6,
        linkedin_url: data.field_6,
        availability: {
          hours_per_week: data.field_7,
        },
        hourly_rate: parseFloat(data.field_8),
        terms_accepted: data.field_9,
      },
    };

    sessionStorage.setItem(
      "mentorRegistration",
      JSON.stringify(updatedData)
    );

    router.push(`/${currentLocale}/register/mentor/step2`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 w-full">

      {/* Phone Number */}
      <div>
        <label className="block text-xs font-bold text-gray-900 mb-2">{t.form.phoneNumber}</label>
        <div className="flex">
            <div className="bg-[#9dbab0] bg-opacity-70 px-4 py-3 rounded-l-md text-sm text-[#1c3a2a] border-r border-[#8ba39e] shrink-0">
              +251
            </div>
            <input {...register("field_1")} 
            type="text"
            placeholder="911..."
            className="w-full px-4 py-3 bg-[#9dbab0] bg-opacity-70 border-none rounded-r-md focus:outline-none focus:ring-2 focus:ring-[#376b52] transition text-sm text-[#1c3a2a] placeholder-[#4a6b5a]"
            />
        </div>
        {errors.field_1 && <p className="text-red-500 text-xs mt-1">{errors.field_1.message}</p>}
      </div>

      {/* Professional Title */}
      <div>
        <label className="block text-xs font-bold text-gray-900 mb-2">{t.form.professionalTitle}</label>
        <input {...register("field_2")} 
          type="text"
          placeholder={t.form.professionalTitlePlaceholder}
          className="w-full px-4 py-3 bg-[#9dbab0] bg-opacity-70 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#376b52] transition text-sm text-[#1c3a2a] placeholder-[#4a6b5a]"
        />
        {errors.field_2 && <p className="text-red-500 text-xs mt-1">{errors.field_2.message}</p>}
      </div>

      {/* Experience & Languages */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-bold text-gray-900 mb-2">{t.form.yearsOfExperience}</label>
          <div className="relative">
            <select {...register("field_3")} className="w-full px-4 py-3 bg-[#9dbab0] bg-opacity-70 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#376b52] transition text-sm appearance-none text-gray-800">
              <option value="1">1+ years</option>
              <option value="3">3+ years</option>
              <option value="5">5+ years</option>
              <option value="10">10+ years</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-900 mb-2">{t.form.languages}</label>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 flex-wrap mb-1">
              {languages.map(lang => (
                <span key={lang} className="bg-[#9dbab0] bg-opacity-70 text-[#1c3a2a] px-3 py-1.5 rounded-md text-xs font-bold flex items-center gap-1.5">
                  {lang} <button type="button" onClick={() => setLanguages(languages.filter(l => l !== lang))} className="opacity-60 hover:opacity-100 transition"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input 
                type="text"
                value={newLang}
                onChange={(e) => setNewLang(e.target.value)}
                placeholder={t.form.addAnother || "Add Language"}
                className="w-full px-4 py-2 bg-[#9dbab0] bg-opacity-70 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#376b52] transition text-sm text-[#1c3a2a] placeholder-[#4a6b5a]"
              />
              <button type="button" onClick={() => { if(newLang) { setLanguages([...languages, newLang]); setNewLang(''); } }} className="bg-[#0f3d32] text-white px-4 py-2 rounded-md text-xs font-bold">Add</button>
            </div>
          </div>
        </div>
      </div>

      {/* Expertise Areas */}
      <div>
        <label className="block text-xs font-bold text-gray-900 mb-2">{t.form.expertiseAreas}</label>
        <div className="flex gap-2 flex-wrap">
          {expertise.map(exp => (
            <span key={exp} className="bg-[#9dbab0] bg-opacity-70 text-[#1c3a2a] px-3 py-1.5 rounded-md text-xs font-bold flex items-center gap-1.5">
              {exp} <button type="button" onClick={() => setExpertise(expertise.filter(e => e !== exp))} className="opacity-60 hover:opacity-100 transition"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>
            </span>
          ))}
          <div className="flex items-center gap-2">
            <input 
              type="text"
              value={newExpertise}
              onChange={(e) => setNewExpertise(e.target.value)}
              placeholder="Add..."
              className="w-24 px-2 py-1 bg-transparent border-b border-[#376b52] focus:outline-none text-xs text-[#1c3a2a]"
            />
            <button type="button" onClick={() => { if(newExpertise) { setExpertise([...expertise, newExpertise]); setNewExpertise(''); } }} className="border border-dashed border-[#376b52] border-opacity-30 text-[#1c3a2a] px-3 py-1.5 rounded-md text-xs font-bold flex items-center gap-1.5 hover:bg-[#9dbab0] hover:bg-opacity-30 transition">
              {t.expertise?.addExpertise || "Add"}
            </button>
          </div>
        </div>
      </div>

      {/* Professional Bio */}
      <div>
        <label className="block text-xs font-bold text-gray-900 mb-2">{t.form.professionalBio}</label>
        <textarea {...register("field_5")} 
          rows="4"
          placeholder={t.form.professionalBioPlaceholder}
          className="w-full px-4 py-3 bg-[#9dbab0] bg-opacity-70 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#376b52] transition text-sm resize-none text-[#1c3a2a] placeholder-[#4a6b5a]"
        ></textarea>
        {errors.field_5 && <p className="text-red-500 text-xs mt-1">{errors.field_5.message}</p>}
      </div>

      {/* LinkedIn URL */}
      <div>
        <label className="block text-xs font-bold text-gray-900 mb-2">{t.form.linkedinUrl}</label>
        <input {...register("field_6")} 
          type="text"
          placeholder="https://linkedin.com/in/..."
          className="w-full px-4 py-3 bg-[#9dbab0] bg-opacity-70 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#376b52] transition text-sm text-[#1c3a2a] placeholder-[#4a6b5a]"
        />
        {errors.field_6 && <p className="text-red-500 text-xs mt-1">{errors.field_6.message}</p>}
      </div>

      {/* Availability & Pricing */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-bold text-gray-900 mb-2">{t.form.availabilityPreference}</label>
          <div className="relative">
            <select {...register("field_7")} className="w-full px-4 py-3 bg-[#9dbab0] bg-opacity-70 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-[#376b52] transition text-sm appearance-none text-gray-800">
              <option value="1-2">1-2 hours/week</option>
              <option value="3-5">3-5 hours/week</option>
              <option value="5+">5+ hours/week</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-900 mb-2">{t.form.sessionPricing}</label>
          <div className="flex">
            <div className="bg-transparent px-4 py-3.5 rounded-l-lg text-xs font-bold text-gray-600 border border-[#376b52] border-opacity-30 border-r-0 shrink-0 flex items-center justify-center">
              ETB
            </div>
            <input {...register("field_8")} 
              type="text"
              placeholder="0.00"
              className="w-full px-4 py-3.5 bg-[#9dbab0] bg-opacity-70 border-none rounded-r-lg focus:outline-none focus:ring-2 focus:ring-[#376b52] transition text-sm text-[#1c3a2a] placeholder-[#4a6b5a]"
            />
          </div>
          {errors.field_8 && <p className="text-red-500 text-xs mt-1">{errors.field_8.message}</p>}
        </div>
      </div>

      {/* Terms Checkbox */}
      <div className="bg-transparent rounded-lg p-5 mt-2 border-none">
        <label className="flex items-start gap-3 cursor-pointer">
          <input {...register("field_9")} type="checkbox" className="mt-0.5 w-4 h-4 text-[#136150] border-[#376b52] bg-transparent rounded focus:ring-[#376b52]" />
          <span className="text-[11px] text-gray-600 leading-snug">
            {t.terms.before} <span className="font-bold">{t.terms.termsOfService}</span> {t.terms.and} <span className="font-bold">{t.terms.privacyPolicy}</span>. {t.terms.after}
          </span>
        </label>
        {errors.field_9 && <p className="text-red-500 text-xs mt-1">{errors.field_9.message}</p>}
      </div>

      {/* Submit Button */}
      <button type="submit" className="w-full py-4 bg-[#053023] hover:bg-[#032017] text-white font-bold rounded-lg shadow-none transition text-sm mt-4 flex items-center justify-center">
        {t.actions.continue}
      </button>

      <p className="text-center text-xs text-gray-500 mt-2">
        {t.login.text} <Link href={`/${currentLocale}/login`} className="font-bold text-[#053023] hover:underline">{t.login.signIn}</Link>
      </p>

    </form>
  );
}
