# Gameboxd - Full Stack Gaming Platform

**By Team Level Up**

A comprehensive gaming platform with mobile app (React Native), desktop web app (Next.js), and backend API (Node.js/Express).

## 📁 Project Structure

```
Gameboxd/
│── gameboxd-mobile/      ← React Native (Mobile App)
│── gameboxd-web/         ← Next.js (Desktop Web App)
│── gameboxd-backend/     ← Express API
│── docs/                 ← Architecture diagrams, mockups, sprint notes
│── .github/workflows/    ← CI/CD pipelines
│── README.md
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v18+)
- npm or yarn
- Git
- MongoDB Atlas account
- Firebase project
- VS Code (recommended)

### Installation

#### 1. Backend Setup

```bash
cd gameboxd-backend
npm install
cp .env.example .env
# Edit .env with your MongoDB URI and JWT secret
npm start
```

Backend runs on `http://localhost:5000`

#### 2. Web App Setup

```bash
cd gameboxd-web
npm install
# Add Firebase config to src/config/firebase.js
npm run dev
```

Web app runs on `http://localhost:3000`

#### 3. Mobile App Setup

```bash
cd gameboxd-mobile
npm install
# Add Firebase config to src/config/firebase.js
npm start
```

## 🔧 Configuration

### MongoDB Setup

1. Create a MongoDB Atlas account
2. Create a cluster
3. Get your connection string
4. Add to `gameboxd-backend/.env`:
   ```
   MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/gameboxd
   ```

### Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project: "Gameboxd"
3. Enable Email/Password Authentication
4. Copy your Firebase config
5. Add to:
   - `gameboxd-web/src/config/firebase.js`
   - `gameboxd-mobile/src/config/firebase.js`

### Environment Variables

#### Backend (.env)
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
NODE_ENV=development
```

#### Web App
Create `.env.local`:
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## 📱 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Games
- `GET /api/games` - Get all games
- `GET /api/games/:id` - Get game by ID

### Reviews
- `GET /api/reviews` - Get all reviews
- `POST /api/reviews` - Create review

### Activity
- `GET /api/activity` - Get activity feed

## 🧪 Testing with Postman

1. Import the API collection
2. Set up environment variables:
   - `base_url`: `http://localhost:5000/api`
   - `token`: (after login)

## 🌿 Git Branching Strategy

- `main` → Production
- `dev` → Ongoing development
- `feature/*` → Feature branches
  - `feature/mobile-home`
  - `feature/web-search`
  - `feature/backend-auth`

## 🚢 Deployment

### Azure Setup

1. Create Azure App Service for backend
2. Create Azure Static Web App for web
3. Add secrets to GitHub:
   - `AZURE_WEBAPP_NAME`
   - `AZURE_WEBAPP_PUBLISH_PROFILE`
   - `AZURE_STATIC_WEB_APPS_API_TOKEN`
   - `NEXT_PUBLIC_API_URL`

### CI/CD

GitHub Actions automatically deploys on push to `main` branch.

## 📚 Documentation

See `/docs` folder for:
- **Software Requirements Analysis and Design** - Complete requirements specification
- Architecture diagrams
- API documentation
- Mockups
- Sprint notes
- Production readiness checklist

## 🛠️ Development Tools

### Recommended VS Code Extensions

**For Mobile (React Native)**
- ES7+ Snippets
- React Native Tools
- Prettier

**For Desktop (Next.js)**
- Tailwind CSS IntelliSense
- JavaScript/TypeScript Essentials

**For Backend**
- REST Client
- DotENV
- Thunder Client

**Team-wide**
- Prettier
- ESLint

## 📝 License

ISC

## 👥 Team

**Team Level Up**

GP32 Capstone Project

