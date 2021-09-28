import React from "react";
import {useDispatch, useSelector} from "react-redux";
import style from '../styleComponents/Selector.module.css'
import orderByName from '../actions/orderByName';

export default function OrderByName() {
    const allCountries = useSelector((state) => state.countries);

    const dispatch = useDispatch();

    function onChangeName(e) {

        let asc = [...allCountries]
        let desc = [...allCountries]
        asc.sort((a, b) => (a.name > b.name) ? 1 : -1);

        desc.sort((a, b) => (a.name > b.name) ? -1 : 1);

        if(e.target.value === 'asc'){

            dispatch(orderByName(asc))
        };
        
        if(e.target.value === 'desc'){

            dispatch(orderByName(desc))
        };
        
    };

    return (
        <div>
        <select className={style.select} name='order' onChange={onChangeName}>   
            <option value='order'>order alph</option>                                    
            <option value="asc">Ascending </option>
            <option value="desc">Descending </option> 
        </select> 
        </div>
    )
};
