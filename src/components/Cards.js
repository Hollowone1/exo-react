import React from 'react';

const Cards = ({country}) => {
    return (
        <div>
            <li className='card'>
                <img src={country.flags.svg} alt={'drapeaux' + country.translations.fra.common}></img>
                <div className='infos'>
                    <h2>{country.translations.fra.common}</h2>
                    <h2>{country.capital}</h2>
                    <p>Pop. {country.population.toLocaleString()}</p>
                </div>
            </li>
        </div>
    );
};

export default Cards;