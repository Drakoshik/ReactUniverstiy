import React from 'react';

const CitySelect = ({ cities = [], value, setCity }) => {
    return (
        <div>
            <select value={value} onChange={e => setCity(e.target.value)} >
                {cities.map((city) =>
                    <option key={city?.id} value={city?.id}>{city?.name}</option>
                )}
            </select>
        </div >
    );
};

export default CitySelect;