import React, { useState } from 'react';
import {useDispatch, useSelector, } from'react-redux';
import {Link} from 'react-router-dom';
import style from '../styleComponents/ActivityCreate.module.css';
import postActivity from '../actions/postActivity';

export default function ActivityCreate(){

    const countries = useSelector((state) => state.countries)
    
    const dispatch = useDispatch();
    const [values,setValues] = useState({
        name:"",
        difficulty:"1",
        duration:"",
        season:"summer",
        countries:[]
    })

    const onSubmit = (e) =>{
        console.log('VALUES', values)
        e.preventDefault()
        dispatch(postActivity(values))
        setValues({
            name:"",
            difficulty:"",
            duration:"",
            season:"",
            countries:[]
        })

    }

    const handleOnChange = (e)=>{
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleOnChangeSelect = (e)=>{
        if(values.countries.includes(e.target.value)){
         setValues({
             ...values,
             countries: values.countries.filter(c=> c !== e.target.value)
         })
        }else{
            setValues({
                ...values,
                countries: [...values.countries, e.target.value]
            })
        }
         
     }


    return (
        <div className={style.cont}>
            <form className={style.form} onSubmit={onSubmit}>
                <div className={style.item}>
                <label htmlFor="">Name: </label>
                <input name="name" value={values.name} onChange={handleOnChange}/>
                </div>
                <div className={style.item}>
                <label htmlFor="">Difficulty: </label>
                {/* <input name="difficulty"value={values.difficulty} onChange={handleOnChange}/> */}
                 {/*enum 1 to 5*/}
                <select name="difficulty" onChange={handleOnChange}>
                    <option value="1"> 1 </option> 
                    <option value="2"> 2 </option> 
                    <option value="3"> 3 </option> 
                    <option value="4"> 4 </option> 
                    <option value="5"> 5 </option> 

                </select>
                </div>
                <div className={style.item}>
                <label htmlFor="">Duration: </label>
                <input name="duration" value={values.duration} onChange={handleOnChange}/>
                </div>
                <div className={style.item}>
                <label htmlFor="">Season: </label>
                <select name="season" onChange={handleOnChange}>
                    <option value="summer"> Summer </option> 
                    <option value="autumn"> Autumn </option> 
                    <option value="winter"> Winter </option> 
                    <option value="spring"> Spring </option> 
                </select>
                {/* <input name="season" value={values.season} onChange={handleOnChange}/>   */}
                {/*enum prim inv ver ot*/}
                </div>
                <div className={style.item}>
                <label htmlFor="">Countries: </label>
                <select onChange={handleOnChangeSelect} name="countries" size='8' multiple="multiple">
                    <optgroup label="Countries">
                    {
                        countries.length &&  countries.map((c)=> <option key={c.id} value={c.id}>{c.name}</option>)
                    }
                    </optgroup>
                </select>
                </div>
                <div>
                <button type="submit" >Enviar</button>
                </div>
                        
            </form>
            <Link to='/home'>Home</Link>
        </div>
    )
}