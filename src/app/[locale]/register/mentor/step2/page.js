import Link from "next/link";
import { getDictionary } from "../../../../../dictionaries/getDictionary";
import ClientForm from "./ClientForm";

export default async function MentorRegistrationStep2({ params }) {
  const { locale } = await params;
  const currentLocale = locale === "am" ? "am" : "en";

  const dict = await getDictionary(currentLocale);
  const t = dict.mentorStep2;

  return (
    <div className="min-h-screen bg-[#e6eee9] font-sans text-gray-900 flex flex-col md:flex-row">

      {/* Left Sidebar (Dark Green graphic) */}
      <div className="hidden lg:flex w-[40%] bg-[#061e16] relative overflow-hidden flex-col justify-between py-12 px-12">
        {/* Abstract Green Light Beams / Background */}
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
      <div className="w-full lg:w-[60%] flex flex-col items-center py-12 px-4 sm:px-6 overflow-y-auto">

        {/* Progress Stepper */}
        <div className="w-full max-w-md mb-10 px-4">
          <div className="relative flex justify-between items-start">
            <div className="absolute top-4 left-8 right-8 h-[2px] bg-gray-200 -z-10"></div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#0f3d32] text-white flex items-center justify-center font-bold text-xs ring-4 ring-[#f3f4f6]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <span className="text-[10px] font-bold text-[#0f3d32]">{t.steps.accountInfo}</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#0f3d32] text-white flex items-center justify-center font-bold text-xs ring-4 ring-[#f3f4f6]">
                2
              </div>
              <span className="text-[10px] font-bold text-[#0f3d32]">{t.steps.professional}</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#e5e7eb] text-gray-500 flex items-center justify-center font-bold text-xs ring-4 ring-[#f3f4f6]">
                3
              </div>
              <span className="text-[10px] font-medium text-gray-400">{t.steps.review}</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#e5e7eb] text-gray-500 flex items-center justify-center font-bold text-xs ring-4 ring-[#f3f4f6]">
                4
              </div>
              <span className="text-[10px] font-medium text-gray-400">{t.steps.verification}</span>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="w-full max-w-3xl flex flex-col items-center bg-transparent rounded-2xl p-8 sm:p-12 mb-10 border-none">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0f3d32] mb-3">{t.main.title}</h2>
            <p className="text-gray-500 text-sm">{t.main.subtitle}</p>
          </div>

          <ClientForm t={t} currentLocale={currentLocale} />
        </div>

        {/* Form area footer text */}
        <div className="w-full max-w-3xl mx-auto mt-6 text-center">
          <p className="text-[9px] text-gray-400 font-medium max-w-sm mx-auto leading-relaxed">
            {t.confirmationNote}
          </p>
        </div>

        {/* Global Footer (Right column) */}
        <div className="w-full max-w-3xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-gray-500 px-2 mt-4">
          <p className="text-[10px] text-gray-500 uppercase tracking-widest">&copy; 2024 {t.footerCopyright}</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 uppercase tracking-widest">
            <Link href="#" className="hover:text-[#136150] transition">{t.footer.privacyPolicy}</Link>
            <Link href="#" className="hover:text-[#136150] transition">{t.footer.termsOfUse}</Link>
          </div>
        </div>

      </div>
    </div>
  );
}