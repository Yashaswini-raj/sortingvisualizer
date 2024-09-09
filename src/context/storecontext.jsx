import { createContext ,useState} from "react";

export const SortContext=createContext();

export const SortProvider=({children})=>{

    const name="krishna"
    const age=20
    const [len,setLen]=useState(20)
    const [array, setArray] = useState([]);
    const [moves, setMoves] = useState([]);
    const [currentMove, setCurrentMove] = useState(null);
    const [triggerSort, setTriggerSort] = useState(false);
    const [speed,setSpeed]=useState(50);

    const init = () => {
        const newArray = [];
        for (let i = 0; i < len; i++) {
          newArray[i] = Math.random();
        }
        setArray(newArray);
        setMoves([]);
        setCurrentMove(null);
      };
      const showBar = () => {
        return array.map((value, index) => {
          const barStyle = {
            height: `${value * 100}%`,
            backgroundColor: currentMove && currentMove.indices.includes(index)
              ? currentMove.type === "swap"
                ? "red"
                : "blue"
              : "grey",
          };
    
          return (
            <div key={index} className="bar" style={barStyle}>
              {Math.floor(value * 100)}
            </div>
          );
        });
      };
    
     
    
    const val={
        array,
        setArray,
        moves,
        setMoves,
        currentMove,
        setCurrentMove,
        len,setLen,
        init,
        showBar,
        triggerSort,
        setTriggerSort,
        speed,
        setSpeed
    }
    return <SortContext.Provider value={val}>
{children}
    </SortContext.Provider>
}
