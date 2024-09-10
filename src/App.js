import './App.css';
import BubbleSort from './Algorithms/bubblesort';
import Home from './components/Home';
import { SortContext, SortProvider } from './context/storecontext';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Insertionsort from './Algorithms/insertionsort';
import Selectionsort from './Algorithms/selectionsort';
import { useContext } from 'react';
function App() {

  return (
    <BrowserRouter>
    <SortProvider>
      {/* <BubbleSort /> */}
      {/* <h1>Hi krishna</h1> */}
      <Home/>
     
    </SortProvider>
    </BrowserRouter>
  );
}

export default App;


