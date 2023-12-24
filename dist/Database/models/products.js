"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const productSchema = new mongoose_1.default.Schema({
    "SapCode": {
        type: Number,
        min: 0,
        max: 9999999,
        required: [true, "Please enter sap code"]
    },
    "Single": {
        type: Boolean,
        required: [true, "Please select assymbly type"]
    },
    "Machinename": {
        type: String,
        trim: true,
        maxlength: 200,
        required: [true, "Please enter Machine Name"]
    },
    "Material": {
        type: Number,
        min: 0,
        max: 9999999,
        required: [true, "Please enter Material Density"]
    },
    "Rate": {
        "Machinery": {
            type: Number,
            min: 0,
            max: 9999999,
        },
        "Material": {
            type: Number,
            min: 0,
            max: 9999999,
        },
        "Scrap": {
            type: Number,
            min: 0,
            max: 9999999,
        },
        "Labour": {
            type: Number,
            min: 0,
            max: 9999999,
        }
    },
    "Parts": [{
            type: mongoose_1.default.Types.ObjectId,
            ref: 'Part',
        }
    ],
    "Hardware": [{
            type: mongoose_1.default.Types.ObjectId,
            ref: 'Hardware',
        }],
    "Calculated": {
        "Volume_sum": {
            type: Number,
            min: 0,
            max: 9999999,
        },
        "Part_weight": {
            type: Number,
            min: 0,
            max: 9999999,
        },
        "Peri_sum": {
            type: Number,
            min: 0,
            max: 9999999,
        },
        "Hardware_cost": {
            type: Number,
            min: 0,
            max: 9999999,
        },
        "Scrap_weight": {
            type: Number,
            min: 0,
            max: 9999999,
        },
    }
});
exports.default = mongoose_1.default.model('product', productSchema);
