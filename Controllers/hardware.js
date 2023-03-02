// const products = require("../Database/models/products");
import {wrapper} from '../middleware/wrapper.js';
import {hardwareService} from "../Services/hardwareServices.js"

const getAllHardware = wrapper(async(req, res)=>{
    const result = await hardwareService.getAllHardwareService();
    res.status(200).json({data:result}); 
});

const getHardware = wrapper(async (req, res) =>{  
    const result = await hardwareService.getSingleHardwareService(req.params.id);
    res.status(200).json({data: result});
});

const postHardware = wrapper( async (req, res) =>{  
    //Adding a new hardware component in the inventory,
    //requires hardware info in Json format
    const result = await hardwareService.postHardwareService(req.body);
    res.status(200).json({data: result});
});


const patchHardware = wrapper( async (req, res) =>{
    
    //updating a hardware component in the inventory,
    //requires hardware Id and updated info in json format
    const result = await hardwareService.patchHardwareService(req.paramms.id, req.body);
    // const result = await hardware.findOneAndUpdate({_id: req.paramms.id}, req.body,{new: true,  runValidators: true} )
    res.status(200).json({data: result});
});


const addHardwareToProduct = wrapper(async(req, res) =>{
    //adding harware component into the product,
    //requires Product sapcode and hardware ID
    const added = await hardwareService.addHardwareToProductService(req.body.SapCode, req.params.id);
    res.status(200).json(added);
});


export {getHardware, postHardware, patchHardware, getAllHardware, addHardwareToProduct};



