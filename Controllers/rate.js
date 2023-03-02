import {rateService} from "../Services/rateService.js";

import {wrapper} from "../middleware/wrapper.js"
const getRate = wrapper(async (req, res) =>{
    const SapCode =  req.params.sap;
    const result = await rateService.getRateService(SapCode);
    // const queryObject =  await products.findOne({SapCode: SapCode}).select("Rate Calculated");
    // const rate ={}
    // console.log(queryObject);
    //  rate.Laser_cost = Math.ceil(queryObject.Calculated.Peri_sum * queryObject.Rate.Laser + queryObject.Calculated.Piercing_sum);
    //  rate.Material_hardware = Math.ceil(queryObject.Calculated.Blank_size* queryObject.Rate.Material - queryObject.Calculated.Scrap_weight * queryObject.Rate.Scrap+queryObject.Calculated.Hardware_cost);
    //  rate.Labour_cost = Math.ceil(queryObject.Rate.Labour * queryObject.Calculated.Part_weight);
    //  rate.Total = Math.ceil( rate.Labour_cost + rate.Laser_cost + rate.Material_hardware)
    //  rate.Weight = Math.ceil(queryObject.Calculated.Scrap_weight);
    res.status(200).json(result);
});

// const postRate = wrapper(async(req, res) =>{
//     const rate = await products.findOneAndUpdate({SapCode: req.params.sap},{Rate: req.body}, {new:true, runValidators: true})
//     res.status(200).json(rate);
// });

const  patchtRate = wrapper(async (req, res) =>{ 
    const result = await products.findOneAndUpdate({SapCode: req.params.sap}, {Rate: req.body}, {new:true, runValidators: true});    
    res.status(200).json({result});
});

export {getRate, patchtRate};