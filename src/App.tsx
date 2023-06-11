import { useSelector } from 'react-redux';
import './App.css';
import Counter from './features/counter/Counter';
import { RootState } from './store';

function App() {
const value = useSelector((state: RootState) => state.counter.value)
  return (
    <div className="App">
      <h1>Value [{value}]</h1>
      <Counter />
    </div>
  );
}

export default App;
