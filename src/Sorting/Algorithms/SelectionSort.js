export function selectionSort(arr, animations=[]){


    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let min = i;

        for (let j = i + 1; j < len; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        } 
        if (min !== i) {
            animations.push(["swap",i, min])
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }else{
            animations.push(["no swap",i, min])
        }
    }
    return {
        sortedArray: arr,
        animations:animations
    } 

};