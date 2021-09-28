import React from "react";
import {useDispatch, useSelector} from "react-redux";
import style from '../styleComponents/Selector.module.css'
import orderActivity from '../actions/orderActivity';
import paged from '../actions/paged';

export default function OrderByActivity(){
    const allActivities = useSelector((state) => state.activities);
    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.countries);


   function onSelectActivity(e){
        dispatch(paged(1));
       let countryActivity = allCountries.filter(c => c.activities.length > 0);  
       let paisConActiv = [];
       
       for(let i = 0; i < countryActivity.length; i++){
        
           let pais = countryActivity[i]
        
        pais.activities.forEach(el => {
            if(el.name === e.target.value){
                paisConActiv.push(pais)
            }
        })
        dispatch(orderActivity(paisConActiv))

        
    }}
       
 !allActivities.includes('Activities') && allActivities.unshift('Activities')

    return (
        
        <select className={style.select} name='orderActivity' onChange={onSelectActivity} >            
        {
            
            allActivities.map(el => {
                return(el = <option value= {el} key = {el}>{el}</option>)})                           
                
        }
        </select>
    )
};