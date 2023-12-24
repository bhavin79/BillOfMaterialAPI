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
exports.hardwareService = void 0;
const hardware_js_1 = require("../Database/hardware.js");
const productServices_js_1 = require("./productServices.js");
const getAllHardwareService = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield hardware_js_1.hardwareDatabse.getHardware();
    return result;
});
const getSingleHardwareService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield hardware_js_1.hardwareDatabse.getHardware(id);
    return result;
});
const postHardwareService = (json) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield hardware_js_1.hardwareDatabse.postHardware(json);
    return result;
});
const patchHardwareService = (id, json) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield hardware_js_1.hardwareDatabse.patchHardware(id, json);
    return result;
});
const addHardwareToProductService = (productSap, hardwareId) => __awaiter(void 0, void 0, void 0, function* () {
    const add = yield productServices_js_1.productServices.updateProductService(productSap, "Hardware", hardwareId);
    //adding hardware
    // const add = await products.findOneAndUpdate({SapCode: req.body.SapCode},{$push : {Hardware: req.params.id}}, {new: true, runValidators: true});
    //updating calculated field
    const hw = yield hardware_js_1.hardwareDatabse.getHardware(hardwareId);
    let Calculate = {};
    Calculate.Hardware_cost = hw.RateOfSale * hw.Qty;
    let { Calculated: updatedCal } = yield productServices_js_1.productServices.getSingleProductService(productSap);
    updatedCal.Hardware_cost = Calculate.Hardware_cost + add.Calculated.Hardware_cost;
    const update = yield productServices_js_1.productServices.updateProductService(productSap, "Calculated", updatedCal);
    // const update = await products.findOneAndUpdate({SapCode: req.body.SapCode}, {Calculated : updatedCal}, {new: true, runValidators: true});
    return update;
});
const hardwareService = {
    getAllHardwareService: getAllHardwareService,
    getSingleHardwareService: getSingleHardwareService,
    postHardwareService: postHardwareService,
    patchHardwareService: patchHardwareService,
    addHardwareToProductService: addHardwareToProductService
};
exports.hardwareService = hardwareService;
