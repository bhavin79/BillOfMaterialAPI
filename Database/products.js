import products from "./models/products.js";

let getProduct = async(id)=>{
    let result;
    if(!id){
        result = await products.find();
    }
    else{
         result = await products.findOne({SapCode: id});
    }
    return result
}


const updateProduct =  async(ProductSap, FieldName, data) =>{
    let result;
    if(FieldName == "Hardware"){
        //here data is basically the ID for parts or hardware. because they are inside of array in product database.
        result = await products.findOneAndUpdate({SapCode: ProductSap},{$push : {"Hardware": data}}, {new: true, runValidators: true});
    }
    else if(FieldName == "Parts"){
        result = await products.findOneAndUpdate({SapCode: ProductSap},{$push : {"Parts": data}}, {new: true, runValidators: true});
    }
    else if(FieldName == "Calculated"){
        result = await products.findOneAndUpdate({SapCode: ProductSap}, {"Calculated" : data}, {new: true, runValidators: true});
    }
    else if (FieldName == "Rate"){
        result = await products.findOneAndUpdate({SapCode: ProductSap}, {"Rate" : data}, {new: true, runValidators: true}); 
    }
    else{
        result = await products.findOneAndUpdate({SapCode: ProductSap}, data, {new: true, runValidators: true}); 
    }
    return result;
}

const postProduct = async(data)=>{
    const result = await products.create(data);
    return result;
}

const productDatabse = {
    updateProduct:updateProduct,
    getProduct:getProduct,
    postProduct:postProduct,
};


export {productDatabse};
