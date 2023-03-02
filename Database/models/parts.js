import mongoose from "mongoose";
const parts = new mongoose.Schema({ 
    "Description":{
        type: String,
        required: [true, "Please enter Description Name"]
    },
    "Length":{
        type: Number,
        required: [true, "Please enter Length"]
    } ,
    "Width": {
        type: Number,
        required: [true, "Please enter width"]
    },
    "Thickness": {
        type: Number,
        required: [true, "Please enter thickness"]
    },
    "Perimeter": {
        type: Number,
        required: [true, "Please enter perimiter"]
    },
    "SurfaceArea": {
        type: Number,
        required: [true, "Please enter surface area"]
    }, 
    "Qty":{
        type:Number,
        require: [true, "Add quantity"],
    }
});

export default mongoose.model('Parts', parts);