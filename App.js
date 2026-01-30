 // fuction statement
 function greet(){
    console.log("greeting message");
 }
    greet(); // invoking the function

    //function are first class
    function logGreeting(fn){
        fn();
    }
    logGreeting(greet);


    // function expression
    const greetMe = function(){
        console.log("function expression greeting");
    }

    greetMe();

    //use the function expression on the fly
    // passing function as an argument
    logGreeting(function(){
        console.log("function expression greeting on the fly");
    });

    

