// Pipes
// A pipe is a function or operator that allows us to pass the output of a function as the input of another.
// JavaScript and TypeScript don't support pipes natively (asan operator), but we can implement our pipes using the following function:
const pipe=<T>(...fns:((arg:any)=>T)[])=>(value:any)=> fns.reduce((prev,current)=>current(prev),value) // as compostion
const trimCapitalizeAndReplacePipe=pipe(
      trime,
      capitalize,
      curryReplace("/")("-")
      );
      