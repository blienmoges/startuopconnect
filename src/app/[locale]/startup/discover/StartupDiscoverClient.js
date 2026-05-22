"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import Sidebar from "@/components/startup/Sidebar";
import UserDropdown from "@/components/startup/UserDropdown";
import { request } from "@/lib/api";

const defaultFilters = {
  q: "",
  industry: "",
  country: "",
  stage: "",
  type: "all",
};

function normalizeList(payload, key) {
  const candidates = [
    payload?.[key],
    payload?.data?.[key],
    payload?.results?.[key],
    payload?.items?.[key],
    payload?.data?.results?.[key],
    payload?.data?.items?.[key],
  ];

  for (const candidate of candidates) {
    if (Array.isArray(candidate)) return candidate;
    if (Array.isArray(candidate?.rows)) return candidate.rows;
    if (Array.isArray(candidate?.data)) return candidate.data;
    if (Array.isArray(candidate?.items)) return candidate.items;
  }

  if (Array.isArray(payload) && key === "items") return payload;

  return [];
}

function getDisplayName(item, type) {
  if (type === "mentor") {
    return item.full_name || item.name || `${item.first_name || item.mentor_first_name || ""} ${item.last_name || item.mentor_last_name || ""}`.trim() || item.headline || "Mentor";
  }

  return item.organization_name || item.firm_name || item.name || `${item.first_name || item.investor_first_name || ""} ${item.last_name || item.investor_last_name || ""}`.trim() || "Investor";
}

function getInitials(name) {
  return String(name || "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("") || "SC";
}

function formatRange(item) {
  if (item.investment_range) return item.investment_range;
  if (item.funding_range_min || item.funding_range_max) return `$${item.funding_range_min || 0} - $${item.funding_range_max || 0}`;
  if (item.investment_budget) return item.investment_budget;
  if (item.hourly_rate) return `$${item.hourly_rate}/hr`;
  return "-";
}

function tagsFor(item, type) {
  const values = [
    item.preferred_industry,
    item.preferred_sector,
    item.investment_stage,
    item.investor_type,
    item.expertise,
    item.headline,
    item.primary_industry,
    item.secondary_industry,
    item.country,
  ];
  const arrayValues = [item.industries, item.skills, item.mentorship_categories].flatMap((value) => {
    if (Array.isArray(value)) return value;
    if (typeof value === "string" && value.startsWith("[")) {
      try {
        return JSON.parse(value);
      } catch {
        return [value];
      }
    }
    return value ? [value] : [];
  });

  return [...values, ...arrayValues, type === "mentor" ? "Mentor" : "Investor"].filter(Boolean).slice(0, 4);
}

function buildQuery(filters) {
  const params = new URLSearchParams();
  params.set("type", filters.type || "all");
  if (filters.q.trim()) params.set("q", filters.q.trim());
  if (filters.industry) params.set("industry", filters.industry);
  if (filters.stage) params.set("stage", filters.stage);
  if (filters.country) params.set("country", filters.country);
  params.set("limit", "50");
  params.set("offset", "0");
  return params.toString();
}

function buildTypedQuery(filters, type) {
  return buildQuery({ ...filters, type });
}

function mergeById(items, idKeys) {
  const seen = new Set();

  return items.filter((item) => {
    const id = idKeys.map((key) => item?.[key]).find(Boolean) || getDisplayName(item, "");
    if (seen.has(id)) return false;
    seen.add(id);
    return true;
  });
}

export default function StartupDiscoverClient({ currentLocale, t }) {
  const [filters, setFilters] = useState(defaultFilters);
  const [activeTab, setActiveTab] = useState("investors");
  const [investors, setInvestors] = useState([]);
  const [mentors, setMentors] = useState([]);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [approvalLocked, setApprovalLocked] = useState(false);

  const loadDiscover = useCallback(async () => {
    setLoading(true);
    setError("");
    setApprovalLocked(false);

    try {
      const requestedType = filters.type || "all";
      const shouldLoadInvestors = requestedType === "all" || requestedType === "investors";
      const shouldLoadMentors = requestedType === "all" || requestedType === "mentors";

      const [profilePayload, allPayload, investorPayload, mentorPayload] = await Promise.all([
        request("/api/startups/profile", { silent: true }).catch(() => null),
        request(`/api/startups/discover?${buildTypedQuery(filters, "all")}`),
        shouldLoadInvestors
          ? request(`/api/startups/discover?${buildTypedQuery(filters, "investors")}`)
          : Promise.resolve({ investors: [] }),
        shouldLoadMentors
          ? request(`/api/startups/discover?${buildTypedQuery(filters, "mentors")}`)
          : Promise.resolve({ mentors: [] }),
      ]);

      setProfile(profilePayload);
      setInvestors(mergeById([
        ...normalizeList(allPayload, "investors"),
        ...normalizeList(investorPayload, "investors"),
      ], ["investor_id", "user_id", "email"]));
      setMentors(mergeById([
        ...normalizeList(allPayload, "mentors"),
        ...normalizeList(mentorPayload, "mentors"),
      ], ["mentor_id", "user_id", "email"]));

      if (requestedType === "investors") setActiveTab("investors");
      if (requestedType === "mentors") setActiveTab("mentors");
    } catch (err) {
      const isApprovalError = err.status === 403 || /pending|approval|verification/i.test(err.message || "");
      setApprovalLocked(isApprovalError);
      setError(
        isApprovalError
          ? "Your startup account must be admin-approved before you can discover investors and mentors."
          : err.message || "Unable to load discover results."
      );
      setInvestors([]);
      setMentors([]);
    } finally {
      setLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    const timeout = setTimeout(loadDiscover, 250);
    return () => clearTimeout(timeout);
  }, [loadDiscover]);

  const visibleItems = activeTab === "investors" ? investors : mentors;
  const industryOptions = useMemo(() => ["fintech", "agritech", "healthtech", "edtech", "energy", "logistics"], []);
  const stageOptions = useMemo(() => ["Pre-seed", "Seed", "Series A", "Series B", "MVP", "Idea"], []);

  const updateFilter = (key, value) => {
    setFilters((current) => ({ ...current, [key]: value }));
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-gray-900 flex">
      <Sidebar />

      <main className="flex-grow flex flex-col overflow-y-auto relative">
        <header className="flex justify-between items-center px-8 py-5 bg-white border-b border-gray-100 w-full z-10 sticky top-0">
          <div className="relative w-full max-w-[400px] hidden sm:block">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              value={filters.q}
              onChange={(event) => updateFilter("q", event.target.value)}
              placeholder={t.topbar.searchPlaceholder}
              className="w-full pl-11 pr-4 py-2.5 bg-[#f8fafc] border-none rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#0f3d32]/20 transition"
            />
          </div>

          <div className="flex items-center gap-6 ml-auto">
            <button type="button" onClick={loadDiscover} className="text-xs font-bold text-[#0f3d32] hover:text-[#0a2921]">
              {loading ? "Loading..." : "Refresh"}
            </button>
            <UserDropdown company={profile?.startup_name || t.profile?.company || "Company"} role={t.profile?.role} initials={getInitials(profile?.startup_name)} currentLocale={currentLocale} />
          </div>
        </header>

        <div className="px-4 sm:px-10 py-10 w-full max-w-[1200px] mx-auto pb-24">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#0f3d32] mb-3 tracking-tight">{t.header.title}</h1>
            <p className="text-sm text-gray-500 font-medium">{t.header.subtitle}</p>
          </div>

          {error ? (
            <div className={`mb-6 rounded-2xl border p-4 text-sm font-semibold ${approvalLocked ? "border-amber-100 bg-amber-50 text-amber-800" : "border-red-100 bg-red-50 text-red-700"}`}>
              <div className="font-black">{approvalLocked ? "Approval required" : "Discover unavailable"}</div>
              <p className="mt-1">{error}</p>
            </div>
          ) : null}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <FilterSelect label={t.filters.industry} value={filters.industry} onChange={(value) => updateFilter("industry", value)} emptyLabel={t.filters.allIndustries} options={industryOptions} />
            <FilterSelect label={t.filters.location} value={filters.country} onChange={(value) => updateFilter("country", value)} emptyLabel={t.filters.allLocations} options={["Ethiopia", "Remote", "Addis Ababa", "Kenya", "United States"]} />
            <FilterSelect label={t.filters.rangeExpertise} value={filters.stage} onChange={(value) => updateFilter("stage", value)} emptyLabel={t.filters.anyType} options={stageOptions} />
            <FilterSelect label="Type" value={filters.type} onChange={(value) => updateFilter("type", value || "all")} emptyLabel="All" options={[["investors", "Investors"], ["mentors", "Mentors"]]} />
          </div>

          <div className="flex items-center gap-8 mb-8 border-b border-gray-200">
            <TabButton active={activeTab === "investors"} onClick={() => setActiveTab("investors")} label={t.tabs.investors} count={investors.length} />
            <TabButton active={activeTab === "mentors"} onClick={() => setActiveTab("mentors")} label={t.tabs.mentors} count={mentors.length} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            {visibleItems.map((item) => (
              <DiscoverCard
                key={`${activeTab}-${item.investor_id || item.mentor_id || item.user_id || getDisplayName(item, activeTab === "mentors" ? "mentor" : "investor")}`}
                item={item}
                type={activeTab === "mentors" ? "mentor" : "investor"}
                currentLocale={currentLocale}
                t={t}
              />
            ))}
          </div>

          {!loading && !visibleItems.length && !approvalLocked ? (
            <div className="rounded-3xl border border-dashed border-gray-200 bg-white p-10 text-center">
              <h2 className="text-lg font-black text-gray-900">No matches found</h2>
              <p className="mt-2 text-sm font-medium text-gray-500">Try clearing filters or searching a broader industry.</p>
              <button type="button" onClick={() => setFilters(defaultFilters)} className="mt-5 rounded-xl bg-[#0f3d32] px-5 py-2.5 text-xs font-bold text-white">
                Clear filters
              </button>
            </div>
          ) : null}

          {loading ? (
            <div className="flex justify-center mt-2 text-sm font-bold text-gray-500">
              Loading discover results...
            </div>
          ) : null}
        </div>
      </main>
    </div>
  );
}

function FilterSelect({ label, value, onChange, emptyLabel, options }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm flex flex-col justify-center">
      <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">{label}</span>
      <div className="relative">
        <select
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="w-full bg-[#f8fafc] text-sm text-gray-700 font-medium px-4 py-2.5 rounded-lg border-none appearance-none focus:outline-none focus:ring-2 focus:ring-[#0f3d32]/20"
        >
          <option value="">{emptyLabel}</option>
          {options.map((option) => {
            const optionValue = Array.isArray(option) ? option[0] : option;
            const optionLabel = Array.isArray(option) ? option[1] : option;
            return <option key={optionValue} value={optionValue}>{optionLabel}</option>;
          })}
        </select>
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TabButton({ active, onClick, label, count }) {
  return (
    <button type="button" onClick={onClick} className={`pb-3 border-b-2 flex items-center gap-2 transition ${active ? "border-[#0f3d32]" : "border-transparent text-gray-400 hover:text-gray-600"}`}>
      <span className={`text-lg font-bold ${active ? "text-[#0f3d32]" : ""}`}>{label}</span>
      <span className="bg-[#ccfbf1] text-[#0f766e] text-[9px] font-bold px-2 py-0.5 rounded-full">{count}</span>
    </button>
  );
}

function DiscoverCard({ item, type, currentLocale, t }) {
  const name = getDisplayName(item, type);
  const tags = tagsFor(item, type);
  const location = item.country || item.location || item.city || item.location_preference || "Remote";
  const status = item.status || item.account_status || item.verification_status || "active";
  const profileHref = `/${currentLocale}/startup/discover/profile`;
  const applyHref = type === "investor" ? `/${currentLocale}/startup/discover/apply` : `/${currentLocale}/startup/mentorship`;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-14 h-14 bg-[#0f3d32] rounded-xl flex items-center justify-center shrink-0 border border-gray-100 text-white text-sm font-black">
          {getInitials(name)}
        </div>
        <div className="flex-grow">
          <div className="flex justify-between items-start gap-3">
            <h3 className="text-lg font-bold text-gray-900">{name}</h3>
            <span className="bg-[#f0fdf4] text-[#16a34a] text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded">{status}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-500 mt-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-xs">{location}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag) => (
          <span key={tag} className="bg-[#f1f5f9] text-gray-600 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded">{tag}</span>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6 border-b border-gray-100 pb-6">
        <div>
          <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">{type === "mentor" ? "Rate / Experience" : t.stats.investmentRange}</p>
          <p className="text-[#059669] font-bold text-sm">{formatRange(item)}</p>
        </div>
        <div>
          <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">{type === "mentor" ? "Expertise" : t.stats.focus}</p>
          <p className="text-gray-900 font-bold text-sm">{item.expertise || item.preferred_industry || item.investment_stage || "-"}</p>
        </div>
      </div>

      <p className="mb-6 line-clamp-3 text-xs font-medium leading-relaxed text-gray-500">
        {item.bio || item.investment_focus || item.portfolio_summary || item.headline || "Profile details are available after opening the profile."}
      </p>

      <div className="flex items-center gap-3 mt-auto">
        <Link href={profileHref} className="flex-1 py-2.5 bg-white border border-[#0f3d32] text-[#0f3d32] text-xs font-bold rounded-lg hover:bg-gray-50 transition text-center flex items-center justify-center">{t.actions.viewProfile}</Link>
        <Link href={applyHref} className="flex-1 py-2.5 bg-[#0f3d32] text-white text-xs font-bold rounded-lg hover:bg-[#0a2921] transition shadow-sm text-center flex items-center justify-center">
          {type === "mentor" ? "Request" : t.actions.apply}
        </Link>
      </div>
    </div>
  );
}
