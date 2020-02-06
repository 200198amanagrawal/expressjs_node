const express=require("express");
const fs=require("fs");
const data=fs.readFileSync(__dirname+"/hello.txt","utf-8");
const app=express();
app.use(express.static("public"));//in express js the css and image are loaded by making our express as static 
app.get("/",(req,res)=>{
   res.sendFile(__dirname+"/index.html");
})
app.get("/user",(req,res)=>{
    res.send("HEllo users");// call it with http://localhost:3000/user
})
app.listen(3000);