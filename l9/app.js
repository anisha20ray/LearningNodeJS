 const http=require("http");
 //const path=require("path"); alternate of http for printing on browser by backend
  
 const fs=require("fs");

 const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    const filePath=__dirname+"/index.html";

   // const dirPath=path.join(__dirname,"index.html");
   //const htmlContent=fs.readFileSync(dirPath);
   const htmlContent=fs.readFileSync(filePath);

    res.end(htmlContent);
 });

 server.listen(3000);
