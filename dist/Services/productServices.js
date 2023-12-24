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
exports.productServices = void 0;
const hardwareServices_js_1 = require("./hardwareServices.js");
const products_js_1 = require("../Database/products.js");
const partService_js_1 = require("./partService.js");
const getAllProductService = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_js_1.productDatabse.getProduct();
    return result;
});
const getSingleProductService = (sap) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_js_1.productDatabse.getProduct(sap);
    return result;
});
const updateProductService = (ProductSap, FieldName, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_js_1.productDatabse.updateProduct(ProductSap, FieldName, data);
    return result;
});
const postProductService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { SapCode, Machinename, Material, Rate, Parts, Single, Hardware } = data;
    // await products.deleteMany({});
    // await partsSchema.deleteMany({});
    // await hardwareSchema.deleteMany({});
    console.log(data);
    let queryObject = {};
    queryObject.SapCode = SapCode;
    queryObject.Machinename = Machinename;
    queryObject.Material = Material;
    queryObject.Single = Single;
    if (typeof Parts != 'undefined') {
        //update this
        const done = yield partService_js_1.partsService.postPartService(Parts);
        queryObject.Parts = done._id;
        let calculated = {};
        const thickness = Parts.Thickness;
        calculated.Part_weight = (Parts.SurfaceArea * thickness);
        calculated.Peri_sum = Parts.Perimeter * Parts.Thickness;
        //if assymbly
        if (Single == false) {
            calculated.Part_weight *= Parts.Qty;
            calculated.Peri_sum *= Parts.Qty;
            calculated.Volume_sum = (Parts.Length) * (Parts.Width) * (thickness) * (Parts.Qty);
        }
        //else
        calculated.Volume_sum = (Parts.Length) * (Parts.Width) * (thickness);
        calculated.Scrap_weight = calculated.Volume_sum - calculated.Part_weight;
        queryObject.Calculated = calculated;
    }
    else {
        let calculated = {};
        calculated.Volume_sum = 0;
        calculated.Scrap_weight = 0;
        calculated.Part_weight = 0;
        calculated.Peri_sum = 0;
        //    calculated.Hardware_cost =0;
        queryObject.Calculated = calculated;
    }
    if (Hardware) {
        const done = yield hardwareServices_js_1.hardwareService.postHardwareService(Hardware);
        queryObject.Hardware = done._id;
        queryObject.Calculated.Hardware_cost = Hardware.Qty * Hardware.RateOfSale;
    }
    else {
        queryObject.Calculated.Hardware_cost = 0;
    }
    if (Rate) {
        queryObject.Rate = Rate;
    }
    else {
        queryObject.Rate = {
            "Machinery": 0,
            "Material": 0,
            "scrap": 0,
            "Labour": 0
        };
    }
    const product = yield products_js_1.productDatabse.postProduct(queryObject);
    return product;
});
const productServices = {
    getAllProductService: getAllProductService,
    getSingleProductService: getSingleProductService,
    updateProductService: updateProductService,
    postProductService: postProductService,
};
exports.productServices = productServices;
