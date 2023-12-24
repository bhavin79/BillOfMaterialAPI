"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postSignup = exports.postLogin = void 0;
const authentication_js_1 = require("../Database/authentication.js");
require("dotenv/config.js");
const validation_js_1 = require("../utils/validation.js");
const encryption_js_1 = __importDefault(require("../utils/encryption.js"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const postLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //validate the input
    let { emailId: email, password } = req.body;
    try {
        email = (0, validation_js_1.validEmail)(email);
        password = (0, validation_js_1.validPassword)(password);
    }
    catch (error) {
        return res.status(400).json({ msg: "Provide valid format for Email id or password" });
    }
    let user;
    //check if email exist
    try {
        user = yield (0, authentication_js_1.getUser)(email);
    }
    catch (error) {
        return res.status(400).json({ msg: "Email id or password is incorrect" });
    }
    //compare password
    const result = yield encryption_js_1.default.compareHash(password, user.password);
    if (!result) {
        return res.status(400).json({ msg: "Email id or password is incorrect" });
    }
    // set JWT
    const token = jsonwebtoken_1.default.sign({ emailId: email }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_LIFETIME
    });
    //send login success.
    return res.status(200).json({ token: token });
});
exports.postLogin = postLogin;
const postSignup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //validate the input
    let { emailId: email, password } = req.body;
    try {
        email = (0, validation_js_1.validEmail)(email);
        password = (0, validation_js_1.validPassword)(password);
    }
    catch (error) {
        return res.status(400).json({ msg: error });
    }
    //fetch user
    try {
        //user exist. Throw error
        const user = yield (0, authentication_js_1.getUser)(email);
        return res.status(400).json({ msg: "This Email Id is already registered" });
    }
    catch (error) {
    }
    //Create user
    let createUser;
    try {
        createUser = yield (0, authentication_js_1.addUser)(email, password);
    }
    catch (error) {
        return res.status(500).json({ msg: error });
    }
    //set token
    const token = jsonwebtoken_1.default.sign({ emailId: email }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_LIFETIME
    });
    return res.status(200).json({ token: token });
});
exports.postSignup = postSignup;
