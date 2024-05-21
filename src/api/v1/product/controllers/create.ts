import { Request , Response } from "express"

const create = (req:Request,res:Response)=>{
    
   res.status(200).json({
        status:'200',
        code : "OK",
        data : {
             name:'BOOk',
             price:10
        }

   })



}

export default create;