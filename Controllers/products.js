import { productServices } from "../Services/productServices.js";

import {wrapper} from '../middleware/wrapper.js';

const getAllProduct = wrapper( async(req, res) =>{  
    const product = await productServices.getAllProductService();
    res.status(200).json(product);
});

const getProduct = wrapper( async (req, res) =>{ 
    const product = await productServices.getSingleProductService(req.params.sap);  
    // const product = await products.findOne({SapCode: req.params.sap});  
    res.status(200).json({product});
});


const postProduct = wrapper(async (req, res) =>{
    const product = await productServices.postProductService(req.body);
    res.status(200).json({product: product});

    // res.status(200).json({width: Parts.legth,query: queryObject});
});

const patchProduct = wrapper(async(req, res) =>{
    
    const product = await productServices.updateProductService(req.params.sap, null ,req.body)
    // const product = await products.findOneAndUpdate({SapCode: req.params.sap}, req.body, {new: true,  runValidators: true});    
    res.status(200).json(product);
});

export {getProduct, getAllProduct, postProduct, patchProduct};

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
