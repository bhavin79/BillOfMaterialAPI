import products from "./models/products.js";
import {productServices} from "../Services/productServices.js"
import { get } from "mongoose";


const getRate = async (SapCode) =>{
    const result =  await products.findOne({SapCode: SapCode}).select("Rate");
    return result;
};

const patchRate = async(ProductSap, FieldName, data) =>{
    const result = await productServices.updateProductService(ProductSap, FieldName, data)
    // const rate = await products.findOneAndUpdate({SapCode: req.params.sap},{Rate: req.body}, {new:true, runValidators: true})
    return result;
};

export const rateDatabase = {
    getRate:getRate,
    patchRate: patchRate,
}
