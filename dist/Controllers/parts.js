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
exports.addToProduct = exports.postPart = exports.patchPart = exports.getPart = exports.getAllPart = void 0;
const wrapper_js_1 = require("../middleware/wrapper.js");
const partService_js_1 = require("../Services/partService.js");
const getAllPart = (0, wrapper_js_1.wrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield partService_js_1.partsService.getAllPartService();
    res.status(200).json(result);
}));
exports.getAllPart = getAllPart;
const getPart = (0, wrapper_js_1.wrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield partService_js_1.partsService.getPartService(req.params.id);
    res.status(200).json(result);
}));
exports.getPart = getPart;
const patchPart = (0, wrapper_js_1.wrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield partService_js_1.partsService.patchPartService(req.params.id, req.body);
    res.status(200).json(result);
}));
exports.patchPart = patchPart;
const postPart = (0, wrapper_js_1.wrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield partService_js_1.partsService.postPartService(req.body);
    res.status(200).json(result);
}));
exports.postPart = postPart;
const addToProduct = (0, wrapper_js_1.wrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield partService_js_1.partsService.addToProductService(req.body.SapCode, req.params.id);
    res.status(200).json(result);
}));
exports.addToProduct = addToProduct;
