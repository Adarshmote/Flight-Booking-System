require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db'); // MongoDB connection

const app = express();

/* -------------------- Middleware -------------------- */

// Enable CORS
app.use(cors());

// Body parsing (Express has this built-in; body-parser NOT needed)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* -------------------- Database -------------------- */

connectDB();

/* -------------------- Routes -------------------- */

app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/flights', require('./routes/flight.routes'));
app.use('/api/bookings', require('./routes/booking.routes'));

/* -------------------- Health Check -------------------- */

app.get('/', (req, res) => {
  res.status(200).send('Flight Booking API is running');
});

/* -------------------- 404 Handler -------------------- */

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

/* -------------------- Global Error Handler -------------------- */

app.use((err, req, res, next) => {
  console.error('Global error:', err);
  res.status(500).json({
    message: 'Internal server error'
  });
});

/* -------------------- Server -------------------- */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
