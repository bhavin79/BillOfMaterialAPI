"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = mongoose_1.default.Schema({
    "emailId": {
        type: String,
        trim: true,
        unique: true,
        lowercase: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Please provide a valid email address"],
        required: [true, "Please provide email"],
    },
    "password": {
        type: String,
        trim: true,
        required: [true, "Please provide email"]
    }
});
exports.default = mongoose_1.default.model("users", userSchema);
