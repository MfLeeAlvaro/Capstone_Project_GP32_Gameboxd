# Gameboxd Setup Guide

## Step-by-Step Setup Instructions

### 1. Install Required Software

#### Core Tools
- [ ] **Node.js (v18+)** - Download from [nodejs.org](https://nodejs.org/)
- [ ] **Git** - Download from [git-scm.com](https://git-scm.com/)
- [ ] **VS Code** - Download from [code.visualstudio.com](https://code.visualstudio.com/)
- [ ] **MongoDB Compass** - Download from [mongodb.com/try/download/compass](https://www.mongodb.com/try/download/compass)
- [ ] **Postman** - Download from [postman.com](https://www.postman.com/downloads/)
- [ ] **Android Studio** (for mobile testing) - Download from [developer.android.com](https://developer.android.com/studio)
- [ ] **Firebase Console** - Access at [console.firebase.google.com](https://console.firebase.google.com/)

### 2. Clone and Install Dependencies

```bash
# Clone the repository
git clone <your-repo-url>
cd Capstone_Project_GP32_Gameboxd

# Install backend dependencies
cd gameboxd-backend
npm install

# Install web app dependencies
cd ../gameboxd-web
npm install

# Install mobile app dependencies
cd ../gameboxd-mobile
npm install
```

### 3. MongoDB Atlas Setup

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a new cluster (free tier is fine)
4. Create a database user:
   - Go to Database Access
   - Add New Database User
   - Choose Password authentication
   - Save username and password
5. Whitelist your IP:
   - Go to Network Access
   - Add IP Address (or 0.0.0.0/0 for development)
6. Get connection string:
   - Go to Clusters
   - Click Connect
   - Choose "Connect your application"
   - Copy the connection string
7. Update `gameboxd-backend/.env`:
   ```
   MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/gameboxd
   JWT_SECRET=your-super-secret-jwt-key-here
   PORT=5000
   ```

### 4. Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Name it "Gameboxd"
4. Enable Google Analytics (optional)
5. Go to Authentication:
   - Click "Get started"
   - Enable "Email/Password"
   - Save
6. Get your config:
   - Go to Project Settings (gear icon)
   - Scroll to "Your apps"
   - Click Web icon (`</>`)
   - Register app name: "Gameboxd Web"
   - Copy the config object
7. Update Firebase configs:
   - `gameboxd-web/src/config/firebase.js`
   - `gameboxd-mobile/src/config/firebase.js`

### 5. Start Development Servers

#### Terminal 1 - Backend
```bash
cd gameboxd-backend
npm start
# Server runs on http://localhost:5000
```

#### Terminal 2 - Web App
```bash
cd gameboxd-web
npm run dev
# App runs on http://localhost:3000
```

#### Terminal 3 - Mobile App
```bash
cd gameboxd-mobile
npm start
# Opens Expo DevTools
# Press 'a' for Android, 'i' for iOS, 'w' for web
```

### 6. Test API with Postman

1. Open Postman
2. Create a new collection: "Gameboxd API"
3. Set base URL: `http://localhost:5000/api`
4. Test endpoints:
   - `GET /` - Should return "Gameboxd API running"
   - `POST /auth/register` - Register a test user
   - `POST /auth/login` - Login with test user

### 7. VS Code Setup

Install recommended extensions:
- Prettier
- ESLint
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- REST Client
- DotENV

### 8. Git Configuration

```bash
# Set up your git config
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Create feature branch
git checkout -b feature/your-feature-name
```

## Troubleshooting

### Backend won't start
- Check if MongoDB connection string is correct
- Ensure port 5000 is not in use
- Check `.env` file exists and has correct values

### Web app won't start
- Run `npm install` again
- Clear `.next` folder: `rm -rf .next`
- Check Node.js version: `node -v` (should be 18+)

### Mobile app won't start
- Install Expo CLI globally: `npm install -g expo-cli`
- Clear cache: `expo start -c`
- Check if Android Studio/emulator is running (for Android)

### Firebase errors
- Verify Firebase config is correct
- Check if Email/Password auth is enabled
- Ensure project ID matches in both config files

## Next Steps

1. Implement authentication endpoints
2. Create database models
3. Build UI components
4. Set up navigation
5. Connect frontend to backend

