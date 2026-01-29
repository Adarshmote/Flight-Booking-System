// backend/routes/bookingRoutes.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth.middleware');
const {
  createBooking,
  getUserBookings
} = require('../controllers/bookingController');

router.post('/', authMiddleware, createBooking);
router.get('/my', authMiddleware, getUserBookings);

module.exports = router;
