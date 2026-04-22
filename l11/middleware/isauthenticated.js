
 export const isauthenticated=function(req,res,next){
    console.log("This is a middleware function");
  next();//next is a function that is used to pass the control to the next middleware function in the stack. If we don't call next(), the request will be left hanging and the server will not respond. 
 }
