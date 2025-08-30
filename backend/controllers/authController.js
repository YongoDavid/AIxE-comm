import { User }  from "../models/userModel.js";
import bycryptjs from 'bcryptjs';
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
import sendVerificationEmail from "../mailtrap/emails.js"
export const Signup = async (req,res)=> {
    const {email, password, name} = req.body;
    try {
        if(!email, !password, !name){
           throw new Error("All inputs are required");
        }
        const userAlreadyExists = await User.findOne({email});
        if(userAlreadyExists){
            return res.status(400).json({success:false, message: "User already exits"});
        } 

        const hashedPassword = await bycryptjs.hash(password, 10);
        const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();
        const user = new User({
            email,
            password: hashedPassword ,
            name,
            verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000
        })

        await user.save()

        //JWT
        generateTokenAndSetCookie(res,user._id);

        await sendVerificationEmail(user.email, verificationToken)
        res.status(201).json({
            success: true,
            message: "User created successfully",
            user:{
                ...user._doc,
                password: undefined
            }
        }); 
    } catch (error) {
        res.status(400).json({sucess: false, message:"error.message"});
    }
};

export const verifyEmail = async (req,res) => {
    const { code } = req.body;
    try {
        const user = await User.findone({
            verificationToken: code;
            verificationTokenExpiresAt: {$gt: Date.now()}
        })
        if(!user){
            return res.status(400).json({success: false, message: "Invalid oe expired verificatin code "})
        }
        user.isVerified = true;
        user.verifcatiionToken = undefined;
        user.verificationTokenExpireAt = unefined;
        await user.save()
         
    } catch (error) {
        
    }
}
export const Login = async (req,res)=> {
    res.send("login route")
};
export const LogOut = async (req,res)=> {
    res.send("logout route")
};