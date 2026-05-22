# Admin registration review endpoints

The admin registration detail page at `/admin/users/[userId]` is wired to the live API through `src/lib/api.js`.

It first tries to load the account from:

- `GET /api/admin/users/pending/:userId`
- `GET /api/admin/users/:userId`
- `GET /api/admin/users`
- `GET /api/admin/users/pending`

For pending users, `GET /api/admin/users/pending/:userId` should return the unapproved registration profile data. This lets admins review what the applicant submitted before approval.

For startup users only, if the pending/user detail response does not include embedded profile data, the frontend also falls back to `GET /api/admin/startups` and matches by `user_id`.

Recommended backend response shape:

```json
{
  "user": {
    "user_id": 60,
    "full_name": "Example User",
    "email": "user@example.com",
    "phone_number": "+251900000000",
    "role": "Startup",
    "account_status": "pending",
    "is_approved": false,
    "created_at": "2026-05-21T00:00:00.000Z"
  },
  "profile": {
    "startup_name": "Example Startup",
    "sector": "Fintech",
    "startup_stage": "Seed",
    "city": "Addis Ababa",
    "business_registration": "/uploads/business-registration.pdf"
  }
}
```

Document fields can be absolute URLs or backend-relative paths like `/uploads/file.pdf`. The frontend prefixes relative document paths with `NEXT_PUBLIC_API_URL`.
