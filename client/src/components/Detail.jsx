import React from "react";
// import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Link} from 'react-router-dom';

import getById from '../actions/getById';


export default function Detail({id}){

    const dispatch = useDispatch();
    // const countrieDetail = useSelector((state) => state.detail);
    
    useEffect(() => {
        dispatch(getById(id));
    },[dispatch, id]);
        
    const countrieDetail = useSelector((state) => state.detail);
    const {name, flag, continent, capital, subregion, area, population} = countrieDetail


    return (
        // <div className={style.cont}>
        //     <div className={style.card}>
        <div>
            
            <div>
                <img src={flag} alt="Flag"/>
                <p>Country: </p>              
                <h3>{name}</h3>              
                <h4>{id}</h4>
                <p>Continent: </p>
                <h4>{continent}</h4>
                <p>Capital: </p>
                <h4>{capital}</h4>
                <p>Subregion: </p>
                <h4>{subregion}</h4>
                <p>Area: </p>
                <h4>{area}</h4>
                <p>Population: </p>
                <h4>{population}</h4>
                <div>
                <Link to={`/home`} >
                <h5>BACK</h5>
                </Link>
                </div>
            </div>
        </div>
    )
}