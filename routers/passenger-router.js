const path = require("path");

class PassengerRouter {
    constructor(){
        this.router = require("express").Router();
        this.initAllRouters();
    }
    initAllRouters(){
        this.router.get("/",(req,res)=>{
            res.render(path.join("passenger","passenger-form"),{
                title:"Add new passenger",
                main_content_title: "Form Content"
            });
        });

        this.router.post("/",(req,res)=>{
            res.send("NOT IMPLEMENTED YET !!!");
        });
    }
}
module.exports = PassengerRouter;