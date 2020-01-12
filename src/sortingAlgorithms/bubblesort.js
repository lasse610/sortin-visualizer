


export function getBubblesortAnimations(array){
    const animations = [];
    bubblesort(array,animations);
    return animations;

}

function bubblesort(array,animations) {
    let arraylength = array.length;

    for(let i = 0; i < arraylength; i++) {
        for(let j = 0; j < arraylength - i -1; j++) {
            
            
            animations.push([j,j+1]);
            animations.push([j,j+1]);
            if(array[j] > array[j + 1]) {
                animations.push([j,j+1]);
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            } else {
                animations.push([j,j]);
            }
        }
    }
}