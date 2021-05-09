 //EN
// Composition
// Functional composition is a technique or pattern that allows us to combine
// multiple functions to create a more complex function.
//FR
// La composition fonctionnelle est une technique ou un modèle qui nous permet de combiner plusieurs fonctions pour créer une fonction plus complexe.

const trime=(s:string)=>s.trim();
const capitalize=(s:string)=>s.toUpperCase();
const firstChar=(s:string)=>s.charAt(0)

// using composition 
const trimAndCapitalizeSimple=(s:string)=>capitalize(trime(s))
trimAndCapitalizeSimple('ahmad');
const compose = <T>(f:(x:T)=>T,g:(x:T)=>T)=>(x:T)=>f(g(x))

const trimAndCapitalize=compose(capitalize,trime)
trimAndCapitalize('ahmad')

// EN
// The type of the only argument of f must match the
// return type of the g function. These limitations can be expressed in a more
// correct definition of the compose function:
//FR
//Le type du seul argument de f doit correspondre au type de retour de la fonction g. 
 //Ces limitations peuvent être exprimées dans une définition plus correcte de la fonction composite:

const compose2=<T1,T2,T3>(f:(x:T2)=>T3,g:(x:T1)=>T2)=>(x:T1)=>f(g(x))
const composed1=compose2(trime,capitalize)
const composed2=compose2(trime,capitalize)
const composed3=compose2(composed1,composed2)

//EN
// Or we can declare a higher-order function to compose three functions in a single call:
//FR
//Ou nous pouvons déclarer une fonction d'ordre supérieur pour composer trois fonctions en un seul appel
const compose3=<T1,T2,T3,T4>(
    f:(x:T3)=>T4,
    g:(x:T2)=>T3,
    h:(x:T1)=>T2
    )=>(x:T1)=>f(g(h(x)))
//EN    
//We can also create a helper that allows us to compose an unlimited number of functions:
//FR
//Nous pouvons également créer un assistant qui nous permet de composer un nombre illimité de fonctions:
const composeMany=<T>(...fun:((args:T)=>T)[])=>
 (arg:any)=>
  fun.reduce((prev,acc)=>{
      return acc(prev)
  },arg)
  const composed=composeMany(trime,capitalize,firstChar)
  console.log(composed('ahmad'));
//EN  
//   Functional composition is an extremely powerful technique, but it can be hard toput into practice in certain scenarios,
//    for example, when our functions are notunary functions. However, 
//    there are other techniques, such as functional partial application, that can help in those scenarios, as we will see in the following section
//FR
//La composition fonctionnelle est une technique extrêmement puissante, mais elle peut être difficile à mettre en pratique dans certains scénarios,
// par exemple, lorsque nos fonctions sont des fonctions notunaires. cependant,
// il existe d'autres techniques, telles que l'application partielle fonctionnelle, qui peuvent aider dans ces scénarios, comme nous le verrons dans la section suivante