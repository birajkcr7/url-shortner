const express= require("express");
const router = express.Router();
const url = require("../model/url");
const {NewShortURL,urlById,visitAnalytics} = require("../controller/urlController.js")
const {signUpPostreq, signUpGetreq,loginPostreq, loginGetreq} = require("../controller/user.js");
const {restrictToLoggedInUserOnly} = require("../middleware/midAuth");

// URL ROUTESS
router.route("/url").get( async(req,res)=>{
    console.log("welcome to url Shortner");
    const allUrl =  await url.find({})
    res.render("home",{
        urls: allUrl,
    });
}).post( NewShortURL);

router.get("/url/:shortId", urlById);
router.get("/url/analytic/:shortId", visitAnalytics);

// users ROUTes heere
router.route("/signup").post(signUpPostreq)
    .get( signUpGetreq );

router.route("/login").post(loginPostreq)
    .get( loginGetreq );

module.exports = router;