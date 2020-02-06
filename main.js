const express=require("express");
const fs=require("fs");
const data=fs.readFileSync(__dirname+"/hello.txt","utf-8");
const app=express();
app.use("/static",express.static("public"));//faking the url of image and css in order to ensure more saftey. 
app.get("/",(req,res)=>{
   res.sendFile(__dirname+"/index.html");
})
app.get("/user",(req,res)=>{
    res.send("HEllo users");// call it with http://localhost:3000/user
})
app.listen(3000);