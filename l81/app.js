//handling methods for submitting a form on server
//GET,POST,PUT,DELETE,PATCH
const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.method==='POST'&& req.url==='/submit'){
        // Handle form submission
        let body="";
        req.on('data',(chunk)=>{
            body+=chunk.toString();  //convert buffer to string
        })

        //end event triggered when all data received
        req.on('end',()=>{
            console.log(JSON.parse(body));
            res.writeHead(200,{'Content-Type':'application/json'});
            res.end(JSON.stringify({success:true,message:"account created successfully"}));
        })
    }else{
         res.writeHead(404,{'Content-Type':'application/json'});
            res.end(JSON.stringify({success:false,message:"Invalid request"}));
    }
});


server.listen(9000,()=>{
    console.log("server listen at port 8000");
});