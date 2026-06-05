# Smart Service Connect

A full-stack MERN marketplace platform that connects users with trusted service providers such as electricians, plumbers, cleaners, tutors, painters, and technicians.

## Features

### User Features
- User Registration & Login
- Browse Service Categories
- Book Services
- View Bookings
- Cancel Bookings

### Provider Features
- Provider Registration & Login
- Add Services
- Manage Services
- View Customer Bookings
- Accept / Reject Bookings

## Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- React Router
- Axios

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication

## Live Demo

Frontend:
https://smart-service-connect.vercel.app

Backend:
https://smart-service-connect-backend.onrender.com

## Installation

### Clone Repository

```bash
git clone https://github.com/Keerthanamanikandan23/smart-service-connect.git
```

### Backend Setup

```bash
cd server
npm install
npm run dev
```

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

## Environment Variables

Create a `.env` file in the server folder:

```env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

Create a `.env` file in the client folder:

```env
VITE_API_URL=http://localhost:5000
```

## Author

Keerthana Manikandan

Final Year Computer Science Engineering Student
