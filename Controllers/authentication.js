import {getUser, addUser} from "../Database/authentication.js";
import "dotenv/config.js";
import { validEmail, validPassword } from "../utils/validation.js";
import hash from "../utils/encryption.js";
import jwt from"jsonwebtoken";

export const postLogin = async(req, res)=>{  
    //validate the input
    let {emailId: email, password} = req.body;
    try {
        email = validEmail(email);
        password = validPassword(password); 
    } catch (error) {
        return res.status(400).json({msg:"Provide valid format for Email id or password"});
    }

    let user;
    //check if email exist
    try {
        user = await getUser(email);
    } catch (error) {
        return res.status(400).json({msg:"Email id or password is incorrect"});
    }
    //compare password
    const result = await hash.compareHash(password, user.password);
    if(!result){
        return res.status(400).json({msg:"Email id or password is incorrect"});
    }

    // set JWT
    const token = jwt.sign({emailId: email}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_LIFETIME
    });

    //send login success.
   return res.status(200).json({token: token});
}

export const postSignup = async(req, res)=>{
    //validate the input
    let {emailId: email, password} = req.body;
    try {
        email = validEmail(email);
        password = validPassword(password);  
    } catch (error) {
        return res.status(400).json({msg:error});  
    }

    //fetch user
    try {
        //user exist. Throw error
        const user = await getUser(email);
        return res.status(400).json({msg:"This Email Id is already registered"});
    } catch (error) {
        
    }
    
    //Create user
    let createUser;
    try {
        createUser = await addUser(email, password); 
    } catch (error) {
       return res.status(500).json({msg:error});
    }

    //set token
    const token = jwt.sign({emailId: email}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_LIFETIME
    });

    return res.status(200).json({token:token});
}