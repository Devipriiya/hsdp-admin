import express from "express";

import mongoose from "mongoose";
import connectDB from "./teachersdb.js";
// import Attendance from "./attendanceModel.js";
const router = express.Router();
// import connectDB from "./teachersdb.js";
// connectDB();
connectDB();
Driverattendance
const app=express();
app.use(express.json());

const driverattendanceSchema=mongoose.Schema(
    {
    name:{
        type:String,
        required:true,
        },
    std:{
         type:String,
        required:true,
     },
     time: {
        type:String,
       required:true,
    }, 
    address:{
        type:String,
       required:true,
    },             
            
           
     })

var Driverattendance = mongoose.model('Driverattendance', driverattendanceSchema);
driverattendanceSchema.plugin(Driverattendance);

const driverattendance=[{
   
 name:"prashanth",
 std:"10th std",
 time:"3.35pm",
 address:"#No-32 E street thousand light chennai-600689 "
 


}]

app.get('/attendance',(req,res) =>
{
    try{
        res.status(200).send(driverattendance);
    }
    catch(error){
        res.json({message:"not available"});
    }
});
app.get('/:id',(req,res)=>{
    console.log(req.params.id);
    Driverattendance.findById(req.params.id)
    
    .then(result=>{
        res.status(200).json({
            driverattendance:result
        })
    })
    .catch(err=> {
    console.log(err);
    res.status(505).json({
        error:err
    })
    }
  )
})

app.post('/attendance',async(req,res)=>{
    try{
        const driverattendance={
            name:req.body.name,
            std:req.body.std,
            time:req.body.time,
            address:req.body.address,
           
        }
        console.log(driverattendance);
        var create=new Driverattendance(driverattendance);
        var driverattendanceCreated=await create.save();
      
        if(driverattendanceCreated){
            console.log("created");
        res.status(201).json({message:"show details"});
        }
else{
    res.status(401);
    throw new error("not found");
}
}catch(err){
    return res.status(500).json({message:err.message});
}}
);
router.put('/:id',(req,res)=>{
    console.log(req.params.id);
    Driverattendance.findOneAndUpdate({_id:req.params.id},{
        $set:{
           
            name:req.body.name,
            std:req.body.std,
            time:req.body.time,
            address:req.body.address,otal
        }
    })
    .then(result=>{
        res.status(200).json({
            updated_driverattendancedetails:result       
         })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
    })
   app.delete('/attendance/:id',(req,res)=>{
        console.log(req.params.id);
      Driverattendance.deleteOne({_id:req.params.id},{
            $set:{
                name:req.body.name,
                std:req.body.std,
                time:req.body.time,
                address:req.body.address,
    
            }
        })
        .then(result=>{
            res.status(200).json({
                deleted_driverattendance:result       
             })
        })
        .catch(err=>{
            console.log(err)
            res.status(500).json({
                error:err
            })
        })
        })
        router.delete('/',(req,res)=>{
    
            driverattendance.deleteMany({driverattendance},(err,result)=>{
            if(err) throw err
            res.send(driverattendance)
            })
        })
        export default router;
const port=3000;
app.listen(port,()=>{
    console.log(`server is running at ${port}`);
    console.log(driverattendance);
});