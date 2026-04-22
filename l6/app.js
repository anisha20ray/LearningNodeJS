const fs=require("fs");

//Reading file

/*console.log("before reading file");
fs.readFile("input.txt",'utf-8',(err,data)=>{  //this is asynchronous method of reading file, it will not block the event loop until the file is read completely
    if(err) throw err;
    console.log(data);
});

console.log("after reading file");

const data=fs.readFileSync("input.txt",'utf-8'); //this is synchronous method of reading file, it will block the event loop until the file is read completely
console.log(data);

//writing file

fs.writeFile("input.txt","This is new data",(err)=>{
    if(err) throw err;
    console.log("File written successfully");
});

fs.appendFile("input.txt"," \nThis is appended data",(err)=>{
    if(err) throw err;
    console.log("File appended successfully");
});


//deleting file

/*fs.unlink("input.txt",(err)=>{
    if(err) throw err;
    console.log("File deleted successfully");
});*/

//the above is not recommended for large files

//recommended is stremes for large files

const readStream=fs.createReadStream("input.txt",'utf-8');

readStream.on("data",(chunk)=>{
    console.log(chunk);
});

readStream.on("end",()=>{
    console.log("File read successfully");
}); 

const writeStream=fs.createWriteStream("output.txt");

writeStream.write("This is data written to output.txt");
writeStream.end();

//pipe->it is used to transfer data from one stream to another stream

const readStream1=fs.createReadStream("input.txt",'utf-8');
const writeStream1=fs.createWriteStream("output.txt");

readStream1.pipe(writeStream1);