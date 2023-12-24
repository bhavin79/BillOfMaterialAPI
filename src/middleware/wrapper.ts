import { NextFunction, Request, Response } from "express";
type MyCallBack = (req:Request, res:Response) => Promise<void>

const wrapper = (fn:MyCallBack)=>{
    return async (req:Request, res:Response, next:NextFunction) => {
        try {
            await fn(req, res);
        } catch (error) {
            next(error);
        }
    } 
}
export {wrapper};