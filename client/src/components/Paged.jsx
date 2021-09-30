import React from "react";
import {useDispatch, useSelector} from "react-redux";
import paged from '../actions/paged';
import "../styleComponents/Paged.module.css";

// Lógica del paginado en Cards.jsx

export default function Page() {
    const allCountries = useSelector((state) => state.countries);
    const actual = useSelector((state) => state.page);

    const dispatch = useDispatch();
    
    let previous = actual - 1;
    let next = actual + 1
    
    let size = 10;

    const totalPages = Math.trunc(allCountries.length / size) + 1;
    // Math.trunc devuelve el numero sin decimales

    function handlePage(e) {
       
        dispatch(paged(Number(e.target.value)));
        
    }
    return (
       <nav>
           
            <button onClick={e => {handlePage(e)}} value={previous} disabled={actual===1} >⏪ </button>    
            <h3>Page {actual}</h3>              
            <button onClick={e => {handlePage(e)}} value={next} disabled={actual === totalPages}> ⏩</button>
           
       </nav>
    )
}


