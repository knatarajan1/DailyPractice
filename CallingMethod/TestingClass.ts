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
let str:string = "apple banana cherry apple banana cherry apple banana cherry apple banana cherry apple apple banana banana cherry cherry apple banana cherry APPLE BANANA CHERRY apple-banana cherry apple banana cherry! apple, banana, cherry. apple banana cherry banana apple cherry banana apple cherry banana apple cherry banana apple cherry cherry cherry cherry banana banana banana apple apple apple repeat repeat repeattest test test testing testing testing tested tested tested string string string apple banana cherry apple banana cherry apple banana cherry apple banana cherry apple banana cherry apple banana cherry apple banana cherry apple banana cherry word word word word word word word word word word word word word word word word banana banana banana banana banana banana banana banana banana banana banana banana cherry cherry cherry cherry cherry cherry cherry cherry cherry cherry cherry cherry apple apple apple apple apple apple apple apple apple apple apple apple apple apple repeat repeat repeat repeat repeat repeat repeat repeat repeat repeat repeat repeat test test test test test test test test test test test test test test test test testing testing testing testing testing testing testing testing testing testing tested tested tested tested tested tested tested tested tested tested tested tested string string string string string string string string string string string string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG the quick brown fox jumps over the lazy dog THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG the quick brown fox jumps over the lazy dog apple banana cherry apple banana cherry apple banana cherry apple banana cherry apple banana cherry apple banana cherry apple banana cherry apple banana cherry banana apple cherry banana apple cherry banana apple cherry banana apple cherry cherry cherry cherry banana banana banana apple apple apple repeat repeat repeat test test test testing testing testing tested tested tested string string string word word word word word word word word word word word word word word word word banana banana banana banana banana banana banana banana banana banana banana banana cherry cherry cherry cherry cherry cherry cherry cherry cherry cherry cherry cherry apple apple apple apple apple apple apple apple apple apple apple apple apple apple";
console.log(test.validateHighestAndLowestOccuranceInWord(str));