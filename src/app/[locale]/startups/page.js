import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "../../../dictionaries/getDictionary";

export default async function BrowseStartups({ params }) {
  const { locale } = await params;
  const currentLocale = locale === "am" ? "am" : "en";
  const dict = await getDictionary(currentLocale);

  const common = dict.landing;
  const t = dict.startups;

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-[#f8fafc]">
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
            <Link href={`/${currentLocale}/startups`} className="text-primary transition-colors border-b-2 border-primary pb-1">{common.nav.browseStartups}</Link>
            <Link href={`/${currentLocale}/contact`} className="text-gray-500 hover:text-primary transition-colors">{common.nav.contact}</Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link href={`/${currentLocale}/login`} className="text-sm font-medium text-gray-700 hover:text-primary transition-colors px-4 py-2 border border-primary text-primary rounded-md">{common.nav.login}</Link>
            <Link href={`/${currentLocale}/register`} className="text-sm font-medium text-white bg-primary hover:bg-primary-dark transition-colors px-4 py-2 rounded-md shadow-sm">{t.header.signUp}</Link>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Title Section */}
        <section className="pt-16 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
            {t.titleSection.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t.titleSection.subtitle}
          </p>
        </section>

        {/* Filters Section */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-10">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.filters.search}</label>
                <input
                  type="text"
                  placeholder={t.filters.searchPlaceholder}
                  className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.filters.industry}</label>
                <select className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm bg-white text-gray-600 appearance-none">
                  <option value="">{t.filters.allIndustries}</option>
                  <option value="agritech">{t.industries.agritech}</option>
                  <option value="fintech">{t.industries.fintech}</option>
                  <option value="edtech">{t.industries.edtech}</option>
                  <option value="healthtech">{t.industries.healthtech}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.filters.stage}</label>
                <select className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm bg-white text-gray-600 appearance-none">
                  <option value="">{t.filters.allStages}</option>
                  <option value="idea">{t.stages.idea}</option>
                  <option value="pre-seed">{t.stages.preSeed}</option>
                  <option value="seed">{t.stages.seed}</option>
                  <option value="early-growth">{t.stages.earlyGrowth}</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-2">
              <span className="text-sm font-medium text-gray-700">{t.filters.activeFilters}</span>
              <span className="text-sm text-gray-500 italic">{t.filters.none}</span>
            </div>
          </div>
        </section>

        {/* Startups Grid */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Startup Card 1 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition">
              <div className="h-48 bg-gray-200 w-full relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-200">{t.cards.card1.imageText}</div>
              </div>
              <div className="p-6 flex flex-col flex-grow items-center text-center">
                <h3 className="text-xl font-bold mb-2 self-start text-left w-full">{t.cards.card1.name}</h3>
                <p className="text-sm text-gray-600 mb-4 flex-grow self-start text-left w-full">{t.cards.card1.description}</p>
                <div className="flex gap-2 w-full mb-4">
                  <span className="px-2 py-1 bg-green-50 text-primary text-xs font-semibold rounded-md border border-green-100">{t.cards.card1.industry}</span>
                  <span className="px-2 py-1 bg-orange-50 text-orange-600 text-xs font-semibold rounded-md border border-orange-100">{t.cards.card1.stage}</span>
                </div>
                <div className="flex items-center w-full text-xs text-gray-500 mb-6">
                  <svg className="w-4 h-4 mr-1 pb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  {t.cards.card1.location}
                </div>
                <button className="px-6 py-2 border border-gray-200 text-primary font-medium rounded hover:bg-green-50 transition w-full max-w-[200px]">{t.viewDetails}</button>
              </div>
            </div>

            {/* Startup Card 2 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition">
              <div className="h-48 bg-gray-200 w-full relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-200">{t.cards.card2.imageText}</div>
              </div>
              <div className="p-6 flex flex-col flex-grow items-center text-center">
                <h3 className="text-xl font-bold mb-2 self-start text-left w-full">{t.cards.card2.name}</h3>
                <p className="text-sm text-gray-600 mb-4 flex-grow self-start text-left w-full">{t.cards.card2.description}</p>
                <div className="flex gap-2 w-full mb-4">
                  <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-md border border-blue-100">{t.cards.card2.industry}</span>
                  <span className="px-2 py-1 bg-orange-50 text-orange-600 text-xs font-semibold rounded-md border border-orange-100">{t.cards.card2.stage}</span>
                </div>
                <div className="flex items-center w-full text-xs text-gray-500 mb-6">
                  <svg className="w-4 h-4 mr-1 pb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  {t.cards.card2.location}
                </div>
                <button className="px-6 py-2 border border-gray-200 text-primary font-medium rounded hover:bg-green-50 transition w-full max-w-[200px]">{t.viewDetails}</button>
              </div>
            </div>

            {/* Startup Card 3 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition">
              <div className="h-48 bg-gray-200 w-full relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-200">{t.cards.card3.imageText}</div>
              </div>
              <div className="p-6 flex flex-col flex-grow items-center text-center">
                <h3 className="text-xl font-bold mb-2 self-start text-left w-full">{t.cards.card3.name}</h3>
                <p className="text-sm text-gray-600 mb-4 flex-grow self-start text-left w-full">{t.cards.card3.description}</p>
                <div className="flex gap-2 w-full mb-4">
                  <span className="px-2 py-1 bg-purple-50 text-purple-600 text-xs font-semibold rounded-md border border-purple-100">{t.cards.card3.industry}</span>
                  <span className="px-2 py-1 bg-yellow-50 text-yellow-600 text-xs font-semibold rounded-md border border-yellow-100">{t.cards.card3.stage}</span>
                </div>
                <div className="flex items-center w-full text-xs text-gray-500 mb-6">
                  <svg className="w-4 h-4 mr-1 pb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  {t.cards.card3.location}
                </div>
                <button className="px-6 py-2 border border-gray-200 text-primary font-medium rounded hover:bg-green-50 transition w-full max-w-[200px]">{t.viewDetails}</button>
              </div>
            </div>

            {/* Startup Card 4 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition">
              <div className="h-48 bg-gray-200 w-full relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-200">{t.cards.card4.imageText}</div>
              </div>
              <div className="p-6 flex flex-col flex-grow items-center text-center">
                <h3 className="text-xl font-bold mb-2 self-start text-left w-full">{t.cards.card4.name}</h3>
                <p className="text-sm text-gray-600 mb-4 flex-grow self-start text-left w-full">{t.cards.card4.description}</p>
                <div className="flex gap-2 w-full mb-4">
                  <span className="px-2 py-1 bg-red-50 text-red-600 text-xs font-semibold rounded-md border border-red-100">{t.cards.card4.industry}</span>
                  <span className="px-2 py-1 bg-yellow-50 text-yellow-600 text-xs font-semibold rounded-md border border-yellow-100">{t.cards.card4.stage}</span>
                </div>
                <div className="flex items-center w-full text-xs text-gray-500 mb-6">
                  <svg className="w-4 h-4 mr-1 pb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  {t.cards.card4.location}
                </div>
                <button className="px-6 py-2 border border-gray-200 text-primary font-medium rounded hover:bg-green-50 transition w-full max-w-[200px]">{t.viewDetails}</button>
              </div>
            </div>

            {/* Startup Card 5 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition">
              <div className="h-48 bg-gray-200 w-full relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-200">{t.cards.card5.imageText}</div>
              </div>
              <div className="p-6 flex flex-col flex-grow items-center text-center">
                <h3 className="text-xl font-bold mb-2 self-start text-left w-full">{t.cards.card5.name}</h3>
                <p className="text-sm text-gray-600 mb-4 flex-grow self-start text-left w-full">{t.cards.card5.description}</p>
                <div className="flex gap-2 w-full mb-4">
                  <span className="px-2 py-1 bg-teal-50 text-teal-600 text-xs font-semibold rounded-md border border-teal-100">{t.cards.card5.industry}</span>
                  <span className="px-2 py-1 bg-green-50 text-primary text-xs font-semibold rounded-md border border-green-100">{t.cards.card5.stage}</span>
                </div>
                <div className="flex items-center w-full text-xs text-gray-500 mb-6">
                  <svg className="w-4 h-4 mr-1 pb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  {t.cards.card5.location}
                </div>
                <button className="px-6 py-2 border border-gray-200 text-primary font-medium rounded hover:bg-green-50 transition w-full max-w-[200px]">{t.viewDetails}</button>
              </div>
            </div>

            {/* Startup Card 6 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition">
              <div className="h-48 bg-gray-200 w-full relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-200">{t.cards.card6.imageText}</div>
              </div>
              <div className="p-6 flex flex-col flex-grow items-center text-center">
                <h3 className="text-xl font-bold mb-2 self-start text-left w-full">{t.cards.card6.name}</h3>
                <p className="text-sm text-gray-600 mb-4 flex-grow self-start text-left w-full">{t.cards.card6.description}</p>
                <div className="flex gap-2 w-full mb-4">
                  <span className="px-2 py-1 bg-green-50 text-primary text-xs font-semibold rounded-md border border-green-100">{t.cards.card6.industry}</span>
                  <span className="px-2 py-1 bg-yellow-50 text-yellow-600 text-xs font-semibold rounded-md border border-yellow-100">{t.cards.card6.stage}</span>
                </div>
                <div className="flex items-center w-full text-xs text-gray-500 mb-6">
                  <svg className="w-4 h-4 mr-1 pb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  {t.cards.card6.location}
                </div>
                <button className="px-6 py-2 border border-gray-200 text-primary font-medium rounded hover:bg-green-50 transition w-full max-w-[200px]">{t.viewDetails}</button>
              </div>
            </div>

          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center items-center gap-2">
            <button className="w-10 h-10 flex items-center justify-center bg-primary text-white rounded-md font-medium">1</button>
            <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-md font-medium transition">2</button>
            <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-md font-medium transition">3</button>
            <span className="px-2 text-gray-400">...</span>
            <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-md font-medium transition">5</button>
          </div>
        </section>

        {/* Call to Action Banner */}
        <section className="py-20 bg-[#167b66] text-center px-4">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl font-bold text-white mb-4">{t.cta.title}</h2>
            <p className="text-green-50 mb-8 text-lg opacity-90 max-w-xl">{t.cta.subtitle}</p>
            <button className="px-8 py-3 bg-white text-primary font-bold rounded-md hover:bg-gray-100 transition shadow-lg w-auto">{t.cta.button}</button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
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