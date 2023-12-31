/*Closure-> A closure is the combination of a function bundled together (enclosed) with references to its 
surrounding state (the lexical environment).
A closure is a feature of JavaScript that allows inner functions to access the outer scope of a function.
*/

/*imp--> closure always  target the reference of variable.
*/

function pick_inside_value()
{
    let value=100;
    function main_value()       //here main_value is a closure.
    {
        console.log(value*value);
    }

    return main_value();
}

let m=pick_inside_value();
console.log(m);


function z()
{
    let val=100;
    function y()
    {
        let val=200;
        function x()        //x form a closure with y and z.
        {
            console.log(val*val);
        }
        return x();
    }
    return y;       //bleow 2nd point talking about this, but if (return y()) then read 1st point below.
}

z()();          //you can imagine that it is written in the form of y() as z()=y;

/*
important-
1.The z function is called, and it returns the result of calling y(), which in turn returns the result of calling x().

2.The z function is called, but this time it returns the y function itself (not the result of calling it). So, when you run z(), it does not 
execute the entire chain of functions immediately. Instead, it returns the y function.
*/
