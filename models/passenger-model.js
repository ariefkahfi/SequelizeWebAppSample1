const DBModel = require("./db-model");
const BusModel = require("./bus-model");

const dbModel = new DBModel();
class PassengerModel {
    savePassenger(passenger){
        return dbModel.Passenger.create(passenger)
    }

    async savePassengerAndSetBus(passenger,bus_id){
        let sPassenger = await this.savePassenger(passenger);
        let getBusById = await dbModel.Bus.findById(bus_id);
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