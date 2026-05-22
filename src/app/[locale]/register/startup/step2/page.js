import Link from "next/link";
import { getDictionary } from "../../../../../dictionaries/getDictionary";
import ClientForm from "./ClientForm";

export default async function StartupRegistrationStep2({ params }) {
  const { locale } = await params;
  const currentLocale = locale === "am" ? "am" : "en";

  const dict = await getDictionary(currentLocale);
  const t = dict.startupStep2;

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
            <div className="flex items-center gap-2"><img src="/logo.png" alt={t.logoAlt} className="w-8 h-8 object-contain" /><span className="font-bold text-lg text-white tracking-tight">{t.brand}</span></div>
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
      <div className="w-full lg:w-[60%] flex flex-col pt-10 pb-6 px-4 md:px-8 overflow-y-auto">
        <div className="w-full max-w-2xl mx-auto flex flex-col">
          <div className="flex items-center gap-3 mb-4 pl-6">
            <Link href={`/${currentLocale}/register/startup/step1`} className="text-[#167b66] hover:text-[#0f5c4a] transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
            </Link>
            <span className="font-bold text-lg tracking-tight text-[#115b4c]">
              {t.main.title}
            </span>
          </div>

          <div className="mb-10 pl-6">
            <div className="flex items-center gap-8">
              <span className="text-xs font-bold text-gray-500 tracking-wider uppercase">{t.main.step}</span>
              <div className="flex gap-1.5 ml-auto mr-4">
                <div className="h-1.5 w-6 bg-gray-200 rounded-full"></div>
                <div className="h-1.5 w-6 bg-[#167b66] rounded-full"></div>
                <div className="h-1.5 w-6 bg-gray-200 rounded-full"></div>
                <div className="h-1.5 w-6 bg-gray-200 rounded-full"></div>
              </div>
            </div>
          </div>

          <ClientForm t={t} currentLocale={currentLocale} />
        </div>
      </div>
    </div>
  );
}