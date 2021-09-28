import React from "react";
import {useDispatch, useSelector} from "react-redux";
import style from '../styleComponents/Selector.module.css'
import orderPopulation from '../actions/orderPopulation';

export default function OrderByPop() {
    const allCountries = useSelector((state) => state.countries);

    const dispatch = useDispatch();

    function onChangeName(e) {

        let asc = [...allCountries]
        let desc = [...allCountries]
        asc.sort((a, b) => (a.population > b.population) ? 1 : -1);

        desc.sort((a, b) => (a.population > b.population) ? -1 : 1);

        if(e.target.value === 'asc'){

            dispatch(orderPopulation(asc))
        };
        
        if(e.target.value === 'desc'){

            dispatch(orderPopulation(desc))
        };
        
    };

    return (
        <div>
        <select className={style.select} name='orderPopulation' onChange={onChangeName}>   
            <option value='order'>order Population</option>                                    
            <option value="asc">Ascending </option>
            <option value="desc">Descending </option> 
        </select> 
        </div>
    )
};
