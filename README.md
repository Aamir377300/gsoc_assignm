# Smart City Dashboard

A full-stack application for monitoring smart city metrics including weather, air quality, and historical data analysis.

## Project Structure

```
smart-city-app/
├── frontend/          # React + Vite frontend
└── backend/           # Express + MongoDB backend
```

## Quick Start

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file (copy from `.env.example`):
```bash
cp .env.example .env
```

4. Update `.env` with your MongoDB URI and JWT secret

5. Start the server:
```bash
npm run dev
```

Backend runs on `http://localhost:5002`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file (copy from `.env.example`):
```bash
cp .env.example .env
```

4. Update `.env` with your API keys

5. Start the development server:
```bash
npm run dev
```

Frontend runs on `http://localhost:5173`

## Deployment

### Option 1: Vercel (Frontend) + Render (Backend)

**Deploy Backend to Render:**
1. Push backend folder to GitHub
2. Create new Web Service on [render.com](https://render.com)
3. Connect your repo, select `backend` folder
4. Set build command: `npm install`
5. Set start command: `npm start`
6. Add environment variables from `.env.example`

**Deploy Frontend to Vercel:**
1. Push frontend folder to GitHub
2. Import project on [vercel.com](https://vercel.com)
3. Set root directory to `frontend`
4. Add environment variables
5. Update `VITE_API_URL` to your Render backend URL

### Option 2: Railway (Both)

1. Install Railway CLI: `npm install -g @railway/cli`
2. Login: `railway login`
3. Create two services:
   - Backend: `railway up` from backend folder
   - Frontend: `railway up` from frontend folder

### Option 3: Separate Repos

Create two separate GitHub repositories:
- `smart-city-frontend` (deploy to Vercel/Netlify)
- `smart-city-backend` (deploy to Render/Railway/Heroku)

## Environment Variables

### Frontend (.env)
- `VITE_OPENWEATHER_API_KEY` - OpenWeatherMap API key
- `VITE_AQICN_API_KEY` - AQICN API key
- `VITE_NEWS_API_KEY` - NewsData.io API key
- `VITE_API_URL` - Backend API URL

### Backend (.env)
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - Secret for JWT tokens
- `PORT` - Server port (default: 5002)

## Tech Stack

**Frontend:**
- React 18
- Vite
- Tailwind CSS
- Chart.js
- React Router

**Backend:**
- Express
- MongoDB + Mongoose
- JWT Authentication
- bcryptjs

## License

MIT
