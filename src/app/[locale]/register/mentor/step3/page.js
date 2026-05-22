import Link from "next/link";
import { getDictionary } from "../../../../../dictionaries/getDictionary";
import MentorReviewCards from "./MentorReviewCards";
import SubmitMentorProfileButton from "./SubmitMentorProfileButton";

export default async function MentorRegistrationStep3({ params }) {
  const { locale } = await params;
  const currentLocale = locale === "am" ? "am" : "en";

  const dict = await getDictionary(currentLocale);
  const t = dict.mentorStep3;

  return (
    <div className="min-h-screen bg-[#f9fafb] font-sans text-gray-900 flex">

      {/* Left Sidebar (Dark Green graphic) */}
      <div className="hidden lg:flex w-[40%] bg-[#061e16] relative overflow-hidden flex-col justify-between py-12 px-12">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#061e16]"></div>
          <div className="absolute top-[-10%] left-[10%] w-[150%] h-[30px] bg-[#008f64] opacity-30 transform -rotate-[55deg] blur-[2px]"></div>
          <div className="absolute top-[10%] left-[10%] w-[150%] h-[40px] bg-[#008f64] opacity-30 transform -rotate-[55deg] blur-[2px]"></div>
          <div className="absolute top-[30%] left-[0%] w-[150%] h-[20px] bg-[#008f64] opacity-30 transform -rotate-[55deg] blur-[2px]"></div>
          <div className="absolute top-[50%] left-[-10%] w-[150%] h-[60px] bg-[#008f64] opacity-20 transform -rotate-[55deg] blur-[4px]"></div>
          <div className="absolute top-[70%] left-[-20%] w-[150%] h-[25px] bg-[#008f64] opacity-40 transform -rotate-[55deg] blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#061e16]/60 via-transparent to-[#061e16]/90"></div>
        </div>

        <div className="relative z-10">
          <Link href={`/${currentLocale}`} className="flex items-center gap-2 mb-16">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt={t.logoAlt} className="w-8 h-8 object-contain" />
              <span className="font-bold text-lg text-white tracking-tight">{t.brand}</span>
            </div>
          </Link>

          <h1 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
            {t.sidebar.titleLine1} <br /> {t.sidebar.titleLine2} <br /> {t.sidebar.titleLine3} <br /> {t.sidebar.titleLine4}
          </h1>
          <p className="text-[#10b981] text-sm leading-relaxed max-w-sm font-medium">
            {t.sidebar.description}
          </p>
        </div>

        <div className="relative z-10">
          <p className="text-[#8ba39e] text-[10px] font-medium tracking-widest uppercase opacity-50">
            &copy; 2024 {t.footerCopyright}
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="w-full lg:w-[60%] flex flex-col pt-10 pb-32 px-4 md:px-8 overflow-y-auto">

        {/* Progress Stepper */}
        <div className="w-full max-w-2xl mx-auto mb-8 px-4">
          <div className="relative flex justify-between items-center">
            <div className="absolute left-[10%] right-[10%] h-[2px] bg-[#0f3d32] -z-10"></div>

            <div className="flex items-center gap-2 bg-[#f9fafb] pr-2">
              <div className="w-6 h-6 rounded-full bg-[#0f3d32] text-white flex items-center justify-center font-bold text-[10px] ">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest hidden sm:inline-block">{t.steps.accountInfo}</span>
            </div>

            <div className="flex items-center gap-2 bg-[#f9fafb] px-2 shadow-[0_0_0_4px_#f9fafb]">
              <div className="w-6 h-6 rounded-full bg-[#0f3d32] text-white flex items-center justify-center font-bold text-[10px] ">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest hidden sm:inline-block">{t.steps.professional}</span>
            </div>

            <div className="flex items-center gap-2 bg-[#f9fafb] px-2 shadow-[0_0_0_4px_#f9fafb]">
              <div className="w-6 h-6 rounded-full bg-[#dcfce7] border border-[#a5d6a7] text-[#0f3d32] flex items-center justify-center font-bold text-[10px] ">
                3
              </div>
              <span className="text-[10px] font-bold text-[#0f3d32] uppercase tracking-widest hidden sm:inline-block">{t.steps.review}</span>
            </div>

            <div className="flex items-center gap-2 bg-[#f9fafb] pl-2 shadow-[0_0_0_4px_#f9fafb]">
              <div className="w-6 h-6 rounded-full bg-[#e9ecef] text-gray-400 flex items-center justify-center font-bold text-[10px] ">
                4
              </div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest hidden sm:inline-block">{t.steps.verification}</span>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="w-full max-w-2xl mx-auto flex-grow flex flex-col">

          <h2 className="text-2xl font-bold text-[#0f3d32] mb-2 px-1">{t.main.title}</h2>
          <p className="text-gray-500 text-[11px] mb-8 font-medium px-1">{t.main.subtitle}</p>

          <div className="flex flex-col gap-6 w-full">

            <MentorReviewCards t={t} currentLocale={currentLocale} />

            {/* Comment Area */}
            <div className="mt-2">
              <label className="block text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-2 px-1">{t.comment.label}</label>
              <textarea rows="3" placeholder={t.comment.placeholder} className="w-full px-4 py-3 bg-[#9dbab0] bg-opacity-70 border-none rounded-md focus:ring-2 focus:ring-[#376b52] text-xs text-gray-800 outline-none resize-none placeholder-gray-400"></textarea>
            </div>

            {/* Checkboxes */}
            <div className="flex flex-col gap-3 px-1 mt-2">
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-0.5 w-3.5 h-3.5 text-[#136150] border-gray-300 rounded focus:ring-[#376b52]" />
                <span className="text-[10px] text-gray-500 font-medium leading-snug">
                  {t.confirmations.authentic}
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-0.5 w-3.5 h-3.5 text-[#136150] border-gray-300 rounded focus:ring-[#376b52]" />
                <span className="text-[10px] text-gray-500 font-medium leading-snug">
                  {t.confirmations.codePrefix} <Link href="#" className="font-bold text-[#136150] hover:underline">{t.confirmations.codeLink}</Link>.
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-0.5 w-3.5 h-3.5 text-[#136150] border-gray-300 rounded focus:ring-[#376b52]" />
                <span className="text-[10px] text-gray-500 font-medium leading-snug">
                  {t.confirmations.privacyPrefix} <Link href="#" className="font-bold text-[#136150] hover:underline">{t.confirmations.privacyLink}</Link> {t.confirmations.privacySuffix}
                </span>
              </label>
            </div>

            {/* Actions */}
            <div className="flex justify-between items-center mt-6 pt-6 mb-8">
              <Link href={`/${currentLocale}/register/mentor/step2`} className="text-xs font-bold text-[#0f3d32] hover:text-[#136150] transition flex items-center gap-1.5 px-2 py-2">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                {t.actions.back}
              </Link>
              <SubmitMentorProfileButton currentLocale={currentLocale} submitText={t.actions.continue} />
            </div>

          </div>
        </div>

        {/* Global Footer (Right column) */}
        <div className="w-full max-w-2xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 py-8 border-t border-gray-200 mt-auto">
          <div className="flex items-center gap-3 text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4 sm:mb-0">
            <span className="text-[#0f3d32]">{t.footer.portal}</span>
            <span className="text-gray-300">|</span>
            <span>{t.footer.dashboard}</span>
          </div>

          <div className="flex gap-6 text-[9px] text-gray-400 font-bold uppercase tracking-widest">
            <Link href="#" className="hover:text-gray-600 transition">{t.footer.support}</Link>
            <Link href="#" className="hover:text-gray-600 transition">{t.footer.terms}</Link>
            <Link href="#" className="hover:text-gray-600 transition">{t.footer.accessibility}</Link>
          </div>
        </div>

      </div>
    </div>
  );
}
