import React from "react"

const Exercise = props => <div>
    Workout: {props.exercise.name}-

    Duration: {props.exercise.duration}-

    Calories Burned: {props.exercise.calories}-

    
    <button id={props.exercise.id} onClick={props.handleClick}>X</button></div>


export default Exercise;