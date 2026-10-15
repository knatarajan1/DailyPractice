

class CommonFunctions {
    constructor() { }
    //DAY 01 - OCT 12
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

    reverseArray<T>(arr: Array<T>): void {
        let left = 0;
        let right = arr.length - 1;
        while (left < right) {
            [arr[left], arr[right]] = [arr[right]!, arr[left]!]
            left++;
            right--;
        }
    }
    reverseString(str: string): string {
        let arr = str.split("");
        this.reverseArray(arr);
        return arr.join("");
    }

    //DAY 02 - OCT 13

    returnTheOccurrance(str: string): Map<string, number> {
        let occurance = new Map<string, number>();
        let arr = str.split(" ");
        arr.forEach((a) => {
            occurance.set(a, (occurance.get(a) ?? 0) + 1);
        });
        return occurance;
    }
    sortedMap(map: Map<string, number>): Map<string, number> {
        let arr = Array.from(map);
        arr.sort((a, b) => a[1] - b[1]);
        return new Map<string, number>(arr);
    }


    //DAY 03 -OCT 14
    removeWhiteSpace(str: string): string {
        return str.replace(/\s/g, "");
    }

    swapCharachterCase(a: string): string {
        let charCode = a.charCodeAt(0);
        if (charCode >= 65 && charCode <= 90) { a = String.fromCharCode(charCode + 32); }
        else if (charCode >= 97 && charCode <= 122) { a = String.fromCharCode(charCode - 32); }
        else
            a = a;
        return a;
    }

    swapCase(str: string): string {
        return [...str].map((a) => this.swapCharachterCase(a)).join("");
    }


    //DAY04 - OCT15
    isTwoArraysSame<T>(arr1: Array<T>, arr2: Array<T>): boolean {
        let isArraySame = true;
        if (arr1.length !== arr2.length) return false;
        let len = arr1.length;
        let newArr1 = arr1.toSorted();
        let newArr2 = arr2.toSorted();
        for (let i = 0; i <= len - 1; i++) {
            if (newArr1[i] !== newArr2[i]) {
                isArraySame = false;
                break;
            }
        }
        return isArraySame;
    }

    isAnagram(str1: string, str2: string): boolean {
        if (str1.length != str2.length) return false;
        let isAnagram = true;
        let str1Occurance = new Map<string, number>();
        let str2Occurance = new Map<string, number>();
        str1.split("").forEach((a) => {
            str1Occurance.set(a, (str1Occurance.get(a) ?? 0) + 1)
        });
        str2.split("").forEach((a) => {
            str2Occurance.set(a, (str2Occurance.get(a) ?? 0) + 1)
        });
        let str1Map: Map<string, number> = this.sortedMap(str1Occurance);
        let str2Map: Map<string, number> = this.sortedMap(str2Occurance);
        for(const [key,value] of str1Map.entries()){
            if(str2Map.get(key)!==value){
                isAnagram=false;
                break;
            }
        }
        return isAnagram;
    }

    isPalindrome(str:string,):boolean{
        let isPalidnrome = true;
        let arr = [...str]
        let left =0;
        let right = arr.length-1;
        while(left<right){
            if(arr[left]!==arr[right]){
                isPalidnrome=false;
                break;
            }
            left++;
            right--;
        }
        return isPalidnrome;
    }
}

export = CommonFunctions;
