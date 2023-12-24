import hardware from "./models/hardware.js";

let getHardware = async(id:string):Promise<object>=>{
    let result;
    if(!id){
        result = await hardware.find();
    }
    else{
         result = await hardware.findById(id);
    }
    return result
}


const postHardware =  async (json:object):Promise<object> =>{
    const result = await hardware.create(json);
    return result;
 }

const patchHardware =  async (id:string, json:object):Promise<object> =>{
    const result = await hardware.findOneAndUpdate({_id: id}, json,{new: true,  runValidators: true} )
    return result;
}


const hardwareDatabse = {
    getHardware: getHardware,
    postHardware:postHardware,
    patchHardware:patchHardware,
}

export {hardwareDatabse};