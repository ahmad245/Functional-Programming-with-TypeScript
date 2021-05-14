// The Functor (Applicative , Mabye,Either,Monads) type has two main characteristics:
// It holds a value
// It implements a method named map

//This process allows for some interesting composition, specifically function composition since we can chain functions to one another.

// Array is Functor [].map(fn1).map(fn2)  // [1, 2, 3].map(val => val * 2); //generates [2, 4, 6]

// string  stringFunctor take a value and function =>wrap this value with this function
const stringFunctor=(value:string,transform:(value:any)=>any)=>{
   const chars=value.split('')
  return chars.map((char)=>{
      return String.fromCharCode(transform(char.charCodeAt(0)))
   }).join('')
}
const inc=(s:any)=>s + 1 ;
stringFunctor('ABC',inc)
//So, we can see that Array is a functor, because it respects the same type (results in other Array instance) and the connections too (have the same number of items).

//promise is Functor // .then(fn1).then(fn2)


//ex: without Functor
const add1=(x:number)=>x+1;
const time2=(x:number)=>x*2;
const sub2=(x:number)=>x-2;

const arr1=[1,2,3];
arr1.map((el)=>{
    return add1(time2(sub2(el)))
})

//ex with Functor
arr1.map(sub2).map(time2).map(add1)

// Functor using js
interface IFunctor<T,TMap>{
    map:(value:T)=>IFunctor<T,TMap>
    value:T
}
const Functor=<T,TMap>(val:T)=>{
  return {
      map:(transform:(val:T)=>TMap) => Functor(transform(val)),
      val
  }
}
const resultFunctor= Functor([1,2,3])
resultFunctor.map(el=>el.toString())


// The following code snippet declares a class named Container . This class can be
// considered a Functor :

class Container<T>{
    public constructor(private _value:T){}
    public map<TMap>(transform:(val:T)=>TMap){
      return new Container(transform(this._value))
    }
}
const double=(x:number)=>x*2;
const add7=(x:number)=>x+7;
const container=new Container(10) // 
container
    .map(double) // it its return the same type of object for chain functions
    .map(add7) ;
    
const incString=(s:any)=>s + 1 ;

const addToString=(value:string)=>{
  const chars=value.split('');
   const re=  chars.map((char)=>String.fromCharCode( incString(char.charCodeAt(0) ) ))
   console.log(re)
   return re

}
const stringFunc=new Container('ABC');
console.log(stringFunc.map(addToString))    


