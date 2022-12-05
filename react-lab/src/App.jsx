import React from 'react';
import './App.css'
import { useState } from 'react';
import CitySelect from './CitySelect';

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
    { id: 1, name: "Kyiv", image: 'images/Kyiv.jpg' },
    { id: 2, name: "New York", image: 'images/NY.jpg' },
    { id: 3, name: "RIO", image: 'images/RIO.jpg' }
]

function ShowProduct({name, cost}){
    return(
        <div>
            I'm an {name}, my cost {cost})
        </div>
    )
}


const BuildTable = ({variables, data}) => {
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
const App = () => {

    const [selectedCity, setSelectedCity] = useState(1)

    return (
        <div>
            <BuildTable 
                variables={descriptionVariables} 
                data = {personalData}
            />
            <br></br>
            <ShowProduct name = {product.name} cost = {product.cost}/>
            <br></br>
            <CitySelect
                cities={cities}
                value={selectedCity}
                setCity={city => setSelectedCity(+city)}
            />
            <img src={cities.find(i => i.id === selectedCity)?.image} width="130" height="100" />
            <br></br>

        </div >
        
    );
};

export default App;