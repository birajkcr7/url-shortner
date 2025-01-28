const express = require("express")
const app = express();
const path = require("path");

const port = process.env.PORT || 8000;
require("./model/conn");
require("dotenv").config();

const routes= require("./routes/url");
// const userRoute = require("./routes/user");   because of middleware problem
// const staticRoute = require("./routes/staticRouter");

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use("/",routes);

app.listen(port, (err)=>{
    console.log(`listening to the port ${port}`);
})