import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    "SapCode": {
        type: Number,
        required: [true, "Please enter sap code"]
    },
    "Single":{
        type: Boolean,
        required: [true, "Please select assymbly type"]
    },
    "Machinename": {
        type: String,
        required: [true, "Please enter Machine Name"]
    }, 
    "Material":  {
        type: Number,
        required: [true, "Please enter Material Density"]
    },
    "Rate": {
        "Machinery": {
            type: Number,
        },
        "Material": {
            type: Number,
        },
        "Scrap": {
            type: Number,
        },
        "Labour": {
            type: Number,
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
        },
        "Part_weight":{
            type: Number,
        },
        "Peri_sum": {
            type: Number,
        },
        "Hardware_cost":{
            type: Number,
        },
        "Scrap_weight": {
            type: Number,
        },
    }
});
export default mongoose.model('product', productSchema);
