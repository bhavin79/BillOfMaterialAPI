import { ObjectId } from "mongodb";

export const validString = (string:string, parameter = "input", maxLength:number|null = null):string => {
  if (string === undefined || !string || typeof string !== "string")
    throw `${parameter} does not exist or is not a string`;

  string = string.trim();
  if (string.length == 0)
    throw `${parameter} cannot be an empty string or just spaces`;

  if (maxLength) {
    if (string.length > maxLength) {
      throw `${parameter} can be only ${maxLength} character long`;
    }
  }
  return string;
};

 export const validObjectId = (id:string, parameter = "input"):string => {
  id = validString(id, parameter);
  if (!ObjectId.isValid(id)) throw `Valid ObjectId required for ${parameter}`;
  return id;
};


 export const validNumber = (num:string, parameter = "input", min = null, max = null):number => {
    if (typeof num == "undefined") {
      throw `${parameter} should be provided`;
    }
    num = validString(num, parameter);  
    const regex = /^\d*\.?\d+$/;
    if(!regex.test(num)){
        throw `should be a valid number`
    }
    let numb = Number(num);
    
    if (min) {
      if (numb < min) {
        throw `${parameter} can must be greater than ${min}`;
      }
    }
    if (max) {
      if (numb > max) {
        throw `${parameter} can must be less than ${max}`;
      }
    }
    return numb;
  };

export const validEmail = (email:string):string => {
    email = validString(email, "email");
    const regex = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
    if (!regex.test(email)) {
      throw `Valid email id needed`;
    }
  
    return email.toLowerCase();
  };
  
  export const validPassword = (pass:string): string=>{
    pass = validString(pass, "password",15);
    if(pass.length<8){
        throw `Password length should be a minimum of 8`;
    }
    let upperCase =/.*[A-Z].*/g; 
    let oneNumber = /.*[0-9].*/g;
    let oneSpecial =/[^a-zA-Z0-9\s]/g;
    let whiteSpace = /.*[\s].*/g
    if(pass.match(whiteSpace)){
        throw `Password should not contain any spaces`;
    }
    if(!pass.match(upperCase)){
        throw `Password should have atleast one upercase character`;
    }
    if(!pass.match(oneNumber)){
        throw `Password should have atleast one one number`;
    }
    if(!pass.match(oneSpecial)){
        throw `Password should have atleast one special character`;
    }
    return pass;
}