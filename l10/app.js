const express=require("express");
//1 step to create server using express
const app=express();
//2 step to create route

//app.get(),app.put(),app.delete(),app.patch() for handling different http methods

app.get("/home",(req,res)=>{
   res.send("<h1>hello i am coming from express</h1>");
  // res.send("hello");
  
})

app.get("/api/v1/user/profile",(req,res)=>{
      res.status(200).json({
        success:true,
        user:{
            username:"Anisha",
            age:24,
            address:"delhi"
        }
      });
    })

    app.get("/api/v1/user/about",(req,res)=>{
      res.status(200).json({
        success:true,
        user:{
            username:"Anisha",
            age:24,
            address:"delhi",
            hobbies:["singing","dancing","cooking"]
        }
      });
    })
        
      app.get("/api/v1/product/:productId/comment/:commentId",(req,res)=>{
       const id=req.params.productId;
       const commentId=req.params.commentId;
      // const{id,commentId}=req.params;  //destructuring
       console.log(id);
       res.status(200).json({
        success:true,
        productId:id
       })
      })

app.listen(8000,()=>{
    console.log('server listen at port 8000');
})

//nodemon app.js  for auto restart server after changes in code