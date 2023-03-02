import { hardwareService } from "./hardwareServices.js";
import { productDatabse } from "../Database/products.js";
import { partsService } from "./partService.js";
const getAllProductService = async () =>{
    const result = await productDatabse.getProduct();
    return result;
}

const getSingleProductService = async (sap)=>{
    const result = await productDatabse.getProduct(sap);
    return result;
}

const updateProductService =  async(ProductSap, FieldName, data) =>{
    const result = await productDatabse.updateProduct(ProductSap, FieldName, data);
    return result;
};

const postProductService = async (data) =>{
    const {SapCode, Machinename, Material, Rate, Parts, Single, Hardware} = data;
    // await products.deleteMany({});
    // await partsSchema.deleteMany({});
    // await hardwareSchema.deleteMany({});
    console.log(data);
   let queryObject = {};
   queryObject.SapCode = SapCode;
   queryObject.Machinename = Machinename;
   queryObject.Material = Material;
   queryObject.Single = Single;
    if(typeof Parts != 'undefined'){
        //update this
        const done = await partsService.postPartService(Parts) ;
        queryObject.Parts =  done._id;
        let calculated = {};
        const thickness = Parts.Thickness;
        calculated.Part_weight = (Parts.SurfaceArea*thickness);
        calculated.Peri_sum = Parts.Perimeter *Parts.Thickness;

        //if assymbly
        if(Single == false){
            calculated.Part_weight *=Parts.Qty; 
            calculated.Peri_sum *=Parts.Qty;
            calculated.Volume_sum = (Parts.Length)*(Parts.Width)*(thickness)*(Parts.Qty);
           
        }
        //else
        calculated.Volume_sum = (Parts.Length)*(Parts.Width)*(thickness);
        calculated.Scrap_weight = calculated.Volume_sum - calculated.Part_weight;
        queryObject.Calculated= calculated;
    }
    else{
       let calculated = {}
       calculated.Volume_sum = 0;
       calculated.Scrap_weight =0;
       calculated.Part_weight = 0;
       calculated.Peri_sum =0;
    //    calculated.Hardware_cost =0;
       queryObject.Calculated= calculated; 
    }

    if(Hardware){
        const done = await hardwareService.postHardwareService(Hardware);
        queryObject.Hardware =  done._id;
        queryObject.Calculated.Hardware_cost = Hardware.Qty * Hardware.RateOfSale;
    }
    else{
        queryObject.Calculated.Hardware_cost =0;
    }
    if(Rate){
        queryObject.Rate = Rate;
    }
    else{
        queryObject.Rate = {
            "Machinery": 0,
            "Material": 0,
            "scrap": 0,
            "Labour": 0
        }

    }

    const product = await productDatabse.postProduct(queryObject);
    return product;

};



const productServices ={
    getAllProductService: getAllProductService,
    getSingleProductService:getSingleProductService,
    updateProductService: updateProductService,
    postProductService:postProductService,
}

export {productServices};
