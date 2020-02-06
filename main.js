const express=require("express");
const fs=require("fs");
const data=fs.readFileSync(__dirname+"/hello.txt","utf-8");
const app=express();
app.use("/static",express.static("public"));//faking the url of image and css in order to ensure more saftey. 
app.get("/",(req,res)=>{
   res.sendFile(__dirname+"/index.html");
})
app.get("/user/:id?/book/:bookid?",(req,res)=>{
    res.send("Hello users with id=>"+req.params.id+" and book id=>"+req.params.bookid);//? makes it optional for params call it with http://localhost:3000/user/3/bookid/4
})
/***
 * another example where we are showing the flight status and making it optional.
 */
app.get("/flight/:from?.:to?",(req,res)=>{
    res.send("Flight status from:"+req.params.from+" to:"+req.params.to);
})
app.listen(3000);