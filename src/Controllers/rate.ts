import {rateService} from "../Services/rateService.js";
import {wrapper} from "../middleware/wrapper.js"

const getRate = wrapper(async (req, res) =>{
    const SapCode =  req.params.sap;
    const result = await rateService.getRateService(SapCode);
    res.status(200).json(result);
});

const  patchtRate = wrapper(async (req, res) =>{ 
    const result = await products.findOneAndUpdate({SapCode: req.params.sap}, {Rate: req.body}, {new:true, runValidators: true});    
    res.status(200).json({result});
});

export {getRate, patchtRate};