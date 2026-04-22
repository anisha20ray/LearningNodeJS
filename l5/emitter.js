//event->
// this a event created by us and we can trigger it whenever we want
function Emitter(){
    this.events={}
}

//[cb1,cb2,cb3]

//on is used to register the event and its callback function
Emitter.prototype.on=function(type,eventListner){
    this.events[type]=this.events[type]||[];
    this.events[type].push(eventListner);
}


//emitter is used to trigger the event and execute the callback function
Emitter.prototype.emit=function(type){
    if(this.events[type]){
        this.events[type].forEach(listner=>{
            listner();
        })
    }
}

module.exports=Emitter;