import React, { useContext,useEffect } from 'react'
import { SortContext } from '../context/storecontext';

const Insertionsort = ({triggerSort}) => {
    const {array,setCurrentMove,speed,setMoves,init}=useContext(SortContext)


    
      useEffect(() => {
        console.log("TriggerSort changed:", triggerSort);
        if (triggerSort) {
          console.log("Sorting triggered");
          play(); // Trigger sorting when "Play" is clicked
        }
      }, [triggerSort]);
    
    const play = () => {
        console.log("Starting bubble sort");
        const copy = [...array];
        const newMoves = insertionSort(copy);
        setMoves(newMoves);
        animate(newMoves);
      };
    const animate=(moves)=>{

        if(moves.length===0){
            return ;
        }
        const move=moves.shift();
        const [i,j]=move.indices;
        if(move.type==="swap"){
            [array[i], array[j]] = [array[j], array[i]];
        }
        setCurrentMove(move);
      //  console.log(speed);
    
        setTimeout(() => animate(moves), speed);

    }
    function insertionSort(arr){
        const n=arr.length;
        const moves=[]
        for(let i=1;i<n;i++){
            let j=i;
            moves.push({indices:[i,j],type:"comp"})
            while(j>0 && arr[j]<arr[j-1]){
               [arr[j],arr[j-1]]=[arr[j-1],arr[j]];
               moves.push({indices:[j,j-1],type:"swap"})
                j--;
            }
        }
       return moves
    
    }

  return (
    <></>
  )
}

export default Insertionsort
