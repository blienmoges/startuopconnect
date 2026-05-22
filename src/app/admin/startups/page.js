"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { request } from "@/lib/api";

const tabs = [
  { id: "startups", label: "Startup Profiles" },
  { id: "users", label: "Pending Users" },
];

function normalizeList(payload, keys) {
  if (Array.isArray(payload)) return payload;

  for (const key of keys) {
    if (Array.isArray(payload?.[key])) return payload[key];
  }

  if (Array.isArray(payload?.data)) return payload.data;
  if (Array.isArray(payload?.data?.items)) return payload.data.items;
  if (Array.isArray(payload?.data?.startups)) return payload.data.startups;
  if (Array.isArray(payload?.data?.users)) return payload.data.users;

  return [];
}

function getStartupId(startup) {
  return startup?.startup_id ?? startup?.startupId ?? startup?.id ?? startup?.profile_id;
}

function getUserId(user) {
  return user?.user_id ?? user?.userId ?? user?.id;
}

function getUserStatus(user) {
  return (
    user?.account_status ||
    user?.verification_status ||
    user?.approval_status ||
    user?.status ||
    (user?.is_approved === true ? "approved" : "pending")
  );
}

function getStartupStatus(startup) {
  if (typeof startup?.is_approved === "boolean") {
    return startup.is_approved ? "approved" : "pending";
  }

  return (
    startup?.verification_status ||
    startup?.approval_status ||
    startup?.status ||
    "pending"
  );
}

function statusClass(status) {
  const normalized = String(status).toLowerCase();

  if (normalized.includes("approved") || normalized === "active") {
    return "bg-emerald-50 text-emerald-700 border-emerald-100";
  }

  if (normalized.includes("reject") || normalized.includes("removed")) {
    return "bg-rose-50 text-rose-700 border-rose-100";
  }

  return "bg-amber-50 text-amber-700 border-amber-100";
}

function valueOrDash(value) {
  if (Array.isArray(value)) return value.length ? value.join(", ") : "-";
  return value || "-";
}

function formatDate(value) {
  if (!value) return "-";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "-";
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function getStoredAdminAuth() {
  if (typeof window === "undefined") {
    return { token: "", role: "" };
  }

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return {
    token: localStorage.getItem("token") || "",
    role: localStorage.getItem("role") || user?.role || "",
  };
}

function isClearlyNotAdmin(role) {
  return Boolean(role) && String(role).toLowerCase() !== "admin";
}

async function requestUserStatusAction(action, userId) {
  try {
    return await request(`/api/admin/users/${action}/${userId}`, {
      method: "PUT",
    });
  } catch (error) {
    if (action !== "reject" || ![404, 405].includes(error.status)) {
      throw error;
    }

    return request(`/api/admin/users/${userId}/${action}`, {
      method: "PUT",
    });
  }
}

export default function AdminStartupsPage() {
  const [activeTab, setActiveTab] = useState("startups");
  const [startups, setStartups] = useState([]);
  const [pendingUsers, setPendingUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [actionKey, setActionKey] = useState("");
  const [authInfo, setAuthInfo] = useState({ token: "", role: "" });

  const loadData = useCallback(async () => {
    const storedAuth = getStoredAdminAuth();
    setAuthInfo(storedAuth);

    if (!storedAuth.token) {
      setStartups([]);
      setPendingUsers([]);
      setError("Admin login required. Please log in with an Admin account before opening approvals.");
      setLoading(false);
      return;
    }

    if (isClearlyNotAdmin(storedAuth.role)) {
      setStartups([]);
      setPendingUsers([]);
      setError(`Forbidden: you are logged in as ${storedAuth.role}. These approval endpoints require an Admin account.`);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError("");

    const [startupResult, pendingUserResult] = await Promise.allSettled([
      request("/api/admin/startups"),
      request("/api/admin/users/pending"),
    ]);

    if (startupResult.status === "fulfilled") {
      setStartups(normalizeList(startupResult.value, ["startups", "items", "profiles"]));
    } else {
      setStartups([]);
    }

    if (pendingUserResult.status === "fulfilled") {
      setPendingUsers(normalizeList(pendingUserResult.value, ["users", "pendingUsers", "items"]));
    } else {
      setPendingUsers([]);
    }

    const failures = [startupResult, pendingUserResult]
      .filter((result) => result.status === "rejected")
      .map((result) => result.reason?.message || "Request failed");

    if (failures.length) {
      setError(failures.join(" | "));
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const stats = useMemo(() => {
    const pendingStartups = startups.filter((startup) => {
      const status = String(getStartupStatus(startup)).toLowerCase();
      return status.includes("pending") || status.includes("review");
    }).length;

    const approvedStartups = startups.filter((startup) => {
      const status = String(getStartupStatus(startup)).toLowerCase();
      return status.includes("approved") || status === "active";
    }).length;

    return [
      { label: "Pending Startups", value: pendingStartups },
      { label: "Approved Startups", value: approvedStartups },
      { label: "Pending Users", value: pendingUsers.length },
    ];
  }, [pendingUsers.length, startups]);

  const handleStartupAction = async (startup, action) => {
    const startupId = getStartupId(startup);
    if (!startupId) {
      setError("This startup record does not include a startup id.");
      return;
    }

    const key = `startup-${startupId}-${action}`;
    setActionKey(key);
    setError("");

    try {
      await request(`/api/admin/startups/${startupId}/${action}`, {
        method: "PUT",
      });
      await loadData();
    } catch (err) {
      setError(err.message || `Unable to ${action} startup.`);
    } finally {
      setActionKey("");
    }
  };

  const handleUserAction = async (user, action) => {
    const userId = getUserId(user);
    if (!userId) {
      setError("This user record does not include a user id.");
      return;
    }

    const key = `user-${userId}-${action}`;
    setActionKey(key);
    setError("");

    try {
      await requestUserStatusAction(action, userId);
      await loadData();
    } catch (err) {
      setError(err.message || `Unable to ${action} user.`);
    } finally {
      setActionKey("");
    }
  };

  return (
    <div className="max-w-7xl mx-auto pb-12 animate-fade-in">
      <div className="flex flex-col gap-5 mb-8 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-[#e6f0ee] text-[#006054] flex items-center justify-center shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-slate-800">Startup Approval</h1>
          </div>
          <p className="text-sm text-slate-500 max-w-2xl">
            Review submitted startup profiles and approve the related user accounts before they become visible on the platform.
          </p>
          {authInfo.role ? (
            <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
              Current session role: {authInfo.role}
            </p>
          ) : null}
        </div>

        <button
          type="button"
          onClick={loadData}
          disabled={loading || Boolean(actionKey)}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-[#006054]/30 hover:text-[#006054] disabled:cursor-not-allowed disabled:opacity-60"
        >
          <svg className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v6h6M20 20v-6h-6M20 9A8 8 0 0 0 6.3 4.7L4 10m16 4-2.3 5.3A8 8 0 0 1 4 15" />
          </svg>
          Refresh
        </button>
      </div>

      <div className="grid gap-4 mb-6 sm:grid-cols-3">
        {stats.map((item) => (
          <div key={item.label} className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{item.label}</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">{item.value}</p>
          </div>
        ))}
      </div>

      {error ? (
        <div className="mb-6 rounded-xl border border-rose-100 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">
          {error}
        </div>
      ) : null}

      <div className="mb-6 flex flex-wrap gap-2 rounded-xl border border-slate-100 bg-white p-1 shadow-sm">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
              activeTab === tab.id
                ? "bg-[#006054] text-white shadow-sm"
                : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="rounded-xl border border-slate-100 bg-white p-10 text-center text-sm font-medium text-slate-500 shadow-sm">
          Loading review queue...
        </div>
      ) : activeTab === "startups" ? (
        <StartupTable
          startups={startups}
          actionKey={actionKey}
          onApprove={(startup) => handleStartupAction(startup, "approve")}
          onUnapprove={(startup) => handleStartupAction(startup, "unapprove")}
        />
      ) : (
        <PendingUsersTable
          users={pendingUsers}
          actionKey={actionKey}
          onApprove={(user) => handleUserAction(user, "approve")}
          onReject={(user) => handleUserAction(user, "reject")}
        />
      )}
    </div>
  );
}

function StartupTable({ startups, actionKey, onApprove, onUnapprove }) {
  if (!startups.length) {
    return (
      <div className="rounded-xl border border-slate-100 bg-white p-10 text-center shadow-sm">
        <h2 className="text-lg font-bold text-slate-800">No startup profiles found</h2>
        <p className="mt-2 text-sm text-slate-500">New startup submissions will appear here after registration.</p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-100">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wide text-slate-500">Startup</th>
              <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wide text-slate-500">Market</th>
              <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wide text-slate-500">Status</th>
              <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wide text-slate-500">Submitted</th>
              <th className="px-5 py-3 text-right text-xs font-bold uppercase tracking-wide text-slate-500">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {startups.map((startup, index) => {
              const startupId = getStartupId(startup) ?? index;
              const status = getStartupStatus(startup);
              const approveKey = `startup-${startupId}-approve`;
              const unapproveKey = `startup-${startupId}-unapprove`;
              const name = startup.company_name || startup.startup_name || startup.name || `Startup #${startupId}`;
              const founder = startup.founder_name || startup.owner_name || startup.full_name || startup.owner_email || startup.email;
              const location = [startup.city, startup.region].filter(Boolean).join(", ") || startup.location || startup.country;

              return (
                <tr key={startupId} className="align-top">
                  <td className="px-5 py-4">
                    <p className="font-semibold text-slate-900">{name}</p>
                    <p className="mt-1 text-xs text-slate-500">{valueOrDash(founder)}</p>
                  </td>
                  <td className="px-5 py-4 text-sm text-slate-600">
                    <p>{valueOrDash(startup.industry || startup.sector || startup.industries)}</p>
                    <p className="mt-1 text-xs text-slate-400">{valueOrDash(startup.business_stage || startup.stage_type || location)}</p>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-bold capitalize ${statusClass(status)}`}>
                      {String(status).replaceAll("_", " ")}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-sm text-slate-500">{formatDate(startup.created_at || startup.submitted_at)}</td>
                  <td className="px-5 py-4">
                    <div className="flex justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => onApprove(startup)}
                        disabled={Boolean(actionKey)}
                        className="rounded-lg bg-[#006054] px-3 py-2 text-xs font-bold text-white transition hover:bg-[#004d43] disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {actionKey === approveKey ? "Approving..." : "Approve"}
                      </button>
                      <button
                        type="button"
                        onClick={() => onUnapprove(startup)}
                        disabled={Boolean(actionKey)}
                        className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-bold text-slate-600 transition hover:border-rose-200 hover:bg-rose-50 hover:text-rose-700 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {actionKey === unapproveKey ? "Updating..." : "Unapprove"}
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function PendingUsersTable({ users, actionKey, onApprove, onReject }) {
  if (!users.length) {
    return (
      <div className="rounded-xl border border-slate-100 bg-white p-10 text-center shadow-sm">
        <h2 className="text-lg font-bold text-slate-800">No pending users</h2>
        <p className="mt-2 text-sm text-slate-500">Accounts waiting for admin approval will appear here.</p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-100">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wide text-slate-500">User</th>
              <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wide text-slate-500">Role</th>
              <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wide text-slate-500">Status</th>
              <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wide text-slate-500">Joined</th>
              <th className="px-5 py-3 text-right text-xs font-bold uppercase tracking-wide text-slate-500">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {users.map((user, index) => {
              const userId = getUserId(user) ?? index;
              const approveKey = `user-${userId}-approve`;
              const rejectKey = `user-${userId}-reject`;
              const name = user.full_name || user.name || `${user.first_name || ""} ${user.last_name || ""}`.trim() || user.email;
              const status = getUserStatus(user);

              return (
                <tr key={userId} className="align-top">
                  <td className="px-5 py-4">
                    <p className="font-semibold text-slate-900">{valueOrDash(name)}</p>
                    <p className="mt-1 text-xs text-slate-500">{valueOrDash(user.email)}</p>
                  </td>
                  <td className="px-5 py-4 text-sm font-medium capitalize text-slate-600">{valueOrDash(user.role)}</td>
                  <td className="px-5 py-4">
                    <span className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-bold capitalize ${statusClass(status)}`}>
                      {String(status).replaceAll("_", " ")}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-sm text-slate-500">{formatDate(user.created_at || user.registered_at)}</td>
                  <td className="px-5 py-4">
                    <div className="flex justify-end gap-2">
                      <Link
                        href={`/admin/users/${userId}`}
                        className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-bold text-slate-600 transition hover:border-[#006054]/30 hover:bg-[#e6f0ee] hover:text-[#006054]"
                      >
                        View details
                      </Link>
                      <button
                        type="button"
                        onClick={() => onApprove(user)}
                        disabled={Boolean(actionKey)}
                        className="rounded-lg bg-[#006054] px-3 py-2 text-xs font-bold text-white transition hover:bg-[#004d43] disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {actionKey === approveKey ? "Approving..." : "Approve"}
                      </button>
                      <button
                        type="button"
                        onClick={() => onReject(user)}
                        disabled={Boolean(actionKey)}
                        className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-bold text-slate-600 transition hover:border-rose-200 hover:bg-rose-50 hover:text-rose-700 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {actionKey === rejectKey ? "Rejecting..." : "Reject"}
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
