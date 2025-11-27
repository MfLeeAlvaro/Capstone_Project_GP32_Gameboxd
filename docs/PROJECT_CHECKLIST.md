# Gameboxd Project Setup Checklist

## ✅ Installation Checklist

### Required Software
- [ ] Node.js (v18+) installed
- [ ] npm/yarn installed
- [ ] Git installed
- [ ] VS Code installed
- [ ] MongoDB Compass installed
- [ ] Postman installed
- [ ] Android Studio installed (for mobile testing)
- [ ] Firebase account created

### Project Setup
- [ ] Repository cloned
- [ ] Backend dependencies installed (`cd gameboxd-backend && npm install`)
- [ ] Web app dependencies installed (`cd gameboxd-web && npm install`)
- [ ] Mobile app dependencies installed (`cd gameboxd-mobile && npm install`)

### Configuration
- [ ] MongoDB Atlas cluster created
- [ ] MongoDB connection string added to `gameboxd-backend/.env`
- [ ] JWT secret set in `gameboxd-backend/.env`
- [ ] Firebase project created
- [ ] Firebase Email/Password auth enabled
- [ ] Firebase config added to `gameboxd-web/src/config/firebase.js`
- [ ] Firebase config added to `gameboxd-mobile/src/config/firebase.js`
- [ ] API URL set in `gameboxd-web/.env.local` (if needed)

### Development Environment
- [ ] Backend server starts successfully (`cd gameboxd-backend && npm start`)
- [ ] Web app starts successfully (`cd gameboxd-web && npm run dev`)
- [ ] Mobile app starts successfully (`cd gameboxd-mobile && npm start`)
- [ ] Postman collection created
- [ ] API endpoints tested

### VS Code Extensions
- [ ] Prettier installed
- [ ] ESLint installed
- [ ] ES7+ React/Redux/React-Native snippets installed
- [ ] Tailwind CSS IntelliSense installed
- [ ] REST Client installed
- [ ] DotENV installed

### Git Setup
- [ ] Git user name configured
- [ ] Git user email configured
- [ ] Feature branch created for development
- [ ] Branching strategy understood

### CI/CD (Optional - for deployment)
- [ ] Azure account created
- [ ] Azure App Service created for backend
- [ ] Azure Static Web App created for web
- [ ] GitHub secrets configured:
  - [ ] AZURE_WEBAPP_NAME
  - [ ] AZURE_WEBAPP_PUBLISH_PROFILE
  - [ ] AZURE_STATIC_WEB_APPS_API_TOKEN
  - [ ] NEXT_PUBLIC_API_URL

## 🚀 Next Steps

1. **Backend Development**
   - [ ] Implement user authentication (register/login)
   - [ ] Create User model
   - [ ] Create Game model
   - [ ] Create Review model
   - [ ] Implement JWT middleware
   - [ ] Add validation

2. **Web App Development**
   - [ ] Set up routing
   - [ ] Create authentication pages
   - [ ] Create home page with featured games
   - [ ] Create game detail pages
   - [ ] Create review components
   - [ ] Connect to backend API

3. **Mobile App Development**
   - [ ] Set up navigation
   - [ ] Create authentication screens
   - [ ] Create home screen
   - [ ] Create game detail screens
   - [ ] Create review screens
   - [ ] Connect to backend API

4. **Testing**
   - [ ] Unit tests for backend
   - [ ] Integration tests for API
   - [ ] Component tests for web app
   - [ ] Screen tests for mobile app

5. **Deployment**
   - [ ] Backend deployed to Azure
   - [ ] Web app deployed to Azure Static Web App
   - [ ] Mobile app built for production
   - [ ] Environment variables configured in production

## 📝 Notes

- Keep `.env` files in `.gitignore`
- Never commit secrets to repository
- Test locally before pushing to `dev` branch
- Create PRs for code review
- Follow commit message conventions

