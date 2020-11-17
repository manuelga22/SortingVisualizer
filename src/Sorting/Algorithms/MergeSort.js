export function mergeSort(arr, animations=[]){
  
    if(arr.length <=1)return arr;
    const copyOfArray = arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort( arr.slice(0,mid) );
    let right = mergeSort( arr.slice(mid) );
    return merge(copyOfArray,left,right,animations)
}
function merge(originalArray, array1,array2, animations){
    let sorted=[];
    while(array1.length && array2.length){
        if(array1[0] < array2[0]){
            animations.push([originalArray.indexOf(array1[0]),originalArray.indexOf(array2[0])])
            sorted.push(array1.shift())
        }else{
            animations.push([originalArray.indexOf(array2[0]),originalArray.indexOf(array1[0])])
            sorted.push(array2.shift())
        }
    }
    console.log(array1,array2)

    return sorted.concat( array1.slice().concat( array2.slice()) )
};
function animationsHandler(){
    
}