# Digital Orbit Full-Stack Website

Modern startup website built with:

- Frontend: Next.js + Tailwind CSS + Framer Motion
- Backend: Node.js + Express.js

## Project Structure

- `frontend/` Next.js app with seven pages
- `backend/` Express API for health and contact submission

## Run Locally

### 1) Backend

```bash
cd backend
npm install
npm run dev
```

Backend runs by default on `http://localhost:5000`.

### 2) Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:3000`.

## Environment Variables

Frontend (`frontend/.env.local`):

```bash
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000
```

Backend (`backend/.env` optional):

```bash
PORT=5000
CORS_ORIGIN=http://localhost:3000,https://your-frontend.vercel.app

# Email notifications
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-gmail-app-password
SMTP_FROM=Digital Orbit <your-email@gmail.com>
LEAD_NOTIFICATION_EMAIL_TO=rbomma074@gmail.com

# Google Sheets
GOOGLE_SHEET_ID=your-google-sheet-id
GOOGLE_SHEET_NAME=Leads
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project-id.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_KEY\n-----END PRIVATE KEY-----\n"
```

## Lead Capture Setup (Email + Google Sheets)

1. Create a Google Sheet with a tab named `Leads`.
2. Share the sheet with your service account email as `Editor`.
3. Put the sheet id in `GOOGLE_SHEET_ID`.
4. For Gmail SMTP, generate an App Password and use it as `SMTP_PASS`.
5. Add all backend env vars in Render service settings.
6. Redeploy backend.

After setup, every contact submission:

- sends an email notification
- appends a row to your Google Sheet
