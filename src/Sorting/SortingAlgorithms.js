function partition(arr, low, high){
     // pivot (Element to be placed at right position)
    let pivot = arr[high];  
 
    let i = (low - 1)  // Index of smaller element
 
     for (let j = low; j <= high- 1; j++)
     {
         // If current element is smaller than the pivot
         if (arr[j] < pivot)
         {
             i++;    // increment index of smaller element
             let temp = arr[i]; 
             arr[i] = arr[j]; 
             arr[j] = temp; 
         }
     }
        let temp = arr[i+1];
        arr[i+1] = arr[high];
        arr[high] = temp;
     
     return (i + 1)
}


export function quickSort(arr, low, high){
    if (low < high){
        /* pi is partitioning index, arr[pi] is now
           at right place */
        let pi = partition(arr, low, high);

        quickSort(arr, low, pi - 1);  // Before pi
        quickSort(arr, pi + 1, high); // After pi
    }
}