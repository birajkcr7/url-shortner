const express = require("express")
const app = express();

const port = process.env.PORT || 8000;
require("./model/conn");
require("dotenv").config();
const routes= require("./routes/url");

app.use(express.json());

app.use("/",routes);
// app.use("/analytic/:shortId",routes);

app.listen(port, (err)=>{
    console.log(`listening to the port ${port}`);
})