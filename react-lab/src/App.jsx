import './App.css'

const variables = {
  firstName: 'First name',
  lastName: 'Last name',
  occupation: 'Occupation'
}

const data = [
  { firstName: "John", lastName: "Silver", occupation: "PirateCaptain" },
  { firstName: "John", lastName: "Silver", occupation: "PirateCaptain" },
  { firstName: "John", lastName: "Silver", occupation: "PirateCaptain" },
]

const products = [
  { name: "John", cost: "Silver" },
]

const product1 = {name: "Silver"}

function Product(props){
  return(
    <div>
      I'm an {props.product.name}
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <div>
      <table>
        {Object.keys(variables).map((key, rowIndex) =>
          <tr key={key}>
            <th style={{ fontWeight: '700', borderTop: rowIndex === 0 ? '2px solid #fff' : '0px' }}>{variables[key]}</th>
            {data.map((item, index) =>
              <td key={index} style={{ borderTop: rowIndex === 0 ? '2px solid #fff' : '0px' }}>{item[key]}</td>
            )}
          </tr>
        )}
      </table>
      </div>
      

      <br></br>

      <div>
        <Product product = {products.map}/>
      </div>
    </div>
  );
}

export default App