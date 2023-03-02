import {rateDatabase} from "../Database/rate.js"
import { productServices } from "./productServices.js";

const getRateService = async (SapCode) =>{
    const rateObject =  await rateDatabase.getRate(SapCode);
    const queryObject = await productServices.getSingleProductService(SapCode);
    const rate ={}
    rate.Machinery_cost = Math.ceil(queryObject.Calculated.Peri_sum * rateObject.Rate.Machinery);
    rate.Material_hardware = Math.ceil(queryObject.Calculated.Volume_sum* rateObject.Rate.Material - queryObject.Calculated.Scrap_weight * rateObject.Rate.Scrap);
    rate.Labour_cost = Math.ceil(rateObject.Rate.Labour * queryObject.Calculated.Part_weight);
    rate.Total = Math.ceil( rate.Labour_cost + rate.Machinery_cost +rate.Material_hardware )
    rate.Weight = Math.ceil(queryObject.Calculated.Scrap_weight);
    const result = {Final_cost: rate, Rate: rateObject.Rate};
    return result;
};

const patchRateService = async(ProductSap, FieldName, data) =>{
    const result = await rateDatabase.patchRate(ProductSap, FieldName, data)
    return result;
};

export const rateService = {
    getRateService:getRateService,
    patchRateService:patchRateService
}