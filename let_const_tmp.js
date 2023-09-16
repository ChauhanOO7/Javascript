// let and const are both hoisted but in different way.

/*
In var-
1.we can redeclare and updated.
2.Both global and function scoped.

In let-
1.we can not redeclare but update it.
like-
    let a=10;
    let a=10;
2.only block scoped.

In const-
1.can not redeclare and block scoped.
2.we can not update it.
*/

//*If users use the let variable before the declaration, it does not initialize with undefined just like a var variable, and returns an error.
//like in below example.

/*
console.log(x);
console.log(z);
var x = 6;
let z = 6;
console.log(x);
console.log(z);

*/

/*
Explanation:

1.First of all the Global execution context will be created.
2.And then the memory allocation phase starts, During this, the variable x got a place in memory and javascript puts undefined there.
3.And then the variable z gets space in a different place of memory(TDZ or another place named Script) and same as variable x then undefined wil
be assigned as value.
4.Then the thread execution phase starts, During this console.log(x) statement executes and prints the value of x, which is undefined.
5.In the next line, there is console.log(z), javascript will throw ReferenceError and the program will stop here.
*/

/*
temporal dead zone(tdz)- the starting of the execution of block in which the let or const variable is declared till that variable is being 
initialized is called Temporal Dead Zone for the variable.
During this zone javascript will always through a reference error if anyone tries to access those variables. 
*/

//* to avoid temporal zone you have to initialize variables at the top of the program.

//correct code-

let a;  //declare first
console.log(a);
a=10;
console.log(a);

//for const you have to declare and initialize with a value also.

const b=1000;
console.log(b);