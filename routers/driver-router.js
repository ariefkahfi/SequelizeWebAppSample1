const path = require("path");
const BusModel = require("../models/bus-model");
const DriverModel = require("../models/driver-model");

const busModel = new BusModel();
const driverModel = new DriverModel();

class DriverRouter{
    constructor(){
        this.router = require("express").Router();
        this.initAllRouters();
    }
    initAllRouters() {
        this.router.get("/",(req,res)=>{
            busModel.getBusses()
                .then(data=>{
                    let jsonString = JSON.stringify(data);
                    let parsedJSON = JSON.parse(jsonString);
                    res.render(path.join("driver","driver-form"),{
                        title:"Add new Driver",
                        main_content_title:"Form Content",
                        busses:parsedJSON
                    });
                })
                .catch(err=>{
                    console.error(err);
                    res.sendStatus(500);
                })
        });
        this.router.post("/",(req,res)=>{
            console.log(req.body);
            let driverId = req.body.driver_id;
            let driverName = req.body.driver_name;
            let busId = req.body.bus_id;
            driverModel.saveDriverAndSetBus({
                driver_id : driverId,
                driver_name : driverName
            },busId).then(()=>{
                res.redirect("back");
            }).catch(err=>{
                console.error(err);
                res.sendStatus(500);
            });
        });
    }
}

module.exports = DriverRouter;