const DBModel = require("./db-model");
const BusModel = require("./bus-model");

const dbModel = new DBModel();
class DriverModel {
    saveDriver(driver){
        return dbModel.Driver.create(driver)
    }
    getDriverById(driver_id){
        return dbModel.Driver.findById(driver_id)
    }
    async saveDriverAndSetBus(driver,bus_id){
        let svDriver = await this.saveDriver(driver);
        let getBus = await dbModel.Bus.findById(bus_id);
        return svDriver.setBus(getBus)
    }
    async deleteDriverById(driver_id){
        let getDriver = await this.getDriverById(driver_id);
        return getDriver.destroy()
    }
    getDrivers(){
        return dbModel.Driver.findAll()
    }
}

module.exports = DriverModel;