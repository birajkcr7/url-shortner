const { v4: uuidv4 } = require('uuid');
const url = require("../model/url");

const NewShortURL = async(req,res)=>{
    try {
        const body = req.body;
        // console.log(body, body.url);
        if(!body.url) return res.status(400).json({msg: "url is required."})
        const shortId = uuidv4().slice(0,8); // Generate a random string and take the first 8 characters
        await url.create({
            shortId : shortId,
            redirectURL: body.url,
            visitHistory: [],
        })
        
        return res.json({id: shortId});
    } catch (error) {
        console.log("url not created", error);
    }
};

const urlById = async (req,res) => {
    try {
        const shortId = req.params.shortId;
       const entry = await url.findOneAndUpdate({shortId},
            {$push:{
                visitHistory: {timestamp : date.Now()},
            }
        })

        res.redirect(entry.redirectURL);
    } catch (error) {
        console.log("error getting the url", error);
    }
}

const visitAnalytics = async (req,res) => {
    try {
        const shortId= req.params.shortId;
        const foundUrl = await url.findOne({shortId});
        return res.json({totalclicked :foundUrl.visitHistory.lenght, clickedInFo:foundUrl.visitHistory});
    } catch (error) {
        console.log("error getting the url analytics", error);
    }
    
}

module.exports = {NewShortURL,urlById,visitAnalytics};
