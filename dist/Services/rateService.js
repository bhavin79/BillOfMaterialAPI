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
exports.rateService = void 0;
const rate_js_1 = require("../Database/rate.js");
const productServices_js_1 = require("./productServices.js");
const getRateService = (SapCode) => __awaiter(void 0, void 0, void 0, function* () {
    const rateObject = yield rate_js_1.rateDatabase.getRate(SapCode);
    const queryObject = yield productServices_js_1.productServices.getSingleProductService(SapCode);
    const rate = {};
    rate.Machinery_cost = Math.ceil(queryObject.Calculated.Peri_sum * rateObject.Rate.Machinery);
    rate.Material_hardware = Math.ceil(queryObject.Calculated.Volume_sum * rateObject.Rate.Material - queryObject.Calculated.Scrap_weight * rateObject.Rate.Scrap);
    rate.Labour_cost = Math.ceil(rateObject.Rate.Labour * queryObject.Calculated.Part_weight);
    rate.Total = Math.ceil(rate.Labour_cost + rate.Machinery_cost + rate.Material_hardware);
    rate.Weight = Math.ceil(queryObject.Calculated.Scrap_weight);
    const result = { Final_cost: rate, Rate: rateObject.Rate };
    return result;
});
const patchRateService = (ProductSap, FieldName, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield rate_js_1.rateDatabase.patchRate(ProductSap, FieldName, data);
    return result;
});
exports.rateService = {
    getRateService: getRateService,
    patchRateService: patchRateService
};
