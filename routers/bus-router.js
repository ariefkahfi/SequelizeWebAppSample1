const path = require("path");

class BusRouter {
    constructor(){
        this.router = require("express").Router();
        this.initAllRouters();
    }
    initAllRouters(){
        this.router.get("/",(req,res)=>{
            res.render(path.join("bus","bus-form"),{title: "Add new bus" , main_content_title: "Form Content"}) 
        });
        this.router.post("/",(req,res)=>{
            res.end("NOT IMPLEMENTED YET !!!");
        });
    }
}

module.exports = BusRouter;