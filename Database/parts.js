import parts from "../Database/models/parts.js";

const getPart = async (id) =>{
    let result;
    if(!id){
        result = await parts.find({});
    }
    else{
        result = await parts.findById(id);
    }
    return result;
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