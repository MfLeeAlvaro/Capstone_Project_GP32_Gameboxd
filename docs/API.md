# Gameboxd API Documentation

## Base URL
```
http://localhost:5000/api
```

## Authentication Endpoints

### Register
```
POST /auth/register
Body: {
  "email": "user@example.com",
  "password": "password123",
  "username": "username"
}
```

### Login
```
POST /auth/login
Body: {
  "email": "user@example.com",
  "password": "password123"
}
Response: {
  "token": "jwt_token_here",
  "user": { ... }
}
```

## Games Endpoints

### Get All Games
```
GET /games
```

### Get Game by ID
```
GET /games/:id
```

## Reviews Endpoints

### Get All Reviews
```
GET /reviews
```

### Create Review
```
POST /reviews
Headers: Authorization: Bearer <token>
Body: {
  "gameId": "game_id",
  "rating": 5,
  "comment": "Great game!"
}
```

## Activity Endpoints

### Get Activity Feed
```
GET /activity
```

