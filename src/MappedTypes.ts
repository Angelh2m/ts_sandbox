
type Properties = "propA" | "propB";

// ================================================
// ================================================


// DYNAMIC OBJECT TYPE :: Like Record
type MyMappedType<T> = {
    // For every property in the object : return  { a: "a", b: "b" }
    [P in keyof T]: T[P]
}
type newType = MyMappedType<{ a: "a", b: "b" }>;

// type newType = {
//   a: "a";
//   b: "b";
// }

// ================================================
// ================================================

// PICK TYPES :: Pick dynamic types from an Object
type Pick1<T, Properties extends keyof T> = {
    [P in Properties]: T[P]
}


type MyType2 = Pick1<{ a: "a", b: "b" }, "a" | 'b'>

// type MyType2 = {
//   a: "a";
// }

// type MyType2 = {
//   a: "a";
//   b: "b";
// }

// ================================================
// ================================================

