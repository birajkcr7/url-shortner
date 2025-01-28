const express= require("express");
const router = express.Router();
const url = require("../model/url");
const {NewShortURL,urlById,visitAnalytics} = require("../controller/urlController.js")

router.route("/url").get( async(req,res)=>{
    console.log("welcome to url Shortner");
    const allUrl =  await url.find({})
    res.render("home",{
        urls: allUrl,
    });

}).post( NewShortURL);

router.get("/url/:shortId", urlById);
router.get("/url/analytic/:shortId", visitAnalytics);



module.exports = router;