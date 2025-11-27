# Gameboxd Mobile App

React Native mobile application built with Expo.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+)
- npm or yarn
- Expo Go app on your phone (for testing) OR Android Studio / Xcode (for emulator)

### Installation

Dependencies are already installed. If you need to reinstall:

```bash
npm install
```

### Running the App

```bash
# Start the Expo development server
npm start

# Or use specific platforms
npm run android    # Android emulator/device
npm run ios        # iOS simulator/device
npm run web        # Web browser
```

### Development

1. **Start the backend server first** (from `gameboxd-backend` folder)
2. **Start the mobile app** (from this folder)
3. Scan the QR code with Expo Go app, or press:
   - `a` for Android emulator
   - `i` for iOS simulator
   - `w` for web browser

### Project Structure

```
gameboxd-mobile/
│── src/
│   ├── screens/          # Screen components
│   ├── components/       # Reusable components
│   ├── navigation/       # Navigation configuration
│   ├── api/              # API client and endpoints
│   ├── context/          # React Context providers
│   └── config/           # Configuration files (Firebase, etc.)
│── assets/               # Images, fonts, etc.
│── App.js                # Main app component
│── app.json              # Expo configuration
│── package.json
```

### Configuration

1. **Firebase Setup:**
   - Update `src/config/firebase.js` with your Firebase config
   - Get config from [Firebase Console](https://console.firebase.google.com/)

2. **API Configuration:**
   - Update `src/api/client.js` with your backend API URL
   - Default: `http://localhost:5000/api`

### Troubleshooting

- **Clear cache:** `npm run clear` or `expo start -c`
- **Reset Metro bundler:** Stop server and restart
- **Android emulator not starting:** Make sure Android Studio is running
- **iOS simulator issues:** Make sure Xcode is installed

### Next Steps

1. Set up Firebase authentication
2. Create navigation structure
3. Build home screen
4. Connect to backend API
5. Implement game detail screens

