"use client";

import Link from "next/link";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import en from "../../../../dictionaries/en.json";
import am from "../../../../dictionaries/am.json";
import { request } from "@/lib/api";
export default function ChooseRole() {
  const router = useRouter();
  const params = useParams();

  const currentLocale = params.locale === "am" ? "am" : "en";
  const dict = currentLocale === "am" ? am : en;

  const t = dict.registerRole;
  const common = dict.landing;

  const [selectedRole, setSelectedRole] = useState(null);

  const roles = [
    {
      id: "startup",
      title: t.roles.startup.title,
      description: t.roles.startup.description,
      icon: (
        <svg className="w-5 h-5 text-[#0a4d3c]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5L21 3m-6.5 14.5A8.96 8.96 0 0112 21a8.96 8.96 0 01-5.5-1.897L2 21l1.897-4.5A8.96 8.96 0 012 12c0-2.071.704-3.98 1.897-5.5L21 3l-4.5 1.897c1.52.88 2.5 2.534 2.5 4.403 0 2.071-.704 3.98-1.897 5.5z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 15l-3-3"></path>
        </svg>
      )
    },
    {
      id: "investor",
      title: t.roles.investor.title,
      description: t.roles.investor.description,
      icon: (
        <svg className="w-5 h-5 text-[#0a4d3c]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      )
    },
    {
      id: "mentor",
      title: t.roles.mentor.title,
      description: t.roles.mentor.description,
      icon: (
        <svg className="w-5 h-5 text-[#0a4d3c]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v6"></path>
        </svg>
      )
    }
  ];

  // const handleContinue = () => {
  //   if (selectedRole) {
  //     router.push(`/${currentLocale}/register/${selectedRole}`);
  //   }
  // };
  const handleContinue = async () => {
    if (!selectedRole) return;

    const savedData = sessionStorage.getItem("pendingRegistration");

    if (!savedData) {
      alert("Registration information is missing. Please start again.");
      router.push(`/${currentLocale}/register`);
      return;
    }

    const registrationData = JSON.parse(savedData);
    const [firstName = "", ...lastNameParts] = String(registrationData.full_name || "").trim().split(/\s+/);
    const lastName = lastNameParts.join(" ");

    const roleMap = {
      startup: "Startup",
      investor: "Investor",
      mentor: "Mentor",
    };

    try {
      const responseData = await request("/api/auth/register", {
        method: "POST",
        body: {
          full_name: registrationData.full_name,
          first_name: firstName,
          last_name: lastName,
          email: registrationData.email,
          password: registrationData.password,
          role: roleMap[selectedRole],
        },
      });

      const data = responseData;

      localStorage.setItem("token", data.token);
      localStorage.setItem("refreshToken", data.refreshToken);
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("role", data.user?.role || roleMap[selectedRole]);
      localStorage.setItem("user_id", String(data.user?.user_id || ""));

      sessionStorage.removeItem("pendingRegistration");

      router.push(`/${currentLocale}/register/${selectedRole}`);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="min-h-screen bg-[#e6eee9] font-sans flex flex-col relative">

      {/* Header */}
      <header className="absolute top-0 w-full px-6 py-6 flex justify-between items-center z-10">
        <Link href={`/${currentLocale}`}>
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt={t.header.logoAlt} className="w-8 h-8 object-contain" />
            <span className="font-bold text-[#0a4d3c] text-lg tracking-tight">{common.footer.brand}</span>
          </div>
        </Link>
        <div className="flex items-center gap-4">
          <button className="text-[12px] font-bold text-gray-500 hover:text-gray-800 transition hidden sm:block">
            {t.header.saveDraft}
          </button>
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#e8fbf0] text-[#0a4d3c] rounded-md border border-[#c2eadd]">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
            <span className="text-[10px] font-bold uppercase tracking-widest">{t.header.secureEncryption}</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center pt-24 pb-12 px-4">
        <div className="w-full max-w-[640px]">

          <div className="text-center mb-10">
            <h1 className="text-[28px] font-bold text-gray-900 mb-2 tracking-tight">{t.title}</h1>
            <p className="text-[14px] text-gray-500">{t.subtitle}</p>
          </div>

          <div className="flex flex-col gap-4 mb-8">
            {roles.map((role) => (
              <div
                key={role.id}
                onClick={() => setSelectedRole(role.id)}
                className={`flex items-center p-6 rounded-xl border-2 cursor-pointer transition ${selectedRole === role.id
                  ? "border-[#376b52] bg-[#8ba89a] shadow-sm"
                  : "border-transparent bg-[#9dbab0] bg-opacity-70 hover:bg-opacity-100"
                  }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 mr-5 transition ${selectedRole === role.id ? "bg-white" : "bg-white/50"
                  }`}>
                  {role.icon}
                </div>

                <div className="flex-grow">
                  <h3 className={`text-[16px] font-bold ${selectedRole === role.id ? "text-[#1c3a2a]" : "text-[#1c3a2a]"}`}>{role.title}</h3>
                  <p className={`text-[13px] mt-0.5 ${selectedRole === role.id ? "text-[#376b52]" : "text-[#4a6b5a]"}`}>{role.description}</p>
                </div>

                <div className="shrink-0 ml-4">
                  {selectedRole === role.id ? (
                    <div className="w-5 h-5 rounded-full bg-[#376b52] flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                  ) : (
                    <div className="w-5 h-5 rounded-full border-2 border-[#5b7a68]"></div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center">
            <button
              onClick={handleContinue}
              disabled={!selectedRole}
              className={`w-[240px] py-3.5 font-bold rounded-lg transition text-[14px] shadow-sm ${selectedRole
                ? "bg-[#0a4d3c] hover:bg-[#083b2e] text-white shadow-[#0a4d3c]/20 cursor-pointer"
                : "bg-[#e5e7eb] text-gray-400 cursor-not-allowed"
                }`}
            >
              {t.continue}
            </button>

            <p className="text-center text-[13px] text-gray-500 mt-6">
              {t.loginText} <Link href={`/${currentLocale}/login`} className="font-bold text-[#0a4d3c] hover:underline">{t.loginLink}</Link>
            </p>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 px-6 flex justify-center mt-auto">
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-[11px] font-medium text-gray-400 uppercase tracking-wider">
          <span className="font-bold text-[#0a4d3c] normal-case tracking-normal">{common.footer.brand}</span>
          <Link href="#" className="hover:text-gray-800 transition">{common.footer.privacyPolicy}</Link>
          <Link href="#" className="hover:text-gray-800 transition">{common.footer.terms}</Link>
          <Link href="#" className="hover:text-gray-800 transition">{t.footer.contactSupport}</Link>
          <span>&copy; {new Date().getFullYear()} {common.footer.brand}. {common.footer.rights}</span>
        </div>
      </footer>

    </div>
  );
}
