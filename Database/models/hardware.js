import mongoose  from "mongoose";

const hardwareSchema = mongoose.Schema({
    "Description":{
        type: String,
        required: [true, "Please add description to hardware"],
    },
    "Supplier":{
        type: String,
        required: [true, "Please add supplier deatials to hardware"],
    },
    "RateOfSale":{
        type: Number,
        required: [true, "Please add rate to hardware"]
    },
    "Qty":{
        type:Number,
        require: [true, "Add quantity"],
    }
});

export default mongoose.model("Hardware",hardwareSchema)  
