import React from "react";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import getCountries from '../actions/getCountries';
// import getActivities from '../actions/getActivities';
import orderContinent from '../actions/orderContinent';
import paged from '../actions/paged';

import OrderByName from './OrderByName';
import OrderByPop from './OrderByPop';
import OrderByActivity from './OrderByActivity';


export default function Menu(){
    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.countries);
    // const allActivities = useSelector((state) => state.activities);
    // console.log('allCountries',allCountries);
    // console.log('allActivities',allActivities);

    // const act = allCountries.map((e) => (e = e.activities));
    // // console.log('ACT', act)
    // let activity = act.filter((e) => e.length > 0);
    // // console.log('ACTIVITY', activity)

    // activity = new Set(act.flat().map((e) => (e = e.name)));
    // let result = [...activity];
    // // const countriesWithActivities = 
    // console.log('result',result);
    // console.log('countriesWithActivities',countriesWithActivities)



    // getActivities()
    // // const allActivities = useSelector((state) => state.activities);
    useEffect(() => {
        dispatch(getCountries());
        // console.log('useEffect Nro 1')
    },[dispatch]);
    
    // useEffect(() => {
        
    //     dispatch(getActivities());
        
    // },[dispatch]);


    function handleOnChangeContinent(e){ // para recetear y que cargue todo de nuevo
        // e.preventDefault();
        let continents = allCountries.filter(c => c.continent === e.target.value)
        dispatch(orderContinent(continents));
        // console.log('##### Nro 2')
        dispatch(paged(1));
    }

   

    // const allActivities = useSelector((state) => state.activities);
    // console.log('actividades',allActivities)
    
    return (
        // <button className={style.btn2} onClick={() => {handleName()}}> Search</button>

        // <label htmlFor="">Countries</label>
        // <select onChange={handleOnChangeSelect} name="countries" multiple>
        //     {
        //         countries.length &&  countries.map((c)=> <option key={c.id} value={c.id}>{c.name}</option>)
        //     }
        // </select>
        <div> 
            <select name="continent" onChange={handleOnChangeContinent}>
                {/* <option>Continent</option> */}
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>

            </select>
            <OrderByName />
            <OrderByPop />
            <OrderByActivity />
        {/* <select>                                        
            <option value= 'asc'>Ascendente</option>
            <option value= 'desc'>Descendente</option> 
        </select>  */}
        {/* <select>
            <option value= 'pop'>Population</option>
        </select> */}
        {/* <select>
        {
            
            result.map(el => {
                return(el = <option value= {el} key = {el}>{el}</option>)})                           
                
        }
        </select> */}
        
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