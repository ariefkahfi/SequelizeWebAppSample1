const path = require("path");
const UUID = require("uuid");
const PassengerModel = require("../models/passenger-model");
const BusModel = require("../models/bus-model");

const passengerModel = new PassengerModel();
const busModel = new BusModel();


class PassengerRouter {
    constructor(){
        this.router = require("express").Router();
        this.initAllRouters();
    }
    initAllRouters(){
        this.router.get("/",(req,res)=>{
            busModel.getBusses().then(data=>{
                let jsonString = JSON.stringify(data);
                let jsonParse = JSON.parse(jsonString);

                res.render(path.join("passenger","passenger-form"),{
                    title:"Add new passenger",
                    main_content_title: "Form Content",
                    busses:jsonParse
                });
            }).catch(err=>{
                console.error(err);
                res.sendStatus(500);
            });
        });

        this.router.post("/",(req,res)=>{
            console.log(req.body);
            let passengerId = UUID.v4();
            let passengerName = req.body.p_name;
            let passengerAddr = req.body.p_address;
            let passengerPhone = req.body.p_phone;
            let passengerBusId = req.body.p_bus;
            
            passengerModel.savePassengerAndSetBus({
                passenger_id: passengerId,
                passenger_name: passengerName,
                passenger_address: passengerAddr,
                passenger_phone: passengerPhone
            },passengerBusId)
                .then(()=>{
                    res.redirect("back");
                }).catch(err=>{
                    console.error(err);
                    res.sendStatus(500);
                });

        });
    }
}
module.exports = PassengerRouter;