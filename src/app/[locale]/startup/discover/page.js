import { getDictionary } from "@/dictionaries/getDictionary";
import StartupDiscoverClient from "./StartupDiscoverClient";

export default async function StartupDiscover({ params }) {
  const { locale } = await params;
  const currentLocale = locale === "am" ? "am" : "en";
  const dict = await getDictionary(currentLocale);

  return <StartupDiscoverClient currentLocale={currentLocale} t={dict.startupDiscover} />;
}
