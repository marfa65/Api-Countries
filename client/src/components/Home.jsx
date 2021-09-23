import React from "react";
import style from '../styleComponents/Home.module.css';
// import {useEffect} from "react";
// import {useDispatch} from "react-redux";

import NavBar from './NavBar';
import Menu from './Menu';
import Cards from './Cards';
import Paged from './Paged';
// import getCountries from '../actions/getCountries';


export default function Home (){
    
    // const dispatch = useDispatch();
    // const allCountries = useSelector((state) => state.countries);

    // useEffect(() => {
    //     dispatch(getCountries());
    // },[dispatch]);

    return (
        <div>
            <div className={style.navBar}>
                <NavBar />
            </div>
            <div className={style.menu}>
                <Menu /> 
               
            </div>
            <div className={style.cards}>
                <Cards /> 
            </div>
            <div className={style.paged}>
                <Paged />                
            </div>            
        </div>
    )
};