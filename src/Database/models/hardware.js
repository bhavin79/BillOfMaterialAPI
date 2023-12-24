import mongoose  from "mongoose";

const hardwareSchema = mongoose.Schema({
    "Description":{
        type: String,
        trim:true,
        maxlength:500,
        required: [true, "Please add description to hardware"],
    },
    "Supplier":{
        type: String,
        trim:true,
        maxlength:100,
        required: [true, "Please add supplier deatials to hardware"],
    },
    "RateOfSale":{
        type: Number,
        min:0,
        max:9999999,
        required: [true, "Please add rate to hardware"]
    },
    "Qty":{
        type:Number,
        min:0,
        max:9999999,
        require: [true, "Add quantity"],
    }
});

export default mongoose.model("Hardware",hardwareSchema)  
