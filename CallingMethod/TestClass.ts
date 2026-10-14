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

} export = TestClass;

