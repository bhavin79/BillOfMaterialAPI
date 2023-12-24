import { partsDatabase } from "../Database/parts.js";
import { productServices } from "./productServices.js";

const getAllPartService = async()=>{
    const result = await partsDatabase.getPart();
    return result;
};

const getPartService =  async(id)=>{
    const result = await partsDatabase.getPart(id);
    return result;
};

const patchPartService = async(id, data) =>{  
    const result = await partsDatabase.patchPart(id, data);
    return result;
};

const postPartService = async(data) =>{
    const result = await partsDatabase.postPart(data);
    return result;
};

const addToProductService =  async(productSap, partId) =>{       

    let add = await productServices.updateProductService(productSap, "Parts", partId);;
    
    const part = await partsService.getPartService(partId);
    let Calculate ={}
    
    const thickness = part.Thickness;
    Calculate.Part_weight = (part.SurfaceArea*thickness);
    Calculate.Peri_sum = part.Perimeter *part.Thickness;
    // Calculate.Hardware_cost = Parts.hardware * Parts.Qty;
    
    //if assymbly
    if(add.Single == false){
        Calculate.Part_weight *=part.Qty; 
        Calculate.Peri_sum *=part.Qty;
        Calculate.Volume_sum = (part.Length)*(part.Width)*(thickness)*(part.Qty);
    }
    //else
    Calculate.Volume_sum = (part.Length)*(part.Width)*(thickness);
    Calculate.Scrap_weight = Calculate.Volume_sum - Calculate.Part_weight;

    //updating Calculate field in current json;
    let {Calculated: updatedCal} = await productServices.getSingleProductService(productSap);
    updatedCal.Volume_sum= add.Calculated.Volume_sum + Calculate.Volume_sum;
    updatedCal.Scrap_weight=add.Calculated.Scrap_weight + Calculate.Scrap_weight;
    updatedCal.Part_weight=add.Calculated.Part_weight + Calculate.Part_weight;
    updatedCal.Peri_sum=add.Calculated.Peri_sum + Calculate.Peri_sum;
    const update = await productServices.updateProductService(productSap, "Calculated", updatedCal);
    
    return update;
};


const partsService = {
    getAllPartService: getAllPartService,
    getPartService:getPartService,
    postPartService: postPartService,
    patchPartService: patchPartService,
    addToProductService:addToProductService
}


export {partsService};