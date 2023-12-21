/*
1. What is async?
-> async is a keyword which is used before a function to make it a async function.

imp->  async function always return a promise and if not return a promise then it wraps up the value inside a promise and then return.

2. What is await?
-> The await keyword is used to wait for a Promise and get its fulfillment value.
   It can only be used inside an async function or at the top level of a module.



3. Why we need async and await both at the same time?
-> It is used to handle promises.

imp-> asyn/await functionality helps you to make your promise execute where it is called(or if you want your promises execute in a order)
if you not used asyn/await function then it will execute your promise in the end.
like you see in normal code which is written below.

imp-> if you using await with a promise then no need of using then you can directly use promise anywhere.

*/


//normal code.

function aftersometime()
{
   let promise=new Promise(function(resolve,reject){
      setTimeout(()=>{
         resolve("hello");
      },2000);
   });

   promise.then((result)=> console.log(result));

   console.log(", How are you?");
   
}

aftersometime();

console.log("Hey");




//code with asyn and await


async function printsome()
{
   const promise1=await new Promise(function(resolve,reject){
      setTimeout(()=>
      {
         resolve("Hello");
      },2000);
   });

   console.log(promise1);
   console.log(", How are you?");
   
}

printsome();

console.log("Hey");
