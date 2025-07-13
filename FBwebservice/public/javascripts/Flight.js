var Flight = {};

//bean class of Flight

var Flight = function (flightId, aircraftName, ticketCost, availableSeats, status) {
    this.flightId = flightId;
    this.aircraftName = aircraftName;
    this.ticketCost = this.ticketCost;
    this.availableSeats = availableSeats;
    this.status = status;
}

Flight.toObject = function (result) {
    return new Flight(result.flightId, result.aircraftName, result.ticketCost, result.availableSeats, result.status);
}


module.exports = Flight;