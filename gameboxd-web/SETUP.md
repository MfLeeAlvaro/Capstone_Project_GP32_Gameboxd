# Gameboxd Web App Setup Guide

## Quick Start

### 1. Install Dependencies
```bash
cd gameboxd-web
npm install
```

### 2. Configure Firebase

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your "Gameboxd" project (or create one)
3. Go to Project Settings (gear icon)
4. Scroll to "Your apps" section
5. Click the Web icon (`</>`)
6. Register your app (name it "Gameboxd Web")
7. Copy the Firebase configuration object

8. Update `src/config/firebase.js`:
```javascript
export const firebaseConfig = {
  apiKey: "your-api-key-here",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id"
};
```

### 3. Configure Environment Variables (Optional)

Create `.env.local` in the `gameboxd-web` folder:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

This tells the web app where your backend API is running.

### 4. Start the Development Server

```bash
npm run dev
```

The app will be available at: **http://localhost:3000**

## Available Scripts

- `npm run dev` - Start development server (with hot reload)
- `npm run build` - Build for production
- `npm run start` - Start production server (after build)
- `npm run lint` - Run ESLint

## Project Structure

```
gameboxd-web/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── src/
│   ├── components/        # React components
│   ├── config/            # Configuration files (Firebase, etc.)
│   ├── api/               # API client
│   └── hooks/             # Custom React hooks
├── public/                # Static assets
└── package.json
```

## Troubleshooting

### Port 3000 already in use
```bash
# Use a different port
npm run dev -- -p 3001
```

### Firebase errors
- Make sure Email/Password authentication is enabled in Firebase Console
- Verify your Firebase config is correct
- Check browser console for specific error messages

### API connection issues
- Make sure backend is running on port 5000
- Check `NEXT_PUBLIC_API_URL` in `.env.local`
- Verify CORS is enabled in backend

## Next Steps

1. Create your first page in `app/` directory
2. Build components in `src/components/`
3. Connect to backend API using `src/api/client.js`
4. Set up authentication with Firebase

