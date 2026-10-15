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
const testStr =
  " \t\n\r\v\f" +                        // every ASCII whitespace at the start
  "Hello   World" +                     // multiple spaces in the middle
  "\t\tTab\tSeparated" +                // tabs
  "\nNew\nLine" +                       // Unix newlines
  "\r\nWindows\r\nLine" +               // Windows line endings
  "\u00A0Non\u00A0Breaking" +           // non-breaking space (copied from web/Word)
  "\u3000Ideographic\u3000Space" +      // wide space used in Chinese/Japanese text
  "\u2003Em\u2003Space" +               // em space (typography)
  "\u2028Line\u2029Para" +              // Unicode line and paragraph separators
  "\uFEFFBOM" +                         // byte order mark (start of some files)
  "\u200BZero\u200BWidth" +             // zero-width space: NOT whitespace (trap)
  " 🍎 Emoji 🍎 " +                     // emoji next to spaces (trap)
  "  End  \n\t ";                       // trailing mixed whitespace
console.log("Text before removing the white space:",testStr);
console.log("Text after removing the white space:",test.validateRemoveWhiteSpace(testStr));
const input = "Hello WORLD, TypeScript 5.4 is Fun! café ÉCOLE straße 🍎 Apple \tTab\nNew-Line_snake camelCase";
console.log("Before Swapping:",input);
console.log("After Swapping:",test.validateSwapEachCase(input));
console.log("*".repeat(200))

// ── Happy path ──
const a1 = [1, 2, 3];          const b1 = [1, 2, 3];          // O: true   U: true
const a2 = ["ACC01", "ACC02"]; const b2 = ["ACC01", "ACC02"]; // O: true   U: true

// ── Order ──
const a3 = [1, 2, 3];          const b3 = [3, 2, 1];          // O: false  U: true
const a4 = [10, 9, 1];         const b4 = [1, 9, 10];         // O: false  U: true

// ── Length / empty ──
const a5 = [1, 2, 3];          const b5 = [1, 2];             // O: false  U: false
const a6 = [1, 2];             const b6 = [1, 2, 2];          // O: false  U: false
const a7: number[] = [];       const b7: number[] = [];       // O: true   U: true
const a8: number[] = [];       const b8 = [1];                // O: false  U: false

// ── Duplicates ──
const a9 = [1, 1, 2];          const b9 = [1, 2, 2];          // O: false  U: false

// ── Type traps ──
const a10 = [1, 2, 3];         const b10 = ["1", "2", "3"];   // O: false  U: false
const a11 = [null];            const b11 = [undefined];       // O: false  U: false
const a12 = [0];               const b12 = [false];           // O: false  U: false

// ── String traps ──
const a13 = ["Teller"];        const b13 = ["teller"];        // O: false  U: false
const a14 = ["ACC01 "];        const b14 = ["ACC01"];         // O: false  U: false

// ── Your call: define the behaviour first ──
const a15 = [NaN];             const b15 = [NaN];             // === gives false, Object.is gives true
const a16 = [0];               const b16 = [-0];              // === gives true,  Object.is gives false

// ── Happy path ──
test.validateTwoArraysAreSame(a1, b1);    // O: true   U: true
test.validateTwoArraysAreSame(a2, b2);    // O: true   U: true

// ── Order ──
test.validateTwoArraysAreSame(a3, b3);    // O: false  U: true
test.validateTwoArraysAreSame(a4, b4);    // O: false  U: true

// ── Length / empty ──
test.validateTwoArraysAreSame(a5, b5);    // O: false  U: false
test.validateTwoArraysAreSame(a6, b6);    // O: false  U: false
test.validateTwoArraysAreSame(a7, b7);    // O: true   U: true
test.validateTwoArraysAreSame(a8, b8);    // O: false  U: false

// ── Duplicates ──
test.validateTwoArraysAreSame(a9, b9);    // O: false  U: false

// ── Type traps ──
//test.validateTwoArraysAreSame(a10, b10);  // O: false  U: false
test.validateTwoArraysAreSame(a11, b11);  // O: false  U: false
//test.validateTwoArraysAreSame(a12, b12);  // O: false  U: false

// ── String traps ──
test.validateTwoArraysAreSame(a13, b13);  // O: false  U: false
test.validateTwoArraysAreSame(a14, b14);  // O: false  U: false

// ── Your call ──
test.validateTwoArraysAreSame(a15, b15);  // depends on === vs Object.is
test.validateTwoArraysAreSame(a16, b16);  // depends on === vs Object.is

// ── Happy path ──
const s1 = "listen";          const t1 = "silent";            // S: true   N: true
const s2 = "triangle";        const t2 = "integral";          // S: true   N: true
const s3 = "evil";            const t3 = "vile";              // S: true   N: true
const s4 = "a";               const t4 = "a";                 // S: true   N: true

// ── Clear negatives ──
const s5 = "abc";             const t5 = "abd";               // S: false  N: false
const s6 = "abc";             const t6 = "ab";                // S: false  N: false

// ── Duplicate-count traps ──
const s7 = "aab";             const t7 = "abb";               // S: false  N: false
const s8 = "aabb";            const t8 = "ab";                // S: false  N: false

// ── Empty ──
const s9 = "";                const t9 = "";                  // S: true   N: true
const s10 = "";               const t10 = "a";                // S: false  N: false

// ── Case ──
const s11 = "Listen";         const t11 = "Silent";           // S: false  N: true
const s12 = "Debit card";     const t12 = "Bad credit";       // S: false  N: true

// ── Spaces ──
const s13 = "dormitory";      const t13 = "dirty room";       // S: false  N: true
const s14 = "Astronomer";     const t14 = "Moon starer";      // S: false  N: true
const s15 = "Clint Eastwood"; const t15 = "Old West Action";  // S: false  N: true
const s16 = "rail safety";    const t16 = "fairy tales";      // S: true   N: true  (one space each!)
const s17 = "abc";            const t17 = "cba ";             // S: false  N: true  (trailing space)

// ── Punctuation / digits ──
const s18 = "listen";         const t18 = "silent!";          // S: false  N: true
const s19 = "123";            const t19 = "321";              // S: true   N: true

// ── Your call: define the behaviour first ──
const s20 = "listen";         const t20 = "listen";           // identical: is a word its own anagram?
const s21 = "cafe\u0301";     const t21 = "éfac";             // looks the same, but é is stored differently
console.log("*".repeat(200))
test.validateTwoStringsAreAnagrams(s1, t1);
test.validateTwoStringsAreAnagrams(s2, t2);
test.validateTwoStringsAreAnagrams(s3, t3);
test.validateTwoStringsAreAnagrams(s4, t4);
test.validateTwoStringsAreAnagrams(s5, t5);
test.validateTwoStringsAreAnagrams(s6, t6);
test.validateTwoStringsAreAnagrams(s7, t7);
test.validateTwoStringsAreAnagrams(s8, t8);
test.validateTwoStringsAreAnagrams(s9, t9);
test.validateTwoStringsAreAnagrams(s10, t10);
test.validateTwoStringsAreAnagrams(s11, t11);
test.validateTwoStringsAreAnagrams(s12, t12);
test.validateTwoStringsAreAnagrams(s13, t13);
test.validateTwoStringsAreAnagrams(s14, t14);
test.validateTwoStringsAreAnagrams(s15, t15);
test.validateTwoStringsAreAnagrams(s16, t16);
test.validateTwoStringsAreAnagrams(s17, t17);
test.validateTwoStringsAreAnagrams(s18, t18);
test.validateTwoStringsAreAnagrams(s19, t19);
test.validateTwoStringsAreAnagrams(s20, t20);
test.validateTwoStringsAreAnagrams(s21, t21);
console.log("*".repeat(200))
// ── Happy path ──
const p1 = "madam";      // S: true   N: true   (odd length)
const p2 = "racecar";    // S: true   N: true
const p3 = "abba";       // S: true   N: true   (even length)
const p4 = "aa";         // S: true   N: true

// ── Boundaries ──
const p5 = "a";          // S: true   N: true   (single char)
const p6 = "";           // S: true   N: true   (empty: most specs say true)

// ── Clear negatives ──
const p7 = "ab";         // S: false  N: false
const p8 = "hello";      // S: false  N: false

// ── Near-miss traps ──
const p9  = "abca";      // S: false  N: false  (ends match, middle doesn't)
const p10 = "abcdba";    // S: false  N: false  (only the innermost pair differs)

// ── Case ──
const p11 = "Madam";     // S: false  N: true
const p12 = "Racecar";   // S: false  N: true

// ── Spaces ──
const p13 = "nurses run";  // S: false  N: true
const p14 = "madam ";      // S: false  N: true   (trailing space)
const p15 = "ab a";        // S: false  N: true
const p16 = "a b a";       // S: true   N: true   (spaces are symmetric!)

// ── Punctuation (classic phrases) ──
const p17 = "A man, a plan, a canal: Panama";  // S: false  N: true
const p18 = "Was it a car or a cat I saw?";    // S: false  N: true
const p19 = "No 'x' in Nixon";                 // S: false  N: true

// ── Digits ──
const p20 = "12321";     // S: true   N: true
const p21 = "123321";    // S: true   N: true
const p22 = "12345";     // S: false  N: false

// ── Your call: define the behaviour first ──
const p23 = "!!";             // S: true; N leaves an empty string, so is "nothing" a palindrome?
const p24 = "😀a😀";          // looks like a palindrome, but is it under split("")?
const p25 = "e\u0301te\u0301";  // "été" with é stored as e + accent mark

test.validateisStringPalindrome(p1);
test.validateisStringPalindrome(p2);
test.validateisStringPalindrome(p3);
test.validateisStringPalindrome(p4);
test.validateisStringPalindrome(p5);
test.validateisStringPalindrome(p6);
test.validateisStringPalindrome(p7);
test.validateisStringPalindrome(p8);
test.validateisStringPalindrome(p9);
test.validateisStringPalindrome(p10);
test.validateisStringPalindrome(p11);
test.validateisStringPalindrome(p12);
test.validateisStringPalindrome(p13);
test.validateisStringPalindrome(p14);
test.validateisStringPalindrome(p15);
test.validateisStringPalindrome(p16);
test.validateisStringPalindrome(p17);
test.validateisStringPalindrome(p18);
test.validateisStringPalindrome(p19);
test.validateisStringPalindrome(p20);
test.validateisStringPalindrome(p21);
test.validateisStringPalindrome(p22);
test.validateisStringPalindrome(p23);
test.validateisStringPalindrome(p24);
test.validateisStringPalindrome(p25);

console.log("*".repeat(200))
