import React, { useContext, useEffect } from 'react'
import { SortContext } from '../context/storecontext';

const Selectionsort = ({triggerSort}) => {
const {array,setMoves,setCurrentMove,setTriggerSort,speed}=useContext(SortContext)

    useEffect(()=>{
        if(triggerSort){
            play();
        }
    },[triggerSort]);

    function play(){
        console.log("Starting bubble sort");
        const copy = [...array];
        console.log(copy)
        const newMoves = selectionsort(copy);
        setMoves(newMoves);
        animate(newMoves);
       // console.log(newMoves)
    }

    const animate=(moves)=>{

        if(moves.length===0){
             setCurrentMove(null);
            setTriggerSort(false);
            setMoves([])
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

    const selectionsort= (array)=>{
        let n=array.length
        const moves=[]
        for (let i = 0; i < n-1; i++){  
                let min_idx = i; 
                moves.push({indices:[i,i],type:"comp"}) 
                for (let j = i+1; j < n; j++)  {
                    moves.push({ indices: [min_idx, j], type: 'comp' }); 
                if (array[j] < array[min_idx])  
                    min_idx = j;  }
          
                if (min_idx !== i) {
                    moves.push({ indices: [i, min_idx], type: "swap" });
                    [array[min_idx], array[i]] = [array[i], array[min_idx]]; 
                   
                  }
            } 
            console.log("selection sort")
            console.log(array
            )
            return moves;
    }
  return (
  <></>
  )
}

export default Selectionsort
