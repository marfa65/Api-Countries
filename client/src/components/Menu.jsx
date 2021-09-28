import React from "react";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import style from '../styleComponents/Menu.module.css';
import getCountries from '../actions/getCountries';

import OrderContinent from "./OrderContinent";
import OrderByName from './OrderByName';
import OrderByPop from './OrderByPop';
import OrderByActivity from './OrderByActivity';


export default function Menu(){
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountries());
        
    },[dispatch]);

    
    return (
 
        <div className={style.cont}> 
            <div>
                <OrderContinent />
            </div>
            <div>
                <OrderByName />
            </div>
            <div>
                <OrderByPop />
            </div>
            <div>
                <OrderByActivity />
            </div>

        </div>
    )
};