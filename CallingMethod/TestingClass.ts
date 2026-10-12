import TestClass = require("./TestClass");
let arr: number[] = [3, 2, 1, 11, 0, 1, 4, 7]
let name: string = "Karthikeyan";
const test = new TestClass();
console.log("Original arr before sorting", arr);
test.validateSortedArrayAsc(arr);
console.log("Original arr after sorting ascending", arr);
test.validateSortedArrayDesc(arr);
console.log("Original arr after sorting descending", arr);
arr = [100, 11, 0, 14, 200, 1, 0.5, 3, -1, -2, 3]
console.log("Original arr before reversing", arr);
test.validateReverseAnyArray(arr);
console.log("Original arr after reversing", arr);
test.validateSortedArrayAsc(arr);
console.log("Original arr after sorting ascending", arr);
console.log("Original Name:", name);
console.log("Reversed Name:", test.validateReverseString(name));
