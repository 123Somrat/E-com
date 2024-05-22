import { Request , Response } from "express"

const getSingleProduct = (req:Request,res:Response)=>{
    const query = req.params
      try{

         console.log(query)


      }catch(error){

        console.log(error)
      }




}

export default getSingleProduct;