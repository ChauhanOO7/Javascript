//Javascript is a synchronous and single threaded language.

/*What is callback function in javascript?
A callback is a function that is passed as an argument to another function, and is called after the main function has finished its execution.
The main function is called with a callback function as its argument, and when the main function is finished, it calls the callback function to 
provide a result. Callbacks allow you to handle the results of an asynchronous operation in a non-blocking manner, which means that the program 
can continue to run while the operation is being executed.
*/

/*
Why?
Callbacks are used to handle the results of asynchronous operations in a non-blocking manner.
Asynchronous operations are operations that take a significant amount of time to complete, such as network requests, file I/O, and database queries.
If these operations were executed synchronously, the program would freeze and wait for the operation to complete before continuing.
This can lead to a poor user experience, as the program would appear unresponsive.
That's why we use callback functions.
*/

function n(y)
{
    console.log("hey");
    y();
}

n(function (){
    console.log("bye");
});

// in settimeout function we also use callbacks function.

/*
Why we need to remove event listener?
because it takes lot of memory.

what is garbage collection in javascript?
it is a automatic memory management technique.
An object with zero references is considered to be garbage or “collectible”.
when event listener is removed then the objects related to it considered to be garbaged.

*/


/*

-> Issues with callbacks:

1. Callback Hell:
Callback Hell is essentially nested callbacks stacked below one another forming a pyramid structure.
Every callback depends/waits for the previous callback,thereby 
making a pyramid structure that affects the readability and maintainability of the code. 

2.Inversion of control:

The first part of our program that executes now and the second part that executes in the callback
and when we give that callback to someone else(like, for example, an external API).
That’s what inverts the control and puts them in charge of executing the second part of our program .
*/
