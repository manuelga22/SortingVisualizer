

export function quickSort(arr, low, high, animations ){
    if (low < high){
        /* pi is partitioning index, arr[pi] is now
           at right place */
        let pi = partition(arr, low, high,animations);
       
     
        quickSort(arr, low, pi - 1, animations);  // Before pi
        quickSort(arr, pi + 1, high, animations); // After pi
        
    }
    return animations
}
function partition(arr, low, high,animations){
    // pivot (Element to be placed at right position)
   let pivot = arr[high];  

   let i = (low - 1)  // Index of smaller element

    for (let j = low; j <= high- 1; j++){
        // If current element is smaller than the pivot
        if (arr[j] < pivot){
            
            animations.push([i,j])
            // pushing the two elements being swapped for the animation
            animations.push([i,j])
            //pushing them again to revert their colors

            i++;    // increment index of smaller element
            let temp = arr[i]; 
            arr[i] = arr[j]; 
            arr[j] = temp; 
            
        }

    }
       animations.push([(i+1),high])
       // pushing the two elements being swapped for the animation
       animations.push([(i+1),high])
       // pushing them again to revert their colors

       let temp = arr[i+1];
       arr[i+1] = arr[high];
       arr[high] = temp;
   
    return (i + 1)
}