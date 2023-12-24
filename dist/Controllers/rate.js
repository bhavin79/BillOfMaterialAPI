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
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchtRate = exports.getRate = void 0;
const rateService_js_1 = require("../Services/rateService.js");
const wrapper_js_1 = require("../middleware/wrapper.js");
const getRate = (0, wrapper_js_1.wrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const SapCode = req.params.sap;
    const result = yield rateService_js_1.rateService.getRateService(SapCode);
    res.status(200).json(result);
}));
exports.getRate = getRate;
const patchtRate = (0, wrapper_js_1.wrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products.findOneAndUpdate({ SapCode: req.params.sap }, { Rate: req.body }, { new: true, runValidators: true });
    res.status(200).json({ result });
}));
exports.patchtRate = patchtRate;
