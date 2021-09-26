import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

import orderActivity from '../actions/orderActivity';
import getCountries from "../actions/getCountries";

export default function OrderByActivity(){
    const allActivities = useSelector((state) => state.activities);
    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.countries);
    // const [activ, setActiv] = useState(allCountries)
    // const [input, setInput] = useState("");

    
    console.log('allActivities',allActivities)
    console.log('ACTIV', allCountries)
    // useEffect(() => {
    //     console.log('useegectttt')
    //     dispatch(getCountries());
    // }, [dispatch]);

   
   function onSelectActivity(e){
    //   if(allCountries.length < 234){
    //     dispatch(getCountries());
    //   };
        //  dispatch(getCountries());
       let countryActivity = allCountries.filter(c => c.activities.length > 0);
    //    let countryActivity = [...activ.filter(c => c.activities.length > 0)];
       console.log('countryActivity',countryActivity)
            
        // console.log('pais',pais)
        let paisConActiv = [];
       for(let i = 0; i < countryActivity.length; i++){
        
           let pais = countryActivity[i]
        
        pais.activities.forEach(el => {
            if(el.name === e.target.value){
                paisConActiv.push(pais)
            }
        })
        dispatch(orderActivity(paisConActiv))
        

        console.log('paisConActiv',paisConActiv)
    }}
       
 !allActivities.includes('Activities') && allActivities.unshift('Activities')

    return (

        
        <select name='orderActivity' onChange={onSelectActivity} >            
        {
            
            allActivities.map(el => {
                return(el = <option value= {el} key = {el}>{el}</option>)})                           
                
        }
        </select>
    )
}