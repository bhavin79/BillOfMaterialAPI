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
exports.addHardwareToProduct = exports.getAllHardware = exports.patchHardware = exports.postHardware = exports.getHardware = void 0;
const wrapper_js_1 = require("../middleware/wrapper.js");
const hardwareServices_js_1 = require("../Services/hardwareServices.js");
const getAllHardware = (0, wrapper_js_1.wrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield hardwareServices_js_1.hardwareService.getAllHardwareService();
    res.status(200).json({ data: result });
}));
exports.getAllHardware = getAllHardware;
const getHardware = (0, wrapper_js_1.wrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //call the service
    const result = yield hardwareServices_js_1.hardwareService.getSingleHardwareService(req.params.id);
    res.status(200).json({ data: result });
}));
exports.getHardware = getHardware;
const postHardware = (0, wrapper_js_1.wrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Adding a new hardware component in the inventory,
    //requires hardware info in Json format
    const result = yield hardwareServices_js_1.hardwareService.postHardwareService(req.body);
    res.status(200).json({ data: result });
}));
exports.postHardware = postHardware;
const patchHardware = (0, wrapper_js_1.wrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //updating a hardware component in the inventory,
    //requires hardware Id and updated info in json format
    const result = yield hardwareServices_js_1.hardwareService.patchHardwareService(req.paramms.id, req.body);
    // const result = await hardware.findOneAndUpdate({_id: req.paramms.id}, req.body,{new: true,  runValidators: true} )
    res.status(200).json({ data: result });
}));
exports.patchHardware = patchHardware;
const addHardwareToProduct = (0, wrapper_js_1.wrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //adding harware component into the product,
    //requires Product sapcode and hardware ID
    const added = yield hardwareServices_js_1.hardwareService.addHardwareToProductService(req.body.SapCode, req.params.id);
    res.status(200).json(added);
}));
exports.addHardwareToProduct = addHardwareToProduct;
