import React from 'react';
import Exercise from "./exercise"

const Exercises = props=>
            <div className="container-md">
                <div className="card">
                    <div className="lead">Workouts</div>
                    {props.exercises.map((exercise,index) => <Exercise key={index} exercise={exercise} handleClick={props.handleClick}/>)}
                </div>
            </div>
 

export default Exercises