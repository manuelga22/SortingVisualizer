

export function quickSort(arr, start, end, animations=[],pivots=[]){
  
    if (start < end){
        /* pi is partitioning index, arr[pi] is now
           at right place */
        let index =  partition(arr, start, end,animations,pivots);
          
         quickSort(arr, start, index - 1, animations,pivots);  // Before pi
         quickSort(arr, index + 1, end, animations,pivots); // After pi
        
    }
    return{
        animations,
        pivots,
    } 
}
function partition(arr, start, end,animations,pivots){
    // pivot (Element to be placed at right position)
    let pivot = arr[end];
    
    //add pivot to
    pivots.push(end); 

    let pivotIndex = start;  // Index of smaller element

    for (let j = start; j < end; j++){
        // If current element is smaller than the pivot
        if (arr[j] < pivot){    
            // pushing the two elements being swapped for the animation
            animations.push([pivotIndex,j])
            pivots.push(end); 
            
            let temp = arr[pivotIndex]; 
            arr[pivotIndex] = arr[j]; 
            arr[j] = temp; 

            pivotIndex++;// increment index of smaller element
        }

    }
      // pushing the two elements being swapped for the animation
       animations.push([pivotIndex,end])
     
       let temp = arr[pivotIndex];
       arr[pivotIndex] = arr[end];
       arr[end] = temp;
     
   
    return pivotIndex;
}