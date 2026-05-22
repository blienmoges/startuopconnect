"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { request } from "@/lib/api";

const userDetailEndpoints = [
  (id) => `/api/admin/users/pending/${id}`,
  (id) => `/api/admin/users/${id}`,
  () => "/api/admin/users",
  () => "/api/admin/users/pending",
];

const roleProfileEndpoints = {
  startup: [
    (id) => `/api/startups/profile?user_id=${id}`,
    () => "/api/startups/profile",
  ],
  mentor: [
    (id) => `/api/mentors/profile?user_id=${id}`,
    () => "/api/mentors/profile",
  ],
  investor: [
    (id) => `/api/investors/profile?user_id=${id}`,
    () => "/api/investors/profile",
  ],
};

const commonUserFields = [
  ["Full name", ["full_name", "name", "first_name", "last_name"]],
  ["Email", ["email"]],
  ["Phone", ["phone_number", "phone"]],
  ["Role", ["role"]],
  ["Account status", ["account_status", "verification_status", "approval_status", "status"]],
  ["Approved", ["is_approved"]],
  ["Registered", ["created_at", "registered_at"]],
];

const profileFieldMap = {
  startup: [
    ["Startup name", ["startup_name", "company_name", "business_name", "name"]],
    ["Industry", ["industry", "sector", "preferred_industry"]],
    ["Tagline", ["tagline", "startup_tagline", "description", "business_summary"]],
    ["Business stage", ["business_stage", "startup_stage", "stage", "stage_type"]],
    ["Stage type", ["stage_type", "startup_type", "business_type"]],
    ["Founded", ["year_founded", "founded_year"]],
    ["Location", ["location", "city", "region", "country"]],
    ["Team members", ["team_members", "team_size"]],
    ["Founder role", ["founder_role"]],
    ["Website", ["website"]],
    ["Funding needed", ["funding_needed"]],
    ["Social links", ["social_links"]],
    ["Bio", ["bio"]],
    ["Founding date", ["founding_date"]],
  ],
  mentor: [
    ["Headline", ["headline"]],
    ["Full name", ["full_name", "name"]],
    ["Current organization", ["current_organization"]],
    ["Current role", ["current_role"]],
    ["Expertise", ["expertise", "expertise_area", "skills"]],
    ["Industries", ["industries"]],
    ["Primary industry", ["primary_industry"]],
    ["Secondary industry", ["secondary_industry"]],
    ["Experience", ["years_experience"]],
    ["Hourly rate", ["hourly_rate"]],
    ["Country", ["country"]],
    ["City", ["city"]],
    ["Bio", ["bio"]],
    ["Availability", ["availability"]],
    ["Session frequency", ["session_frequency"]],
    ["Preferred time slots", ["preferred_time_slots"]],
    ["Format preference", ["format_preference"]],
    ["Mentorship categories", ["mentorship_categories"]],
    ["Preferred startup stages", ["preferred_startup_stages"]],
    ["Previous mentoring experience", ["previous_mentoring_experience"]],
    ["Notable supported", ["notable_supported"]],
    ["Key achievements", ["key_achievements"]],
    ["Areas not mentoring", ["areas_not_mentoring"]],
    ["Pricing notes", ["pricing_notes"]],
    ["LinkedIn", ["linkedin_profile", "linkedin_url"]],
    ["Portfolio", ["portfolio_url"]],
    ["Intro video", ["intro_video_url"]],
  ],
  investor: [
    ["Organization", ["organization_name", "legal_name", "firm_name", "name"]],
    ["Investor type", ["investor_type"]],
    ["Preferred industry", ["preferred_industry", "preferred_sector", "sector", "industry"]],
    ["Industries", ["industries"]],
    ["Investment stage", ["investment_stage", "startup_stage"]],
    ["Budget", ["investment_budget", "budget", "investment_range"]],
    ["Funding range min", ["funding_range_min"]],
    ["Funding range max", ["funding_range_max"]],
    ["Country", ["country"]],
    ["Location preference", ["location_preference"]],
    ["Portfolio size", ["portfolio_size"]],
    ["Portfolio summary", ["portfolio_summary"]],
    ["Investment focus", ["investment_focus"]],
    ["Website", ["website"]],
    ["LinkedIn", ["linkedin_url", "linkedin_profile"]],
    ["Bio", ["bio"]],
  ],
};

const registrationStepMap = {
  startup: [
    {
      title: "Step 1 - Founder Information",
      sourceKey: "step1",
      fields: [
        ["Full name", ["full_name", "name", "first_name", "last_name"]],
        ["Phone number", ["phone_number", "phone"]],
        ["Preferred language", ["preferred_language", "language"]],
      ],
    },
    {
      title: "Step 2 - Startup Information",
      sourceKey: "step2",
      fields: profileFieldMap.startup,
    },
    {
      title: "Step 3 - Required Documents",
      sourceKey: "step3",
      fields: [
        ["Founder ID", ["founder_id", "founder_id_file", "government_id"]],
        ["Founder ID URL", ["founder_id_url", "government_id_url", "passport_url"]],
        ["Business registration", ["business_registration", "business_registration_file", "trade_license"]],
        ["Business registration URL", ["business_registration_url"]],
        ["Pitch deck", ["pitch_deck_url"]],
        ["Business plan", ["business_plan_url"]],
        ["Uploaded file", ["file"]],
        ["Proof of address", ["proof_of_addres", "proof_of_address"]],
        ["Kebele ID", ["kebele_id"]],
        ["Support letter", ["support_letter"]],
        ["TIN certificate", ["tin_certificate"]],
        ["Logo", ["logo"]],
        ["Profile image", ["profile_image"]],
      ],
    },
  ],
  mentor: [
    {
      title: "Step 1 - Mentor Profile",
      sourceKey: "step1",
      fields: [
        ["Phone number", ["phone_number", "phone"]],
        ["Professional title", ["headline", "professional_title"]],
        ["Years experience", ["years_experience"]],
        ["Languages", ["language", "languages"]],
        ["Expertise", ["expertise"]],
        ["Bio", ["bio"]],
        ["LinkedIn", ["linkedin_profile", "linkedin_url"]],
        ["Availability", ["availability", "hours_per_week"]],
        ["Hourly rate", ["hourly_rate"]],
        ["Terms accepted", ["terms_accepted"]],
      ],
    },
    {
      title: "Step 2 - Mentorship Preferences",
      sourceKey: "step2",
      fields: [
        ["Industries", ["industries", "industry"]],
        ["Skills / categories", ["skills", "categories", "mentorship_categories"]],
        ["Country", ["country"]],
        ["City", ["city"]],
        ["Available days", ["availability.days", "days"]],
        ["Mentorship mode", ["availability.mentorship_mode", "mentorship_mode"]],
        ["Preferred startup stage", ["availability.preferred_startup_stage", "preferred_startup_stage", "preferred_startup_stages"]],
        ["Format preference", ["format_preference"]],
        ["Session frequency", ["session_frequency"]],
        ["Preferred time slots", ["preferred_time_slots"]],
      ],
    },
    {
      title: "Step 2 - Verification Documents",
      sourceKey: "step2",
      fields: [
        ["Government ID", ["documents.government_id", "government_id"]],
        ["CV / certification", ["documents.cv", "certifications", "cv"]],
        ["Profile photo", ["documents.profile_picture", "profile_image", "profile_picture"]],
        ["Passport", ["passport"]],
        ["Kebele ID", ["kebele_id"]],
        ["Employment proof", ["employment_proof"]],
        ["Intro video", ["intro_video"]],
      ],
    },
  ],
  investor: [
    {
      title: "Step 1 - Investor Identity",
      sourceKey: "step1",
      fields: [
        ["Legal name", ["legal_name", "organization_name", "full_name", "name", "first_name", "last_name"]],
        ["Phone number", ["phone_number", "phone", "contact_phone"]],
        ["Preferred language", ["preferred_language", "language"]],
      ],
    },
    {
      title: "Step 2 - Investment Preferences",
      sourceKey: "step2",
      fields: profileFieldMap.investor,
    },
    {
      title: "Step 3 - Verification Documents",
      sourceKey: "step3",
      fields: [
        ["Government ID", ["personalDoc", "government_id"]],
        ["Passport", ["passport"]],
        ["Kebele ID", ["kebele_id"]],
        ["Trade license", ["tradeLicense", "trade_license"]],
        ["TIN certificate", ["tinCertificate", "tin_certificate"]],
        ["Business registration", ["business_registration"]],
        ["Portfolio", ["portfolio"]],
        ["Profile image", ["profile_image", "profile_picture"]],
      ],
    },
  ],
};

function normalizeRecord(payload, userId) {
  if (!payload) return null;
  if (Array.isArray(payload)) {
    return payload.find((item) => String(getValue(item, ["user_id", "userId", "id"])) === String(userId)) || (payload.length === 1 ? payload[0] : null);
  }

  const nested =
    payload.user ||
    payload.profile ||
    payload.startup ||
    payload.mentor ||
    payload.investor ||
    payload.users ||
    payload.pendingUsers ||
    payload.items ||
    payload.data;

  if (nested && nested !== payload) {
    const normalized = normalizeRecord(nested, userId);
    if (normalized) return normalized;
  }

  return payload;
}

function normalizeDetailPayload(payload, userId) {
  const source = payload?.data && !Array.isArray(payload.data) ? payload.data : payload;
  const directUser = source?.user || source?.account;
  const email = getValue(directUser || source, ["email", "owner_email"]);
  const directProfile = findProfileForUser(source, userId, email);
  const directDocuments = getDocumentsPayload(source);

  if (directUser || directProfile) {
    return {
      user: filterRecordForUser(directUser || normalizeRecord(source, userId), userId, email),
      profile: mergeDocumentsIntoProfile(directProfile, directDocuments),
    };
  }

  const record = normalizeRecord(payload, userId);
  if (!record) return { user: null, profile: null };
  const recordEmail = getValue(record, ["email", "owner_email"]);

  return {
    user: filterRecordForUser(record, userId, recordEmail),
    profile: mergeDocumentsIntoProfile(findProfileForUser(record, userId, recordEmail), getDocumentsPayload(record)),
  };
}

function getDocumentsPayload(source) {
  if (!source || typeof source !== "object") return null;

  return (
    source.documents ||
    source.uploaded_documents ||
    source.files ||
    source.uploads ||
    source.startup_documents ||
    source.mentor_documents ||
    source.investor_documents ||
    source.profile?.documents ||
    source.data?.documents ||
    null
  );
}

function mergeDocumentsIntoProfile(profile, documents) {
  if (!documents) return profile;
  if (!profile || typeof profile !== "object" || Array.isArray(profile)) {
    return { documents };
  }

  return {
    ...profile,
    documents: profile.documents || documents,
  };
}

function findProfileForUser(source, userId, email = "") {
  const candidates = [
    source?.profile,
    source?.startup,
    source?.startup_profile,
    source?.mentor,
    source?.mentor_profile,
    source?.investor,
    source?.investor_profile,
    source?.registration,
    source?.registration_details,
    source?.startups,
    source?.mentors,
    source?.investors,
  ];

  for (const candidate of candidates) {
    const match = findMatchingRecord(candidate, userId, email);
    if (match) return filterRecordForUser(match, userId, email);
  }

  return null;
}

function findMatchingRecord(value, userId, email = "", requireIdentifier = false) {
  if (!value) return null;
  if (Array.isArray(value)) {
    return value.find((item) => recordMatchesUser(item, userId, email, requireIdentifier)) || null;
  }

  if (recordMatchesUser(value, userId, email, requireIdentifier)) {
    return value;
  }

  return null;
}

function recordMatchesUser(record, userId, email = "", requireIdentifier = false) {
  const recordUserId = getValue(record, ["user_id", "userId", "owner_id"]);
  const recordEmail = String(getValue(record, ["email", "owner_email", "user_email"]) || "").toLowerCase();
  const targetEmail = String(email || "").toLowerCase();

  if (targetEmail && recordEmail) return recordEmail === targetEmail;
  if (recordUserId) return String(recordUserId) === String(userId);
  if (requireIdentifier) return false;
  return true;
}

function filterRecordForUser(record, userId, email = "") {
  if (!record || typeof record !== "object" || Array.isArray(record)) return record;

  return Object.fromEntries(
    Object.entries(record)
      .map(([key, value]) => {
        if (!Array.isArray(value)) return [key, value];

        const hasUserScopedObjects = value.some((item) => item && typeof item === "object" && (
          getValue(item, ["user_id", "userId", "owner_id"]) ||
          getValue(item, ["email", "owner_email", "user_email"])
        ));
        if (!hasUserScopedObjects) return [key, value];

        const matches = value.filter((item) => recordMatchesUser(item, userId, email));
        return [key, matches];
      })
      .filter(([, value]) => !Array.isArray(value) || value.length > 0)
  );
}

function normalizeRole(value) {
  return String(value || "").trim().toLowerCase();
}

function getValue(source, keys, fallbackSource = null) {
  for (const key of keys) {
    const value = getPathValue(source, key);
    if (value !== undefined && value !== null && value !== "") {
      if (key === "first_name" || key === "last_name") {
        const fullName = `${source?.first_name || ""} ${source?.last_name || ""}`.trim();
        if (fullName) return fullName;
      }
      return value;
    }
  }

  if (fallbackSource && fallbackSource !== source) {
    return getValue(fallbackSource, keys);
  }

  return "";
}

function getPathValue(source, path) {
  if (!source) return undefined;
  if (!path.includes(".")) return source[path];
  return path.split(".").reduce((value, key) => value?.[key], source);
}

function getStepSource(source, stepKey) {
  return (
    source?.[stepKey] ||
    source?.registration?.[stepKey] ||
    source?.registration_details?.[stepKey] ||
    source?.profile?.[stepKey] ||
    source
  );
}

function sectionHasValue(source, fields) {
  return fields.some(([, keys]) => keys.some((key) => {
    const value = getPathValue(source, key);
    return value !== undefined && value !== null && value !== "";
  }));
}

function formatValue(value) {
  if (value === undefined || value === null || value === "") return "-";
  if (typeof value === "boolean") return value ? "Yes" : "No";
  if (Array.isArray(value)) return value.length ? value.map(formatValue).join(", ") : "-";
  if (typeof value === "object") return JSON.stringify(value, null, 2);
  return String(value);
}

function formatLabel(key) {
  return key.replaceAll("_", " ").replaceAll("-", " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function isDocumentValue(value) {
  return typeof value === "string" && /^(https?:\/\/|data:|\/uploads\/|uploads\/|\/files\/|files\/|\/documents\/|documents\/)/i.test(value);
}

function getFileHref(value) {
  const path = String(value);
  if (path.startsWith("data:")) return path;
  if (path.startsWith("http")) return path;

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "";
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return apiUrl ? `${apiUrl}${normalizedPath}` : normalizedPath;
}

function isDocumentKey(key) {
  const normalized = String(key).toLowerCase();
  if (normalized.includes("linkedin") || normalized === "website" || normalized.includes("social")) {
    return false;
  }

  return [
    "document",
    "file",
    "government_id",
    "founder_id",
    "passport",
    "license",
    "certificate",
    "certification",
    "tin",
    "cv",
    "photo",
    "image",
    "pitch_deck",
    "business_plan",
    "business_registration",
  ].some((token) => normalized.includes(token));
}

function getDocumentDisplayValue(value) {
  if (!value) return "";
  if (typeof value === "string") return value;
  if (Array.isArray(value)) return value.map(getDocumentDisplayValue).filter(Boolean).join(", ");
  if (typeof value === "object") {
    return (
      value.url ||
      value.file_url ||
      value.document_url ||
      value.path ||
      value.file_path ||
      value.dataUrl ||
      value.name ||
      value.filename ||
      value.originalname ||
      value
    );
  }
  return value;
}

function collectDocuments(source, prefix = "") {
  return dedupeDocuments(collectDocumentsDeep(source, prefix));
}

function collectDocumentsDeep(source, prefix = "") {
  if (!source || typeof source !== "object") return [];

  if (Array.isArray(source)) {
    return source.flatMap((item, index) => collectDocumentsDeep(item, `${prefix}.${index}`));
  }

  return Object.entries(source).flatMap(([key, value]) => {
    const path = prefix ? `${prefix}.${key}` : key;
    const displayValue = getDocumentDisplayValue(value);
    const nestedDocs = value && typeof value === "object" ? collectDocumentsDeep(value, path) : [];

    if ((isDocumentKey(path) || isDocumentValue(displayValue)) && displayValue) {
      return [[path, displayValue], ...nestedDocs];
    }

    return nestedDocs;
  });
}

function dedupeDocuments(documents) {
  const seen = new Set();

  return documents.filter(([key, value]) => {
    const signature = `${key}:${formatValue(value)}`;
    if (seen.has(signature)) return false;
    seen.add(signature);
    return true;
  });
}

function flattenObject(source, prefix = "") {
  if (!source || typeof source !== "object" || Array.isArray(source)) return [];

  return Object.entries(source).flatMap(([key, value]) => {
    const nextKey = prefix ? `${prefix}.${key}` : key;
    if (value && typeof value === "object" && !Array.isArray(value)) {
      return flattenObject(value, nextKey);
    }
    return [[nextKey, value]];
  });
}

async function tryFirstSuccessful(endpoints, userId) {
  let firstError = null;

  for (const getEndpoint of endpoints) {
    try {
      const payload = await request(getEndpoint(userId), { silent: true });
      const record = normalizeRecord(payload, userId);
      if (record) return record;
    } catch (error) {
      firstError ||= error;
    }
  }

  if (firstError) {
    const error = new Error("No registration details were returned for this user.");
    error.cause = firstError;
    throw error;
  }

  return null;
}

async function loadStartupProfileForUser(userId, email = "") {
  try {
    const payload = await request("/api/admin/startups", { silent: true });
    const source = payload?.startups || payload?.items || payload?.data || payload;
    const match = findMatchingRecord(source, userId, email);
    return match ? filterRecordForUser(match, userId, email) : null;
  } catch {
    return null;
  }
}

async function loadRoleProfileForUser(role, userId, email = "") {
  const endpoints = roleProfileEndpoints[role] || [];

  for (const getEndpoint of endpoints) {
    try {
      const payload = await request(getEndpoint(userId), { silent: true });
      const source = payload?.profile || payload?.data?.profile || payload?.data || payload;
      const responseUser = payload?.user || payload?.data?.user;
      const responseEmail = getValue(responseUser, ["email", "owner_email"]) || email;
      const match = findMatchingRecord(source, userId, responseEmail, true);
      if (match) {
        return mergeDocumentsIntoProfile(
          filterRecordForUser(match, userId, email),
          getDocumentsPayload(payload?.data || payload)
        );
      }
    } catch {
      // Try the next profile shape without surfacing expected fallback misses.
    }
  }

  return null;
}

export default function AdminUserDetailPage() {
  const params = useParams();
  const userId = params?.userId;
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadDetails = useCallback(async () => {
    if (!userId) return;

    setLoading(true);
    setError("");

    try {
      const detailPayload = await tryFirstSuccessful(userDetailEndpoints, userId);
      const { user: userRecord, profile: embeddedProfile } = normalizeDetailPayload(detailPayload, userId);
      const role = normalizeRole(userRecord?.role || embeddedProfile?.role);
      const email = getValue(userRecord, ["email", "owner_email"]);
      const startupProfile = role === "startup" && !embeddedProfile ? await loadStartupProfileForUser(userId, email) : null;
      const roleProfile = !embeddedProfile && !startupProfile ? await loadRoleProfileForUser(role, userId, email) : null;

      setUser(userRecord);
      setProfile(embeddedProfile || startupProfile || roleProfile);
    } catch (err) {
      setError(err.message || "Unable to load registration details.");
      setUser(null);
      setProfile(null);
    } finally {
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    loadDetails();
  }, [loadDetails]);

  const role = normalizeRole(user?.role || profile?.role);
  const profileFields = profileFieldMap[role] || [];
  const combinedRecord = useMemo(() => ({ ...(user || {}), ...(profile || {}) }), [profile, user]);
  const mergedFields = useMemo(() => flattenObject({ ...(user || {}), ...(profile || {}) }), [profile, user]);
  const documents = useMemo(() => collectDocuments(combinedRecord), [combinedRecord]);
  const hasProfileData = Boolean(profile) || profileFields.some(([, keys]) => getValue(combinedRecord, keys));

  return (
    <div className="mx-auto max-w-7xl pb-12 text-[#0f3d32]">
      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <Link href="/admin/users" className="mb-3 inline-flex text-sm font-bold text-[#006054] hover:text-[#004d43]">
            Back to users
          </Link>
          <h1 className="text-2xl font-bold text-[#0f3d32]">Registration Details</h1>
          <p className="mt-2 max-w-2xl text-sm font-medium text-[#53756c]">
            Review the account and profile information submitted during registration before approving or rejecting access.
          </p>
        </div>
        <button
          type="button"
          onClick={loadDetails}
          disabled={loading}
          className="rounded-xl border border-[#c8ded6] bg-white px-4 py-2.5 text-sm font-bold text-[#0f5c4a] transition hover:border-[#0f5c4a]/40 hover:bg-[#e6eee9] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Refreshing..." : "Refresh"}
        </button>
      </div>

      {error ? (
        <div className="mb-6 rounded-xl border border-rose-100 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">
          {error}
        </div>
      ) : null}

      {loading ? (
        <div className="rounded-xl border border-[#dbe8e3] bg-white p-10 text-center text-sm font-medium text-[#53756c] shadow-sm">
          Loading registration details...
        </div>
      ) : (
        <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
          <div className="space-y-6">
            <DetailSection title="Account Information" fields={commonUserFields} source={user || {}} />
            {!hasProfileData ? <MissingProfileNotice role={role} userId={userId} /> : null}
            <RegistrationSteps role={role} source={combinedRecord} fallbackFields={profileFields} />
            <AllFieldsTable fields={mergedFields} />
          </div>

          <div className="space-y-6">
            <SummaryPanel user={user} profile={profile} role={role} userId={userId} />
            <DocumentsPanel documents={documents} />
          </div>
        </div>
      )}
    </div>
  );
}

function MissingProfileNotice({ role, userId }) {
  return (
    <div className="rounded-xl border border-amber-100 bg-amber-50 p-5 text-sm text-amber-800">
      <h2 className="font-black text-amber-900">Profile data was not returned</h2>
      <p className="mt-2 leading-relaxed">
        The admin API returned account fields for user #{userId}, but it did not include the submitted {role || "role"} profile or uploaded documents.
        The backend should include a <span className="font-bold">profile</span> object and optional <span className="font-bold">documents</span> array from the role-specific profile table.
      </p>
    </div>
  );
}

function DetailSection({ title, fields, source, fallbackSource = null }) {
  return (
    <section className="rounded-2xl border border-[#dbe8e3] bg-white p-6 shadow-[0_6px_20px_rgba(15,61,50,0.06)]">
      <h2 className="mb-5 text-sm font-black uppercase tracking-wide text-[#47685f]">{title}</h2>
      <div className="grid gap-3 md:grid-cols-2">
        {fields.map(([label, keys]) => (
          <div key={label} className="min-h-[70px] rounded-xl bg-[#eef4f1] p-4">
            <p className="text-[11px] font-black uppercase tracking-wide text-[#7d978f]">{label}</p>
            <ValueBlock value={getValue(source, keys, fallbackSource)} />
          </div>
        ))}
      </div>
    </section>
  );
}

function RegistrationSteps({ role, source, fallbackFields }) {
  const steps = registrationStepMap[role] || [
    {
      title: `${formatLabel(role || "Profile")} Information`,
      sourceKey: "profile",
      fields: fallbackFields,
    },
  ];

  return (
    <div className="space-y-6">
      {steps.map((step) => {
        const stepSource = getStepSource(source, step.sourceKey);
        const finalSource = sectionHasValue(stepSource, step.fields) ? stepSource : source;

        return (
          <DetailSection
            key={step.title}
            title={step.title}
            fields={step.fields}
            source={finalSource}
            fallbackSource={source}
          />
        );
      })}
      {fallbackFields.length ? (
        <DetailSection
          title="Returned Profile Data"
          fields={fallbackFields}
          source={source}
        />
      ) : null}
    </div>
  );
}

function SummaryPanel({ user, profile, role, userId }) {
  const name = getValue(user, ["full_name", "name", "first_name", "last_name"]) || getValue(profile, ["full_name", "name", "organization_name", "startup_name"]);
  const status = getValue(user, ["account_status", "verification_status", "approval_status", "status"]) || getValue(profile, ["verification_status", "status"]);

  return (
    <aside className="rounded-2xl border border-[#dbe8e3] bg-white p-5 shadow-[0_6px_20px_rgba(15,61,50,0.06)]">
      <p className="text-[11px] font-black uppercase tracking-wide text-[#7d978f]">Applicant</p>
      <h2 className="mt-2 text-xl font-black text-[#0f3d32]">{name || `User #${userId}`}</h2>
      <div className="mt-4 space-y-3 text-sm">
        <SummaryRow label="User ID" value={userId} />
        <SummaryRow label="Role" value={role || "-"} />
        <SummaryRow label="Email" value={user?.email} />
        <SummaryRow label="Status" value={status || "pending"} />
      </div>
    </aside>
  );
}

function SummaryRow({ label, value }) {
  return (
    <div className="flex items-start justify-between gap-4 border-t border-[#e2ece8] pt-3">
      <span className="font-semibold text-[#68847c]">{label}</span>
      <span className="text-right font-bold capitalize text-[#0f3d32]">{formatValue(value)}</span>
    </div>
  );
}

function DocumentsPanel({ documents }) {
  return (
    <aside className="rounded-2xl border border-[#dbe8e3] bg-white p-5 shadow-[0_6px_20px_rgba(15,61,50,0.06)]">
      <h2 className="mb-4 text-sm font-black uppercase tracking-wide text-[#47685f]">Submitted Documents</h2>
      {documents.length ? (
        <div className="space-y-3">
          {documents.map(([key, value]) => (
            <div key={key} className="rounded-xl border border-[#dbe8e3] bg-[#eef4f1] p-4">
              <p className="text-[11px] font-black uppercase tracking-wide text-[#7d978f]">{formatLabel(key)}</p>
              <ValueBlock value={value} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm font-medium text-[#68847c]">No document links were returned by the backend.</p>
      )}
    </aside>
  );
}

function AllFieldsTable({ fields }) {
  return (
    <section className="rounded-2xl border border-[#dbe8e3] bg-white p-5 shadow-[0_6px_20px_rgba(15,61,50,0.06)]">
      <h2 className="mb-4 text-sm font-black uppercase tracking-wide text-[#47685f]">All Submitted Fields</h2>
      {fields.length ? (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-[#e2ece8] text-sm">
            <tbody className="divide-y divide-[#e2ece8]">
              {fields.map(([key, value]) => (
                <tr key={key} className="align-top">
                  <th className="w-56 px-3 py-3 text-left text-xs font-black uppercase tracking-wide text-[#7d978f]">
                    {formatLabel(key)}
                  </th>
                  <td className="px-3 py-3 text-[#214d43]">
                    <ValueBlock value={value} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-sm font-medium text-[#68847c]">No submitted fields were returned.</p>
      )}
    </section>
  );
}

function ValueBlock({ value }) {
  if (isDocumentValue(value)) {
    return (
      <a href={getFileHref(value)} target="_blank" rel="noreferrer" className="mt-2 inline-flex break-all rounded-lg bg-[#0f5c4a] px-3 py-2 text-xs font-black uppercase tracking-wide text-white hover:bg-[#0c4a3b]">
        Open file
      </a>
    );
  }

  return <pre className="mt-2 whitespace-pre-wrap break-words font-sans text-sm font-semibold text-[#0f3d32]">{formatValue(value)}</pre>;
}
