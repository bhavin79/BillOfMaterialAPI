import {wrapper} from "../middleware/wrapper.js";
import { partsService } from "../Services/partService.js";

const getAllPart = wrapper( async(req, res)=>{
    const result = await partsService.getAllPartService();
    res.status(200).json(result);
});

const getPart = wrapper( async(req, res)=>{
    const result = await partsService.getPartService(req.params.id);
    res.status(200).json(result);
});

const patchPart = wrapper( async(req, res) =>{  
    const result = await partsService.patchPartService(req.params.id, req.body);
    res.status(200).json(result);
});

const postPart = wrapper(async(req, res) =>{
    const result = await partsService.postPartService(req.body);
    res.status(200).json(result);
});
const addToProduct =  wrapper(async(req, res) =>{
    const result = await partsService.addToProductService(req.body.SapCode, req.params.id)    
    res.status(200).json(result);
});

export  {getAllPart, getPart, patchPart, postPart, addToProduct};