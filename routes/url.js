const express= require("express");
const router = express.Router();
const {NewShortURL,urlById,visitAnalytics} = require("../controller/urlController.js")

router.route("/").get((req,res)=>{
    console.log("welcome to url Shortner")
})
router.post("/url", NewShortURL);

router.get("/:shortId", urlById);
router.get("/analytic/:shortId", visitAnalytics);


module.exports = router;