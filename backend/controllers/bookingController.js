const Booking = require('../models/Booking');

/**
 * @desc   Create a booking
 * @route  POST /bookings
 * @access Private (JWT)
 */
const createBooking = async (req, res) => {
  try {
    const { flightId, selectedSeats, totalPrice } = req.body;

    if (!flightId || !selectedSeats || !totalPrice) {
      return res.status(400).json({ message: 'Missing booking data' });
    }

    const booking = await Booking.create({
      userId: req.user.id,      // 🔥 from token (secure)
      flightId: flightId,
      selectedSeats: selectedSeats,
      totalPrice: totalPrice
    });

    res.status(201).json({
      success: true,
      booking
    });

  } catch (error) {
    console.error('Create booking error:', error);
    res.status(500).json({ message: 'Booking failed' });
  }
};


/**
 * @desc   Get bookings of logged-in user
 * @route  GET /bookings/my
 * @access Private (JWT)
 */
const getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking
      .find({ userId: req.user.id })
      .populate('flightId');  // populate flight details

    res.json({
      success: true,
      bookings
    });

  } catch (error) {
    console.error('Get bookings error:', error);
    res.status(500).json({ message: 'Failed to fetch bookings' });
  }
};

module.exports = {
  createBooking,
  getUserBookings
};
