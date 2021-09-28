import React from "react";
import {useDispatch, useSelector} from "react-redux";

import orderContinent from '../actions/orderContinent';
import paged from '../actions/paged';
import style from '../styleComponents/Selector.module.css'

export default function OrderContinent(){
    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.countries);


    function handleOnChangeContinent(e){ // para recetear y que cargue todo de nuevo

        let continents = allCountries.filter(c => c.continent === e.target.value)
        dispatch(orderContinent(continents));

        dispatch(paged(1));
    }
    return (

        <div>
            <select className={style.select} name="continent" onChange={handleOnChangeContinent}>
                <option value='continent'>Continent</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>

            </select>
        </div>

     
        // <div>
        //     <select name="continent" onChange={handleOnChangeContinent}>
        //         <option>Continent</option>
        //         <option value="Africa">Africa</option>
        //         <option value="Americas">Americas</option>
        //         <option value="Asia">Asia</option>
        //         <option value="Europe">Europe</option>
        //         <option value="Oceania">Oceania</option>

        //     </select>
        // </div>
    )
}