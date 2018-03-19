const path = require("path");
const BusModel = require("../models/bus-model");

class BusRouter {
    constructor(){
        this.router = require("express").Router();
        this.initAllRouters();
        this.busModel = new BusModel();
    }
    initAllRouters(){
        this.router.get("/",(req,res)=>{
            res.render(path.join("bus","bus-form"),{title: "Add new bus" , main_content_title: "Form Content"}) 
        });
        this.router.post("/",(req,res)=>{
            console.log(req.body);
            this.busModel.saveBus(req.body)
                .then(result=>{
                    console.log(result);
                    res.redirect("back");
                }).catch(err=>{
                    console.error(err);
                    res.sendStatus(500);
                })
        });
    }
}

module.exports = BusRouter;