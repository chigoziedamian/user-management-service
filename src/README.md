# User Service

This is a user management service for an online learning platform built with Node.js and MongoDB.

## Features

- User registration
- User login
- User profile retrieval
- JWT authentication

## Installation

1. Clone the repository
bash git clone <repository-url> cd user-service


2. Install dependencies
bash npm install


3. Create a `.env` file in the root directory and add your MongoDB URI and JWT secret:
plaintext MONGODB_URI=mongodb://localhost:27017/user-service JWT_SECRET=your_jwt_secret_key PORT=5000


4. Start the server
bash npm start


5. For development, you can use:
bash npm run dev

## API Endpoints

- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Log in an existing user
- `GET /api/users/profile` - Get the logged-in user's profile (requires authentication)

## License

This project is licensed under the MIT License.