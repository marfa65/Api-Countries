import React from "react";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import style from '../styleComponents/NavBar.module.css';
import getCountries from '../actions/getCountries';
import getByName from '../actions/getByName';
import paged from '../actions/paged';

export default function NavBar(){
    
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    function handleClick(e){ 
        e.preventDefault();
        dispatch(getCountries());
        dispatch(paged(1));
    }

    function handleInput(e){         
        setInput(e.target.value);
    }
    
    function handleName() {
        dispatch(getByName(input));
        dispatch(paged(1));
        setInput("");
    }

    return (
        <div className={style.cont}>
            <h1 className={style.title}>World tour</h1>
            <button className={style.btn} onClick={e => {handleClick(e)}}>
            Reload
            </button>

            <div>
                <input className={style.input} type="text" placeholder="search country" onChange={handleInput} value={input}/>
                <button className={style.btn2} onClick={() => {handleName()}}> Search</button>
            </div>
            
            <div >
                <Link className={style.link} to='/activityCreate'>Create Activity</Link>
            </div>

        </div>
        
    )
};


