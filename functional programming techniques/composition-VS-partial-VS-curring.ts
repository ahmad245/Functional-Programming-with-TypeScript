// Composition
// Partial application
// Currying
// Pipes
// Point-free style
// Recursion
// Pattern matching

// composition  allows us to combine multiple functions to create a more complex function.
const compositionTest=<T1,T2,T3>(f:(x:T2)=>T3,g:(x:T1)=>T2)=>(x:T1)=>f(g(x))

// patial allows us to pass the arguments required by a function at different points in time.
const replaceTest=(a:string,b:string,s:string)=>s.split(a).join(b)
const replasePartial=(a:string,b:string)=>(s:string)=>s.split(a).join(b) // resultReplace= replasePartial('a','b') =>function with one arg

// using composition with partial
const compostionPartial=compose(trimAndCapitalize2,replasePartial('a','b'))

// curring allows us to partially apply a function without having to worry about the way in which we implement our  functions as replasePartial
//taking a function that takes multiple arg
const curryTest=<T1,T2,T3,T4>(fn:(a:T1,b:T2,s:T3)=>T4)=>(a:T1)=>(b:T2)=>(s:T3)=>fn(a,b,s)
const curryReplaceTest=curryTest(replaceTest)
const compostionPartialCurry=compose(trimAndCapitalize2,curryReplaceTest('a')('b'))
