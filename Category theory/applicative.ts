// An Applicative is a Functor that implements a method named of . However, an
// Applicative is not just a Functor type; it is also an Apply type. For a type to be an
// implementation of Apply , it must implement a method named ap that takes a
// Functor that wraps a function as an argument.
class ContainerApplicative<T>{
    public constructor(private _value: T) { }

    public static of<TVal>(val: TVal) {
        return new ContainerApplicative(val)
    }

    public map<TMap>(fn: (val: T) => TMap) {
        return new ContainerApplicative<TMap>(fn(this._value))
    }

    //We use .ap() when we have a function inside of a functor and want to call that function with a value that is also in a functor.

    public ap<TMap>(c: ContainerApplicative<(val: T) => TMap>) {
        return c.map(fn => this.map(fn))
    }

}

const double2 = (x: number[]) => x.map((el) => el * 2);
const numberContainer = ContainerApplicative.of([5])
const functionContainer = ContainerApplicative.of(double2)
numberContainer.map(double2) // Returns Container<number> with value 6

// Alternatively, we can use the ap function to perform the same operation using a
// Functor that wraps a function instead of a function:
numberContainer.ap(functionContainer)// Returns Container<number> with value 6