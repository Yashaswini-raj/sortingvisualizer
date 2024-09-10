import React, { useEffect, useState, useContext } from "react";
import { SortContext } from "../context/storecontext.jsx";

const BubbleSort = ({triggerSort}) => {
  const {
    array,
    setMoves,
    setCurrentMove,
    speed,setTriggerSort
  } = useContext(SortContext);



  useEffect(() => {
    console.log("TriggerSort changed:", triggerSort);
    if (triggerSort) {
      console.log("Sorting triggered");
      play(); // Trigger sorting when "Play" is clicked
    }
  }, [triggerSort]);

  const play = () => {
    console.log("Starting bubble sort");
    setMoves([]);
    const copy = [...array];
    const newMoves = bubbleSort(copy);
    setMoves(newMoves);
    animate(newMoves);
  };

  const animate = (moves) => {
    if (moves.length === 0) {
        // setMoves([]);
        setCurrentMove(null);
        // setTriggerSort(false);
      return;
    }
    const move = moves.shift();
    const [i, j] = move.indices;

    if (move.type === "swap") {
      [array[i], array[j]] = [array[j], array[i]];
    }
    setCurrentMove(move);
    console.log(speed);

    setTimeout(() => animate(moves), speed); // Use speed from context
  };

  const bubbleSort = (array) => {
    const moves = [];
    let n = array.length;

    let swapped;
    for (let j = n; j >= 0; j--) {
      swapped = false;
      for (let i = 1; i < j; i++) {
        moves.push({ indices: [i - 1, i], type: "comp" });
        if (array[i - 1] > array[i]) {
          moves.push({ indices: [i - 1, i], type: "swap" });
          [array[i - 1], array[i]] = [array[i], array[i - 1]];
          swapped = true;
        }
      }
      if (!swapped) break;
    }
    return moves;
  };

  return <></>;
};

export default BubbleSort;
