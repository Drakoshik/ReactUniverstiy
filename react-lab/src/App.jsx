import React from 'react'
import './App.css'

const descriptionVariables = {
  firstName: 'First name',
  lastName: 'Last name',
  occupation: 'Occupation'
}

const personalData = [
  { firstName: "John", lastName: "Silver", occupation: "PirateCaptain" },
  { firstName: "John", lastName: "Silver", occupation: "PirateCaptain" },
  { firstName: "John", lastName: "Silver", occupation: "PirateCaptain" },
]

const product = {name: "Silver", cost: "2000" }

const cities = [
  {id: 1, name: "Kyiv", image: ""},
  {id: 2, name: "New York", image: ""},
  {id: 3, name: "RIO", image: ""}
]

function ShowProduct({name, cost}){
  return(
    <div>
      I'm an {name}, my cost {cost})
    </div>
  )
}

class City extends React.Component{
  render(){
    return <option>{this.props.city.name}</option>
  }
}

class List extends React.Component{
  render(){
    return <select name = "" id = "cities" >
      {this.props.data.map((city) => 
      <City key = {city.id} city = {city}>{city.name}</City>)}
    </select>
  }
}

function BuildTable({variables, data}){
  return(
  <table>
          {Object.keys(variables).map((key, rowIndex) =>
            <tr key={key}>
              <th style={{ fontWeight: '700', borderTop: rowIndex === 0 ? '2px solid #fff' : '0px' }}><b>{variables[key]}</b></th>
              {data.map((item, index) =>
                <td key={index} style={{ borderTop: rowIndex === 0 ? '2px solid #fff' : '0px' }}>{item[key]}</td>
              )}
            </tr>
          )}
        </table>
  )
}

function App() {
  return (
    <div className="App">
      <div>
        <BuildTable variables={descriptionVariables} data = {personalData}/>
      </div>
      <br></br>
      <div>
        <ShowProduct name = {product.name} cost = {product.cost}/>
      </div>
      <br></br>
      <List data = {cities}></List>
      <br></br>
      {/* <select onChange={e => {
            console.log(e.target.value)
          }}>
        <option value="Сложение">+</option>
        <option value="Вычитание">−</option>
        <option value="Умножение">×</option>
        <option value="Деление">÷</option>
      </select> */}
    </div>
  );
}

export default App