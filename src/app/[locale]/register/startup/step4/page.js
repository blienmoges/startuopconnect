import Link from "next/link";
import Image from "next/image";
import SubmitStartupProfileButton from "./SubmitStartupProfileButton";
import { getDictionary } from "../../../../../dictionaries/getDictionary";
import StartupReviewCards from "./StartupReviewCards";
export default async function StartupRegistrationStep4({ params }) {
  const { locale } = await params;
  const currentLocale = locale === "am" ? "am" : "en";

  const dict = await getDictionary(currentLocale);
  const t = dict.startupStep4;

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
      <div className="w-full lg:w-[60%] flex flex-col pt-10 pb-16 px-4 md:px-8 overflow-y-auto">
        <div className="w-full max-w-2xl mx-auto flex flex-col">
          <div className="w-full flex items-center gap-3 mb-6 pl-4">
            <Link href={`/${currentLocale}/register/startup/step3`} className="text-[#167b66] hover:text-[#0f5c4a] transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
            </Link>
            <span className="font-bold text-lg tracking-tight text-[#115b4c]">
              {t.main.title}
            </span>
          </div>

          <div className="mb-8">
            <h1 className="text-3xl font-extrabold text-[#115b4c] tracking-tight mb-2">{t.main.title}</h1>
            <p className="text-sm text-gray-500">{t.main.subtitle}</p>
          </div>

          {/* Profile Status Banner */}
          <div className="w-full bg-[#e3f2f0] border border-[#c4e5df] rounded-xl p-5 mb-10 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#167b66] rounded-full flex items-center justify-center text-white border-[3px] border-[#a5d6cd]">
                <span className="font-bold text-sm">100%</span>
              </div>
              <div>
                <h3 className="font-bold text-[#115b4c] text-[15px]">{t.profile.title}</h3>
                <p className="text-sm text-[#0f5c4a] opacity-80 mt-0.5">{t.profile.description}</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 bg-[#fef0db] text-[#d97736] px-3 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest shadow-sm">
              <div className="w-1.5 h-1.5 bg-[#d97736] rounded-full"></div>
              {t.profile.ready}
            </div>
          </div>

          {/* Review Cards */}
          <StartupReviewCards t={t} currentLocale={currentLocale} />
          {/* <div className="flex flex-col gap-6 mb-12"> */}

          {/* Card 1: Account Information */}
          {/* <div className="bg-transparent rounded-2xl p-6 border-none flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2 text-[#167b66]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                  <h2 className="text-lg font-bold">{t.account.title}</h2>
                </div>
                <Link href={`/${currentLocale}/register/startup/step1`} className="text-xs font-bold text-[#167b66] hover:underline uppercase tracking-wide">{t.editSection}</Link>
              </div>
              <div className="bg-transparent rounded-xl p-5 border border-[#376b52] border-opacity-30 grid grid-cols-2 gap-y-6 gap-x-8">
                <div>
                  <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{t.account.fullName}</h4>
                  <p className="text-sm font-medium text-gray-900">Abebe Kebede</p>
                </div>
                <div> */}
          {/* <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{t.account.workEmail}</h4>
                  <p className="text-sm font-medium text-gray-900">abebe.k@startupeth.et</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{t.account.phoneNumber}</h4>
                  <p className="text-sm font-medium text-gray-900">+251 911 234 567</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{t.account.role}</h4>
                  <p className="text-sm font-medium text-gray-900">{t.account.roleValue}</p>
                </div>
              </div>
            </div> */}

          {/* Card 2: Company Details */}
          {/* <div className="bg-transparent rounded-2xl p-6 border-none flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2 text-[#167b66]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                  <h2 className="text-lg font-bold">{t.company.title}</h2>
                </div>
                <Link href={`/${currentLocale}/register/startup/step2`} className="text-xs font-bold text-[#167b66] hover:underline uppercase tracking-wide">{t.editSection}</Link>
              </div>
              <div className="bg-transparent rounded-xl p-5 border border-[#376b52] border-opacity-30 grid grid-cols-2 gap-y-6 gap-x-8">
                <div className="col-span-2">
                  <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{t.company.companyName}</h4>
                  <p className="text-[15px] font-bold text-gray-900">EthioAgriTech Solutions</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{t.company.industry}</h4>
                  <p className="text-sm font-medium text-gray-900">{t.company.industryValue}</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{t.company.registrationNumber}</h4>
                  <p className="text-sm font-medium text-gray-900">ET-98219-150</p>
                </div>
                <div className="col-span-2">
                  <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{t.company.businessSummary}</h4>
                  <p className="text-sm font-medium text-gray-700 leading-relaxed">
                    {t.company.summaryValue}
                  </p>
                </div>
              </div>
            </div> */}

          {/* Card 3: Verification Documents */}
          {/* <div className="bg-transparent rounded-2xl p-6 border-none flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2 text-[#167b66]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                  <h2 className="text-lg font-bold">{t.documents.title}</h2>
                </div>
                <Link href={`/${currentLocale}/register/startup/step3`} className="text-xs font-bold text-[#167b66] hover:underline uppercase tracking-wide">{t.editSection}</Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* File 1 */}
          {/* <div className="bg-transparent rounded-xl p-4 border border-[#376b52] border-opacity-30 flex items-center gap-3">
                  <div className="bg-[#fef0db] text-[#d97736] p-2 rounded-lg">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#115b4c] truncate w-32" title="trade_license.pdf">trade_license.pdf</h4>
                    <span className="text-[10px] text-gray-500">4.2 MB</span>
                  </div>
                </div> */}
          {/* File 2 */}
          {/* <div className="bg-transparent rounded-xl p-4 border border-[#376b52] border-opacity-30 flex items-center gap-3">
                  <div className="bg-[#fef0db] text-[#d97736] p-2 rounded-lg">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#115b4c] truncate w-32" title="tin_certificate.pdf">tin_certificate.pdf</h4>
                    <span className="text-[10px] text-gray-500">1.1 MB</span>
                  </div>
                </div> */}
          {/* File 3 */}
          {/* <div className="bg-transparent rounded-xl p-4 border border-[#376b52] border-opacity-30 flex items-center gap-3">
                  <div className="bg-[#f3e8ff] text-[#9333ea] p-2 rounded-lg">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#115b4c] truncate w-32" title="company_logo.png">company_logo.png</h4>
                    <span className="text-[10px] text-gray-500">2.4 MB</span>
                  </div>
                </div>
              </div> */}
          {/* </div>

          </div> */}

          {/* Final Acknowledgements */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-[#115b4c] mb-6">{t.acknowledgements.title}</h2>
            <div className="flex flex-col gap-4">
              <label className="flex items-start gap-4 cursor-pointer">
                <div className="relative flex items-center justify-center w-5 h-5 mt-0.5 rounded border border-[#376b52] bg-transparent leading-none">
                  <input type="checkbox" className="opacity-0 absolute w-full h-full cursor-pointer peer" />
                  <div className="hidden peer-checked:block text-[#167b66]">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-0.5">{t.acknowledgements.accuracyTitle}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{t.acknowledgements.accuracyDescription}</p>
                </div>
              </label>

              <label className="flex items-start gap-4 cursor-pointer">
                <div className="relative flex items-center justify-center w-5 h-5 mt-0.5 rounded border border-[#376b52] bg-transparent leading-none">
                  <input type="checkbox" className="opacity-0 absolute w-full h-full cursor-pointer peer" />
                  <div className="hidden peer-checked:block text-[#167b66]">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-0.5">{t.acknowledgements.termsTitle}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {t.acknowledgements.termsPrefix} <span className="text-[#167b66] hover:underline">{t.acknowledgements.privacyPolicy}</span> {t.acknowledgements.and} <span className="text-[#167b66] hover:underline">{t.acknowledgements.termsOfUse}</span> {t.acknowledgements.termsSuffix}
                  </p>
                </div>
              </label>
            </div>
          </div>

          {/* Submission Action Box */}
          <div className="bg-[#0f5c4a] rounded-xl p-10 text-center flex flex-col items-center mb-16 shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-3">{t.submitBox.title}</h2>
            <p className="text-sm text-[#87c5b7] mb-8 max-w-lg leading-relaxed">
              {t.submitBox.descriptionBefore} <span className="font-bold text-white">{t.submitBox.reviewTime}</span>. {t.submitBox.descriptionAfter}
            </p>
            <div className="flex items-center justify-center gap-4 mb-8">
              {/* <Link href={`/${currentLocale}/register/startup/success`} className="px-8 py-3.5 bg-white text-[#0f5c4a] font-bold rounded-lg shadow-sm hover:bg-gray-50 transition flex justify-center items-center w-full sm:w-auto min-w-[200px]">
                {t.submitBox.submit}
              </Link> */}
              <SubmitStartupProfileButton
                currentLocale={currentLocale}
                submitText={t.submitBox.submit}
              />
              <button className="px-8 py-3.5 bg-transparent border border-[#2b7866] text-white hover:bg-[#115b4c] font-bold rounded-lg transition w-full sm:w-auto">
                {t.submitBox.cancel}
              </button>
            </div>

            <div className="flex gap-6 items-center justify-center text-[#87c5b7] text-[10px] uppercase font-bold tracking-widest">
              <div className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                {t.security.encryptedConnection}
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                {t.security.secureForm}
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                {t.security.dataInEthiopia}
              </div>
            </div>
          </div>

          {/* Footer Sub-badges */}
          <div className="flex flex-col items-center pt-8 border-t border-gray-100">
            <div className="flex items-center gap-8 mb-6 text-gray-400 text-xs font-bold uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"></path></svg>
                {t.footerBadges.secureGateway}
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                {t.footerBadges.dataHosted}
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>
                {t.footerBadges.mintApproved}
              </div>
            </div>
            <p className="text-[10px] text-gray-400 text-center max-w-xl leading-relaxed">
              {t.footerBadges.note}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}