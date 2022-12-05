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
  const [totalArr, setTotalArr] = useState(counters.map(i => ({ id: i.id, count: i.initial })))

  return (
    <>
      {counters.map((c) =>
        <Counter
          key={c.id}
          counter={c}
          onChange={(id, count) => {
            const tmp = [...totalArr];
            const index = tmp.findIndex(i => i.id === id)
            if (index !== -1) tmp[index].count = count;
            else tmp.push({ id, count })
            setTotalArr(tmp)
          }}
        />
      )}

      <div>
        Total: {totalArr.reduce((p, c) => p += c.count, 0)}
      </div>
    </>
  );
}

export default App;
