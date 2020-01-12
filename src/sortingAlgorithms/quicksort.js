


export function getQuicksortAnimations(array) {
    const animations = [];
    quicksort(array,0,array.length -1, animations);
    return animations;
}

function quicksort(array,low,high,animations){
    if(low < high){
        let pi = partition(array,low,high,animations);
        quicksort(array,low,pi-1,animations);
        quicksort(array,pi+1,high,animations);
        
    }


}    

function partition(array,low,high,animations){
    let pivot = array[high];
    let i = (low - 1);

    for(let j = low; j <= high - 1; j++) {
        animations.push([j,high]);
        animations.push([j,high]);
        
        if(array[j] < pivot) {
            i++;
            animations.push([j,i]);
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        } else {   
            animations.push([j,j]);
        }
    }
    animations.push([i+1,high]);
    animations.push([i+1,high]);
    animations.push([i+1,high]);
    let temp = array[i+1];
    array[i+1] = array[high];
    array[high] = temp;

    return i + 1;
    

}


