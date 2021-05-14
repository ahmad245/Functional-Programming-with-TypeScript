// Point-free style, also known as Tacit programming, is a programming style in
// which function declarations do not declare the arguments (or points) on which
// they operate.
interface Person{
    age: number;
    birthCountry: string;
    naturalizationDate: Date;
}


const OUR_COUNTRY = "Syria";
const wasBornInCountry = (person:Person)=>person.birthCountry === OUR_COUNTRY;
const wasNaturalized = (person:Person)=>Boolean(person.naturalizationDate) ;
const isOver18 = (person:Person)=>person.age >= 18 ;

const isCitizen = (person:Person)=>wasBornInCountry(person) || wasNaturalized(person) ;
const isEligibleToVote=(person:Person)=>isCitizen(person) && isOver18(person);

// point-free
// either and  both function
const both=<T>(fn1:(a:T)=>boolean,fn2:(a:T)=>boolean)=>(a:T)=>fn1(a) && fn2(a) ;
const either=<T>(fn1:(a:T)=>boolean,fn2:(a:T)=>boolean)=>(a:T)=>fn1(a) || fn2(a) ;

const isCitizen2=either(wasBornInCountry,wasNaturalized); // instead of writing isCitizen = (person:Person)=>wasBornInCountry(person) || wasNaturalized(person) ;
const isEligibleToVote2=both(isCitizen2,isOver18)

isCitizen({age:19,birthCountry:'Syria',naturalizationDate:new Date()})
isEligibleToVote({age:19,birthCountry:'Syria',naturalizationDate:new Date()})

// This style, in which we avoid referencing function arguments, is known as the
// point-free style, and it has a number of advantages over the more conventional
// function declaration style:
// It makes programs simpler and more concise. This isn't always a good thing, but it can be.
// It makes algorithms easier to understand by focusing only on the functions
// being combined. We get a better sense of what's going on without the data
// arguments getting in the way.
// It forces us to think more about how data is used than about which data is
// being used.
// It helps us think about our functions as generic building blocks that can
// work with different kinds of data, rather than thinking about them as
// operations on one kind of data.