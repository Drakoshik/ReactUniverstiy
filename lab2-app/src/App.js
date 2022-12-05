import './App.css';
import { useEffect, useState } from 'react';

const counters = [
  { id: 1, initial: 6, min: -5, max: 10 },
  { id: 2, initial: 5 },
  { id: 3 }
]

const Counter = ({ counter, onChange }) => {
  const [count, setCount] = useState(counter.initial || 0)

  useEffect(() => {
    if (Number.isInteger(count)) {
      onChange(counter.id, count)
    }
  }, [count])

  return (
    <div>
      <p>
        Score {count}
        <button onClick={() => {
          if (!Object.keys(counter).includes('max') || (count + 1 <= counter.max)) setCount(count + 1)
        }}>+</button>
        <button onClick={() => {
          if (!Object.keys(counter).includes('min') || (count - 1 >= counter.min)) setCount(count - 1)
        }}>-</button>
        <button onClick={() => { setCount(counter.initial || 0) }}>Reset</button>
      </p>
    </div>
  )
}

const App = () => {
  const [totalObj, setTotalObj] = useState({})

  return (
    <>
      {counters.map((c) =>
        <Counter
          key={c.id}
          counter={c}
          onChange={(id, count) => {
            setTotalObj(current => ({ ...current, [id]: count }))
          }}
        />
      )}

      <div>
        Total: {Object.values(totalObj).reduce((p, c) => p += c, 0)}
      </div>
    </>
  );
}

export default App;
