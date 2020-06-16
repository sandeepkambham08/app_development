import React from 'react';
import './Person.css';

const person = (props) => {
return (

<div onClick={props.click} className="Person"> 
    <p>I'm {props.name} and I am {props.age} old! YAY </p>
    <p>{props.children}</p>
    <input type="text" onChange={props.changed} value={props.name}></input>
</div>

)}



export default person; 