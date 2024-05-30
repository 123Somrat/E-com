import { Request , Response } from "express";
import asyncHandelar from "../../../../utils/asyncHandler";






const createOrder =asyncHandelar(async(req:Request,res:Response)=>{
     const orderInfo = req.body;
  
     // TODO : validate orders data;




})



export default createOrder;