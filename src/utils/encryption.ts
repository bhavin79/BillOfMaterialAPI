import * as bcrypt from "bcrypt";
const saltRounds= 10;

const getSaltRounds = ()=>{
    return saltRounds;
}

const generateHash = async (secret:string):Promise<string>=>{
    let hash;
    try {
        hash = await bcrypt.hash(secret, saltRounds);
    } catch (error) {
        throw `Problem in encrypting`;
    }
    return hash;
}

const compareHash = async (secret:string, hash:string):Promise<boolean>=>{
    let bool
    try {
        bool = await bcrypt.compare(secret, hash);
        // console.log("inside here \n",secret,hash);
    } catch (error) {
        throw `Difficult in comparing encrypted data`;
    }   
    return bool;
}

const hash ={
    generateHash:generateHash,
    compareHash:compareHash
}
export default hash;