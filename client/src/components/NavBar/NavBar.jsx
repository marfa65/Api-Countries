import React from "react";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import style from './NavBar.module.css';
// import {Link} from 'react-router-dom';
import getCountries from '../../actions/getCountries';
import getByName from '../../actions/getByName';


export default function NavBar(){
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getByName());
    },[dispatch]);
    // function handleGetByName(e){ // para recetear y que cargue todo de nuevo
    //     e.preventDefault();
    //     dispatch(getByName());
    // }
    useEffect(() => {
        dispatch(getCountries());
    },[dispatch]);

    function handleClick(e){ // para recetear y que cargue todo de nuevo
        e.preventDefault();
        dispatch(getCountries());
    }
    

    return (
        <div className={style.container}>
            <h1 className={style.title}>World tour</h1>
            <button className={style.btn} onClick={e => {handleClick(e)}}>
                Recargar
            </button>
            <input type="text">search country</input>
            <button className={style.btn2} onClick={e => {handleClick(e)}}>
                {/* aca pasar el llamado a getByName */}
                Search
            </button>
        </div>
    )
};