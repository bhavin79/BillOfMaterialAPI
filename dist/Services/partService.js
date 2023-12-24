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
exports.partsService = void 0;
const parts_js_1 = require("../Database/parts.js");
const productServices_js_1 = require("./productServices.js");
const getAllPartService = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield parts_js_1.partsDatabase.getPart();
    return result;
});
const getPartService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield parts_js_1.partsDatabase.getPart(id);
    return result;
});
const patchPartService = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield parts_js_1.partsDatabase.patchPart(id, data);
    return result;
});
const postPartService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield parts_js_1.partsDatabase.postPart(data);
    return result;
});
const addToProductService = (productSap, partId) => __awaiter(void 0, void 0, void 0, function* () {
    let add = yield productServices_js_1.productServices.updateProductService(productSap, "Parts", partId);
    ;
    const part = yield partsService.getPartService(partId);
    let Calculate = {};
    const thickness = part.Thickness;
    Calculate.Part_weight = (part.SurfaceArea * thickness);
    Calculate.Peri_sum = part.Perimeter * part.Thickness;
    // Calculate.Hardware_cost = Parts.hardware * Parts.Qty;
    //if assymbly
    if (add.Single == false) {
        Calculate.Part_weight *= part.Qty;
        Calculate.Peri_sum *= part.Qty;
        Calculate.Volume_sum = (part.Length) * (part.Width) * (thickness) * (part.Qty);
    }
    //else
    Calculate.Volume_sum = (part.Length) * (part.Width) * (thickness);
    Calculate.Scrap_weight = Calculate.Volume_sum - Calculate.Part_weight;
    //updating Calculate field in current json;
    let { Calculated: updatedCal } = yield productServices_js_1.productServices.getSingleProductService(productSap);
    updatedCal.Volume_sum = add.Calculated.Volume_sum + Calculate.Volume_sum;
    updatedCal.Scrap_weight = add.Calculated.Scrap_weight + Calculate.Scrap_weight;
    updatedCal.Part_weight = add.Calculated.Part_weight + Calculate.Part_weight;
    updatedCal.Peri_sum = add.Calculated.Peri_sum + Calculate.Peri_sum;
    const update = yield productServices_js_1.productServices.updateProductService(productSap, "Calculated", updatedCal);
    return update;
});
const partsService = {
    getAllPartService: getAllPartService,
    getPartService: getPartService,
    postPartService: postPartService,
    patchPartService: patchPartService,
    addToProductService: addToProductService
};
exports.partsService = partsService;
