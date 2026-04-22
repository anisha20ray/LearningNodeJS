// const EventEmitter=require("emitter"); //this is my custom event emitter 

const Emitter=require("events"); //this is core node.js module events

const events=require("./config").events;



const emitr=new Emitter();

    console.log("Hello");


emitr.on(events.FILEOPEN,function(){
    console.log("File opened");
})

emitr.on(events.FILECLOSE,function(){
    console.log("File closed");
})

emitr.on("my-age",function(){
    console.log("My age is 25");
})

emitr.emit(events.FILEOPEN);
emitr.emit(events.FILECLOSE);
emitr.emit(events.GREET);