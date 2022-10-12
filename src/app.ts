// export function filterByTerm(arr: any, pattern: string) {
//     return arr.filter( (item: any) => {
//         return item.url.match(pattern);
//     });
// }

// export class AbsoluteNumberCalculator {
//     public static findAbsolute(num: number): number {
//         return 0;
//     }
// }





export class AbsoluteNumberCalculator {
    public static findAbsolute(num: number): number {
        //throw new Error("Unsupported Operation Exception");
        //return 0;

        if(num < 0)
            return  -num;
        return num;
    }
}