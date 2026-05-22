"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { request } from "@/lib/api";

const statusTabs = ["all", "pending", "approved", "rejected"];
const roleFilters = ["all", "Startup", "Investor", "Mentor", "Admin"];

function normalizeUsers(payload) {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.users)) return payload.users;
  if (Array.isArray(payload?.pendingUsers)) return payload.pendingUsers;
  if (Array.isArray(payload?.items)) return payload.items;
  if (Array.isArray(payload?.data)) return payload.data;
  if (Array.isArray(payload?.data?.users)) return payload.data.users;
  if (Array.isArray(payload?.data?.items)) return payload.data.items;
  return [];
}

function getUserId(user) {
  return user?.user_id ?? user?.userId ?? user?.id;
}

function mergeUsers(...lists) {
  const usersByKey = new Map();

  lists.flat().forEach((user, index) => {
    if (!user) return;
    const key = getUserId(user) ? String(getUserId(user)) : `fallback-${index}-${user.email || ""}`;
    usersByKey.set(key, { ...(usersByKey.get(key) || {}), ...user });
  });

  return Array.from(usersByKey.values());
}

function getUserName(user) {
  return (
    user?.full_name ||
    user?.name ||
    `${user?.first_name || ""} ${user?.last_name || ""}`.trim() ||
    user?.email ||
    "Unknown user"
  );
}

function getStatus(user) {
  const explicitStatus =
    user?.account_status ||
    user?.verification_status ||
    user?.approval_status ||
    user?.status;

  if (explicitStatus && isRejectedStatus(explicitStatus)) {
    return explicitStatus;
  }

  if (explicitStatus && isApprovedStatus(explicitStatus)) {
    return explicitStatus;
  }

  if (typeof user?.is_approved === "boolean") {
    return user.is_approved ? "approved" : "pending";
  }

  return explicitStatus || "pending";
}

function isApprovedStatus(status) {
  const normalized = String(status).toLowerCase();
  return normalized.includes("approved") || normalized === "active" || normalized === "verified";
}

function isRejectedStatus(status) {
  const normalized = String(status).toLowerCase();
  return normalized.includes("reject") || normalized === "blocked" || normalized === "disabled";
}

function statusClass(status) {
  if (isApprovedStatus(status)) return "border-emerald-100 bg-emerald-50 text-emerald-700";
  if (isRejectedStatus(status)) return "border-rose-100 bg-rose-50 text-rose-700";
  return "border-amber-100 bg-amber-50 text-amber-700";
}

function roleClass(role) {
  const normalized = String(role).toLowerCase();
  if (normalized === "startup") return "bg-orange-100 text-orange-700";
  if (normalized === "investor") return "bg-blue-100 text-blue-700";
  if (normalized === "mentor") return "bg-purple-100 text-purple-700";
  return "bg-slate-100 text-slate-700";
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

async function requestUserStatusAction(action, userId) {
  try {
    return await request(`/api/admin/users/${action}/${userId}`, { method: "PUT" });
  } catch (error) {
    if (action !== "reject" || ![404, 405].includes(error.status)) {
      throw error;
    }

    return request(`/api/admin/users/${userId}/${action}`, { method: "PUT" });
  }
}

export default function VerifyUsersPage() {
  const [users, setUsers] = useState([]);
  const [pendingUsers, setPendingUsers] = useState([]);
  const [activeStatus, setActiveStatus] = useState("all");
  const [activeRole, setActiveRole] = useState("all");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [actionKey, setActionKey] = useState("");

  const loadUsers = useCallback(async () => {
    setLoading(true);
    setError("");

    const [allUsersResult, pendingUsersResult] = await Promise.allSettled([
      request("/api/admin/users"),
      request("/api/admin/users/pending"),
    ]);

    if (allUsersResult.status === "fulfilled") {
      setUsers(normalizeUsers(allUsersResult.value));
    } else {
      setUsers([]);
    }

    if (pendingUsersResult.status === "fulfilled") {
      setPendingUsers(normalizeUsers(pendingUsersResult.value));
    } else {
      setPendingUsers([]);
    }

    const failures = [allUsersResult, pendingUsersResult]
      .filter((result) => result.status === "rejected")
      .map((result) => result.reason?.message || "Request failed");

    if (failures.length) {
      setError(failures.join(" | "));
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  const allUsers = useMemo(() => mergeUsers(users, pendingUsers), [pendingUsers, users]);

  const displayUsers = useMemo(() => {
    const query = search.trim().toLowerCase();

    return allUsers.filter((user) => {
      const status = String(getStatus(user)).toLowerCase();
      const role = String(user.role || "").toLowerCase();
      const searchable = [
        getUserName(user),
        user.email,
        user.phone_number,
        user.account_status,
        user.verification_status,
        user.role,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesStatus =
        activeStatus === "all" ||
        (activeStatus === "approved" && isApprovedStatus(status)) ||
        (activeStatus === "rejected" && isRejectedStatus(status)) ||
        (activeStatus === "pending" && !isApprovedStatus(status) && !isRejectedStatus(status));

      const matchesRole = activeRole === "all" || role === activeRole.toLowerCase();
      const matchesSearch = !query || searchable.includes(query);

      return matchesStatus && matchesRole && matchesSearch;
    });
  }, [activeRole, activeStatus, allUsers, search]);

  const stats = useMemo(() => {
    const pending = allUsers.filter((user) => {
      const status = getStatus(user);
      return !isApprovedStatus(status) && !isRejectedStatus(status);
    }).length;
    const approved = allUsers.filter((user) => isApprovedStatus(getStatus(user))).length;
    const rejected = allUsers.filter((user) => isRejectedStatus(getStatus(user))).length;

    return { all: allUsers.length, pending, approved, rejected };
  }, [allUsers]);

  const handleUserAction = async (user, action) => {
    const userId = getUserId(user);
    if (!userId) {
      setError("This user record does not include a user id.");
      return;
    }

    const key = `${action}-${userId}`;
    setActionKey(key);
    setError("");

    try {
      if (action === "delete") {
        await request(`/api/admin/users/${userId}`, { method: "DELETE" });
      } else {
        await requestUserStatusAction(action, userId);
      }

      await loadUsers();
    } catch (err) {
      setError(err.message || `Unable to ${action} user.`);
    } finally {
      setActionKey("");
    }
  };

  const handleDelete = (user) => {
    const name = getUserName(user);
    if (window.confirm(`Delete ${name}? This cannot be undone.`)) {
      handleUserAction(user, "delete");
    }
  };

  return (
    <div className="max-w-7xl mx-auto pb-12 animate-fade-in">
      <div className="flex flex-col gap-5 mb-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-[#e6f0ee] text-[#006054] flex items-center justify-center shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0 1 12 2.944a11.955 11.955 0 0 1-8.618 3.04A12.02 12.02 0 0 0 3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016Z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-slate-800">Verify Users</h1>
          </div>
          <p className="text-sm text-slate-500 max-w-2xl">
            Review users across roles, approve verified accounts, reject unsafe submissions, or remove records.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative w-full sm:w-72">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m21 21-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search users..."
              className="w-full pl-9 pr-4 py-2.5 border border-slate-200 bg-white rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#10b981] transition-all"
            />
          </div>
          <button
            type="button"
            onClick={loadUsers}
            disabled={loading || Boolean(actionKey)}
            className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-600 transition hover:border-[#006054]/30 hover:text-[#006054] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Refreshing..." : "Refresh"}
          </button>
        </div>
      </div>

      <div className="grid gap-4 mb-6 sm:grid-cols-4">
        {statusTabs.map((status) => (
          <button
            key={status}
            type="button"
            onClick={() => setActiveStatus(status)}
            className={`rounded-xl border p-4 text-left shadow-sm transition ${
              activeStatus === status
                ? "border-[#006054] bg-[#e6f0ee]"
                : "border-slate-100 bg-white hover:border-slate-200"
            }`}
          >
            <p className="text-xs font-bold uppercase tracking-wide text-slate-400">{status}</p>
            <p className="mt-2 text-2xl font-black text-slate-900">{stats[status]}</p>
          </button>
        ))}
      </div>

      {error ? (
        <div className="mb-6 rounded-xl border border-rose-100 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">
          {error}
        </div>
      ) : null}

      <div className="mb-6 grid gap-3 rounded-xl border border-slate-100 bg-white p-4 shadow-sm md:grid-cols-[1fr_1fr_auto] md:items-end">
        <label className="block">
          <span className="mb-2 block text-[11px] font-black uppercase tracking-wide text-slate-400">Role</span>
          <select
            value={activeRole}
            onChange={(event) => setActiveRole(event.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm font-semibold text-slate-700 outline-none transition focus:border-[#006054]/40 focus:ring-2 focus:ring-[#10b981]/20"
          >
            {roleFilters.map((role) => (
              <option key={role} value={role}>
                {role === "all" ? "All roles" : role}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-2 block text-[11px] font-black uppercase tracking-wide text-slate-400">Verification status</span>
          <select
            value={activeStatus}
            onChange={(event) => setActiveStatus(event.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm font-semibold capitalize text-slate-700 outline-none transition focus:border-[#006054]/40 focus:ring-2 focus:ring-[#10b981]/20"
          >
            {statusTabs.map((status) => (
              <option key={status} value={status}>
                {status === "all" ? "All statuses" : status}
              </option>
            ))}
          </select>
        </label>

        <button
          type="button"
          onClick={() => {
            setActiveRole("all");
            setActiveStatus("all");
            setSearch("");
          }}
          className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-bold text-slate-600 transition hover:border-[#006054]/30 hover:bg-[#e6f0ee] hover:text-[#006054]"
        >
          Clear filters
        </button>
      </div>

      {loading ? (
        <div className="rounded-xl border border-slate-100 bg-white p-10 text-center text-sm font-medium text-slate-500 shadow-sm">
          Loading users...
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {displayUsers.length ? (
            displayUsers.map((user, index) => (
              <UserCard
                key={getUserId(user) || index}
                user={user}
                actionKey={actionKey}
                onApprove={() => handleUserAction(user, "approve")}
                onReject={() => handleUserAction(user, "reject")}
                onDelete={() => handleDelete(user)}
              />
            ))
          ) : (
            <div className="lg:col-span-2 rounded-xl border border-slate-100 bg-white p-10 text-center shadow-sm">
              <h2 className="text-lg font-bold text-slate-800">No users found</h2>
              <p className="mt-2 text-sm text-slate-500">Try another status, role, or search term.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function UserCard({ user, actionKey, onApprove, onReject, onDelete }) {
  const userId = getUserId(user);
  const status = getStatus(user);
  const role = user.role || "-";
  const initials = getUserName(user)
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return (
    <div className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm">
      <div className="flex justify-between gap-4 mb-5">
        <div className="flex items-center gap-4 min-w-0">
          <div className="w-12 h-12 rounded-xl bg-[#006054] text-white flex items-center justify-center shrink-0 font-black text-sm">
            {initials || "U"}
          </div>
          <div className="min-w-0">
            <h3 className="font-bold text-slate-800 truncate">{getUserName(user)}</h3>
            <p className="text-sm text-slate-500 truncate">{user.email || "-"}</p>
            <p className="mt-1 text-xs text-slate-400">Joined {formatDate(user.created_at || user.profile_submitted_at)}</p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2 shrink-0">
          <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold tracking-widest uppercase ${roleClass(role)}`}>
            {role}
          </span>
          <span className={`rounded-full border px-2.5 py-1 text-[10px] font-bold capitalize ${statusClass(status)}`}>
            {String(status).replaceAll("_", " ")}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-5 text-xs">
        <div className="rounded-lg bg-slate-50 p-3">
          <p className="font-bold uppercase tracking-wide text-slate-400">User ID</p>
          <p className="mt-1 font-semibold text-slate-700">{userId || "-"}</p>
        </div>
        <div className="rounded-lg bg-slate-50 p-3">
          <p className="font-bold uppercase tracking-wide text-slate-400">Submitted</p>
          <p className="mt-1 font-semibold text-slate-700">{formatDate(user.profile_submitted_at || user.created_at)}</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Link
          href={`/admin/users/${userId}`}
          className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-bold text-slate-600 transition hover:border-[#006054]/30 hover:bg-[#e6f0ee] hover:text-[#006054]"
        >
          View details
        </Link>
        <button
          type="button"
          onClick={onApprove}
          disabled={Boolean(actionKey)}
          className="flex-1 min-w-24 rounded-lg bg-[#006054] px-3 py-2 text-sm font-bold text-white transition hover:bg-[#004d43] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {actionKey === `approve-${userId}` ? "Approving..." : "Approve"}
        </button>
        <button
          type="button"
          onClick={onReject}
          disabled={Boolean(actionKey)}
          className="flex-1 min-w-24 rounded-lg border border-slate-200 px-3 py-2 text-sm font-bold text-slate-700 transition hover:border-rose-200 hover:bg-rose-50 hover:text-rose-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {actionKey === `reject-${userId}` ? "Rejecting..." : "Reject"}
        </button>
        <button
          type="button"
          onClick={onDelete}
          disabled={Boolean(actionKey)}
          className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-bold text-slate-500 transition hover:border-rose-200 hover:bg-rose-50 hover:text-rose-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {actionKey === `delete-${userId}` ? "Deleting..." : "Delete"}
        </button>
      </div>
    </div>
  );
}
