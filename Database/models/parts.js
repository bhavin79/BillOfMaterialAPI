import mongoose from "mongoose";
const parts = new mongoose.Schema({ 
    "Description":{
        type: String,
        trim:true,
        maxlength:500,
        required: [true, "Please enter Description Name"]
    },
    "Length":{
        type: Number,
        min:0,
        max:9999999,
        required: [true, "Please enter Length"]
    } ,
    "Width": {
        type: Number,
        min:0,
        max:9999999,
        required: [true, "Please enter width"]
    },
    "Thickness": {
        type: Number,
        min:0,
        max:9999999,
        required: [true, "Please enter thickness"]
    },
    "Perimeter": {
        type: Number,
        min:0,
        max:9999999,
        required: [true, "Please enter perimiter"]
    },
    "SurfaceArea": {
        type: Number,
        min:0,
        max:9999999,
        required: [true, "Please enter surface area"]
    }, 
    "Qty":{
        type:Number,
        min:0,
        max:9999999,
        require: [true, "Add quantity"],
    }
});

export default mongoose.model('Parts', parts);