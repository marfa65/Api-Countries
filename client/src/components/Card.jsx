import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import style from '../styleComponents/Card.module.css'

export default function Card({name, flag, continent, id, population}){

    const allCountries = useSelector((state) => state.countries);


    if(allCountries[0].name === 'India' || allCountries[allCountries.length-1].name === 'India'
    || allCountries[0].name === 'China' || allCountries[allCountries.length-1].name === 'China'){

        return (
            // <div className={style.cont}>
            //     <div className={style.card}>
            <div className={style.card}>
                <div>
                    <img className={style.flag} src={flag} alt="Flag"/>
                </div>
                <div className={style.detail}>
                    <p>Country: </p>
                    <Link to={`/detail/${id}`}>
                    <h3>{name}</h3>
                    </Link>
                </div>
                <div className={style.detail}>
                    <p>Continent: </p>
                    <h4>{continent}</h4>
                </div>

                <div className={style.detail}>
                    <p>Population: </p>
                    <h4>{population}</h4>
                </div>

            </div>
        )
    } else {

        return (
            
            <div className={style.card}>
                <div className={style.flag}>
                    <img  className={style.flag} src={flag} alt="Flag"/>
                </div>
                <div className={style.detail}>
                    <p>Country: </p>
                    <Link to={`/detail/${id}`}>
                    <h3>{name}</h3>
                    </Link>
                </div>
                <div className={style.detail}>
                    <p>Continent: </p>
                    <h4>{continent}</h4>
                </div>
            </div>
        )
    }

  
}

