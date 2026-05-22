"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import Sidebar from "@/components/startup/Sidebar";
import UserDropdown from "@/components/startup/UserDropdown";
import { request } from "@/lib/api";

const emptyState = {
  profile: null,
  dashboard: null,
  projects: [],
  projectSummary: {},
  investments: [],
  mentorships: [],
  recommendations: { investors: [], mentors: [] },
  unreadCount: 0,
  notifications: [],
};

function money(value) {
  const amount = Number(value || 0);
  if (!Number.isFinite(amount)) return "$0";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

function countByStatus(rows = [], status) {
  return rows.find((row) => String(row.status || "").toLowerCase() === status)?.count || 0;
}

function isApproved(profile) {
  let storedUser = {};
  if (typeof window !== "undefined") {
    try {
      storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    } catch {
      storedUser = {};
    }
  }

  const value =
    profile?.verification_status ??
    profile?.approval_status ??
    profile?.is_approved ??
    storedUser?.verification_status ??
    storedUser?.approval_status ??
    storedUser?.is_approved;

  if (typeof value === "boolean") return value;
  return ["approved", "verified", "active", "true"].includes(String(value || "").toLowerCase());
}

function initials(name = "") {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("") || "SC";
}

async function optionalRequest(endpoint, fallback) {
  try {
    return await request(endpoint, { silent: true, silentStatuses: [401, 403, 404] });
  } catch {
    return fallback;
  }
}

export default function StartupDashboardClient({ currentLocale, t }) {
  const [state, setState] = useState(emptyState);
  const [approved, setApproved] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadDashboard = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const profile = await request("/api/startups/profile");
      const canUseApprovedArea = isApproved(profile);
      setApproved(canUseApprovedArea);

      const [
        dashboard,
        projectsPayload,
        investmentsPayload,
        mentorshipPayload,
        recommendations,
        unreadPayload,
        notificationsPayload,
      ] = canUseApprovedArea
        ? await Promise.all([
            optionalRequest("/api/startups/dashboard", null),
            optionalRequest("/api/projects-workflow/my-projects", { projects: [], summary: {} }),
            optionalRequest("/api/investment-workflow/received", { received_investments: [] }),
            optionalRequest("/api/mentorship-workflow/received", { mentorships: [] }),
            optionalRequest("/api/startups/recommendations", { investors: [], mentors: [] }),
            optionalRequest("/api/notifications/unread-count", { count: 0 }),
            optionalRequest("/api/notifications", []),
          ])
        : [null, { projects: [], summary: {} }, { received_investments: [] }, { mentorships: [] }, { investors: [], mentors: [] }, { count: 0 }, []];

      setState({
        profile,
        dashboard,
        projects: projectsPayload?.projects || [],
        projectSummary: projectsPayload?.summary || {},
        investments: investmentsPayload?.received_investments || [],
        mentorships: mentorshipPayload?.mentorships || [],
        recommendations: {
          investors: recommendations?.investors || [],
          mentors: recommendations?.mentors || [],
        },
        unreadCount: unreadPayload?.count || unreadPayload?.unread_count || 0,
        notifications: Array.isArray(notificationsPayload)
          ? notificationsPayload
          : notificationsPayload?.notifications || [],
      });
    } catch (err) {
      setError(err.message || "Unable to load startup dashboard.");
      setState(emptyState);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadDashboard();
  }, [loadDashboard]);

  const profileName = state.profile?.startup_name || t.profile?.company || "Startup";
  const fundingGoal = Number(state.projectSummary?.total_funding_raised || 0);
  const dashboardRaised = state.dashboard?.projects?.reduce((sum, item) => sum + Number(item.amount_raised || 0), 0) || 0;
  const documents = state.profile?.documents || [];
  const activeProjects = state.projectSummary?.active_projects || countByStatus(state.dashboard?.projects, "active");
  const pendingInvestments = countByStatus(state.dashboard?.investments, "pending") || state.investments.length;
  const activeMentorships = countByStatus(state.dashboard?.mentorship, "accepted") || state.mentorships.length;
  const completedPayments = countByStatus(state.dashboard?.payments, "completed");
  const topProject = state.projects[0];
  const firstMentorship = state.mentorships[0];

  const activities = useMemo(() => {
    const rows = [];
    if (topProject) rows.push(`Project: ${topProject.project_title || "Untitled project"} is ${topProject.status || "active"}`);
    if (documents[0]) rows.push(`Document uploaded: ${documents[0].original_name || documents[0].file_name || documents[0].document_type}`);
    if (state.investments[0]) rows.push(`Investment offer from ${state.investments[0].organization_name || state.investments[0].investor_email}`);
    if (state.notifications[0]) rows.push(state.notifications[0].title || state.notifications[0].message || "New notification received");
    return rows.slice(0, 4);
  }, [documents, state.investments, state.notifications, topProject]);

  return (
    <div className="min-h-screen bg-[#f6f8f9] font-sans text-gray-900 flex">
      <Sidebar />

      <main className="flex-grow flex flex-col overflow-y-auto">
        <header className="flex justify-between items-center px-8 py-5 bg-transparent w-full">
          <div className="relative w-64 max-w-md hidden sm:block">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input type="text" placeholder={t.topbar.searchPlaceholder} className="w-full pl-10 pr-4 py-2 bg-white border border-gray-100 rounded-full text-xs outline-none focus:ring-2 focus:ring-[#0f3d32]/20 shadow-sm transition" />
          </div>

          <div className="flex items-center gap-6 ml-auto">
            <button type="button" className="text-gray-400 hover:text-gray-600 transition relative" aria-label="Notifications">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              {state.unreadCount ? <div className="absolute -top-1 -right-1 min-w-4 h-4 px-1 bg-red-500 rounded-full text-[9px] font-bold text-white">{state.unreadCount}</div> : null}
            </button>

            <UserDropdown company={profileName} role={state.profile?.founder_role || t.profile?.role} initials={initials(profileName)} currentLocale={currentLocale} />
          </div>
        </header>

        <div className="px-4 sm:px-8 pb-12 w-full max-w-[1200px] mx-auto">
          <div className="mb-8 mt-2 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-1 tracking-tight">
                {loading ? "Loading your dashboard..." : `Welcome back, ${profileName}.`}
              </h1>
              <p className="text-xs text-gray-500 font-medium">
                {approved ? "Your startup workspace is connected to live backend data." : "Your profile is visible, but dashboard actions are locked until admin approval."}
              </p>
            </div>
            <button type="button" onClick={loadDashboard} disabled={loading} className="rounded-xl border border-gray-200 bg-white px-4 py-2 text-xs font-bold text-[#0f3d32] shadow-sm disabled:opacity-60">
              {loading ? "Refreshing..." : "Refresh"}
            </button>
          </div>

          {error ? <Notice tone="error" title="Dashboard unavailable" text={error} /> : null}
          {!approved && !loading ? (
            <Notice
              tone="warning"
              title="Waiting for admin approval"
              text="You can keep editing your startup profile while the admin reviews your registration. Discovery, recommendations, dashboard summary, and protected actions will unlock after approval."
            />
          ) : null}

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-6">
            <StatCard label="Active projects" value={activeProjects} />
            <StatCard label="Pending investments" value={pendingInvestments} />
            <StatCard label="Mentorships" value={activeMentorships} />
            <StatCard label="Completed payments" value={completedPayments} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <section className="md:col-span-2 bg-white rounded-[20px] p-6 shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-gray-900 text-sm">Startup profile</h3>
                <span className={`text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${approved ? "bg-[#eaf4f1] text-[#0f3d32]" : "bg-amber-50 text-amber-700"}`}>
                  {approved ? "Approved" : "Pending review"}
                </span>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Info label="Industry" value={state.profile?.industry} />
                <Info label="Stage" value={state.profile?.business_stage || state.profile?.stage_type} />
                <Info label="Location" value={state.profile?.location || [state.profile?.region, state.profile?.city].filter(Boolean).join(", ")} />
                <Info label="Team size" value={state.profile?.team_size} />
                <Info label="Founder role" value={state.profile?.founder_role} />
                <Info label="Funding needed" value={state.profile?.funding_needed ? money(state.profile.funding_needed) : "-"} />
              </div>
            </section>

            <section className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 text-sm mb-4">Documents</h3>
              <div className="text-4xl font-black text-[#0f3d32]">{documents.length}</div>
              <p className="mt-1 text-xs font-medium text-gray-500">Uploaded profile documents</p>
              <div className="mt-5 space-y-2">
                {documents.slice(0, 3).map((doc) => (
                  <a key={doc.document_id || doc.file_url} href={doc.file_url || doc.file_path} target="_blank" rel="noreferrer" className="block rounded-xl bg-[#f2fbf7] px-3 py-2 text-xs font-bold text-[#0f3d32] hover:bg-[#e5f7ef]">
                    {doc.original_name || doc.file_name || doc.document_type}
                  </a>
                ))}
                {!documents.length ? <p className="text-xs font-medium text-gray-500">No uploaded documents returned yet.</p> : null}
              </div>
            </section>

            <section className="md:col-span-2 bg-white rounded-[20px] p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 text-sm mb-6">Funding summary</h3>
              <div className="flex justify-between items-end mb-2">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Raised / Target</span>
                <span className="text-xl font-bold text-gray-900 leading-none">{money(dashboardRaised)} / {money(state.profile?.funding_needed || fundingGoal)}</span>
              </div>
              <div className="w-full bg-[#f0f2f5] rounded-full h-2 overflow-hidden">
                <div className="bg-[#0f3d32] h-full" style={{ width: `${Math.min(100, Math.round((dashboardRaised / Number(state.profile?.funding_needed || fundingGoal || 1)) * 100))}%` }} />
              </div>
              <div className="mt-6 grid sm:grid-cols-3 gap-4">
                <Info label="Total projects" value={state.projectSummary?.total_projects || state.projects.length} />
                <Info label="Funding raised" value={money(state.projectSummary?.total_funding_raised || dashboardRaised)} />
                <Info label="Feedback rating" value={state.dashboard?.feedback?.avg_rating || "-"} />
              </div>
            </section>

            <section className="bg-[#0f3d32] rounded-[20px] p-6 shadow-md text-white">
              <h3 className="font-bold text-white text-sm mb-4">Next mentorship</h3>
              {firstMentorship ? (
                <>
                  <p className="text-lg font-black">{firstMentorship.mentor_first_name} {firstMentorship.mentor_last_name}</p>
                  <p className="mt-2 text-xs text-[#b7d4ca]">{firstMentorship.expertise || firstMentorship.message}</p>
                  <Link href={`/${currentLocale}/startup/mentorship`} className="mt-6 inline-flex rounded-lg bg-white px-4 py-2 text-xs font-bold text-[#0f3d32]">
                    View mentorship
                  </Link>
                </>
              ) : (
                <p className="text-xs text-[#b7d4ca]">No active mentorships yet.</p>
              )}
            </section>

            <ListSection title="Recent projects" empty="No projects yet." items={state.projects.slice(0, 3).map((project) => ({
              title: project.project_title,
              meta: `${project.status || "active"} - ${money(project.total_funded || project.amount_raised || 0)} funded`,
              href: `/${currentLocale}/startup/project`,
            }))} />

            <ListSection title="Investment offers" empty="No received investments yet." items={state.investments.slice(0, 3).map((item) => ({
              title: item.organization_name || `${item.investor_first_name || ""} ${item.investor_last_name || ""}`.trim() || item.investor_email,
              meta: `${money(item.funding_amount)} for ${item.equity_percentage || 0}% equity`,
              href: `/${currentLocale}/startup/discover`,
            }))} />

            <ListSection title="Recommended matches" empty={approved ? "No recommendations yet." : "Recommendations unlock after approval."} items={[
              ...state.recommendations.investors.slice(0, 2).map((item) => ({
                title: item.organization_name,
                meta: `${item.preferred_industry || "Investor"} - ${item.match_score || 0}% match`,
                href: `/${currentLocale}/startup/recommendations`,
              })),
              ...state.recommendations.mentors.slice(0, 1).map((item) => ({
                title: item.headline || item.expertise || "Mentor",
                meta: `${item.match_score || 0}% match`,
                href: `/${currentLocale}/startup/recommendations`,
              })),
            ]} />

            <section className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 text-sm mb-5">Recent activity</h3>
              <div className="space-y-3">
                {activities.map((activity) => (
                  <div key={activity} className="rounded-xl bg-[#f8fafc] px-3 py-2 text-xs font-medium text-gray-600">{activity}</div>
                ))}
                {!activities.length ? <p className="text-xs font-medium text-gray-500">No activity yet.</p> : null}
              </div>
            </section>
          </div>

          <div className="w-full mt-10 mb-6">
            <h3 className="text-[9px] font-bold text-gray-400 uppercase tracking-widest text-center mb-6">{t.quickActions.title}</h3>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <QuickAction href={`/${currentLocale}/startup/project/create`} label={t.quickActions.createProject} locked={!approved} />
              <QuickAction href={`/${currentLocale}/startup/project/documents`} label={t.quickActions.uploadDocs} locked={!approved} />
              <QuickAction href={`/${currentLocale}/startup/discover`} label={t.quickActions.findInvestors} locked={!approved} />
              <QuickAction href={`/${currentLocale}/startup/mentorship`} label={t.quickActions.requestMentor} locked={!approved} />
              <QuickAction href={`/${currentLocale}/startup/project`} label={t.quickActions.updateProgress} locked={!approved} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function Notice({ tone, title, text }) {
  const classes = tone === "error" ? "border-red-100 bg-red-50 text-red-700" : "border-amber-100 bg-amber-50 text-amber-800";
  return (
    <div className={`mb-6 rounded-2xl border p-4 ${classes}`}>
      <h2 className="text-sm font-black">{title}</h2>
      <p className="mt-1 text-xs font-medium">{text}</p>
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="bg-white rounded-[20px] p-5 shadow-sm border border-gray-100">
      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">{label}</p>
      <p className="text-3xl font-black text-gray-900">{value || 0}</p>
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div className="rounded-xl bg-[#f8fafc] p-3">
      <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400">{label}</p>
      <p className="mt-1 text-sm font-bold text-gray-800">{value || "-"}</p>
    </div>
  );
}

function ListSection({ title, items, empty }) {
  return (
    <section className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100">
      <h3 className="font-bold text-gray-900 text-sm mb-5">{title}</h3>
      <div className="space-y-3">
        {items.map((item) => (
          <Link key={`${item.title}-${item.meta}`} href={item.href} className="block rounded-xl border border-gray-100 p-3 hover:border-[#0f3d32]/20">
            <p className="text-sm font-bold text-gray-900">{item.title || "Untitled"}</p>
            <p className="mt-1 text-[11px] font-medium text-gray-500">{item.meta}</p>
          </Link>
        ))}
        {!items.length ? <p className="text-xs font-medium text-gray-500">{empty}</p> : null}
      </div>
    </section>
  );
}

function QuickAction({ href, label, locked }) {
  const content = (
    <div className={`flex flex-col items-center gap-2 group ${locked ? "opacity-45" : ""}`}>
      <div className="w-12 h-12 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-gray-600 group-hover:border-[#0f3d32] group-hover:text-[#0f3d32] group-hover:shadow-md transition">
        {locked ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v16m8-8H4" />
          </svg>
        )}
      </div>
      <span className="text-[9px] font-bold text-gray-600">{label}</span>
    </div>
  );

  if (locked) return <div title="Available after admin approval">{content}</div>;
  return <Link href={href}>{content}</Link>;
}
