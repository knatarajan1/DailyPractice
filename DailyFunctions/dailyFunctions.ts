

class CommonFunctions {
    constructor() { }
    //Day 01 - OCT 12
    sortArrayAsc(arr: number[]): void {
        let arrLength = arr.length;
        for (let i = 0; i <= arrLength; i++) {
            for (let j = i; j <= arrLength; j++) {
                if (arr[i]! > arr[j]!) {
                    let temp = arr[i];
                    arr[i] = arr[j]!;
                    arr[j] = temp!;
                }
            }
        }
    }


    sortArrayDescsc(arr: number[]): void {
        let arrLength = arr.length;
        for (let i = 0; i <= arrLength; i++) {
            for (let j = i; j <= arrLength; j++) {
                if (arr[i]! < arr[j]!) {
                    let temp = arr[i];
                    arr[i] = arr[j]!;
                    arr[j] = temp!;
                }
            }
        }
    }

    reverseArray<T>(arr:Array<T>):void{
        let left = 0;
        let right = arr.length-1;
        while(left<right){
            [arr[left],arr[right]]=[arr[right]!,arr[left]!]
            left++;
            right--;
        }
    }
    reverseString(str:string):string{
        let arr = str.split("");
        this.reverseArray(arr);
        return arr.join("");
    }
}

export = CommonFunctions;