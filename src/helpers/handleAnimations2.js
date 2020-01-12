export function handleAnimations2(animations,PRIMARY_COLOR,SECONDARY_COLOR,ANIMATION_SPEED_MS) {
    for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const isColorChange = i % 3 !== 2;
        if (isColorChange) {
          const [barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, i * ANIMATION_SPEED_MS);
        } else {
          setTimeout(() => {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const barOneStyle = arrayBars[barOneIdx].style;
            const tempHeight = barOneStyle.height;
            barOneStyle.height = `${barTwoStyle.height}`;
            barTwoStyle.height = `${tempHeight}`;
          
          
          }, i * ANIMATION_SPEED_MS);
        }
      }
}