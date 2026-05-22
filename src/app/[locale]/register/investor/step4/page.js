import Link from "next/link";
import Image from "next/image";
import { getDictionary } from "../../../../../dictionaries/getDictionary";
import SubmitInvestorProfileButton from "./SubmitInvestorProfileButton";
import InvestorReviewCards from "./InvestorReviewCards";

export default async function InvestorRegistrationStep4({ params }) {
  const { locale } = await params;
  const currentLocale = locale === "am" ? "am" : "en";

  const dict = await getDictionary(currentLocale);
  const t = dict.investorStep4;

  return (
    <div className="min-h-screen bg-[#e6eee9] font-sans text-gray-900 flex flex-col lg:flex-row">

      {/* Left Sidebar (Dark Green graphic) */}
      <div className="hidden lg:flex w-[40%] bg-[#061e16] relative overflow-hidden flex-col justify-between py-12 px-12">
        {/* Abstract Green Light Beams / Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#061e16]"></div>
          {/* Faux light beams using rotated divs */}
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

      {/* Main Content Form Side */}
      <div className="w-full lg:w-[60%] flex flex-col pt-10 pb-32 px-4 md:px-8 overflow-y-auto">
        <div className="w-full max-w-2xl mx-auto flex flex-col">
          <div className="w-full flex items-center gap-3 mb-6 pl-4">
            <Link href={`/${currentLocale}/register/investor/step3`} className="text-[#167b66] hover:text-[#0f5c4a] transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
            </Link>
            <span className="font-bold text-lg tracking-tight text-[#115b4c]">
              {t.header.title}
            </span>
          </div>

          <div className="mb-8">
            <h1 className="text-3xl font-extrabold text-[#115b4c] tracking-tight mb-2">{t.main.title}</h1>
            <p className="text-gray-500 mb-10 text-[15px]">{t.main.subtitle}</p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-xs font-bold text-gray-400 tracking-wider uppercase">{t.main.step}</span>
              <div className="flex gap-1.5">
                <div className="h-1.5 w-6 bg-[#167b66] rounded-full"></div>
                <div className="h-1.5 w-6 bg-[#167b66] rounded-full"></div>
                <div className="h-1.5 w-6 bg-[#167b66] rounded-full"></div>
                <div className="h-1.5 w-6 bg-[#167b66] rounded-full"></div>
                <div className="h-1.5 w-6 bg-gray-200 rounded-full"></div>
              </div>
            </div>
          </div>

          <InvestorReviewCards t={t} currentLocale={currentLocale} />

          {/* Info Alert Box */}
          <div className="mt-12 bg-transparent rounded-xl p-5 border border-[#376b52] border-opacity-30 flex items-start gap-4">
            <div className="text-[#136150] shrink-0 mt-0.5">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed font-medium">
              {t.alert}
            </p>
          </div>

          {/* Bottom Actions */}
          <div className="flex justify-between items-center mt-8">
            <Link href={`/${currentLocale}/register/investor/step3`} className="flex items-center gap-2 text-sm font-bold text-[#1c3a2a] px-6 py-3 border border-[#376b52] border-opacity-30 rounded-lg hover:border-[#376b52] transition">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
              {t.actions.back}
            </Link>
            <SubmitInvestorProfileButton currentLocale={currentLocale} submitText={t.actions.submit} />
          </div>

          {/* Badges Footer inside Card */}
          <div className="flex justify-center items-center gap-6 mt-12 pt-8 border-t border-gray-100 flex-wrap">
            <div className="flex items-center gap-2 text-[8px] font-bold text-gray-400 uppercase tracking-widest">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              {t.badges.sovereignData}
            </div>
            <div className="flex items-center gap-2 text-[8px] font-bold text-gray-400 uppercase tracking-widest">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
              {t.badges.adminAudit}
            </div>
            <div className="flex items-center gap-2 text-[8px] font-bold text-gray-400 uppercase tracking-widest">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              {t.badges.verifiedPlatform}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}