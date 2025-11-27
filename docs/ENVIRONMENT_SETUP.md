# Environment Setup Guide for Team Level Up

**⚠️ Important Note:** This setup guide is designed for the GameBoxd project. Due to different operating systems, hardware configurations, and software versions, **some steps may not work exactly as described on your device**. If you encounter issues, please refer to the troubleshooting section or contact the team.

---

## 📋 Prerequisites Checklist

Before starting, make sure you have:
- [ ] Administrator/Admin access to your computer
- [ ] Stable internet connection
- [ ] At least 10GB free disk space
- [ ] Your GitHub account credentials
- [ ] Access to Firebase Console (team will provide)
- [ ] Access to MongoDB Atlas (team will provide)

---

## 🛠️ Required Software Installation

### 1. Node.js (v18 or higher)

**Why:** Needed for all parts of the project (mobile, web, backend)

**Installation:**

**Windows:**
1. Go to [nodejs.org](https://nodejs.org/)
2. Download the LTS version (v18 or higher)
3. Run the installer
4. Check "Add to PATH" during installation
5. Restart your terminal/command prompt

**macOS:**
```bash
# Using Homebrew (recommended)
brew install node@18

# Or download from nodejs.org
```

**Linux (Ubuntu/Debian):**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

**Verify Installation:**
```bash
node -v    # Should show v18.x.x or higher
npm -v     # Should show 9.x.x or higher
```

**⚠️ Troubleshooting:**
- If `node` command not found, restart your terminal
- If version is too old, uninstall and reinstall
- On Windows, you may need to restart your computer

---

### 2. Git

**Why:** Version control for collaboration

**Installation:**

**Windows:**
1. Download from [git-scm.com](https://git-scm.com/download/win)
2. Run installer
3. Use default options (Git Bash, Git GUI, etc.)
4. Choose "Git from the command line and also from 3rd-party software"

**macOS:**
```bash
# Git usually comes pre-installed, but if not:
brew install git
```

**Linux:**
```bash
sudo apt-get update
sudo apt-get install git
```

**Verify Installation:**
```bash
git --version
```

**Configure Git:**
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

**⚠️ Troubleshooting:**
- If git command not found, add Git to your PATH
- On Windows, use Git Bash instead of Command Prompt if issues occur

---

### 3. VS Code (Recommended Editor)

**Why:** Best editor for our tech stack with great extensions

**Installation:**
1. Download from [code.visualstudio.com](https://code.visualstudio.com/)
2. Install with default options
3. Install recommended extensions (see below)

**Required Extensions:**
- Prettier - Code formatter
- ESLint - JavaScript linter
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- REST Client
- DotENV

**⚠️ Note:** Some extensions may not be available or work differently on your system

---

### 4. MongoDB Compass (Optional but Recommended)

**Why:** Visual database GUI for viewing data

**Installation:**
1. Download from [mongodb.com/try/download/compass](https://www.mongodb.com/try/download/compass)
2. Install with default options
3. Connect using MongoDB Atlas connection string (team will provide)

**⚠️ Troubleshooting:**
- May require specific MongoDB version on your system
- Some features may be limited on older operating systems

---

### 5. Postman (API Testing)

**Why:** Test backend API endpoints

**Installation:**
1. Download from [postman.com/downloads](https://www.postman.com/downloads/)
2. Create a free account
3. Import the team's API collection (will be provided)

**⚠️ Note:** Postman may have different UI on different operating systems

---

### 6. Android Studio (For Mobile Testing - Optional)

**Why:** Run Android emulator for mobile app testing

**Installation:**
1. Download from [developer.android.com/studio](https://developer.android.com/studio)
2. Install Android Studio
3. Install Android SDK (through Android Studio)
4. Create an Android Virtual Device (AVD)

**⚠️ Important:**
- Requires significant disk space (10GB+)
- May not work on older hardware
- Windows users: Enable virtualization in BIOS
- macOS users: May need to allow in Security settings
- Linux users: May need additional packages

**System Requirements:**
- 8GB RAM minimum (16GB recommended)
- Intel/AMD processor with virtualization support
- 10GB free disk space

**⚠️ Troubleshooting:**
- If emulator is slow, try using a physical device with Expo Go app
- Virtualization must be enabled in BIOS (Windows/Linux)
- Some older CPUs don't support virtualization

---

### 7. Firebase Console Access

**Why:** Authentication and configuration

**Setup:**
1. Team lead will add you to Firebase project
2. Go to [console.firebase.google.com](https://console.firebase.google.com/)
3. Accept invitation to "Gameboxd" project
4. Get Firebase config (will be provided)

**⚠️ Note:** You need Google account access

---

## 🚀 Project Setup

### Step 1: Clone the Repository

```bash
# Navigate to where you want the project
cd ~/Documents  # or C:\Users\YourName\Documents on Windows

# Clone the repository
git clone https://github.com/MfLeeAlvaro/Capstone_Project_GP32_Gameboxd.git

# Navigate into project
cd Capstone_Project_GP32_Gameboxd
```

**⚠️ Troubleshooting:**
- If clone fails, check internet connection
- If permission denied, check GitHub access
- On Windows, use Git Bash if Command Prompt has issues

---

### Step 2: Backend Setup

```bash
# Navigate to backend folder
cd gameboxd-backend

# Install dependencies
npm install

# This may take 2-5 minutes depending on your internet speed
```

**⚠️ Common Issues:**
- **npm ERR! network timeout**: Check internet, try again
- **npm ERR! permission denied**: 
  - Windows: Run terminal as Administrator
  - macOS/Linux: Use `sudo npm install` (not recommended) or fix npm permissions
- **node-gyp errors**: Install build tools:
  - Windows: Install Visual Studio Build Tools
  - macOS: `xcode-select --install`
  - Linux: `sudo apt-get install build-essential`

**Create Environment File:**
```bash
# Copy the template
cp env.template .env

# Edit .env with your MongoDB connection string
# Team will provide the connection string
```

**Start Backend:**
```bash
npm start
# Should see: "Server running on port 5000"
```

**⚠️ Troubleshooting:**
- Port 5000 already in use: Change PORT in .env file
- MongoDB connection fails: Check connection string and internet
- Module not found: Delete `node_modules` and `package-lock.json`, run `npm install` again

---

### Step 3: Web App Setup

```bash
# Navigate to web folder (from project root)
cd gameboxd-web

# Install dependencies
npm install

# This may take 3-5 minutes
```

**Configure Firebase:**
1. Open `src/config/firebase.js`
2. Replace placeholder values with actual Firebase config
3. Team will provide Firebase credentials

**Start Web App:**
```bash
npm run dev
# Should see: "Ready in X seconds"
# Open http://localhost:3000 in browser
```

**⚠️ Common Issues:**
- **Port 3000 in use**: Kill the process or use different port: `npm run dev -- -p 3001`
- **Module not found**: Delete `node_modules` and reinstall
- **Build errors**: Check Node.js version (needs v18+)
- **Firebase errors**: Verify Firebase config is correct

---

### Step 4: Mobile App Setup

```bash
# Navigate to mobile folder (from project root)
cd gameboxd-mobile

# Install dependencies
npm install

# This may take 5-10 minutes (Expo has many dependencies)
```

**Configure Firebase:**
1. Open `src/config/firebase.js`
2. Replace placeholder values with actual Firebase config

**Start Mobile App:**
```bash
npm start
# This opens Expo DevTools in browser
```

**Run on Device/Emulator:**
- Press `a` for Android emulator (requires Android Studio)
- Press `i` for iOS simulator (macOS only, requires Xcode)
- Press `w` for web browser
- Scan QR code with Expo Go app on your phone

**⚠️ Common Issues:**
- **Expo CLI deprecated warning**: This is normal, use `npx expo` commands
- **Android emulator not starting**: 
  - Check Android Studio is installed
  - Enable virtualization in BIOS (Windows)
  - Try using physical device with Expo Go app instead
- **iOS simulator issues**: 
  - Requires macOS and Xcode
  - Windows/Linux users: Use Android or web version
- **Metro bundler errors**: 
  - Clear cache: `npm run clear` or `expo start -c`
  - Delete `node_modules` and reinstall
- **Port conflicts**: Expo uses multiple ports, close other apps

---

## 🔧 Device-Specific Issues

### Windows Issues

**Common Problems:**
- PowerShell vs Command Prompt differences
- Path length limitations
- Antivirus blocking Node.js
- Permission issues

**Solutions:**
- Use Git Bash for consistency
- Run terminal as Administrator if needed
- Add Node.js to antivirus exceptions
- Use Windows Subsystem for Linux (WSL) if issues persist

### macOS Issues

**Common Problems:**
- Permission denied errors
- Xcode command line tools missing
- Homebrew not installed

**Solutions:**
- Install Xcode command line tools: `xcode-select --install`
- Use Homebrew for package management
- Fix npm permissions: `sudo chown -R $(whoami) ~/.npm`

### Linux Issues

**Common Problems:**
- Missing build tools
- Permission issues
- Different package managers

**Solutions:**
- Install build essentials: `sudo apt-get install build-essential`
- Use `sudo` carefully (prefer fixing permissions)
- Check your distribution's package manager

---

## ✅ Verification Checklist

After setup, verify everything works:

- [ ] `node -v` shows v18 or higher
- [ ] `npm -v` shows version
- [ ] `git --version` works
- [ ] Backend starts on port 5000
- [ ] Web app opens on port 3000
- [ ] Mobile app starts (Expo DevTools opens)
- [ ] Can connect to MongoDB Atlas
- [ ] Firebase config is set up

---

## 🆘 Getting Help

### If Something Doesn't Work:

1. **Check Error Messages**: Read the full error, not just the first line
2. **Check Versions**: Make sure Node.js, npm, and other tools are correct versions
3. **Check Internet**: Some installations require internet
4. **Check Permissions**: Make sure you have admin/root access if needed
5. **Check Documentation**: Refer to official docs for each tool
6. **Ask the Team**: 
   - Share the full error message
   - Share your operating system and version
   - Share what you've already tried

### Common Solutions:

**"Command not found"**
- Restart terminal
- Check PATH environment variable
- Reinstall the software

**"Permission denied"**
- Use `sudo` (Linux/macOS) or run as Administrator (Windows)
- Fix file permissions

**"Port already in use"**
- Find and kill the process using the port
- Use a different port

**"Module not found"**
- Delete `node_modules` folder
- Delete `package-lock.json`
- Run `npm install` again

**"Network timeout"**
- Check internet connection
- Try again later
- Use different network if possible

---

## 📝 Notes

- **Different devices may have different issues** - this is normal
- **Some steps may need to be adapted** for your specific system
- **Don't hesitate to ask for help** - setup issues are common
- **Take your time** - don't rush through the setup

---

## 🎯 Next Steps After Setup

Once everything is working:

1. Read the [README.md](../README.md) for project overview
2. Review [SETUP_GUIDE.md](SETUP_GUIDE.md) for detailed setup
3. Check [SOFTWARE_REQUIREMENTS_ANALYSIS.md](SOFTWARE_REQUIREMENTS_ANALYSIS.md) for requirements
4. Join team communication channels
5. Start working on assigned tasks

---

## 📞 Contact

If you encounter issues that aren't covered here:
- Check team Slack/Discord
- Contact team lead
- Create an issue in GitHub repository

**Remember:** Setup issues are common and solvable. Don't get discouraged! 💪

---

*Last Updated: November 2025*  
*Team Level Up - GameBoxd Project*

