import React from "react";
import {Link} from 'react-router-dom';
import style from '../styleComponents/Landing.module.css';




export default function LandingPage(){
    return (
        <div className={style.landing}>
             <h1 className={style.title}>WORLD TOUR</h1>
             <h3 className={style.desc}>Get information from all the countries of the world</h3>
             <h3 className={style.desc}>Manage your tourist activities</h3>
             <Link to ="/home">
                 <button className={style.btn} type="button">E N T E R</button>
             </Link>
        </div>
    )
};