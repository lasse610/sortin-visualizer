

function heapsort(array,animations) {
    let arraylength = array.length;
    for(let i = arraylength / 2  - 1;i >=0; i--){
        heapify(array, arraylength, i,animations);
    }

    for(let i = arraylength -1; i >= 0; i --){

        animations.push([0,i]);
        animations.push([0,i]);
        animations.push([0,i]);
        let temp = array[0];
        array[0] = array[i];
        array[i] = temp

        heapify(array,i,0,animations)
    }
}



function heapify(array, arraylength,i,animations){
    let largest = i;
    let left = 2*i+1;
    let right = 2*i + 2;

    //if left child is larger than root
    if(left < arraylength && array[left] > array[largest]){
        largest = left;
    }

    // If right child is larger than largest so far 
    if (right < arraylength && array[right] > array[largest]) {
    largest = right; 
    }

    if(largest !== i) {
        animations.push([i,largest]);
        animations.push([i,largest]);
        animations.push([i,largest]);
        let swap = array[i];
        array[i] = array[largest];
        array[largest] = swap;
        heapify(array,arraylength,largest,animations);
    }
}


export function getHeapsortAnimations(array){
    const animations = [];
    heapsort(array,animations);
    return animations
}