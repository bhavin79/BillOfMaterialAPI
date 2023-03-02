export const notFound = (req,res)=>{
    return res.status(404).json({msg: "Route doesn't exist"});
}

