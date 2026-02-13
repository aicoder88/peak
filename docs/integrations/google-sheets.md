# Google Sheets Integration

This project can optionally log form submissions to a Google Sheet. Email notifications via Resend can be enabled separately as a backup.

## What You Need

- A Google Cloud project with the Google Sheets API enabled
- A service account with a JSON key
- A Google Sheet shared with the service account email

## Setup Overview

1. Create a Google Cloud project.
2. Enable the Google Sheets API.
3. Create a service account and generate a JSON key.
4. Share your Google Sheet with the service account `client_email` (Editor access).
5. Set environment variables:

```bash
GOOGLE_SHEETS_ID=your_spreadsheet_id
GOOGLE_SERVICE_ACCOUNT_KEY='{"type":"service_account",...}'
```

Notes:

- `GOOGLE_SERVICE_ACCOUNT_KEY` must be valid JSON. In `.env.local`, keep it on a single line.
- The API appends to `Sheet1` in range `A:G`. Update `src/app/api/contact/route.ts` if your sheet name differs.

## Required Headers

Add these headers in row 1:

- `Timestamp`
- `Name`
- `Email`
- `Phone`
- `Location`
- `Schedule Evaluation`
- `Message`

