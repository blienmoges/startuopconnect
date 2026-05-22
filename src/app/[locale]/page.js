import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "../../dictionaries/getDictionary";

export default async function Home({ params }) {
  const { locale } = await params;
  const currentLocale = locale === "am" ? "am" : "en";
  const dict = await getDictionary(currentLocale);
  const t = dict.landing;

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white">
      {/* Hero Section with integrated Header */}
      <section className="relative flex flex-col overflow-hidden">
        {/* Shared Background Image for Header + Hero */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/landing-bg.png"
            alt={t.hero.backgroundAlt}
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>

        {/* Header — sits on top of the shared background */}
        <header className="sticky top-0 z-50 relative">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {/* Logo */}
              <div className="flex items-center gap-2 group cursor-pointer">
                <img src="/logo.png" alt={t.logo.alt} className="w-10 h-10 object-contain" />
                <div className="flex flex-col -gap-1">
                  <span className="font-bold text-xl text-white tracking-tight leading-tight drop-shadow">{t.logo.main}</span>
                  <span className="text-sm text-green-300 tracking-wide leading-tight">{t.logo.country}</span>
                </div>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
              <Link href={`/${currentLocale}`} className="text-white hover:text-green-300 transition-colors">{t.nav.home}</Link>
              <Link href={`/${currentLocale}/about`} className="text-gray-200 hover:text-green-300 transition-colors">{t.nav.about}</Link>
              {/* <Link href={`/${currentLocale}/startups`} className="text-gray-200 hover:text-green-300 transition-colors">{t.nav.browseStartups}</Link> */}
              <Link href={`/${currentLocale}/contact`} className="text-gray-200 hover:text-green-300 transition-colors">{t.nav.contact}</Link>
            </nav>

            <div className="flex items-center gap-4">
              <Link href={`/${currentLocale}/login`} className="text-sm font-medium text-white hover:text-green-300 transition-colors px-4 py-2 border border-white/50 hover:border-green-300 rounded-md">{t.nav.login}</Link>
              <Link href={`/${currentLocale}/register`} className="text-sm font-medium text-white bg-primary hover:bg-[#115b4c] transition-colors px-4 py-2 rounded-md shadow-sm">{t.nav.register}</Link>
            </div>
          </div>
        </header>

        {/* Hero Content */}
        <div className="relative z-10 pt-20 pb-28 px-4 sm:px-6 lg:px-8 min-h-[560px] flex items-center justify-center">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight drop-shadow-sm">
              {t.hero.titleLine1} <br className="hidden md:block" /> {t.hero.titleLine2}
            </h1>
            <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              {t.hero.subtitleLine1} <br className="hidden md:block" /> {t.hero.subtitleLine2}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href={`/${currentLocale}/register`} className="w-full sm:w-auto px-10 py-3.5 flex items-center justify-center bg-primary text-white font-bold rounded-md hover:bg-[#115b4c] transition shadow-md text-lg">{t.hero.joinUs}</Link>
            </div>
          </div>
        </div>
      </section>

      <main className="flex-grow">
        {/* How It Works Section */}
        <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-16">{t.how.title}</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
                <div className="w-16 h-16 bg-green-50 text-primary rounded-full flex items-center justify-center text-xl font-bold mb-6">1</div>
                <h3 className="text-xl font-semibold mb-3">{t.how.step1.title}</h3>
                <p className="text-gray-600">{t.how.step1.description}</p>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
                <div className="w-16 h-16 bg-green-50 text-primary rounded-full flex items-center justify-center text-xl font-bold mb-6">2</div>
                <h3 className="text-xl font-semibold mb-3">{t.how.step2.title}</h3>
                <p className="text-gray-600">{t.how.step2.description}</p>
              </div>

              {/* Step 3 */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
                <div className="w-16 h-16 bg-green-50 text-primary rounded-full flex items-center justify-center text-xl font-bold mb-6">3</div>
                <h3 className="text-xl font-semibold mb-3">{t.how.step3.title}</h3>
                <p className="text-gray-600">{t.how.step3.description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits By Role Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">{t.benefits.title}</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {/* Startups */}
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-semibold text-primary mb-2">{t.benefits.startupsTitle}</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-700"><CheckIcon /> {t.benefits.startup1}</li>
                <li className="flex items-start gap-3 text-gray-700"><CheckIcon /> {t.benefits.startup2}</li>
                <li className="flex items-start gap-3 text-gray-700"><CheckIcon /> {t.benefits.startup3}</li>
                <li className="flex items-start gap-3 text-gray-700"><CheckIcon /> {t.benefits.startup4}</li>
              </ul>
            </div>
            {/* Investors */}
            <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-l border-gray-200 pt-8 md:pt-0 md:pl-10">
              <h3 className="text-2xl font-semibold text-primary mb-2">{t.benefits.investorsTitle}</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-700"><CheckIcon /> {t.benefits.investor1}</li>
                <li className="flex items-start gap-3 text-gray-700"><CheckIcon /> {t.benefits.investor2}</li>
                <li className="flex items-start gap-3 text-gray-700"><CheckIcon /> {t.benefits.investor3}</li>
                <li className="flex items-start gap-3 text-gray-700"><CheckIcon /> {t.benefits.investor4}</li>
              </ul>
            </div>
            {/* Mentors */}
            <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-l border-gray-200 pt-8 md:pt-0 md:pl-10">
              <h3 className="text-2xl font-semibold text-primary mb-2">{t.benefits.mentorsTitle}</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-700"><CheckIcon /> {t.benefits.mentor1}</li>
                <li className="flex items-start gap-3 text-gray-700"><CheckIcon /> {t.benefits.mentor2}</li>
                <li className="flex items-start gap-3 text-gray-700"><CheckIcon /> {t.benefits.mentor3}</li>
                <li className="flex items-start gap-3 text-gray-700"><CheckIcon /> {t.benefits.mentor4}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Featured Startups */}
        <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">{t.featured.title}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition">
                <div className="h-48 bg-gray-200 w-full relative">
                  <Image src="/agritech-startup.png" alt={t.featured.card1.alt} fill className="object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex gap-2 mb-3">
                    <span className="px-2 py-1 bg-green-50 text-primary text-xs font-medium rounded">{t.featured.card1.tag1}</span>
                    <span className="px-2 py-1 bg-green-50 text-primary text-xs font-medium rounded">{t.featured.card1.tag2}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{t.featured.card1.name}</h3>
                  <p className="text-sm text-gray-600 mb-6 flex-grow">{t.featured.card1.description}</p>
                  <button className="self-start px-4 py-2 border border-primary text-primary text-sm font-medium rounded hover:bg-green-50 transition">{t.featured.viewDetails}</button>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition">
                <div className="h-48 bg-gray-200 w-full relative">
                  <Image src="/edtech-startup.png" alt={t.featured.card2.alt} fill className="object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex gap-2 mb-3">
                    <span className="px-2 py-1 bg-green-50 text-primary text-xs font-medium rounded">{t.featured.card2.tag1}</span>
                    <span className="px-2 py-1 bg-green-50 text-primary text-xs font-medium rounded">{t.featured.card2.tag2}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{t.featured.card2.name}</h3>
                  <p className="text-sm text-gray-600 mb-6 flex-grow">{t.featured.card2.description}</p>
                  <button className="self-start px-4 py-2 border border-primary text-primary text-sm font-medium rounded hover:bg-green-50 transition">{t.featured.viewDetails}</button>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition">
                <div className="h-48 bg-gray-200 w-full relative">
                  <Image src="/fintech-startup.png" alt={t.featured.card3.alt} fill className="object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex gap-2 mb-3">
                    <span className="px-2 py-1 bg-green-50 text-primary text-xs font-medium rounded">{t.featured.card3.tag1}</span>
                    <span className="px-2 py-1 bg-green-50 text-primary text-xs font-medium rounded">{t.featured.card3.tag2}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{t.featured.card3.name}</h3>
                  <p className="text-sm text-gray-600 mb-6 flex-grow">{t.featured.card3.description}</p>
                  <button className="self-start px-4 py-2 border border-primary text-primary text-sm font-medium rounded hover:bg-green-50 transition">{t.featured.viewDetails}</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Banner */}
        <section className="py-20 bg-[#167b66] text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">{t.cta.title}</h2>
            <p className="text-green-50 mb-10 text-lg opacity-90">{t.cta.subtitle}</p>
            <button className="px-8 py-3 bg-white text-primary font-bold rounded-md hover:bg-gray-100 transition shadow-lg">{t.cta.button}</button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-gray-700">
          <div className="col-span-1">
            <h3 className="text-white text-xl font-bold mb-4">{t.footer.brand}</h3>
            <p className="text-sm text-gray-400 mb-6">{t.footer.description}</p>
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
            <h4 className="text-white font-semibold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href={`/${currentLocale}`} className="hover:text-white transition">{t.nav.home}</Link></li>
              <li><Link href={`/${currentLocale}/about`} className="hover:text-white transition">{t.nav.about}</Link></li>
              <li><Link href={`/${currentLocale}/startups`} className="hover:text-white transition">{t.nav.browseStartups}</Link></li>
              <li><Link href={`/${currentLocale}/contact`} className="hover:text-white transition">{t.nav.contact}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.forUsers}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href={`/${currentLocale}/register/startup`} className="hover:text-white transition">{t.footer.joinStartup}</Link></li>
              <li><Link href={`/${currentLocale}/register/investor`} className="hover:text-white transition">{t.footer.joinInvestor}</Link></li>
              <li><Link href={`/${currentLocale}/register/mentor`} className="hover:text-white transition">{t.footer.joinMentor}</Link></li>
              <li><Link href="#" className="hover:text-white transition">{t.footer.successStories}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.resources}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition">{t.footer.blog}</Link></li>
              <li><Link href="#" className="hover:text-white transition">{t.footer.events}</Link></li>
              <li><Link href="#" className="hover:text-white transition">{t.footer.faq}</Link></li>
              <li><Link href="#" className="hover:text-white transition">{t.footer.privacyPolicy}</Link></li>
              <li><Link href="#" className="hover:text-white transition">{t.footer.terms}</Link></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} {t.footer.brand}. {t.footer.rights}</p>
        </div>
      </footer>
    </div>
  );
}

// Simple check icon component
function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}