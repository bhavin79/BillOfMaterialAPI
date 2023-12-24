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
exports.productDatabse = void 0;
const products_js_1 = __importDefault(require("./models/products.js"));
let getProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let result;
    if (!id) {
        result = yield products_js_1.default.find();
    }
    else {
        result = yield products_js_1.default.findOne({ SapCode: id });
    }
    return result;
});
const updateProduct = (ProductSap, FieldName, data) => __awaiter(void 0, void 0, void 0, function* () {
    let result;
    if (FieldName == "Hardware") {
        //here data is basically the ID for parts or hardware. because they are inside of array in product database.
        result = yield products_js_1.default.findOneAndUpdate({ SapCode: ProductSap }, { $push: { "Hardware": data } }, { new: true, runValidators: true });
    }
    else if (FieldName == "Parts") {
        result = yield products_js_1.default.findOneAndUpdate({ SapCode: ProductSap }, { $push: { "Parts": data } }, { new: true, runValidators: true });
    }
    else if (FieldName == "Calculated") {
        result = yield products_js_1.default.findOneAndUpdate({ SapCode: ProductSap }, { "Calculated": data }, { new: true, runValidators: true });
    }
    else if (FieldName == "Rate") {
        result = yield products_js_1.default.findOneAndUpdate({ SapCode: ProductSap }, { "Rate": data }, { new: true, runValidators: true });
    }
    else {
        result = yield products_js_1.default.findOneAndUpdate({ SapCode: ProductSap }, data, { new: true, runValidators: true });
    }
    return result;
});
const postProduct = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_js_1.default.create(data);
    return result;
});
const productDatabse = {
    updateProduct: updateProduct,
    getProduct: getProduct,
    postProduct: postProduct,
};
exports.productDatabse = productDatabse;
