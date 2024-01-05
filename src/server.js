const express = require('express')
const mongoose =require('mongoose')
const cors=require('cors')
const app=express();
app.use(cors())
app.use(express.json())

const PORT=process.env.PORT || 8080;
// schema
const studSchemaData=mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    regno:String,
    course:String

},{
    timestamps:true
})
const teacherSchemaData=mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    id:String,
    qualification:String

},{
    timestamps:true
})
const studModel = mongoose.model("student",studSchemaData)

app.get('/student',async(req,res)=>{
    const data=await studModel.find({})
res.json({Success:true,data:data})
})

app.post('/studCreate',async(req,res)=>{
    console.log(req.body) 
    const data= new studModel(req.body)
    await data.save()
    res.send({success:true,message:"stored data",data})
})

app.delete('/studDelete/:id',async(req,res)=>{
    const id=req.params.id;
    console.log(id)

    const data = await studModel.deleteOne({regno:id})
    res.send({Success:true,message:"Deleted data successfully",data})
})

const teacherModel = mongoose.model("teacher",teacherSchemaData)

app.get('/teacher',async(req,res)=>{
    const data=await teacherModel.find({})
res.json({Success:true,data:data})
})

app.post('/teacherCreate',async(req,res)=>{
    console.log(req.body) 
    const data= new teacherModel(req.body)
    await data.save()
    res.send({success:true,message:"stored data",data})
})

app.delete('/teacherDelete/:id',async(req,res)=>{
    const id=req.params.id;
    console.log(id);
    const data = await teacherModel.deleteOne({id:id})
    res.send({Success:true,message:"Deleted data successfully",data})
})

mongoose.connect("mongodb://127.0.0.1:27017/School").then(()=>{
console.log("db connected")
app.listen(PORT,()=>{
    console.log("server is running")
})
}).catch((err)=>console.log(err))