const Express=require("express")
const Bodyparser=require("body-parser")
const Cors=require("cors")
const Mongoose=require("mongoose")  


var app=Express()
app.get("/",(req,res)=>{

    res.send("welcome to my website")
})

app.get("/home",(req,res)=>{

    res.send("my home page")
})

app.get("/contact",(req,res)=>{

    res.send("my contact page")
})

app.listen(3000)

