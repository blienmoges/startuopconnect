"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import Sidebar from "@/components/startup/Sidebar";
import UserDropdown from "@/components/startup/UserDropdown";
import { request } from "@/lib/api";

function money(value) {
  const amount = Number(value || 0);
  if (!Number.isFinite(amount)) return "$0";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

function initials(name = "") {
  return String(name || "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("") || "SC";
}

function parseArray(value) {
  if (Array.isArray(value)) return value;
  if (typeof value === "string" && value.trim().startsWith("[")) {
    try {
      return JSON.parse(value);
    } catch {
      return [value];
    }
  }
  return value ? [value] : [];
}

function investorName(investor) {
  return investor.organization_name || investor.firm_name || investor.name || `${investor.first_name || investor.investor_first_name || ""} ${investor.last_name || investor.investor_last_name || ""}`.trim() || "Investor";
}

function mentorName(mentor) {
  return mentor.full_name || mentor.name || `${mentor.first_name || mentor.mentor_first_name || ""} ${mentor.last_name || mentor.mentor_last_name || ""}`.trim() || mentor.headline || "Mentor";
}

function investorTags(investor) {
  return [
    investor.preferred_industry,
    investor.investment_stage,
    investor.investor_type,
    ...parseArray(investor.industries),
  ].filter(Boolean).slice(0, 4);
}

function mentorTags(mentor) {
  return [
    mentor.expertise,
    mentor.primary_industry,
    mentor.secondary_industry,
    ...parseArray(mentor.skills),
    ...parseArray(mentor.industries),
  ].filter(Boolean).slice(0, 4);
}

function normalizeRecommendations(payload) {
  const source = payload?.data || payload?.results || payload || {};
  return {
    method: source.method || source.matching_method || "rule_based_profile_match",
    investors: source.investors || [],
    mentors: source.mentors || [],
  };
}

export default function StartupRecommendationsClient({ currentLocale, t }) {
  const [profile, setProfile] = useState(null);
  const [recommendations, setRecommendations] = useState({ method: "", investors: [], mentors: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [approvalLocked, setApprovalLocked] = useState(false);

  const loadRecommendations = useCallback(async () => {
    setLoading(true);
    setError("");
    setApprovalLocked(false);

    try {
      const [profilePayload, recommendationPayload] = await Promise.all([
        request("/api/startups/profile", { silent: true }).catch(() => null),
        request("/api/startups/recommendations"),
      ]);

      setProfile(profilePayload);
      setRecommendations(normalizeRecommendations(recommendationPayload));
    } catch (err) {
      const isApprovalError = err.status === 403 || /pending|approval|verification/i.test(err.message || "");
      setApprovalLocked(isApprovalError);
      setError(
        isApprovalError
          ? "Your startup account must be admin-approved before recommendations are available."
          : err.message || "Unable to load recommendations."
      );
      setRecommendations({ method: "", investors: [], mentors: [] });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadRecommendations();
  }, [loadRecommendations]);

  const metrics = useMemo(() => [
    { label: t.metrics.startupIndustry, value: profile?.industry || t.metrics.agritech },
    { label: t.metrics.fundingNeed, value: profile?.funding_needed ? money(profile.funding_needed) : "-" },
    { label: t.metrics.projectStage, value: profile?.business_stage || profile?.stage_type || t.metrics.earlyStage },
  ], [profile, t]);

  const totalMatches = recommendations.investors.length + recommendations.mentors.length;
  const companyName = profile?.startup_name || t.profile?.company || "Company";

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-gray-900 flex">
      <Sidebar />

      <main className="flex-grow flex flex-col overflow-y-auto relative bg-[#f8fafc]">
        <header className="flex justify-between items-center px-8 py-5 bg-white border-b border-gray-100 w-full z-10 sticky top-0">
          <div className="relative w-full max-w-[400px] hidden sm:block">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input type="text" placeholder={t.topbar.searchPlaceholder} className="w-full pl-11 pr-4 py-2.5 bg-[#f8fafc] border-none rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#0f3d32]/20 transition" />
          </div>

          <div className="flex items-center gap-6 ml-auto">
            <button type="button" onClick={loadRecommendations} disabled={loading} className="text-xs font-bold text-[#0f3d32] hover:text-[#0a2921] disabled:opacity-60">
              {loading ? "Loading..." : "Refresh"}
            </button>
            <UserDropdown company={companyName} role={t.profile?.role} initials={initials(companyName)} currentLocale={currentLocale} />
          </div>
        </header>

        <div className="p-8 max-w-[1200px] mx-auto w-full">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#0f3d32] mb-2 tracking-tight">{t.header.title}</h1>
            <p className="text-sm text-gray-400 font-medium">{t.header.subtitle}</p>
          </div>

          {error ? (
            <div className={`mb-6 rounded-2xl border p-4 text-sm font-semibold ${approvalLocked ? "border-amber-100 bg-amber-50 text-amber-800" : "border-red-100 bg-red-50 text-red-700"}`}>
              <div className="font-black">{approvalLocked ? "Approval required" : "Recommendations unavailable"}</div>
              <p className="mt-1">{error}</p>
            </div>
          ) : null}

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
            {metrics.map((metric) => (
              <div key={metric.label} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-2">{metric.label}</p>
                <p className="text-lg font-bold text-gray-900">{metric.value}</p>
              </div>
            ))}
            <div className="bg-[#0f3d32] rounded-2xl p-6 shadow-lg flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-bl-full"></div>
              <p className="text-[9px] font-bold text-white/60 uppercase tracking-widest mb-1 relative z-10">{t.metrics.recommendationStatus}</p>
              <div className="flex items-center gap-2 relative z-10">
                <svg className="w-5 h-5 text-[#64ffda]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <p className="text-lg font-bold text-white tracking-tight">{loading ? "Checking..." : `${totalMatches} Matches`}</p>
              </div>
              <p className="relative z-10 mt-2 text-[10px] font-bold text-white/50 uppercase tracking-widest">{recommendations.method}</p>
            </div>
          </div>

          <RecommendationSection
            title={t.sections.recommendedInvestors}
            icon="investor"
            empty={approvalLocked ? "Investor recommendations unlock after approval." : "No investor recommendations returned yet."}
            viewAllHref={`/${currentLocale}/startup/discover`}
          >
            {recommendations.investors.map((investor) => (
              <InvestorCard key={investor.investor_id || investor.user_id || investorName(investor)} investor={investor} currentLocale={currentLocale} t={t} />
            ))}
          </RecommendationSection>

          <RecommendationSection
            title={t.sections.recommendedMentors}
            icon="mentor"
            empty={approvalLocked ? "Mentor recommendations unlock after approval." : "No mentor recommendations returned yet."}
            viewAllHref={`/${currentLocale}/startup/discover`}
          >
            {recommendations.mentors.map((mentor) => (
              <MentorCard key={mentor.mentor_id || mentor.user_id || mentorName(mentor)} mentor={mentor} currentLocale={currentLocale} t={t} />
            ))}
          </RecommendationSection>
        </div>
      </main>
    </div>
  );
}

function RecommendationSection({ title, icon, empty, viewAllHref, children }) {
  const hasChildren = Array.isArray(children) ? children.length > 0 : Boolean(children);

  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <div className={`${icon === "investor" ? "bg-[#eaf4f1] text-[#0f3d32]" : "bg-[#fefce8] text-[#854d0e]"} w-10 h-10 rounded-xl flex items-center justify-center`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {icon === "investor" ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m4 0h1m-5 10h1m4 0h1" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              )}
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-900 tracking-tight">{title}</h2>
        </div>
        <Link href={viewAllHref} className="text-xs font-bold text-[#0f3d32] hover:underline uppercase tracking-widest">View All</Link>
      </div>

      {hasChildren ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">{children}</div>
      ) : (
        <div className="rounded-3xl border border-dashed border-gray-200 bg-white p-8 text-center text-sm font-semibold text-gray-500">{empty}</div>
      )}
    </div>
  );
}

function InvestorCard({ investor, currentLocale, t }) {
  const name = investorName(investor);
  const tags = investorTags(investor);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:border-[#0f3d32]/20 transition flex flex-col">
      <CardHeader name={name} subtitle={investor.country || investor.email || "Investor"} match={investor.match_score} dark />
      <Reason text={investor.match_reason || `Matches your ${investor.preferred_industry || "industry"} and ${investor.investment_stage || "stage"} profile.`} label={t.common.aiReasoning} />
      <TagList title={t.common.investmentFocus} tags={tags} />
      <div className="mb-6 grid grid-cols-2 gap-3 text-xs">
        <Metric label="Budget" value={investor.investment_budget ? money(investor.investment_budget) : "-"} />
        <Metric label="Portfolio" value={investor.portfolio_size || "-"} />
      </div>
      <div className="flex items-center gap-2 mt-auto">
        <Link href={`/${currentLocale}/startup/discover/apply`} className="flex-grow bg-[#0f3d32] text-white text-[10px] font-bold py-2.5 rounded-lg text-center hover:bg-[#0a2921] transition">{t.actions.applyForInvestment}</Link>
        <Link href={`/${currentLocale}/startup/discover/profile`} className="flex-grow border border-gray-200 text-gray-600 text-[10px] font-bold py-2.5 rounded-lg text-center hover:bg-gray-50 transition">{t.actions.viewProfile}</Link>
      </div>
    </div>
  );
}

function MentorCard({ mentor, currentLocale, t }) {
  const name = mentorName(mentor);
  const tags = mentorTags(mentor);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:border-[#0f3d32]/20 transition flex flex-col">
      <CardHeader name={name} subtitle={mentor.headline || `${mentor.years_experience || 0}+ years experience`} match={mentor.match_score} />
      <Reason text={mentor.match_reason || mentor.bio || `Recommended for ${mentor.expertise || "startup mentorship"}.`} label={t.common.aiReasoning} />
      <TagList title={t.common.expertise} tags={tags} />
      <div className="mb-6 grid grid-cols-2 gap-3 text-xs">
        <Metric label="Experience" value={mentor.years_experience ? `${mentor.years_experience} years` : "-"} />
        <Metric label="Rate" value={mentor.hourly_rate ? `$${mentor.hourly_rate}/hr` : "-"} />
      </div>
      <div className="flex items-center gap-2 mt-auto">
        <Link href={`/${currentLocale}/startup/mentorship`} className="flex-grow bg-[#0f3d32] text-white text-[10px] font-bold py-2.5 rounded-lg text-center hover:bg-[#0a2921] transition">{t.actions.requestMentorship}</Link>
        <Link href={`/${currentLocale}/startup/discover/profile`} className="flex-grow border border-gray-200 text-gray-600 text-[10px] font-bold py-2.5 rounded-lg text-center hover:bg-gray-50 transition">{t.actions.viewProfile}</Link>
      </div>
    </div>
  );
}

function CardHeader({ name, subtitle, match, dark = false }) {
  return (
    <div className="flex items-start justify-between mb-6">
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 ${dark ? "bg-[#0f3d32] text-white" : "bg-orange-100 text-[#0f3d32]"} rounded-xl shrink-0 flex items-center justify-center text-xs font-black`}>
          {initials(name)}
        </div>
        <div>
          <h3 className="text-sm font-bold text-gray-900 leading-tight">{name}</h3>
          <p className="text-[10px] text-gray-400 font-medium">{subtitle}</p>
        </div>
      </div>
      <div className="bg-[#eaf4f1] text-[#0f3d32] text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-lg shrink-0">
        {match || 0}% Match
      </div>
    </div>
  );
}

function Reason({ label, text }) {
  return (
    <div className="bg-[#f8fafc] rounded-xl p-4 mb-6 flex-grow">
      <p className="text-[9px] font-bold text-[#0f3d32] uppercase tracking-widest mb-1.5">{label}</p>
      <p className="text-[11px] text-gray-500 font-medium leading-relaxed italic">&quot;{text}&quot;</p>
    </div>
  );
}

function TagList({ title, tags }) {
  return (
    <div className="mb-6">
      <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-2">{title}</p>
      <div className="flex flex-wrap gap-2">
        {tags.length ? tags.map((tag) => (
          <span key={tag} className="text-[9px] font-bold text-gray-500 border border-gray-100 px-2 py-1 rounded-lg bg-white">
            {tag}
          </span>
        )) : <span className="text-[10px] font-bold text-gray-400">No tags</span>}
      </div>
    </div>
  );
}

function Metric({ label, value }) {
  return (
    <div className="rounded-xl bg-[#f8fafc] p-3">
      <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400">{label}</p>
      <p className="mt-1 font-black text-gray-800">{value}</p>
    </div>
  );
}
