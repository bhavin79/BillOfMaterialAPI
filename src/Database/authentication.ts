import { validEmail, validPassword } from "../utils/validation.js";
import hash from "../utils/encryption.js";
import users from "./models/authentication.js";

export const getUser = async (email:string):Promise<object> => {
    //validation
    email = validEmail(email);
    //databse query
    let user = await users.findOne({emailId: email});
    if(user == null){
        throw `User not found`
    }
    //send result back to user
    user._id = user._id.toString();
    return user;
  };

export const addUser = async(email:string, password:string):Promise<string>=>{

    //validation
    email = validEmail(email);
    password = validPassword(password);
    //hash password
    password = await hash.generateHash(password);    
    
    //query the database
    let user = await users.create({
        "emailId": email,
        "password":password,
    });
    console.log(user);
    if(typeof user._id == "undefined") throw 'Could not add user';
    
    // if (!user.acknowledged || !user.insertedId) throw 'Could not add user';
    const newId = user._id.toString();
    return newId;
}
