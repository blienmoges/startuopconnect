import Link from "next/link";
import { getDictionary } from "../../../../../dictionaries/getDictionary";
import ClientContinueButton from "./ClientContinueButton";
import ClientOptionalDocuments from "./ClientOptionalDocuments";
import ClientRequiredDocuments from "./ClientRequiredDocuments";
export default async function StartupRegistrationStep3({ params }) {
  const { locale } = await params;
  const currentLocale = locale === "am" ? "am" : "en";

  const dict = await getDictionary(currentLocale);
  const t = dict.startupStep3;

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

      {/* Main Content Area */}
      <div className="w-full lg:w-[60%] flex flex-col pt-10 pb-32 px-4 md:px-8 overflow-y-auto">
        <div className="w-full max-w-2xl mx-auto flex flex-col">
          <div className="w-full flex items-center gap-3 mb-6 pl-4">
            <Link href={`/${currentLocale}/register/startup/step2`} className="text-[#167b66] hover:text-[#0f5c4a] transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
            </Link>
            <span className="font-bold text-lg tracking-tight text-[#115b4c]">
              {t.main.title}
            </span>
          </div>

          {/* Progress Indicator */}
          <div className="w-full flex items-center justify-between mb-8">
            <span className="text-xs font-bold text-gray-500 tracking-wider uppercase">{t.main.step}</span>
            <div className="flex gap-1.5">
              <div className="h-1.5 w-6 bg-gray-200 rounded-full"></div>
              <div className="h-1.5 w-6 bg-gray-200 rounded-full"></div>
              <div className="h-1.5 w-6 bg-[#167b66] rounded-full"></div>
              <div className="h-1.5 w-6 bg-gray-200 rounded-full"></div>
            </div>
          </div>

          {/* Info Banner */}
          <div className="w-full bg-[#e3f2f0] border border-[#c4e5df] rounded-xl p-5 mb-12 flex items-start gap-4">
            <div className="w-6 h-6 bg-[#115b4c] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="font-bold text-sm font-serif italic text-white">i</span>
            </div>
            <p className="text-sm text-[#0f5c4a] font-medium leading-relaxed">
              <span className="font-bold">{t.info.important}</span> {t.info.description}
            </p>
          </div>

          {/* SECTION: Required Documents */}
          <ClientRequiredDocuments t={t} />
          {/* <div className="w-full mb-12">
            <div className="flex justify-between items-end mb-6">
              <h2 className="text-xl font-bold text-[#115b4c] font-serif">{t.required.title}</h2>
              <span className="text-xs font-bold text-gray-400 tracking-widest uppercase">{t.required.itemsNeeded}</span>
            </div>

            <div className="flex flex-col gap-6">

              {/* Document 1: Uploaded State */}
          {/* <div className="bg-transparent p-6 rounded-xl border-none flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-gray-900 text-[15px] mb-1">{t.required.doc1.title}</h3>
                <p className="text-sm text-gray-500">{t.required.doc1.description}</p>
              </div>
              <span className="bg-[#e8f3f1] text-[#167b66] px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">{t.required.requiredLabel}</span>
            </div> */}

          {/* Uploaded File Bar */}
          {/* <div className="bg-[#9dbab0] bg-opacity-30 border-none rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-[#167b66] rounded-full flex items-center justify-center text-white">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 leading-tight">national_id_founder.pdf</p>
                  <p className="text-[11px] text-gray-500 mt-0.5">{t.required.doc1.uploadInfo}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-[#167b66]">
                <button className="hover:text-[#0f5c4a] transition" title={t.required.viewTitle}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                </button>
                <button className="hover:text-[#0f5c4a] transition" title={t.required.replaceTitle}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                </button> */}
          {/* </div>
            </div>
          </div> */}

          {/* Document 2: Empty/Upload State */}
          {/* <div className="bg-transparent p-6 rounded-xl border-none flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-gray-900 text-[15px] mb-1">{t.required.doc2.title}</h3>
                <p className="text-sm text-gray-500">{t.required.doc2.description}</p>
              </div>
              <span className="bg-[#e8f3f1] text-[#167b66] px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">{t.required.requiredLabel}</span>
            </div> */}

          {/* Drag and Drop Zone */}
          {/* <div className="border-2 border-dashed border-[#9dbab0] rounded-lg p-8 flex flex-col items-center justify-center hover:bg-[#9dbab0] hover:bg-opacity-30 transition cursor-pointer">
              <div className="w-12 h-12 bg-transparent border border-[#376b52] border-opacity-30 rounded-full flex items-center justify-center text-[#167b66] mb-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
              </div>
              <p className="text-sm font-bold text-[#115b4c] mb-1">{t.upload.clickOrDrag}</p>
              <p className="text-[11px] text-gray-400">{t.upload.fileTypes}</p>
            </div>
          </div> */}

          {/* Document 3: Error State */}


          {/* </div>
      </div> */}

          <ClientOptionalDocuments t={t} />
        </div>
      </div >

      {/* Fixed Bottom Action Bar */}
      < div className="fixed bottom-0 lg:left-[40%] left-0 right-0 bg-[#e6eee9] border-t border-[#9dbab0] py-4 px-6 md:px-12 flex justify-between items-center z-20 shadow-none" >
        <div>
          <span className="text-[10px] font-bold text-gray-400 tracking-wider uppercase block">{t.bottom.step}</span>
          <span className="text-sm font-bold text-[#115b4c]">{t.bottom.next}</span>
        </div>
        {/* <Link href={`/${currentLocale}/register/startup/step4`} className="px-8 py-3.5 bg-[#0f5c4a] hover:bg-[#0c4a3b] text-white font-bold rounded shadow-md transition text-sm flex items-center gap-2">
          {t.bottom.continue}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </Link> */}
        <ClientContinueButton
          currentLocale={currentLocale}
          continueText={t.bottom.continue}
        />
      </div >

    </div >
  );
}
