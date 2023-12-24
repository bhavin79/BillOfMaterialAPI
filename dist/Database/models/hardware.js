"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const hardwareSchema = mongoose_1.default.Schema({
    "Description": {
        type: String,
        trim: true,
        maxlength: 500,
        required: [true, "Please add description to hardware"],
    },
    "Supplier": {
        type: String,
        trim: true,
        maxlength: 100,
        required: [true, "Please add supplier deatials to hardware"],
    },
    "RateOfSale": {
        type: Number,
        min: 0,
        max: 9999999,
        required: [true, "Please add rate to hardware"]
    },
    "Qty": {
        type: Number,
        min: 0,
        max: 9999999,
        require: [true, "Add quantity"],
    }
});
exports.default = mongoose_1.default.model("Hardware", hardwareSchema);
