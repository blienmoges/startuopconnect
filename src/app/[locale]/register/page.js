"use client";

import Link from "next/link";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import en from "../../../dictionaries/en.json";
import am from "../../../dictionaries/am.json";

export default function RegisterAccountInfo() {
  const router = useRouter();
  const params = useParams();

  const currentLocale = params.locale === "am" ? "am" : "en";
  const dict = currentLocale === "am" ? am : en;
  const t = dict.register;
  const common = dict.landing;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   router.push(`/${currentLocale}/register/role`);
  // };
  const handleSubmit = (e) => {
    e.preventDefault();

    sessionStorage.setItem(
      "pendingRegistration",
      JSON.stringify({
        full_name: formData.fullName,
        email: formData.email,
        password: formData.password,
        rememberMe: formData.rememberMe,
      })
    );

    router.push(`/${currentLocale}/register/role`);
  };

  return (
    <div className="min-h-screen bg-[#e6eee9] font-sans flex flex-col relative overflow-hidden">

      {/* Header with Logo */}
      <header className="absolute top-0 w-full px-6 py-6 flex justify-between items-center z-10">
        <Link href={`/${currentLocale}`}>
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt={t.header.logoAlt} className="w-8 h-8 object-contain" />
            <span className="font-bold text-[#2a5a43] text-lg tracking-tight hidden sm:block">{common.logo.main}</span>
          </div>
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center pt-16 pb-12 px-6">
        <div className="w-full max-w-[400px] flex flex-col items-center">

          <div className="text-center mb-10 w-full">
            <h1 className="text-[42px] font-medium text-[#214a36] mb-2 tracking-wide font-serif">
              Register
            </h1>
            <p className="text-[15px] text-[#5b7a68] font-medium">Create new account</p>
          </div>

          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">

            <div className="w-full">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="Full Name"
                className="w-full px-6 py-4 bg-[#9dbab0] bg-opacity-70 border-none rounded-full focus:outline-none focus:ring-2 focus:ring-[#376b52] transition text-[15px] text-[#1c3a2a] placeholder-[#4a6b5a] font-medium"
              />
            </div>

            <div className="w-full">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="username@mail.com"
                className="w-full px-6 py-4 bg-[#9dbab0] bg-opacity-70 border-none rounded-full focus:outline-none focus:ring-2 focus:ring-[#376b52] transition text-[15px] text-[#1c3a2a] placeholder-[#4a6b5a] font-medium"
              />
            </div>

            <div className="w-full">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Password"
                className="w-full px-6 py-4 bg-[#9dbab0] bg-opacity-70 border-none rounded-full focus:outline-none focus:ring-2 focus:ring-[#376b52] transition text-[15px] text-[#1c3a2a] placeholder-[#4a6b5a] font-medium"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 mt-2 bg-[#427a5b] hover:bg-[#346248] text-white font-medium rounded-full shadow-md transition text-[16px] tracking-wide"
            >
              Register
            </button>

            <div className="flex justify-between items-center px-2 mt-1">
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className="relative flex items-center justify-center w-4 h-4 rounded-full border border-[#427a5b] bg-transparent group-hover:bg-[#427a5b]/10 transition">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="absolute opacity-0 cursor-pointer"
                  />
                  {formData.rememberMe && (
                    <svg className="w-3 h-3 text-[#427a5b]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  )}
                </div>
                <span className="text-[13px] text-[#5b7a68] font-medium">Remember me</span>
              </label>

              <Link href="#" className="text-[13px] text-[#214a36] hover:underline font-medium">
                Forgot password?
              </Link>
            </div>

            <div className="relative flex items-center py-6 mt-4">
              <div className="flex-grow border-t border-[#8ca99a]"></div>
              <span className="flex-shrink-0 px-4 text-[#1c3a2a] text-[14px] font-medium">Or continue with</span>
              <div className="flex-grow border-t border-[#8ca99a]"></div>
            </div>

            <div className="flex justify-center mt-2">
              <button type="button" className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition transform hover:-translate-y-1">
                <svg className="w-7 h-7" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
              </button>
            </div>

          </form>

          <div className="mt-12 text-center">
            <p className="text-[14px] text-[#5b7a68] font-medium">
              Already have an account? <Link href={`/${currentLocale}/login`} className="text-[#214a36] font-bold hover:underline">Log in</Link>
            </p>
          </div>

        </div>
      </main>

    </div>
  );
}