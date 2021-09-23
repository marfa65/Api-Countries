import React from "react";
import { Link } from "react-router-dom";
// import style from '../styleComponents/Card.module.css'

export default function Card({name, flag, continent, id}){
    // console.log('card', name, flag, continent, id)

    return (
        // <div className={style.cont}>
        //     <div className={style.card}>
        <div>
            <div>
                <img src={flag} alt="Flag"/>
            </div>
            <div>
                <p>Country: </p>
                <Link to={`/detail/${id}`}>
                <h3>{name}</h3>
                </Link>
            </div>
            <div>
                <p>Continent: </p>
                <h4>{continent}</h4>
            </div>
        </div>
    )
}

// return(
//     <div className={style.card}>
//       <div>
//         <button className={`${style.btn} ${style.btnColor}`} onClick={onClose}>X</button>
//         <h4>{name}</h4>
//       </div>
//       <div className={style.middle}>
//         <div className={style.middleDiv}>
//           <p>Min</p>
//           <p>{min}</p>
//           <p>~</p>          
//           <p>Max</p>
//           <p>{max}</p>
//         </div>
//       </div>        
//           <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt='logo clima'></img>
        
//       </div> 
    
//   )