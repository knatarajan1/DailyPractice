import CommonFunctions = require("../DailyFunctions/dailyFunctions");

class TestClass {
    helper: CommonFunctions = new CommonFunctions();
    constructor() {
    }

    validateSortedArrayAsc(arr: number[]): void {
        this.helper.sortArrayAsc(arr)
    }

    validateSortedArrayDesc(arr: number[]): void {
        this.helper.sortArrayDescsc(arr)
    }

    validateReverseString(str: string): string {
        return this.helper.reverseString(str)
    }

    validateReverseAnyArray<T>(str: Array<T>): void {
        this.helper.reverseArray(str)
    }

    validateHighestAndLowestOccuranceInWord(str:string):{Highest:string,Lowest:string}{
        const sortedMap:Map<string,number> = this.helper.sortedMap(this.helper.returnTheOccurrance(str));
        const arr:[string,number][] = Array.from(sortedMap);
        const len = arr.length;
        const highestOcccurance = arr.at(len-1)!.at(1);
        const lowestOcccurance = arr.at(0)!.at(1);
        let allHighest:string[] = [];
        let allLowest:string[] = [];
        arr.forEach((a)=>{
            if(a[1]===highestOcccurance) allHighest.push(a[0])
            else if(a[1]===lowestOcccurance) allLowest.push(a[0])
        })
        return {Highest:allHighest.join(","),Lowest:allLowest.join(",")}
    }

    validateRemoveWhiteSpace(str:string):string{
        return this.helper.removeWhiteSpace(str);
    }
    
    validateSwapEachCase(str:string):string{
        return this.helper.swapCase(str);
    }

    validateTwoArraysAreSame<T>(arr1:T[],arr2:T[]):void{
        console.log("Array 1 : ",arr1);
        console.log("Array 2 : ",arr2);
        console.log("Is Both Arrays are same:", this.helper.isTwoArraysSame(arr1,arr2));
    }

    validateTwoStringsAreAnagrams(str1:string,str2:string):void{
        console.log("String 1 : ",str1);
        console.log("String 2 : ",str2);
        console.log("Is Both Strings are anagrams:", this.helper.isAnagram(str1,str2));
    }

    validateisStringPalindrome(str:string):void{
        console.log("Str : ",str);
        console.log("reverse string: ",this.helper.reverseString(str));
        console.log("Is Palindrome: ",this.helper.isPalindrome(str));
    }

    validateCapitalizeEachWord(str:string):void{
        console.log("String before capitalizing:",str);
        console.log("String after capitalizing:",this.helper.capitaliseEachWord(str));
    }
    validateMergingTwoWords(str1:string,str2:string):void{
        console.log("Strings before Merging:",str1,str2);
        console.log("Strings After Merging:",this.helper.mergeStringsAlternatively(str1,str2));
    }

} export = TestClass;

