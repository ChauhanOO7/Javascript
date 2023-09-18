//settime_out-->  setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.

//syntax--> setTimeout(code, delay(milliseconds));  --> if delay=0 then it means execute immediately.
// what it does?--> it takes the code somewhere and store it till the delay time.

setTimeout(function res(){
    console.log("Hey...");
},1000);

//question -> You want to print numbers 1 to 5 after some time=current number.

//Here are two solutions first comment out one of them and then run the solution and vice-versa.

function val()
{
    for(let i=1;i<=5;i++)
    {
        setTimeout(function res(){
        console.log(i);
        },i*1000);
    }
    
}

val();

//or you can do this using clousure while using var(because var is a function scoped).


function val1()
{
    for(var i=1;i<=5;i++)
    {
        function pass(i)
        {
            setTimeout(function res(){
                console.log(i);
            },i*1000);
        }
        pass(i);
    }
}

val1();


