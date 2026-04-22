import express from 'express';

 const app=express();

 app.use(function(req,res,next){
    console.log("This is a middleware function");
  next();//next is a function that is used to pass the control to the next middleware function in the stack. If we don't call next(), the request will be left hanging and the server will not respond. 
 });

 app.get("/",(req,res)=>{
    res.send("Hello World");
 });

 app.listen(8000,()=>{
    console.log("Server is running on port 8000");
 });

