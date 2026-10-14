

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
        return [...str].map((a)=>this.swapCharachterCase(a)).join("");
    }
}

export = CommonFunctions;
