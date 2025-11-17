# Google Sheets Integration Setup Guide

## Overview
Form submissions will be automatically recorded in your Google Sheet. The system will also send an email notification as a backup.

**Your Sheet ID:** `1BTYWAaBa4fEmLklubY-8-yFck1bJoYWrbYQV3Ptl4so`

---

## Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click **Create Project**
3. Enter project name: `Peak Life Performance - Form Submissions`
4. Click **Create**
5. Wait for project creation to complete

---

## Step 2: Enable Google Sheets API

1. In the Cloud Console, go to **APIs & Services** → **Library**
2. Search for **Google Sheets API**
3. Click on it and press **Enable**
4. You should see a "Google Sheets API is now enabled" message

---

## Step 3: Create a Service Account

1. Go to **APIs & Services** → **Credentials**
2. Click **Create Credentials** → **Service Account**
3. Enter service account name: `form-submissions-bot`
4. Click **Create and Continue**
5. Skip the optional steps and click **Done**

---

## Step 4: Create Service Account Key

1. You should now be on the Service Accounts page
2. Click on the service account you just created (`form-submissions-bot@...`)
3. Go to the **Keys** tab
4. Click **Add Key** → **Create new key**
5. Select **JSON** and click **Create**
6. A JSON file will download to your computer
7. **Keep this file safe** - treat it like a password

---

## Step 5: Get Your Credentials

1. Open the downloaded JSON file in a text editor
2. You'll see something like:
   ```json
   {
     "type": "service_account",
     "project_id": "...",
     "private_key_id": "...",
     "private_key": "...",
     ...
   }
   ```
3. **Copy the entire JSON content** (you'll need this in the next step)

---

## Step 6: Share Google Sheet with Service Account

1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1BTYWAaBa4fEmLklubY-8-yFck1bJoYWrbYQV3Ptl4so/edit
2. Find the **client_email** in your JSON file (looks like: `form-submissions-bot@your-project-id.iam.gserviceaccount.com`)
3. Click **Share** button in your Google Sheet
4. Paste the service account email in the share dialog
5. Give it **Editor** access
6. Click **Share**

---

## Step 7: Set Environment Variables

1. Open your `.env.local` file in the project
2. Add these two variables:

```bash
# Google Sheets Configuration
GOOGLE_SHEETS_ID=1BTYWAaBa4fEmLklubY-8-yFck1bJoYWrbYQV3Ptl4so
GOOGLE_SERVICE_ACCOUNT_KEY='<paste-entire-json-here>'
```

**Important:**
- For `GOOGLE_SERVICE_ACCOUNT_KEY`, paste the **entire JSON content** from Step 5, but put it all on one line and wrap it in single quotes
- Example format:
```bash
GOOGLE_SERVICE_ACCOUNT_KEY='{"type":"service_account","project_id":"your-project",...}'
```

---

## Step 8: Verify Sheet Columns

Make sure your Google Sheet has headers in Row 1 (these are required):

| Column A | Column B | Column C | Column D | Column E |
|----------|----------|----------|----------|----------|
| Timestamp | Name | Email | Phone | Message |

The form data will be appended to these columns starting from Row 2.

---

## Step 9: Test the Integration

1. Go to your site and submit the contact form
2. Check your Google Sheet - you should see a new row appear
3. You should also receive an email at `peaklifeperformance@gmail.com`

---

## Troubleshooting

### Responses not appearing in sheet?
- Check that the service account email has **Editor** access to the sheet
- Make sure the sheet name is exactly `Sheet1` (or update the API call in code)
- Check the Vercel logs for error messages

### Getting "Permission denied" errors?
- Make sure you shared the sheet with the exact service account email
- Verify the service account email is spelled correctly

### Can't find service account email?
- Go to Google Cloud Console → Service Accounts
- Click on the service account you created
- The email is listed at the top (format: `name@project-id.iam.gserviceaccount.com`)

---

## Column Data Format

Form submissions are recorded with:
- **Timestamp:** When the form was submitted (local date/time)
- **Name:** Submitter's name
- **Email:** Submitter's email address
- **Phone:** Submitter's phone (or "N/A" if not provided)
- **Message:** Their consultation goals/message

---

## Email Notifications

Even with Google Sheets integration, you'll still receive email notifications at:
- **Primary:** peaklifeperformance@gmail.com (set in `.env.local` as `CONTACT_EMAIL`)
- Can be changed by updating the `CONTACT_EMAIL` environment variable

If you want to disable email notifications, just remove the `RESEND_API_KEY` from `.env.local`.
