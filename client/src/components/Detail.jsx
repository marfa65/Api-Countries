import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Link} from 'react-router-dom';
import style from '../styleComponents/Detail.module.css';
import getById from '../actions/getById';

export default function Detail({id}){

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getById(id));
    },[dispatch, id]);
        
    const countrieDetail = useSelector((state) => state.detail);
    const {name, flag, continent, capital, subregion, area, population, activities} = countrieDetail

    return (
        // <div className={style.cont}>
        //     <div className={style.card}>
        <div className={style.cont}>
            
            <div className={style.card}>
                <div>
                <img className={style.flag} src={flag} alt="Flag"/>
                </div>
                <div>
                <div className={style.line}>
                <p>Country: </p>              
                <h3>{name}</h3>
                </div>
                <div className={style.line}>
                <p>Code:</p>              
                <h4>{id}</h4>
                </div>
                <div className={style.line}>
                <p>Continent: </p>
                <h4>{continent}</h4>
                </div>
                <div className={style.line}>
                <p>Capital: </p>
                <h4>{capital}</h4>
                </div>
                <div className={style.line}>
                <p>Subregion: </p>
                <h4>{subregion}</h4>
                </div>
                <div className={style.line}>
                <p>Area: </p>
                <h4>{area} Km²</h4>
                </div>
                <div className={style.line}>
                <p>Population: </p>
                <h4>{population} pop</h4>
                </div>
                </div>


                <div>
                <div>
            {
                activities?.map(el => {
                    return (  
                    <div  className={style.activities} key={el.id}>
                        <div className={style.line}>
                        <p>Activity:</p>
                        <h4>{el.name}</h4> 
                        </div>
                        <div className={style.line}>
                        <p>Difficulty:</p>
                        <h4>{el.difficulty}</h4>
                        </div>
                        <div className={style.line}>
                        <p>Duration:</p>
                        <h4>{el.duration}</h4> 
                        </div>
                        <div className={style.line}>
                        <p>Season:</p>
                        <h4>{el.season}</h4> 
                        </div>

                    </div>    
                )})
            }
                </div>
                </div>
            </div>
                <div className={style.back}>
                <Link to={`/home`} >
                    <h5>BACK</h5>
                </Link>
                </div>

            
        </div>
    )
}