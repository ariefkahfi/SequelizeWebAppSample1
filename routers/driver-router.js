const path = require("path");

class DriverRouter{
    constructor(){
        this.router = require("express").Router();
        this.initAllRouters();
    }
    initAllRouters() {
        this.router.get("/",(req,res)=>{
            res.render(path.join("driver","driver-form"),{
                title:"Add new Driver",
                main_content_title:"Form Content"
            })
        });
        this.router.post("/",(req,res)=>{
            res.send("NOT IMPLEMENTED YET");
        });
    }
}

module.exports = DriverRouter;