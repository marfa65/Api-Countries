import React, { useState } from 'react'
import {useDispatch, useSelector, } from'react-redux'
import {Link} from 'react-router-dom'
import {useHistory } from 'react-router-dom'
import postActivity from '../actions/postActivity'

export default function ActivityCreate(){

    const countries = useSelector((state) => state.countries)
    // console.log('countries',countries)
    const dispatch = useDispatch();
    const [values,setValues] = useState({
        name:"",
        difficulty:"",
        duration:"",
        season:"",
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
        
        // history.push("/main")
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
        <form onSubmit={onSubmit}>
        <label htmlFor="">Name: </label>
        <input name="name" value={values.name} onChange={handleOnChange}/>
        <label htmlFor="">Difficulty: </label>
        <input name="difficulty"value={values.difficulty} onChange={handleOnChange}/> {/*enum 1 to 5*/}
        <label htmlFor="">Duration: </label>
        <input name="duration" value={values.duration} onChange={handleOnChange}/>
        <label htmlFor="">Season: </label>
        <input name="season" value={values.season} onChange={handleOnChange}/>  {/*enum prim inv ver ot*/}

        <label htmlFor="">Countries</label>
        <select onChange={handleOnChangeSelect} name="countries" size='5' multiple>
            {
                countries.length &&  countries.map((c)=> <option key={c.id} value={c.id}>{c.name}</option>)
            }
        </select>
        <button type="submit" >Enviar</button>
        <Link to='/home'>Home</Link>
    </form>
    )
}