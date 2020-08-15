import React from 'react';
import Exercise from "./exercise"

const Exercises = props=>
            <div>
                <div className="card">
                    <h3>Workouts</h3>
                    {props.exercises.map((exercise,index) => <Exercise key={index} exercise={exercise} handleClick={props.handleClick}/>)}
                </div>
            </div>
 

export default Exercises