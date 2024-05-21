import express , { Request , Response} from "express";

const router = express.Router()

router.route('/books')
.get((req:Request,res:Response)=>{
      

      res.status(200).json({
         status:'200',
         messege: 'all Books',
         data:{
             name:'book',
             price:10
         }



      })

})

export default router;