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
    // const allCountries = useSelector((state) => state.countries);

    // const act = allCountries.map((e) => (e = e.activities));
    // // console.log('ACT', act)
    // let activity = act.filter((e) => e.length > 0);
    // // console.log('ACTIVITY', activity)

    // activity = new Set(act.flat().map((e) => (e = e.name)));
    // let result = [...activity];
    // getActivities(result);

    useEffect(() => {
        dispatch(getCountries());
    },[dispatch]);
    
    useEffect(() => {
        dispatch(getActivities());
    },[dispatch]);

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