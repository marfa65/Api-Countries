import React from "react";

import { useSelector } from "react-redux";


import style from '../styleComponents/Cards.module.css';

import Card from './Card';


export default function Cards(){
    const actual = useSelector((state) => state.page);
    const allCountries = useSelector((state) => state.countries);
    console.log('sssssssssssssssss',allCountries)
    let size = 10;
    let countries = allCountries;
    if (actual === 1) {
        size = 9;
        countries = allCountries.slice(
          size * (actual - 1),
          size * (actual - 1) + size
        );
      }
      if (actual > 1) {
        size = 10;
        countries = allCountries.slice(
          size * (actual - 1) - 1,
          size * (actual - 1) + size - 1
        );
      }
      console.log('paged', countries);

    return (
        <div>
            {
                countries?.map(el => {
                    return (  
                    <div className={style.cards}>                        
                        <Card key={el.id} id={el.id} flag={el.flag} name={el.name} continent={el.continent} />                       
                    </div>    
                )})
            }
        </div>
    )

};

// export default function Cards(props) {
//     // acá va tu código
//     // tip, podés usar un map
//     if(!props.cities){
//       return <h1>No hay ciudad disponible</h1>;
//     }
//     return(
//       <div className={style.cnt}>
//         {
          
//           props.cities.map(city => (
//             <Card 
//               key={city.id}
//               max={city.main.temp_max}
//               min={city.main.temp_min}
//               name={city.name}
//               img={city.weather[0].icon}
//               onClose={() => alert(city.name)}
//             />
//           ))
  
//         }
//       </div>
//     )
//   };