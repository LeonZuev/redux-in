import './App.css';
import Counter from './features/counter/Counter';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import Login from './features/auth/Login';

function App() {
const value = useSelector((state: RootState) => state.counter.value)
const user = useSelector((state: RootState) => state.auth.login)
  return (
    <div className="App">
      <h1>Value [{value}]</h1>
      <Counter />
      <h2>Hello, {user}</h2>
      <Login />
    </div>
  );
}

export default App;
