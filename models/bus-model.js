const DBModel = require("./db-model");

const dbModel = new DBModel();

class BusModel {
    saveBus(bus){
        return dbModel.Bus.create(bus)
    }
    getBusses(){
        return dbModel.Bus.findAll()
    }
    getBusById(bus_id){
        return dbModel.Bus.findById(bus_id)
    }
}

module.exports = BusModel;