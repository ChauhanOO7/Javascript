//functions statemennt or function declaration

function cal()
{
    console.log("result");
}

//function expression

let b=function (){

    console.log("value");
}
//or
let a=function val()
{
    console.log("value1");
}

//Anonymous function -->  function having no name like in first example of function expression.

//Named function expression-> second example of function expression.

/*

difference between parameters and arguments
parameters-> local variable which is present in function defintion.
like-> function name(para1,para2){}.

arguments-> value that is passed to the function.
like -> name("Saurabh","Chauhan").

*/

/*
first class function-> ability to use as a value.
like passing function as a arguments or return a function like a value.
*/

/*

Higher order function:
-> the functions which takes function as a argument or return a function as a result.

*/
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => console.log(number + 1));

/*
Arrow function-> 

*/