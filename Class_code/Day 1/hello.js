 console.log('hello errorss');

 function sqare(num){
    return num*num
 }
 console.log(sqare(32));

 function calculate(a,b,cb){
    let result = cb(a,b)
    return(result);
 }

 // add, sub,divide,multiply
 /*function add(a,b){
    return(a+b)
 }*/
 const add = (a,b ) => a+b;

 const subtract = (a,b ) => a-b;
 const divide = (a,b ) => a/b;
 const multiply = (a,b ) => a*b;

 console.log(calculate(6,1, add))
 console.log(calculate(6,1, subtract))
 console.log(calculate(6,1, multiply))
 console.log(calculate(6,1, divide))