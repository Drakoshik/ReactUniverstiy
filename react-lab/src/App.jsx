import React from 'react';
import { useState } from 'react';
import CitySelect from './CitySelect';


const cities = [
    { id: 1, name: "Kyiv", image: 'images/Kyiv.jpg' },
    { id: 2, name: "New York", image: 'images/NY.jpg' },
    { id: 3, name: "RIO", image: 'images/RIO.jpg' }
]


const App = () => {

    const [seletedCity, setSeletedCity] = useState(1)

    return (
        <div>
            <CitySelect
                cities={cities}
                value={seletedCity}
                setCity={city => setSeletedCity(+city)}
            />

            <img src={cities.find(i => i.id === seletedCity)?.image} width="130" height="100" />
        </div >
    );
};

export default App;