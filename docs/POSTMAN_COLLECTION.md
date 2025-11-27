# Postman Collection Setup

## Import Collection

1. Open Postman
2. Click "Import"
3. Create a new collection: "Gameboxd API"

## Environment Variables

Create a new environment: "Gameboxd Local"

Variables:
- `base_url`: `http://localhost:5000/api`
- `token`: (will be set after login)

## Endpoints to Test

### 1. Health Check
```
GET {{base_url}}/
Method: GET
URL: http://localhost:5000/
Expected: "Gameboxd API running"
```

### 2. Register User
```
POST {{base_url}}/auth/register
Method: POST
URL: http://localhost:5000/api/auth/register
Body (JSON):
{
  "email": "test@example.com",
  "password": "password123",
  "username": "testuser"
}
```

### 3. Login
```
POST {{base_url}}/auth/login
Method: POST
URL: http://localhost:5000/api/auth/login
Body (JSON):
{
  "email": "test@example.com",
  "password": "password123"
}
```

After login, save the token:
- Add a test script:
```javascript
if (pm.response.code === 200) {
    var jsonData = pm.response.json();
    pm.environment.set("token", jsonData.token);
}
```

### 4. Get Games
```
GET {{base_url}}/games
Method: GET
URL: http://localhost:5000/api/games
Headers:
  Authorization: Bearer {{token}}
```

### 5. Get Reviews
```
GET {{base_url}}/reviews
Method: GET
URL: http://localhost:5000/api/reviews
Headers:
  Authorization: Bearer {{token}}
```

### 6. Get Activity
```
GET {{base_url}}/activity
Method: GET
URL: http://localhost:5000/api/activity
Headers:
  Authorization: Bearer {{token}}
```

## Testing Workflow

1. Start backend server: `cd gameboxd-backend && npm start`
2. Test health check endpoint
3. Register a new user
4. Login with registered user (token saved automatically)
5. Test protected endpoints with token

