/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';


const ControlBar = ({resetArray,quicksort,mergesort,bubblesort,heapsort}) => {
    return(
    <nav className="navbar navbar-dark bg-dark justify-content-center">
    <div></div>
    <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
    <div className="btn-group mr-20" role="group" aria-label="First group">
    <button className="btn btn-outline-primary my-2 my-sm-0 mr-5" onClick={resetArray}>Generate New Array</button>
    </div>
    
    <div className="btn-group mr-20" role="group" aria-label="First group">
    
    <button className="btn btn-outline-primary my-2 my-sm-0" onClick={mergesort}>Merge Sort</button>
    <button className="btn btn-outline-primary my-2 my-sm-0"onClick={quicksort}>Quick Sort</button>
    <button className="btn btn-outline-primary my-2 my-sm-0"onClick={heapsort}>Heap Sort</button>
    <button className="btn btn-outline-primary my-2 my-sm-0" onClick={bubblesort}>Bubble Sort</button>
    </div>
    </div>
</nav>
    );
}

export default ControlBar;  
           
        

    
       
    
