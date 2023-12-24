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
exports.patchProduct = exports.postProduct = exports.getAllProduct = exports.getProduct = void 0;
const productServices_js_1 = require("../Services/productServices.js");
const wrapper_js_1 = require("../middleware/wrapper.js");
const getAllProduct = (0, wrapper_js_1.wrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield productServices_js_1.productServices.getAllProductService();
    res.status(200).json(product);
}));
exports.getAllProduct = getAllProduct;
const getProduct = (0, wrapper_js_1.wrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield productServices_js_1.productServices.getSingleProductService(req.params.sap);
    // const product = await products.findOne({SapCode: req.params.sap});  
    res.status(200).json({ product });
}));
exports.getProduct = getProduct;
const postProduct = (0, wrapper_js_1.wrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield productServices_js_1.productServices.postProductService(req.body);
    res.status(200).json({ product: product });
    // res.status(200).json({width: Parts.legth,query: queryObject});
}));
exports.postProduct = postProduct;
const patchProduct = (0, wrapper_js_1.wrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield productServices_js_1.productServices.updateProductService(req.params.sap, null, req.body);
    // const product = await products.findOneAndUpdate({SapCode: req.params.sap}, req.body, {new: true,  runValidators: true});    
    res.status(200).json(product);
}));
exports.patchProduct = patchProduct;
// const getHardware = wrapper(async (req, res) =>{
//     const {sapCode} =  req.query;
//     res.status(200).json({sapcode: sapCode});
// });
// const getRate = wrapper(async (req, res) =>{
//     const SapCode =  req.params.sap;
//     let queryObject =  await products.findOne({SapCode: SapCode}).select("rate Calculated");
//     const rate ={}
//      rate.laser_cost = Math.ceil(queryObject.Calculated.Peri_sum * queryObject.rate.Laser + queryObject.Calculated.piercing_sum);
//      rate.material_hardware = Math.ceil(queryObject.Calculated.Blank_size* queryObject.rate.Material - queryObject.Calculated.Scrap_weight * queryObject.rate.scrap+queryObject.Calculated.Hardware_cost);
//      rate.labour_cost = Math.ceil(queryObject.rate.Labour * queryObject.Calculated.part_weight);
//      rate.total = Math.ceil( rate.labour_cost + rate.laser_cost + rate.material_hardware)
//      rate.weight = Math.ceil(queryObject.Calculated.Scrap_weight);
//     res.status(200).json({Final_cost: rate, Rate: queryObject.rate});
// });
// const postRate = wrapper(async(req, res) =>{
//     const rate = await products.findOneAndUpdate({SapCode: req.query.sap},req.body, {new:true, runValidators: true})
//     res.status(200).json(rate);
// });
// const  patchtRate = wrapper(async (req, res) =>{ 
//     const {sapCode, rate} =  req.body;
//     const result = await products.findOneAndUpdate({SapCode: sapCode}, {rate: rate});    
//     res.status(200).json({sapcode: sapCode});
// });
// const postHardware = wrapper( async (req, res) =>{
//     const {sapCode} =  req.body;
//     res.status(200).json({sapcode: sapCode});
// });
// const  patchHardware = wrapper( async (req, res) =>{
//     const {sapCode} =  req.body;
//     res.status(200).json({sapcode: sapCode});
// });
// const  patchPart = async (req, res) =>{
//     const {_id, length, SapCode } =  req.body;
//     const  parts = await partsSchema.findOneAndUpdate({_id: _id}, {length: 200});
//     res.status(200).json({parts});
// }
