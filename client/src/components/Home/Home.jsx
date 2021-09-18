import React from "react";
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import style from './Home.module.css';

import {Link} from 'react-router-dom';
import Card from './Card/Card';
import NavBar from './NavBar/NavBar';
import Menu from './Menu/Menu';
import Paged from './Paged/Paged';

import getCountries from '../../actions/getCountries';


export default function Home (){
    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.countries);

    useEffect(() => {
        dispatch(getCountries());
    },[dispatch]);

    

    return (
        <div>
            <div className={style.navBar}>
                <NavBar />
            </div>
            <div className={style.menu}>
                <Menu /> 
                {/* en menu hacer los filtrados */}
            </div>
            
            
        </div>
    )
}