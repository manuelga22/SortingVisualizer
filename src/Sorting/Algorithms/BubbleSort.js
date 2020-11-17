export function bubbleSort(inputArr, animations= []){

    let len = inputArr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len; i++) {
           
            if (inputArr[i] > inputArr[i + 1]) {
                //these are the elements being compared, the animations array contains 
                //the index of the elements being compared
                animations.push(["swap",i, i+1])

                let tmp = inputArr[i];
                inputArr[i] = inputArr[i + 1];
                inputArr[i + 1] = tmp;
                swapped = true;
            }else{
                 //these are the elements being compared, the animations array contains 
                //the index of the elements being compared
                if((i+1) != len)animations.push(["no swap",i, i+1])
            }
        }
    } while (swapped);
    return {
        array: inputArr,
        animations: animations
    }

}
