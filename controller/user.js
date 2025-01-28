const user = require("../model/users");


// for SIGNUP
const signUpPostreq = async(req,res) => {
    const {name ,email,password} = req.body;
    await user.create({
        name,
        email,
        password,
    });
    return res.render("home");
};

const signUpGetreq = async(req,res) => {
    return res.render("signup");
}

// FOR LOGIN
const loginPostreq  = async (req,res)=>{
   const {email, password} =req.body;
   const user = await user.findOne({email, password});
   if(!user) return res.render("login",{
        error : "invalid usersname and password"
   });
    return res.render("home")
}

const loginGetreq  = async (req,res)=>{
    return res.render("login");
}


module.exports = {signUpPostreq,signUpGetreq,loginPostreq,loginGetreq};