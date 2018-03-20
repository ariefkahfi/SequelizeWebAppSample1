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
    getBussesWithoutDriver(){
        return dbModel
            .getSequelize()
            .query(
                "select b.* from bus b " +
                "left join driver d " +
                "on b.bus_id = d.bus_id " +
                "where d.bus_id is null "
            )
    }
}

module.exports = BusModel;