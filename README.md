✈️ Flight Booking System

A Full-Stack Flight Booking System built using Angular (Frontend) and Node.js + Express (Backend) with MongoDB and JWT Authentication.

This project demonstrates a real-world airline booking workflow with User and Admin roles, CRUD operations, authentication, and RESTful API integration.

📌 Project Overview

This system allows users to search flights, select seats, and book tickets, while admins can manage flight data and monitor system usage.

It is designed as a fresher-friendly full-stack project covering frontend, backend, database, and authentication.

🧱 Technology Stack
Layer	Technology
Frontend	Angular 17+, HTML5, CSS
Backend	Node.js v22, Express.js
Database	MongoDB (NoSQL)
Authentication	JWT (JSON Web Token)
API Testing	Postman
Dev Tools	Nodemon
👥 User Roles & Features
👤 User Functionalities

Register & Login (JWT authentication)

Search available flights

Select flight and choose seats

View booking summary

Confirm booking

Logout

🛠️ Admin Functionalities

(Admin credentials are hardcoded in backend)

Add new flights

Update flight details

Delete flights

View total registered users

View all bookings

🗄️ Database Structure (MongoDB)
Users Collection
{
  "_id": "ObjectId",
  "name": "string",
  "email": "string",
  "password": "hashed string",
  "role": "user",
  "createdAt": "Date"
}

Flights Collection
{
  "_id": "ObjectId",
  "airline": "string",
  "from": "string",
  "to": "string",
  "departureTime": "Date",
  "arrivalTime": "Date",
  "price": "number",
  "seatsAvailable": "number",
  "createdAt": "Date"
}

Bookings Collection
{
  "_id": "ObjectId",
  "userId": "ObjectId",
  "flightId": "ObjectId",
  "selectedSeats": ["A1", "A2"],
  "totalPrice": "number",
  "bookingTime": "Date"
}

✨ Key Features

✔️ View available flights
✔️ Seat selection system
✔️ Ticket booking with summary
✔️ Admin flight management (CRUD)
✔️ JWT-based authentication
✔️ MongoDB data storage
✔️ Form validations
✔️ Error & success notifications
✔️ RESTful API architecture
✔️ Responsive UI

📂 Project Structure
Flight-Booking-System/
│
├── frontend (Angular)
│   ├── components
│   ├── services
│   ├── pages
│   └── guards (auth protection)
│
├── backend (Node + Express)
│   ├── models
│   ├── routes
│   ├── controllers
│   ├── middleware (JWT auth)
│   └── config (DB connection)

⚙️ How to Run the Project
1️⃣ Clone the Repository
git clone <your-repo-link>

2️⃣ Backend Setup
cd backend
npm install
npm start


Runs on 👉 http://localhost:5000

3️⃣ Frontend Setup
cd frontend
npm install
ng start


Runs on 👉 http://localhost:4200

🔐 Authentication Flow

User logs in → Server verifies credentials

JWT token is generated

Token stored in browser (localStorage)

Token sent with protected API requests

Backend middleware verifies token

🎯 Learning Outcomes

This project demonstrates:

Full-stack architecture

Angular component-based design

JWT authentication & middleware

MongoDB schema modeling

REST API design

CRUD operations

Role-based system (User/Admin)