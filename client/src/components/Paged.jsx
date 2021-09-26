import React from "react";
import {useDispatch, useSelector} from "react-redux";


import paged from '../actions/paged';


export default function Page() {
    const allCountries = useSelector((state) => state.countries);
    const actual = useSelector((state) => state.page);
    // console.log('actual',actual)

    const dispatch = useDispatch();
    
    let previous = actual - 1;
    let next = actual + 1
    
    let size = 10;

    const totalPages = Math.trunc(allCountries.length / size) + 1;
    // Math.trunc devuelve el numero sin decimales
    // console.log('totalPages', totalPages)

    function handlePage(e) {
       
        dispatch(paged(Number(e.target.value)));
        
    }
    return (
       <nav>
           
            <button onClick={e => {handlePage(e)}} value={previous} disabled={actual===1} >⏪ </button>    
            <h3>{actual}</h3>              
            <button onClick={e => {handlePage(e)}} value={next} disabled={actual === totalPages}> ⏩</button>
           
             
           
       </nav>
    )
}


// return(
//     n = <button key={n} onClick={(n) => {handlePage(n)}}>{n}</button>
// )



// let pageNumber = Number(page);
// let size = 10;
// const totalPages = Math.ceil(infoCountries.length / size) + 1;


// if (!pageNumber || pageNumber > totalPages) pageNumber = 1; // si no me pasan pag pongo pag 1 por default
// if (
//   pageNumber &&
//   !Number.isNaN(pageNumber) &&
//   pageNumber > 0 &&
//   pageNumber <= totalPages
// ) {

//   if (pageNumber === 1) {
//     size = 9;
//     return infoCountries.slice(
//       size * (pageNumber - 1),
//       size * (pageNumber - 1) + size
//     );
//   }
//   if (pageNumber > 1) {
//     size = 10;
//     return infoCountries.slice(
//       size * (pageNumber - 1) - 1,
//       size * (pageNumber - 1) + size - 1
//     );
//   }
// } else {
//     pageNumber = 1;
// }