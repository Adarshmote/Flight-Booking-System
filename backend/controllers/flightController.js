const Flight = require('../models/Flight');

// GET ALL FLIGHTS
const getFlights = async (req, res) => {
  try {
    const flights = await Flight.find().sort({ departureTime: 1 });
    res.json(flights);
  } catch (error) {
    console.error('Get flights error:', error);
    res.status(500).json({ message: 'Failed to fetch flights' });
  }
};

// GET FLIGHT BY ID
const getFlightById = async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id);
    if (!flight) return res.status(404).json({ message: 'Flight not found' });
    res.json(flight);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// SEARCH FLIGHTS
const searchFlights = async (req, res) => {
  try {
    let { from, to, date } = req.query;

    if (!from || !to || !date) {
      return res.status(400).json({ message: 'Missing search params' });
    }

    from = from.trim();
    to = to.trim();

    const start = new Date(date);
    start.setUTCHours(0, 0, 0, 0);

    const end = new Date(date);
    end.setUTCHours(23, 59, 59, 999);

    const flights = await Flight.find({
      from,
      to: new RegExp(`^${to}$`, 'i'),
      departureTime: { $gte: start, $lte: end }
    });

    res.json(flights);
  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ message: 'Search failed' });
  }
};

// BOOK SEATS
const bookSeats = async (req, res) => {
  try {
    const { seats } = req.body;

    if (!seats || seats.length === 0) {
      return res.status(400).json({ message: 'No seats selected' });
    }

    const flight = await Flight.findById(req.params.id);
    if (!flight) return res.status(404).json({ message: 'Flight not found' });

    if (flight.seatsAvailable < seats.length) {
      return res.status(400).json({ message: 'Not enough seats available' });
    }

    flight.seatsAvailable -= seats.length;
    await flight.save();

    res.json({ message: 'Seats booked successfully' });
  } catch (error) {
    console.error('Seat booking error:', error);
    res.status(500).json({ message: 'Booking failed' });
  }
};

// ADMIN CRUD
const addFlight = async (req, res) => {
  try {
    const flight = await Flight.create(req.body);
    res.status(201).json(flight);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateFlight = async (req, res) => {
  try {
    const flight = await Flight.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    if (!flight) return res.status(404).json({ message: 'Flight not found' });
    res.json(flight);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteFlight = async (req, res) => {
  try {
    const flight = await Flight.findByIdAndDelete(req.params.id);
    if (!flight) return res.status(404).json({ message: 'Flight not found' });
    res.json({ message: 'Flight deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getFlights,
  getFlightById,
  searchFlights,
  bookSeats,
  addFlight,
  updateFlight,
  deleteFlight
};
