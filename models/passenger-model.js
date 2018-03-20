const DBModel = require("./db-model");
const BusModel = require("./bus-model");

const dbModel = new DBModel();
const busModel = new BusModel();

class PassengerModel {
    savePassenger(passenger){
        return dbModel.Passenger.create(passenger)
    }
    savePassengerAndSetBus(passenger,bus_id){
        let sPassenger = await this.savePassenger(passenger);
        let getBusById = await busModel.getBusById(bus_id);
        return sPassenger.setBus(getBusById)
    }
    getPassengers(){
        return dbModel.Passenger.findAll()
    }
    getPassengerById(passenger_id){
        return dbModel.Passenger.findById(passenger_id)
    }
}

module.exports = PassengerModel;