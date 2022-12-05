import './App.css';
import { useState } from 'react';

const counters = [
  { id: 1, initial: 6, min: -5, max: 10 },
  { id: 2, initial: 5 },
  { id: 3 }
]

const value = 0;

const Counter = () => {
  const [count, setCount] = useState(value)

  return (
    <div>
      <p>
        Score {count}
        <button onClick={(e) => { setCount(count + 1) }}>+</button>
        <button onClick={(e) => { setCount(count - 1) }}>-</button>
        <button onClick={(e) => { setCount(count = 0) }}>Reset</button>

      </p>
    </div>
  )
}

const App = () => {

  return (
    <>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </>
  );
}

export default App;
