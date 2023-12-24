"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validPassword = exports.validEmail = exports.validNumber = exports.validObjectId = exports.validString = void 0;
const mongodb_1 = require("mongodb");
const validString = (string, parameter = "input", maxLength = null) => {
    if (string === undefined || !string || typeof string !== "string")
        throw `${parameter} does not exist or is not a string`;
    string = string.trim();
    if (string.length == 0)
        throw `${parameter} cannot be an empty string or just spaces`;
    if (maxLength) {
        if (string.length > maxLength) {
            throw `${parameter} can be only ${maxLength} character long`;
        }
    }
    return string;
};
exports.validString = validString;
const validObjectId = (id, parameter = "input") => {
    id = (0, exports.validString)(id, parameter);
    if (!mongodb_1.ObjectId.isValid(id))
        throw `Valid ObjectId required for ${parameter}`;
    return id;
};
exports.validObjectId = validObjectId;
const validNumber = (num, parameter = "input", min = null, max = null) => {
    if (typeof num == "undefined") {
        throw `${parameter} should be provided`;
    }
    num = (0, exports.validString)(num, parameter);
    const regex = /^\d*\.?\d+$/;
    if (!regex.test(num)) {
        throw `should be a valid number`;
    }
    num = Number(num);
    if (min) {
        if (num < min) {
            throw `${parameter} can must be greater than ${min}`;
        }
    }
    if (max) {
        if (num > max) {
            throw `${parameter} can must be less than ${max}`;
        }
    }
    return num;
};
exports.validNumber = validNumber;
const validEmail = (email) => {
    email = (0, exports.validString)(email, "email");
    const regex = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
    if (!regex.test(email)) {
        throw `Valid email id needed`;
    }
    return email.toLowerCase();
};
exports.validEmail = validEmail;
const validPassword = (pass) => {
    pass = (0, exports.validString)(pass, "password", 15);
    if (pass.length < 8) {
        throw `Password length should be a minimum of 8`;
    }
    let upperCase = /.*[A-Z].*/g;
    let oneNumber = /.*[0-9].*/g;
    let oneSpecial = /[^a-zA-Z0-9\s]/g;
    let whiteSpace = /.*[\s].*/g;
    if (pass.match(whiteSpace)) {
        throw `Password should not contain any spaces`;
    }
    if (!pass.match(upperCase)) {
        throw `Password should have atleast one upercase character`;
    }
    if (!pass.match(oneNumber)) {
        throw `Password should have atleast one one number`;
    }
    if (!pass.match(oneSpecial)) {
        throw `Password should have atleast one special character`;
    }
    return pass;
};
exports.validPassword = validPassword;
