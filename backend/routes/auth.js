import express, { request, response } from 'express';
import { User } from '../modals/User.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const router=express.Router()


//SignUp
router.post("/signup",async(req,res)=>{
    try {
        const {username,email,password}=req.body;
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hashSync(password,salt)
        const newUser= new User({username,email,password:hashed})
        const saveUser=await newUser.save();
        res.status(200).json(saveUser);
    } catch (error) {
        res.status(500).json(error);
    }
})



//Login
router.post("/login", async (req, res) => {
    try {
        console.log(req.body);
        const user = await User.findOne({email: req.body.email});
        if (!user) {
            return res.status(404).json("user not found");
        }
        const match = await bcrypt.compare(req.body.password, user.password);        
        if (!match) {
            return res.status(401).json("wrong credentails!");
        }
        const token=jwt.sign({id:user._id,username:user.username,email:user.email},process.env.SECRET,{expiresIn:"3d"});
        const {password,...info}=user._doc;
        res.cookie("token",token).status(200).json(info);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json(error);
    }
});





//Logout
router.get("/logout",async (req,res)=>{
    try {
        res.clearCookie("token",{sameSite:"none",secure:true}).status(200).send("User logged out");
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json(error);
    }
})
//REFETCH USER

router.get("/refetch",async (req,res)=>{
    const token=req.cookies.token
    jwt.verify(token,process.env.SECRET,{},async(err,data)=>{
        if (err){
            return res.status(404).json(err);
        }
        res.status(200).json(data);
    })
})
export default router