import './App.css';
import BubbleSort from './Algorithms/bubblesort';
import Home from './components/Home';
import { SortProvider } from './context/storecontext';

function App() {
  return (
    <SortProvider>
      {/* <BubbleSort /> */}
      {/* <h1>Hi krishna</h1> */}
      <Home/>
    </SortProvider>
  );
}

export default App;
