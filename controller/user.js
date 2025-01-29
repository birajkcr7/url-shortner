const user = require("../model/users");
const { v4: uuidv4} = require("uuid");
const {setUser, getUser} = require("../service/auth");


// for SIGNUP
const signUpPostreq = async(req,res) => {
    const {name ,email,password} = req.body;
    await user.create({
        name,
        email,
        password,
    });
    return res.redirect("/url");
};

const signUpGetreq = async(req,res) => {
    return res.render("signup");
}

// FOR LOGIN
const loginPostreq  = async (req,res) => {
   const {email, password} =req.body;
   const userFound = await user.findOne({email, password});
   if(!userFound) {
    console.log("errorr username password")
    return res.render("login",{
        error : "invalid usersname and password"
   });
}
    const sessionId = uuidv4()
    setUser(sessionId, userFound);
    res.cookie('uid', sessionId);
    return res.redirect("/url");
}

const loginGetreq  = async (req,res)=>{
    return res.render("login");
}


module.exports = {signUpPostreq,signUpGetreq,loginPostreq,loginGetreq};