export class InsertionSortStep {
    static numbers: number[] = [8, 3, 6, 6, 1, 4, 10, 2, 50];

    static insertionSort(list: number[]) {
        let needNextPass: boolean = true;
        for (let i = 1; i < list.length; i++) {
            let j = i;
            needNextPass = false;
            while (j > 0 && list[j] < list[j - 1]) {
                console.log(`Swap ${list[j]} with ${list[j - 1]}`);
                [list[j], list[j - 1]] = [list[j - 1], list[j]];
                j--;
                needNextPass = true;
            }
            if (needNextPass == false) {
                break;
            }
            console.log(`List after the ${i}' sort:`);
            console.log(InsertionSortStep.numbers);
        }
    }
}