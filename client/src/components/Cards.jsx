import React from "react";

import { useSelector } from "react-redux";

import style from '../styleComponents/Cards.module.css';

import Card from './Card';


export default function Cards(){
    const actual = useSelector((state) => state.page);
    const allCountries = useSelector((state) => state.countries);
  
    let size = 10;
    let countries = allCountries;
    if (actual === 1) {
        size = 9;
        countries = allCountries.slice(
          size * (actual - 1),
          size * (actual - 1) + size
        );
      }
      if (actual > 1) {
        size = 10;
        countries = allCountries.slice(
          size * (actual - 1) - 1,
          size * (actual - 1) + size - 1
        );
      }

    return (
        <div className={style.cnt}>
            {
                countries?.map(el => {
                    return (  
                    <div key={el.id} className={style.cards}>                        
                        <Card  id={el.id} flag={el.flag} name={el.name} continent={el.continent} population={el.population} />                       
                    </div>    
                )})
            }
        </div>
    )

};

