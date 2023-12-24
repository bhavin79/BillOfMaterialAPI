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
exports.addUser = exports.getUser = void 0;
const validation_js_1 = require("../utils/validation.js");
const encryption_js_1 = __importDefault(require("../utils/encryption.js"));
const authentication_js_1 = __importDefault(require("./models/authentication.js"));
const getUser = (email) => __awaiter(void 0, void 0, void 0, function* () {
    //validation
    email = (0, validation_js_1.validEmail)(email);
    //databse query
    let user = yield authentication_js_1.default.findOne({ emailId: email });
    if (user == null) {
        throw `User not found`;
    }
    //send result back to user
    user._id = user._id.toString();
    return user;
});
exports.getUser = getUser;
const addUser = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    //validation
    email = (0, validation_js_1.validEmail)(email);
    password = (0, validation_js_1.validPassword)(password);
    //hash password
    password = yield encryption_js_1.default.generateHash(password);
    //query the database
    let user = yield authentication_js_1.default.create({
        "emailId": email,
        "password": password,
    });
    console.log(user);
    if (typeof user._id == "undefined")
        throw 'Could not add user';
    // if (!user.acknowledged || !user.insertedId) throw 'Could not add user';
    const newId = user._id.toString();
    return newId;
});
exports.addUser = addUser;
