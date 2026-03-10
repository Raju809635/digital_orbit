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
```
