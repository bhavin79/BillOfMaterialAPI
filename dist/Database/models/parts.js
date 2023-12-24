"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const parts = new mongoose_1.default.Schema({
    "Description": {
        type: String,
        trim: true,
        maxlength: 500,
        required: [true, "Please enter Description Name"]
    },
    "Length": {
        type: Number,
        min: 0,
        max: 9999999,
        required: [true, "Please enter Length"]
    },
    "Width": {
        type: Number,
        min: 0,
        max: 9999999,
        required: [true, "Please enter width"]
    },
    "Thickness": {
        type: Number,
        min: 0,
        max: 9999999,
        required: [true, "Please enter thickness"]
    },
    "Perimeter": {
        type: Number,
        min: 0,
        max: 9999999,
        required: [true, "Please enter perimiter"]
    },
    "SurfaceArea": {
        type: Number,
        min: 0,
        max: 9999999,
        required: [true, "Please enter surface area"]
    },
    "Qty": {
        type: Number,
        min: 0,
        max: 9999999,
        require: [true, "Add quantity"],
    }
});
exports.default = mongoose_1.default.model('Parts', parts);
