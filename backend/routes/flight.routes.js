const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/flightController');
const authMiddleware = require('../middleware/auth.middleware');
const adminMiddleware = require('../middleware/admin.middleware');

// PUBLIC ROUTES (USER)
router.get('/', ctrl.getFlights);
router.get('/search', ctrl.searchFlights);
router.get('/:id', ctrl.getFlightById);
router.post('/:id/book', authMiddleware, ctrl.bookSeats);

// ADMIN ONLY
router.post('/', authMiddleware, adminMiddleware, ctrl.addFlight);
router.put('/:id', authMiddleware, adminMiddleware, ctrl.updateFlight);
router.delete('/:id', authMiddleware, adminMiddleware, ctrl.deleteFlight);

module.exports = router;
