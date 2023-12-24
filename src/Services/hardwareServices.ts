import {hardwareDatabse} from "../Database/hardware.js";
import { productServices } from "./productServices.js";

const getAllHardwareService = async()=>{
    const result = await hardwareDatabse.getHardware();
    return result
};

const getSingleHardwareService = async (id) =>{
   const result = await hardwareDatabse.getHardware(id)
   return result;
};

const postHardwareService =  async (json) =>{
    const result = await hardwareDatabse.postHardware(json);
    return result;
 };

 
const patchHardwareService =  async (id, json) =>{
    const result = await hardwareDatabse.patchHardware(id,json);
   return result;
};


const addHardwareToProductService = async(productSap, hardwareId) =>{

    const add = await productServices.updateProductService(productSap, "Hardware", hardwareId);
    //adding hardware
    // const add = await products.findOneAndUpdate({SapCode: req.body.SapCode},{$push : {Hardware: req.params.id}}, {new: true, runValidators: true});
    //updating calculated field
    const hw = await hardwareDatabse.getHardware(hardwareId);
    let Calculate ={}
    Calculate.Hardware_cost = hw.RateOfSale * hw.Qty;
    let {Calculated: updatedCal} = await productServices.getSingleProductService(productSap);
    updatedCal.Hardware_cost = Calculate.Hardware_cost + add.Calculated.Hardware_cost;

    const update = await productServices.updateProductService(productSap, "Calculated", updatedCal);
   // const update = await products.findOneAndUpdate({SapCode: req.body.SapCode}, {Calculated : updatedCal}, {new: true, runValidators: true});
    return update;
};


const hardwareService ={
    getAllHardwareService:getAllHardwareService,
    getSingleHardwareService: getSingleHardwareService,
    postHardwareService:postHardwareService,
    patchHardwareService:patchHardwareService,
    addHardwareToProductService:addHardwareToProductService
};
export {hardwareService};