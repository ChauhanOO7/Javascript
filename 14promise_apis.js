/*
There are 4 promises apis-:
1. promise.all()
2. promise.allSettled()
3. promise.race()
4. promise.any()

imp-> these all apis take an array as a input and give output as an array.

1. promise.all() :

-> In this all the promises must be fullfilled, if any promise is failed then it return an error.
-> wait for none.

2. promise.allSettled() :

-> In this it wait for all the promises to be settled , and return an array with successfull promises result and an error for failed promises.

3. promise.race() :

-> It is a kind of race of promises.
-> whichever promise is settled first, it return its result. (there is a difference between settled and fullfilled)(settled means it gives an error
    or gives a value)
-> if it is failed then it return an error.
-> it return a value not a array.

4. promise.any() :

-> it wait for first fullfilled promise.
-> if gets then it return its value.
-> but if all promises are failed then it return an array of errors.

imp-> array of errors in this case known as aggregate error.




*/