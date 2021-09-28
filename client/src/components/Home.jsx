import React from "react";
import style from '../styleComponents/Home.module.css';
import {useEffect} from "react";
import {useDispatch} from "react-redux";

import NavBar from './NavBar';
import Menu from './Menu';
import Cards from './Cards';
import Paged from './Paged';
import getCountries from '../actions/getCountries';
import getActivities from '../actions/getActivities';


export default function Home (){
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountries());
    },[dispatch]);
    
    useEffect(() => {
        dispatch(getActivities());
    },[dispatch]);

    return (
        <div className={style.home}>
            <div>
                <NavBar />
            </div>
            <div>
                <Menu /> 
            </div>
            <div>
                <Cards /> 
            </div>
            <div>
                <Paged />                
            </div>            
        </div>
    )
};