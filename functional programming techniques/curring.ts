// Currying is a functional programming technique that allows us to partially apply
// a function without having to worry about the way in which we implement our
// functions. Currying is the process of taking a function that takes multiple
// arg(uments and transforming it into a chain of unary functions. The following
// function allows us to transform a function, fn , which takes two arguments, a and
// b , into a function that takes one argument, a , and returns another function that
// takes one argument, b : function

const curry=<T1,T2,T3>(fn:(a:T1,b:T2)=>T3)=>(a:T1)=>(b:T2)=>fn(a,b)

const add2=(a:number,b:number)=>a+b;
const multiply=(a:number,b:number)=>a*b;

const addCurry=curry(add)
const addResult=addCurry(5)
console.log(addResult(4)); // => 9

const multiplyCurry=curry(multiply)
const multiplyResult=multiplyCurry(5)
console.log(multiplyResult(3));//=>15

// In the preceding section on functional partial application, we learned how to use
// partial application to use compose with functions that are not unary. 
// We declaredthe following function named replace and then passed it to the compose function:


const replace3=(a:string,b:string)=>(s:string)=>s.split(a).join(b)
const trimCapitalizeAndReplace3 =compose(trimAndCapitalize,replace2("/", "-"))

// We can declare a function named curry3 , which transforms a ternary function into
// a chain of three unary functions:
const curry3=<T1,T2,T3,T4>(fn:(a:T1,b:T2,s:T3)=>T4)=>(a:T1)=>(b:T2)=>(s:T3)=>fn(a,b,s)
const replace4=(a:string,b:string,s:string)=>s.split(a).join(b)
const curryReplace=curry3(replace4)
const trimCapitalizeAndReplace4=compose(trimAndCapitalize,curryReplace('a')('r'))
trimCapitalizeAndReplace4('ahmad')
