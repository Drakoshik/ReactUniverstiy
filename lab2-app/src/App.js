import './App.css';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { FormLabel, Input, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';


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
        
        <Button variant="contained" onClick={() => {
          if (!Object.keys(counter).includes('max') || (count + 1 <= counter.max)) setCount(count + 1)
        }}>+</Button>
        <Button variant="contained" onClick={() => {
          if (!Object.keys(counter).includes('min') || (count - 1 >= counter.min)) setCount(count - 1)
        }}>-</Button>
        <Button variant="contained" onClick={() => { setCount(counter.initial || 0) }}>Reset</Button>
      </p>
    </div>
  )
}

let secretNumber = Math.trunc(Math.random() * 500) + 1;
let num = 10;


const App = () => {
  const [totalObj, setTotalObj] = useState({})
  const [inputOne, setInputOne] = useState('');
  var [information, setInformation] = useState("\n");
  const [result, setResult] = useState('');

  return (
    <>
    <TableContainer>
        <TableBody>
        <TableCell>
            <TableRow align="center" height="70">Lego
            </TableRow>
            <TableRow align="center" height="70">Train
            </TableRow>
            <TableRow align="center" height="70">Hot wheels
            </TableRow>
            <TableRow align="center" height="70">Total: 
            </TableRow>
          </TableCell>
          <TableCell>
            <TableRow align="center" >
              <Counter
          key={counters[0].id}
          counter={counters[0]}
          onChange={(id, count) => {
            setTotalObj(current => ({ ...current, [id]: count }))
          }}
            />
            </TableRow>
            <TableRow align="center" height="70">
              <Counter
          key={counters[1].id}
          counter={counters[1]}
          onChange={(id, count) => {
            setTotalObj(current => ({ ...current, [id]: count }))
          }}
            />
            </TableRow>
            <TableRow align="center" height="70">
              <Counter
                key={counters[2].id}
                counter={counters[2]}
                onChange={(id, count) => {
                  setTotalObj(current => ({ ...current, [id]: count }))
              }}
              />
            </TableRow>
            <TableRow align="center" height="70">
              <div>
                {Object.values(totalObj).reduce((p, c) => p += c, 0)}
              </div>
            </TableRow>
          </TableCell>
        </TableBody>
      </TableContainer>


<FormLabel>
  <p>
        <Button
        onClick={() =>{
          setInputOne("")
          setInformation("\n")
          setResult("")
          secretNumber = Math.trunc(Math.random() * 500) + 1;
          num = 0
        }}
          >New Game</Button> 
        <Input
        type="text" 
        name='input1' 
        value={inputOne} 
        onChange={(event) => setInputOne(event.target.value)}
        >
        </Input>
        <Button onClick={() =>{
          num +=1;
          if(num < 10)
          {
            if (secretNumber > inputOne){
              setInformation(information + "N > " + inputOne + "\n")
            }
            else if (secretNumber < inputOne){
              setInformation(information + "N < " + inputOne + "\n")
            }
            else{
              setResult("WIN")
            }
          }
          else{
            setInputOne("\n")
            setInformation("")
            setResult("LOSE")
          }
          
        }}>Check</Button> 
      </p>
      <p>
        Information: {information}
      </p>
        <p >
        Attempts:
        {num}
      </p>
      <p>
        Result: {result}
      </p>
      </FormLabel>
      
    </>
  );
}

export default App;
