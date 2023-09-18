//Hoisting-  Hoisting is a concept that enables us to use values of variables and functions even before initializing value without getting errors
//and this happens during the 1st phase (memory creation phase) of the Execution Context.

//But hoisting is different for let/const variables.

//normal code
var cx=100;
function num()
{
    return 10;
}

console.log(cx);
console.log(num());


//with hoisting

console.log(cx1);
console.log(num1());

var cx1=200;

function num1()
{
    return 100;
}

// undefined- it's like a placeholder(or keyword) which takes place in memory until the actual value is not assigned.

// Not defined- when there is no allocation of memory for something then it said to be not defined.

/*Scope- The scope is the current context of execution in which values and expressions are "visible" or can be referenced.

scope of variable- Accessibility of a particular variable within the program.*/

//block-- grouping of multiple statements to appear as a single statement.It is done by { } these braces.

/* lexical environment--
A lexical environment is a data structure that holds identifier-variable mapping.
(here identifier refers to the name of variables/functions, and the variable is the reference to actual
object [including function object or primitive value].*/

/*
Lexical in general means in hierarchy or in a sequence.Whenever a new execution context(EC) is created a new lexical environment
is created and it is referenced in local EC in memory space.

Lexical Environment: Local Memory + Lexical Environment of its Parent.

So in short, a lexical environment is a place where variables and functions live or physically present during the program execution.
*/

// scope chain- A chain form when we move from one lexical to another lexical environment.



