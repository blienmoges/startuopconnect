"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { request } from "@/lib/api";

function formatMoney(value) {
  const amount = Number(value || 0);
  return new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

function formatDate(value) {
  if (!value) return "-";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "-";
  return date.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function normalizeStartups(payload) {
  if (Array.isArray(payload)) return payload;
  return payload?.startups || payload?.data?.startups || payload?.data || [];
}

export default function AdminDashboard() {
  const [summary, setSummary] = useState(null);
  const [startups, setStartups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadDashboard = useCallback(async () => {
    setLoading(true);
    setError("");

    const [summaryResult, startupsResult] = await Promise.allSettled([
      request("/api/admin/dashboard/summary"),
      request("/api/admin/startups"),
    ]);

    if (summaryResult.status === "fulfilled") {
      setSummary(summaryResult.value);
    } else {
      setSummary(null);
    }

    if (startupsResult.status === "fulfilled") {
      setStartups(normalizeStartups(startupsResult.value));
    } else {
      setStartups([]);
    }

    const failures = [summaryResult, startupsResult]
      .filter((result) => result.status === "rejected")
      .map((result) => result.reason?.message || "Request failed");

    if (failures.length) {
      setError(failures.join(" | "));
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    loadDashboard();
  }, [loadDashboard]);

  const totals = summary?.totals || {};
  const pendingStartups = useMemo(
    () => startups.filter((startup) => startup.is_approved === false).length,
    [startups],
  );
  const approvedStartups = useMemo(
    () => startups.filter((startup) => startup.is_approved === true).length,
    [startups],
  );
  const recentStartups = startups.slice(0, 5);

  const statCards = [
    { label: "Users", value: totals.users_excluding_admin || 0, tone: "blue" },
    { label: "Startups", value: totals.startups || startups.length || 0, tone: "orange" },
    { label: "Investors", value: totals.investors || 0, tone: "rose" },
    { label: "Mentors", value: totals.mentors || 0, tone: "purple" },
  ];

  return (
    <div className="max-w-7xl mx-auto pb-12 animate-fade-in">
      <div className="flex flex-col gap-5 mb-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Admin Dashboard</h1>
          <p className="mt-2 text-sm text-slate-500">
            Live platform summary from your backend admin endpoints.
          </p>
        </div>
        <button
          type="button"
          onClick={loadDashboard}
          disabled={loading}
          className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-[#006054]/30 hover:text-[#006054] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Refreshing..." : "Refresh"}
        </button>
      </div>

      {error ? (
        <div className="mb-6 rounded-xl border border-amber-100 bg-amber-50 px-4 py-3 text-sm font-medium text-amber-800">
          {error}
        </div>
      ) : null}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-8">
        {statCards.map((card) => (
          <div key={card.label} className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
            <div className={`mb-4 h-10 w-10 rounded-xl ${toneClass(card.tone)}`} />
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{card.label}</p>
            <p className="mt-1 text-3xl font-black text-slate-800">{card.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <section className="lg:col-span-2 rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-lg font-bold text-slate-800">Startup Approval Queue</h2>
              <p className="mt-1 text-sm text-slate-500">
                {pendingStartups} pending, {approvedStartups} approved
              </p>
            </div>
            <Link href="/admin/startups" className="rounded-lg bg-[#006054] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#004d43]">
              Review
            </Link>
          </div>

          <div className="divide-y divide-slate-100">
            {recentStartups.length ? (
              recentStartups.map((startup) => (
                <div key={startup.startup_id} className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-bold text-slate-800">{startup.startup_name || `Startup #${startup.startup_id}`}</p>
                    <p className="mt-1 text-xs text-slate-500">
                      {startup.owner_email || "-"} · {startup.industry || "-"} · {startup.city || startup.region || startup.location || "-"}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`rounded-full border px-2.5 py-1 text-xs font-bold ${startup.is_approved ? "border-emerald-100 bg-emerald-50 text-emerald-700" : "border-amber-100 bg-amber-50 text-amber-700"}`}>
                      {startup.is_approved ? "Approved" : "Pending"}
                    </span>
                    <span className="text-xs text-slate-400">{formatDate(startup.created_at)}</span>
                  </div>
                </div>
              ))
            ) : (
              <p className="py-8 text-center text-sm text-slate-500">No startup profiles returned yet.</p>
            )}
          </div>
        </section>

        <aside className="space-y-6">
          <div className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-800">Verification Queue</h2>
            <p className="mt-4 text-4xl font-black text-amber-500">{summary?.pending_verification_queue || 0}</p>
            <p className="mt-2 text-sm text-slate-500">Users waiting for review across roles.</p>
          </div>

          <div className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-800">Users By Role</h2>
            <div className="mt-4 space-y-3">
              {(summary?.users_by_role || []).map((item) => (
                <div key={item.role} className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-slate-600">{item.role}</span>
                  <span className="font-bold text-slate-900">{item.c}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl bg-[#006054] p-6 text-white shadow-sm">
            <h2 className="text-lg font-bold">Payments Completed</h2>
            <p className="mt-4 text-3xl font-black">{formatMoney(totals.payments_completed_sum)}</p>
            <p className="mt-2 text-sm text-white/70">Reported by dashboard summary.</p>
          </div>
        </aside>
      </div>
    </div>
  );
}

function toneClass(tone) {
  if (tone === "blue") return "bg-blue-50";
  if (tone === "orange") return "bg-orange-50";
  if (tone === "rose") return "bg-rose-50";
  return "bg-purple-50";
}
