import './App.css';
import { useState } from 'react';

const counters = [
  {id: 1, initial: 6, min: -5, max: 10},
  {id: 2, initial: 5},
  {id: 3}
]

const value = 6;
const App = () => {

  const [count1, setCount1] = useState(6)
  const [count2, setCount2] = useState(1)
  const [count3, setCount3] = useState(1)
  
  return (
    <div>
      <p>
        
         Score {count1} 
        <button onClick = {(e) => {setCount1(count1 + 1)}}>+</button>
        <button onClick = {(e) => {setCount1(count1 - 1)}}>-</button>
        <button onClick = {(e) => {setCount1(count1 = 0)}}>Reset</button>

      </p>
    </div>
  );
}

export default App;
