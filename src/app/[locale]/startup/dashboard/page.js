import { getDictionary } from "@/dictionaries/getDictionary";
import StartupDashboardClient from "./StartupDashboardClient";

export default async function StartupDashboard({ params }) {
  const { locale } = await params;
  const currentLocale = locale === "am" ? "am" : "en";
  const dict = await getDictionary(currentLocale);

  return <StartupDashboardClient currentLocale={currentLocale} t={dict.startupDashboard} />;
}
