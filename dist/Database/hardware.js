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
exports.hardwareDatabse = void 0;
const hardware_js_1 = __importDefault(require("../Database/models/hardware.js"));
let getHardware = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let result;
    if (!id) {
        result = yield hardware_js_1.default.find();
    }
    else {
        result = yield hardware_js_1.default.findById(id);
    }
    return result;
});
const postHardware = (json) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield hardware_js_1.default.create(json);
    return result;
});
const patchHardware = (id, json) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield hardware_js_1.default.findOneAndUpdate({ _id: id }, json, { new: true, runValidators: true });
    return result;
});
const hardwareDatabse = {
    getHardware: getHardware,
    postHardware: postHardware,
    patchHardware: patchHardware,
};
exports.hardwareDatabse = hardwareDatabse;
