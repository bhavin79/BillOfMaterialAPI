import mongoose  from "mongoose";

const userSchema = new mongoose.Schema({
    "emailId":{
        type: String,
        trim: true,
        unique:true,
        lowercase:true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"Please provide a valid email address"],
        required: [true, "Please provide email"],
    },
    "password":{
        type: String,
        trim: true,
        required:[true, "Please provide email"]
    }
});

export default mongoose.model("users",userSchema)  