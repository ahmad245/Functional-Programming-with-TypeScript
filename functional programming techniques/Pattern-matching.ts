// Pattern matching allows you to match a value (or an object) against some
// patterns to select a branch of the code. In functional languages, pattern matching
// can be used to match on standard primitive values such as strings. TypeScript
// allows us to implement pattern matching using literal types and control flow
// analysis.
// For example, we can define three types, named Circle , Square , and Rectangle . We
// can then define a new type, named Shape , which is the union of the Circle , Square ,
// and Rectangle types:

const enum ShapeKind {
    circle = "circle",
    square = "square",
    rectangle = "rectangle",
}
type Circle = { kind: ShapeKind.circle, radius: number }
type Square = { kind: ShapeKind.square, size: number }
type Rectangle = { kind: ShapeKind.rectangle, w: number, h: number }

type Shape = Circle | Square | Rectangle;

const area = (shape: Shape) => {
    switch (shape.kind) {
        case ShapeKind.circle:
            return shape.radius ** 2;
        case ShapeKind.square:
            return shape.size ** 2;
        case ShapeKind.rectangle:
            return shape.w * shape.h;
        default:
            throw new Error("Invalid shape!");
    }
}
area({kind:ShapeKind.circle,radius:5})