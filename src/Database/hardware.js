import hardware from "../Database/models/hardware.js";

let getHardware = async(id)=>{
    let result;
    if(!id){
        result = await hardware.find();
    }
    else{
         result = await hardware.findById(id);
    }
    return result
}


const postHardware =  async (json) =>{
    const result = await hardware.create(json);
    return result;
 }

const patchHardware =  async (id, json) =>{
    const result = await hardware.findOneAndUpdate({_id: id}, json,{new: true,  runValidators: true} )
    return result;
}


const hardwareDatabse = {
    getHardware: getHardware,
    postHardware:postHardware,
    patchHardware:patchHardware,
}

export {hardwareDatabse};