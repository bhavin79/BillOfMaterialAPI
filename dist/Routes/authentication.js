"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes = express_1.default.Router();
const authentication_js_1 = require("../Controllers/authentication.js");
routes.route("/login").post(authentication_js_1.postLogin);
routes.route("/signup").post(authentication_js_1.postSignup);
exports.default = routes;
