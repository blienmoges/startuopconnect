import { getDictionary } from "@/dictionaries/getDictionary";
import StartupRecommendationsClient from "./StartupRecommendationsClient";

export default async function AIRecommendations({ params }) {
  const { locale } = await params;
  const currentLocale = locale === "am" ? "am" : "en";
  const dict = await getDictionary(currentLocale);

  return <StartupRecommendationsClient currentLocale={currentLocale} t={dict.startupRecommendations} />;
}
