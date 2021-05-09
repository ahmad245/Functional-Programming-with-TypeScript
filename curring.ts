// Currying is a functional programming technique that allows us to partially apply
// a function without having to worry about the way in which we implement our
// functions. Currying is the process of taking a function that takes multiple
// arg(uments and transforming it into a chain of unary functions. The following
// function allows us to transform a function, fn , which takes two arguments, a and
// b , into a function that takes one argument, a , and returns another function that
// takes one argument, b : function

const curry=<T1,T2,T3>(fn:(a:T1,b:T2)=>T3)=>(a:T1)=>(b:T2)=>fn(a,b)

const add2=(a:number,b:number)=>a+b;
const addCurry=curry(add)
const addResult=addCurry(5)
console.log(addResult(5)); // => 
