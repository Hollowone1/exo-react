import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Cards from './Cards';

const Countries = () => {

    const [data,setData] = useState([]);
    const[rangeValue, setRangeValue] = useState(36);
    const [selectedRadio, setSelectedRadio] = useState[""]
    const radios =["Africa","America","Asia","Europe","Oceania"];


    useEffect(() =>{
        axios.get("https://restcountries.com/v3.1/all")
        .then((res)=> setData(res.data))
    })

    return (
        <div className='countries'>
           <ul className="radio-container">
            <input type='range' min="1" max="250" defaultValue={rangeValue} onChange={(e) => setRangeValue(e.target.value)}></input>
            {radios.map((continent)=> (
                <li>
                    <input type="radio" id={continent} name='continentRadio' onChange={(e) => setSelectedRadio(e.target.id)}></input>
                    <label htmlFor={continent}>{continent}</label>
                </li>
            ))}
           </ul>
           {selectedRadio && (
            <button onClick={()=> setSelectedRadio("")}>Annuler la recherche</button>
           )}
           <ul>
             {
                data
                .filter((country)=> country.continents[0].includes(selectedRadio))
                .sort((a,b)=> b.population - a.population)
                .slice(0, rangeValue) 
                .map((country, index) => 
                <Cards key={index} country={country} >

                </Cards>
                )
             }
           </ul>
        </div>
    );
};

export default Countries;