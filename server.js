const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const publicDir = path.join(__dirname,"assets");

app.use(bodyParser.urlencoded({
    extended:true
}));

app.use("/static",express.static(publicDir));
app.set("views",path.join(__dirname,"views"));
app.set("view engine","pug");

app.get("/",(req,res)=>{
    res.render("index",{title: "Index Page", main_content_title:"Home Content"});
});

const BusRouter = require("./routers/bus-router");
const PassengerRouter = require("./routers/passenger-router");

app.use("/passenger",new PassengerRouter().router);
app.use("/bus",new BusRouter().router);

app.listen(9600,()=>{
    console.log("listening on port 9600");
})


