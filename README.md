# Dollo-Express-ApiDollo-Express-Api

A RESTful API built with Node.js, Express, TypeScript, and Supabase.

Features

- User signup and login
- Supabase authentication
- Bearer token authentication
- Create tasks
- Get all tasks
- Get a single task
- Update tasks
- Delete tasks
- Basic error handling
- TypeScript type safety

Tech Stack

- Node.js
- Express
- TypeScript
- Supabase
- dotenv
- Thunder Client
- Jest

Project Structure

src/
├── config/
│   └── supabase.ts
├── controllers/
│   ├── auth.ts
│   └── tasks.ts
├── middleware/
│   └── auth.ts
├── routes/
│   ├── auth.ts
│   └── tasks.ts
├── services/
│   └── tasks.ts
├── types/
│   └── task.ts
└── app.ts

Environment Variables

Create a ".env" file in the project root:

SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
PORT=3000

Do not commit your real ".env" file or secret values to GitHub.

Installation

Install the project dependencies:

npm install

Development

Start the development server:

npm run dev

The API runs on:

http://localhost:3000

Build

Compile the TypeScript project:

npm run build

Start

Run the compiled application:

npm start

Authentication

The API uses Supabase Authentication.

Signup

POST /api/auth/signup

Example body:

{
  "email": "your-email@example.com",
  "password": "your-password"
}

Login

POST /api/auth/login

Example body:

{
  "email": "your-email@example.com",
  "password": "your-password"
}

Login returns an access token.

Protected task requests must include:

Authorization: Bearer <access_token>

Task API

All task endpoints require authentication.

Get all tasks

GET /api/tasks

Get one task

GET /api/tasks/:id

Create a task

POST /api/tasks

Example body:

{
  "title": "Learn Express API",
  "description": "Practice REST API development"
}

Update a task

PUT /api/tasks/:id

Example body:

{
  "title": "Updated Task",
  "description": "Updated description",
  "completed": true
}

Delete a task

DELETE /api/tasks/:id

API Testing

The API was tested using Thunder Client.

The following operations have been tested successfully:

- Signup
- Login
- Authentication with Bearer token
- Create task
- Get tasks
- Get a task by ID
- Update task
- Delete task
- Invalid request handling
- Invalid or expired token handling

Authentication Flow

User
  ↓
Signup / Login
  ↓
Supabase Auth
  ↓
Access Token
  ↓
Bearer Token
  ↓
Authentication Middleware
  ↓
Task Controller
  ↓
Task Service
  ↓
Supabase

License

This project is for learning and development purposes.