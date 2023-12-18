/* What is array in javascript?
-> A array is data structure which is used to store a collection of multiple items under a single variable name.

a. Properties of array:
-> JavaScript arrays are resizable and can contain a mix of different data types.
-> JavaScript arrays are not associative arrays.
-> JavaScript arrays are zero-indexed.
*/

/*
Syntax:
    let array_name=[]; (empty array)

    methods:
    -> push();
    ->slice();
    -> length;
    -> join();
    -> forEach();
*/

let ratings=[1,2,3,4,5];
console.log(ratings[0]);

ratings.push(6);
ratings.push("mango");
console.log(ratings[6]);

/*
objects: An object is a collection of properties, and a property is an association between a name (or key) and a value.
A property's value can be a function, in which case the property is known as a method.

example: A cup is an object, with properties. A cup has a color, a design, weight, a material it is made of, etc.

imp-> It is a common practice to declare objects with the const keyword.

SYNTAX:
const obj={
    key1:value1,
    key2:value2
};

value can be function also and array,object etc.
*/
let i=0;
const car={
    name:"Mercedes",
    color:"black",
    drive:function (){
        console.log(i++);
    },
    stop:function (){
        i=0;
        console.log(0);
    }
}

console.log(car.name);
console.log(car.color);
car.drive();
car.stop();
car.drive();
car.drive();