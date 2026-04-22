import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import userRoute from './route/user.js';

dotenv.config();
const app = express();
const PORT=process.env.PORT || 3000;


//important middleware used in express to parse the incoming request body and make it available in req.body
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use("/api/v1/user",userRoute);//we are using the userRoute for all the routes that start with /api/v1/user. So, we don't have to write /api/v1/user in every route in userRoute. We can just write /register and /login in userRoute and it will work.

/*app.post("/api/v1/user/register",(req,res)=>{
   // const {name,email,password}=req.body;
  const obj=req.body;
  console.log(obj);

  //save data in database

  res.status(200).json({
    success:true,
    message:"Account created successfully."
  })
})

app.post("/api/v1/user/login",(req,res)=>{
   const {name,email,password}=req.body;
  
  console.log(email,password);

  //save data in database

  res.status(200).json({
    success:true,
    message:"Account logined successfully."
  })
})*/

console.log(PORT);
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
