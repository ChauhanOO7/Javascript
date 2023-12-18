/*
1. What is Promises?
-> The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

-> A Promise is in one of these states:

a. pending: initial state, neither fulfilled nor rejected.
b. fulfilled: meaning that the operation was completed successfully.
c. rejected: meaning that the operation failed.

imp--> with the help of promises, we solve inversion of control problem by not passing callbacks but attaching it.

->  SYNTAX:
*/
    const cart=["milk","soap","pants"];
    const promise=createOrder(cart);

    promise.then(function (orderId)
    {
        proceedtopayment(orderId);
    });

    // APIs:
    //createOrder,proceedtopayment.

/*

Promise then() Method: It is invoked when a promise is either resolved or rejected.
It may also be defined as a carrier that takes data from promise and further executes it successfully.

-> SYNTAX:

.then(function(result){
        //handle success
});

2. What is promises Chaining?
->  Chaining of promises that passes the result of one promise to other promises and its goes on.
    When you have multiple asynchronous tasks that depend on each other, chaining promises can help avoid callback hell and make the code more
    linear.

    createOrder(cart).then(function(orderId){
        return proceedtopayment(orderId);
    }).then(function(paymentinfo){
        return showordersummary(paymentinfo);
    });

imp-> always return in chaining.

Imp-> Without the return statements, the subsequent then blocks would not receive the results of the previous asynchronous operations.
The return statement ensures that the value is wrapped in a new promise, and that promise becomes the input for the next then block.


3. How to create a promise?
-> Using constructor,
   
    SYNTAX:
    let or const promise=new Promise(function(resolve,reject){});

*/


function createOrder(cart)
{
    const promise1=new Promise(function(resolve,reject){
    
        if(!validatecart(cart))
        {
            const err=new Error("cart is not valid");
            reject(err);
        }

        const orderid="11111";
        resolve(orderid);
    });

    return promise1;
}

function validatecart(cart)
{
    return true;
}
function proceedtopayment(orderid)
{
    return new Promise(function(resolve,reject)
    {
        resolve("payment successful");
    });
}

createOrder(cart)
.then(function (orderid){
    console.log(orderid);
})
.then(function(orderid){
    proceedtopayment(orderid);
});

