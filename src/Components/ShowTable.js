

import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {useDispatch} from "react-redux"
import edit from './Home';
import {Edit} from '../Services/Actions/Actions'


export default function ShowTable(props){
const dispatch = useDispatch();
    const hnadleInput =(e)=>{
        const {name,value}= e.target;
        console.log("<<<<<<",value)
       props.setEdit({...props.edit,[name]: value});


    }
    
    
    return(
        <>
        { 
        <form>
         
            <input  placeholder={props.edit.name} name="name"  onChange={hnadleInput} />
            <br></br>
            <input placeholder={props.edit.trips} name ="trips" onChange={hnadleInput} />
            <br></br>
            <input  placeholder={props.edit.country} name="country" onChange={hnadleInput}/>
            <br></br>
            <input placeholder ={props.edit.head_quaters} name="head_quaters" onChange={hnadleInput}/>
            <br></br>
             <Button variant="contained" color="primary" onClick={()=>{props.setEditTable(false); dispatch(Edit(props.edit))}}>UPDATE</Button>
       </form>
       }


        </>
    )
}

