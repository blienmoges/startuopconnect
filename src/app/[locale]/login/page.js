"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { request } from "@/lib/api";

function dashboardPath(role, locale) {
  const normalizedRole = String(role || "").toLowerCase();

  if (normalizedRole === "admin") return "/admin/dashboard";
  if (normalizedRole === "investor") return "/investor/dashboard";
  if (normalizedRole === "mentor") return "/mentor/dashboard";

  return `/${locale}/startup/dashboard`;
}

function destinationAfterLogin(role, locale) {
  const normalizedRole = String(role || "").toLowerCase();

  if (normalizedRole === "admin") {
    return dashboardPath(role, locale);
  }

  return dashboardPath(role, locale);
}

function storeAuth(data) {
  const token = data?.token || data?.accessToken || data?.access_token;
  const refreshToken = data?.refreshToken || data?.refresh_token;
  const user = data?.user || data?.data?.user || {};
  const role = user?.role || data?.role || data?.data?.role || "";
  const userId = user?.user_id || user?.userId || user?.id || "";

  if (!token) {
    throw new Error("Login succeeded, but the backend did not return a token.");
  }

  localStorage.setItem("token", token);

  if (refreshToken) {
    localStorage.setItem("refreshToken", refreshToken);
  }

  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("role", role);
  localStorage.setItem("user_id", String(userId));

  return { role, user };
}

export default function Login() {
  const router = useRouter();
  const params = useParams();
  const currentLocale = params.locale === "am" ? "am" : "en";

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (!identifier.trim() || !password) {
      setError("Enter your email and password.");
      return;
    }

    setLoading(true);

    try {
      const responseData = await request("/api/auth/login", {
        method: "POST",
        body: {
          email: identifier.trim(),
          password,
        },
      });

      const { role } = storeAuth(responseData);

      if (!rememberMe) {
        localStorage.removeItem("refreshToken");
      }

      const destination = destinationAfterLogin(role, currentLocale);
      router.push(destination);
    } catch (err) {
      setError(err.message || "Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-gray-900 flex items-center justify-center py-12">
      <div className="w-full max-w-xl flex flex-col justify-center px-6 sm:px-12 relative z-10">
        <div className="w-full mx-auto">
          <div className="mb-8 pl-2">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">Login</h1>
            <p className="text-sm text-gray-500">
              Access your dashboard, manage your profile, and continue your work on StartupConnect.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-gray-50 p-8 mb-8">
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2">Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    value={identifier}
                    onChange={(event) => setIdentifier(event.target.value)}
                    placeholder="you@example.com"
                    autoComplete="email"
                    className="w-full pl-11 pr-4 py-3.5 bg-[#f8f9fa] border-none rounded-xl focus:outline-none focus:ring-2 focus:ring-[#115b4c] transition text-sm text-gray-800 placeholder-gray-400 font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2Zm10-10V7a4 4 0 0 0-8 0v4h8Z" />
                    </svg>
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Password"
                    autoComplete="current-password"
                    className="w-full pl-11 pr-12 py-3.5 bg-[#f8f9fa] border-none rounded-xl focus:outline-none focus:ring-2 focus:ring-[#115b4c] transition text-sm text-gray-800 placeholder-gray-400 font-medium"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((value) => !value)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7Z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between mt-1 mb-2">
                <label className="flex items-center gap-2.5 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(event) => setRememberMe(event.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-[#115b4c] focus:ring-[#115b4c]"
                  />
                  <span className="text-[13px] font-bold text-gray-600">Remember me</span>
                </label>
                <Link href={`/${currentLocale}/forgot-password`} className="text-[13px] font-bold text-[#115b4c] hover:underline">
                  Forgot password?
                </Link>
              </div>

              {error ? (
                <div className="rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                  {error}
                </div>
              ) : null}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-[#0f5c4a] hover:bg-[#0c4a3b] text-white font-bold rounded-xl shadow-[0_4px_14px_rgba(15,92,74,0.3)] transition text-[15px] flex items-center justify-center gap-2 mt-2 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Logging in..." : "Log In"}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0 4-4m-4 4h14m-5 4v1a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v1" />
                </svg>
              </button>

              <div className="text-center mt-6">
                <p className="text-[13px] text-gray-500">
                  Don&apos;t have an account?{" "}
                  <Link href={`/${currentLocale}/register`} className="font-bold text-[#115b4c] hover:underline">
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>

          <div className="flex flex-wrap gap-2 mb-6 pl-2">
            <div className="bg-[#e8f3f1] text-[#0f5c4a] px-3 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest flex items-center gap-1.5 border border-[#cce8e2]">
              Secure Login
            </div>
            <div className="bg-[#e8f3f1] text-[#0f5c4a] px-3 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest flex items-center gap-1.5 border border-[#cce8e2]">
              Role-Based Access
            </div>
            <div className="bg-[#e8f3f1] text-[#0f5c4a] px-3 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest flex items-center gap-1.5 border border-[#cce8e2]">
              Admin-Approved Platform
            </div>
          </div>

          <div className="bg-[#f0f3f5] rounded-xl p-4 flex items-start gap-3 mb-10 border border-gray-100">
            <div className="text-[#0f5c4a] mt-0.5">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed font-medium">
              Admin endpoints require an account with the Admin role. Startup, mentor, and investor accounts are redirected to their own dashboards.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[9px] font-bold text-gray-400 uppercase tracking-widest pl-2">
            <span>&copy; 2026 STARTUPCONNECT ETHIOPIA</span>
            <Link href="#" className="hover:text-gray-600 transition">Privacy Policy</Link>
            <Link href="#" className="hover:text-gray-600 transition">Terms of Service</Link>
            <Link href="#" className="hover:text-gray-600 transition">Security</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
