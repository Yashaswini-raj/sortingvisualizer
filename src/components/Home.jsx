import React, { useState, useEffect, useContext } from "react";
import BubbleSort from "../Algorithms/bubblesort.jsx";
import { SortContext } from "../context/storecontext.jsx";
import Insertionsort from "../Algorithms/insertionsort.jsx";
import Selectionsort from "../Algorithms/selectionsort.jsx";

const Home = () => {
  const [algo, setAlgo] = useState("bubbleSort");
  const {
    showBar,
    setLen,
    init,
    len,
    setSpeed,
    speed
  } = useContext(SortContext);
  const handleLen = (e) => {
    setLen(e.target.valueAsNumber);
    init(); // Reinitialize after changing length
  };
  
const [triggerSort,
  setTriggerSort,] =useState(false)
  useEffect(() => {
    init();
  }, []);

  const play = () => {
    console.log("Play button clicked");
    setTriggerSort(true); // This will trigger the sorting in the selected componenct
    console.log(triggerSort)
  };

  // Function to render the sorting component
  const renderSortingComponent = () => {
    switch (algo) {
      case "bubbleSort":
        return <BubbleSort triggerSort={triggerSort} />;
      case "insertionsort":
        return <Insertionsort triggerSort={triggerSort} />;
      case "selectionsort":
         return <Selectionsort triggerSort={triggerSort} />;
      // case "selectionsort":
      //   return <SelectionSort triggerSort={triggerSort} />;
      default:
        return null;
    }
  };

  return (
    <div className="main">
      <div className="heading">Sorting Visulaizer</div>
      <div className="middle-container">
        <div className="side-bar">
          <button onClick={init}>init</button>

          <label htmlFor="len">length</label>
          
          <input type="range" name="length" min="4" max="50" value={len} onChange={
            handleLen
          } />
          <label htmlFor="speed">Speed</label>
          <input type="range" name="speed" min="50" max="500" onChange={
            (e) =>{ setSpeed(e.target.valueAsNumber)}
          } />

          <select value={algo} onChange={(e) => setAlgo(e.target.value)}>
            <option value="bubbleSort">bubbleSort</option>
            <option value="insertionsort">insertionsort</option>
            <option value="mergesort">mergesort</option>
            <option value="selectionsort">selectionsort</option>
          </select>
          <button onClick={play}>Play</button>
        
        </div>
        <div className="right-side">
          <div id="container" className="container">
          {renderSortingComponent()}  { showBar()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
