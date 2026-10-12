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

} export = TestClass;
