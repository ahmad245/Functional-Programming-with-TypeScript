// Partial application is a functional programming technique that allows us to pass
// the arguments required by a function at different points in time.
// The following code snippet implements a function that doesn't support partial
// application and invokes it (providing all the required arguments) at a single point
// in time:
function add(a: number, b: number) {
return a + b;
}
const result = add(5, 5); // All arguments are provided at the same time
console.log(result); // 10

// The following code snippet implements the preceding function using a higher-
// order function to allow us to provide the required arguments at different points in
// time:

const addPartial=(a:number)=>(b:number)=>a+b;
const add5=addPartial(5)
const resultPartial=add5(5)

//We can also write a function that allows both its complete and partial application:
const addComplite=(a:number,b?:number)=>{
    if(b) return a+b;
    return (b2:number)=>a+b2
}
/********************************************************************************************/
//Function composition works very well with unary functions, but not so well with
//binary, ternary, or variadic functions. We are going to declare the following function to demonstrate it:

const trim2=(s:string)=>s.trim();
const capitalize2=(s:string)=>s.toUpperCase();
const trimAndCapitalize2 = compose(trim2, capitalize);

const replace=(a:string,b:string,s:string)=>s.split(a).join(b) // const trimCapitalizeAndReplace=compose(trim2,replace) // error : replace need two args
// using compose and partial  compose => compose=(f,g)=>(x)=>f(g(x)) and partial replace =(x,y)=>(s)=>s.split(x).join(y)
const replace2=(a:string,b:string)=>(s:string)=>s.split(a).join(b)
const trimCapitalizeAndReplace=compose(trimAndCapitalize2,replace2('a','r')) //=>(s:sting)
trimCapitalizeAndReplace('ahmad') // => trimAndCapitalize2(replace2('a','r'))=> Rhmad
/********************************************************************************************/

// Thanks to our knowledge of functional partial application, we can easily use the
// compose function without having to worry about the arity of the functions.
// However, enabling partial application requires a significant amount of manual
// boilerplate. In the next section, we will learn how a functional programming
// technique, known as currying, can help us to solve this problem
