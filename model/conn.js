const mongoose= require("mongoose");

mongoose.connect(process.env.mongoURl,{})
.then( ()=> {return console.log("database connection successful")})
.catch((err)=>{ return console.log("datbase NOT connected: ", err)});