import parts from "./models/parts.js";

const getPart = async (id:string|null):Promise<object> =>{
    if(!id){
       return await parts.find({});
    }
    else{
        return await parts.findById(id);
    }
}

const postPart = async (data)=>{
    let result = await parts.create(data);
    return result;
}

const patchPart = async (id, data) =>{
    let result = await parts.findByIdAndUpdate(id, data, {new: true,  runValidators: true});
    return result;
}

const partsDatabase = {
    getPart:getPart,
    postPart:postPart,
    patchPart:patchPart,
} 

export {partsDatabase};