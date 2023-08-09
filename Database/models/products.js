import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    "SapCode": {
        type: Number,
        min:0,
        max:9999999,
        required: [true, "Please enter sap code"]
    },
    "Single":{
        type: Boolean,
        required: [true, "Please select assymbly type"]
    },
    "Machinename": {
        type: String,
        trim:true,
        maxlength:200,
        required: [true, "Please enter Machine Name"]
    }, 
    "Material":  {
        type: Number,
        min:0,
        max:9999999,
        required: [true, "Please enter Material Density"]
    },
    "Rate": {
        "Machinery": {
            type: Number,
            min:0,
            max:9999999,
        },
        "Material": {
            type: Number,
            min:0,
            max:9999999,
        },
        "Scrap": {
            type: Number,
            min:0,
            max:9999999,
        },
        "Labour": {
            type: Number,
            min:0,
            max:9999999,
        }
    },
    "Parts": [{
        type: mongoose.Types.ObjectId,
        ref: 'Part',
    }
    ],
    
    "Hardware": [{
        type: mongoose.Types.ObjectId,
        ref: 'Hardware',
    }],

    "Calculated": {
        "Volume_sum": {
            type: Number,
            min:0,
            max:9999999,
        },
        "Part_weight":{
            type: Number,
            min:0,
            max:9999999,
        },
        "Peri_sum": {
            type: Number,
            min:0,
            max:9999999,
        },
        "Hardware_cost":{
            type: Number,
            min:0,
            max:9999999,
        },
        "Scrap_weight": {
            type: Number,
            min:0,
            max:9999999,
        },
    }
});
export default mongoose.model('product', productSchema);
