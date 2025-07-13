var express = require('express');
var routing = express.Router();
var FlightBookingBL = require('../public/javascripts/FlightBookingBL');
var FlightBooking = require('../public/javascripts/FlightBooking');

// ✅ BOOK FLIGHT
routing.post('/bookFlight', function (req, res, next) {
    var flightBooking = FlightBooking.toObject(req.body);
    FlightBookingBL.bookFlight(flightBooking).then(function (bookingId) {
        res.json({ "message": "Flight booking is successful with booking Id :" + bookingId });
    }).catch(function (err) {
        next(err);
    })
});

// ✅ VIEW BOOKING BY ID
routing.get('/viewBooking/:id', function (req, res, next) {
    FlightBookingBL.retrieveBooking(req.params.id).then(function (flight) {
        res.json({ "message": "Details found successfully for booking Id: " + flight.bookingId, "bean": flight });
    }).catch(function (err) {
        next(err);
    })
});

// ✅ GET ALL BOOKING IDs
routing.get('/getallId', function (req, res, next) {
    FlightBookingBL.getAllBookingId().then(function (bookings) {
        res.json(bookings);
    }).catch(function (err) {
        next(err);
    })
});

// ✅ DELETE BOOKING
routing.delete('/delete/:id', function (req, res, next) {
    var id = parseInt(req.params.id);
    FlightBookingBL.deleteBooking(id).then(function (response) {
        if (response.result.n > 0) {
            res.json({ "message": "Successfully deleted Id: " + id });
        } else {
            throw new Error("Sorry Cannot delete Id: " + id);
        }
    }).catch(function (err) {
        next(err);
    });
});


// ✅ ✅ NEW ROUTES ADDED BELOW ⬇️

// ✅ GET ALL FLIGHTS (dummy data for now)
routing.get('/flights', function (req, res, next) {
    const flights = [
        { id: 'FL-101', AircraftName: 'IndiGo', fare: 4500, availableSeats: 20, status: 'Active' },
        { id: 'FL-102', AircraftName: 'Air India', fare: 5500, availableSeats: 15, status: 'Cancelled' },
        { id: 'FL-103', AircraftName: 'SpiceJet', fare: 3900, availableSeats: 10, status: 'Active' }
    ];
    res.json(flights);
});

// ✅ GET ALL BOOKINGS (dummy data for now)
// ✅ Get all bookings
routing.get('/bookings', function (req, res, next) {
  FlightBookingBL.getAllBookings().then(function (bookings) {
    res.json(bookings);
  }).catch(function (err) {
    next(err);
  });
});



module.exports = routing;