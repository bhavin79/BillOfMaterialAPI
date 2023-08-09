import jwt from "jsonwebtoken";

const jwtVerify = async (req, res, next) => {
  // check header
  const header = req.headers.authorization;
  if(typeof header != "undefined"){
    if(header.startsWith('Bearer') != false){
        const token = header.split(' ')[1]
        try {
          const user = jwt.verify(token, process.env.JWT_SECRET);
          console.log(user.emailId, req.path);
          next();
        } catch (error) {
          return res.status(403).json({error:"You are not authorized"});
        }
    }else{
        return res.status(403).json({error:"You are not authorized"});
    }
  }
  else{
    return res.status(403).json({error:"You are not authorized"});
  }
}

export default jwtVerify;