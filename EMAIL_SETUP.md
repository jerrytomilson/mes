# Email setup

The Node server sends form emails when `/api/health` shows `"emailConfigured": true`.

**SMTP (Titan) is used first** if `SMTP_HOST`, `SMTP_USER`, and `SMTP_PASS` are set.  
Otherwise **Resend** is used if `RESEND_API_KEY` is set.

---

## Option A — Titan SMTP (recommended for your inbox)

**Hostinger → Node.js app → Environment variables:**

```
SMTP_HOST=smtp.titan.email
SMTP_PORT=465
SMTP_USER=info@ciphershieldchain.com
SMTP_PASS=your_app_password
ADMIN_EMAIL=info@ciphershieldchain.com
```

**Titan tips:**

- If 2FA is on, create an **App Password** in Titan (Settings → Security) and use it as `SMTP_PASS`.
- Remove `RESEND_API_KEY` if you only want SMTP (SMTP wins when both are set).

**Hostinger “IPv4 resolve” warning:** If logs show `535 authentication failed`, DNS is fine — Titan rejected the password. Only use the IP workaround below for `ENOTFOUND` / timeout errors.

**Optional DNS workaround** (only if connection fails, not for 535):

```
SMTP_HOST=smtp.titan.email
SMTP_HOST_IP=3.234.93.86
```

(Titan may change IPs; prefer hostname when DNS works.)

**Test after redeploy:**

1. `https://ciphershieldchain.com/api/health` → `"emailProvider":"smtp"`
2. `https://ciphershieldchain.com/api/debug-email?to=info@ciphershieldchain.com`
3. Check Titan inbox + spam for `info@ciphershieldchain.com`

---

## Option B — Resend

```
RESEND_API_KEY=re_...
RESEND_FROM=Cipher Shield Chain Recovery <info@ciphershieldchain.com>
ADMIN_EMAIL=info@ciphershieldchain.com
```

Verify domain at resend.com. Used only when SMTP is not configured.

**Deliverability guardrails (important):**

- Do **not** use `onboarding@resend.dev` in production. Use your verified `@ciphershieldchain.com` sender.
- Keep sender alignment strict:
  - `From`: `info@ciphershieldchain.com`
  - `Reply-To`: same domain where possible
- Publish SPF, DKIM, and DMARC for `ciphershieldchain.com`:
  - SPF: include only your active sender(s) (Titan and/or Resend)
  - DKIM: enable provider DKIM records exactly as issued
  - DMARC: start with `p=none`, then move to `quarantine/reject` after monitoring

Example DMARC starter record:

```
Host: _dmarc
Type: TXT
Value: v=DMARC1; p=none; rua=mailto:info@ciphershieldchain.com; adkim=s; aspf=s; pct=100
```

---

## Logs

- `[SMTP] Ready — ...` → Titan SMTP active
- `[Resend] Ready — ...` → Resend active (no SMTP vars)
- `[Email] Not configured` → add env vars and restart
