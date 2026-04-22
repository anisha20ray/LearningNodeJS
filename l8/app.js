const http=require('http');

//giving route to server

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
      res.writeHead(200,{'Content-Type':'text/plain'});
      res.end("home page");

     }else if(req.url==="/api/user"){
     const user={
        name:"Bhaskar",
        age:24,
        email:"anni@gmail.com"
     }
     const data=JSON.stringify(user);
     console.log(JSON.parse(data));
     res.writeHead(200,{'Content-Type':'application/json'})
     res.end(data);
     }else if(req.url==="/login"){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end("login successfully");
     }else if(req.url==="/signup"){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end("signup successfully");
     }else{
        res.writeHead(404,{'Content-Type':'text/html'});
        res.end("<h1>404 page not found</h1>");
     }
})

server.listen(8000,()=>{
   console.log("server listen at port 8000");
})