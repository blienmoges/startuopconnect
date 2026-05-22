import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "../../../dictionaries/getDictionary";

export default async function Contact({ params }) {
  const { locale } = await params;
  const currentLocale = locale === "am" ? "am" : "en";
  const dict = await getDictionary(currentLocale);

  const common = dict.landing;
  const t = dict.contact;

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 sticky top-0 bg-white z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Logo */}
            <Link href={`/${currentLocale}`} className="flex items-center gap-2 group cursor-pointer">
              <img src="/logo.png" alt={common.logo.alt} className="w-10 h-10 object-contain" />
              <div className="flex flex-col -gap-1">
                <span className="font-bold text-xl text-gray-900 tracking-tight leading-tight">{common.logo.main}</span>
                <span className="text-sm text-primary tracking-wide leading-tight">{common.logo.country}</span>
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href={`/${currentLocale}`} className="text-gray-500 hover:text-primary transition-colors">{common.nav.home}</Link>
            <Link href={`/${currentLocale}/about`} className="text-gray-500 hover:text-primary transition-colors">{common.nav.about}</Link>
            {/* <Link href={`/${currentLocale}/startups`} className="text-gray-500 hover:text-primary transition-colors">{common.nav.browseStartups}</Link> */}
            <Link href={`/${currentLocale}/contact`} className="text-primary transition-colors border-b-2 border-primary pb-1">{common.nav.contact}</Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link href={`/${currentLocale}/login`} className="text-sm font-medium text-gray-700 hover:text-primary transition-colors px-4 py-2 border border-primary text-primary rounded-md">{common.nav.login}</Link>
            <Link href={`/${currentLocale}/register`} className="text-sm font-medium text-white bg-primary hover:bg-primary-dark transition-colors px-4 py-2 rounded-md shadow-sm">{t.header.signUp}</Link>
          </div>
        </div>
      </header>

      <main className="flex-grow bg-[#fcfcfc]">
        {/* Title Section */}
        <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-6">
            {t.titleSection.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t.titleSection.subtitle}
          </p>
        </section>

        {/* Contact Form & Info */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column: Form */}
            <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition">
              <h2 className="text-2xl font-bold mb-3 text-gray-900">{t.form.title}</h2>
              <p className="text-gray-500 text-sm mb-8">{t.form.subtitle}</p>

              <form className="flex flex-col gap-5 flex-grow">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.form.fullName}</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm bg-gray-50 bg-opacity-50" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.form.emailAddress}</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm bg-gray-50 bg-opacity-50" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.form.role}</label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm bg-gray-50 bg-opacity-50 appearance-none text-gray-600">
                    <option value="" disabled selected></option>
                    <option value="startup">{t.form.roles.startup}</option>
                    <option value="investor">{t.form.roles.investor}</option>
                    <option value="mentor">{t.form.roles.mentor}</option>
                    <option value="other">{t.form.roles.other}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.form.subject}</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm bg-gray-50 bg-opacity-50" />
                </div>
                <div className="flex-grow flex flex-col">
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.form.message}</label>
                  <textarea rows="4" className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm bg-gray-50 bg-opacity-50 flex-grow resize-none"></textarea>
                </div>
                <div className="pt-2">
                  <button type="button" className="px-6 py-3 bg-[#117663] text-white font-medium rounded-md hover:bg-primary-dark transition w-auto inline-block shadow-sm">{t.form.sendMessage}</button>
                </div>
              </form>
            </div>

            {/* Right Column: Information */}
            <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition">
              <h2 className="text-2xl font-bold mb-3 text-gray-900">{t.info.title}</h2>
              <p className="text-gray-500 text-sm mb-10">{t.info.subtitle}</p>

              <div className="flex flex-col gap-8 flex-grow">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-green-50 text-primary rounded-md flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{t.info.email}</h3>
                    <p className="text-primary text-sm font-medium cursor-pointer hover:underline">support@startupconnect.et</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-green-50 text-primary rounded-md flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{t.info.phone}</h3>
                    <p className="text-gray-600 text-sm">+251 900 000 000</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-green-50 text-primary rounded-md flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{t.info.officeLocation}</h3>
                    <p className="text-gray-600 text-sm">{t.info.location}</p>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-green-50 text-primary rounded-md flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{t.info.officeHours}</h3>
                    <p className="text-gray-600 text-sm">{t.info.hours}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t.faq.title}</h2>
          <div className="space-y-4">
            {/* FAQ 1 */}
            <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm flex items-center justify-between cursor-pointer hover:border-gray-200 transition">
              <h3 className="font-medium text-gray-900">{t.faq.question1}</h3>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm flex items-center justify-between cursor-pointer hover:border-gray-200 transition">
              <h3 className="font-medium text-gray-900">{t.faq.question2}</h3>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm flex items-center justify-between cursor-pointer hover:border-gray-200 transition">
              <h3 className="font-medium text-gray-900">{t.faq.question3}</h3>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
            </div>
          </div>
        </section>

        {/* Call to Action Banner */}
        <section className="py-20 bg-[#167b66] text-center px-4">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl font-bold text-white mb-8">{t.cta.title}</h2>
            <button className="px-8 py-3 bg-white text-primary font-bold rounded-md hover:bg-gray-100 transition shadow-lg">{t.cta.button}</button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#111827] text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-gray-800">
          <div className="col-span-1">
            <h3 className="text-white text-xl font-bold mb-4">{common.footer.brand}</h3>
            <p className="text-sm text-gray-400 mb-6">{common.footer.description}</p>
            <div className="flex gap-4">
              {/* Social icons */}
              <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 cursor-pointer transition">
                <span className="text-xs">FB</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 cursor-pointer transition">
                <span className="text-xs">TW</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 cursor-pointer transition">
                <span className="text-xs">IN</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{common.footer.quickLinks}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href={`/${currentLocale}`} className="hover:text-white transition">{common.nav.home}</Link></li>
              <li><Link href={`/${currentLocale}/about`} className="hover:text-white transition">{common.nav.about}</Link></li>
              <li><Link href={`/${currentLocale}/startups`} className="hover:text-white transition">{common.nav.browseStartups}</Link></li>
              <li><Link href={`/${currentLocale}/contact`} className="hover:text-white transition">{common.nav.contact}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{common.footer.forUsers}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition">{common.footer.joinStartup}</Link></li>
              <li><Link href="#" className="hover:text-white transition">{common.footer.joinInvestor}</Link></li>
              <li><Link href="#" className="hover:text-white transition">{common.footer.joinMentor}</Link></li>
              <li><Link href="#" className="hover:text-white transition">{common.footer.successStories}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{common.footer.resources}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition">{common.footer.blog}</Link></li>
              <li><Link href="#" className="hover:text-white transition">{common.footer.events}</Link></li>
              <li><Link href="#" className="hover:text-white transition">{common.footer.faq}</Link></li>
              <li><Link href="#" className="hover:text-white transition">{common.footer.privacyPolicy}</Link></li>
              <li><Link href="#" className="hover:text-white transition">{common.footer.terms}</Link></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} {common.footer.brand}. {common.footer.rights}</p>
        </div>
      </footer>
    </div>
  );
}