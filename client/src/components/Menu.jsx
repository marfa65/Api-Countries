import React from "react";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import getCountries from '../actions/getCountries';
import getActivities from '../actions/getActivities';


export default function Menu(){
    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.countries);

    useEffect(() => {
        dispatch(getCountries());
    },[dispatch]);

    useEffect(() => {
        
        dispatch(getActivities());
        
    },[dispatch]);

    const allActivities = useSelector((state) => state.activities);
    // console.log('actividades',allActivities)
    
    return (
        
        <div> 
            <select>
                <option>Continent</option>
                <option value="africa">Africa</option>
                <option value="americas">Americas</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
                <option value="polar">Polar</option>
            </select>
        <select>                                        
            <option value= 'asc'>Ascendente</option>
            <option value= 'desc'>Descendente</option> 
        </select> 
        <select>
            <option value= 'pop'>Population</option>
        </select>
        <select>
        {
            
            allActivities.map(el => {
                return(el = <option value= {el} key = {el}>{el}</option>)})                           
                
        }
        </select>
        
        {
            // allCountries?.map(el => {
            //     return (  
            //     <fragment>    
            //     <Link to={'/home/' + el.id}> 
            //     {/* mirar como viene diet */}
            //         <Card name={el.name} diet={el.diet} image={el.image} key={el.id}/>
            //     </Link>
            //     </fragment>    
            // )})
        }
        
        
    </div>
    )
}