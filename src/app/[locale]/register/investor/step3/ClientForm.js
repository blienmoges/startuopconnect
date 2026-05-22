"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import { useRouter } from "next/navigation";

const schema = z.object({
  field_1: z.boolean().refine(val => val === true, "You must confirm financial qualification"),
  field_2: z.boolean().refine(val => val === true, "You must accept the terms"),
  personalDoc: z.any().optional(),
  doc_1: z.any().optional(),
  doc_2: z.any().optional()
});

export default function ClientForm({ t, currentLocale }) {
  const router = useRouter();
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  });

  const personalDoc = watch("personalDoc");
  const doc1 = watch("doc_1");
  const doc2 = watch("doc_2");

  const onSubmit = async (data) => {
    const existingData = JSON.parse(
      sessionStorage.getItem("investorRegistration") || "{}"
    );

    const toBase64 = (file) => new Promise((resolve, reject) => {
        if (!file) return resolve(null);
        const reader = new FileReader();
        reader.onload = () => resolve({
            name: file.name,
            size: file.size,
            type: file.type,
            dataUrl: reader.result
        });
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });

    const personalFile = data.personalDoc && data.personalDoc.length > 0 ? await toBase64(data.personalDoc[0]) : null;
    const doc1File = data.doc_1 && data.doc_1.length > 0 ? await toBase64(data.doc_1[0]) : null;
    const doc2File = data.doc_2 && data.doc_2.length > 0 ? await toBase64(data.doc_2[0]) : null;

    const updatedData = {
      ...existingData,
      step3: {
        financial_confirmed: data.field_1,
        terms_accepted: data.field_2,
        personalDoc: personalFile,
        tradeLicense: doc1File,
        tinCertificate: doc2File
      },
    };

    sessionStorage.setItem(
      "investorRegistration",
      JSON.stringify(updatedData)
    );

    router.push(`/${currentLocale}/register/investor/step4`);
  };

  const languageHref = (lang) => `/${lang}/register/investor`;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">

            {/* Personal Verification */}
            <section>
              <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">{t.personal.title}</h3>
              <label className="border-2 border-dashed border-[#9dbab0] bg-transparent rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-[#9dbab0] hover:bg-opacity-30 transition">
                <input type="file" {...register("personalDoc")} className="hidden" />
                <div className="w-12 h-12 bg-[#9dbab0] bg-opacity-70 rounded-full flex items-center justify-center mb-4 text-[#136150]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                </div>
                <h4 className="font-bold text-[#0f3d32] text-sm mb-1">
                  {personalDoc && personalDoc.length > 0 ? personalDoc[0].name : t.personal.uploadTitle}
                </h4>
                <p className="text-[11px] text-gray-500 font-medium">{t.personal.supportedFormats}</p>
              </label>
            </section>

            {/* Institutional Verification */}
            <section>
              <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">{t.institutional.title}</h3>
              <div className="flex flex-col gap-3">

                {/* Requirement 1 */}
                <label className={`bg-transparent border ${doc1 && doc1.length > 0 ? 'border-[#136150] bg-[#9dbab0] bg-opacity-10' : 'border-[#376b52] border-opacity-30'} rounded-xl p-4 flex justify-between items-center cursor-pointer hover:border-[#136150] transition`}>
                  <input type="file" {...register("doc_1")} className="hidden" />
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 ${doc1 && doc1.length > 0 ? 'bg-[#167b66] text-white' : 'bg-[#9dbab0] bg-opacity-70 text-[#1c3a2a]'} rounded-lg flex items-center justify-center shrink-0`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-800">{t.institutional.tradeLicense}</h4>
                      {doc1 && doc1.length > 0 && <p className="text-[11px] text-[#167b66] font-medium mt-0.5">{doc1[0].name}</p>}
                    </div>
                  </div>
                  <div className="text-[#136150] p-1.5">
                    {doc1 && doc1.length > 0 ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    )}
                  </div>
                </label>

                {/* Requirement 2 */}
                <label className={`bg-transparent border ${doc2 && doc2.length > 0 ? 'border-[#136150] bg-[#9dbab0] bg-opacity-10' : 'border-[#376b52] border-opacity-30'} rounded-xl p-4 flex justify-between items-center cursor-pointer hover:border-[#136150] transition`}>
                  <input type="file" {...register("doc_2")} className="hidden" />
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 ${doc2 && doc2.length > 0 ? 'bg-[#167b66] text-white' : 'bg-[#9dbab0] bg-opacity-70 text-[#1c3a2a]'} rounded-lg flex items-center justify-center shrink-0`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-800">{t.institutional.tinCertificate}</h4>
                      {doc2 && doc2.length > 0 && <p className="text-[11px] text-[#167b66] font-medium mt-0.5">{doc2[0].name}</p>}
                    </div>
                  </div>
                  <div className="text-[#136150] p-1.5">
                    {doc2 && doc2.length > 0 ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    )}
                  </div>
                </label>

              </div>
            </section>

            {/* Checkboxes */}
            <section className="pt-6 border-t border-gray-200 flex flex-col gap-4">
              <label className="flex items-start gap-3 cursor-pointer">
                <input {...register("field_1")}  type="checkbox" className="mt-1 w-4 h-4 text-[#136150] border-[#376b52] rounded focus:ring-[#376b52]" />
                <span className="text-[13px] text-gray-600 font-medium leading-snug">
                  {t.confirmations.financialPrefix} <span className="font-bold">{t.confirmations.financialBold}</span> {t.confirmations.financialSuffix}
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <input {...register("field_2")}  type="checkbox" className="mt-1 w-4 h-4 text-[#136150] border-[#376b52] rounded focus:ring-[#376b52]" />
                <span className="text-[13px] text-gray-600 font-medium leading-snug">
                  {t.confirmations.termsPrefix} <span className="font-bold">{t.confirmations.termsBold}</span> {t.confirmations.termsSuffix}
                </span>
              </label>

              <div className="flex items-center gap-2 mt-4 text-[#5e6b75] font-bold text-[9px] uppercase tracking-widest pl-1">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path></svg>
                {t.encryptionNote}
              </div>
            </section>

            {/* Bottom Actions */}
            <div className="flex justify-between items-center pt-8 border-t border-gray-200">
              <Link href={`/${currentLocale}/register/investor/step2`} className="flex items-center gap-2 text-sm font-bold text-[#0f3d32] hover:text-[#136150] transition">
                {t.actions.back}
              </Link>
              <button type="submit" className="px-8 py-3.5 bg-[#0f3d32] hover:bg-[#0a2921] text-white font-bold rounded  transition text-sm">
                {t.actions.continue}
              </button>
            </div>

          </form>
  );
}