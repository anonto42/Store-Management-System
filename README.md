# 🛒 Store Management System

A powerful and secure **Store Management System**. Built with a modern mobile-first tech stack and JWT-based authentication.

## 🚀 Features

- Mobile-first UI using **React Native (Expo)**
- Authentication & Authorization with **JWT** and **AsyncStorage**
- Product & Inventory Management
- Sales Tracking System
- RESTful API backend with **Node.js + Express + TypeScript**
- MongoDB for database

## 🧑‍💻 Tech Stack

**Frontend (Mobile):**
- React Native
- Expo
- React Navigation
- Axios
- AsyncStorage

**Backend (API Server):**
- Node.js
- Express.js
- TypeScript
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)
- dotenv, CORS, bcryptjs

## 📁 Project Structure

```
Store-Management-System/
├── frontend/         ← React Native Expo app
├── backend/          ← Node.js + TypeScript REST API
│   ├── src/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── utils/
│   │   ├── app.ts
│   │   └── server.ts
│   ├── .env
│   ├── package.json
│   └── tsconfig.json
└── README.md
```

## 🛠️ How to Run

### 🔧 Backend Setup

1. Navigate to the backend folder:

```bash
cd backend
npm install
```

2. Rename the `.env.sample` file to `.env` and add your credentials:

```
PORT=
MONGO_URI=
JWT_SECRET=
```

3. Start the server:

```bash
npm run dev
```

### 📱 Frontend Setup

1. Navigate to the frontend folder:

```bash
cd frontend
npm install
```

2.  Rename the `.env.sample` file to `.env` and add your credentials:
```
API_URL=
```

2. Start the app:

```bash
npx expo start
```

Make sure the mobile device is connected to the same network or use Expo Go to test.

## 📡 API Endpoints

| Method | Endpoint          | Description              |
|--------|-------------------|--------------------------|
| POST   | /api/auth/signup  | Register new user        |
| POST   | /api/auth/login   | Login and get token      |
| GET    | /api/products     | Get all products         |
| POST   | /api/products     | Create new product       |
| PUT    | /api/products/:id | Update product           |
| DELETE | /api/products/:id | Delete product           |

## 🔐 Authentication

- JWT stored in mobile using AsyncStorage.
- Access control middleware based on user role.
- Tokens are required for protected routes.

## 🙋‍♂️ Author

**Md Sohidul Islam Ananto**  
Passionate Full-Stack Developer & Tech Enthusiast

GitHub: [anonto42](https://github.com/anonto42)