import React from 'react';
import ArrayBar from './common/ArrayBar';
import ControlBar from "./ControlBar";
import {getMergeSortAnimations} from '../sortingAlgorithms/mergesort';
import {getQuicksortAnimations} from '../sortingAlgorithms/quicksort';
import {getHeapsortAnimations} from '../sortingAlgorithms/heapsort';
import {getBubblesortAnimations} from '../sortingAlgorithms/bubblesort';
import {handleAnimations1} from '../helpers/handleAnimations1';
import {handleAnimations2} from '../helpers/handleAnimations2';
import {randomIntFromInterval} from '../helpers/randomIntFromInterval';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/SortingVisualizer.css';

// Change this value for the speed of the animations.

const ANIMATION_SPEED_MS = 1;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      height:window.innerHeight,
      width:Math.round(window.innerWidth/4.4),
      array: [],
    };
  }

  updateDimensions = () => {
    this.setState({ width: Math.round(window.innerWidth / 4.4), height: window.innerHeight });
    this.resetArray();
    
  };

  componentDidMount() {
    this.resetArray();
    window.addEventListener('resize', this.updateDimensions);
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < (Math.round(this.state.width /10) *10); i++) {
      array.push(randomIntFromInterval(5, this.state.height - 55));
    }
    this.setState({array});
    console.log(Math.floor(this.state.width / 4.4));
  }
   

  

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    handleAnimations1(animations,PRIMARY_COLOR,SECONDARY_COLOR,ANIMATION_SPEED_MS);
  }

  quickSort() {
    const animations = getQuicksortAnimations(this.state.array);
    handleAnimations2(animations,PRIMARY_COLOR,SECONDARY_COLOR,ANIMATION_SPEED_MS);
  }

  heapSort() {
    const animations = getHeapsortAnimations(this.state.array);
    handleAnimations2(animations,PRIMARY_COLOR,SECONDARY_COLOR,ANIMATION_SPEED_MS);
    
  }

  bubbleSort() {
    const animations = getBubblesortAnimations(this.state.array);
    handleAnimations2(animations,PRIMARY_COLOR,SECONDARY_COLOR,ANIMATION_SPEED_MS);
  }
 

  render() {
    const {array} = this.state;

    return (
      <React.Fragment>
      <ControlBar 
      resetArray={() => {this.resetArray()}}
      mergesort={()=>{this.mergeSort()}}
      quicksort={()=>{this.quickSort()}} 
      bubblesort={()=>{this.bubbleSort()}} 
      heapsort={()=>{this.heapSort()}}
      />
      <div className="arraybar-container container-fluid">
        {array.map((value, idx) => (
          <ArrayBar 
          className="array-bar justify-content-center"
          key={idx}
          color={PRIMARY_COLOR}
          height={value}
          />
        ))}
      </div>
      </React.Fragment>
    );
  }
}




