// map,reduce and filter are the methods which we used to manipulate with the data present in array.

/*
1. map method is used when we want transformation of whole array.
2. filter is used when we want to filter the array to obtain required value.
3. Reduce is used when we want to reduce the array to single value eg (max, min, avg, sum, difference etc).
4. Reduce passes two arguments: 
-> one function(which includes accumulator and initial value as argument itself) like-> function red(acc,curr){};
-> another initial value of accumulator. (like acc=0)
*/


//map:

const numbers=[1,2,3,4,5];

const doubles=numbers.map(function x(y){
    return y*2;
});

/*
A function to execute for each element in the array. Its return value is added as a single element in the new array.
*/

console.log(doubles[0]);

//or

const doubles1=numbers.map((x)=>{
    return x*2;
});

console.log(doubles1[0])

//or

const doubles2=numbers.map((x)=>x*2);

console.log(doubles2[0]);

//filter:

const num=[1,2,3,4,5];

const output=num.filter((x)=>{
    return x%2===0;
}); //print even numbers

/*
A function to execute for each element in the array.
It should return a truthy value to keep the element in the resulting array, and a falsy value otherwise.(return a boolean value)
*/

console.log(output[1]);

//reduce:

const sum=num.reduce((acc,curr)=>{
    acc=acc+curr;
    return acc;
},0);

console.log(sum);