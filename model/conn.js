const mongoose= require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/urlshortner",{})
.then( ()=> {return console.log("database connection successful")})
.catch((err)=>{ return console.log("datbase NOT connected: ", err)});